'use strict'

module.exports = angular.module('astrifex.common.directives', [])
  .directive('paintSelector', require('./paintSelector'))
  .directive('tab', require('./tab'))
  .directive('tabContentTransclude', require('./tabContentTransclude'))
  .directive('tabHeadingTransclude', require('./tabHeadingTransclude'))
  .directive('tabset', require('./tabset'))
