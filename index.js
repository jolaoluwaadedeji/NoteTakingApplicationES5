	 /** Beginning of Class NotesApplication  **/
		 

		/** class constructor that instatiate an object**/

			export.NotesApplication = function (author) {
				
				if (typeof author === "string") {
					this.author = author;
				    this.notes = []
				
			}
					
				else {

					alert ('Input is not a string')
				    
				    }
			

		/** The create function creates a notes list/array to store all the 
		notes as an instance property**/
		
			  this.create = function (note_content) {
			
			   if (typeof (note_content)	=== 'string') {
				    this.notes.push(note_content);
				    console.log (this.notes);
		     
		     	}
		     	 
		       else {

		         	alert ('Input is not a string')
			       
			       }
			}

        /** The listNotes function lists out each of 
        the notes in the notes list**/

        	  this.listNotes = function () {
        	   		    

        	   for (let i = 0; i < this.notes.length; i++) {
  				
  					console.log (`NOTE ID: ${i} \n ${this.notes[i]}\n`);
  				    console.log (`\nBy Author:${this.author}\n`);

  					
        			}

        	
        	}
        	
			
        /**The getNote function takes a note_id which refers to the
         index of the note in the notes list and returns the
          content of that note as a string.**/

          	  this.getNote = function (note_id) {
          		
          	  if (typeof (note_id)	=== 'number') {	

          		   return this.notes[note_id]

          	       }
          	
          	  else {

          	       alert ('Input is not a number')

          	       }
          	
          	}

        /**The search function take a search string, search_text and 
        returns all the notes with that text within it in the following format
        Showing results for search ‘[<search_text>]’**/
  			
  			  this.search = function (search_text) {

  		        if (typeof (search_text)	=== 'string') {

  				  for (var i = 0; i < this.notes.length; i++) {

  					if (this.notes[i].indexOf(search_text) >= 0) {

  					  return("Showing results for search "+search_text+"\n"+" "+ "NOTEID:"+ i+"\n"+this.notes[i]+"By Author:"+this.author);
  				 	  
  				 	   					 }
	  				
	  			     }
	  			
	 	    	   	 }
  				
  			    else {

  				     alert ('Input is not a string')	
  			        
  			         }
  			}

  		/**The deleteNote function deletes the note at the 
  		index note_id of the notes list**/
  			
  			  this.deleteNote = function (note_id) {
  			 
  			 	if (typeof (note_id) === 'number') {

  				     return this.notes.splice(note_id,1)

  				     }
  				     
  				else {

  				     alert ('Input not a number')

  				     }     
  			}	

  		/**The edit function replaces the content in the 
  		note at note_id with new_content**/
  			 
  			   this.edit = function (note_id,new_content) {
  			 	
  			 	if (typeof (note_id) === 'number' && typeof (new_content)	=== 'string') {
  				     this.notes[note_id]=new_content
  			 	    }
  			 	
  			 	else {

  			 		 alert ('Give the correct input')

  			 		} 
  				
  			}
  			
	}	