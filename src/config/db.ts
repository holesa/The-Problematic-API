import * as mongoose from 'mongoose'

export const connectDB = async () => {
  // Testing database 
  const mongoURI = 'mongodb+srv://test:12345@problematicapi.hevpd.mongodb.net/problematic_api?retryWrites=true&w=majority';
  try {
    const conn = await mongoose.connect(mongoURI)
    console.log('MongoDB Connected')
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

