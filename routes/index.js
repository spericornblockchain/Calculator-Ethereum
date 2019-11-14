const express = require('express'),
	router = express.Router()
/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index')
})

router.post('/calculate', async (req, res, next) => {
	try {
		const calc = DS.methods,
			operator = req.body.operator,
			first = req.body.first,
			second = req.body.second,
			acc = await web3.eth.getAccounts()
		switch (operator) {
			case '1':
				const add = await calc
					.Add(1, first, second)
					.send({ from: acc[1], gas: 6000000 })
				console.log('TCL: add', add)
				break
			case '2':
				const sub = await calc
					.Sub(2, first, second)
					.send({ from: acc[1], gas: 6000000 })
				console.log('TCL: sub', sub)
				break
			case '3':
				const mul = await calc
					.Mul(3, first, second)
					.send({ from: acc[1], gas: 6000000 })
				console.log('TCL: mul', mul)
				break
			case '4':
				const div = await calc
					.Div(4, first, second)
					.send({ from: acc[1], gas: 6000000 })
				console.log('TCL: div', div)
				break
			default:
				console.log('invalid operator')
				break
		}
		const result = await calc.Result().call()
		console.log('TCL: result', result)
		res.send({ data: result })
	} catch (err) {
		console.log(err)
	}
})

module.exports = router
