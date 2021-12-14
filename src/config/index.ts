import dotenv from 'dotenv';
dotenv.config();
export default {
    db: process.env.DB_URL,
    jwtSecret: process.env.JWT_SECRET,
    port: process.env.PORT,
    allowedOrigins: ['http://localhost:4000', 'https://onboarding.dev']
};