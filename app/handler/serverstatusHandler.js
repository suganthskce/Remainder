
const aerospikeConnect = require('./../connector/aerospike/connect');
const client = require('twilio')();

const serverstatusHandler = async (request, reply) => {
    //aerospikeConnect();
    const to1 = '+919942233381';
    const chottu = '+917092542919';

    client.messages.create({
        from: 'whatsapp:+14155238886',
        body: 'Idiot',
        to: `whatsapp:${to1}`
    }).then(message => console.log(message.sid));

    reply.send({ data: { message: "Sever is Up!" } });
}

module.exports = serverstatusHandler;
