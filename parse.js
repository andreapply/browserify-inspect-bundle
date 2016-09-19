#!/usr/bin/env node

var esprima = require('esprima');
var fs = require('fs');

var filePath = process.argv[2];
if (!filePath) { console.log('Usage: parse <filename>'); process.exit(1); }

var src = fs.readFileSync(filePath).toString();

var a = esprima.parse(src);

var args = a.body[0].expression.arguments;
var mods = args[0].properties;

var foundMods = new Set();
for (k in mods) {
  var els = mods[k].value.elements[1];
  els.properties.map(function(prop) {
    // console.log(`${prop.key.value} => ${prop.value.value}`); 
    if (prop.value.value) {
      foundMods.add(prop.key.value)
    }
  });
}

console.log(foundMods);
console.log(`--- ${foundMods.size} modules ---`);

/*
for (k in mods) {
  console.log(` ${k} => ${mods[k]}`);
  console.log(mods[k]);
}
*/
