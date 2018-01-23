exports.logout = function(req, res) {

    req.session.destroy(function(err) {

        res.redirect('/');

    });

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/signin');
    }
}