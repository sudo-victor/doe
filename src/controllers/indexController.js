const nodemailer = require('nodemailer')

const Donors = require('../models/Donors')

const mailerConfig = require('../config/mailer')

module.exports = {
    async index (req, res) {
        const donors = await Donors.findAll()

        res.render("index.html", { donors })
    },

    async create (req, res) {
        const donor = { ...req.body}
        const { transport, mailOptions} = mailerConfig
        
        const donors = await Donors.create(donor)

        mailOptions.to = donor.email
        mailOptions.replayTo = donor.email
        mailOptions.html = `Nós, a equipe da <strong>DOE</strong>...<br>agradeçemos por sua colaboração ${donor.name}<br><br>Você acaba de salvar uma vida!`

        const transporter = nodemailer.createTransport(transport)

        transporter.sendMail(mailOptions)
            .then(info => res.send(info))
            .catch(err => res.send(err))
    
        return res.redirect("/")
    }
}