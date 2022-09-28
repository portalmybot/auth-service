const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");

require("dotenv").config();

const middlewares = require("./middlewares");
const api = require("./api");

require("./passport-discord/strategy");

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// middlwwares
app.use(
    session({
        secret: "some secret",
        saveUninitialized: false,
        resave: false,
    })
);
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
    res.json({
        message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
    });
});

app.use("/api/v1", api);

// middlwwares
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
