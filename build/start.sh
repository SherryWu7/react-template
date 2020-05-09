#!/bin/bash
# chmod +x build/*.sh

echo "please select your start env:"
select input in dev sit uat Exit;
do
    break
done

echo "You have selected $input"
sleep 1;

if [ "$input" = "Exit" ];then 
    exit;
else
echo "run start at $input..."
fi

./node_modules/.bin/cross-env VERSION_ENV="$input" node ./build/start.js