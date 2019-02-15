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
  $("#loginName").text(response.name);
}

function loginDetails(e) {
	// Prevent following the link
	e.preventDefault();
	$.get("/calendar", changeLogin);

}
function changeLogin(result){
  $(".loginButton").hide();
  $("#loginName").text(result['name']);
/*	var projectHTML = '<p>' + result['title'] + '</p>' +
	'<p>' + result['date'] + '</p>' +
	'<img src="' + result['image'] + ' " class="detailsImage">' +
	'<p>' + result['summary'] + '</p>';
  $("#project"+ result['id'] + " .details").html(projectHTML);
*/
}
