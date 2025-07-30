const express = require('express')
const app = express();
const port = 3000;

app.set('view engine', 'hbs')
app.set('views','./views')

app.use(express.static('public'))

app.get('/', (request, response) => {
    response.render('home');
});

app.get('/tarefas', (request, response) => {
    
});


app.listen(port, () => {
    console.log("Aplicação em execução na porta " +port);
});