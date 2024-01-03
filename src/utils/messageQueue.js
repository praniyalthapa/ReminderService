const amqplib = require('amqplib');
const {MESSAGE_BROKER_URL,EXCHANGE_NAME}=require('../config/serverConfig');

const createChannel=async ()=>{
    try{
    const connection=await amqplib.connect(MESSAGE_BROKER_URL); //this MESSAGE_BROKER_URL will be set up in our .env file.
    //MESSAGE_BROKER_URL is a variable that holds the URL or address of the RabbitMQ server.
    const channel=await connection.createChannel(); //our channel is created
    
    //now we are doing assertQueue.assertExchange function is used to make sure that a specific exchange exists. If it doesn't exist, it creates it.
    await channel.assertExchange(EXCHANGE_NAME,'direct',false); //setting the distributer simple
    return channel;
    }
    catch(error){
        throw error;

    }

}
const subscribeMessage=async (channel,service,binding_key)=>{  //for comsuming 
   try {
     const applicationQueue=await channel.assertQueue('QUEUE_NAME');
    channel.bindQueue(applicationQueue.queue,EXCHANGE_NAME,binding_key);
    channel.consume(applicationQueue.queue,msg=>{
        console.log("Data is received");
        console.log(msg.content.toString()); //to show content of message
        channel.ack(msg); //to give acknowledgement that message has been consumed
    });
    
   } catch (error) {
    throw error;
    
   }
}
    const publishMessage=async(channel,binding_key,message)=>{ //you need channel and binding_key to determine to which queue you are sending and your message
        try {
            await channel.assertQueue(QUEUE_NAME);
            await channel.publish(EXCHANGE_NAME,binding_key,Buffer.from(message));//EXCHANGE_NAME=distributer name,binding_key tells us what queue you have to transfer to 
            
        } catch (error) {
            throw error;
            
        }

    }


module.exports={
subscribeMessage,
createChannel,
publishMessage
}