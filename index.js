const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/user/:abc', (req, res) => {
  const { abc } = req.params
  console.log(abc)
 if(abc=='dog'){
  res.send('멍멍')  
 } 
 else if(abc=='cat'){
  res.send('야옹')
 }
 else{
  res.send('알수없음')
 }
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})