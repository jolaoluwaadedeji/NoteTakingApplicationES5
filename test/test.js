//var chai = ;
var notesApp=require('../');
//var assert=
var chai=require('chai');
var expect=chai.expect;
var assert=chai.assert;
//var assert=assert;
describe('Instance of class notesApplication', function(){
	
	it ('Should create a new instance of the class', function() {
		
		var myNote = new notesApp("Jola");
		
		assert.equal(myNote.author,"Jola");
		
		});

});
describe ('function to add notes to an array of notes', function() {
	
	it ('Should add notes to an array', function() {

		 var myNote = new notesApp("Jola");
		
		 myNote.create("test");
		 
		 assert.equal(myNote.notes[0],"test");

	 });

});	



describe ('function to list out the notes', function () {
	
	it ('Should list out notes in the notes array', function() {

		var myNote = new notesApp("Jola");
		

		myNote.listNotes();
		
		

		assert.equal(myNote.listNotes(),);

		
     });


});

describe (

	);


module.exports=notesApp;