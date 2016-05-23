function AddController ($http, photoURL, $state) {
  let vm = this;
  vm.addPhoto = addPhoto;
  function addPhoto(photo) {
    $http.post(photoURL, photo).then(function (res) {
      console.log(res);
    })
  }

}
AddController.$inject = ['$http', 'photoURL', '$state'];
export { AddController };
