'user strict';
var sql = require('./db');


// data access logic layer 
var ProductCategory = function(p){
    this.productid=p.productid;
    this.product_category=p.product_category;
    this.subcategory=p.subcategory;
    this.productname=p.productname;
    this.product_description=p.product_description;
    this.product_price=p.product_price;
    this.product_quantity=p.product_quantity;
    this.product_offers=p.product_offers;
    this.seller_details=p.seller_details;
  };

  ProductCategory.productcategory=function(req, res){
          var product_category=req.params.product_category;
          
          sql.query("SELECT * from product WHERE product_category =?",product_category,(err, rows, fields) =>{
                                  if (!err){
                                     res.send(rows);
                                  }
                                  else{
                                      console.log(JSON.stringify(err));
                                  }
      });
} 


  module.exports= ProductCategory;