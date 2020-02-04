# FEC Greenfield

## Redux Setup

To setup Redux, these packages are required:

1. redux
2. react-redux
3. redux-thunk

```bash
npm install redux react-redux react-thunk --save 
```

## Action Creators 

People often use actions and action creators interchangably.

On the contrary, they are two different entities.

Actions are playloads of information which send data to the store.

Essentially, they are JavaScript objects. What makes a particular action unique is the type key defined by it. 
