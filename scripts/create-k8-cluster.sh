CLUSTER_NAME=xpfarm

# Get K8 cluster ID
IKS_CLUSTER_ID=$(ibmcloud ks cluster ls --output json | jq -c '.[] | select( .name == "'$CLUSTER_NAME'" )' | jq -c '.id')

if [ -z "$IKS_CLUSTER_ID" ]; then
    # Create K8 cluster (free tier)
    ibmcloud ks cluster create classic --name $CLUSTER_NAME

    # Get K8 cluster state
    CLUSTER_STATE=$(ibmcloud ks cluster get --cluster $CLUSTER_NAME --output json | jq -c '.state')

    while [ CLUSTER_STATE != "normal" ]; do
        sleep 30s
        # Get K8 cluster state
        CLUSTER_STATE=$(ibmcloud ks cluster get --cluster $CLUSTER_NAME --output json | jq -c '.state')
    done
fi

echo "cluster ready: $IKS_CLUSTER_ID"
