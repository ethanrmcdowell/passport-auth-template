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

const path = require('path');
const publicPath = path.join(__dirname, '/client/public');
app.use(express.static(publicPath));
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'));
//   const path = require('path');
//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'));
//   });
// }

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
