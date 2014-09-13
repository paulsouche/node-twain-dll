/*jslint node: true */
'use strict';

var util = require('util'),
  stream = require('stream'),
  EventEmitter = require('events').EventEmitter;

function TwainDllFactory() {
  var factory = this;

  function TwainDll(options) {


  }


  util.inherits(TwainDll, stream.Stream);

  factory.TwainDll = TwainDll;

}

util.inherits(TwainDllFactory,EventEmitter);

module.exports = new TwainDllFactory();
