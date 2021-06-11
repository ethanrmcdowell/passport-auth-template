const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors');

const PORT = process.env.PORT || 3000;
const User = require('./models/user');
const app = express();

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

if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static('client/build'));
  // Express serve up index.html file if it doesn't recognize route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'));
  });
}

require('./auth/auth');

const routes = require('./routes/routes');
const secureRoute = require('./routes/secure-routes');

app.use(cors());

app.use('/', routes);

app.use('/user', passport.authenticate('jwt', { session: false }), secureRoute);

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({ error: err });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
