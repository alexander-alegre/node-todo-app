const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash);
    });
});

var hashedPassword = '$2a$10$3T3hzq15z2FGSimZqloE6uGqWon6qUp3c2OGH7fAzwSZQvuXZ7wom';

bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res);
});



// var data = {
//     id: 10
// };

// var token = jwt.sign(data, '123abc');
// console.log(token);
// var decoded = jwt.verify(token, '123abc');
// console.log('dcoded', decoded);


// var message = 'password';
// console.log(message);
// var hash = SHA256(message).toString();
// console.log(hash);

// var data = {
//     id: 4
// };

// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'secret').toString()
// }


// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();


// var resultHash = SHA256(JSON.stringify(token.data) + 'secret').toString();
// if (resultHash === token.hash) {
//     console.log('data was not changed');
// } else {
//     console.log('data was changed');
// }