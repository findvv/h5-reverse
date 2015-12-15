var num = 0,
  open = false,
  openZ = false,
  openF = false,
  allImgs = [
    'http://news.sohu.com/upload/fanzhuanchinazzx/img/43.png',
    'http://news.sohu.com/upload/fanzhuanchinazzx/img/46.gif',
    'http://news.sohu.com/upload/fanzhuanchinazzx/img/45.png',
    'http://news.sohu.com/upload/fanzhuanchinazzx/img/47.png',
    'http://news.sohu.com/upload/fanzhuanchinazzx/img/44.png',
    'http://news.sohu.com/upload/fanzhuanchinazzx/img/12.png',
    'http://news.sohu.com/upload/fanzhuanchinazzx/img/30.png',
    'http://news.sohu.com/upload/fanzhuanchinazzx/img/1.jpg',
    'http://news.sohu.com/upload/fanzhuanchinazzx/img/17.png',
    'http://news.sohu.com/upload/fanzhuanchinazzx/img/3.png',
    'http://news.sohu.com/upload/fanzhuanchinazzx/img/35.png',
    'http://news.sohu.com/upload/fanzhuanchinazzx/img/22.png',
    'http://mfiles.sohu.com/news/fanzhuanchinazzx/img/40.png',
    'http://news.sohu.com/upload/fanzhuanchinazzx/img/8.png',
    'http://news.sohu.com/upload/fanzhuanchinazzx/img/27.png',
    'http://news.sohu.com/upload/fanzhuanchinazzx/img/14.png',
    'http://news.sohu.com/upload/fanzhuanchinazzx/img/0.png',
    'http://news.sohu.com/upload/fanzhuanchinazzx/img/32.png',
    'http://news.sohu.com/upload/fanzhuanchinazzx/img/19.png',
    'http://news.sohu.com/upload/fanzhuanchinazzx/img/5.png',
    'http://news.sohu.com/upload/fanzhuanchinazzx/img/37.png',
    'http://news.sohu.com/upload/fanzhuanchinazzx/img/24.png',
    'http://news.sohu.com/upload/fanzhuanchinazzx/img/42.png',
    'http://news.sohu.com/upload/fanzhuanchinazzx/img/11.png',
    'http://news.sohu.com/upload/fanzhuanchinazzx/img/29.png',
    'http://news.sohu.com/upload/fanzhuanchinazzx/img/16.png',
    'http://news.sohu.com/upload/fanzhuanchinazzx/img/34.png',
    'http://news.sohu.com/upload/fanzhuanchinazzx/img/21.png',
    'http://news.sohu.com/upload/fanzhuanchinazzx/img/7.png',
    'http://news.sohu.com/upload/fanzhuanchinazzx/img/39.png',
    'http://news.sohu.com/upload/fanzhuanchinazzx/img/26.png',
    'http://news.sohu.com/upload/fanzhuanchinazzx/img/13.png',
    'http://news.sohu.com/upload/fanzhuanchinazzx/img/31.png',
    'http://mfiles.sohu.com/news/fanzhuanchinazzx/img/2.jpg',
    'http://news.sohu.com/upload/fanzhuanchinazzx/img/18.png',
    'http://news.sohu.com/upload/fanzhuanchinazzx/img/4.png',
    'http://news.sohu.com/upload/fanzhuanchinazzx/img/36.png',
    'http://news.sohu.com/upload/fanzhuanchinazzx/img/23.png',
    'http://news.sohu.com/upload/fanzhuanchinazzx/img/41.png',
    'http://news.sohu.com/upload/fanzhuanchinazzx/img/10.png',
    'http://news.sohu.com/upload/fanzhuanchinazzx/img/9.png',
    'http://news.sohu.com/upload/fanzhuanchinazzx/img/28.png',
    'http://news.sohu.com/upload/fanzhuanchinazzx/img/15.png',
    'http://news.sohu.com/upload/fanzhuanchinazzx/img/33.png',
    'http://news.sohu.com/upload/fanzhuanchinazzx/img/20.png',
    'http://news.sohu.com/upload/fanzhuanchinazzx/img/6.png',
    'http://news.sohu.com/upload/fanzhuanchinazzx/img/38.png',
    'http://news.sohu.com/upload/fanzhuanchinazzx/img/25.png'
  ];

function findId(str) {
  return document.getElementById(str);
}

function animateEnd(id, func) {
  var dom = document.getElementById(id)
  dom.addEventListener("webkitAnimationEnd", function() {　　
    func();
  }, false);
  dom.addEventListener("animationEnd", function() {　　
    func();
  }, false);
}

