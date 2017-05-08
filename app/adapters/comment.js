import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  // For each comment in relationships without data, findRecord is called.
  findRecord(store, type, id/*, snapshot */) {
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
