var mongoose = require('mongoose')

var connectDB = async () => {
  try {
    var conn = await mongoose.connect(process.env.DB_STRING)

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

module.exports = connectDB