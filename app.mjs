import express from 'express' 
import morgan from 'morgan'
import { errors } from 'celebrate'
import router from './src/routes/index.mjs'
import log  from './src/utils/log.mjs'
import logRequests from './src/utils/logRequest.mjs'
import basicAuth from './src/utils/auth.mjs'
import validateUserInput from './src/utils/validateUserInput.mjs'

//встановлення налаштування порту  - 3000
const PORT = 3000

//створення веб-сервера
const app = express()

//обробка JSON
app.use(express.json())

// використаня маршрутизації
app.use(router)

//обробник форм
app.use(express.urlencoded({ extended: true }))

//логування запитів в HTTP-форматі
app.use(morgan('tiny'))

//логування інформації про кожен запит до сервера
app.use(logRequests)

//обробник помилок від celebrate
app.use(errors()) 

//перевірка наявності авторизаційних заголовків
app.use('/', basicAuth)

//перевіряє наявність обов'язкових полів username та password у POST запитах
app.post('/users', validateUserInput, (req, res) => {
  res.send('User created');
})

// Middleware для обробки помилок
app.use((err, req, res, next) => {
  console.error(err.stack) // Логування стеку помилки
  res.status(err.status || 500).send({ message: err.message || 'Внутрішня помилка сервера' })
})

//прослуховування порту 3000, логування жовтим кольором у випадку запуску сервера
app.listen(PORT, () => {
  log(`Server is running on port ${PORT}`, 'yellow')
})