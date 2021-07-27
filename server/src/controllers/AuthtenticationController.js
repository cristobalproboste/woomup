const db = require('../../db-test.json')
function filteredDB() {
    const userArray = []
    db.forEach(user => {
        const data = {
            id: user.id,
            name: user.name.toLowerCase(),
            role: user.roles[0].role,
            enterprise: user.enterprises[0].enterprise || undefined
        }
        userArray.push(data)
    })
    return userArray
}
module.exports = {
    async getAllUsers(req, res) {
        const userArray = filteredDB()
        if (userArray.length > 0) {
            res.status(200).send(userArray)
        } else {
            res.status(500).send({ error: 'No users found.' })
        }
    },
    async matches(req, res) {
        const id = req.body.id
        if (id) {
            const userArray = filteredDB()
            const [user] = userArray.filter(function (user) {
                return user.id == id
            })
            const networking = [] //dos guiadas distintas o sin empresa
            const mentoring = [] // mentora y guiada distintas o sin empresa
            const matchInterno = [] // dos guiadas misma empresa
            const mentoringInterno = [] // mentora y guiada misma empresa
            const filteredArray = userArray.filter(function (user) {
                return user.id != id
            })
            filteredArray.forEach(filterUser => {
                //misma empresa
                if (user.enterprise == filterUser.enterprise && user.enterprise != undefined && filterUser.enterprise != undefined) {
                    //Guiada
                    if (user.role != 'mentora') {
                        if (filterUser.role == 'guiada') {
                            //Match interno
                            matchInterno.push(filterUser)
                        }
                        if (filterUser.role == 'mentora') {
                            mentoringInterno.push(filterUser)
                        }
                    } else {
                        //mentora
                        if (filterUser.role = 'guiada') {
                            mentoringInterno.push(filterUser)
                        }
                    }
                } else {
                    //guiada
                    if (user.role != 'mentora') {
                        if (filterUser.role == 'guiada') {
                            networking.push(filterUser)
                        } else {
                            mentoring.push(filterUser)
                        }
                    } else {
                        if (filterUser.role = 'guiada') {
                            mentoring.push(filterUser)
                        }
                    }
                }
            })
            const userWithMatch = {
                id: user.id,
                name: user.name,
                role: user.role,
                enterprise: user.enterprise,
                networking: networking,
                mentoring: mentoring,
                matchInterno: matchInterno,
                mentoringInterno: mentoringInterno
            }
            res.status(200).send(userWithMatch)
        } else {
            res.status(400).send({ error: 'User id needed.' })
        }
    }


}