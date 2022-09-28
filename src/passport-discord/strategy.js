const passport = require("passport");
const { Strategy } = require("passport-discord");
const { DiscordClientId, DiscordClientSecret } = require("../config/config");

passport.serializeUser((profile, done) => {
    done(null, profile);
});

passport.deserializeUser((profile, done) => {
    done(null, profile);
});

passport.use(
    new Strategy(
        {
            clientID: DiscordClientId,
            clientSecret: DiscordClientSecret,
            callbackURL: "/api/v1/oauth/discord/redirect",
            scope: ["identify", "email"],
        },
        async (acessToken, refresToken, profile, done) => {
            try {
                // console.log(profile);
                done(null, profile);
            } catch (error) {
                done(error, null);
            }
        }
    )
);
