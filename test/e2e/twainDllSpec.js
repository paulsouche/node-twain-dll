describe('twainDll',function() {
  'use strict';

  var TwainDll = require('../../twainDll').TwainDll,
    scanDll = new TwainDll();

  beforeEach(function() {
    //here is the function call
    scanDll.goScan();
  });

  it('should do the amazing',function() {
    expect(1 + 1).toBe(2);
  });

});
