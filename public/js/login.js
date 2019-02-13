<script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '{216957579158716}',
      cookie     : true,
      xfbml      : true,
      version    : '{v3.2}'
    });

    FB.AppEvents.logPageView();

  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script>

var data = require("../login_data.json");

exports.addFriend = function(req, res) { 
	var name = req.query.name;
	var password = req.query.password;
	var newUser = {"username":name, "password":password};
	data.friends.push(newUser);
//	console.log(name, description);
	res.render('index', data);
 };
