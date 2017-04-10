const {ObjectID} = require('mongodb');
const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');
const {todos, populateTodos, users, populateUsers} = require('./seed/seed');

beforeEach(populateUsers);
beforeEach(populateTodos);


// describe('POST /todos', () => {
//     it('should create a new todo', (done) => {
//         var text = 'test to do text';
//         request(app)
//             .post('/todos')
//             .send({text})
//             .expect(200)
//             .expect( (res) => {
//                 expect(res.body.text).toBe(text);
//             })
//             .end( (err,res) => {
//                 if (err) {
//                     return done(err);
//                 }
//                 Todo.find({text}).then( (todos) => {
//                     expect(todos.length).toBe(1);
//                     expect(todos[0].text).toBe(text);
//                     done();
//                 }).catch( (e) => {
//                     done(e);
//                 });
//             });
//     });
//     it('should not create todo with invalid body data', (done) => {
//         request(app)
//             .post('/todos')
//             .send({})
//             .expect(400)
//             .end( (err, res) => {
//                 if (err) {
//                     return done(err);
//                 }
//                 Todo.find().then( (todos) => {
//                     expect(todos.length).toBe(2);
//                     done();
//                 }).catch( (e) => {
//                     done(e);
//                 });
//             });
//     });
// });

// describe('GET /todos', () => {
//     it('should get all the todos', (done) => {
//         request(app)
//             .get('/todos')
//             .expect(200)
//             .expect( (res) => {
//                 expect(res.body.todos.length).toBe(2);
//             }).end(done);
//     });
// });

// describe('GET /todos/:id', () => {
//     // works
//     it('should give back a doc', (done) => {
//         request(app)
//             .get(`/todos/${todos[0]._id.toHexString()}`)
//             .expect(200)
//             .expect( (res) => {
//                 expect(res.body.todo.text).toBe(todos[0].text);
//             }).end(done);
//     });
//     // id is not present
//     it('should give 404 if id is not found', (done) => {
//         request(app)
//             .get('/todos:id')
//             .expect(404)
//             .expect( )
//             .end(done);
//     });
//     // invalid id 
//     it('should return a 404 when id is invalid', (done) => {
//         request(app)
//             .get('todos/:id')
//             .expect(404)
//     });
// });

describe('DELETE /todos/:id', () => {
    it('should romeve a todo', (done) => {
        var hexId = todos[1]._id.toHexString();
        request(app)
            .delete(`/todos/${hexId}`)
            .expect(200)
            .expect((res) => {
                expect(res.body.todo._id).toBe(hexId);
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                Todo.findById(hexId).then((todo) => {
                    if (!todo) {
                        return done(err);
                    }
                }).catch((e) => {
                    done(e);
                })
            });
    });

    it('should return 404 if todo not found', (done) => {
        var hexId = todos[1]._id.toHexString();
        request(app)
            .delete(`/todos:${hexId}`)
            .expect(404)
            .end(done);
    });

    it('should return 404 if object id is invalid', (done) => {
        var hexId = todos[1]._id.toHexString();
        request(app)
            .delete('/todos/:123')
            .expect(404)
            .end(done)
    });
});