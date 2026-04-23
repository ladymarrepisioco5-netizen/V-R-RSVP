const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Serve static files mula sa Public folder
app.use(express.static(path.join(__dirname, '../Public')));
app.use(express.urlencoded({ extended: true }));

// GET route para ipakita ang RSVP page
app.get('/rsvp', (req, res) => {
res.sendFile(path.join(__dirname, '../Public/rsvp.html'));
});

// POST route para sa form submission
app.post('/rsvp', (req, res) => {
// 👉 Debug: ipakita kung ano ang laman ng form data
console.log('Form data received:', req.body);

const { name, attending } = req.body;

// ✅ Check kung may laman ang form
if (!name || !attending) {
console.log('Missing data, not saving.');
return res.send('<h1>Error: Missing form data</h1>');
}

// ✅ Format ng entry
const entry = `Name: ${name}, Attendance: ${attending}\n`;

// ✅ Append sa Rsvp.txt file (nasa SERVER folder kasama ng server.js)
try {
const filePath = path.join(__dirname, 'Rsvp.txt');
fs.appendFileSync(filePath, entry);
console.log('RSVP saved:', entry);
} catch (err) {
console.error('Error saving RSVP:', err);
}

// ✅ Redirect sa thankyou.html page
res.redirect('/thankyou.html');
});

// ✨ Laging nasa pinakababa ang app.listen
app.listen(PORT, () => {
console.log(`Server running at http://localhost:${PORT}`);
});


