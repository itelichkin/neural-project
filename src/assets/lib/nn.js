const brain = require('brain.js');
const softmax = require('./softmax');
const json = require('../data/mnistTrain.json');
const net = new brain.NeuralNetwork();

net.fromJSON(json);

module.exports = function (input) {
  var output = net.run(input);

  return softmax(output);
};
