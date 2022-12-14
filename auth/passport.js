import passport from "passport";
import cookieSession from "cookie-session";
import { Strategy as GithubStrategy } from "passport-github2";
import { urls } from "../constants.js";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

export function initializeStrategies(app) {
    passport.serializeUser(function (user, done) {
        done(null, user);
    });
    passport.deserializeUser(function (user, done) {
        done(null, user);
    });

    passport.use(
        new GithubStrategy(
            {
                clientID: process.env.clientID,
                clientSecret: process.env.clientSecret,
                callbackURL: `${urls.application}/auth/login/github/callback`,
            },
            function (accessToken, refreshToken, profile, done) {
                return done(null, profile);
            }
        )
    );

    app.use(
        cookieSession({
            name: "github-auth-session",
            keys: ["key1", "key2"],
        })
    );
    app.use(passport.initialize());
    app.use(passport.session());
}
