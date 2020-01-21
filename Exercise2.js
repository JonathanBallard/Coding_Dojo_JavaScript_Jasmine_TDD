


function returnLargest(arr){
    var max = arr[0];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
}


describe("returnLargest", function() {
    it("should return 10 when passed an array of [1,3,10]", function(){
        expect(returnLargest([1,3,10])).toEqual(10);
    });
    it("should return 10 when passed an array of [1,3,140]", function(){
        expect(returnLargest([1,3,140])).toEqual(140);
    });
    it("should return 5 when passed an array of [1,3,5]", function(){
        expect(returnLargest([1,3,5])).toEqual(5);
    });
    it("should return 5 when passed an array of [-1,-3,-5]", function(){
        expect(returnLargest([-1,-3,-5])).toEqual(-1);
    });
});



















