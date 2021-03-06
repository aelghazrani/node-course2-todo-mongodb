const expect = require('expect');
const req_from_superTest = require('supertest');
var {app} = require('./../server');
var {Todo} = require('./../models/todo');

beforeEach((done) => {
    Todo.remove({}).then(() => done());
});

describe('POST /todos', () => {

    it('should create a todo', (done) => {
        var text = 'test tado from supertest';

        req_from_superTest(app)
            .post('/todos')
            .send({text})
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text);
            })
            .end((err, res) => {
                if(err)
                {
                    return done(err);
                }
            });

        Todo.find().then((todos) => {
            expect(todos.length).toBe(1);
            expect(todos[0].text).toBe(text);
            done();            
        }).catch((e) => done(e));;
    });


});