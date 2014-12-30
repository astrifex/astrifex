'use strict'

module.exports = angular.module('astrifex', [
  'ui.bootstrap'
  'ui.router'
  'md5.svg-star'
  require('../../../tmp/templates').name
  require('../common/index').name
  require('./maker/index').name
])
