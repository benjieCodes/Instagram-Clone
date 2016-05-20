import angular from 'angular';
import 'angular-ui-router'


import { config } from './config.js';


angular
  .module('app', ['ui.router'])
    .config(config)
;
