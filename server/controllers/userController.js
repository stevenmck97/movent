const Users = require('../models/userModel');

exports.registerUser = function(req, res) {
    const { email, password, name } = req.body;

    const user = await Users.create({ email, password, name });
};