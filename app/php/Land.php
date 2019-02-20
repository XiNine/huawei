<?php
    header("Content-Type: text/html; charset=UTF-8");
    $coon = new Mysqli('localhost','root','','db_shop_admin',3306);
    $name = $_POST['username'];
    $password = $_POST['password'];
    $sql = "select count(*) from register where telephone='{$name}' and password='{$password}'";//查询有几条数据可以匹配成功，等于0则没有，大于0则匹配成功。'{$pwd}'中''是说明这是一个字符串，外面有""，这里就要用''，{}是为了特殊说明这里是一个变量。

    //执行sql语句
    $result = $coon->query($sql);//返回结果集对象
    $n = $result->fetch_row();//这里的$result是一个对，存到变量$n里面。
    if($n[0] == 1){
        setcookie('telephone',$name,0,'/huawei/app/');
        setcookie("password",$password,0,'/huawei/app/');
        header("location:../index.html?ok");
    }else{
         echo "<script>alert('用户名或密码错误')</script>";//输出 用户名或密码错误
    }
    var_dump($name, $password);
    echo $n[0];
    var_dump($n);
?>