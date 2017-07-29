import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalize(typeClass, hash) {
    let jsonapi = this._super(...arguments);

    if (!jsonapi.data.relationships.comments) {
      jsonapi.data.relationships.comments = {
        links: { related: `/posts/${hash.id}/comments` },
      };
    }

    return jsonapi;
  },
});
