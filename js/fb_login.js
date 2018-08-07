// Load the sdk asynchronously
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Facebook SDK를 사용할 수 있는 인스턴스 (FB)를 처음 사용할 수 있는 시점은
// window.fbAsyncInit에 함수로 정의되어야 함
window.fbAsyncInit = function() {
  FB.init({
    appId      : '1658806980894248',
    cookie     : true,  // enable cookies to allow the server to access
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.8' // use graph api version 2.8
  });
  // console.log('After FB.init()');
  // FB.getLoginStatus(function(response) {
      // console.log(response);
      // connected <- 이미 승인했고, 브라우저에 페이스북 로그인이 되어있는경우
      // not_authorized <- 브라우저에 페이스북 로그인은 되어있으나 승인하지 않은 경우
      // unknown <- 브라우저에 페이스북 로그인이 되어있지 않음
    // });
  };
