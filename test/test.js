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
	
	var myNote = new notesApp("Jola");	

	it ('Should list out notes in the notes array', function() {

		myNote.listNotes();
		
	
		for (var i = 0; i < myNote.notes.length; i++) {
			
		
		assert(typeof(myNote.notes[i]) == String,'values do not match');

		}

     });

	it ('Should check if notes is an array', function() {

		myNote.listNotes();
		
		assert(Array.isArray(myNote.notes) == true, 'variable is not an array');


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

describe ('function to search notes', function () {

	 it ('input Should be a String', function () {

	 	 var myNote = new notesApp("Jola");

	 	 expect (myNote.search(1), 'input not a String');

	 }); 

});



module.exports=notesApp;