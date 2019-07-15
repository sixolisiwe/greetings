describe("greeting", function(){
    it("should greet the name that is set", function(){
var greetInstance = FactoryGreet();
greetInstance.setName("Siwe");

assert.deepEqual({name : "Siwe"}, greetInstance.getName())

    })
})