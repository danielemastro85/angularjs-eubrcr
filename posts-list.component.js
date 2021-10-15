function PostsListController(mainSvc) {
  var vm = this;

  mainSvc.getPosts().then(function (resp) {
    vm.posts = resp.data;
  });

}

app.component('postsList', {
  templateUrl: 'posts-list.html',
  controller: PostsListController,
  controllerAs: 'vm'
});
