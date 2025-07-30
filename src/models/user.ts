import mongoose, {Schema, model, models} from "mongoose";

const userSchema = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  image: {type: String, required: true},
  emailVerified: {type: Date, default: null},
  
})