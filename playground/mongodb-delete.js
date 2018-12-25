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
    
    //delete many
    // table.deleteMany({text: 'programming NodeJs'}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     if(err)
    //     {
    //         console.log('Error : ', err);
    //     }
    // });

    //delete One
    // table.deleteOne({text: 'programming NodeJs'}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     if(err)
    //     {
    //         console.log('Error : ', err);
    //     }
    // });
    
    //findOneAndDelete
    table.findOneAndDelete({text: 'programming NodeJs',completed: false}).then((result) => {
        console.log(result);
    }, (err) => {
        if(err)
        {
            console.log('Error : ', err);
        }
    });
    
    
    client.close();
});