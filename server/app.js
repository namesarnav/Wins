import express from "express"
import cors from "cors";


// Constants
const app = express()
const PORT = process.env.PORT || 3000;


// Middlewares

//Public Routes
app.use('/', homeRouter)
app.use('/login', authRouter)
app.use('/register', authRouter)
app.use('/about', aboutRouter)

//Protected Routes
app.use('/api/profile', userRouter)
app.use('/api/post', postRouter)
app.use('/api/logout', authRouter)


// Start server
app.listen(PORT, () => {
    listen
})