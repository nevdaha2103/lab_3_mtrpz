const express = require("express");
const sequelize = require("./config/database");
const Book = require("./models/Book");

const app = express();
app.use(express.json());
app.use("/books", require("./routes/books"));

sequelize
  .sync()
  .then(() => {
    console.log("Підключено до PostgreSQL");
    app.listen(3000, () => console.log("Сервер запущено на порті 3000"));
  })
  .catch((error) => console.error("Помилка підключення до БД:", error));