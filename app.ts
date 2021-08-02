import Server from "./src/index";

const PORT = 8080;

const server = new Server();

server.init(PORT)
    .then(port => console.log(`Server is running at port: ${port}`))
    .catch(err => console.log({err}));