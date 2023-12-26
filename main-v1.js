// fetch('./readme1.txt').then((response)=>{
//     console.log(response)
//     console.log(response.status)
//     return response.text()
// }).then( data => {
//     console.log(data)
// } ).catch( err => {
//     console.log('Error : ', err)
// }).finally( ()=>{
//     console.log('in finally')
// })


// fetch('./readme1.txt')
// .then( resp => resp.text())
// .then (console.log)
// .catch( err => console.log('error ',err) )
// .finally( ()=> console.log('in finally'))


// fetch('./readme2.txt')
// .then( resp => resp.text())
// .then(console.log)
// .catch( msg => console.log('error ', msg))

let allData = ''
fetch('./readme1.txt')
.then( resp => resp.text())
.then (data => {
    allData += data
})

console.log('Any other function...')
setTimeout(()=>{
    console.log('allData =',allData)
},200)
