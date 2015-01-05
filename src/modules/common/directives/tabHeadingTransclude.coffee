'use strict'

### @ngInject ###
module.exports = ->
  restrict: 'A',
  require: '^tab',
  link: (scope, elm, attrs, tabCtrl) ->
    scope.$watch 'headingElement', (heading) ->
      if (heading)
        elm.html ''
        elm.append heading
