const customExpress = require("./config/customExpress")

const app = customExpress()
app.listen(3000, ()=>{
    console.log('Servidor rodando na porta 3000')
})


// RESPONSABILIDADE: SUBIR NOSSO SERVIDOR NO AR