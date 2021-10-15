//import angular from 'angular';
//import '@uirouter/angularjs';

// Import your app stylesheets
//import './style.css';

// Import your app functionality
// import './home'

// Create and bootstrap application
// const requires = [
//   'ui.router',
//   'home'
// ];

var app = angular.module('first', []);

app.controller('mainCtrl', function (mainSvc) {
  var vm = this;

  mainSvc.getPosts().then(function (resp) {
    vm.posts = resp.data;
  });

  this.hello = 'world';

  this.fruits = ['Mela', 'Pera', 'Banana'];

  this.alertMe = function () {
    alert('Pippo');
  };
});

//filtro custom
app.filter('makePlural', function () {
  return function (input) {
    return input + 's';
  };
});

app.service('mainSvc', function ($http) {
  this.getPosts = function () {
    return $http.get('https://jsonplaceholder.typicode.com/posts');
  };
});

app.component('postsList', {
  templateUrl: 'posts-list.html',
  //controller: PostsListController,
  //controllerAs: 'vm'
});

angular.bootstrap(document.getElementById('first'), ['first']);
