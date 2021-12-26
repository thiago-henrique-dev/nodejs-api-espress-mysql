module.exports = app => {
    
    app.get('/atendimentos', (req, res) => {
        res.send('Voce esta na rota de atendimentos e está realizando um GET')
    })
    
    
}

// RESPONSABILIDADE: CONTROLAR QUAIS SÃO AS ROTAS