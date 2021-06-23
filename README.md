# AUTHENTICATION TEMPLATE :lock: :key:

## TABLE OF CONTENTS

-[Description](#Description)

-[Technologies](#Technologies)

-[Install](#Install)

-[Contact](#Contact)

## DESCRIPTION

-This application is an authentication template to be used as starter code for other projects requiring user registration & login. It relies on a MongoDB database for authentication, which can be easily updated in the server.js file for your personal database information.

-Will redirect to an essentially empty dashboard component upon successful authentication. This dashboard route is private and requires a JSON Web Token saved into the Redux global store in order to access.

## TECHNOLOGIES

-[Passport.js](http://www.passportjs.org/)

-[Redux](https://redux.js.org/)

-[JSON Web Tokens](https://jwt.io/)

-[Axios](https://www.npmjs.com/package/axios)

-[Mongoose](https://mongoosejs.com/)


## INSTALL

```
npm install
cd client
npm install
```

In order to connect to your own personal MongoDB Users database, you will have to adjust the server.js file.

```javascript
mongoose.connect(<DB link goes here>, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
```

## CONTACT

:link: ethanrmcdowell.com
  
:e-mail: ethan.r.mcdowell@gmail.com
