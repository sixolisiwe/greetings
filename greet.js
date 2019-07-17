
function FactoryGreet(nameList) {
    // var name = ""; // global variable

    // var Language = []; // global variable

    var namesGreeted = {} || nameList;

    var greetCount = 0;

    function setName(nameVal) {
        var name = nameVal.charAt(0).toUpperCase() + nameVal.substring(1);  
       

        if (namesGreeted[nameList] === undefined) {
            namesGreeted['name'] = name;
            localStorage.setItem(name, 1);
        }
        else {
            namesGreeted[nameList] = 0;
        }
    }

    function getName() {
        return namesGreeted;
    }

    function EnglishGreet() {
        return "Hello, " + namesGreeted.name;
    }
    function XhosaGreet() {
        
        return "Mholo, " + namesGreeted.name;
    }
    function AfrikaansGreet() {
        return "Hallo, " + namesGreeted.name;
    }

    function setCount() {
    
       greetCount++;
    }


    function getCount() {
        return localStorage.length;
    }

    return {
        setName,
        getName,
        setCount,
        getCount,
        EnglishGreet,
        XhosaGreet,
        AfrikaansGreet,
        greetCount
    }

}
