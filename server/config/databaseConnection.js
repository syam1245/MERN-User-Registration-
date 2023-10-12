const mongoose = require("mongoose");

const databaseConnection = () => {
  mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 30000, })
  .then((data) => console.log(`database is connected ${data.connection.host}`))
  .catch((err) => console.log(err.message));

}

module.exports = databaseConnection
