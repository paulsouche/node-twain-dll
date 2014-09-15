/*jslint node: true */
'use strict';

var util = require('util'),
  stream = require('stream'),
  EventEmitter = require('events').EventEmitter,
  binding = require('./build/twainDll.node');


function TwainDllFactory() {
  var factory = this;

  function TwainDll(options) {



  }

  util.inherits(TwainDll, stream.Stream);

  TwainDll.prototype.goScan = function() {
    factory.binding.goScan();
  };

  factory.TwainDll = TwainDll;
  factory.binding = binding;
}

util.inherits(TwainDllFactory,EventEmitter);

module.exports = new TwainDllFactory();
