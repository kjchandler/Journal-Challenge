//create a journal object

  function Journal() 
  {		this.entries = [];

  		//adds an Entry with the given info
  		this.addEntry = function adds(title, content, author, id) {

  			//create an entry object
  			var entry = new Entry(title, content, author, id)
  			//add an entry to an array
  			this.entry.push(entry);

  		}

  		//Displays the entry.
  		this.displayEntry = function showEntry(entry) {
  			console.log("\t"+entry.title + "\n");
  		}

  }


  //Create an entry constructor function
  function Entry(title, content, author, id) {
  	this.title = title;
  	this.content = content;
  	this.author = author;
  	this.id = id;

  	//the id is to identify a specific entry
  	this.entryid = function (id){
  		for (var i = 0; i < this.id.length; i++){
  			if (this.id[i])===tag) {
				return true;

			}
  		}
  		return false;
  	}
}