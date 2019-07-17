describe("greeting", function (namesGreeted) {
    it("should greet the name that is set", function () {
        var greetInstance = FactoryGreet();
        greetInstance.setName("Siwe");

        assert.deepEqual({ name: "Siwe" }, greetInstance.getName())

    })

    it("should not greet characters and numbers", function () {
        var greetInstance = FactoryGreet();
        greetInstance.setName("1");

        assert.deepEqual({ name: "1" }, greetInstance.getName())

    })

    it("should greet in English when the English radio button is selected", function () {
        // var greetInstance = FactoryGreet();
        var names = FactoryGreet()

        //  var name = "Siwe";
        names.setName("Siwe");

        assert.equal("Hello, Siwe", names.EnglishGreet())


    })


    it("should return total number of names greeted", function () {
       
        var names = FactoryGreet()

        //  var name = "Siwe";
        // names.setName("Siwe");
        names.setCount("Siwe");

        assert.equal(1, names.getCount())


    })
    it("should return total number of names greeted", function () {
      
        var names = FactoryGreet()

      
        names.setName("Siwe");
        names.setName("Siwe");
        names.setCount(1);
        names.setCount(1);

        assert.equal(2, names.getCount())

})
})