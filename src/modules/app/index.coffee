'use strict'

module.exports = angular.module('astrifex', [
  'ui.router'
  'ui.bootstrap.showErrors'
  'astrifex.svg-star'
  'angulartics'
  'angulartics.google.analytics'
  require('../templates').name
  require('../common/index').name
  require('./maker/index').name
])
