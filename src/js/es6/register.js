// 验证手机号输入
$('user_phone').blur(function () { 
    let str = $('user_phone').val();
    let re =/^1[5|8][6|8]\d{8}/;
    if (!re.test(str)) { 
        alert('请输入正确的手机号 156 158 188');
    }
})

// 判断是否输入正确的验证码
$('.YZM_value').blur(function () {
    let YZM_img = $('.YZM_img').text();
    if ($(this).val() === YZM_img) { 
        console.log(YZM_img);
    }else{ 
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
$('.pwd').blur(function(){
    $('this')
})

12