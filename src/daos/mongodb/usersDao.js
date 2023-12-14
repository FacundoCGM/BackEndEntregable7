import { UserModel } from "./models/usersModel.js"

export default class UsersMongo {

    async findByEmail(email) {
        try {
            return await UserModel.findOne({ email })
        } catch (error) {
            console.error(error)
        }
    }

    async register(user) {
        try {
            const { email, password } = user
            if (email === 'adminCoder@coder.com' && password === 'adminCod3r123') {
                return await UserModel.create({...user, role: 'admin'})
            }
            const userExists = await this.findByEmail(email)
            if (!userExists) return await UserModel.create(user)
            else return false
        } catch (error) {
            console.error(error)
        }
    }    

    async login(email, password) {
        try {
            const userExists = await UserModel.findOne({ email, password })
            if (!userExists) return false
            else return userExists
        } catch (error) {
            console.error(error)
        }
    }
}