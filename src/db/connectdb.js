const { default: mongoose } = require('mongoose');

require('dotenv').config()
console.log(process.env.URI);

let  getConnection=()=>{
    let connectionUri;
    if (process.env.NODE_ENV==='development') {
        connectionUri= process.env.URI 
        connectionUri=connectionUri.replace('<username>',process.env.USER_NAME)
        connectionUri=connectionUri.replace('<password>',process.env.PASSWORD)
     
    }
    console.log(connectionUri);
    return connectionUri
}

const  connectToDb=async ()=>{

    let uri= getConnection()
 
    console.log('connecting');
   await  mongoose.connect(uri,{
        dbName:process.env.DB_NAME
    })
    console.log('Database Connected');
}

module.exports= connectToDb
