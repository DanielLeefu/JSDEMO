// 验证手机号输入
$('.user_phone').blur(function () {
    let str = $('.user_phone').val();
    let re = /^1[5|8][6|8]\d{8}/;
    if (!re.test(str)) {
        alert('请输入正确的手机号 156 158 188');
    }
})

// 判断是否输入正确的验证码
$('.YZM_value').blur(function () {
    let YZM_img = $('.YZM_img').text();
    if ($(this).val() === YZM_img) {
        console.log(YZM_img);
    } else {
        console.log(YZM_img);
        alert('请输入正确的验证码');
    }
})
// 生成验证码
random();
function random() { 
    var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',1,2,3,4,5,6,7,8,9,0, 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let result = [];
    for (let i = 0; i < 4; i++) { 
        let random = arr[Math.floor(Math.random() * 72)];
        result.push(random);
    }
    let random = result.join('');
    $('.YZM_img').text(random);
    return random;
}

//刷新验证码
$('.ShuX').click(function () {
    random();
})
 
// 验证验证码

// 输入密码
$('.pwd').blur(function () {
    let num = $('.pwd').val();
    if (num.length >= 6 && num.length <= 12) {
        let num = $('.pwd').val();
        let a = 0;
        var b = 0;
        var c = 0;
        console.log(a);
        // 密码强度
        for (var i = 0; i < $('.pwd').val().length; i++) {
            // 是否出现数字
            console.log(i);
            if (num[i] >= 0 && num[i] <= 9) {
                a = 1;
                console.log(num);
                console.log(a);
                console.log(b);
               

            }
            // // 是否出现字母
            if (num[i].charCodeAt() >= 97 && num[i].charCodeAt() <= 122 || num[i].charCodeAt() >= 65 && num[i].charCodeAt() <= 90) {
                b = 1;
            }
            // // 是否出现
            if (num[i].charCodeAt() >= 33 && num[i].charCodeAt() <= 47 || num[i].charCodeAt() >= 58 && num[i].charCodeAt() <= 64) {
                c = 1;
            }
        }
        switch (a + b + c) {
            case 1: $('.pwd_low').css({ borderBottom: '2px solid green' });
                    $('.pwd_mid').css({ borderBottom: 'none' });
                    $('.pwd_hig').css({ borderBottom: 'none' });
                    break;

            case 2: $('.pwd_mid').css({ borderBottom: '2px solid green' });
                    $('.pwd_hig').css({ borderBottom: 'none' });
                    $('.pwd_low').css({ borderBottom: 'none' });
                    break;
            case 3: $('.pwd_hig').css({ borderBottom: '2px solid green' });
                    $('.pwd_low').css({ borderBottom: 'none' });
                    $('.pwd_mid').css({ borderBottom: 'none' });
                    break;
        }
      
    } else {
        $('.pwd_not').text('登录密码不能少于 6~12 个字符。');
        $('.pwd').focus(function () {
            $('.pwd_not').text('');
        })
        return;
    }
});

// 再次输入密码
$('.rea_pwd_value').blur(function () {
    console.log($('.rea_pwd_value').val());
    let rea_num = $('.rea_pwd_value').val();
    let pwd_num = $('.pwd').val();
    console.log($('.pwd').val());
    if (rea_num == pwd_num) {
       
    } else {
        $('.pwd_title').text('密码输入错误');
        $('.rea_pwd_value').focus(function () {
            $('.pwd_title').text('');
            return;
        })
        
    }

})


// 判断是否点击用户协议
 let count = $('.check_value').val(); 1
$('.check_value').click(function () { 
    count ++;
   
    console.log(count);
  
})

// 点击登录
$('.btn').click(function () { 
    
    if (count % 2 == 1) {
        alert('请阅读用户协议');
        return;
    } else {



    
        let user = $('.user_phone').val();
        let pwd = $('.rea_pwd_value').val();

        if (!user && !pwd) {
            alert('手机号密码不能为空');
            return;
        }

        let cookieStr = $.cookie('register') ? $.cookie('register') : "";
        let cookieObj = cookieStrToObj(cookieStr);

        if (user in cookieObj) {
            console.log(user);
            alert('用户名已存在');
            return;
        } else {
            // 创建cookie
            cookieObj[user] = pwd;
            // console.log(a);
        }
            $.cookie('register', JSON.stringify(cookieObj), {
                expires: 7,
                path : '/'
            })
        alert('注册成功');
        }



    }

)


// 字符串转对象
function cookieStrToObj(str) { 
    if (!str) { 
        return {};
    }
    return JSON.parse(str);
}
console.log('a');