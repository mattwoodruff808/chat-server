const messages = [];
let id = 0;

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

        let editMessageIndex = messages.findIndex(el => el.id === +id);

        messages[editMessageIndex] = {
            id: messages[editMessageIndex].id,
            text: text || messages[editMessageIndex].text,
            time: messages[editMessageIndex].time
        };
        res.status(200).send(messages);
    },
    deleteMessage: (req, res) => {
        const {id} = req.params;

        let deleteMessageIndex = messages.findIndex(el => el.id === +id);
        messages.splice(deleteMessageIndex, 1);
        res.status(200).send(messages);

        // messages.splice(messages.findIndex(el => el.id === +id), 1);
        // res.status(200).send(messages);
    }
};