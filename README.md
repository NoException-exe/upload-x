## Description

API created using NestJS and PostgreSQL, with functionalities for uploading and downloading files. Documentation is done with Swagger, making it easier to understand and use the API.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode

$ npx prisma migrate deploy && npm run start:prod 
```

## Config 
In this `app.config.json` you can add the Types you want to accept upload. and the maximum file size is in mega bytes, by default it only accepts zip files with a size of 50mb
```
{
  "allowedTypes": ["application/zip", "application/x-zip-compressed"],
  "maxSize": 50
}
```

## Test app with Swagger

```
http://localhost:3000/docs
```
