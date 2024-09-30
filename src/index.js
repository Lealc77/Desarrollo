import app from './app.js'
import {connectDB} from './data/db.js'

connectDB();
app.listen (3000)
console.log('Puerto del servidor', 3000)