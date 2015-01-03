'use strict'

module.exports = angular.module('astrifex', [
  'ui.router'
  'astrifex.svg-star'
  require('../templates').name
  require('../common/index').name
  require('./maker/index').name
])
