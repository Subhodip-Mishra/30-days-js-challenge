// Activity 1:
// Task 1:
const newPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved successfully!");
    }, 2000);
})

newPromise.then((res) =>{
    console.log(res)
}).catch((e)=> console.log(e))

// Task 2:
const anotherPromise = new Promise((res, reject) => {
    setTimeout(() => {
        reject("This promise was rejected!")
    }, 2000);
})

anotherPromise.then((res, rej) => {
    console.log(rej)
}).catch((error) => console.log(error))

// Activity 2: 
// Task 3:
function fetchData(message, delay){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message)
        }, 2000);
    })
}

fetchData("Fetching data from server...", 2000)
.then((message) => {
    console.log(message)
    return fetchData("Fetching posts...", 1000)
}).then((message) => {
    console.log(message)
    return fetchData("Fetching users...", 500)
})

console.log("\n")


// Activity 3:
// Task 4:
const async_function = async() =>{ 
    const promise = new Promise((res, rej) => {
        setTimeout(() => {
           res = console.log("This is a promise delayed by 1.5 seconds")
        }, 1500);
    })

    try{
        const data = await promise;
        console.log(data)
    }catch(error){
        console.log(error)
    }
}

async_function()

// Task 5:
const async_reject = async() => {
    const promise = new Promise((res, rej) => {
        setTimeout(() => {
            rej = console.log("This was reject async delayed by 2.5 seconds")
        }, 2500);
    })

    try {
        const data = await promise;
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
async_reject()

// Activity 4:
// Task 6:
const apiKey = 'ad80d84778f0cf5c625cb210b95e4b76'; 
const city = 'Kolkata'; 

 const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(apiUrl)
.then(response =>{
   if(!response.ok){
      throw new Error('nework response was not ok'+response.statusText);
   }
   return response.json();
})
.then((data)=>{
  console.log('Response data:',data);
})
.catch((error)=>{
  console.error('There was a problem with the fetch operation:',error);
});

// Task 7:
console.log("Data fetching useing async await")
const fetchNews = async() => {
    try {
        const response = await fetch(apiUrl)

        if(!response.ok){
            throw new Error("Network error: " + response.statusText);
        }

        const data = await response.json()

        console.log("weather data: ", data)
    
    } catch (error) {
        console.error("Network error:", error)
    }
}

// Acitivity 5:
// Task 8:
const promise1 = new Promise((resolve) => setTimeout(() => resolve('Result 1'), 1000))
const promise2 = new Promise((resolve) => setTimeout(() => resolve('Result 2'), 2000))
const promise3 = new Promise((resolve) => setTimeout(() => resolve('Result 3'), 3000))

Promise.all([promise1, promise2, promise3])
.then((result) => {
    console.log(result)
})
.catch((error) => {
    console.log('One of the promise failed:', error)
})

// Task 9:
const promise4 = new Promise((resolve) => setTimeout(() => resolve('Result 4'), 3000))
const promise5 = new Promise((resolve) => setTimeout(() => resolve('Result 5'), 1000))
const promise6 = new Promise((resolve) => setTimeout(() => resolve('Result 6'), 1300))

Promise.race([promise4, promise5, promise6])
.then((result) => {
    console.log("First resolve promise: ", result)
})
.catch((error) => {
        console.log("First rejected promise: ", error)
})