
const aerospikeConnect = require('./../connector/aerospike/connect');
const client = require('twilio')();

const serverstatusHandler = async (request, reply) => {
    //aerospikeConnect();
    console.log("Server status.....");
    const to1 = '+919942233381';
    const chottu = '+917092542919';
    const preveen = '+917845584181';
    const nithiya = '+919788317058';

    client.messages.create({
        from: 'whatsapp:+14155238886',
        body: 'Replay tha idhu',
        to: `whatsapp:${to1}`
    }).then(message => console.log(message.sid));

    reply.send({ data: { message: "Sever is Up!" } });
}

module.exports = serverstatusHandler;
