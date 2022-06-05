# Graphql & React Simple Tutorial

This is a simple tutorial that helps you to develop graphql server using node.js and express and frontend with react.js

## Available Scripts

In the project directory, you can run:

### `npm install`

### `npm start`

## Test GraphQL Server

After starting the server, please go to http://localhost:5000/graphql

You can use these two queries.

```gql
query getSingleImage($imageId: Int!) {
    image(id: $imageId) {
        title
        owner
        category
        url
    }
}

query getImagesByCategory($imageCategory: String) {
    images(category: $imageCategory) {
        id
        title
        owner
        url
        category
    }
}
```

For query variables, please use this.

```json
{
    "imageId": 1,
    "imageCategory": "Desserts"
}
```
