var app = app || {};

(function () {
    'use strict';

    app.ProductCollection = Backbone.Collection.extend({
        model: app.ProductModel,

        initialize: function( models ) {

        },

        getProductsIncomePerSecond: function() {
            var productsIncomePerSecond = 0;
            for ( var i = 0; i < this.models.length; i++ ) {
                if ( this.models[i].get('bought') ) {
                    productsIncomePerSecond += this.models[i].get('incomePerSecondBonus');
                }
            }
            return productsIncomePerSecond;
        },

        getProductsIncomePerClick: function() {
            var productsIncomePerClick = 0;
            for ( var i = 0; i < this.models.length; i++ ) {
                if ( this.models[i].get('bought') ) {
                    productsIncomePerClick += this.models[i].get('incomePerClickBonus');
                }
            }
            return productsIncomePerClick;
        }

    });

})();
