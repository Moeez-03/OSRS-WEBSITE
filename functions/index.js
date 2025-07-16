// firebase/functions/index.js
const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const admin = require("firebase-admin");
admin.initializeApp();

// Configure your email transporter
const transporter = nodemailer.createTransport({
  service: "gmail", // or your email service
  auth: {
    user: functions.config().email.user, // your email
    pass: functions.config().email.pass, // your app password
  },
});

exports.sendWelcomeEmail = functions.firestore
    .document("users/{userId}")
    .onCreate(async (snap, context) => {
      const userData = snap.data();

      // Add error handling for missing user data
      if (!userData || !userData.email) {
        console.error("User data or email is missing");
        return null;
      }

      const mailOptions = {
        from: functions.config().email.user,
        to: userData.email,
        subject: "Welcome to Our Platform!",
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; 
                    margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, 
                      #764ba2 100%); color: white; padding: 30px; 
                      text-align: center;">
            <h1>🎉 Welcome to Our Platform!</h1>
          </div>
          
          <div style="background: #f8f9fa; padding: 30px;">
            <p>Hi <strong>${userData.firstName || "there"}</strong>,</p>
            
            <p>Welcome to our amazing platform! We're thrilled to have you 
            join our community.</p>
            
            <p>Here are your account details:</p>
            <ul>
              <li><strong>Name:</strong> ${userData.firstName || "N/A"} 
                  ${userData.lastName || ""}</li>
              <li><strong>Email:</strong> ${userData.email}</li>
              <li><strong>Account Created:</strong> 
                  ${new Date().toDateString()}</li>
            </ul>
            
            <p>Next steps:</p>
            <ol>
              <li>Check your email for the verification link</li>
              <li>Click the verification link to activate your account</li>
              <li>Explore our platform and enjoy all the features</li>
            </ol>
            
            <p>If you have any questions, contact us at 
            support@yourwebsite.com</p>
            
            <p>Best regards,<br><strong>The Team</strong></p>
          </div>
        </div>
      `,
      };

      try {
        await transporter.sendMail(mailOptions);
        console.log("Welcome email sent to:", userData.email);
        return null;
      } catch (error) {
        console.error("Error sending welcome email:", error);
        return null;
      }
    });
