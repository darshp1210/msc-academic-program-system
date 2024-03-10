  const express = require('express')
  const http = require('http')
  const socketIo = require('socket.io')
  const cors = require('cors')

  const app = express()
  app.use(cors({
    origin: 'http://localhost:3000', // Replace with your React app's URL
    methods: ['GET', 'POST'],
    credentials: true,
  }))
  const server = http.createServer(app)
  const io = socketIo(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
      credentials: true,
    }
  })

  const PORT = process.env.PORT || 4000

  app.get('/chat', (req, res) => {
    console.log(req)
    res.send('Server is running.')
  })
  
  io.on('connection', (socket) => {
    console.log('A user connected')
    // console.log('Socket ID:', socket.id)
    // console.log('Socket handshake:', socket.handshake)
    // Handle chat messages
    socket.on('userMessage', (msg) => {
      console.log('Message received:', msg)
      const messageWithSocketId = { ...msg, socketId: socket.id };
      io.emit('userMessage', messageWithSocketId)
    })
    socket.on('disconnect', () => {
      console.log('User disconnected')
    })
  })

  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
