"use strict";var register=function(){var n,e;return{init:function(e){n=document.querySelector(e),$password=n.querySelector("#password"),$passwords=n.querySelector("#passwords"),$tel=n.querySelector("#tel"),$submit=n.querySelector(".btn"),$pAll=n.querySelectorAll("p"),this.event()},event:function(){$password.onblur=function(){if(e=this.nextElementSibling,""==this.value)return e.innerHTML="内容不能为空！",void(e.className="p2");/^\w{6,10}$/.test(this.value)?(e.innerHTML="验证成功",e.className="p1"):(e.innerHTML="格式错误",e.className="p2"),$passwords.onblur()},$passwords.onblur=function(){if(e=this.nextElementSibling,""==this.value)return e.innerHTML="内容不能为空！",void(e.className="p2");this.value==$password.value?(e.innerHTML="验证成功",e.className="p1"):(e.innerHTML="两次输入的密码不一致！",e.className="p2")},$tel.onblur=function(){if(e=this.nextElementSibling,""==this.value)return e.innerHTML="内容不能为空！",void(e.className="p2");/^1[35789]\d{9}$/.test(this.value)?(e.innerHTML="验证成功",e.className="p1"):(e.innerHTML="格式错误",e.className="p2")},$submit.onclick=function(){for(var e=0;e<$Allp.length;e++)if("p1"!=$Allp[e].className)return void $Allp[e].previousElementSibling.focus();alert("注册成功！")}}}}();register.init(".conent");