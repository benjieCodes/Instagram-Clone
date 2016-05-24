function DetailController ($http, photoURL, $stateParams, $state, $timeout) {

  let vm = this;
  vm.remove = remove;

  init ()
  function init() {
    $http.get(photoURL + $stateParams.photoID).then(function (res) {
      console.log(res);
      vm.singlePhoto = res.data;
    });
  }

  function remove (photoID) {

    $http.delete(photoURL + photoID).then(function (res) {
      alert('photo deleted')
      $state.go('root.home')
    });
  }
}

DetailController.$inject = ['$http', 'photoURL', '$stateParams', '$state', '$timeout'];
export { DetailController }
