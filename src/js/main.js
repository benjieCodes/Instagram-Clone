import angular from 'angular';
import 'angular-ui-router';

import { config } from './config.js';

import { HomeController }   from './controllers/home.controller';
import { DetailController } from './controllers/detail.controller';
import { AddController }    from './controllers/add.controller';
console.log(HomeController);
console.log(DetailController);
console.log(AddController);

angular
  .module('app', ['ui.router'])
    .config(config)
  .controller('HomeController', HomeController)
  .controller('DetailController', DetailController)
  .controller('AddController', AddController)
;
