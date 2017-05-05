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
            body: 'It has content',
          },
        },

        {
          id: 2,
          type: 'post',
          attributes: {
            title: 'This is post #2',
            body: 'It was the best',
          },
        },

      ],
    });
  },
});
