'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.addColumn('donors', 'updated_at', { type: Sequelize.DATE, allowNull: false });
    
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.removeColumn('donors', 'updated_at');
    
  }
};
