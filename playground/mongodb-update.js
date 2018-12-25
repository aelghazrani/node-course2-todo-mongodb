//const MongoClient = require('mongodb').MongoClient;
// Destructuring syntax in ES6
const {MongoClient, ObjectID} = require('mongodb');
const url = 'mongodb://localhost:27017/';
const dbname = 'TodoApp';

MongoClient.connect(url,{ useNewUrlParser: true }, (err, client) => {
    //create a collection (table) 'todos'
    const table = client.db(dbname).collection('todos');
    if(err) 
    {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server');
    
    //findOneAndUpdate
    table.findOneAndUpdate({
        _id : new ObjectID('5c224eb4e445c676ae7ef7be')
    },
    {
        $set: 
        {
            text : "j'ai modifié le texte par script."
        }
    },{
        returnOriginal : false
    }
).then((result) => {
    console.log(result);
});
    
    
    client.close();
});