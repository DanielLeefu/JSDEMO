// 右边购物车
(function (){ 

    init();
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

// 点击出现购物车
let quick_count = 0;
$(".click_buy").click(function () { 
    quick_count++;
    if (quick_count % 2 === 1) {
        $('.right_quick_buy').css({ visibility: 'visible' });

        let cookieStr = $.cookie('carts') ? $.cookie('carts') : '';
        let cookieObj = cookieStrToObj(cookieStr);
        for (let SPid in cookieObj) { 
            let buy_dis_num = cookieObj[SPid].num;
            let buy_price = cookieObj[SPid].price;
        //加到点击出现的购物车上
            let all_mony = buy_price * buy_dis_num;
            $('.buy_num_span').text(buy_dis_num);
            $('.buy_num_all').text( `￥${all_mony}`);     
        }
    } else { 
     
        $('.right_quick_buy').css({ visibility: 'hidden'});

    }

})

// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 将东西添加到点击弹出的购物车页面中去

    let cookieStr = $.cookie('carts') ? $.cookie('carts') : '';
    let cookieObj = cookieStrToObj(cookieStr);
    for (let SPid in cookieObj) {
        let good = cookieObj[SPid];
        let str = `
 <li data-good-id="${SPid}">
    <div class="list_cart_img">
        <a href="particulars.html">
            <img class="insert_img" style="width:80px;height:80px;float:left;" src="${good.src}" alt="">
        </a>
    </div>
    <div class="list_cart_msg">
       <p>${good.name}</p> 
       <span>
            <em> ${good.price}</em>
            <i> * ${good.num}</i>
       </span>
       <a class="del" href="javascript:;">删除</a>
    </div>
</li>

            `;

        $('.right_quick_list').append(str);



    }
    

    // 点击删除
let $del = $('.del');
$del.click(function () { 
    let cookieStr = $.cookie('carts') ? $.cookie('carts') : '';
    let cookieObj = cookieStrToObj(cookieStr);
    let SPid = $(this).parent().parent().attr('data-good-id');
    $(this).parent().parent().remove();
    alert(SPid);
    console.log(SPid);
    delete cookieObj[SPid];
    $.cookie('carts', JSON.stringify(cookieObj), {
        expires: 7,
        path : '/'
    })
    location.reload();
})

    
    // 转换cookie
function cookieStrToObj(str) { 
    if (!str) { 
        return {};
    }
    return JSON.parse(str);
}



})();



// 
