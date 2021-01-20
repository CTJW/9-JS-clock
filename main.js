
function theClock(){



const theDate = new Date()
 let hrs = theDate.getHours()
 let mins = theDate.getMinutes()
 let secs = theDate.getSeconds()
 

// let count = 0

// setInterval(function() {
//     const theDate = new Date()
//     count++
//     console.log(theDate.getSeconds())
//   }, 1000)

if (hrs > 12){ 
    hrs = hrs - 12
}


if (hrs <10){
    hrs = "0" + hrs
}



if (mins < 10){
    mins = "0" + mins
}



if (secs < 10){
    secs = "0" + secs
}



 document.querySelector("#theClock").innerHTML = `${hrs} : ${mins} : ${secs}`;
    

}


setInterval('theClock()', 1000);

