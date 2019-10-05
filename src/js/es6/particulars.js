// 启动放大镜插件
// 初始化
$("#exzoom").exzoom();


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




