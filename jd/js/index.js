// 加载完毕时间
window.onload = function () {
  // 顶部通栏 滚动效果
  headerScroll()
  // 倒计时效果S
  cutDownTime()
  // 轮播图效果
  banner()
}
  // 顶部通栏 滚动效果
function headerScroll () {
  // 
  var nav = document.querySelector('.jd_nav')
  // 距离顶部的高度
  var navTop = nav.offsetTop
  // 元素自身的高度
  var navHeight = nav.offsetHeight
  // 希望获取的是从 顶部 到 导航栏底部 之间的距离
  var maxDistance = navTop + navHeight
  // 获取 顶部通栏
  var headerDom = document.querySelector('.jd_header')

  window.onscroll = function () {
    // 获取滚动距离
    var scrollDistance = window.pageYOffset || window.document.body.scrollTop || window.document.documentElement.scrollTop
    // console.log(scrollDistance)
    // 计算一个 0 ~ 1 的百分数
    var percent = scrollDistance / maxDistance
    percent = percent > 1 ? 1 : percent
    // 设置顶部通栏的透明度
    headerDom.style.background = "rgba(201,21,35,"+percent+")"
  }
}
  // 倒计时效果
function cutDownTime () {

  // 定义 总时间
  var totalHour = 2

  //转化为s
  var totalSec = totalHour * 60 * 60

  var liArr = document.querySelectorAll('.main_content:nth-child(1) .content_top li')
  console.log(liArr)

  var timer = setInterval(function () {
    if (totalSec === 0) {
      clearInterval(timer)
      console.log('over')
      return
    }
    totalSec--
    // 当前的秒 转换为 时分秒
    var hour = Math.floor(totalSec / 3600)
    var minute = Math.floor(totalSec % 3600 / 60)
    var sec = totalSec % 60
    liArr[0].innerText = Math.floor(hour / 10)
    liArr[1].innerText = hour % 10

    liArr[3].innerText = Math.floor(minute / 10)
    liArr[4].innerText = minute % 10

    liArr[6].innerText = Math.floor(sec / 10)
    liArr[7].innerText = sec % 10

  },1000)
}
  // 轮播图效果
function banner () {
  // 获取屏幕宽度
  var width = document.body.offsetWidth;
  // console.log(width)
  // 获取轮播图的ul
  var moveUl = document.querySelector('.banner_images')
  // 索引的li标签
  var indexLiArr = document.querySelectorAll('.banner_index li')

  var index = 1

  var timId = setInterval(function () {
    index ++
    if (index >= 9) {
      index = 1
    }
    // 修改 ul 的位置
    moveUl.style.transform = 'translateX(-'+index *width+'px)'
    for (var i=0; i<indexLiArr.length; i++) {
      indexLiArr[i].className = ''
    }
    indexLiArr[index-1].className = 'is-white'
    // console.log(indexLiArr)
  },2000)
}