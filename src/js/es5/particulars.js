"use strict";

// 启动放大镜插件
// 初始化
$("#exzoom").exzoom(); // 初始化cookie

init(); // 鼠标移入动画

$('.shop_sign').mouseenter(function () {
  $(this).css({
    display: 'none'
  });
  $('.shop_sign1').css({
    display: 'block'
  });
});
$('.shop_sign').mouseleave(function () {
  $(this).css({
    display: 'block'
  });
  $('.shop_sign1').css({
    display: 'none'
  });
}); // 点击切换语言

var countEN = 0;
$('.enToCh').click(function () {
  countEN++;

  if (countEN % 2 === 1) {
    $('.CH').text('dawee Quick-frozen Green Broad Bean 0.5kg/bag 10bags/carton');
    $('.CH').css({
      fontSize: "20px"
    });
    $('.enToCh').text('中文');
  } else {
    $('.CH').text('达伟 速冻青皮蚕豆（青蚕） 0.5kg/袋 10袋/箱');
    $('.enToCh').text('Eng');
  }
}); // 点击加框

$('.buy_peo .one').click(function () {
  $(this).css({
    border: '1px solid green',
    background: ' url(./img/particulars/img/duigou.min.jpg) no-repeat right bottom'
  });
  $('.buy_peo .two').css({
    border: '1px solid #eeeeee',
    background: 'none'
  });
});
$('.buy_peo .two').click(function () {
  $(this).css({
    border: '1px solid green',
    background: ' url(./img/particulars/img/duigou.min.jpg) no-repeat right bottom'
  });
  $('.buy_peo .one').css({
    border: '1px solid #eeeeee',
    background: 'none'
  });
}); // 温度

$('.main_r_tip span').mouseenter(function () {
  $('.tip_tip').css({
    display: 'block'
  });
});
$('.main_r_tip span').mouseleave(function () {
  $('.tip_tip').css({
    display: 'none'
  });
}); // 点击关注

var likeCount = 0;
$(".like").click(function () {
  likeCount++;
  $(this).css({
    background: 'url(./img/particulars/img/like_full.min.jpg) no-repeat'
  });

  if (likeCount > 1) {
    alert('您已经收藏过'); // 用框架提示
  }
}); // 选项卡切换

var $list = $('.control li');
$list.each(function () {
  $(this).click(function () {
    //通过 .index()方法获取元素下标，从0开始，赋值给某个变量
    var index = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    $('.tab_content').find('.tab_detail').eq($(this).index()).addClass('show').siblings().removeClass('show');
  });
}); // // 点击出现购物车
// let quick_count = 0;
// $(".click_buy").click(function () { 
//     quick_count++;
//     if (quick_count % 2 === 1) {
//         $('.right_quick_buy').css({ visibility: 'visible' });
//         let cookieStr = $.cookie('carts') ? $.cookie('carts') : '';
//         let cookieObj = cookieStrToObj(cookieStr);
//         for (let SPid in cookieObj) { 
//             let buy_dis_num = cookieObj[SPid].num;
//             let buy_price = cookieObj[SPid].price;
//         //加到点击出现的购物车上
//             let all_mony = buy_price * buy_dis_num;
//             $('.buy_num_span').text(buy_dis_num);
//             $('.buy_num_all').text( `￥${all_mony}`);     
//         }
//     } else { 
//         $('.right_quick_buy').css({ visibility: 'hidden'});
//     }
// })
// 购物车
// 获取加入购物车按钮

var counttest = 0;
$('.Buy_Btn2').click(function () {
  counttest++;
  console.log(counttest);
  var SPname = $('.CH').text();
  console.log(SPname);
  var SPprice = $('.text_price').text();
  console.log(SPprice);
  var SPsrc = $('.SPsrc').attr('src');
  console.log(SPsrc);
  var SPid = $('.SPid').text();
  console.log(SPid);
  /*	carts
         {
             "SPid" : {
                 ... : ...,
             }
         } */

  var cookieStr = $.cookie('carts') ? $.cookie('carts') : '';
  var cookieObj = cookieStrToObj(cookieStr);

  if (SPid in cookieObj) {
    cookieObj[SPid].num++;
  } else {
    cookieObj[SPid] = {
      "name": SPname,
      "price": SPprice,
      "src": SPsrc,
      "num": 1
    };
  } // 创建cookie


  $.cookie('carts', JSON.stringify(cookieObj), {
    expires: 7,
    path: '/'
  }); // 飞入动画

  var $img = $('.SPsrc').clone().css({
    width: '100px',
    height: '100px'
  });
  $img.fly({
    start: {
      left: event.pageX,
      //开始位置（必填）#fly元素会被设置成position: fixed 
      top: event.pageY //开始位置（必填） 鼠标点击位置

    },
    end: {
      left: $('.cart_num').offset().left + 70,
      //结束位置（必填） 购物车位置
      top: $('.cart_num').offset().top,
      //结束位置（必填） 
      width: 0,
      //结束时宽度 
      height: 0 //结束时高度 

    },
    onEnd: function onEnd() {
      //动画结束的时候回调 
      var num = parseInt($('.cart_num').text());
      var input_value = parseInt($('.input_value').val());
      $('.cart_num').text("".concat(num + input_value));
      $('.public_buy_num').text("".concat(num + input_value));
      var SPid = $('.SPid').text();
      var cookieStr = $.cookie('carts') ? $.cookie('carts') : '';
      var cookieObj = cookieStrToObj(cookieStr);
      cookieObj[SPid].num = num + input_value;
      $.cookie('carts', JSON.stringify(cookieObj), {
        expires: 7,
        path: '/'
      });
      $img.remove();
    }
  });
}); // cookie页面初始化

