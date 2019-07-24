var RadioItemType = document.querySelectorAll(".RadioItemType");
var greetBtnElement = document.querySelector(".btnClick");
var myTextboxElement = document.querySelector(".myTextboxElement");
var greetingsElem = document.querySelector(".mycounter");
var countResetElem = document.querySelector(".btnReset");



    if (localStorage['name']) {
        var storeNames =JSON.parse(localStorage['name'])
    }
    else {
        storeNames = {}
    }




let greet = FactoryGreet(storeNames);




greetingsElem.innerHTML = greet.getCount();

function myFunction() {
    var RadioItemType = document.querySelectorAll(".RadioItemType");
    var myTextboxVal = document.querySelector("#myTextbox").value;
    var name = myTextboxVal.charAt(0).toUpperCase() + myTextboxVal.slice(1);
     greet.setName(name);// assigning my textbox value

    for (let i = 0; i < RadioItemType.length; i++) {
        var elem = RadioItemType[i];
        if (elem.checked) {
           
            if (elem.value === "English") {
                document.getElementById("L1").innerHTML = greet.EnglishGreet(name);

            }
           
            if (elem.value === "Xhosa") {
                document.getElementById("L1").innerHTML = greet.XhosaGreet(name);

            }
            

            if (elem.value === "Afrikaans") {
                document.getElementById("L1").innerHTML = greet.AfrikaansGreet(name);

            }
            
            increment();
        }
        
    }

}

function increment() {

    var myTextboxVal = document.querySelector("#myTextbox").value;
    greet.setName(myTextboxVal);// assigning my textbox value
    var RadioItemType = document.querySelectorAll(".RadioItemType").value;
    
    if (myTextboxVal === undefined || myTextboxVal === '') {
        document.getElementById("L1").innerHTML = "No name entered";
        
    }
   
    if(RadioItemType === false){
        document.getElementById("L1").innerHTML = "please enter a name or select a language";
    }
    
    localStorage['name'] = JSON.stringify(greet.getName())
   
    greetingsElem.innerHTML = greet.getCount();

}

function resetBtn() {
    localStorage.clear();
    greetingsElem.innerHTML = ""
}


countResetElem.addEventListener('click', resetBtn)
greetBtnElement.addEventListener('click', myFunction)
