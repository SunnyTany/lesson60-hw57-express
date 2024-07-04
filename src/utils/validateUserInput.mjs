//перевіряє наявність обов'язкових полів username та password у POST запитах

const validateUserInput =(req, res, next) => {
  const { username, password } = req.body
  if (!username || !password) {
      return res.status(400).send('Missing required fields: username and password')
  }
  next()
}

export default validateUserInput