function init() {
  var SPid = $('.SPid').text();
  var cookieStr = $.cookie('carts') ? $.cookie('carts') : '';
  var cookieObj = cookieStrToObj(cookieStr);
  var sum = 0;

  for (SPid in cookieObj) {
    sum += cookieObj[SPid].num;
  }

  $('.cart_num').text("".concat(sum));
} // 设置加的操作


$('.btn_add').click(function () {
  var inputNum = $('.input_value').val();
  inputNum++;
  $('.input_value').val(inputNum);
}); // 设置减的操作

$('.btn_jie').click(function () {
  var inputNum = $('.input_value').val();

  if (inputNum > 1) {
    inputNum--;
    $('.input_value').val(inputNum);
  } else {
    $('.input_value').val(1);
    alert('不能低于最低数量');
  }
}); // 设置文本框输入

$('.input_value').blur(function () {
  var input_value = $('.input_value').val();
  console.log(input_value);

  if (!isNaN(parseInt(input_value)) && input_value > 1) {} else {
    $('.input_value').val(1);
  }
}); // 点击出现购物车

var quick_count = 0;
$(".click_buy").click(function () {
  quick_count++;

  if (quick_count % 2 === 1) {
    $('.right_quick_buy').css({
      visibility: 'visible'
    });

    var _cookieStr = $.cookie('carts') ? $.cookie('carts') : '';

    var _cookieObj = cookieStrToObj(_cookieStr);

    for (var SPid in _cookieObj) {
      var buy_dis_num = _cookieObj[SPid].num;
      var buy_price = _cookieObj[SPid].price; //加到点击出现的购物车上

      var all_mony = buy_price * buy_dis_num;
      $('.buy_num_span').text(buy_dis_num);
      $('.buy_num_all').text("\uFFE5".concat(all_mony));
    }
  } else {
    $('.right_quick_buy').css({
      visibility: 'hidden'
    });
  }
}); // // ++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 将东西添加到点击弹出的购物车页面中去

var cookieStr = $.cookie('carts') ? $.cookie('carts') : '';
var cookieObj = cookieStrToObj(cookieStr);

for (var SPid in cookieObj) {
  var good = cookieObj[SPid];
  var str = "\n <li data-good-id=\"".concat(SPid, "\">\n    <div class=\"list_cart_img\">\n        <a href=\"particulars.html\">\n            <img class=\"insert_img\" style=\"width:80px;height:80px;float:left;\" src=\"").concat(good.src, "\" alt=\"\">\n        </a>\n    </div>\n    <div class=\"list_cart_msg\">\n       <p>").concat(good.name, "</p> \n       <span>\n            <em> ").concat(good.price, "</em>\n            <i> * ").concat(good.num, "</i>\n       </span>\n       <a class=\"del\" href=\"javascript:;\">\u5220\u9664</a>\n    </div>\n</li>\n\n            ");
  $('.right_quick_list').append(str);
} // 点击删除


var $del = $('.del');
$del.click(function () {
  var cookieStr = $.cookie('carts') ? $.cookie('carts') : '';
  var cookieObj = cookieStrToObj(cookieStr);
  var SPid = $(this).parent().parent().attr('data-good-id');
  $(this).parent().parent().remove();
  alert(SPid);
  console.log(SPid);
  delete cookieObj[SPid];
  $.cookie('carts', JSON.stringify(cookieObj), {
    expires: 7,
    path: '/'
  });
  location.reload();
}); // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// // 点击出现购物车
// let quick_count = 0;
// $(".click_buy").click(function () { 
//     quick_count++;
//     if (quick_count % 2 === 1) {
//         $('.right_quick_buy').css({ visibility: 'visible' });
//         let cookieStr = $.cookie('carts') ? $.cookie('carts') : '';
//         let cookieObj = cookieStrToObj(cookieStr);
//         for (let SPid in cookieObj) { 
//             let buy_dis_num = cookieObj[SPid].num;
//             let buy_price = cookieObj[SPid].price;
//         //加到点击出现的购物车上
//             let all_mony = buy_price * buy_dis_num;
//             $('.buy_num_span').text(buy_dis_num);
//             $('.buy_num_all').text( `￥${all_mony}`);     
//         }
//     } else { 
//         $('.right_quick_buy').css({ visibility: 'hidden'});
//     }
// })
// 转换cookie

function cookieStrToObj(str) {
  if (!str) {
    return {};
  }

  return JSON.parse(str);
}