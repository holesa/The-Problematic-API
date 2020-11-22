# The problematic API

## Getting Started

- `git clone https://github.com/holesa/The-Problematic-API.git`
- `npm install`
- `npm run build`
- `npm start`

### Database note

```
For demonstration purposes, I have left URI to temporal
MongoDB database inside the code. No need to create a new database.
Just install dependencies and you are ready to test the API.
```

## REST API structure

- List problems: `GET /api/problems/`

- Create problem: `POST /api/problems/`
- Read problem: `GET /api/problems/:id`
- Update problem: `PUT /api/problems/:id`
- Delete problem: `DELETE /api/problems/:id`

## Example

- Read all problems [http://localhost:3000/api/problems/](http://localhost:3000/api/problems/)

## Mongoose schema

```
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
```
