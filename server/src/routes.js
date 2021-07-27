const AuthenticationController = require('./controllers/AuthtenticationController')

module.exports = (app) => {

    app.post('/api/user', AuthenticationController.matches)
    app.get('/api/users', AuthenticationController.getAllUsers)

}
