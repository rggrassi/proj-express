const indexController = require('./index')
const expect = require('chai').expect
const sinon = require('sinon')

describe('index controller', () => {
    it('home', () => {
        const res = {
            send: function(){}
        } 
        const mock = sinon.mock(res) 
        mock.expects('send').once().withArgs('Home')
        indexController.home({}, res)
    })

    it('number is even', () => {
        const res = {
            send: function(){}
        } 
        const req = {
            params: {
                num: '8'
            }
        }
        const mock = sinon.mock(res) 
        mock.expects('send').once().withArgs('Número é par')
        indexController.par(req, res)
    })

    it('number is odd', () => {
        const res = {
            send: function(){}
        } 
        const req = {
            params: {
                num: '7'
            }
        }
        const mock = sinon.mock(res) 
        mock.expects('send').once().withArgs('Número é impar')
        indexController.par(req, res)
    })

})
