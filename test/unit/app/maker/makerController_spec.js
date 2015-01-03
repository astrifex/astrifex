describe('makerController', function () {
  beforeEach(module('astrifex.maker'));

  var scope;
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();

    $controller('makerController', { $scope: scope });

    scope.$digest();
  }));

  it('should populate the initial star', function() {
    expect(scope.star).not.toBeNull();
    expect(scope.star.corners).toBe(5);
    expect(scope.star.spokeRatio).toBe(0.5);
    expect(scope.star.skew).toBe(0);
    expect(scope.star.randomness).toBe(0);
    expect(scope.star.fill).not.toBeNull();
    expect(scope.star.stroke).not.toBeNull();
    expect(scope.star.size).not.toBeNull();
  });
});
