import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  name: String,
  passward: String,
});

const User = model('User', userSchema);

export default User;
