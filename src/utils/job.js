var cron = require('node-cron');
const emailService=require('../services/email-service');
//we want to query on the database on every 5 minutes 
/* At every 10 am every 5 minutes we want to check that are there any pending email or not which was expected to be sent by now
 */

const setupJobs=()=>{
    cron.schedule('*/2 * * * *',async ()=>{
        // console.log("running a task every two minutes"); //this is logic section so we will do logic section inside services folder
        const response=await emailService.fetchPendingEmails();
       response.forEach((email)=>{
        emailService.sendBasicEmail("Reminderservice@gmail.com",email.recepientEmail,
        email.subject,
        email.content
        );
       });
        console.log(response);
    });
}
module.exports=setupJobs;




