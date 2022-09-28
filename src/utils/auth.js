async function isAuthorized(req, res, next) {
    if (req.user) {
        // console.log("User is logged");

        res.redirect(`${req.baseUrl}/authorized`);
        next();
    } else {
        next();
    }
}

async function isNotAuthorized(req, res, next) {
    if (req.user) {
        next();
    } else {
        res.redirect(req.baseUrl);
    }
}

module.exports = {
    isAuthorized,
    isNotAuthorized,
};
