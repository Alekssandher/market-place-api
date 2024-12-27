import mongoose from "mongoose";
import "dotenv/config";

class ConnectToMongodb { 
    async execute() {
        const mongoUrl = process.env.DATABASE_URL as string;

        try {
            if (!mongoUrl) {
                throw new Error("DATABASE_URL is not defined");
            }

            await mongoose.connect(mongoUrl);
            console.log("Connected to MongoDB");

        } catch (error: any) {
            console.log("Error connecting to MongoDB: " + error.message);
        };
    };
};

export default new ConnectToMongodb();