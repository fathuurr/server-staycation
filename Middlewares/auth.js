const isLogin = (req, res, next) => {
  if (req.session.user == null || req.session.user == undefined) {
    req.flash('alertMessage', 'The session has ended, please retry to login');
    req.flash('alertStatus', 'danger');
    res.redirect('/admin/signin');
  } else {
    next();
  }
};
module.exports = isLogin;
