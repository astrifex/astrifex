'use strict'

### @ngInject ###
module.exports = ->
  restrict: 'E',
  templateUrl: 'common/directives/paintSelector.html',
  scope: {
    paint: '='
  },
  link: (scope, element, attrs) ->
    if scope.paint == 'none'
      scope.paintType = 'none'
    else
      scope.paintColor = scope.paint
      scope.paintType = 'color'

    scope.$watchGroup ['paintType','paintColor'], ->
      scope.paint = switch (scope.paintType)
        when 'color' then scope.paintColor
        else 'none'
