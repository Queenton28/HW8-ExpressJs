'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Actors', [
      { firstName: 'Robert', lastName: 'Downey Jr.', age: 56, createdAt: new Date(), updatedAt: new Date() },
      { firstName: 'Chris', lastName: 'Evans', age: 40, createdAt: new Date(), updatedAt: new Date() },
      { firstName: 'Scarlett', lastName: 'Johansson', age: 36, createdAt: new Date(), updatedAt: new Date() },
      { firstName: 'Chris', lastName: 'Hemsworth', age: 38, createdAt: new Date(), updatedAt: new Date() },
      { firstName: 'Mark', lastName: 'Ruffalo', age: 53, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Actors', null, {});
  }
};
