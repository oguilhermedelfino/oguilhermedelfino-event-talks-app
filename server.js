const express = require('express');
const path = require('path');
const talks = require('./talks'); // Import the talks data

const app = express();
const port = 3000;

// Serve static files from the 'public' directory (once created)
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint to get all talks or filter by category
app.get('/api/talks', (req, res) => {
  const category = req.query.category;
  if (category) {
    const filteredTalks = talks.filter(talk => 
      talk.category && talk.category.includes(category)
    );
    res.json(filteredTalks);
  } else {
    res.json(talks);
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
