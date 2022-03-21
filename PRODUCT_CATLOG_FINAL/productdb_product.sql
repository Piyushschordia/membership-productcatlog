-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: productdb
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `productid` int NOT NULL,
  `product_category` varchar(45) NOT NULL,
  `subcategory` varchar(45) DEFAULT NULL,
  `productname` varchar(45) NOT NULL,
  `product_description` varchar(100) NOT NULL,
  `product_price` int NOT NULL,
  `product_quantity` int DEFAULT NULL,
  `product_offers` varchar(100) DEFAULT NULL,
  `seller_details` varchar(100) NOT NULL,
  PRIMARY KEY (`productid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'Fashion','men fashion','Van heusen','slim fit blue casual shirt',1999,10,'22%','Shoppercity, Pune'),(2,'Electronics ','Smartrphone','Samsung Galaxy S20','64 ram 128 rom ',44000,13,'5%','Raj mobiles, Mumbai'),(3,'Beauty products','Healthcare','Dove shampoo','200ml',500,8,'4%','Shipra shampoo'),(4,'Grocerry','Dairy ','Chitale Ghee','250ml',1000,246,'','Chitale store , Katraj'),(5,'Electronics','Laptop','Macbook','32gb ram',350000,45,'17%','Iphone store, Newyork'),(6,'Fashion','Ladies','Ladies- kurti','Pure cotton',150,458,'','Fc road ,Pune'),(7,'Grocerry','Cadbury','Dairy-milk','Red velvet',750,64,'9%','Dmart, Kerala'),(8,'Beauty products','Face mask','Lakme','coal mask',500,0,'4%','Lakme Store, helsinki'),(9,'Beauty products','Face wash','Nivea','winter care',200,0,'1%','Nivea Store, Mumbai'),(10,'Electronics','TV','One plus','37inch',20000,5,'12%','Jai Stores, Pune'),(11,'Fashion','Kids Fashion ','H & M','blue color',999,0,'5%','H & M, Pimpri'),(12,'Fashion','Men Fashion','Nike','Slim fit black',1999,12,'2%','Brand Factory'),(13,'Electronics','Tablets','Samsung','Android 12',6999,66,'10%','Jai Mobiles, Pune'),(14,'Grocerry','Vegetables','Tomato','Fresh red',50,7,NULL,'More Mall'),(15,'Grocerry','Juice','Real','Mango',100,6,NULL,'More Mall');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-17 20:11:43
