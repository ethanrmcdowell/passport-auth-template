const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// the pre() function is called pre-hook, so before the password is saved into the DB it will be hashed
// bcrypt.hash takes two parameters: the password, then the 'cost' which refers to how secure it will be
// a higher cost means more secure, but takes more computing power, which will affect performance.
// finally, calling the next() function allows the program to move onto the next middleware.
UserSchema.pre('save', async function (next) {
  const user = this;
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
});

// this function compares the password provided to the user to the password store, returns a boolean.
UserSchema.methods.isValidPassword = async function (password) {
  const user = this;
  const compare = await bcrypt.compare(password, user.password);
  return compare;
};

const User = mongoose.model('user', UserSchema);

module.exports = User;
