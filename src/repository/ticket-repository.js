const {NotificationSystem}=require('../models/index');
const { Op } = require('sequelize');

 class TicketRepository{
     async getAll(){
        try {
            const tickets=await NotificationSystem.findAll();
            return tickets;
        } catch (error) {
            throw error;
            
        }
     }
 async create(data){
    try {
        const ticket=await NotificationSystem.create(data);
        return ticket;
    } catch (error) {
        throw error;
        
    }
 }
   async get(filter){
    try {
        const tickets=await NotificationSystem.findAll({
            where:{
                status:"PENDING",
                notificationTime:{
                    [Op.lte]:new Date()
                }
                

            }
        });
        return tickets;
        
    } catch (error) {
        throw error;
        
    }

   }
  async update(ticketId,data){
        try {
            const ticket=await NotificationSystem.findByPk(ticketId);
            if(data.status) //if status is there then we will update the status
            ticket.status=data.status;
            await ticket.save();
            return ticket;
            
        } catch (error) {
            throw error;
        }
  }
  

    
 }
 module.exports=TicketRepository;