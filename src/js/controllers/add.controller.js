function AddController ($http, photoURL, $state) {

  let vm = this;

  vm.addPhoto = addPhoto;

  function addPhoto(photo) {
    $http.post(photoURL, photo).then(function (res) {
      photo.URL = '';
      photo.desc = '';
      $state.go('root.home');
    })
  }

}
AddController.$inject = ['$http', 'photoURL', '$state'];
export { AddController };
