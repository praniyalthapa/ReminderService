const express=require('express');
const bodyParser=require('body-parser');
const {PORT}=require('./config/serverConfig');
const jobs=require('./utils/job');
const m=require('./models/notificationsystem');
const {sendBasicEmail}=require('./services/email-service');
const TicketController=require('./controllers/ticket-controller');
const {createChannel}=require('./utils/messageQueue');
const setupStartServer=async()=>{
    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    // const channel=await createChannel();
    app.post('/api/v1/tickets', TicketController.create);
   
    

    app.listen(PORT,()=>{
     console.log(`Server starte at Port ${PORT}`);
    //  console.log(m());

    //  jobs();
    //  sendBasicEmail(
    //     'supportbackend@admin.com', //from
    //     'believeme020@gmail.com', //to
    //     'This is a testing email', //subject
    //     'Hey dear this is our support system!How can I help you?' //text

    //  );
    });

}
setupStartServer();


