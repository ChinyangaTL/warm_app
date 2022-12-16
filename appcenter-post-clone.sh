if [[ -z ${APPCENTER_ANDROID_VARIANT} && -z ${APPCENTER_ANDROID_MODULE} ]];
then
  echo "is iOS"
  curl -X POST -H 'Content-type: application/json' --data '{"text":"Hello, from iOS!"}' $SLACK_URL
fi

if [[ -z ${APPCENTER_XCODE_PROJECT} && -z ${APPCENTER_XCODE_SCHEME} ]];
then
  echo "is Android"
  curl -X POST -H 'Content-type: application/json' --data '{"text":"Hello, from Android!"}' $SLACK_URL
fi