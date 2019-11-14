const CalcJson = artifacts.require('Calc')
let accounts, calc, management, contractBalance
const interface = CalcJson['abi']
const bytecode = CalcJson['bytecode']

beforeEach(async () => {
	accounts = await web3.eth.getAccounts()
	management = accounts[0]
	calc = await new web3.eth.Contract(interface)
		.deploy({ data: bytecode })
		.send({ from: management, gas: '4000000' })
})

contract('Calc', async (accounts) => {
	it('deploys a contract', async () => {
		const calcAddress = await calc.options.address
		assert.ok(calcAddress, 'Test failed!!')
	})
	//Check Initial Result Status
	it('should initial Result Must be 0', async function() {
		const result = await calc.methods.Result().call()
		assert.equal(result, 0, ' Initial result is invalid')
	})

	//Check Add Fuction Status
	it('should Add function run correctly', async function() {
		await calc.methods.Add(1, 5, 7).send({ from: accounts[1], gas: 4000000 })
		const result = await calc.methods.Result().call()
		assert.equal(result, 12, 'Add Function not working Properly')
	})
	//Check Sub Fuction Status
	it('should Sub function run correctly', async function() {
		await calc.methods.Sub(2, 20, 7).send({ from: accounts[1], gas: 4000000 })
		const result = await calc.methods.Result().call()
		assert.equal(result, 13, 'Sub Function not working Properly')
	})
	//Check Sub Fuction Status Negative number
	it('should Sub function on Negative number run correctly', async function() {
		await calc.methods.Sub(2, 7, 10).send({ from: accounts[1], gas: 4000000 })
		const result = await calc.methods.Result().call()
		assert.equal(result, -3, 'Negative Sub Function not working Properly')
	})
	//Check Mul Fuction Status
	it('should Mul function run correctly', async function() {
		await calc.methods.Mul(3, 5, 5).send({ from: accounts[1], gas: 4000000 })
		const result = await calc.methods.Result().call()
		assert.equal(result, 25, 'Mul Function not working Properly')
	})
	//Check Div Fuction Status
	it('should Div function run correctly', async function() {
		await calc.methods.Div(4, 100, 20).send({ from: accounts[1], gas: 4000000 })
		const result = await calc.methods.Result().call()
		assert.equal(result, 5, 'Div Function not working Properly')
	})
})
