const db = require('../database/db')

const str = require('../services/common/str')

const CRUD = require("./CRUD")

module.exports = {

	...CRUD,

	name: 'product',

	fillable: [
		'description',
		'price'
	],

	hidder: [],

	// Override
	all,
	searchLimit

}


async function all() {
	const { hidder } = this.check(true)

	const res = await db.table(this.name, 'p').select([
		'p.*', 'c.name AS category', 'u.name AS unity'
	])
		.join('category AS c').using('id_category')
		.join('unity AS u').using('id_unity').get()

	const resHidder = await hidder(this.hidder, res)
	return resHidder
}

async function searchLimit(key, value, limit) {
	limit = parseInt(limit, 10)
	value = str.escapeHtml(value)

	if (!limit)
		throw new UserException("invalid params ..: 'limit'")

	const { hidder } = this.check(true)

	const res = await db.table(this.name, 'p').select([
		'p.*', 'c.name AS category', 'u.name AS unity'
	])
		.join('category AS c').using('id_category')
		.join('unity AS u').using('id_unity')
		.where(key, `%${value}%`, 'LIKE')
		.orderBy(key)
		.limit(limit.toString())
		.get()

	if (res.length <= 0)
		throw new UserException('register not found', 404)

	const resHidder = await hidder(this.hidder, res)
	return resHidder
}