const express = require('express')
const app = express()
var cors = require('cors')
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/user/:abc', (req, res) => {
  const { abc } = req.params
  console.log(abc)

 if(abc=='dog'){
  res.send({'sound' : '멍멍'})  
  console.log(data)
 } 
 else if(abc=='cat'){
  res.send({'sound' : '야옹'})
 }
 else{
  res.send({'sound' : '알수없음'})
 }
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})