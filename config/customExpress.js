const express = require('express');
const consign = require('consign')

module.exports = () => {
    const app = express()

consign()
    .include('controllers')
    .into(app)

    return app

}

// RESPONSABEÇIDADE: CONFIGURAR QUALQUER ALTERAÇÃO, MODIFCAÇÃO DESTE ARQUIVO