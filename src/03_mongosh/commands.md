## Connect to container

```sh
docker-compose exec mongodb bash
```

## Connect with mongosh

```sh
mongosh "mongodb://root:root123@localhost:27017/?authMechanism=DEFAULT&tls=false"
```

```sh
show dbs
show collections
```

```sh
use("platzi_store")
db.Products.find()
```