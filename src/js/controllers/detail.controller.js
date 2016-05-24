function DetailController ($http, photoURL, $stateParams, $state) {

  let vm = this;

  init ()
  function init() {
    $http.get(photoURL + $stateParams.photoID).then(function (res) {
      console.log(res);
      vm.allPhotos = res.data;
    });
  }


}

DetailController.$inject = ['$http', 'photoURL', '$stateParams', '$state'];
export { DetailController };
