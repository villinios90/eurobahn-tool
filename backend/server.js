const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

app.get('/api/trainings', (req, res) => {
  res.json([
    { id: 1, name: 'Triebfahrzeugführer Ausbildung', progress: 75, status: 'laufend' },
    { id: 2, name: 'RFU Fortbildung', progress: 100, status: 'abgeschlossen' }
  ]);
});

app.listen(port, () => {
  console.log(`Backend läuft auf http://localhost:${port}`);
});