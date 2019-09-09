var warp = document.getElementById('warp')
var body = document.getElementsByTagName('body')[0]
body.addEventListener('click', function (e) {
    //    console.log(e)
})
var score = 0;
function random() {
    var rander = parseInt(Math.random() * 10);
    rander = rander >= 5 ? rander - 5 : rander
    return rander;
}

function line() { //添加一行
    var div = document.createElement('div');
    div.style.display = 'flex';
    $(warp).prepend(div)
    if ($(warp).children().length > 9) {
        //这里遍历最后一行可以判断是否有黑块
        $(warp).children().eq(9).nextAll().remove();
    }
    var topY = 0
    timer = setInterval(() => {
        topY += 2;
        div.style.height = topY + 'px';
        if (topY == 100) {
            topY = 0;
            var black = random()
            for (let i = 0; i < 5; i++) {
                divs = document.createElement('div');
                divs.style.height = '100px';
                divs.style.width = '50%';
                if (black == i) {
                    divs.style.backgroundColor = 'black';
                    $(divs).attr('id', 'point')
                }
                $(divs).on('touchstart', function () {
                    if ($(this).attr('id') == 'point') {
                        $('audio').get(0).load()
                        $('audio').get(0).play()
                        score++;
                        $('.score span').text(score)
                        $(this).css('backgroundColor', 'white')
                    } else {
                        var r = alert("得分："+score+" 游戏结束，点击确认重新开始！");
                        // if (r == true) {
                            clearInterval(timer);
                        //     score = 0;
                            $('.score span').text(score)
                            $(warp).children().remove();
                            line();
                        // } else {
                            // clearInterval(timer);
                            // $('.warp1').css('display','none')
                        // }
                        
                    }
                })
                div.appendChild(divs)
            }
            clearInterval(timer)
            line()
        }
    }, 1);

}

line()
// scoll()