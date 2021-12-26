module.exports = app => {
    app.get('/atendimentos', (req, res) => {
        res.send('Voce esta na rota de atendimentos e está realizando um GET')
    })

    app.post('/atendimentos', (req, res) => {
        res.send('Voce esta na rota de atendimentos e está realizando um POST')
    })
    
}



// RESPONSABILIDADE: CONTROLAR QUAIS SÃO AS ROTAS

// Requisições do tipo get: PEGAR DADOS
// Requisições do tipo POST: ENVIAR DADOS