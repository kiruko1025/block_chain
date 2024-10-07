// ignition/modules/hello_world.js
const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const HelloWorldModule = buildModule("HelloWorldModule", (m) => {
  const hello_world = m.contract("HelloWorld");
  return { hello_world };
});

module.exports = HelloWorldModule ;