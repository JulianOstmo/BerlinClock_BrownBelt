#!/bin/sh

# Force script to stop as soon as something fails, rather than continuing
set -o pipefail
set -e

APP_NAME=berlinclock_julianostmo
CONFIG_FILE_PATH="./scripts/config/global.sh"

# Include variables:
# IBMCLOUD_API
# IBMCLOUD_RESOURCE_GROUP
# REGISTRY_URL
# REGION
# REGISTRY_TAGS_AND_NAMESPACES
# IBMCLOUD_APIKEY
source $CONFIG_FILE_PATH

echo "Starting build for: $APP_NAME";

# IBM Cloud API Setup & Login
if ! [ -x "$(command -v ibmcloud)" ]; then
  echo 'IBM Cloud CLI is not installed. Installing...' >&2
  curl -sL https://ibm.biz/idt-installer | bash
fi

# Check if commit sha is provided by Travis to use it as main image tag
if [ -n "${TRAVIS_COMMIT}" ]; then
    IMAGE_TAG="${TRAVIS_COMMIT}"
else
    echo "[ERROR] No commit tag provided"
    exit 1
fi

# Check if DOCKERHUB_USERNAME and DOCKERHUB_PASSWORD variables are provided
# if [[ -z "${DOCKERHUB_USERNAME}" ]] || [[ -z "${DOCKERHUB_PASSWORD}" ]]; then
#     echo 'No DOCKERHUB_USERNAME or DOCKERHUB_PASSWORD provided'
#     exit 1
# fi

# Login into DockerHub
# echo "$DOCKERHUB_PASSWORD" | docker login -u "$DOCKERHUB_USERNAME" --password-stdin

echo "Build image: ${APP_NAME}:${IMAGE_TAG}"
docker build . -t "${APP_NAME}:${IMAGE_TAG}"

echo "Login on IBM Cloud"
ibmcloud login -a $IBMCLOUD_API --apikey $IBMCLOUD_APIKEY --no-region

echo "Target IBM Cloud region '${REGION}' for resource group '${IBMCLOUD_RESOURCE_GROUP}'"
ibmcloud target -r $REGION -g $IBMCLOUD_RESOURCE_GROUP
ibmcloud cr login

# The image should be pushed to the registries in the same region of the given env clusters
for kv in "${REGISTRY_TAGS_AND_NAMESPACES[@]}"
do
    IMAGESTREAM_TAG=${kv%%:*}
    REGISTRY_NAMESPACE=${kv#*:}
    # For the image to be pushed, its name must include the registry base path, the namespace and the repository (name of the application)
    APP_UNIQUE_ID="${REGISTRY_URL}/${REGISTRY_NAMESPACE}/${APP_NAME}"
    docker tag "${APP_NAME}:${IMAGE_TAG}" "$APP_UNIQUE_ID:${IMAGE_TAG}"

    echo "Push image to registry $APP_UNIQUE_ID:${IMAGE_TAG}"
    docker push "$APP_UNIQUE_ID:${IMAGE_TAG}"

    echo "Tag image on the Registry: ${APP_UNIQUE_ID}:${IMAGESTREAM_TAG}"
    ibmcloud cr image-tag "${APP_UNIQUE_ID}:${IMAGE_TAG}" "${APP_UNIQUE_ID}:${IMAGESTREAM_TAG}"
done
# end foreach

# docker logout

echo "Build and Save succesfully finished for ${APP_NAME}"
