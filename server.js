const express = require('express');

const app = express();

app.use(express.static('./dist/beauty-by-mariam-salon-web'));

app.get('/*', function (req, res) {
  res.sendFile('index.html', { root: 'dist/beauty-by-mariam-salon-web' }
  );
});

app.listen(process.env.PORT || 8080);
