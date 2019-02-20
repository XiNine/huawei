//共公头部样式
$(function () {
    var bg1 = $('.bg1,.Marvellous');
    bg1.mouseover(function () {
        $('.Marvellous').stop().show();
        bg1.addClass('bgs');
    })
    bg1.mouseout(function () {
        $('.Marvellous').stop().hide();
        bg1.removeClass('bgs');
    })

    $('.bg2,.service').mouseover(function () {
        $('.service').stop().show();
        $('.bg2').addClass('bgs');
    })
    $('.bg2,.service').mouseout(function () {
        $('.service').stop().hide();
        $('.bg2').removeClass('bgs');
    })

    $('.bg3,.guide').mouseover(function () {
        $('.guide').stop().show();
        $('.bg3').addClass('bgs');
    })
    $('.bg3,.guide').mouseout(function () {
        $('.guide').stop().hide();
        $('.bg3').removeClass('bgs');
    })
    $('.bg4,.Mobile').mouseover(function () {
        $('.Mobile').stop().show();
        $('.bg4').addClass('bgs');
    })
    $('.bg4,.Mobile').mouseout(function () {
        $('.Mobile').stop().hide();
        $('.bg4').removeClass('bgs');
    })
})

//下拉菜单
$(function () {
    $('.Subitem,.subnav').mouseover(function () {
        $('.subnav').stop().slideDown();

        $('.Subitem,.subnav').mouseout(function () {
            $('.subnav').stop().slideUp();
        })
    })
})

// 搜索框
$(function () {
    $('.txt').focus(function () {
            $('#aas').hide();
        }),
        $('.txt').blur(function () {
            $('#aas').show();
        })
})

// 原生方法1：
// var searchs = (function () {
//     var $a = document.querySelector('#aas');
//     var $txt = document.querySelector('.txt');
//     return {
//         init() {
//             this.event()
//         },
//         event() {
//             var _this = this;
//             //文本框获得焦点时默认提示隐藏
//             $txt.onfocus = function () {
//                 $a.style.display = 'none'
//             },
//                 //文本框失去焦点时默认提示显现
//                 $txt.onblur = function () {
//                     $a.style.display = 'block'
//             }
//         }
//     }
// }())
// searchs.init();
