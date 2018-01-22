exports.logout = function(req, res) {

    req.session.destroy(function(err) {

        res.redirect('/');

    });

}