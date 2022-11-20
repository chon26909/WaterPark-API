import { Document, model, Schema, SchemaOptions } from 'mongoose';

interface IUserDocument extends Document {
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  password: string;
  salt: string;
  photoUrl: string;
}

const options: SchemaOptions = {
  toJSON: {
    transform(doc, ret) {
      delete ret._id;
      delete ret.password;
      delete ret.salt;
      delete ret.createAt;
      delete ret.updateAt;
    },
  },
};

const userSchema = new Schema(
  {
    firstname: { type: String },
    lastname: { type: String },
    phone: { type: String },
    email: { type: String },
    password: { type: String },
    salt: { type: String },
    photoUrl: { type: String },
  },
  options
);

const User = model<IUserDocument>('users', userSchema);

export default User;
