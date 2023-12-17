
window.onload = function () {
  let share = document.querySelector('.share')    // 按钮 分享账单
  let receive = document.querySelector('.receive')// 按钮 领取奖品
  let bill = document.querySelector('.bill')      //小鸡升天后出现的年度账单
  let xq01 = document.querySelector('.xq01')      //蓝色的星球
  let xq02 = document.querySelector('.xq02')      //红色的星球
  let xq03 = document.querySelector('.xq03')      //黄色的星球
  let maxbox = document.querySelector('.maxbox')  //最外面的大盒子
  let down = document.querySelector('.down')      //包裹住除了第四个柱子和鸽子的所有元素
  let a = document.getElementsByClassName('a')    //柱子元素的集合
  let zhu01 = document.querySelector('.zhu01')    //第1个 柱子
  let zhu02 = document.querySelector('.zhu02')    //第2个 柱子
  let zhu03 = document.querySelector('.zhu03')    //第3个 柱子
  let zhu04 = document.querySelector('.end-zhu')  //第4个 柱子
  let gz = document.querySelector('.gz')          //小鸡
  let green = document.querySelector('.green')    //电话下面的柱子
  let dh = document.querySelector('.dh')          //电话
  let jin02 = document.querySelector('.jin-2')    //金币下面的柱子
  let jin01 = document.querySelector('.jin')      //金币
  let wifi = document.querySelector('.wifi')      //wifi下面的柱子
  let wf = document.querySelector('.wf')          //wifi图片
  let phon04 = document.querySelector('.phon04')  //走到金币时出现的信息
  let phon03 = document.querySelector('.phon03')  //走到wifi时出现的信息
  let phon01 = document.querySelector('.phon01')  //点击第一个光圈后的信息
  let phons = document.querySelector('.phons')    //首页上方的信息
  let phon = document.querySelector('.phon')      //走到电话时展示的信息
  let red = document.querySelector('.red')        // 红旗
  let ten = document.querySelector('.ten')        // 滕王阁
  let mo = document.querySelector('.mo')          // 摩天轮
  let left = document.querySelector('.left ')     //最右下角那根柱子
  let quan01 = document.querySelector('.quan01')  // 第一个 光圈
  let quan02 = document.querySelector('.quan02')  // 第二个 光圈
  let quan03 = document.querySelector('.quan03')  // 第三个 光圈
  let quan04 = document.querySelector('.quan04')  // 第四个 光圈
  let jt = document.querySelector('.jt')          // 首页 箭头
  let mid = document.querySelector('.mid')        // 箭头上方的绿字信息


  /* audio01 ----  柱子升起时播放的音频   audio02 ----  开场音频
     audio03 ----  小鸡走路播放音频      audio04 ----  小鸡升天播放
  */
  /*  ps ---> 隐藏    ph ----> 展示 */


  // 第一段路程 ----------------------------------------------
  //点击第一根柱子 

  /*开关flag 是用来控制小鸡瞬移的
  有二种情况 --- 小鸡移动时不能瞬移
            --- 柱子动画时不能瞬移
            --- */
  var flag = false
  quan01.onclick = function () {
    quan01.setAttribute('class', 'quan01 ps')
    flag = false
    gz.setAttribute('class', 'gz yidong01') //---给小鸡加入动画
    Move('', 0, 1600)// -- 转向
    Move(1, 1600, 2800)
    Move('', 2800, 5650)
    Move(1, 5650, 7500) 
    audio03.play()  // --- 播放音频 
    setTime( phon01, 'phon01 ps', phon, 'phon ph', 7500)
    Rise(green, dh,7500)
    Play(7, 10000, quan02, 'quan02 ph', 14000)

  }//1------------------------------------------

  //第二段路程 ----------------------------------
  quan02.onclick = function () {
    quan02.setAttribute('class', 'quan02 ps')
    flag = false
    gz.setAttribute('class', 'gz yidong02')
    Move('', 0, 440)
    Move(1, 440, 4400)
    setTime( phon, 'phon ps', phon03, 'phon03 ph', 4400)
    Rise(wifi, wf,4400)
    Play(12, 7000, quan03, 'quan03 ph', 11000)

  }//2------------------------------------------

  flag02 = false
  //第三根柱子-----------------------------------
  quan03.onclick = function () {
    quan03.setAttribute('class', 'quan03 ps')
    flag02 = true
    flag = false
    gz.setAttribute('class', 'gz yidong03')
    Move(2, 0, 1445)
    Move(3, 1445, 2855)
    Move(2, 2855, 4700)
    setTime( phon03, 'phon03 ps', phon04, 'phon04 ph', 4700)
    Rise(jin01, jin02,4700)
    Play(17, 7500, quan04, 'quan04 ph', 11000)
  }//3------------------------------------------

  //第四根柱子-----------------------------------
  quan04.onclick = function () {
    quan04.setAttribute('class', 'quan04 ps')
    flag = false
    gz.setAttribute('class', 'gz yidong04')
    Move(3, 0, 1970)
    Move('', 1970, 3400)
    //小鸡走到最后一根柱子时
/* 
   ---1.关闭小鸡走路音频
   ---2.播放上升音频
   ---3.给背景 也加入上升动画 c
   ---4.关闭顶部信息  
   ---5.给周围的元素一个下降的动画 e
   ---6.给小鸡 和 柱子 加入上升动画  ji
*/
    setTimeout(function () {
      audio03.pause()
      audio04.play()
      maxbox.classList.add('c')//背景上升
      phon04.setAttribute('class', 'phon04 ps')//关闭顶部信息
      down.setAttribute('class', 'down e')
      gz.setAttribute('class', 'gz wz ji')//
      zhu04.setAttribute('class', 'end-zhu ji')
    }, 3400)
    //小鸡上升完成后出现 星球和 账单信息 出现动画 xin
    setTimeout(function () {
      xq01.setAttribute('class', 'xq01 xin')
      xq02.setAttribute('class', 'xq02 xin')
      xq03.setAttribute('class', 'xq03 xin')
      bill.setAttribute('class', 'bill xin')
      share.setAttribute('class', 'share xin')
      receive.setAttribute('class', 'receive xin')
    }, 13000)
    audio03.play()
  }
  //---------------------------------------------------
  /*小鸡瞬移*/ 
  zhu01.onclick = function () {
    if (flag) {
      gz.setAttribute('class', 'gz wy01')
      phon04.setAttribute('class', 'phon04 ps')
      phon03.setAttribute('class', 'phon03 ps')
      phon.setAttribute('class', 'phon ph')
    }
  }
  zhu02.onclick = function () {
    if (flag) {
      gz.setAttribute('class', 'gz wy02')
      phon04.setAttribute('class', 'phon04 ps')
      phon.setAttribute('class', 'phon ps')
      phon03.setAttribute('class', 'phon03 ph')
    }
  }
  zhu03.onclick = function () {
    if (flag && flag02) {
      gz.setAttribute('class', 'gz wy03')
      phon.setAttribute('class', 'phon ps')
      phon03.setAttribute('class', 'phon03 ps')
      phon04.setAttribute('class', 'phon04 ph')
    }
  }
  //滑动事件------------------------------------------
  jt.addEventListener('click', function () {
    console.log(1);
    audio02.play();
    setTimeout(function () {
      audio02.pause();
      audio01.play()
    }, 7000)
    setTimeout(function () {
      audio01.pause()
    }, 9600)
  })

  jt.addEventListener('click', function () {
    jt.classList.add('ps')
    mid.classList.add('ps')
    red.classList.add('hua')
    ten.classList.add('hua')
    mo.classList.add('hua')
    left.classList.add('hua')
    setTimeout(function () {
      Num(0)
    }, 5000)
    setTimeout(function () {

      phons.classList.add('ps')
      phon01.classList.add('ph')
      quan01.classList.add('ph')
    }, 9000)
  })
  // ---------------------------------------------------------------
  //封装的函数



  // x 是从第几块开始出现动画效果 传入的参数
  // x == 7 到第一段路的终点时停止定时器
  //下面的以此类推
  function Num(x) {
    let sum = 0;
    let xjh = setInterval(function () {
      sum = x;
      a[sum].classList.add('b')
      x++
      if (x == 7) {
        clearInterval(xjh)//第一段
        audio01.pause()
      }
      if (x == 12) clearInterval(xjh)//第二段
      if (x == 17) clearInterval(xjh)
      if (x == 21) clearInterval(xjh)
    }, 200)

  }
  /*Move 封装的是鸽子转向的动画  
    -----x 表示的是 鸽子的转向
    -----y 表示的是 从开头到当前位置用的总时间
    -----z 表示的是 从开头到走完这一段路的总时间
    z - y 表示的是  走这一段路的时间*/
  function Move(x, y, z) {
    var b = 1
    setTimeout(function () {
      var num = 0;
      var c3 = setInterval(function () {
        var a = x
        if (b > 5) b = 1
        gz.setAttribute('src', `../image/gz${a}${b}.png`)
        b++
        num++
        if (num == parseInt((z - y) / 200)) {
          clearInterval(c3)
          gz.setAttribute('src', `../image/gz${a}1.png`)
        }
      }, 200)
    }, y)
  }

  //setTime  封装的是顶部展示的信息
  //x y 表示 信息 i m 表示状态
  function setTime(x, i, y, m, z) {
    setTimeout(function () {
      audio03.pause()
      x.setAttribute('class', i)
      y.setAttribute('class', m)
    }, z)
  }
//Rise封装的是 电话 wifi 金币 柱子升起的动画
function Rise(x,y,z){
  setTimeout(function(){
    x.classList.add('b')
    y.classList.add('b')
  },z)
}

// Play 封装的是 延迟出现 柱子升起的动画效果 和 光圈
// z 表示光圈  m 表示显示
  function Play(x, y, z, m, i) {
    setTimeout(function () {
      audio01.play()
      Num(x)
    }, y)
    setTimeout(function () {
      flag = true
      audio01.pause()
      z.setAttribute('class', m)
    }, i)
    //点击光圈后播放小鸡走路的音频
    audio03.play()
  }


}