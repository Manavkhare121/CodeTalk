import express from "express"
import morgan from "morgan";
import userRoutes from  './routes/user.routes.js'
import ProjectRoutes from './routes/project.routes.js'
import aiRoutes from './routes/ai.routes.js'
import cookieParser from "cookie-parser";
import cors from "cors"
const app =express()
app.use(cors({
  origin: ["http://localhost:5173",
    "https://chat-app-2-e9ip.onrender.com",
    "https://chat-app-1-5p5l.onrender.com"
  ],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
  next();
});
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())
app.use('/users',userRoutes)
app.use('/projects',ProjectRoutes)
app.use('/ai',aiRoutes)
app.get('/',(req,res)=>{
    res.send("Hello world!")
})
export default app;