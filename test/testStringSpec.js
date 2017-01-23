const should = require("chai").should();
const expect = require("chai").expect,

StringManip = require("../js/string/String");

describe("A series of test for String Manipulation", function(err){
  it("return true if 1st 2 chars in the string also appear at the end of the string", function(done){
  	   var result=StringManip("edited");      
       result.should.be.equal(true);  
       done();
    });

  it("accept input whose length is at least 4", function(done){
       var result=StringManip("acd");      
       result.should.be.equal("small");  
       done();
    });
  
  it("should only accept String value", function(done){
  	var result=StringManip();
    expect(result).to.be.null;
    done();     
    });
   
  });
