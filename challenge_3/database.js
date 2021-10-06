const mongoose = require('mongoose');
const { string } = require('prop-types');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/checkout_database', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

const schema = new Schema({
    name: String,
    email: String,
    password: String,
    address1: String,
    address2: String,
    city: String,
    state: String,
    zipcode: Number,
    phonenumber: Number,
    ccn: Number,
    expiration: String,
    cvv: Number,
    billingzipcode: Number
});

const checkOut = mongoose.model('checkOut', schema);

// const saveCheckOut = function (name, email, password, address1, address2, city, state, zipcode, phonenumber, ccn, expiration, cvv, billingzipcode) {
//     var instance = new checkOut({
//         'name': name,
//         'email': email,
//         'password': password,
//         'address1': address1,
//         'address2': address2,
//         'city': city,
//         'state': state,
//         'zipcode': zipcode,
//         'phonenumber': phonenumber,
//         'ccn': ccn,
//         'expiration': expiration,
//         'cvv': cvv,
//         'billingzipcode': billingzipcode
//     }).save((err, data) => {
//         if (err) {
//             console.log(err)
//         } else {
//             console.log('Save Sucessful!')
//         }
//     })
//         .then(() => {
//             console.log('Save Sucessful!')
//         });

// }

const saveCheckOut = function (name, email, password, address1, address2, city, state, zipcode, phonenumber, ccn, expiration, cvv, billingzipcode) {
    let filter = {'name': name,'email': email,'password': password};
    let update = {
        'address1': address1,
        'address2': address2,
        'city': city,
        'state': state,
        'zipcode': zipcode,
        'phonenumber': phonenumber,
        'ccn': ccn,
        'expiration': expiration,
        'cvv': cvv,
        'billingzipcode': billingzipcode
    };
    checkOut.findOneAndUpdate(filter, update, {upsert: true}, function(err, doc) {
        if (err) {
            console.log(err);
        } else {
            console.log('Succesfully updated!');
        }
    });

}

module.exports.saveCheckOut = saveCheckOut;
// module.exports.updateCheckOut = updateCheckOut;



