const http = require('http');	// Para hacerlo una pagina web

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
	res.satusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Esto sera una aplicacion de notas');
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
