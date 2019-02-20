<?php
//对php数据里的中文信息解析
header("Content-type:text/html;charset=utf-8");

//获取html的注册信息
$tel = $_POST['telephone'];
$password = $_POST['password'];

//连接数据库
$coon = new Mysqli('localhost','root','','db_shop_admin',3306);

// 验证是否连接成功
// if($coon){
//   echo "连接成功";
// }else{
//   echo "连接失败";
// }

//添加页面的数据
$sql = "INSERT INTO register (telephone,password) VALUES('$tel','$password')";

//页面打印查看是否有错误
// var_dump($name,$password,$tel,$address,$ps);

//把数据传入数据库
$row = $coon -> query($sql);
?>