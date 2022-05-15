const CRUD = require("./CRUD")

module.exports = {

	...CRUD,

	name: 'category',

	fillable: [
    'name'
  ],

	hidder: [],

}
