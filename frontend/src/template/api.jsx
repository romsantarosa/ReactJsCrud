import Reacr from 'react'

const lists = 
[
    {_id:"5d51be7b0c8a8f13e0f3816f",description:"Processo de CRUD",
    createAt:"2019-08-12T19:31:07.655Z",done:false},

    {_id:"5d51be7b0c8a8f13e0f3816f",description:"Processo de CRUD",
    createAt:"2019-08-12T19:31:07.655Z",done:false},

    {_id:"5d51be7b0c8a8f13e0f3816f",description:"Processo de CRUD",
    createAt:"2019-08-12T19:31:07.655Z",done:false},


]

const result = lists.map(id => id._id)
console.log(result)