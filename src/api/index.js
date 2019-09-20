
let API = ''

const { NODE_ENV } = process.env

if(NODE_ENV !== 'production') API = 'http://localhost:7000/api/v1'
else API = 'http://localhost:7000/api/v1'


export default API
