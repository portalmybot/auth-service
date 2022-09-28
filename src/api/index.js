const express = require("express");

const login = require("./login");
const OAuthDiscord = require("./OAuth/discord");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        message: "API - OAuth2 Service 👋🌎🌍🌏",
    });
});

router.use("/login", login);

router.use("/oauth/discord/", OAuthDiscord);

module.exports = router;
