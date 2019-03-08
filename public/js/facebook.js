//$(".facebookLogin").click(changeLogin);

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function statusChangeCallback(response) {
  console.log('Facebook login status changed.');
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
        console.log('Successfully logged in with Facebook');
         FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
  }
}

function changeUser(response) {
  $(".facebookLogin").hide();
  $("#username").text(response.name);
  $("#username").css("color","#eeeee");
  $("#loginScreen").css("display","none");
  $("#login-form").css("display", "none");
  $("#logout").css("display", "block");
  $("#calendar-top")[0].style.WebkitFilter = 'blur(0px)';
  $("#calendar-top")[0].style.filter= 'blur(0px)';
  $("#login-top")[0].style.WebkitFilter = 'blur(0px)';
  $("#login-top")[0].style.filter= 'blur(0px)';
  var currentLoc = window.location.pathname;
  //console.log(currentLoc);
  //console.log(typeof(currentLoc));
  if(currentLoc == "/page_B"){
      $("#project-bottom-B")[0].style.WebkitFilter = 'blur(0px)';
      $("#project-bottom-B")[0].style.filter= 'blur(0px)';
  }
  else{
      $("#project-bottom-A")[0].style.WebkitFilter = 'blur(0px)';
      $("#project-bottom-A")[0].style.filter= 'blur(0px)';
  }

}

function loginDetails(e) {
	e.preventDefault();
}
