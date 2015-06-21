//create a journal object

  function Journal() 
  {		
      this.entries = [];

  		//adds an Entry with the given info
  		this.addEntry = function adds(title, content, author, tags) {

  			//create an entry object
  			var entry = new Entry(title, content, author, tags);
  			//add an entry to an array
  			this.entries.push(entry);

  		}

  		//Displays the entry.
  		this.displayEntry = function showEntry(entry) {
  			console.log("\t"+entry.title + "\n");
        console.log("\t"+entry.author);
        console.log(entry.content);
  		
      //display the id of the entry
      for (var i = 0; i < entry.tags.length; i++){
          console.log(entry.tags[i]);
      }
      console.log("**********************");

  }

  //Display an array of entries
  this.displayEntries = function showEntries(entryArray){
    for (var i = 0; i < entryArray.length; i++){
        //display the entry
        this.displayEntry(entryArray[i]);
    }
  }

  //display entries in the journal
  this.displayAllEntries = function showAllEntries(){
    this.displayEntries(this.entries);
  }

  //find all entries with a given tag
  this.findAllEntriesWithTags = function findTag(tag){

    var foundEntries = [];

    //look at entry
    for(var i = 0; i < this.entries.length; i++) {
      var currentEntry = this.entries[i];

      // add it to the array if id found
      if(currentEntry.hasTag(tag)){
        foundEntries.push(currentEntry);
      }
    }
    // return all entries with an id
    return foundEntries;
  }
}

  //Create an entry constructor function
  function Entry(title, content, author, tags) {
  	this.title = title;
  	this.content = content;
  	this.author = author;
  	this.tags = tags;

  	//identify a specific entry
  	this.hasTag = function (tag){
  		for (var i = 0; i < this.tags.length; i++){
  			 if (this.tags[i] === tag) {
				    return true;

			   }
  		}
  		return false;
  	}
}


//create a new journal
var myJournal = new Journal();
myJournal.addEntry("June 20,2015", "How to create a constructor function", "Kelly",["Saturday", "Weekend"]);
console.log(myJournal);


