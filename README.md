# AUTHENTICATION TEMPLATE :lock: :key:

## TABLE OF CONTENTS

-[Description](#Description)

-[Technologies](#Technologies)

-[Install](#Install)

-[Contact](#Contact)

## DESCRIPTION

-This application is an authentication template to be used as starter code for other projects requiring user login. It relies on a MongoDB database for authentication, which can be easily updated in the server.js file for your personal database information.

-

-

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
