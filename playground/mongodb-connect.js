//const MongoClient = require('mongodb').MongoClient;
// Destructuring syntax in ES6
const {MongoClient, ObjectID} = require('mongodb');
const url = 'mongodb://localhost:27017/';
const dbname = 'TodoApp';

MongoClient.connect(url,{ useNewUrlParser: true }, (err, client) => {
    //create a collection (table) 'todos'
    //const table = client.db(dbname).collection('todos');
    const table = client.db(dbname).collection('users');
    if(err)
    {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server');
    
    //insert data to 'todos'
    // table.insertOne({
    //     text : 'Je vais sortir avec ma femme après le dej',
    //     completed : false
    // }, (err, results) => {
    //     if(err)
    //     {
    //         return console.log('error occured : ', err);
    //     }

    //     console.log('Results: ');
    //     console.log(JSON.stringify(results.ops, undefined, 2));
    // });

    //insert into users
    table.insertOne({
        name: 'Mohamed',
        ville : 'Toulouse',
        age : 32
    }, (err, results) => {
        if(err)
        {
            return console.log('Error : ', err);
        }        
        console.log('Results :');
        console.log(results.ops[0]._id.getTimestamp());
    });
    
    client.close();
});