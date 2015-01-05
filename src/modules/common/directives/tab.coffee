'use strict'

### @ngInject ###
module.exports = ->
  require: '^tabset',
  restrict: 'E',
  scope: {
    active: '=?',
    heading: '@',
    onSelect: '&select',
    onDeselect: '&deselect'
  },
  transclude: true,
  # replace=true is deprecated, but bootstrap styling doesn't get picked up otherwise
  replace: true,
  templateUrl: 'common/directives/tab.html',
  controller: ->,
  compile: (elm, attrs, transclude) ->
    return (scope, elm, attrs, tabsetCtrl) ->
      scope.$watch 'active', (active) ->
        if (active)
          tabsetCtrl.select(scope)

      scope.disabled = false
      if (attrs.disabled)
        scope.$parent.$watch $parse(attrs.disabled), (value) ->
          scope.disabled = !!value

      scope.select = ->
        if (!scope.disabled)
          scope.active = true

      tabsetCtrl.addTab(scope)
      scope.$on '$destroy', ->
        tabsetCtrl.removeTab(scope)

      scope.$transcludeFn = transclude
