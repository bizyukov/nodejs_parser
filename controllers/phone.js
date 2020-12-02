const Phone = require('../models/Phone')

exports.find = (req, res) => {
	const { phoneNumber } = req.params

	try {
		Phone.findOne({
			where: {
				phoneNumber
			}
		})
			.then(data => {
				res.status(200).send(data)
			})
	}
	catch (err) {
		res.status(200).send(err)
	}
}

exports.findAll = (req, res) => {
	try {
		Phone.findAll()
			.then(data => {
				res.status(200).send(data)
			})
	}
	catch (err) {
		res.status(200).send(err)
	}
}

exports.add = (req, res, text) => {
	const phoneArr = []

	for (let x of text) {
		let phone = x.replace(/[\r|\n|\r\n]$/, '').split('|')
		if (/^\+?7?8?\s*?\(?\d{3}(?:\)|[-|\s])?\s*?\d{3}[-|\s]?\d{4}$/.test(phone[0])) {
			phoneArr.push({
				phoneNumber: phone[0],
				anotation: phone[1] || null
			})
		}
	}

	if (phoneArr.length) {
		try {
			Phone.bulkCreate(phoneArr)
				.then(() => {
					return Phone.findAll()
				})
				.then((phones) => {
					res.status(200).send(phones)
				})
		}
		catch (err) {
			res.status(200).send(err)
		}
	}
}
