// users GET
const getUsersHandler = (req, res) => {
  res.end('Get users route')
}

// users POST
const postUsersHandler = (req, res) => {
  res.end('Post users route')
}

// users/:userId GET
const getUserByIdHandler = (req, res) => {
  const userId = req.params['userId']
  res.end(`Get user by Id route: ${userId}`)
}

// users/:userId DELETE
const deleteUserByIdHandler = (req, res) => {
  const userId = req.params['userId']
  res.end(`Delete user by Id route: ${userId}`)
}

// users/:userId PUT
const putUserByIdHandler = (req, res) => {
  const userId = req.params['userId']
  res.end(`Put user by Id route: ${userId}`)
}

export {
  getUsersHandler,
  postUsersHandler,
  getUserByIdHandler,
  deleteUserByIdHandler,
  putUserByIdHandler
}