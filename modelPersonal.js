import mongoose from 'mongoose';
import BaseModel from './base';
import PersonalSchema from '../schemas/personal';

/**
 * Personal and contact information.
 */
class PersonalModel extends BaseModel {

  // =instance methods

  /**
   * Converts model instance to a plain object appropriate for
   * JSON stringification.
   * @return {object} plain object representation of this instance
   */
  toJSON() {
    return {
      id: this._id,
      user_id: this.getIDFor('user'),
      name: this.name,
      title: this.title,
      description: this.description,
      location: this.location.toJSON(),
      email: this.email,
      voice: this.voice,
      url: this.url,
      linked_in_username: this.linked_in_username,
      facebook_username: this.facebook_username,
      twitter_username: this.twitter_username,
      github_username: this.github_username,
      updated_at: this.updated_at,
      created_at: this.created_at
    }
  };

  // =class methods

}

SkillSchema.loadClass(SkillModel);

export default mongoose.model('Skill', SkillSchema);
