'use strict'

### @ngInject ###
module.exports = ($scope) ->
  $scope.star = {
    corners: 5,
    spokeRatio: 0.5,
    fill: '#f0c039',
    strokeType: 'color',
    strokeColor: '#e4a91a',
    skew: 0,
    randomness: 0,
    size: 100
  }

  $scope.updateStroke = ->
    $scope.star.stroke = switch ($scope.star.strokeType)
      when 'color' then $scope.star.strokeColor
      else 'none'
  $scope.updateStroke()

  $scope.updateBoxStyle = ->
    $scope.boxStyle = {
      display: 'inline-block',
      width:   $scope.star.size + 'px',
      height:  $scope.star.size + 'px'
    }
  $scope.updateBoxStyle()

  return
