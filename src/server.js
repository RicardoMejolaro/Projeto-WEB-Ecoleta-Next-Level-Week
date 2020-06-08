const express = require('express')
const server = express()

//Pegar o banco de dados no arquivo db.js
const db = require("./database/db")

//Configurar a pasta pública para o servidor ter acesso
server.use(express.static("public"))

//Habilitar o uso do req.body na nossa aplicação
server.use(express.urlencoded({ extended: true }))

//utilizando template engine
const nunjucks = require('nunjucks', {})
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
})


//Configurar caminhos na minha aplicação
//Página inicial
//req: requisição de algo ao servidor
//res: resposta do que foi solicitado ao servidor
server.get("/", (req, res) => {
  return res.render('index.html')
})

server.get("/create-point", (req, res) => {
  //req.query são os os Query Strings na url 
  //console.log(req.query)

  return res.render('create-point.html')
})

server.post("/savepoint", (req, res) => {
  //req.body: O corpo do nosso formulário

   const query = `
  INSERT INTO places (
    name,
    image,
    address,
    address2,
    state,
    city,
    items

  ) VALUES (?,?,?,?,?,?,?);
`
  const values = [
    req.body.name,
    req.body.image,
    req.body.address,
    req.body.address2,
    req.body.state,
    req.body.city,
    req.body.items
  ]
    
  function afterInsertData(err) {
    if (err) {
      console.log(err)
      return res.render('create-point.html', { saved: false });
    }
    console.log('Cadastrado com sucesso')
    console.log(this)

    return res.render('create-point.html', { saved: true });
  }

  db.run(query, values, afterInsertData);

})

server.get("/search", (req, res) => {
  //Pegando os dados da pesquisa
  const search = req.query.search

  //Verificando se a pesqisa está vazia
  if (search == " ") {
    return res.render('search-results.html', { total: 0 })
  } 

  //Pegar os dados da tabela
  //O simbolo de % ajuda a encontrar todos que existam a palavra pesquisada
  db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function (err, rows) {
    if (err) {
      return (console.log(err))
    }

    const total = rows.length

    //Mostrar a página html com os dados do banco de dados
    return res.render('search-results.html', { places: rows, total })
  })
})

//Ligar o servidor
server.listen(3000)