const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;
const User = require('./models/user');

mongoose.connect(
  process.env.MONGODB_URI ||
    'mongodb+srv://ethanrmcdowell:hotchkiss89@cluster0.cmkyl.mongodb.net/feels-good?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

require('./auth/auth');

const routes = require('./routes/routes');
const secureRoute = require('./routes/secure-routes');

const app = express();

app.use('/', routes);

app.use('/user', passport.authenticate('jwt', { session: false }), secureRoute);

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({ error: err });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
