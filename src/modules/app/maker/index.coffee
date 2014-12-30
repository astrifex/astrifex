'use strict'

module.exports = angular.module('astrifex.maker', [])
    .config(($stateProvider) ->
      $stateProvider.state 'maker',
      url: ''
      templateUrl: 'app/maker/layout.html'
      controller: 'makerController'
      return
).controller('makerController', require('./makerController'))
