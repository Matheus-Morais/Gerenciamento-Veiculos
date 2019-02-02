const express = require('express')

module.exports = function(server){

    const api = express.Router()
    server.use('/api', api)

    const veiculoService = require('../api/veiculo/veiculoService')

    //Rotas referente ao veiculo
    api.post('/create-veiculo', veiculoService.create_veiculo) //ok
    api.get('/find-veiculo/:placa', veiculoService.findOne_veiculo) //ok
    api.get('/find-veiculos', veiculoService.find_veiculos) //ok
    api.get('/find-veiculos/:filtro', veiculoService.find_veiculos_for_filter) //ok
    api.put('/update-veiculo/:placa', veiculoService.update_veiculo)
    api.delete('/delete-veiculo/:placa', veiculoService.delete_veiculo) //ok

    /* 
    Adicionar: {

        Adicionar Revisão pela placa
        Consultar Total de gasto em revisões do veículo pela placa
        Consultar Total de gasto em revisões do veículo pela marca
    }
    */
}
