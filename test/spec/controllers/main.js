'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('gambitApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should expect the obvious', function () {
    expect(42).toBe(42);
  });
});
