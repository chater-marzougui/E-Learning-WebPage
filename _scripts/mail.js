function sendEmail() {
    const userEmail = document.getElementById("emailInput").value;
    const userName = document.getElementById("name").value;
    const userSubject = document.getElementById("subjectvalue").value;
    const theMessage = document.getElementById("message").value;

    Email.send({
      SecureToken: "Your Secure Token from Elastic Email",
      To: 'chater.mrezgui2002@gmail.com',
      From: 'chater.forarduinouse@gmail.com',
      Subject: userName  + " [" +userSubject +"]",
      Body: "User Email: " + userEmail+ "<br><br>" + theMessage
    }).then(
        message => {
            if (message === "OK") {
                alert("Email sent successfully");   
            } else {
                alert("Failed to send email: " + message);
            }
        }
    );
}
