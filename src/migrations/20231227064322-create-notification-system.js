'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('NotificationSystems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      subject: {
        type: Sequelize.STRING,
        allowNull:false
      },
      content: {
        type: Sequelize.STRING,
        allowNull:false
      },
      recepientEmail: {
        type: Sequelize.STRING,
        allowNull:false
      },
      status: {
        type: Sequelize.ENUM,
        allowNull:false,
        values:['PENDING','SUCCESS','FAILED'], //these are the status which our email service will show its present status 
        defaultValue:"PENDING"

      },
      notificationTime: {  //it represent how much time do we need to setup our crone job
        type: Sequelize.DATE,
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('NotificationSystems');
  }
};