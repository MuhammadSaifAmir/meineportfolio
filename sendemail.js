const emailjs = require('emailjs-com');

exports.handler = async function(event, context) {
    const { service_id, template_id, user_id, template_params } = JSON.parse(event.body);

    try {
        const response = await emailjs.send(service_id, template_id, template_params, user_id);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Email sent successfully!', response })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};
