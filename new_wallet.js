//Read email from Facebook
var emailRef = new Firebase("");

//Creates new user wallet and retrieves user key
function newWallet(){
  var request = new XMLHttpRequest();

  request.open('POST', 'https://blockchain.info/api/v2/create_wallet');

  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  request.onreadystatechange = function () {
    if (this.readyState === 4) {
      console.log('Status:', this.status);
      console.log('Headers:', this.getAllResponseHeaders());
      console.log('Body:', this.responseText);
    }
  };

  var body = "password= \
  api_code= \
  email= ";

  var walletDict = request.send(body);
  return walletDict["guid"];

//checks to see if user is in database
var isNewUser = true;

var userRef = new Firebase("https://gambit-users.firebaseio.com/"));
ref.onAuth(function(authData) {
  if (authData && isNewUser) {
    // save the user's profile into the database so we can list users,
    userRef.child("users").child(authData.uid).set({
      provider: authData.provider,
      name: getName(authData)
      email:
      password:
      guid: newWallet(),
    });
  }
});

// find a suitable name based on the meta info given by each provider
function getName(authData) {
  switch(authData.provider) {
     case 'password':
       return authData.password.email.replace(/@.*/, '');
     case 'facebook':
       return authData.facebook.displayName;
  }
}

//retrieves total balance from users account
function balanceTotal(){
  var request = new XMLHttpRequest();

  request.open('POST', 'https://blockchain.info/merchant/(guid)/balance');

  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  request.onreadystatechange = function () {
    if (this.readyState === 4) {
      console.log('Status:', this.status);
      console.log('Headers:', this.getAllResponseHeaders());
      console.log('Body:', this.responseText);
    }
  };

  var body = "password=(password)";

  var totalDict = request.send(body);
  return totalDict["balance"];
};

//voter's payment
function userPayment (){
  var request = new XMLHttpRequest();

  request.open('POST', 'https://blockchain.info/merchant/(guid)/payment');

  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  request.onreadystatechange = function () {
    if (this.readyState === 4) {
      console.log('Status:', this.status);
      console.log('Headers:', this.getAllResponseHeaders());
      console.log('Body:', this.responseText);
    }
  };

  var body = "password=(currentuserpassword) \
  address=& \
  amount= 350000 + 350000(.01)& \
  from=& \
  fee=10000&";

  request.send(body);
};

//checks to see if user has sufficient balance
if (balanceTotal() >= 360000 + 350000(.01)){
  return userPayment();
} else {
  return "Transaction Error";
}
