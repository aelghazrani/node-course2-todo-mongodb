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
    //find documents in table 'todos'
    // table.find({
    //     _id : new ObjectID('5c221790f0a85111ccf68307')
    // }).toArray().then((docs) => {
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Error :');
    //     console.log(err);
    // });

    //count of docs
    // table.find().count().then((count) => {
    //     console.log(`Todos : ${count}`);
    // }, (err) => {
    //     console.log('Error :');
    //     console.log(err);
    // });
    
    // Regular expression
    table.find({
        text : { $regex: /^Je/ }
    }).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Error :');
        console.log(err);
    });
    
    
    
    client.close();
});