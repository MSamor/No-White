var warp = document.getElementById('warp')
var body = document.getElementsByTagName('body')[0]
body.addEventListener('click', function (e) {
    //    console.log(e)
})

function random() {
    var rander = parseInt(Math.random() * 10);
    rander = rander >= 5 ? rander - 5 : rander
    return rander;
}

function line() { //添加一行
    var div = document.createElement('div');
    div.style.display = 'flex';
    $(warp).prepend(div)
    if ($(warp).children().length>9){
        //这里遍历最后一行可以判断是否有黑块
        $(warp).children().eq(9).nextAll().remove();
    }
    var topY = 0
    timer = setInterval(() => {
        topY += 1;
        div.style.height = topY+'px';
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
                $(divs).on('click', function () {
                    if ($(this).attr('id') == 'point') {
                        console.log('得分')
                        $(this).css('backgroundColor', 'white')
                    }else{
                        alert('error')
                        clearInterval(timer)
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