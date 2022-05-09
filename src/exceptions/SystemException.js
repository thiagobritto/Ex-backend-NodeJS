module.exports = function (message, code = '') {
    this.message = message
    this.code = code
    this.name = 'SystemException'
}