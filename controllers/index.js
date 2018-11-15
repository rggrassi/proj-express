const home = (req, res) => {
    res.send('Home')
}

const dashboard = (req, res) => {
    res.send('Dashboard')
}

const par = (req, res) => {
    const isPar = req.params.num % 2 === 0
    res.send(isPar ? 'Número é par' : 'Número é impar')
}

module.exports = {
    home, dashboard, par
}