# ember-data-relationships-examples

This ember app contains examples to demonstrate the concepts discussed in my blog series: "[How Ember Data Loads Async Relationships][]".

[How Ember Data Loads Async Relationships]: http://www.amielmartin.com/blog/2017/05/05/how-ember-data-loads-relationships-part-1/

## Installation

* `git clone https://github.com/amiel/ember-data-relationships-examples.git` this repository
* `cd ember-data-relationships-examples`
* `yarn install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## What's Inside

This example application is a psuedo blog. It has posts and comments and other relationships on the post to demonstrate various scenarios of loading data through relationships.

All of the data is hard-coded as JSON:API in the adapters. This results in some long files with data. The benefit, though, is that it makes it very obvious which adapter callback is called for each piece of data.



