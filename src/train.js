module.exports = function tryToTrain() {

};

const brain = require('brain.js');
const fs = require('fs');
const mnist = require('mnist');

const net = new brain.NeuralNetwork();
const set = mnist.set(20000, 0);

const trainingSet = set.training;
//const testSet = set.test;

net.train(trainingSet,
  {
    errorThresh: 0.001,
    iterations: 20000,
    log: true,
    logPeriod: 1,
    learningRate: 0.3
  }
);

let wstream = fs.createWriteStream('./assets/data/mnistTrain.json');
wstream.write(JSON.stringify(net.toJSON(),null,2));
wstream.end();

console.log('Train was finished.');
