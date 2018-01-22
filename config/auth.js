module.exports = {
    facebookAuth: {
        clientID: "164452577526443", // your App ID
        clientSecret: 'a8e50cdd599ef28ee38a89930bc737c7', // your App Secret
        callbackURL: 'http://localhost:8000/auth/facebook/callback',
        profileURL: 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
        profileFields: ['id', 'email', 'name'] // For requesting permissions from Facebook API
    }
}