function transitionEnd(id, func) {
  var dom = document.getElementById(id)
  dom.addEventListener("webkitTransitionEnd", function() {　　
    func();
  }, false);
  dom.addEventListener("transitionEnd", function() {　　
    func();
  }, false);
}
function zhengCtrl() {
  switch (num) {
    case 0:
      findId('e0').className = 'p0';
      findId('e1').className = 'p1-1';
      openF = true;
      break;
    case 2:
      findId('e3').className = 'p3-2';
      transitionEnd('a7', function() {
        findId('e3').className = 'p3-3';
        findId('e4').className = 'p4-1';
        openF = true;
      });
      break;
    case 4:
      var e6 = findId('e6');
      findId('c7').className = 'c7';
      e6.className = 'p6-2';
      setTimeout(function() {
        e6.className = 'p6-1';
        findId('e5').className = 'p5-2';
      }, 900); //@s7-a1
      setTimeout(function() {
        e6.className = '';
        findId('e7').className = 'p7-1';
        openF = true;
      }, 1700);
      break;
    case 6:
      findId('e9').className = 'p9-1';
      transitionEnd('e9', function() {
        findId('e9').className = 'p9-2';
      });
      setTimeout(function() {
        findId('e10').className = 'p10-1';
        findId('e8').className = 'p8-2';
        openF = true;
      }, 1500); //@s12-a2
      break;
    case 8:
      findId('e11').className = 'p11-2';
      findId('e12').className = 'p12-2';
      setTimeout(function() {
        findId('e12').className = 'p12-3';
        findId('e13').className = 'p13-1';
        openF = true;
      }, 1000); //@s14-a1
      break;
    case 10:
      findId('e14').className = 'p14-2';
      transitionEnd('k2', function() {
        findId('e14').className = 'p14-3';
        findId('e15').className = 'p15-1';
        openF = true;
      });
      break;
  }
  num += 1;
}
function fanCtrl() {
  switch (num) {
    case 1:
      findId('e1').className = 'p1-2';
      findId('e2').className = 'p2-1';
      animateEnd('e2', function() {
        findId('e2').className = 'p2-2';
        findId('e3').className = 'p3-1';
        openZ = true;
      });
      break;
    case 3:
      findId('e4').className = 'p4-2';
      transitionEnd('e4', function() {
        findId('e5').className = 'p5-1';
        openZ = true;
      });
      break;
    case 5:
      findId('e7').className = 'p7-2';
      transitionEnd('e7', function() {
        findId('e8').className = 'p8-1';
        openZ = true;
      });
      break;
    case 7:
      findId('e10').className = 'p10-2';
      setTimeout(function() {
        findId('e11').className = 'p11-1';
      }, 400); //@s12-a4
      setTimeout(function() {
        findId('e12').className = 'p12-1';
        openZ = true;
      }, 1400); //@s12-a4 + @s13-a4
      break;
    case 9:
      findId('e13').className = 'p13-2';
      transitionEnd('e13', function() {
        findId('e14').className = 'p14-1';
        openZ = true;
      });
      break;
  }
  num += 1;
}
window.addEventListener('deviceorientation', function(event) {
  var alpha = parseInt(event.alpha);
  if (open) {
    if ((Math.abs(alpha) < 20)) {
      if (openZ) {
        openZ = false;
        zhengCtrl();
      }
    }
    if ((Math.abs(alpha - 180) < 20)) {
      if (openF) {
        openF = false;
        fanCtrl();
      }
    }
  }
}, false);
function animateCtrl(){
  switch (num) {
    case 0:
      findId('e0').className = 'p0';
      findId('e1').className = 'p1-1';
      openF = true;
      break;
    case 2:
      findId('e3').className = 'p3-2';
      transitionEnd('a7', function() {
        findId('e3').className = 'p3-3';
        findId('e4').className = 'p4-1';
        openF = true;
      });
      break;
    case 4:
      var e6 = findId('e6');
      findId('c7').className = 'c7';
      e6.className = 'p6-2';
      setTimeout(function() {
        e6.className = 'p6-1';
        findId('e5').className = 'p5-2';
      }, 900); //@s7-a1
      setTimeout(function() {
        e6.className = '';
        findId('e7').className = 'p7-1';
        openF = true;
      }, 1700);
      break;
    case 6:
      findId('e9').className = 'p9-1';
      transitionEnd('e9', function() {
        findId('e9').className = 'p9-2';
      });
      setTimeout(function() {
        findId('e10').className = 'p10-1';
        findId('e8').className = 'p8-2';
        openF = true;
      }, 3000); //@s12-a2
      break;
    case 8:
      findId('e11').className = 'p11-2';
      findId('e12').className = 'p12-2';
      setTimeout(function() {
        findId('e12').className = 'p12-3';
        findId('e13').className = 'p13-1';
        openF = true;
      }, 1000); //@s14-a1
      break;
    case 10:
      findId('e14').className = 'p14-2';
      transitionEnd('k2', function() {
        findId('e14').className = 'p14-3';
        findId('e15').className = 'p15-1';
        openF = true;
      });
      break;
    case 1:
      findId('e1').className = 'p1-2';
      findId('e2').className = 'p2-1';
      animateEnd('e2', function() {
        findId('e2').className = 'p2-2';
        findId('e3').className = 'p3-1';
        openZ = true;
      });
      break;
    case 3:
      findId('e4').className = 'p4-2';
      transitionEnd('e4', function() {
        findId('e5').className = 'p5-1';
        openZ = true;
      });
      break;
    case 5:
      findId('e5').className = 'p5-2';
      findId('e7').className = 'p7-2';
      transitionEnd('e7', function() {
        findId('e8').className = 'p8-1';
        openZ = true;
      });
      break;
    case 7:
      findId('e10').className = 'p10-2';
      setTimeout(function() {
        findId('e11').className = 'p11-1';
      }, 400); //@s12-a4
      setTimeout(function() {
        findId('e12').className = 'p12-1';
        openZ = true;
      }, 1400); //@s12-a4 + @s13-a4
      break;
    case 9:
      findId('e13').className = 'p13-2';
      transitionEnd('e13', function() {
        findId('e14').className = 'p14-1';
        openZ = true;
      });
      break;
  }
  num += 1;
}
findId('button').onclick = function(){
  if (openZ||openF) {
    openZ = false;
    openF = false;
    animateCtrl();
  }  
}
var loader = new resLoader({
  resources: allImgs,
  onStart: function(total) {},
  onProgress: function(current, total) {
    var percent = parseInt(current / total * 100) + '%';
    findId('jindu').innerHTML = percent;
  },
  onComplete: function(total) {
    // zhengCtrl();
    open = true;
    // 测试用代码
    animateCtrl();
    // 测试用代码结束
  }
});
loader.start();
