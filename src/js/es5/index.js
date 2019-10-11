"use strict";

// 初始化cookie
// 滚动条滚动距离
(function () {
  $(window).scroll(function () {
    // console.log($(window).scrollTop());
    var num = $(window).scrollTop();

    if (num > 800 && num < 1100) {
      $('#scrop1').addClass('li_bck').siblings().removeClass('li_bck');
      $('#scrop1').css({
        backgroundPositionX: '-200px',
        backgroundPositionY: 0 + 'px'
      });
    } else if (num >= 1400 && num < 1700) {
      $('#scrop2').addClass('li_bck').siblings().removeClass('li_bck');
      $('#scrop2').css({
        backgroundPositionX: '-200px',
        backgroundPositionY: -50 + 'px'
      });
    } else if (num >= 2000 && num < 2300) {
      $('#scrop3').addClass('li_bck').siblings().removeClass('li_bck');
      $('#scrop3').css({
        backgroundPositionX: '-200px',
        backgroundPositionY: -100 + 'px'
      });
    } else if (num >= 2600 && num < 2900) {
      $('#scrop4').addClass('li_bck').siblings().removeClass('li_bck');
      $('#scrop4').css({
        backgroundPositionX: '-200px',
        backgroundPositionY: -150 + 'px'
      });
    } else if (num >= 3200 && num < 3500) {
      $('#scrop5').addClass('li_bck').siblings().removeClass('li_bck');
      $('#scrop5').css({
        backgroundPositionX: '-200px',
        backgroundPositionY: -200 + 'px'
      });
    } else if (num >= 3800 && num < 4100) {
      $('#scrop6').addClass('li_bck').siblings().removeClass('li_bck');
      $('#scrop6').css({
        backgroundPositionX: '-200px',
        backgroundPositionY: -250 + 'px'
      });
    } else if (num >= 4400 && num < 4700) {
      $('#scrop7').addClass('li_bck').siblings().removeClass('li_bck');
      $('#scrop7').css({
        backgroundPositionX: '-200px',
        backgroundPositionY: -300 + 'px'
      });
    } else if (num >= 4700) {
      $('#scrop8').addClass('li_bck').siblings().removeClass('li_bck');
      $('#scrop8').css({
        backgroundPositionX: '-200px',
        backgroundPositionY: -350 + 'px'
      });
    }
  });
})(); // 轮播图


(function lunBo() {
  // 声明一个全局的定时器
  var timer = null;
  var index = 0;
  $('.It_left').click(function () {
    prev();
  });
  $('.It_right').click(function () {
    next();
  }); // 下一张的函数

  function next() {
    index++;

    if (index > 4) {
      // 图片到最后一张的时候，跳回到第一张，可以在最后一张中放入第一张的图片，一实现无缝轮播；
      // $('.big_img').animate({ left: -(index) * 960 }, 500);
      index = 0;
      $('.big_img').animate({
        left: 0
      }, 0);
    }

    $('.big_img').animate({
      left: -index * 960
    }, 500);
    small_img(index);
  }

  function prev() {
    index--;

    if (index < 0) {
      index = 4;
      $('.big_img').animate({
        left: -index * 960
      }, 0);
    }

    $('.big_img').animate({
      left: -index * 960
    }, 500);
    small_img(index);
  } // 设置自动轮播


  function auto() {
    timer = setInterval(function () {
      next();
      small_img(index);
    }, 2000);
  }

  auto(); // 鼠标移入，定时器取消

  $('.big_img').mouseenter(function () {
    clearInterval(timer);
  }); // 鼠标移出，定时器开启

  $('.big_img').mouseleave(function () {
    auto();
  }); // 鼠标移入小方块，改变大图

  $('.lunbo_btn li').mouseover(function () {
    var index = $(this).index();
    $('.big_img').animate({
      left: -index * 960
    }, 500);
    small_img(index);
  }); // 小方块的改变，通过下标，当前下标的元素添加样式，其他的清除样式

  function small_img(index) {
    $('.lunbo_btn li').eq(index).addClass('active').siblings().removeClass('active');
  }
})(); // 下面轮播图


