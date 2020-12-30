const messages = [];
const id = 0;

module.exports = {
    addMessage: (req, res) => {
        const {text, time} = req.body;

        const newMessage = {
            id: id,
            text: text,
            time: time
        };
        messages.push(newMessage);
        id++;
        res.status(200).send(messages);
    },
    getMessages: (req, res) => {
        res.status(200).send(messages);
    },
    updateMessage: (req, res) => {
        const {id} = req.params;
        const {text} = req.body;

        let editMessage = messages.find(el => el.id === +id);

        editMessage = {
            id: editMessage.id,
            text: text || editMessage.text,
            time: editMessage.time
        };
        res.status(200).send(messages);
    },
    deleteMessage: (req, res) => {
        const {id} = req.params;

        let deleteMessage = messages.find(el => el.id === +id);
        messages.splice(deleteMessage, 1);
        res.status(200).send(messages);
    }
};