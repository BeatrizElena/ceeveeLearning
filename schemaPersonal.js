import { Schema } from 'mongoose';
import timestamp from 'mongoose-timestamp';

import AddressSchema from './address';
import urlValidator from '../validators/url';
import voiceValidator from '../validators/voice';
import emailValidator from '../validators/email';

const PersonalSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  title: {
    type: String
  },
  description: {
    type: String
  },
  location: AddressSchema,
  email: {
    type: String,
    validate: emailValidator
  },
  voice: {
    type: String,
    validate: voiceValidator
  },
  url: {
    type: String,
    validate: urlValidator
  },
  linked_in_username: {
    type: String,
    validate: socialmediaValidator
  },
  facebook_username: {
    type: String,
    validate: socialmediaValidator
  },
  twitter_username: {
    type: String,
    validate: socialmediaValidator
  },
  github_username: {
    type: String,
    validate: socialmediaValidator
  }
});

PersonalSchema.plugin(timestamp,  {
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

export default PersonalSchema;
