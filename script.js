function emailSend() {
  var userName = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  var messageBody =
    "Name " + userName + "<br/> Email " + email + "<br/> Message " + message;
  email
    .send({
      Host: "smtp.elasticemail.com",
      Username: "nathiprasad2404@gmail.com",
      Password: "B4975FA2CDFD16774F45C108934AE98A539E",
      To: "nathiprasad2429@gmail.com",
      From: "nathiprasad2404@gmail.com",
      Subject: "This is the subject",
      Body: messageBody,
    })
    .then((message) => alert(message));
}
