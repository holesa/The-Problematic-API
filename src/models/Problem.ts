import * as mongoose from 'mongoose'

const Schema = mongoose.Schema

const Problem = new Schema({
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['riddle','math'],
    required: true
  }
})

const ProblemModel = mongoose.model('problems', Problem)

export default ProblemModel
