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
		
		assert(Array.isArray(myNote.notes) == true, 'variable is not an array');
		
		for (var i = 0; i < myNote.notes.length; i++) {
			
		
		assert(typeof(myNote.notes[i]) == String,'values do not match');

		}

     });


});


describe ('function to get notes', function () {

	it ('input Should be a number', function() {

		var myNote = new notesApp("Jola");
	
		//myNote.getNote("1");

		expect(myNote.getNote("1"), 'Input is not a number');
	});

});

describe ('function to delete notes', function () {

	it ('input Should be a number', function () {

		var myNote = new notesApp("Jola");

		expect(myNote.deleteNote("1"), 'Input not a number');

	});



}); 




module.exports=notesApp;