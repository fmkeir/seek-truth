for collection in $(ls seeds | cut -d'.' -f1)
do mongoimport --host db:27017 --db shindig-server --collection ${collection} --file /seeds/${collection}.json --jsonArray
done