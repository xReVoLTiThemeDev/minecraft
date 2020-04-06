var LastTorchX;
var LastTorchY;
var LastTorchZ;
var Active = 0;
var Temp;

function useItem(x,y,z,itemId,blockId)
{
	if(itemId == 50 && blockId == 20)
	{
		if(Active == 0)
		{
			Active = 1;
			clientMessage("§bX§f-§bA§fu§bt§fo§bT§fo§br§fc§bh §fis §aActivated!");
			setTile(getPlayerX(),getPlayerY(),getPlayerZ(),50);
			
			LastTorchX = getPlayerX();
			LastTorchY = getPlayerY();
			LastTorchZ = getPlayerZ();
		}
		else
		if(Active == 1)
		{
			Active = 0;
			clientMessage("§bX§f-§bA§fu§bt§fo§bT§fo§br§fc§bh §fis §cDeactivated!");
		}
		preventDefault();
	}
}

function placeTorch(x,y,z)
{
	setTile(x,y-1,z,50);
	LastTorchX = x;
	LastTorchY = y;
	LastTorchZ = z;
}

function modTick()
{

	if(Active == 1)
	{
	Temp = getPlayerX() - LastTorchX;
	if(Temp < 0) {Temp = -Temp;}
	if(Temp > 10) {placeTorch(getPlayerX(), getPlayerY(), getPlayerZ());}
	else
	{
		Temp = getPlayerY() - LastTorchY;
		if(Temp < 0) {Temp = -Temp;}
		if(Temp > 10) {placeTorch(getPlayerX(), getPlayerY(), getPlayerZ());}
		else
		{
			Temp = getPlayerZ() - LastTorchZ;
			if(Temp < 0) {Temp = -Temp;}
			if(Temp > 10) {placeTorch(getPlayerX(), getPlayerY(), getPlayerZ());}
		}
	}
	}
}

/* Credits */
function newLevel()
{
clientMessage("§bX§f-§bA§fu§bt§fo§bT§fo§br§fc§bh §cMade and distributed by §l§bx§l§eR§l§bè§l§9V§l§6ó§l§cL§l§fT §l§f- §l§ei§l§bT§l§bh§l§9è§l§em§l§dé");
}