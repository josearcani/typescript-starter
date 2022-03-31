'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      id: uuidv4(),
      name: 'John Doe',
      email: 'john@test.com',
      password: 'secret'
    },{
      id: uuidv4(),
      name: 'Silvia Betna',
      email: 'silvia@test.com',
      password: 'secret'
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user', null, {});

    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
