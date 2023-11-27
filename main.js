//Criar uma referência para tela
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
//Dê altura e largura específicas para a imagem do carro
greencar_width=75;
greencar_height=100;
backgroundImage = "parkingLot.jpg";
greencarImage = "car2.png";

//Defina a posição inicial para uma imagem de carro.
greencarx = 5;
greencary = 225;
function add() {
	//carregar carro e imagens de fundo na tela
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = backgroundImage;

	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadGreenCar;
	greencar_imgTag.src = greencarImage;
}

function uploadBackground() {
	//Defina a função ‘uploadBackground’
ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadGreenCar() {
	//Defina a função ‘uploadGreenCar’.
	ctx.drawImage(greencar_imgTag, greencarx, greencary, greencar_width, greencar_height);
	
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Definir função para mover o carro para cima
	if(greencary >=0){
		greencary=greencary-10;
		uploadBackground();
		uploadGreenCar();
	}
}

function down()
{
	//Definir função para mover o carro para baixo
	if(greencary <=350){
		greencary=greencary+10;
		uploadBackground();
		uploadGreenCar();
	}
}

function left()
{
	//Definir função para mover o carro para o lado esquerdo
	if(greencarx >=0){
		greencarx=greencarx-10;
		uploadBackground();
		uploadGreenCar();
	}
}

function right()
{
	//Definir função para mover o lado direito do carro
	if(greencarx <=750){
		greencarx=greencarx+10;
		uploadBackground();
		uploadGreenCar();
	}
}
