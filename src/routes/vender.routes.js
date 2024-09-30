import {Router} from 'express'
import { authRequired } from '../middlewares/validateToken.js'

const router = Router()

router.get('/vender', authRequired, (req, res) => res.send('Vender'))

export default router