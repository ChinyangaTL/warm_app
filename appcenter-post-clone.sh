# if [[ -z ${APPCENTER_ANDROID_VARIANT} && -z ${APPCENTER_ANDROID_MODULE} ]];
# then
#   echo "is iOS"
#   curl -X POST -H 'Content-type: application/json' --data '{"text":"Hello, from iOS!"}' $SLACK_URL
#   curl -X POST -H 'Content-type: application/json' --data '{"text":"$APPCENTER_SOURCE_DIRECTORY/ios/holdedmobile/AppCenter-Config.plist"}' $SLACK_URL

#   echo $APPCENTER_SOURCE_DIRECTORY/ios/holdedmobile/AppCenter-Config.plist
#   exit
# fi

# if [[ -z ${APPCENTER_XCODE_PROJECT} && -z ${APPCENTER_XCODE_SCHEME} ]];
# then
#   echo "is Android"
#   curl -X POST -H 'Content-type: application/json' --data '{"text":"Hello, from Android!"}' $SLACK_URL
#   exit
# fi

# COMMIT_ID=$(git rev-parse HEAD)

# echo $COMMIT_ID

# curl -X POST -H 'Content-type: application/json' --data '{"text":"Hello, from $COMMIT_ID!"}' $SLACK_URL

COMMIT_ID=$(git rev-parse HEAD)

echo $COMMIT_ID

curl -X POST -H "Content-type: application/json" -H "Authorization: Bearer $GITHUB_TOKEN" \ --data '{  "commit_id": "$COMMIT_ID",  "build_id": "$APPCENTER_BUILD_ID",  "os": "$APPCENTER_BUILD_AGENT_OS",  "status": "$AGENT_JOBSTATUS",}' https://api.github.com/repos/nicolascavallin/warm_app/actions/workflows/from_appcenter2.yml/dispatches