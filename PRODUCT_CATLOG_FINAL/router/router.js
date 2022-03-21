'use strict';



module.exports = function(app) {
  var productController = require('../controllers/productcontroller');
  var outofStocks = require('../model/outofstock');
  var productCategory  = require('../model/productcategory');

  app.route('/product')
     .get(productController.getAll)
     .post(productController.insert);
   
  app.route('/product/:productid')
      .get(productController.getBy)
      .put(productController.update)
      .delete(productController.remove);




      
   
    app.route('/product/api/outofstock')
    .get(outofStocks.outofstock);  

    
    app.route('/product/api/product_category/:product_category')
    .get(productCategory.productcategory);  
  
  
  };