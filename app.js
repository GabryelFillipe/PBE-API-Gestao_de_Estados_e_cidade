/******************************************************************************************************************************
 * Objetivo: emdPoints referente a API de estados e cidades.
 * Autor: Gabryel Fillipe
 * Data: 15/09/2025
 * Versão: 1.0
 * 
 * Observações: Instalações do Express, Cors, Body-Parser
 * npm install express     --save
 * npm install cors        --save
 * npm install body-parser --save
 *****************************************************************************************************************************/

//Import das dependencias da API
const express = require('express')     //Responsavel pela API
const cors = require('cors')        //Responsavel pelas permissões da API
const bodyParser = require('body-parser') //Responsavel por gerenciar a chegada dos dados da API com  o front

//Import do arquivo de funções
const dados = require('./modulo/funcoes')

// Retorna a porta do servidor atual ou colocamos uma porta local
const PORT = process.PORT || 8080

// Criando uma instancia de uma classe do express 
const app = express()

//Configuração de permissões
app.use((request, response, next) => {
    response.header('Acess-Control-Allow-Origin', '*')    //Servidor de origem da API
    response.header('Acess-Control-Allow-Methods', 'GET') //Verbos permitidos na API
    // Carrega as configurações no CORS da API
    app.use(cors())
    next() // Próximo, carregar os proximos endPoints
})

// Request -> chegada de dados na API
// Response -> retorno de dados na API


//ENDPOINTS

app.get('/v1/estados', function (request, response) {
    // Pesquisa na função de estados
    let estados = dados.getAllEstados()

    // Retorna o status code e o JSON
    response.status(estados.status_code).json(estados)
})

app.get('/v1/estado/:uf', function (request, response) {
    // Pedindo uma UF pela requisição
    let sigla = request.params.uf

    // Pesquisa na função de estado
    let estado = dados.getEstadoBySigla(sigla)

    // Retorna o status code e o JSON
    response.status(estado.status_code).json(estado)
})

app.get('/v1/capital/:uf', function (request, response) {
    // Pedindo uma UF pela requisição
    let sigla = request.params.uf

    // Pesquisa na função de buscar capital
    let capital = dados.getCapitalBySigla(sigla)

    // Retorna o status code e o JSON
    response.status(capital.status_code).json(capital)
})

app.get('/v1/estados/regiao/:regiao', function (request, response) {
    // Pedindo uma região pela requisição
    let regiao = request.params.regiao

    // Pesquisando os estados de uma região
    let estados = dados.getEstadosByRegiao(regiao)

    // Retorna o status code e o JSON
    response.status(estados.status_code).json(estados)
})

app.get('/v1/capitalPais', function (request, response) {
    // Pesquisando quais estados já foram capital do país
    let capitalPais = dados.getVerifyCapitaisDoPais()

    // Retorna o status code e o JSON
    response.status(capitalPais.status_code).json(capitalPais)
})

app.get('/v1/cidades/estado/:sigla', function (request, response) {
    // Pedindo uma UF pela requisição
    let sigla = request.params.sigla

    // Pesquisa de cidades de um estado
    let cidades = dados.getCidadesBySigla(sigla)

    // Retorna o status code e o JSON
    response.status(cidades.status_code).json(cidades)
})

//Start na API
app.listen(PORT, function () {
    console.log('API aguardando requisições ...')
})