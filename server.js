const express = require('express');
const app = express();
const port = process.env.PORT || 5555;

app.get('/', (request, response) => {
    response.status(200).json({
        message: "Deu bom",
    });
});

app.listen(port, err => {
    if (err) return console.log(`Bugou, não iniciou ${err}`);
    console.log('Rota na porta', port)
})

