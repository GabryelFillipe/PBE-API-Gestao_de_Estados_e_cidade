/*************************************************************************************************
 *  Objetivo: Arquivo de funções para gerenciar a API de estados e cidades.
 *  Data: 15/09/2025
 *  Autor: Gabryel Fillipe
 *  Versão: 1.0
 *************************************************************************************************/

const MESSAGE_ERRO = {
    status: false,
    status_code: 500,
    development: "Gabryel Fillipe Cavalcanti da Silva"
}

const dados = require('./estados_cidades.js')


// Retorna todos os estados
const getAllEstados = function(){
console.log(dados.listaDeEstados)
}


// Retorna um estado pesquisando pela sigla
const getEstadoBySigla = function(sigla){

}

// Retorna a capital referente a um estado pesquisando pela sigla
const getCapitalBySigla = function(sigla){

}

// Retorna uma lista de estados pesquisando pela região
const getEstadosByRegiao = function(regiao){

}

// Retorna uma lista de estados referentes as capitais do páis
const getVerifyCapitaisDoPais = function(){

}

// Retora uma lista de cidades referente ao estado pesquisado
const getCidadesBySigla = function(estado){

}

getAllEstados()