# echo "123PROBANDO"
# echo "456PROBANDO" > /dev/null
# printf "\nCreating AppCenter key file\n\n"

# file_ios="$APPCENTER_SOURCE_DIRECTORY/ios/WarmApp/AppCenter-Config.plist"
# echo "<?xml version=\"1.0\" encoding=\"UTF-8\"?>" >> $file_ios
# echo "<!DOCTYPE plist PUBLIC \"-//Apple//DTD PLIST 1.0//EN\" \"https://www.apple.com/DTDs/PropertyList-1.0.dtd\">" >> $file_ios
# echo "<plist version=\"1.0\">" >> $file_ios
# echo "<dict>" >> $file_ios
# echo "<key>AppSecret</key>" >> $file_ios
# echo "<string>${APP_CENTER_SECRET}</string>" >> $file_ios
# echo "</dict>" >> $file_ios
# echo "</plist>" >> $file_ios

# cat $file_ios

# printf "\niOS AppCenter Plist file created\n\n"

echo "APPCENTER_XCODE_PROJECT"
echo $APPCENTER_XCODE_PROJECT
echo "APPCENTER_XCODE_SCHEME"
echo $APPCENTER_XCODE_SCHEME
echo "APPCENTER_ANDROID_VARIANT"
echo $APPCENTER_ANDROID_VARIANT
echo "APPCENTER_ANDROID_MODULE"
echo $APPCENTER_ANDROID_MODULE
echo "APPCENTER_OUTPUT_DIRECTORY"
echo $APPCENTER_OUTPUT_DIRECTORY
echo "APP_CENTER_CURRENT_PLATFORM"
echo $APP_CENTER_CURRENT_PLATFORM


curl -X POST -H 'Content-type: application/json' --data '{"text":"Hello, World!"}' $SLACK_URL