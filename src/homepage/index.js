var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/', function (ctx, next) {
  title('Platzigram');
  var main = document.getElementById('main-container');

  var pictures = [
    {
      user: {
        username: 'slifszyc',
        avatar: 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/11705294_10154102081697846_6063819715923358952_n.jpg?oh=7974667a7c5db1c1b37f95c6f50df48b&oe=57F5A3A3'
      },
      url: 'office.jpg',
      likes: 10,
      liked: false
    },
    {
      user: {
        username: 'slifszyc',
        avatar: 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/11705294_10154102081697846_6063819715923358952_n.jpg?oh=7974667a7c5db1c1b37f95c6f50df48b&oe=57F5A3A3'
      },
      url: 'office.jpg',
      likes: 2,
      liked: true
    }
  ];

  empty(main).appendChild(template(pictures));
})
