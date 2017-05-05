import Ember from 'ember';
import DS from 'ember-data';

import { COMMENT_MESSAGES } from './comment';

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
            body: 'This post has only data, but attempts to sideload or embed some records',
          },
          relationships: {
            comments: {
              data: [
                { id: 11, type: 'comment' },
                { id: 12, type: 'comment' },
                {
                  id: 13,
                  type: 'comment',
                  attributes: {
                    message: "This comment is embedded (and does not work)",
                  },
                },
              ],
            },
          },
        },

        {
          id: 2,
          type: 'post',
          attributes: {
            title: 'This is post #2',
            body: 'It was the best',
          },
          relationships: {
            comments: {
              links: {
                related: { href: '/posts/2/comments' },
              },
            },
          },
        },

        {
          id: 3,
          type: 'post',
          attributes: {
            title: 'This is post #3',
            body: 'This post has mixed links and data',
          },
          relationships: {
            comments: {
              links: {
                related: { href: '/posts/3/comments' },
              },
              data: [
                { id: 31, type: 'comment' },
              ],
            },
          },
        },

      ],

      included: [
        {
          id: 12,
          type: 'comment',
          attributes: {
            message: 'This comment is side-loaded',
          },
        },
      ],
    });
  },

  // For each comments relationship with a link (each post, not each comment),
  // findHasMany is called with that link.
  findHasMany(store, snapshot, link/*, relationship */) {
    if (link === '/posts/2/comments') {
      return resolve({
        data: [
          {
            id: 21,
            type: 'comment',
            attributes: {
              message: `${COMMENT_MESSAGES['21']} loaded via findHasMany`,
            },
          },
        ],
      });
    } else if (link === '/posts/3/comments') {
      return resolve({
        data: [
          {
            id: 31,
            type: 'comment',
            attributes: {
              message: `${COMMENT_MESSAGES['31']} loaded via findHasMany`,
            },
          },
        ],
      });
    } else {
      return this._super(...arguments);
    }
  },
});
