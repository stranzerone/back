import express from 'express'
import { Regi, logi,wallet } from '../Controller/userController.js'
import { buy,Portfolio,Remove } from '../Controller/coinControll.js'
const route = express.Router()


route.post("/register",Regi)


route.post("/login",logi)


route.post('/buy',buy)

route.post('/portfolio',Portfolio)


route.post('/sell',Remove)

route.post('/wallet',wallet)
export default route