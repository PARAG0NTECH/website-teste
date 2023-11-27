const { WebClient } = require('@slack/web-api');

const web = new WebClient("xoxp-6214323179937-6224675652064-6242565818582-4f0ad874e598807562b033154d28c1f0");

async function sendAlert(message) {
    try {
        // Use the `chat.postMessage` method to send a message from this app
        await web.chat.postMessage({
          channel: '#avisos',
          text: message,
        });
        return "Mensagem Postada com sucesso!";
    } catch (error) {
        return "Erro no slack";
    }
} 

module.exports = {
    sendAlert
}