const http = require('http'); /*require quer dizer importar um pacote ou módulo.
                                módulo http tem funcionalidades para requisições
                                http e criar servidores HTTP.*/
const sqlite3 = require('sqlite3').verbose();/*sqlite 3 é a biblioteca que permite
                                    trabalhar com sqlite3 no node. Verbose significa
                                    trabalhar no modo verboso, com comentários mais 
                                    detalhados.*/
const database = new sqlite3.database("empresa.db", (err)=>{
    if(err){
        console.error(err);
    }else{
        console.log("Conexão estabelecida com sucesso.");
    }
});/*database()é um construtor do sqlite3. 
estamos instanciando database como um objeto do tipo sqlite3 essa função, empresa.db é o
primeiro argumento passaado para o construtor. Esse é o nome do arquivo do banco de dados
SQLite. (err) ste é o segundo argumento passado para o construtor. É uma função de 
retorno de chamada (callback) que será executada após a tentativa de abrir ou criar o 
banco de dados. no if, err Este parâmetro da função de retorno de chamada conterá um o
bjeto de erro se ocorrer um erro durante a abertura ou criação do banco de dados. 
Se a operação for bem-sucedida, err será null.CONCLUSÃO: esse código cria uma
conexão com o banco de dados empresa.db, caso ela não exista.*/


//função pra ciar tabela caso não exista no banco de dados empresa.db
db.run(`CREATE TABLE IF NOT EXISTS produtos( 
        ProductID INTEGER PRIMARY KEY AUTOINCREMENT,
        ProductName text,
        SupplierID INTEGER,
        CategoryID INTEGER,
        Unit TEXT,
        Price FLOAT
    )`, /*db.run quer dizer uma instrução ao sqlite, fornecida pela biblioteca
    sqlite3.*/
    (err)=>{
        if(err){
            console.error(err);
        }else{
            console.log("Tabela criada com sucesso");
        }
    }
);

//realiza todas as consultas de uma tabela produtos.
const search = (callback)=>{
    db.all("SELECT *FROM produtos", (err, rows)=>{
        if(err){
            console.error(err);
        }else{
            callback(rows);
        }
    });
    /*callback será executada após a busca pelo banco de dados. 
     callback é argumento para outra função, que será executada em
     um outro momento, função assíncrona.
    método all recupera dados de uma tabela como um array de 
    linhas. 
    (err, rows) será executado após a pesquisa na tabela. 
    err é um objeto de erro, quer dizer quer que se houver erro.
    Rows é o array de objetos que contém os objetos da pesquisa.
    */
}

//prepara para adicionar dados ao nosso bd
const inserData = db.prepare(
    `INSERT INTO produtos (ProductName, SupplierID, CategoryID, Unit, Price )
    VALUES (?, ?, ?, ?, ?)`,
    (err)=>{
        if(err){
            console.error(err);
        }else{
            console.log("Dados inseridos com sucesso");
        }
    }
    /*db.prepare é sempre executado posteriormente(função assíncrona). 
    (?, ?, ?, ? ?) são placeholders que serão substituídos quando a 
    função for executada. 
    (err) é uma função callback que será executada após a preparação
    do SQL.*/
);


//prepara uma consulta para excluir dados do bd.
const deleteData = db.prepare(
    `DELETE FROM produtos WHERE ProductID == ?`,
    (err)=>{
        if(err){
            console.error(err);
        }else{
            console.log("Dados excluídos com sucesso");
        }
    }
);

//prepara uma consulta para modificar os dados
const modofyData = db.prepare(
    `UPDATE produtos 
    SET ProductName = ? ,
        SupplierID = ? ,
        CategoryID = ? ,
        Unit = ? ,
        Price = ?
    WHERE ProductID = ? `,
    (err)=>{
        if(err){
            console.error(err);
        }else{
            console.log("Dados modificados com sucesso");
        }
    }
);

//criar servidor e trazer as informações do bd para o servidor.

const server = http.createServer((req, res)=>{
    //para permitir los CORS e que não tenha problema esse exemplo
    res.setHeader("Acess-Control-Allow-Origin", "*" );
    res.setHeader("Acess-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Acess-Control-Allow-Headers", "Content-Type");

    //retorna todas as informações para o servidor
    search((result)=>{
        res.write(JSON.stringify(result));
        res.end();
    })
    //verifica se é uma solicitação com o método POST.
    if(req.method === "POST"){
        let body = "";
        //recebe as informações enviadas para nosso server
        req.on("data", (chunk)=>{
            body += chunk;
        })
        req.on("end", ()=>{
            //Desrealiza as informações
            const parsedBody = JSON.parse(body);
            console.log(parsedBody);
            //usa a consulta preparada para inserir os dados recebidos do
            //Frontend
            inserData.run(
                parsedBody.ProductName,
                parsedBody.SupplierID,
                parsedBody.CategoryID,
                parsedBody.Unit,
                parsedBody.Price
            );
            console.log("Dados criados com sucesso");
        })
    //verifica se é uma solicitação com o método DELETE
    }else if(req.method === "DELETE"){
        let body = "";
        req.on("data", (chunk)=>{
            body += chunk;
        })
        req.on("end", ()=>{
            const parsedBody = JSON.parse(body);
            console.log(parsedBody);

            //usamos a consulta preparada para excluir os dados que o frontend
        //indicar.
        deleteData.run(parsedBody.ProductID);
        console.log("Dados excluídos com sucesso.");
        });
    }
});