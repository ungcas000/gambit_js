//Read email from Facebook
var emailRef = new Firebase("");

//Creates new user wallet
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

  request.send(body);

//Writes email and id from new wallet into database
var gambitRef = new Firebase("https://gambitapp.firebaseio.com//");

gambitRef.set({
    email:
    id:
});

//retrieves total balance from users account
function balanceTotal(){
  var request = new XMLHttpRequest();

  request.open('POST', 'https://blockchain.info/merchant/(key)/balance');

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

if (balanceTotal() >= .0035 + .0035(.02)){
  return
