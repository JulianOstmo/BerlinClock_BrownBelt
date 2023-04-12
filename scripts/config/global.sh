#!/bin/bash
IBMCLOUD_API=https://cloud.ibm.com
IBMCLOUD_RESOURCE_GROUP=staging
REGISTRY_TAGS_AND_NAMESPACES=("dev:microservice_template" "stage:microservice_template")

# Comes through from travis secure environment variables
IBMCLOUD_APIKEY=$SECURE_IBMCLOUD_APIKEY
