describe('twainDll',function() {
  'use strict';

  var proxyquire = require('proxyquire'),module,mockUtil,mockBinding,mockEvents,mockStream;

  beforeEach(function() {
    mockEvents = {
      EventEmitter: {foo:'bar'}
    };
    mockStream = {
      Stream: {foo:'bar'}
    };
    mockUtil = jasmine.createSpyObj('util',['inherits']);
    mockBinding = jasmine.createSpyObj('binding',['goScan']);
    module = proxyquire('../../twainDll', {
      './build/twainDll.node': mockBinding,
      'events': mockEvents,
      'stream': mockStream,
      'util': mockUtil
    });
  });

  it('should return an instance of TwainDllFactory',function() {
    expect(typeof module).toBe('object');
    expect(module.constructor.name).toBe('TwainDllFactory');
  });

  it('should inherits from events',function() {
    expect(mockUtil.inherits).toHaveBeenCalledWith(module.constructor,mockEvents.EventEmitter);
  });

  it('should provide the binding',function() {
    expect(module.binding).toBe(mockBinding);
  });

  describe('TwainDllConstructor', function() {

    it('should provide a TwainDll constructor',function() {
      expect(typeof module.TwainDll).toBe('function');
    });

    it('should inherits from stream',function() {
      expect(mockUtil.inherits).toHaveBeenCalledWith(module.TwainDll,mockStream.Stream);
    });

    describe('Instance', function() {
      var scanObj;

      beforeEach(function() {
        scanObj = new module.TwainDll();
      });

      it('should create an instance of TwainDll',function() {
        expect(typeof scanObj).toBe('object');
        expect(scanObj.constructor.name).toBe('TwainDll');
      });

      it('should provide the api',function() {
        expect(typeof scanObj.goScan).toBe('function');
      });

      describe('goScan',function() {

        beforeEach(function() {
          scanObj.goScan();
        });

        it('should call the binding',function() {
          expect(mockBinding.goScan).toHaveBeenCalled();
        });

      });

    });

  });

});
