![fetch-firestore-types banner](./readme-banner.jpg)

# Generate Typesript types from Appwrite Databases

![npm](https://img.shields.io/npm/dt/fetch-appwrite-types)
![npm](https://img.shields.io/npm/v/fetch-appwrite-types)

## Quick usage
Make sure ton add the following values to your ```.env``` :
```FIREBASE_PROJECT_ID```
```FIREBASE_PRIVATE_KEY```
```FIREBASE_CLIENT_EMAIL```

Then run the following command :

```bash
npx fetch-firestore-types
```

## Installation
```bash
# yarn
yarn add fetch-firestore-types

# npm
npm install fetch-firestore-types
```

Make sure ton add the following values to your ```.env``` :
```FIREBASE_PROJECT_ID```
```FIREBASE_PRIVATE_KEY```
```FIREBASE_CLIENT_EMAIL```

```javascript
import { FetchNewTypes } from "fetch-firestore-types/dist/main";

await FetchNewTypes();
```

## Parameters
| Name     | Default value  | Description                                        |
|----------|----------------|----------------------------------------------------|
| outDir   | ```"/types"``` | The folder where the type file will be generated   |
| queryResultsLength | ```25```        | Number of items per collection to creates types on |

### Usage
#### CLI
Params can be passed as arguments in any order, except for the outDir which might be followed by the path.
```bash
npx fetch-appwrite-types includeDBName outDir /types queryResultsLength 50
```

#### Library
```javascript
await FetchNewTypes({
    outDir: "/types",
    queryResultsLength: 50,
})
```

## Handled types
| Appwrite type    | Generated type (simple) |
|------------------|-------------------------|
| String           | ```string```            |
| Integer / Double | ```integer```           |
| Boolean          | ```boolean```           |
| Null             | ```null```              |
| Array            | ```Array<any>```        |
| Object           | ```Object```            |
