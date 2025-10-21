const express = require('express');
const app = express();

let officeStatus = [];

app.use(express.json());
app.use(express.static('public'));

app.get('/api/status', (req, res) => {
  res.json(officeStatus);
});

app.post('/api/status', (req, res) => {
  officeStatus = req.body;
  res.json({ success: true });
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
