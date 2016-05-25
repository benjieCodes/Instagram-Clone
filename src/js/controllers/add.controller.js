function AddController ($http, photoURL, $state) {

  let vm = this;
  vm.addPhoto = addPhoto;

  function addPhoto(photo) {

    photo.likes = 0
    photo.likeDesc = 'Likes'

    if (photo.URL.substring(0,4) === 'http' || photo.URL.substr(-4) === 'jpeg' || photo.URL.substr(-3) === 'png')   {
      photo.URL = photo.URL;
    } else {
      photo.URL = 'http://placehold.it/300x300';
    }

    $http.post(photoURL, photo).then(function (res) {
      $state.go('root.home');
    })
  }

}
AddController.$inject = ['$http', 'photoURL', '$state'];
export { AddController };
