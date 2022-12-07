import passport from 'passport';
import { Strategy } from 'passport-google-oauth2';
import User from '../models/User';

passport.use(
    new Strategy(
        {
            clientID: process.env.OAUTH_CLIENT_ID!,
            clientSecret: process.env.OAUTH_CLIENT_SECRET!,
            callbackURL: 'http://localhost:5137',
            passReqToCallback: true,
        },
        (
            request: any,
            accessToken: any,
            refreshToken: any,
            profile: any,
            done: (arg0: null, arg1: boolean) => any
        ) => {
            console.log(profile);
            return done(null, true);
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((_, done) => {
    done(null);
});
