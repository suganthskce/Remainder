
const aerospikeConnect = require('./../connector/aerospike/connect');
//const client = require('twilio')();

const serverstatusHandler = async (request, reply) => {
    // const { params = {} } = request;
    // const { message = '' } = params;
    // //aerospikeConnect();
    // console.log("Server status.....");
    // const to1 = '+919942233381';
    // const chottu = '+917092542919';
    // const preveen = '+917845584181';
    // const nithiya = '+919788317058';
    // const vishnu = '+919751963027';
    // const arjun = '+919445284308';
    // const dubagur = '+919698872929';
    // const vicky = '+91';

    // client.messages.create({
    //     from: 'whatsapp:+14155238886',
    //     body: 'Message......',
    //     to: `whatsapp:${to1}`
    // }).then(message => console.log(message.sid));

    reply.send({ data: { message: "Sever is Up!" } });
}

module.exports = serverstatusHandler;
