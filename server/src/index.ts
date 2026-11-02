import express from "express";
const app = express();
import dotenv from "dotenv";
import expressSession from "express-session";
import { mongoDBConnection } from "../../database";
import PortfolioStaticContent from "./static/index.json"

const { startServer, store } = await mongoDBConnection();

dotenv.config();

app.disable('x-powered-by'); // This will remove the X-Powered-By header, which can help to prevent attackers from identifying the server software being used.

const port = process.env.PORT || 3000;
const sessionSecret = process.env.SESSION_SECRET || "";

await startServer();

const session = expressSession({
    secret: sessionSecret,
    store: store as unknown as expressSession.Store,
    resave: false,
    saveUninitialized: false,

});

const sessionStore = store as unknown as expressSession.Store & {
    on?: (event: string, callback: (error: unknown) => void) => void;
};

sessionStore.on?.('error', (error) => {
    console.error('Session store error:', error);
});

app.use(session);
app.use(express.json()); // Middleware to parse json
app.use(express.urlencoded());

app.use((req, res, next) => {
    // You can set security headers according to your app.
    // Make sure there are no other projects running with same origins backend or frontend. Every project should have unique origins.
    // You can update your origins according to your app.

    const origin = req.headers.origin || 'http://localhost:5173';
    const allowedOrigins = ['http://localhost:5173', 'http://localhost:3000'];
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
        res.setHeader('Access-Control-Allow-Credentials', 'true');
    }

    if (req.method === 'OPTIONS') {
        res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        return res.sendStatus(204);
    }
    
    next();
})

app.get('/portfolio-content', (req, res) => {
    res.status(200).send(PortfolioStaticContent);
})

app.listen(port, () => {
    console.log(`The connection is running on port 3000`)
})