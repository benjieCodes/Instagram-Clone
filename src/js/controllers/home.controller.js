function HomeController ($http, photoURL) {

  let vm = this;
  vm.liked = liked;
  

  init()

  function init() {
    $http.get(photoURL).then(function (res) {
      vm.allPhotos = res.data;
    })
  }

  function liked () {

  }


}
HomeController.$inject = ['$http', 'photoURL'];
export { HomeController };
