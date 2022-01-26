class Task {
	constructor(name){
		this.name = name;
	}
	addedToUI(){
		console.log(this.name + ' is added to UI')
	}
	addedToLS(){
		console.log(this.name + ' is added to LS')
	}
}