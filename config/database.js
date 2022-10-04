const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://admin:4CsHppTD6DDL0eFs@ebonidev.9uue8qq.mongodb.net/ante')

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

module.exports = connectDB