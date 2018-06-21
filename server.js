const express = require('express');
const app = express();
const PORT = process.env.PORT || 4567;


app.listen(PORT, () => {
  console.log(`Express web server listening on port ${PORT}`);
});
