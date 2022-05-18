const app = require('./app');
const http = require('http');
const { mongoConnect } = require('./service/service');

const server = http.createServer(app);
server.listen(process.env.PORT, () => {
  mongoConnect();
  console.log(`your server running at http://localhost:${process.env.PORT}`);
});
