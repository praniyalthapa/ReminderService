const nodemailer=require('nodemailer');
const {EMAIL_ID,EMAIL_PASSWORD}=require('./serverConfig');
const sender=nodemailer.createTransport({ //nodemailer.createTrasnport needs JS object as parameter and inside service we need service,auth(again auth needs js object)
    service:'Gmail',
    auth:{
        user:EMAIL_ID,
        pass:EMAIL_PASSWORD
    }
});
module.exports=sender;