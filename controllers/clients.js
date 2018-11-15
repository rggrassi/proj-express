const list = (req, res) => {
    res.send('Lista de clientes')
}

const create = (req, res) => {
    res.send('Novo cliente')
}

module.exports = {
    list, create
}