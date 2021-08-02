import server from "./src/index";

const PORT = 8080;

const newServer = new server();

newServer.init(PORT)
    .then(port => console.log(`Server is running at port: ${port}`))
    .catch(err => console.log({err}));