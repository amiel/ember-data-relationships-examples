import Ember from 'ember';
import DS from 'ember-data';

const {
  RSVP: { resolve },
  Logger: { log },
} = Ember;

export default DS.JSONAPIAdapter.extend({
  findAll() {
    return resolve({
      data: [
        {
          id: 1,
          type: "post",
          attributes: {
            title: "This is blog post #1",
            body: "This post's comments relationship has a links section",
          },
          relationships: {
            comments: {
              links: { related: "/posts/1/comments" },
            },
          },
        },

        {
          id: 2,
          type: "post",
          attributes: {
            title: "This is blog post #2",
            body: "This post's comments relationship has a data section",
          },
          relationships: {
            comments: {
              data: [
                { id: 21, type: "comment" },
                { id: 22, type: "comment" },
                { id: 23, type: "comment" },
              ],
            },
          },
        },

        {
          id: 3,
          type: "post",
          attributes: {
            title: "This is blog post #3",
            body: "This post has no comments",
          },
        },

        {
          id: 4,
          type: 'post',
          attributes: {
            title: 'This is blog post #4',
            body: 'This post has mixed links and data',
          },
          relationships: {
            comments: {
              links: {
                related: { href: '/posts/4/comments' },
              },
              data: [
                { id: 41, type: 'comment' },
              ],
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
              message: `Comment 11 was loaded via findHasMany in the post adapter`,
            },
          },
        ],
      });
    } else {
      log(this.toString(), "findHasMany called with link", link);
      return this._super(...arguments);
    }
  },
});
