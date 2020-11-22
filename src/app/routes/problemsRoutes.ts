import { createRouter } from 'unicore'
import { Request, Response } from 'express'
import * as bodyParser from 'body-parser'

import { 
    readProblems,
    createProblem,
    readProblem,
    updateProblem,
    deleteProblem
} from '../services/problemsServices'


const router = createRouter()
router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())

router.route('/')
      .get(readProblems)
      .post(createProblem)
      
router.route('/:id')
      .get(readProblem)
      .put(updateProblem)
      .delete(deleteProblem)
    

export default router