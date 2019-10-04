
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
        background: '#ccc',
        borderTop : '1px solid black'
    });
    $('.login_tab2').css({
        borderTop: 'none',
        background : 'pink'
    })
    $('.useName_login').css({
        display: 'block'
    })
    $('.usePhone_login').css({
        display: 'none'
    })
})

$('.login_tab2').click(function () { 
    $(this).css({
        background: '#ccc',
        borderTop : '1px solid black'
    });
    $('.login_tab1').css({
        borderTop: 'none',
        background : 'pink'
    })
    $('.useName_login').css({
        display: 'none'
    })
    $('.usePhone_login').css({
        display: 'block'
    })
})


// 使用用户名登陆

// 判断输入正确的验证码
$('.ver_val').blur(function () { 
    let ver_num = $('.ver_num').text();
    if ($(this).val() === ver_num) {    
    } else {
          alert('请输入正确的验证码');
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

// 获取登陆按钮
$('.button').click(function () { 

    let user = $('.user').val();
    let pwd = $('.pwd').val();
    let ver_val = $('.ver_val').val();
    if (!user && !pwd && !ver_val) { 
        alert('用户名和密码和验证码不能为空');
        return;
    }

    let cookieStr = $.cookie('register') ? $.cookie('register') : '';
    let cookieObj = cookieStrToObj(cookieStr);
    if (user in cookieObj) {
        if (cookieObj[user] === pwd) {

            // 记住我(选中了为基数)
                let count = 0;
                $('#remember').click(function () {
                    count++;
                    console.log(count);
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
                })
            
            location.href = 'index.html';
            return;
        } else {
            alert('密码错误');
        }
    } else { 
        alert('用户名不存在');
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
        alert('请输入正确的手机号');
    }
}

// // 判断输入正确的验证码
$('.vel_value_phone').blur(function () { 
    let ver_num = $('.vel_num_phone').text(); 
    if ($(this).val() === ver_num) {    
    } else {
          alert('请输入正确的验证码');
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








