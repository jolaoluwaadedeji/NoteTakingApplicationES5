//var chai = ;
var notesApp=require('../');
//var assert=
var chai=require('chai');
var expect=chai.expect;
var assert=chai.assert;
//var assert=assert;
describe('Instance of class notesApplication',function(){
	it('Should create a new instance of the class', function() {
		var myNote = new notesApp("Jola");
		assert.equal(myNote.author,"Jola");
		});

	

});


module.exports=notesApp;