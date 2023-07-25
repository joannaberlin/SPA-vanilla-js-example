const express = require('express');
const path = require('path');

const app = express();

app.use(
	'/static',
	express.static(path.resolve(__dirname, 'frontend', 'static'))
);

app.get('/*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'frontend', 'index.html'));
});

const PORT = process.env.PORT || 3131;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
