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
const express       = require('express')     //Responsavel pela API
const cors          = require('cors')        //Responsavel pelas permissões da API
const bodyParser    = require('body-parser') //Responsavel por gerenciar a chegada dos dados da API com  o front

// Retorna a porta do servidor atual ou colocamos uma porta local
const PORT = process.PORT || 8080

// Criando uma instancia de uma classe do express 
const app = express()

//Configuração de permissões
app.use((request, response, next)=>{
    response.header('Acess-Control-Allow-Origin', '*')    //Servidor de origem da API
    response.header('Acess-Control-Allow-Methods', 'GET') //Verbos permitidos na API
    // Carrega as configurações no CORS da API
    app.use(cors())
    next() // Próximo, carregar os proximos endPoints
})

//ENDPOINTS

app.get('/v1/estados', function(request,response){

})