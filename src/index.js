const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path'); 

// app.engine('hbs', handlebars({
//   extname: '.hbs'
// }));
// app.set('view engine', 'hbs');
// app.set('view', path.join(__dirname, 'resources/views'))

app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.send(`<h1>hello world</h1>`);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

