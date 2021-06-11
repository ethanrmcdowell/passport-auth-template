const passport = require('passport');
const localStrategy = require('passport-local');
const User = require('../models/user');
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

// this code will extract the JWT from the query parameter and verify that
// the token has been signed by the secret or key set during login (TOP_SECRET)
// if the token is valid, the user details are passed on to the next middleware
passport.use(
  new JWTstrategy(
    {
      secretOrKey: 'TOP_SECRET',
      jwtFromRequest: ExtractJWT.fromUrlQueryParameter('secret_token'),
    },
    async (token, done) => {
      try {
        return done(null, token.user);
      } catch (error) {
        done(error);
      }
    }
  )
);

// this signup function will save the information provided by the user to the database,
// will then send the user information to the next middleware if successful.

// const user = await User.create({ email, password });
// return done(null, user);

// passport.use(
//   'signup',
//   new localStrategy(
//     {
//       usernameField: 'email',
//       passwordField: 'password',
//     },
//     (req, email, password, done) => {
// User.findOne({ 'email' : email }), (err, user) => {
//   if (err) {
//     return done(err);
//   } if (user) {
//     return done(null, false, req.flash('message', 'That e-mail address has already been used.'))
//   } else {
//     const user = await User.create({ email, password });
//     return done(null, user);
//   } catch (error) {
//     return done(error);
//   }
//       }
//     }
//   )
// );

passport.use(
  'signup',
  new localStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email: 'email' });

        if (user) {
          return done(null, false, { message: 'User alraedy exists!' });
        } else if (!user) {
          const user = await User.create({ email, password });
          return done(null, user);
        } else {
          return done(null, false, { message: 'OTHER error!' });
        }
      } catch (error) {
        return done(error);
      }
    }
  )
);

// this function finds a user associated with the provided email
passport.use(
  'login',
  new localStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });

        if (!user) {
          return done(null, false, { message: 'User not found' });
        }

        const validate = await user.isValidPassword(password);

        if (!validate) {
          return done(null, false, { message: 'Incorrect password' });
        }

        return done(null, user, { message: 'Success!' });
      } catch (error) {
        return done(error);
      }
    }
  )
);
