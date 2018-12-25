var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const url = 'mongodb://localhost:27017/TodoApp';

mongoose.connect(url, { useNewUrlParser: true });

//make a new modal
var Todo = mongoose.model('Todo',{
    text:{
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed:{
        type: Boolean,
        default: false
    },
    completedAt :{
        type: Number,
        default: null
    }
});

//Instanciate the modal
// var newTodo = new Todo({
//     text: '    new note maked with space at begin and end of statement     '    
// });

var User = mongoose.model('User', {
    email:{
        type: String,
        required: true,
        minlength: 10,
        trim: true
    }
});

var newUser = new User({
    email: 'elghazrani.abdelali@cbc.org'
});
newUser.save().then((doc) => {
    console.log(doc);
}, (e) => {
    console.log('Error : ', e);
});