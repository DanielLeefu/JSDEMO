"use strict";

// 右边购物车
(function () {
  init(); // cookie页面初始化

  function init() {
    var SPid = $('.SPid').text();
    var cookieStr = $.cookie('carts') ? $.cookie('carts') : '';
    var cookieObj = cookieStrToObj(cookieStr);
    var sum = 0;

    for (SPid in cookieObj) {
      sum += cookieObj[SPid].num;
    }

    $('.cart_num').text("".concat(sum));
  } // 点击出现购物车


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
  }); // 转换cookie

  function cookieStrToObj(str) {
    if (!str) {
      return {};
    }

    return JSON.parse(str);
  }
})(); //