import * as mongoose from 'mongoose'

export const connectDB = async () => {

  const mongoURI = '';
  try {
    const conn = await mongoose.connect(mongoURI)
    console.log('MongoDB Connected')
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

