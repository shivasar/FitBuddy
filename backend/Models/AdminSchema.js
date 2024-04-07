const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true // Ensure that each admin's email is unique
    },
    password: {
        type: String,
        required: true
    }
},{
    timestamps: true
});


adminSchema.pre('save', async function (next) {
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10)
    next()
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
