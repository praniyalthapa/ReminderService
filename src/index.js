const express=require('express');
const bodyParser=require('body-parser');
const {PORT}=require('./config/serverConfig');
const {sendBasicEmail}=require('./services/email-service');
const setupStartServer=()=>{
    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.listen(PORT,()=>{
     console.log(`Server starte at Port ${PORT}`);
     sendBasicEmail(
        'supportbackend@admin.com', //from
        'praniyal100@gmail.com', //to
        'This is a testing email', //subject
        'Hey dear this is our support system!How can I help you?' //text
     );
    });

}
setupStartServer();