function HomeController ($http, photoURL) {

  let vm = this;
  vm.liked = liked;
  vm.likeDesc = 'Likes';

  init()

  function init() {
    $http.get(photoURL).then(function (res) {
      vm.allPhotos = res.data;
    })
  }

  function liked (photo) {

    let totalLikes = photo.likes;
    photo.likeDesc = (totalLikes === 0) ? "Like" : "Likes";
    photo.likes = totalLikes + 1;
    $http.put(photoURL + photo._id, photo);
  }

}
HomeController.$inject = ['$http', 'photoURL'];
export { HomeController };
