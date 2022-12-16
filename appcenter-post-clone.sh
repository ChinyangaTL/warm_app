echo "123PROBANDO"
echo "456PROBANDO" > /dev/null
printf "\nCreating AppCenter key file\n\n"

curl -X POST -H 'Content-type: application/json' --data '{"text":"Hello, World!"}' $SLACK_URL