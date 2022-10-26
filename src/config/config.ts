export default {
    jwtSecret: process.env.JWT_SECRET || 'somesecrettoken',
    DB: {
        URI: process.env.MONGODB_URI || 'mongodb+srv://crops:crops@cluster0.26ztnic.mongodb.net/?retryWrites=true&w=majority', 
        //'mongodb://localhost/jwttesis',
        USER: 'crops', //process.env.MONGODB_USER,
        PASSWORD: 'crops', //process.env.MONGODB_PASSWORD,
    }
}