// 启动放大镜插件
// 初始化
$("#exzoom").exzoom();

// 初始化cookie
init();

// 鼠标移入动画
$('.shop_sign').mouseenter(function () { 
    $(this).css({ display: 'none' });
    $('.shop_sign1').css({ display: 'block' });
})
$('.shop_sign').mouseleave(function () { 
    $(this).css({ display: 'block' });
    $('.shop_sign1').css({ display: 'none' });
})


// 点击切换语言
let countEN = 0;
$('.enToCh').click(function () {
    countEN++;
    if (countEN % 2 === 1) { 
        $('.CH').text('dawee Quick-frozen Green Broad Bean 0.5kg/bag 10bags/carton');
        $('.CH').css({ fontSize: "20px" });
        $('.enToCh').text('中文');
    } else {
        $('.CH').text('达伟 速冻青皮蚕豆（青蚕） 0.5kg/袋 10袋/箱');
        $('.enToCh').text('Eng');
    }
})

// 点击加框
$('.buy_peo .one').click(function () {
    $(this).css({
        border: '1px solid green',
        background : ' url(./img/particulars/img/duigou.min.jpg) no-repeat right bottom'
    })
    $('.buy_peo .two').css({
        
        border: '1px solid #eeeeee',
        background : 'none'
    })
})
$('.buy_peo .two').click(function () {
    $(this).css({
        border: '1px solid green',
        background : ' url(./img/particulars/img/duigou.min.jpg) no-repeat right bottom'
    })
    $('.buy_peo .one').css({
        border: '1px solid #eeeeee',
        background : 'none'
    })
})

// 温度
$('.main_r_tip span').mouseenter(function () { 
    $('.tip_tip').css({display:'block'});
})
$('.main_r_tip span').mouseleave(function () { 
    $('.tip_tip').css({display:'none'});
})

// 点击关注
let likeCount = 0;
$(".like").click(function () { 
    likeCount++;
    $(this).css({background:'url(./img/particulars/img/like_full.min.jpg) no-repeat'})
    if (likeCount > 1) { 
        alert('您已经收藏过');
        // 用框架提示
    }
})


// 选项卡切换

let $list = $('.control li')
$list.each(function () { 
    $(this).click(function () {
        //通过 .index()方法获取元素下标，从0开始，赋值给某个变量
        let index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');

        $('.tab_content').find('.tab_detail').eq($(this).index()).addClass('show').siblings().removeClass('show');
    })
})


// 点击出现购物车
let quick_count = 0;
$(".click_buy").click(function () { 
    quick_count++;
    console.log(quick_count);
    if (quick_count % 2 === 1) {
        $('.right_quick_buy').css({ visibility:'visible' });
    } else { 
     
        $('.right_quick_buy').css({ visibility: 'hidden'});

    }

})

// 购物车
// 获取加入购物车按钮
$('.Buy_Btn2').click(function () {
    let SPname = $('.CH').text();
    console.log(SPname);
    let SPprice = $('.text_price').text();
    console.log(SPprice);
    let SPsrc = $('.SPsrc').attr('src');
    console.log(SPsrc);
    let SPid = $('.SPid').text();
    console.log(SPid);
    /*	carts
           {
               "SPid" : {
                   ... : ...,
               }
           } */
    let cookieStr = $.cookie('carts') ? $.cookie('carts') : '';
    let cookieObj = cookieStrToObj(cookieStr);
    if (SPid in cookieObj) { 
        cookieObj[SPid].num++;
    } else {
        cookieObj[SPid] = {
            "name": SPname,
            "price": SPprice,
            "src": SPsrc,
            "num" : 1
        }
    }
    // 创建cookie
    $.cookie('carts', JSON.stringify(cookieObj), {
        expires : 7,
        path : '/'
    })

    // 飞入动画
    let $img = $('.SPsrc').clone().css({
        width: '100px',
        height: '100px'
    });
    $img.fly({
        start: {
        left: event.pageX, //开始位置（必填）#fly元素会被设置成position: fixed 
        top: event.pageY //开始位置（必填） 鼠标点击位置
    },
    end: {
        left: $('.cart_num').offset().left+70, //结束位置（必填） 购物车位置
        top: $('.cart_num').offset().top, //结束位置（必填） 
        width: 0, //结束时宽度 
        height: 0 //结束时高度 
        },
    
    onEnd: function() { //动画结束的时候回调 
        let num = parseInt($('.cart_num').text());
        $('.cart_num').text(`${num + 1}`);
        $('.public_buy_num').text(`${num + 1}`);
 
    $img.remove();

    }
});
    
});

// cookie页面初始化
function init() { 
    let SPid = $('.SPid').text();
    let cookieStr = $.cookie('carts') ? $.cookie('carts') : '';
    let cookieObj = cookieStrToObj(cookieStr);
    let sum = 0;
    for (SPid in cookieObj) { 
        sum += cookieObj[SPid].num;
    }
    $('.cart_num').text(`${sum}`);

}

// 转换cookie
function cookieStrToObj(str) { 
    if (!str) { 
        return {};
    }
    return JSON.parse(str);
}



