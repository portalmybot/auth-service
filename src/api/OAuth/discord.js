const express = require("express");
const passport = require("passport");
const { isAuthorized, isNotAuthorized } = require("../../utils/auth");

const router = express.Router();

router.get("/", isAuthorized, passport.authenticate("discord"));

router.use(
    "/redirect",
    passport.authenticate("discord", {
        failureRedirect: "/api/v1/oauth/discord/",
        successRedirect: "/api/v1/oauth/discord/authorized",
    })
);

router.get("/authorized", isNotAuthorized, (req, res) => {
    res.json({
        message: "API - OAuth2 Service Authorized Data",
        profile: req.user,
    });
});

module.exports = router;
