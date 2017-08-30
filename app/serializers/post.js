import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalize() {
    let jsonapi = this._super(...arguments);

    if (!jsonapi.data.relationships.comments) {
      jsonapi.data.relationships.comments = {
        links: { related: 'urlTemplate:comments' },
      };
    }

    return jsonapi;
  },
});
