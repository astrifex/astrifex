'use strict'

module.exports = angular.module('astrifex', [
  'ui.bootstrap'
  'ui.router'
  require('../../../tmp/templates').name
  require('../common/index').name
  require('./maker/index').name
])
