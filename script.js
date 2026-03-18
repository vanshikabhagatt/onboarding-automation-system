function sendWelcomeEmail(e) {
  // Get form responses
  var responses = e.values;
  
  var name = responses[1];   // Column B
  var email = responses[2];  // Column C
  var role = responses[3];   // Column D

  // Email subject
  var subject = "Welcome to the Team, " + name + "!";

  // Email body
  var message = "Hi " + name + ",\n\n" +
                "Welcome to the team as a " + role + "!\n\n" +
                "We’re excited to have you onboard.\n\n" +
                "Best,\nTeam";

  // Send email
  MailApp.sendEmail(email, subject, message);
  sendSlackMessage(name, role);
}
function sendSlackMessage(name, role) {
  var url = "yourslackwebhookurl";

  var payload = {
    text: "🎉 New Employee Onboarded!\nName: " + name + "\nRole: " + role
  };

  var options = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(payload)
  };

  UrlFetchApp.fetch(url, options);
}
