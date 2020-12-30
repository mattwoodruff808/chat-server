const express = require('express');
const ctrl = require('./controllers/messages_controller');
const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));

//endpoints
app.post('/api/messages', ctrl.addMessage);
app.get('/api/messages', ctrl.getMessages);
app.put('/api/messages/:id', ctrl.updateMessage);
app.delete('/api/messages/:id', ctrl.deleteMessage);

const port = 3001;
app.listen(port, () => console.log(`Server is running on port ${port}`));