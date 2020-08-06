// uma factory retorna uma nova instancia

module.exports = () => {
    return {
    valor: 1,
    count() {
    this.valor++
        }
    }
}
