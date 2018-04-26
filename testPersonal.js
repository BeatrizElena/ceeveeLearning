import { assert } from 'chai';

import User from '../../../app/models/user';
import Personal from '../../../app/models/personal';


let user;
let personalData;

describe ('Unit: Model: Personal', () => {

  beforeEach(() => {
    user = new User({email: 'test@test.com', password: 'test1234'});
    personalData = {
      user: user,
      name: 'Randy',
      title: 'Developer',
      description: 'Develop web apps',
      location: {
        street_address: '-1/2 Main St',
        locality: 'Prague',
        region: 'Prague',
        postal_code: '199 00',
        country_name: 'Czech Republic'
      },
      voice: '401-123-4567',
      url: 'url'
      linked_in_username: 'githubuser',
      facebook_username: 'facebookuser',
      twitter_username: 'twitteruser',
      github_username: 'githubuser'
    };
  });

  describe('validate', () => {
    it('should pass on valid values', async () => {
      const personal = new Personal(personalData);
      await personal.validate();
      assert.ok(personal, 'valid values produce no error');
    });
    it('should fail on no values specified', () => {
      const personal = new Personal();
      const err = personal.validateSync();
      assert.equal(err.name, 'ValidationError', 'instance does not validate');
    });
    it('should fail on missing user', () => {
      const personal = new Personal(personalData);
      personal.user = undefined;
      const err = personal.validateSync();
      assert.equal(err.name, 'ValidationError', 'instance does not validate');
    });
    it('should fail on missing name', () => {
      const personal = new Personal(personalData);
      personal.name = undefined;
      const err = personal.validateSync();
      assert.equal(err.name, 'ValidationError', 'instance does not validate');
    });
    it('should fail on missing title', () => {
      const personal = new Personal(personalData);
      personal.title = undefined;
      const err = personal.validateSync();
      assert.equal(err.name, 'ValidationError', 'instance does not validate');
    });
    it('should fail on missing description', () => {
      const personal = new Personal(personalData);
      personal.description = undefined;
      const err = personal.validateSync();
      assert.equal(err.name, 'ValidationError', 'instance does not validate');
    });
    it('should fail on missing location', () => {
      const personal = new Personal(personalData);
      personal.location = undefined;
      const err = personal.validateSync();
      assert.equal(err.name, 'ValidationError', 'instance does not validate');
    });
    it('should fail on missing email', () => {
      const personal = new Personal(personalData);
      personal.email = undefined;
      const err = personal.validateSync();
      assert.equal(err.name, 'ValidationError', 'instance does not validate');
    });
    it('should fail on missing voice', () => {
      const personal = new Personal(personalData);
      personal.voice = undefined;
      const err = personal.validateSync();
      assert.equal(err.name, 'ValidationError', 'instance does not validate');
    });

  describe('toJSON()', () => {
    it('should return correct JSON', () => {
      const instance = new Personal(personalData);
      const json = instance.toJSON();
      const expectedJSON = {
        id: instance._id,
        user_id: instance.user._id,
        name: instance.name,
        title: instance.title,
        description: instance.description,
        location: instance.location,
        email: instance.email,
        voice: instance.voice,
        updated_at: instance.updated_at,
        created_at: instance.created_at
      };
      assert.deepEqual(json, expectedJSON);
    });
    it('should include user ID if populated', () => {
      const instance = new Personal(personalData);
      const json = instance.toJSON();
      assert.equal(json.user_id, instance.user._id);
    });
    it('should include user ID if unpopulated', () => {
      const instance = new Personal(personalData);
      instance.user = instance.user._id;
      const json = instance.toJSON();
      assert.equal(json.user_id, instance.user);
    });
  });

});
