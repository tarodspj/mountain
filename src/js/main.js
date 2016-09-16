var sectionActual = 0;

function showCopy(){
  $('.copy').addClass('show');
}

function showValley(){
  $('.valley').addClass('started');
  //$('#mountain').css('position', 'fixed');
}

function launchClouds() {
  $('#cloud2').animate({'right': '110px'}, 700);
  $('#cloud1').animate({'left': '200px'}, 1100, function() {
    $('.cloud').addClass('started');
  });
}

function bgGradient(move) {
  $('body').addClass('bg' + Math.abs(move));
}

function moveSection(moveTo) {
  var move = sectionActual - moveTo,
  timeToMove = Math.abs(800 * move);

  //console.log('aaa' + moveTo);
  $('#wrapper').animate({'left': move + '00%'}, timeToMove, function() {
    sectionActual = moveTo;
  });
  bgGradient(move);
}

function listeners() {
  $('#start').on('click', function(){
    var moveTo = 1;
    moveSection(moveTo);
    launchClouds();
    showValley();
    showCopy();
  });
}

function detectmob() {
 if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)){
    return true;
  } else {
    return false;
  }
}

$(document).ready(function() {
  isMob = detectmob();
  if(isMob) {
    if(window.DeviceMotionEvent){
      window.ondeviceorientation = function(event) {
        var  alpha = Math.round(event.alpha),
              beta = parseInt(Math.round(event.beta) * -1),
              gamma = parseInt(Math.round(event.gamma) * 1.2) * -1;
        if(beta > 10){
          beta = 10;
        } else if (beta < -10){
          beta = -10;
        }
        if(gamma > 12){
          gamma = 12;
        } else if (gamma < -12){
          gamma = -12;
        }

        //$('.cube').css('transform','rotateY(' + gamma + 'deg) rotateX(' + beta + 'deg)');
      }
    }
    //changeHeightWelcome();
    //changeCtaBanners();
  } else {
    //onWindowResize();
    //magnetSite();
  }

  listeners();
  //loadHeavyImgs();
});
