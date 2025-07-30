const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    cartItems: Array,
    amount: Number,
    Status: String,
    CreatedAt: Date
})

const orderModel = mongoose.model('Order', orderSchema);

module.exports = orderModel