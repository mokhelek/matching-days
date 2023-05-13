describe("Testing the matching days functionality", function (){
    it("Should return true if dates are the same", function(){
        let myFactory = MatchingDays() ;
        

        myFactory.setFirstDate("2023-05-6")
        myFactory.setSecondDate("2023-05-6")


        assert.equal(true, myFactory.compareDates());
    })
    it("Should return false if dates are not the same", function(){
        let myFactory = MatchingDays() ;
        
        myFactory.setFirstDate("2023-05-14")
        myFactory.setSecondDate("2023-05-24")

        assert.equal(false,myFactory.compareDates());
    })
})

describe("Testing the class names for color changes", function (){
    it("Should return green if the days match", function(){
        let myFactory = MatchingDays() ;
        

        myFactory.setFirstDate("2023-05-6")
        myFactory.setSecondDate("2023-05-6")


        assert.equal("green", myFactory.returnClassName() );
    })
    it("Should return blue for first date if the days don't match", function(){
        let myFactory = MatchingDays() ;
        
        myFactory.setFirstDate("2023-05-14")
        myFactory.setSecondDate("2023-05-24")

        assert.equal("blue",myFactory.returnClassName().first);
    })

    it("Should return red for second date if the days don't match", function(){
        let myFactory = MatchingDays() ;
        
        myFactory.setFirstDate("2023-05-14")
        myFactory.setSecondDate("2023-05-24")

        assert.equal("red",myFactory.returnClassName().second);
    })

    it("Should return blue if only one date is selected", function(){
        let myFactory = MatchingDays() ;
        
        myFactory.setFirstDate("2023-05-11")

        assert.equal("blue",myFactory.returnClassName());
    })

})

