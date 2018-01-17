require("dotenv").config();

const client = require("twilio")(process.env.TWIL_USER, process.env.TEST_AUTH);


client.messages
    .create({
        body: 'Hey Mr Nugget, you the bomb!',
        to: '+19786188282',
        from: '+15005550006',
    })
    .then(sms => process.stdout.write(sms.sid));