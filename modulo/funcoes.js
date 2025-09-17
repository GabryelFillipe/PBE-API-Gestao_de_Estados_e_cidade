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

//import do arquivo de estados e cidades
const dados = require('./estados_cidades.js')


// Retorna todos os estados
const getAllEstados = function () {

    let message = {
        status: true,
        status_code: 200,
        development: "Gabryel Fillipe Cavalcanti da silva",
        uf: []
    }

    dados.listaDeEstados.estados.forEach(function (item) {
        message.uf.push(item.sigla)
    })
    // Para adicionar um elemento novo no JSON
    message.quantidade = message.uf.length


    if (message.uf.length > 0)
        return message //Verdadeira 200
    else
        return MESSAGE_ERRO //Falsa 500
}

// Retorna um estado pesquisando pela sigla
const getEstadoBySigla = function (sigla) {

    //Tranformando a sigla digitada em uma variavel pronta e tratada para letra maiuscula 
    let uf = sigla.toUpperCase()

    //Variáriavel que verifica a sigla digitada
    let infoEstado = dados.listaDeEstados.estados.find(estado => estado.sigla === uf)

    // Verificando se o estado digitado retornou um JSON com suas informações
    if (infoEstado == undefined) {
        return MESSAGE_ERRO
    } else {

        // Pegando informações do estado desejado e passando elas para variáveis 
        let nomeEstado = infoEstado.nome
        let capital = infoEstado.capital
        let regiao = infoEstado.regiao

        //Criando o JSON e colocando as informações do estado desejado
        let estadoDesejado = { status: true, status_code: 200, development: "Gabryel Fillipe Cavalcanti da silva", uf: uf, descricao: nomeEstado, capital: capital, regiao: regiao }

        return estadoDesejado
    }
}

// Retorna a capital referente a um estado pesquisando pela sigla
const getCapitalBySigla = function (sigla) {

    //Tranformando a sigla digitada em uma variavel pronta e tratada para letra maiuscula 
    let uf = sigla.toUpperCase()

    //Variáriavel que verifica a sigla digitada
    let estadoDigitado = dados.listaDeEstados.estados.find(estado => estado.sigla === uf)


    // Verificando se o estado digitado retornou um JSON com suas informações
    if (estadoDigitado == undefined) {
        return MESSAGE_ERRO
    } else {

        // Variáveis para pegar capital e nome do estado digitado
        let descricao = estadoDigitado.nome
        let capital = estadoDigitado.capital

        // Variável responsavel por criar o JSON de resposta 
        let informacoesCapital = {
            status: true,
            status_code: 200, development: "Gabryel Fillipe Cavalcanti da silva",
            uf: uf,
            descricao: descricao,
            capital: capital
        }

        return informacoesCapital
    }
}

// Retorna uma lista de estados pesquisando pela região
const getEstadosByRegiao = function (regiao) {

    let estadosRegiao = {
        status: true,
        status_code: 200,
        development: "Gabryel Fillipe Cavalcanti da silva",
        regiao: regiao,
        estados: []
    }
    dados.listaDeEstados.estados.forEach(function (item) {
        if (item.regiao == regiao) {
            estadosRegiao.estados.push({ uf: item.nome, descricao: item.nome })
        }
    })
    if (estadosRegiao.estados.length > 0)
        return estadosRegiao
    else
        return MESSAGE_ERRO
}

// Retorna uma lista de estados referentes as capitais do páis
const getVerifyCapitaisDoPais = function () {

    let capitalPais = {
        status: true,
        status_code: 200,
        development: "Gabryel Fillipe Cavalcanti da silva",
        capitais: []
    }
    dados.listaDeEstados.estados.forEach(function (item) {
        if (item.capital_pais) {

            let capitalAtual = item.capital_pais.capital
            let sigla = item.sigla
            let nome = item.nome
            let capitalEstado = item.capital
            let regiao = item.regiao
            let anoInicioCapital = item.capital_pais.ano_inicio
            let anoTerminoCapital = item.capital_pais.ano_fim

            capitalPais.capitais.push({
                capital_atual: capitalAtual,
                uf: sigla,
                descricao: nome,
                capital: capitalEstado,
                regiao: regiao,
                capital_pais_ano_inicio: anoInicioCapital,
                capital_pais_ano_termino: anoTerminoCapital
            })
        }
        
    })
    return capitalPais
}

// Retora uma lista de cidades referente ao estado pesquisado
const getCidadesBySigla = function (estado) {
    let uf = estado.toUpperCase()

    // Variável que verifica a sigla digitada e procura no JSON de estados
    let findCidades = dados.listaDeEstados.estados.find(estado => estado.sigla === uf)

    // Tratando erro para que se o JSON de cidades não seja encontrado ou undefined exiba a mensagem de erro
    if (findCidades == undefined) {
        return MESSAGE_ERRO
    } else {

        // Criando variáveis para passar descrição e quantidade de cidades da UF escolhida
        let descricao = findCidades.nome
        let quantidade = findCidades.cidades.length

        // Criando JSON com dados da UF escolhida, quantidade de cidades e os nomes das cidades
        let cidadesEstado = {
            status: true,
            status_code: 200,
            development: "Gabryel Fillipe Cavalcanti da silva",
            uf: uf,
            descricao: descricao,
            quantidade_cidades: quantidade,
            cidades: []
        }

        // Função para adicionar as cidades com base o estado da região escolhida 
        findCidades.cidades.forEach(function (item) {
            cidadesEstado.cidades.push(item.nome)
        })
        return cidadesEstado
    }

}

module.exports = {
    getAllEstados,
    getEstadoBySigla,
    getCapitalBySigla,
    getEstadosByRegiao,
    getVerifyCapitaisDoPais,
    getCidadesBySigla
}