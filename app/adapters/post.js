import Ember from 'ember';
import DS from 'ember-data';

const {
  RSVP: { resolve },
} = Ember;

export default DS.JSONAPIAdapter.extend({
  findAll() {
    return resolve({
      data: [
        {
          id: 1,
          type: 'post',
          attributes: {
            title: 'This is post #1',
            body: 'It was the best',
          },
          relationships: {
            comments: {
              links: { related: '/posts/1/comments' },
            },
          },
        },
      ],
    });
  },

  // For each comments relationship with a link (each post, not each comment),
  // findHasMany is called with that link.
  findHasMany(store, snapshot, link/*, relationship */) {
    if (link === '/posts/1/comments') {
      return resolve({
        data: [
          {
            id: 11,
            type: 'comment',
            attributes: {
              message: `Comment 11 was loaded via findHasMany`,
            },
          },
        ],
      });
    } else {
      return this._super(...arguments);
    }
  },
});