(function () {
  var index = 0;
  var timer = null;
  var num = $('.presLeft_lunbo').find('li').length; // console.log(num);

  $('.Btn_pres_left').click(function () {
    prev();
  });
  $('.Btn_pres_right').click(function () {
    next();
  });

  function next() {
    index++;

    if (index > num - 1) {
      index = 0;
      $('.presLeft_lunbo').animate({
        left: -index * 238
      }, 500);
    }

    $('.presLeft_lunbo').animate({
      left: -index * 238
    }, 500);
  }

  function prev() {
    index--;

    if (index < 0) {
      index = num;
      $('.presLeft_lunbo').animate({
        left: -(index - 1) * 238
      }, 500);
    }

    $('.presLeft_lunbo').animate({
      left: -index * 238
    }, 500);
  }

  function auto() {
    timer = setInterval(function () {
      next();
    }, 1500);
  }

  auto();
  $('.presLeft_lunbo').mouseenter(function () {
    clearInterval(timer);
  });
  $('.presLeft_lunbo').mouseleave(function () {
    auto();
  });
})(); // 选项卡切换


(function () {
  var $list = $('.th_zq .zq_top_tab li');
  $list.each(function () {
    $(this).mouseenter(function () {
      var index = $(this).index();
      $(this).addClass('zq_top_active').siblings().removeClass('zq_top_active');
      $('.th_zq .detaile_ul').find('.XX_li1').eq($(this).index()).addClass('show_active').siblings().removeClass('show_active');
    });
  });
})(); // 粮油


(function () {
  var $list = $('.th_zq_liangyou .zq_top_tab li');
  $list.each(function () {
    $(this).mouseenter(function () {
      var index = $(this).index();
      $(this).addClass('zq_top_active').siblings().removeClass('zq_top_active');
      $('.th_zq_liangyou .detaile_ul').find('.XX_li1').eq($(this).index()).addClass('show_active').siblings().removeClass('show_active');
    });
  });
})(); // 2F


(function () {
  var $list = $('.two_lou .zq_top_tab li');
  $list.each(function () {
    $(this).mouseenter(function () {
      var index = $(this).index();
      $(this).addClass('zq_top_active').siblings().removeClass('zq_top_active');
      $('.two_lou .detaile_ul').find('.XX_li1').eq($(this).index()).addClass('show_active').siblings().removeClass('show_active');
    });
  });
})(); // 3f


(function () {
  var $list = $('.three_lou .zq_top_tab li');
  $list.each(function () {
    $(this).mouseenter(function () {
      var index = $(this).index();
      $(this).addClass('zq_top_active').siblings().removeClass('zq_top_active');
      $('.three_lou .detaile_ul').find('.XX_li1').eq($(this).index()).addClass('show_active').siblings().removeClass('show_active');
    });
  });
})(); // 4f


(function () {
  var $list = $('.four_lou .zq_top_tab li');
  $list.each(function () {
    $(this).mouseenter(function () {
      var index = $(this).index();
      $(this).addClass('zq_top_active').siblings().removeClass('zq_top_active');
      $('.four_lou .detaile_ul').find('.XX_li1').eq($(this).index()).addClass('show_active').siblings().removeClass('show_active');
    });
  });
})(); // 5F


(function () {
  var $list = $('.five_lou .zq_top_tab li');
  $list.each(function () {
    $(this).mouseenter(function () {
      var index = $(this).index();
      $(this).addClass('zq_top_active').siblings().removeClass('zq_top_active');
      $('.five_lou .detaile_ul').find('.XX_li1').eq($(this).index()).addClass('show_active').siblings().removeClass('show_active');
    });
  });
})(); // 6F


(function () {
  var $list = $('.six_lou .zq_top_tab li');
  $list.each(function () {
    $(this).mouseenter(function () {
      var index = $(this).index();
      $(this).addClass('zq_top_active').siblings().removeClass('zq_top_active');
      $('.six_lou .detaile_ul').find('.XX_li1').eq($(this).index()).addClass('show_active').siblings().removeClass('show_active');
    });
  });
})(); // 固定定位


(function () {
  var $list = $('#left_fixd_nav ul li');
  $list.each(function (i) {
    $(this).click(function () {
      var index = $(this).index();
      $(this).addClass('li_bck').siblings().removeClass('li_bck');
      $(this).css({
        backgroundPositionX: '-200px',
        backgroundPositionY: -(index * 50) + 'px'
      });
    });
  });
})(); // 获取当前时间


(function () {
  var date = new Date();
  var str = date.toLocaleString();
  $('.content_right .now_data').text(str);
})(); // 右边购物车


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
})();

$('#publicHeader #header_nav .header_nav_col .cat_all .two_list').css({
  'display': 'block'
});