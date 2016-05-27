var chai = require("chai");
var chaiEnzyme = require("chai-enzyme");

chai.use(chaiEnzyme());

var context = require.context("./app", true, /\.spec\.jsx$/);
context.keys().forEach(context);
