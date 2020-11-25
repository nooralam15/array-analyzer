//Array Visualizer

//html variables 
let containerEl = document.getElementById("container")
//global variable 
let myData = []
for (let n = 1; n <=50; n++) {
    myData.push(Math.random() * 600)
}

//display data
drawArray()

function drawArray() {
    let outputStr = ""
    //traversing throyugh array loop
    for (let i = 0; i < myData.length; i++) {
        outputStr += `<div style="height: ${myData[i]}px"></div>`

    }
    containerEl.innerHTML = outputStr
}

//key event stuff
document.addEventListener("keydown", keydownHandler) 

function keydownHandler(event) {
    if(event.keyCode == 38) {
        //up arrow - add 600 to begininng of array 
        //can use splice to add or remove stuff from an arry
        let middleIndex = Math.floor(myData.length / 2)
        myData.splice(middleIndex, 0, Math.random() * 600)
    }
    else if (event.keyCode == 40) {
        // down arrow - remove element from middle 
        //removes value from the end of arrray (also returns the pop )
        let middleIndex = Math.floor(myData.length / 2)
        myData.splice(middleIndex, 1)
    }
    // if(event.keyCode == 38) {
    //     //up arrow - push vaue to end of he array
    //     myData.push(Math.random() * 600)
    // }
    // else if (event.keyCode == 40) {
    //     // down arrow - remove value from the end of an array
    //     //removes value from the end of arrray (also returns the pop )
    //     myData.pop()
    //     let poppedValue = myData.pop()
    //     console.log(poppedValue)

    // }
    

    //redraw array with new variable
    drawArray()
}

// Math.max looks throyuhg a list of numbers and fins the largest value. Math.max(...array)
// have to add the ... before your array because ti will make the computer read it as a spread of numbers