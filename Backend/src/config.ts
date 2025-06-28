import "dotenv/config";

const mongo: string = process.env.MOONGOOSE as string;
const JWT_SECRET: string = process.env.JWT_SECRET as string;
const FRONTEND_URL: string = "http://localhost:5173/" as string;

export { mongo, JWT_SECRET, FRONTEND_URL };
