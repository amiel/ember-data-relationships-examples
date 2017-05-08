import DS from 'ember-data';

export const COMMENT_MESSAGES = {
  '11': "This is comment 11",
  '12': "This is comment 12",
  '13': "This is comment 13",
  '21': "This is comment 21",
  '22': "This is comment 22",
  '31': "This is comment 31",
};

export default DS.JSONAPIAdapter.extend({
  // For each comment in relationships without data, findRecord is called.
  findRecord(store, type, id/*, snapshot */) {
    return {
      data: {
        id: id,
        type: type.modelName,
        attributes: {
          message: `${COMMENT_MESSAGES[id]} loaded via findRecord`,
        },
      },
    };
  },
});
