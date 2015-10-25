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

  var refUser = new Firebase("https://gambit-users.firebaseio.com/Users");
  var authData = refUser.getAuth();
  var password = refUser.onAuth(refUser.child("users").child(authData.uid).child("password");
  var email = refUser.onAuth(refUser.child("users").child(authData.uid).child("email");
  var body = "password = password& \
              api_code= 75ed7996-fa57-49f2-822b-e7637a7b5b4a&\
              email= email";

  var walletDict = request.send(body);
  refUser.child("users").set({
    guid: walletDict["guid"],
    address: walletDict["address"],
  });


//retrieves total balance from users account
function balanceTotal(){
  var request = new XMLHttpRequest();
  var guidRef = new Firebase("https://gambit-users.firebaseio.com/Users");
  var guid = guidRef.onAuth(guidRef.child("users").child(authData.uid).child("guid");

  request.open('POST', 'https://blockchain.info/merchant/' + guid + '/balance');

  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  request.onreadystatechange = function () {
    if (this.readyState === 4) {
      console.log('Status:', this.status);
      console.log('Headers:', this.getAllResponseHeaders());
      console.log('Body:', this.responseText);
    }
  };
  var passwordRef = new Firebase("https://gambit-users.firebaseio.com/Users");
  var password = passwordRef.onAuth(passwordRef.child("users").child(authData.uid).child("password");
  var body = "password=password";

  var totalDict = request.send(body);
  return totalDict["balance"];
};

//voter's payment
function userPayment (){
  var request = new XMLHttpRequest();
  var guidRef = new Firebase("https://gambit-users.firebaseio.com/Users")
  var guid = guidRef.onAuth(guidRef.child("users").child(authData.uid).child("guid")

  request.open('POST', 'https://blockchain.info/merchant/' + guid + '/payment');

  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  request.onreadystatechange = function () {
    if (this.readyState === 4) {
      console.log('Status:', this.status);
      console.log('Headers:', this.getAllResponseHeaders());
      console.log('Body:', this.responseText);
    }
  };
  var passwordRef = new Firebase("https://gambit-users.firebaseio.com/Users");
  var password = passwordRef.onAuth(passwordRef.child("users").child(authData.uid).child("password");
  var address = passwordRef.onAuth(passwordRef.child("users").child(authData.uid).child("address");
  var body = "password=password&\
              address= \
              amount= 350000& \
              from=address& \
              fee=10000&";

  request.send(body);
};

//checks to see if user has sufficient balance
if (balanceTotal() >= 360000) {
  return userPayment();
} else {
  return "Transaction Error";
}

var ref = new Firebase("https://gambitapp.firebaseio.com/");

ref.on("child_added", function(snapshot)){

}
