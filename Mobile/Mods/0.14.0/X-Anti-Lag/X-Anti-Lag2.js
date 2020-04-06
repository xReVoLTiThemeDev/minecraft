/* Variables */
var multiplayerlag = false;

/* defineBlock */
Block.defineBlock(2, "Grass", [["dirt", 0], ["grass", 2], ["grass", 3], ["grass", 3], ["grass", 3], ["grass", 3]], 3, 0, 0);
Block.defineBlock(18, "Leaves", [["leaves", 4], ["leaves", 4], ["leaves", 4], ["leaves", 4], ["leaves", 4], ["leaves", 4], ["leaves", 5], ["leaves", 5], ["leaves", 5], ["leaves", 5], ["leaves", 5], ["leaves", 5], ["leaves", 6], ["leaves", 6], ["leaves", 6], ["leaves", 6], ["leaves", 6], ["leaves", 6], ["leaves", 7], ["leaves", 7], ["leaves", 7], ["leaves", 7], ["leaves", 7], ["leaves", 7]], 3, false, 0);
Block.defineBlock(161, "Leaves", [["leaves", 4], ["leaves", 4], ["leaves", 4], ["leaves", 4], ["leaves", 4], ["leaves", 4], ["leaves", 4], ["leaves", 4], ["leaves", 4], ["leaves", 4], ["leaves", 4], ["leaves", 4]], 3, false, 0);

/* newLevel */
function newLevel(){
clientMessage("[X-Anti-Lag INFO]: For fix more lag type");
clientMessage("§r/entitiesclear, it will remove some");
clientMessage("entities data.");
}

/* setDestroyTime */
Block.setDestroyTime(18, 0.3);
Block.setDestroyTime(161, 0.3);
Block.setDestroyTime(2, 0.5);

/* setRenderLayer */
Block.setRenderLayer(18, 1);
Block.setRenderLayer(161, 1);

/* destroyBlock */
function destroyBlock(x,y,z,s){
if(Player.getPointedBlockData()==0&&getTile(x,y,z)==18&&getCarriedItem()!=359&&Level.getGameMode()!=1){
preventDefault();
setTile(x,y,z,0);
Level.dropItem(x,y,z,0,260,1,0);
Level.dropItem(x,y,z,0,6,1,0);
}
if(Player.getPointedBlockData()==1&&getTile(x,y,z)==18&&getCarriedItem()!=359&&Level.getGameMode()!=1){
preventDefault();
setTile(x,y,z,0);
Level.dropItem(x,y,z,0,6,1,1);
}
if(Player.getPointedBlockData()==2&&getTile(x,y,z)==18&&getCarriedItem()!=359&&Level.getGameMode()!=1){
preventDefault();
setTile(x,y,z,0);
Level.dropItem(x,y,z,0,6,1,2);
Level.dropItem(x,y,z,0,260,1,0);
}
if(Player.getPointedBlockData()==3&&getTile(x,y,z)==18&&getCarriedItem()!=359&&Level.getGameMode()!=1){
preventDefault();
setTile(x,y,z,0);
Level.dropItem(x,y,z,0,6,1,3);
}
if(Player.getPointedBlockData()==0&&getTile(x,y,z)==161&&getCarriedItem()!=359&&Level.getGameMode()!=1){
preventDefault();
setTile(x,y,z,0);
Level.dropItem(x,y,z,0,6,1,4);
}
if(Player.getPointedBlockData()==1&&getTile(x,y,z)==161&&getCarriedItem()!=359&&Level.getGameMode()!=1){
preventDefault();
setTile(x,y,z,0);
Level.dropItem(x,y,z,0,6,1,5);
}
if(getTile(x,y,z)==2&&Level.getGameMode()!=1){
preventDefault();
setTile(x,y,z,0);
Level.dropItem(x,y,z,0,3,1,0);
}
}

/* entityAddedHook */
function entityAddedHook(e){
if(Entity.getEntityTypeId(e)==EntityType.PLAYER&&e!=getPlayerEnt()){
clientMessage("[X-Anti-Lag INFO]: Multiplayer was");
clientMessage("activated, for fix the lag type");
clientMessage("§r/multiplayerlagclear, it will remove all players from the server.");
multiplayerlag = true;
}
}

/* entityRemovedHook */
function entityRemovedHook(e){
if(Entity.getEntityTypeId(e)==EntityType.PLAYER){
multiplayerlag = false;
}
}

/* CMD */
function procCmd(cmd){
var cmd = cmd.split(" ");
if(cmd=="multiplayerlagclear"&&multiplayerlag==true){
Entity.remove(Server.getAllPlayersName - getPlayerEnt());
clientMessage("§7[X-Anti-Lag INFO]: All players removed, the lag was fixed.");
multiplayerlag = false;
}
if(cmd=="multiplayerlagclear"&&multiplayerlag==false){
clientMessage("§c[X-Anti-Lag INFO]: No players found. You can't fix multiplayer lag now.");
}
if(cmd=="entitiesclear"){
Entity.remove(Entity.getAll() - getPlayerEnt());
clientMessage("[X-Anti-Lag INFO]: All entities data cleaned.");
}
if(cmd=="disableparticles"){
ModPE.overrideTexture("images/particles.png", "http://i.imgur.com/4Yux55E.jpg");
clientMessage("[X-Anti-Lag INFO]: Restart BlockLauncher");
clientMessage("to apply the changes.");
}
if(cmd=="enableparticles"){
ModPE.resetImages();
clientMessage("[X-Anti-Lag INFO]: Restart BlockLauncher");
clientMessage("to apply the changes.");
}
}

/* Credits */
function newLevel()
{
clientMessage("§bX-Anti-Lag §cMade and distributed by §l§bx§l§eR§l§bè§l§9V§l§6ó§l§cL§l§fT §l§f- §l§ei§l§bT§l§bh§l§9è§l§em§l§dé");
}