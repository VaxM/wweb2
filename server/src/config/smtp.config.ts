import {createTransport} from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    },
    secure: true
});

export default transporter;