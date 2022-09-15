import express from 'express'

const app = express()

app.get('/games', (request, response) => {
  return response.json([])
})

app.post('/ads', (request, response) => {
  return response.status(201).json([])
})

app.get('/ads', (req, resp) => {
  return resp.json([
    { id: 1, name: 'anuncio 1' },
    { id: 2, name: 'anuncio 2' },
    { id: 3, name: 'anuncio 3' }
  ])
})

app.listen(3333)
