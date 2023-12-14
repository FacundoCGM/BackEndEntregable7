import UsersMongo from "../daos/mongodb/usersDao.js"
const usersMongo = new UsersMongo()

export const register = async (user) => {
    try {
        return await usersMongo.register(user)
    } catch (error) {
        console.error(error)
    }
}

export const login = async (email, password) => {
    try {
        return await usersMongo.login(email, password)
    } catch (error) {
        console.error(error)
    }
}