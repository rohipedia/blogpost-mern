const User = require('../models/user');

/** helper function to get latest users list */
const getUsersList = () => {
    return new Promise((resolve, reject) => {
        User.find()
        .then((documents) => resolve(documents))
        .catch((error) => reject(error));
    });
}

/**
 * @function getUsers
 * @param {*} req request body
 * @param {*} res response body
 * @param {*} next calls next middleware
 * @returns the list of users to display
 */
const getUsers = (req, res, next) => {
    getUsersList()
    .then(documents => {
        res.status(200).json({ message: 'Users fetched successfully', users: documents });
    })
    .catch(error => {
        res.status(400).json({ message: 'Oops! Unable to fetch users', error })
    });
}

/**
 * @function createUser
 * @param {*} req request body
 * @param {*} res response body
 * @param {*} next calls next middleware
 * @returns the list of updated users list after creating the new user
 */
const createUser = (req, res, next) => {
    const user = new User({
        name: 'rohit vhora',
        email: 'rohit.vhora@accenture.com',
        designation: 'team lead',
        age: 29,
        city: 'mumbai'
    });
    user.save()
    .then(() => getUsersList())
    .then(documents => {
        res.status(201).json({ message: 'User created successfully', users: documents });
    })
    .then(error => res.status(400).json({ message: 'User could not be created', error }));
}

module.exports = {
    createUser,
    getUsers
};