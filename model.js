//!///!///!//!///!///
/////////////////////
//STORES DATA //
//////////////// edit & retrieve / controller
///////////////


function Model() {
	//storing pets
	this.pets = [];
	//return pets in array at index[i]

	this.getPetByIndex = function(index){
		return this.pets[index];
	}
//add new pet (name and species)
	this.addPet = function(name, species){
		var p = new Pet(name, species);
		this.pets.push(p);
	}

	this.getAllPets = function(){
		return this.pets.slice(0, this.pets.length);
	}
}