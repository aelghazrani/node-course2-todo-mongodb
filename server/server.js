var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const url = 'mongodb://localhost:27017/TodoApp';

mongoose.connect(url, { useNewUrlParser: true });

//make a new modal
var Todo = mongoose.model('Todo',{
    text:{
        type: String
    },
    completed:{
        type: Boolean
    },
    completedAt :{
        type: Number
    }
});

//Instanciate the modal
var newTodo = new Todo({
    text: 'new note maked with Mongoose package.',
    completed: true,
    completedAt: new Date().getTime()
});

newTodo.save().then((doc) => {
    console.log(doc);
}, (e) => {
    console.log('Error : ', e);
});