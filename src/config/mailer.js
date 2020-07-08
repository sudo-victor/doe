require('dotenv').config()

const nodemailer = require('nodemailer')

module.exports = {
    transport: {
        host: process.env.MAILER_HOST,
        port: process.env.MAILER_PORT,
        auth: {
            user: process.env.MAILER_USER,
            pass: process.env.MAILER_PASS,
        }
    },

    mailOptions: {
        from: 'teste@email.com',
        to: '',
        replayTo: '',
        subject: 'Obrigado por DOAR!!!',
        html: '',
    }
}