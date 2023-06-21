#!/bin/bash
IBMCLOUD_API=https://cloud.ibm.com
IBMCLOUD_RESOURCE_GROUP=Default
REGISTRY_URL="us.icr.io"
REGION="us-south"
REGISTRY_TAGS_AND_NAMESPACES=("latest:xpfarm")

# Comes through from travis secure environment variables
IBMCLOUD_APIKEY=$SECURE_IBMCLOUD_APIKEY
