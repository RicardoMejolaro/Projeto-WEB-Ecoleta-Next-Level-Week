//Importar a dependência do sqlite3
const sqlite3 = require('sqlite3').verbose()

//Criar o objeto de banco de dados.
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

//Utilizar o objeto de banco de dados, para nossas operações
db.serialize(() => {
  //Com comando sql eu vou:

  //1 - Criar uma tabela com comando sql
  /*   db.run(`
      CREATE TABLE IF NOT EXISTS places (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        image TEXT,
        address TEXT,
        address2 TEXT,
        state TEXT,
        city TEXT,
        items TEXT
      );
    `)*/
  
    //2 - Inserir dados na tabela
/*     const query = `
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
      "Colectoria",
      "https://images.unsplash.com/photo-1579756423478-02bc82a97679?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      "Guilherme Gemballa, Jardim América",
      "Número 260",
      "Santa Catarina",
      "Rio do Sul",
      "Pilhas, Baterias"
    ]
    
    function afterInsertData(err){
      if(err) {
        return (console.log(err))
      }    
      console.log('Cadastrado com sucesso')
      console.log(this)
    }
  
    db.run(query, values, afterInsertData);   */   

  //3 - Consultar dados da tabela
/*   db.all(`SELECT * FROM places`, function(err, row) {
    if(err) {
      return (console.log(err))
    } 
    console.log('Aqui estão os seus dados')
    console.log(row)
  }) */

  //4 - Deletar um dado da tabela
/*   db.run(`DELETE FROM places WHERE id = ?`, [7], function (err) {
    if (err) {
      return (console.log(err))
    }
    console.log("Registro deletado com sucesso")
  }) */
})