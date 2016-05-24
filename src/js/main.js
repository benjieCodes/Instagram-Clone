import angular from 'angular';
import 'angular-ui-router';

import { config } from './config.js';

import { HomeController }   from './controllers/home.controller';
import { DetailController } from './controllers/detail.controller';
import { AddController }    from './controllers/add.controller';

const photoURL = 'https://secret-forest-21470.herokuapp.com/collections/benjiegramPhotos/';

angular
  .module('app', ['ui.router'])
    .config(config)
  .constant('photoURL', photoURL)
  .controller('HomeController', HomeController)
  .controller('DetailController', DetailController)
  .controller('AddController', AddController)
;
