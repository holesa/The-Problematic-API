import { Request, Response } from 'express'
import Problem from '../../models/Problem'


// If problem could not be find
const notFound = {
                  status:'error',
                  message:'Could not find resource. The problem ID does not exist.'
                 } 

// If JSON body is incorrect
const incorrectJSON = {
                       status:'error',
                       message:'JSON is syntaticaly invalid. Enter valid problem description and problem type (riddle or math)'
                      }

                      
// List problems
export const readProblems = (req:Request, res:Response )=>{
  const promise = Problem.find({})
   promise.then(data=>res.status(200).json({status: 'success', data: data}))
  }

// Create problem
export const createProblem = (req:Request, res:Response )=>{
  const newProblem = new Problem({
    description: req.body.description,
    type: req.body.type
  })
  const promise = newProblem.save()
   promise.then(() => res.status(201).json({status: 'success',
                                            message: 'The new problem has been created.'}))
                                       
          .catch(() => res.status(400).json(incorrectJSON)) 
}


// Read problem
export const readProblem = (req:Request, res:Response )=>{
  const promise = Problem.findById(req.params.id)
   promise.then((data) => res.status(201).json({status: 'success', data: data}))

          .catch(() => res.status(404).json(notFound)) 
}


// Update problem
export const updateProblem = (req:Request, res:Response )=>{
  // If description or type is missing
  if(!req.body.description || !['math','riddle'].includes(req.body.type)) {
     return res.status(400).json(incorrectJSON)
  }

  const promise = Problem.findByIdAndUpdate(req.params.id, {$set: 
                                                              {description:req.body.description,
                                                               type:req.body.type}})
   promise.then(() => res.status(200).json({status: 'success',
                                            message: 'The problem has been updated.'}))

          .catch(() => res.status(404).json(notFound)) 
}


// Delete problem
export const deleteProblem = (req:Request, res:Response )=>{
  const promise = Problem.findByIdAndRemove(req.params.id)
   promise.then(() => res.status(200).json({status: 'success',
                                            message: 'The problem has been deleted.'}))

          .catch(() => res.status(404).json(notFound)) 
}


