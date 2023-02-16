let buttons = document.querySelectorAll(".drum");
const audioOne = new Audio("sounds/tom-1.mp3");
const audioTwo = new Audio("sounds/tom-2.mp3");
const audioThree = new Audio("sounds/tom-3.mp3");
const audioFour = new Audio("sounds/tom-4.mp3");
const audioFive = new Audio("sounds/snare.mp3");
const audioSix = new Audio("sounds/kick-bass.mp3");
const audioSeven = new Audio("sounds/crash.mp3");
for(let i=0; i<buttons.length; i++){
	buttons[i].addEventListener("click", function(){
		let button = this.innerHTML;
		if (button === 'In'){
		button = "1";
		}
		if (button === 'Sp'){
			button = "0";
		}
		console.log(button);
		audio(button);
		buttonAnimation(button);
	});
}

document.addEventListener("keydown", function(event){
	let button = event.key;	
	if (event.code === 'Space'){
		button = "0";
	}
	if (event.code === 'NumpadEnter'){
		button = "1";
	}
	console.log(event);
	audio(button);
	buttonAnimation(button);
});

function audio(button){
	switch (button) {
			case 'w':
				audioOne.play();
		    break;
			case 'a':
				audioTwo.play();
		    break;
		    case 's':
				audioThree.play();
		    break;
		    case 'd':
				audioFour.play();
		    break;
		    case '1':
				audioFive.play();
		    break;
		    case '0':
				audioSix.play();
		    break;
		    case 'l':
				audioSeven.play();
		    break;
		  default:
		    console.log(`Sorry, we are out of the parameters.`);
		}
}

function buttonAnimation(button){
	if (button === '0'){
		button = "sp";
	}
	if (button === '1'){
		button = "in";
	}
	let activeButton = document.querySelector('.'+button);
	activeButton.classList.add("pressed");
	setTimeout(function(){
		activeButton.classList.remove("pressed");
	},150);
}