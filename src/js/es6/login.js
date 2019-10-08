
// 读取cookie（七天免登陆）
let cookieStrMsg = $.cookie('loginMsg');
console.log(cookieStrMsg);
let cookieObjMsg = cookieStrToObj(cookieStrMsg);
// 放进去
$('.user').val( cookieObjMsg['user']);
$('.pwd').val(cookieObjMsg['pwd']);


// 点击改变按钮背景颜色

$('.login_tab1').click(function () { 
    
    $(this).css({
        background: '#fff',
        borderTop : '1px solid #f2f2f1'
    });
    $('.login_tab2').css({
        borderTop: 'none',
        background : '#ccc'
    })
    $('.useName_login').css({
        display: 'block'
    })
    $('.usePhone_login').css({
        display: 'none'
    })
    $('.button').css({ display: 'block' })
    $('.button2').css({display : 'none'})
    
})

$('.login_tab2').click(function () { 
    $(this).css({
        background: '#fff',
        borderTop : '1px solid #f2f2f1'
    });
    $('.login_tab1').css({
        borderTop: 'none',
        background : '#ccc'
    })
    $('.useName_login').css({
        display: 'none'
    })
    $('.usePhone_login').css({
        display: 'block'
    })
    $('.button2').css({ display: 'block' })
    $('.button').css({display : 'none'})
})


// 使用用户名登陆

// 判断输入正确的验证码
$('.ver_val').blur(function () { 
    let ver_num = $('.ver_num').text();
    if ($(this).val() === ver_num) {    
    } else {
        Dialogify.alert('请输入正确的验证码');
        return;
    }
})

// 刷新验证码
$('.SXin').click(function () { 
    // randomNum();
    getRanStr();
})

// 忘记密码
$('.forgeter').click(function () {
    location.href = 'register.html';
})

// 判断是否点了记住我（七天免登录）
  let count = 0;
$('#remember').click(function () { count++; return count; })
console.log(count);
    
// 获取登陆按钮
$('.button').click(function () { 
  
    let user = $('.user').val();
    let pwd = $('.pwd').val();
    let ver_val = $('.ver_val').val();
    if (!user && !pwd && !ver_val) { 
        Dialogify.alert('用户名和密码和验证码不能为空');
       
        return;
    }

    let cookieStr = $.cookie('register') ? $.cookie('register') : '';
    let cookieObj = cookieStrToObj(cookieStr);
    if (user in cookieObj) {
        if (cookieObj[user] === pwd) {

            // 如果点击了记住我，就创建七天免登录cookie
                    if (count % 2 === 1) { 
                        //    创建cookie
                        let cookieObj = {
                            user: $('.user').val(),
                            pwd : $('.pwd').val()
                        }
                        $.cookie('loginMsg', JSON.stringify(cookieObj), {
                            expires: 7,
                            path : '/'
                        })
                    }
              
            
            // 登录成功放置用户名到页面，设置cookie存储
            let H_name = $('.user').val();
            $.cookie('headerName',null,{
                expires: -1
            });
            $.cookie('headerName',H_name);
            
            
            location.href = 'index.html';
            return;
        } else {
            Dialogify.alert('密码错误');     
            return;
        }
    } else { 
        Dialogify.alert('用户名不存在');
        return;
    }



})



//    // 记住我(选中了为基数)
//    let count = 0;
//    $('#remember').click(function () {
//        count++;
//        console.log(count);
//        if (count % 2 === 1) { 
//         //    创建cookie
//            let cookieObj = {
//                user: $('.user').val(),
//                pwd : $('.pwd').val()
//            }
//            $.cookie('loginMsg', JSON.stringify(cookieObj), {
//                expires: 7,
//                path : '/'

//            })

//        }
//    })




// 转换cookie对象
function cookieStrToObj(str) { 
    if (!str) { 
        return {};
    }
    return JSON.parse(str);
}



// 生成随机字母
getRanStr();
function getRanStr() {
    var result = [];
    for (var i = 0; i < 4; i++){
        var ranNum = Math.ceil(Math.random() * 25);
        result.push(String.fromCharCode(65 + ranNum));
    }
    let ranStr = result.join('');
    $('.ver_num').text(ranStr);
    return ranStr;
    
}






// 使用手机号登陆

// 判断手机号输入是否正确
$('.user_phone').blur = function () { 
    let str = $('.user_phone').val(); 
    let re = /0?(13|14|15|18|17)[0-9]{9}/;
    if (!re.test(str)) { 
        Dialogify.alert('请输入正确的手机号');
        return;
    }
}

// // 判断输入正确的验证码
$('.vel_value_phone').blur(function () { 
    let ver_num = $('.vel_num_phone').text(); 
    if ($(this).val() === ver_num) {    
    } else {
        Dialogify.alert('请输入正确的验证码');
        return;
    }
})

// 生成随机数
randomNum();
function randomNum() { 
    let randomNum = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
    $('.vel_num_phone').text(randomNum);
    return randomNum;
}

// 刷新验证码
$('.SXin_phone').click(function () { 
    randomNum();
})



// 手机号登录
$('.button2').click(function () {


    let user = $('.user_phone').val();
    let ver_val = $('.vel_value_phone').val();
    if (!user && !ver_val) { 
        Dialogify.alert('用户名验证码不能为空');

        return;
    }

   

    let cookieStr = $.cookie('register') ? $.cookie('register') : '';
    let cookieObj = cookieStrToObj(cookieStr);
    if (user in cookieObj) {
        location.href = 'index.html';
    } else {
        Dialogify.alert('用户名不存在');
        
    }
})