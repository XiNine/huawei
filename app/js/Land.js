$(function () {
    $('.change').on('click',function () {
      $('.random-num').toggle();
      $('.username').toggleClass('user-phone').get(0).placeholder = '手机号码';
      $('.china').toggle();
      if($(this).html() === '手机短信登录/注册'){
        $('.login-btn').html('立即登录/注册');
        $(this).html('用户名密码登录').siblings().toggle();
        $('.pwd').attr('placeholder','短信验证码');
      }else {
        $(this).html('手机短信登录/注册').siblings().toggle();
        $('.username').get(0).placeholder = '邮箱/手机号码/小米ID';
        $('.pwd').attr('placeholder','密码');
        $('.login-btn').html('登录');
      }
    })
  });