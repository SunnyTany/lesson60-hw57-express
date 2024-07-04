// articles GET
const getArticlesHandler = (req, res) => {
  res.end('Get articles route')
}

// articles POST
const postArticlesHandler = (req, res) => {
  res.end('Post articles route')
}

// article/:articleId GET
const getArticleByIdHandler = (req, res) => {
  const articleId = req.params['articleId']
  res.end(`Get article by Id route: ${articleId}`)
}

// article/:articleId DELETE
const deleteArticleByIdHandler = (req, res) => {
  const articleId = req.params['articleId']
  res.end(`Delete article by Id route: ${articleId}`)
}

// article/:articleId PUT
const putArticleByIdHandler = (req, res) => {
  const articleId = req.params['articleId']
  res.end(`Put article by Id route: ${articleId}`)
}

export {
  getArticlesHandler,
  postArticlesHandler,
  getArticleByIdHandler,
  deleteArticleByIdHandler,
  putArticleByIdHandler
}