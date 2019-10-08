

// 轮播图

(function lunBo() {
    // 声明一个全局的定时器
    let timer = null;
    let index = 0;
    $('.It_left').click(function () {
        prev();
    })
    $('.It_right').click(function () {
        next();
    })

    // 下一张的函数
    function next() { 
        index++;
        if (index > 4) { 
            // 图片到最后一张的时候，跳回到第一张，可以在最后一张中放入第一张的图片，一实现无缝轮播；
            // $('.big_img').animate({ left: -(index) * 960 }, 500);
            index = 0;
            $('.big_img').animate({ left: 0 }, 0);
            
        }
        $('.big_img').animate({ left: -(index) * 960 }, 500);
        small_img(index);
    }
    function prev() { 
        index--;
        if (index < 0) { 
            index = 4;
            $('.big_img').animate({left:-(index)*960},0)
        }
        $('.big_img').animate({left:-(index)*960},500);
        small_img(index);
    }
    // 设置自动轮播
    function auto() { 
        timer = setInterval(function () { 
            next();
            small_img(index);
        },2000)
    }
    auto();
    // 鼠标移入，定时器取消
    $('.big_img').mouseenter(function () { 
        clearInterval(timer);
    })
    // 鼠标移出，定时器开启
    $('.big_img').mouseleave(function () { 
        auto();
    })

    // 鼠标移入小方块，改变大图
    $('.lunbo_btn li').mouseover(function () { 
        let index = $(this).index();
        $('.big_img').animate({left:-(index)*960},500);
        small_img(index);
    })
    // 小方块的改变，通过下标，当前下标的元素添加样式，其他的清除样式
    function small_img(index) { 
        $('.lunbo_btn li').eq(index).addClass('active').siblings().removeClass('active');
    }

})();