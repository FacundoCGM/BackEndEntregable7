import * as service from '../service/usersService.js'

export const register = async(req, res, next) => {
    try {
        const newUser = await service.register(req.body)
        if(newUser) res.redirect('/logs/login')
        else res.redirect('/logs/registererror')
    } catch(error) {
        next(error)
    }
}

export const login = async(req, res, next) => {
    try {
        const { email, password } = req.body
        const logUser = await service.login(email, password)
        if (logUser) {
            req.session.email = email
            req.session.password = password
            res.redirect('/mongo/products')
        } else res.redirect('/logs/loginerror')
    } catch(error) {
        next(error)
    }
}