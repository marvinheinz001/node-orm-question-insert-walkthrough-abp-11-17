const db = require("../config/db")

class Question{
  static CreateTable() {
    return new Promise(function(resolve){
      const sql = `CREATE TABLE questions (
        id INTEGER PRIMARY KEY,
        content TEXT
      )`

      db.run(sql, function(){
        resolve("questions table created")
      })
    })
  }

  constructor(content){
    this.content = content
  }

  insert() {
    const self = this
    const sql = `INSERT INTO users (content) VALUES (?)`
    console.log(`we are inserting ${self.content} into the Database`)

    return new Promise(function(resolve){
      db.run(sql, [self.content], function(){
        console.log(`...question ${this.content} is inserted into the Database`)
        self.id = this.lastID
        resolve(self)
      })
    })
  }

}

module.exports = Question;
