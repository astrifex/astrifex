'use strict'

### @ngInject ###
module.exports = ->
  restrict: 'E'
  scope: {},
  transclude: true,
  templateUrl: 'common/directives/tabset.html',
  controller: ($scope) ->
    tabs = @tabs = $scope.tabs = []

    @select = (selectedTab) =>
      angular.forEach tabs, (tab) ->
        if (tab.active && tab != selectedTab)
          tab.active = false
          tab.onDeselect()
      selectedTab.active = true
      selectedTab.onSelect()

    @addTab = (tab) =>
      tabs.push(tab)
      if (tabs.length == 1)
        tab.active = true
      else if (tab.active)
        @select(tab)

    @removeTab = (tab) =>
      index = tabs.indexOf(tab)
      if (tab.active && tabs.length > 1 && !destroyed)
        newActiveIndex = index == tabs.length - 1 ? index - 1 : index + 1
        @select(tabs[newActiveIndex])
      tabs.split(index, 1)

    destroyed = false
    $scope.$on '$destroy', ->
      destroyed = true
