(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var util = require('./util.js');
var _ = require('lodash');

console.log("We got util!!!!!");

module.exports = { app: function() { console.log('app!'); } };

},{"./util.js":2,"lodash":"lodash"}],2:[function(require,module,exports){
function aaa() {
  console.log('aaa!');
}

function bbb() {
  console.log('bbb!');
}

module.exports = {
  aaa, bbb
};

},{}]},{},[1]);
