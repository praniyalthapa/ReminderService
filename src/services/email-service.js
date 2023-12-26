const sender=require('../config/emailConfig');

const sendBasicEmail=(mailFrom,mailTo,mailSubject,mailBody)=>{ //these are the parameter for sending mail
    sender.sendMail({   //senMail is simple function provided by nodemailer which accepts some JS object as shown 
       from:mailFrom,
       to:mailTo,
       subject:mailSubject,
       text:mailBody
    });



}






module.exports={
    sendBasicEmail
}