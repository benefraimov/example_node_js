import mongoose from "mongoose";

async function connectDB() {
    const mongoUri = process.env.MONGO_URI;
    try {
        const response = await mongoose.connect(mongoUri)
        // response.
        console.log('Connected successfuly to MDB Server DB: testDB')
    } catch (error) {
        console.error('שגיאה בהתחברות לmongodb ' + error)
    }
}

export default connectDB;
