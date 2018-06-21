const express = require('express');
const app = express();
const PORT = process.env.PORT || 4567;
const Event = require('./models/Event');

app.get('/events', (request, response) => {
  Event.all()
    .then(data => {
      response.json(data);
    });
});


app.listen(PORT, () => {
  console.log(`Express web server listening on port ${PORT}`);
});
