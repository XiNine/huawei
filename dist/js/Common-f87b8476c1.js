"use strict";$(function(){var s=$(".bg1,.Marvellous");s.mouseover(function(){$(".Marvellous").stop().show(),s.addClass("bgs")}),s.mouseout(function(){$(".Marvellous").stop().hide(),s.removeClass("bgs")}),$(".bg2,.service").mouseover(function(){$(".service").stop().show(),$(".bg2").addClass("bgs")}),$(".bg2,.service").mouseout(function(){$(".service").stop().hide(),$(".bg2").removeClass("bgs")}),$(".bg3,.guide").mouseover(function(){$(".guide").stop().show(),$(".bg3").addClass("bgs")}),$(".bg3,.guide").mouseout(function(){$(".guide").stop().hide(),$(".bg3").removeClass("bgs")}),$(".bg4,.Mobile").mouseover(function(){$(".Mobile").stop().show(),$(".bg4").addClass("bgs")}),$(".bg4,.Mobile").mouseout(function(){$(".Mobile").stop().hide(),$(".bg4").removeClass("bgs")})}),$(function(){$(".Subitem,.subnav").mouseover(function(){$(".subnav").stop().slideDown(),$(".Subitem,.subnav").mouseout(function(){$(".subnav").stop().slideUp()})})}),$(function(){$(".txt").focus(function(){$("#aas").hide()}),$(".txt").blur(function(){$("#aas").show()})});