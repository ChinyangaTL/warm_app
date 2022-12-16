echo "123PROBANDO"
echo "456PROBANDO" > /dev/null
printf "\nCreating AppCenter key file\n\n"
curl --write-out '%{http_code}' \
    --silent \
    --output /dev/null \
    --request POST \
    --header 'Content-Type: application/json' \
    --url '${{ secrets.SLACK_URL }}' \
    --data '{
      "text": "Hello from post clone",
    }'