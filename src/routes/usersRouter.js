import { Router } from "express"
import * as usersController from '../controller/usersController.js'

const routerUsers = Router()

routerUsers.post('/register', usersController.register)

routerUsers.post('/login', usersController.login)

export default routerUsers