import Ember from 'ember';
import DS from 'ember-data';

const {
  Logger: { log },
} = Ember;

export default DS.JSONAPIAdapter.extend({
  // For each comment in relationships without data, findRecord is called.
  findRecord(store, type, id/*, snapshot */) {
    log(this.toString(), 'findRecord for', type.modelName, id);

    return {
      data: {
        id: id,
        type: type.modelName, // In our case, this is always 'comment'
        attributes: {
          message: `Comment ${id} was loaded via findRecord in the comment adapter`,
        },
      },
    };
  },
});
