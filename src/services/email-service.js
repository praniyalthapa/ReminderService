const sender=require('../config/emailConfig');

const sendBasicEmail=async (mailFrom,mailTo,mailSubject,mailBody)=>{ //these are the parameter for sending mail
    try {
        const response=await sender.sendMail({   //senMail is simple function provided by nodemailer which accepts some JS object as shown 

            from:mailFrom,
            to:mailTo,
            subject:mailSubject,
            text:mailBody
         });
         console.log(response);
    } catch (error) {
        console.log(error);
    }
    



}






module.exports={
    sendBasicEmail
}