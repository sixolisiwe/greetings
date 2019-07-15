
function FactoryGreet(nameList, name) {
    // var name = ""; // global variable

    // var Language = []; // global variable

    var namesGreeted = {} || namesGreeted[nameList];

    var greetCount = 0;

    function setName(nameVal) {
        var name = nameVal.charAt(0).toUpperCase() + nameVal.substring(1);  

        if (namesGreeted[nameList] === undefined) {
            namesGreeted['name'] = name;
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

    // function getLanguage() {

    //     return Language;
    // }
    function setCount() {
        console.log(getName());
            greetCount++
    }


    function getCount() {
        return greetCount;
    }

    return {
        setName,
        getName,
        // getLanguage,
        setCount,
        getCount,
        EnglishGreet,
        XhosaGreet,
        AfrikaansGreet,

    }

}
