'use strict'

module.exports = angular.module('astrifex.maker', ['ui.router'])
    .config(($stateProvider) ->
      $stateProvider.state 'maker',
      url: ''
      templateUrl: 'app/maker/layout.html'
      controller: 'makerController'
      return
).controller('makerController', require('./makerController'))
