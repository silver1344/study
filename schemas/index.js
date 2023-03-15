const mongoose = require('mongoose');

const connect = () => {
  if (process.env.NODE_ENV !== 'production') {
    mongoose.set('debug', true);
  }
  mongoose.connect('mongodb://chlwjddms16:1234@localhost:27017/admin', {

    dbName: 'todo',
    useNewUrlParser: true,
  })
  .then(()=>{
    console.log('몽고디비 연결 성공')
  }).catch(()=>{
    console.log('몽고디비 연결 에러')
  })
};

mongoose.connection.on('error', (error) => {
  console.error('몽고디비 연결 에러', error);
});
mongoose.connection.on('disconnected', () => {
  console.error('몽고디비 연결이 끊겼습니다. 연결을 재시도합니다.');
  connect();
});

module.exports = connect;
