/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50045
Source Host           : localhost:3306
Source Database       : register

Target Server Type    : MYSQL
Target Server Version : 50045
File Encoding         : 65001

Date: 2018-09-17 08:50:51
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `shangping`
-- ----------------------------
DROP TABLE IF EXISTS `shangping`;
CREATE TABLE `shangping` (
  `id` int(10) unsigned NOT NULL auto_increment,
  `url` varchar(255) default NULL,
  `title` varchar(255) default NULL,
  `price` varchar(255) default NULL,
  `xiaoliang` varchar(255) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shangping
-- ----------------------------
INSERT INTO `shangping` VALUES ('1', '1.jpg', '美国西屋智能洁身器', '1499', '7');
INSERT INTO `shangping` VALUES ('2', '2.jpg', '迪士尼百纳箱纪念款特供组', '299', '160');
INSERT INTO `shangping` VALUES ('3', '3.jpg', '德国Rmet国彩洗涤22件组', '299', '114');
INSERT INTO `shangping` VALUES ('4', '4.jpg', '松下智能马桶盖', '1999', '116');
INSERT INTO `shangping` VALUES ('5', '5.jpg', '黄永玉生经典版画', '4980', '121');
INSERT INTO `shangping` VALUES ('6', '6.jpg', '东芝55英寸4K超高清智能电视', ' 2799', '119');
INSERT INTO `shangping` VALUES ('7', '7.jpg', '美国Kefrier多功能护镀膜', '299', '144');
INSERT INTO `shangping` VALUES ('8', '8.jpg', '一二三套人民财富珍邮册', '3980', '123');
INSERT INTO `shangping` VALUES ('9', '9.jpg', '晶玉满堂家居装饰三量化', '9999', '5');
INSERT INTO `shangping` VALUES ('10', '10.jpg', '张松茂徐亚风和谐盛世粉彩对瓶', '19800', '4');
INSERT INTO `shangping` VALUES ('11', '11.jpg', '刺猬紫檀像头餐桌10件套', '16800', '8');
INSERT INTO `shangping` VALUES ('12', '12.jpg', '艺术家霍广林溪水长流福无尽', '19800', '4');
INSERT INTO `shangping` VALUES ('13', '13.jpg', '中华古钱通鉴', '19800', '5');
INSERT INTO `shangping` VALUES ('14', '14.jpg', '中华古钱通鉴', '19800', '108');
INSERT INTO `shangping` VALUES ('15', '15.jpg', '德国玺堡多功能电动沙发', '9999', '3');
INSERT INTO `shangping` VALUES ('16', '16.jpg', ' 帕格尼多瑙河畔皮衣软床1.5米', '5799', '118');

-- ----------------------------
-- Table structure for `zhuce`
-- ----------------------------
DROP TABLE IF EXISTS `zhuce`;
CREATE TABLE `zhuce` (
  `username` text NOT NULL,
  `phonenum` varchar(11) NOT NULL,
  `password1` varchar(255) NOT NULL,
  PRIMARY KEY  (`phonenum`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of zhuce
-- ----------------------------
INSERT INTO `zhuce` VALUES ('jjjjddd', '13882383131', '123456');
INSERT INTO `zhuce` VALUES ('jiangkai', '13882383189', '12345');
INSERT INTO `zhuce` VALUES ('jadjaa', '13882383196', '12345');
INSERT INTO `zhuce` VALUES ('', '13882383197', '12345');
INSERT INTO `zhuce` VALUES ('jiangkai', '13882383198', '123456');
INSERT INTO `zhuce` VALUES ('jiangkai', '13882383199', '123456');
