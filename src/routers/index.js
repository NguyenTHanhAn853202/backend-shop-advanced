const Product = require('./Product')
const Account = require('./Accounts')
const Oder = require('./Oder')
const Cart = require('./Cart')
const Feedback = require('./Feedback')
const App = require('./App')
const Category = require('./Category')
const Bought = require('./Bought')

function route(app){
    app.use('/account',Account)
    app.use('/product',Product)
    app.use('/order',Oder)
    app.use('/cart',Cart)
    app.use('/feedback',Feedback)
    app.use('/category',Category)
    app.use('/bought',Bought)
    app.use('/app',App)
}

module.exports = route;
