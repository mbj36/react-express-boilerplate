import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config() // config to get env variable

const connect = () => {
  mongoose.connect(process.env.MONGO_URL, err => {
    if (err) throw err
    console.log('DB Open')
  })
}

export default connect
