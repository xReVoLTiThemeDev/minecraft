/* Variables */
var maxCount = 1200; //Every 1 minute Every item will be removed
var clearlag = false;
var cCount = 0;
var entities = [];

/* CMD */
function procCmd(cmd){
if (cmd=="XAL on"){
clearlag = true;
clientMessage("X-Anti-Lag Enabled");
} else if (cmd=="XAL off"){
clearlag = false;
clientMessage("X-Anti-Lag Disabled");
}
}

/* Tap */
function modTick(){
if(clearlag == true){
cCount++;

/* Count, Clean, Loop until 0 */
}
if(cCount == 600){
clientMessage("§c[X-Anti-Lag]: ALL fallen items on the floor currently will be removed in 30 Seconds!");
}
if(cCount == maxCount){
cCount = 0;
removeEntities();
clientMessage("§c[X-Anti-Lag]: Removed All §b"+entities.length+" §cEntities!");
clientMessage("§cThis process will Repeat until disabled!");
entities = [];
}
}

/* removeEntities */
function removeEntities(){
for(var i = 0; i<= entities.length; i++){
Entity.remove(entities[i]);
}
}

/* entityAddHook */
function entityAddedHook(entity){
if(Entity.getEntityTypeId(entity)==64 && clearlag==true){
entities.push(entity);
}
}

/* Credits */
function newLevel()
{
clientMessage("§bX-Anti-Lag §cMade and distributed by §l§bx§l§eR§l§bè§l§9V§l§6ó§l§cL§l§fT §l§f- §l§ei§l§bT§l§bh§l§9è§l§em§l§dé");
}