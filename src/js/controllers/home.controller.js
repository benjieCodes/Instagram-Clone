function HomeController ($http, photoURL) {

  let vm = this;

  init()

  function init() {
    $http.get(photoURL).then(function (res) {
      vm.allPhotos = res.data;
    })

  }
}
HomeController.$inject = ['$http', 'photoURL'];
export { HomeController };
