import { io } from 'socket.io-client';
const socket = io('http://localhost:5000');

    // Socket.io event listeners
    socket.on('connection', () => {
      console.log('Connected to Socket.io server');
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from Socket.io server');
    });

    export default socket
