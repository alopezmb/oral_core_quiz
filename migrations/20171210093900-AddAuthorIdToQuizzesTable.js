'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.addColumn(
            'quizzes',
            'authorId',
            {   type: Sequelize.INTEGER,
                defaultValue:0
            }
        );
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.removeColumn('quizzes', 'authorId');
    }
};
