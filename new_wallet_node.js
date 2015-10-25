var Firebase = require("firebase");
var express = require('express');
var request = require('request');

var app = express();

app.get('/create_wallet', function (req, res) {
  var email = req.query.email
    , pass = req.query.password;
  newWallet(email, password, function (data) {
    res.json(data);
  })
})

app.get('/send')

function newWallet(e,p,cb){
  request({
    method: 'POST',
    url: 'https://blockchain.info/api/v2/create_wallet',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    var refUser = new Firebase("https://gambit-users.firebaseio.com/Users");
    var password = refUser.onAuth(refUser.child("users").child(authData.uid).child("password"));
    var email = refUser.onAuth(refUser.child("users").child(authData.uid).child("email"));
    body:"password = password&\
          api_code = 75ed7996-fa57-49f2-822b-e7637a7b5b4a&\
          email = email"
  }, function (error, response, body) {
    console.log('Status:', response.statusCode);
    console.log('Headers:', JSON.stringify(response.headers));
    console.log('Response:', body);
    refUser.child("users").set({
      guid: walletDict["guid"],
      address: walletDict["address"],
    });
  })};

function balanceTotal(){
  request({
    method: 'POST',
    var guidRef = new Firebase("https://gambit-users.firebaseio.com/Users");
    var guid = guidRef.onAuth(guidRef.child("users").child(authData.uid).child("guid");
    url: 'https://blockchain.info/merchant/' + guid + '/balance',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    var passwordRef = new Firebase("https://gambit-users.firebaseio.com/Users");
    var password = passwordRef.onAuth(passwordRef.child("users").child(authData.uid).child("password");
    body: "password = password"
  }, function (error, response, body) {
    console.log('Status:', response.statusCode);
    console.log('Headers:', JSON.stringify(response.headers));
    console.log('Response:', body);
  })};

function userPayment(){
  request({
  method: 'POST',
  var guidRef = new Firebase("https://gambit-users.firebaseio.com/Users")
  var guid = guidRef.onAuth(guidRef.child("users").child(authData.uid).child("guid")
  url: 'https://blockchain.info/merchant/' + guid + '/payment',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  var passwordRef = new Firebase("https://gambit-users.firebaseio.com/Users");
  var password = passwordRef.onAuth(passwordRef.child("users").child(authData.uid).child("password");
  var address = passwordRef.onAuth(passwordRef.child("users").child(authData.uid).child("address");
  body: "password = password&\
         address=1F4VKQKdHHHiacYHFbWrwRS95LgPbWqEdS&\
         amount = 350000&\
         from = address&\
         fee=10000&\
"
}, function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
})};

if (balanceTotal() >= 360000) {
  return userPayment();
} else {
  return "Transaction Error";
};

var no = oneRef.onAuth(oneRef.child("questions").child(authData.uid).child("CountOfNo");
var yes = oneRef.onAuth(oneRef.child("questions").child(authData.uid).child("CountOfYes");
function transferFunds(){
  var oneRef = new Firebase("https://gambitapp.firebaseio.com/Questions");
  var questions = oneRef.onAuth(oneRef.child("questions").child(authData.uid);
  for (question in questions){
    if (yes > no){
      return oneRef.onAuth(oneRef.child("questions").child(authData.uid).child("Yes");
    } else {
      return oneRef.onAuth(oneRef.child("questions").child(authData.uid).child("No");
    }
  };
var total = no + yes
var winners = transferFunds;
var totalWinners = winners.length;
var totalAmount = total * 350000/totalWinners

for (voter in winners){
  var voterRef = new Firebase("https://gambit-users.firebaseio.com/Users");
  var guid = voterRef.onAuth(voterRef.child("users").child(authData.uid).child("guid");
  var password = voterRef.onAuth(voterRef.child("users").child(authData.uid).child("password");
  var address = voterRef.onAuth(voterRef.child("users").child(authData.uid).child("");
  request({
  method: 'POST',
  url: 'https://blockchain.info/merchant/' + guid + '/payment',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: "password = password&\
         address = address&\
         amount = totalAmount&\
         from=1F4VKQKdHHHiacYHFbWrwRS95LgPbWqEdS&\
         fee=10000&\
"
}, function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
});

}


}
