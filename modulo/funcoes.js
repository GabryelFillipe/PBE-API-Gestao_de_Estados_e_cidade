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
const getAllEstados = function () {

    let message = { status: true, status_code: 200, development: "Gabryel Fillipe Cavalcanti da silva", uf: []}

    dados.listaDeEstados.estados.forEach(function (item) {
        message.uf.push(item.sigla)
    })
    message.quantidade = message.uf.length

    if (message.uf.length > 0)
        return message //Verdadeira 200
    else
        return MESSAGE_ERRO //Falsa 500
}


// Retorna um estado pesquisando pela sigla
const getEstadoBySigla = function (sigla) {
    let uf = sigla.toUpperCase()
    let estadoDesejado = dados.listaDeEstados.estados.find(estado => estado.sigla === uf)

    if(estadoDesejado != null)
        return 
    else
        return MESSAGE_ERRO
    console.log(estadoDesejado)
}

// Retorna a capital referente a um estado pesquisando pela sigla
const getCapitalBySigla = function (sigla) {

}

// Retorna uma lista de estados pesquisando pela região
const getEstadosByRegiao = function (regiao) {

}

// Retorna uma lista de estados referentes as capitais do páis
const getVerifyCapitaisDoPais = function () {

}

// Retora uma lista de cidades referente ao estado pesquisado
const getCidadesBySigla = function (estado) {

}
getEstadoBySigla('sp')


module.exports = {
    getAllEstados,
}