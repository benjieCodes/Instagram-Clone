function config ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })
    .state('root.home', {
      url: '/',
      templateUrl: 'templates/home.tpl.html',
      controller: 'HomeController as vm'
    })
    .state('root.detail', {
      url: '/detail/:photoID', 
      templateUrl: 'templates/detail.tpl.html',
      controller: 'DetailController as vm'
    })
    .state('root.add', {
      url: '/add',
      templateUrl: 'templates/add.tpl.html',
      controller: 'AddController as vm'
    })
  ;
}
config.$inject = ['$stateProvider', '$urlRouterProvider'];
export { config };
