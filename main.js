const getData = async ()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/4")
    try {
        const data = await response.json()
        console.log(data)
        
    } catch (err) {
        console.log(err)
    }
}

// getData()

const myfunc = () =>{
    let mylist = [1,2,8,4,0,5]
    let i = 0;
    for(i = 0;i<mylist.length;i++){
        console.log(mylist[i])
    }
}

myfunc()

