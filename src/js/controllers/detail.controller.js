function DetailController ($http, photoURL, $state) {
  let vm = this;

  init()

  function init() {
    $http.get(photoURL).then(function (res) {
      vm.allPhotos = res.data;
      console.log(res);
    })


  }
}
DetailController.$inject = ['$http', 'photoURL', '$state' ];
export { DetailController };
