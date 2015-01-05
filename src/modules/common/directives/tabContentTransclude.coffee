'use strict'

isTabHeading = (node) ->
  node.tagName &&
    node.hasAttribute('tab-heading') ||
    node.hasAttribute('data-tab-heading') ||
    node.tagName.toLowerCase() == 'tab-heading' ||
    node.tagName.toLowerCase() == 'data-tab-heading'

### @ngInject ###
module.exports = ->
  restrict: 'A',
  require: '^tabset',
  link: (scope, elm, attrs) ->
    tab = scope.$eval(attrs.tabContentTransclude)

    tab.$transcludeFn tab.$parent, (contents) ->
      console.log 'Transcluding contents', contents
      angular.forEach contents, (node) ->
        if (isTabHeading(node))
          tab.headingElement = node
        else
          elm.append(node)
