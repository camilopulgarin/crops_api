import express from "express";
import morgan from "morgan";
import passportMiddleware from "./middelwares/passport";
import passport from "passport";
import cors from "cors";
import authRoutes from './routes/auth.routes'
import reportRoutes from './routes/report.routes'
// initializations
const app = express();

// settings
app.set('port', process.env.PORT || 3200);

app.use(cors());
// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
/*app.use(passport.initialize);
passport.use(passportMiddleware);*/

// routes
app.get('/', (req, res) =>{
    res.send(`THE API is at http://localhost:${app.get('port')}`)
});

app.use(authRoutes);
app.use(reportRoutes);

export default app;


