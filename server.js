const express = require('express');
const app = express();
const path = require('path');
const server = require('http').createServer(app);
require('./config/db')();
const History = require('./History');
const bodyParser = require('body-parser');
const io = require('socket.io')(server);
const cors = require('cors');
const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/search', async (req, res) => {
  try {
    const age = req.query.age;
    const currentAge = await History.find({ age: age }).sort({ year: 1 });
    const loading = false;
    res.status(200).send({ currentAge, loading });
    console.log('server refrel');
  } catch (err) {
    console.log(err);
  }
});

io.on('connect', (socket) => {
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) return callback(error);

    socket.join(user.room);

    socket.emit('message', {
      user: 'admin',
      text: `어서오세요 ${user.name}님, 여기는 한능검 대비 채팅방입니다.`,
    });
    socket.broadcast.to(user.room).emit('message', {
      user: 'admin',
      text: `${user.name}님이 입장했습니다.`,
    });

    io.to(user.room).emit('roomData', {
      room: user.room,
      users: getUsersInRoom(user.room),
    });

    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, text: message });

    callback();
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit('message', {
        user: 'admin',
        text: `${user.name}님이 방을 나갔습니다.`,
      });
      io.to(user.room).emit('roomData', {
        room: user.room,
        users: getUsersInRoom(user.room),
      });
    }
  });
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
server.listen(process.env.PORT || 5000, () =>
  console.log(`Server has started....`)
);
