const sender=require('../config/emailConfig');
const TicketRepository=require('../repository/ticket-repository');
const repo= new TicketRepository();
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

const fetchPendingEmails=async (timestamp)=>{
    try {
       
        const response= await repo.get({status:"PENDING"});
        return response; 
        
    } catch (error) {
        console.log(error);
        
    }
}
const updateTicket=async(ticketId,data)=>{
    try {
       
        const response=repo.update(ticketId,data);
        return response; 
        
    } catch (error) {
        console.log(error);
        
    }
}
const createNotification=async (data)=>{
    try {
        const response=await repo.create(data);
        return response;
        
    } catch (error) {
        console.log(error);
        
    }
}
module.exports={
    sendBasicEmail,
    fetchPendingEmails,
    createNotification,
    updateTicket
}