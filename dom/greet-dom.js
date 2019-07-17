var RadioItemType = document.querySelectorAll(".RadioItemType");
var greetBtnElement = document.querySelector(".btnClick");
var myTextboxElement = document.querySelector(".myTextboxElement");
var greetingsElem = document.querySelector(".mycounter")

let greet = FactoryGreet();


function myFunction() {
    var RadioItemType = document.querySelectorAll(".RadioItemType");
    var myTextboxVal = document.querySelector("#myTextbox").value;
    greet.setName(myTextboxVal);// assigning my textbox value

    for (let i = 0; i < RadioItemType.length; i++) {
        var elem = RadioItemType[i];
        if (elem.checked) {
            if (elem.value === "English") {
                document.getElementById("L1").innerHTML = greet.EnglishGreet();
                increment()
            }
            if (elem.value === "Xhosa") {
                document.getElementById("L1").innerHTML = greet.XhosaGreet();
                increment()
            }
            if (elem.value === "Afrikaans") {
                document.getElementById("L1").innerHTML = greet.AfrikaansGreet();
                increment()
            }

    
        }
    }

    }

function increment() {
    var myTextboxVal = document.querySelector("#myTextbox").value;
    greet.setName(myTextboxVal);// assigning my textbox value 

    if (myTextboxVal === undefined || myTextboxVal === '') {
        document.getElementById("L1").innerHTML = "No name entered";

        return false;
    }
    
    greet.setCount();
    greetingsElem.innerHTML = greet.getCount();

}
greetBtnElement.addEventListener('click', myFunction)
