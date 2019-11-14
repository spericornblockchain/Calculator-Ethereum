const Calc = artifacts.require('Calc')

module.exports = function(deployer) {
	deployer.deploy(Calc)
}
