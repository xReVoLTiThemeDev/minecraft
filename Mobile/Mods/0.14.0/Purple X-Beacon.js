/* Required */

/**/
Block.defineBlock(202,"Obsidian Plating",[["obsidian",0]],49,false,0);
Block.setLightLevel(202,0);
Block.setRenderLayer(202,2);
Block.setDestroyTime(202,-1);
Block.setShape(202, 0.09, 0.09, 1.09, 0.91, 0.14, 1.91);

/* ============================ Purple ============================ */

/**/
Block.defineBlock(223,"Purple X-Beacon Base",[["glass",0]],1,false,0);
Block.setLightLevel(223,15);
Block.setRenderLayer(223,1);
Block.setDestroyTime(223,1.5);
Block.setShape(223, 0.001, 0.001, 0.001, 0.999, 0.999, 0.999);

/**/
Block.defineBlock(224,"Purple X-Beacon Beam",[["quartz_block",0]],57,false,0);
Block.setLightLevel(224,15);
Block.setRenderLayer(224,1);
Block.setDestroyTime(224,-1);
Block.setShape(224, 0.3, 0, 0.3, 0.7, 1203, 0.7);
Block.setColor(224,[0x9900CC]);

/**/
Block.defineBlock(225,"Purple X-Beacon Source",[["quartz_block",0]],57,false,0);
Block.setLightLevel(225,0);
Block.setRenderLayer(225,2);
Block.setDestroyTime(225,-1);
Block.setShape(225, 1.2, 0.2, 0.2, 1.8, 0.8, 0.8);
Block.setColor(225,[0x9900CC]);

/* ============================================================ */

function useItem(x,y,z,itemId,blockId,side) {

/* Purple */

if(itemId==223){
preventDefault();
  if(getTile(x,y+1,z) == 0 && getTile(x,y+1,z-1) == 0 && getTile(x-1,y+1,z) == 0 && getTile(x,y+1,z-2) == 0) {
   setTile(x,y+1,z,223);
   setTile(x,y+1,z-1,202);
   setTile(x-1,y+1,z,225);
   setTile(x,y+2,z,224);
   if(Level.getGameMode() ==0){
   Entity.setCarriedItem(Player.getEntity(),223,Player.getCarriedItemCount()-1,0);
   }
}
}

/* ============================================================ */

function destroyBlock(x, y, z, side) {
 var tile = getTile(x,y,z);

/* Purple */

if(blockId == 223 && getTile(x,y+1,z) == 225){
		   		 setTile(x,y+1,z,0)

}
else if(blockId == 223)
{
setTile(x,y+1,z,225)
}

/* Purple */

if(getTile(x,y,z) == 223) {
  if(getTile(x,y,z-1) == 202)
  {
   Level.destroyBlock(x-1,y,z,false);
  Level.destroyBlock(x,y,z-1,false);
  Level.destroyBlock(x,y,z-1,false);
  Level.destroyBlock(x,y+1,z,false);
  }
  if(getTile(x-1,y,z) == 225)
  {
  Level.destroyBlock(x-1,y,z,false);
  Level.destroyBlock(x,y,z-1,false);
  Level.destroyBlock(x,y,z-1,false);
  Level.destroyBlock(x,y+1,z,false);
}
if(getTile(x,y+1,z) == 223)
  {
  Level.destroyBlock(x-1,y,z,false);
  Level.destroyBlock(x,y,z-1,false);
  Level.destroyBlock(x,y,z-1,false);
  Level.destroyBlock(x,y+1,z,false);
}
}
}
}

function newLevel()
{
clientMessage("§bX§f-§bB§fe§ba§fc§bo§fn §cMade and distributed by §l§bx§l§eR§l§bè§l§9V§l§6ó§l§cL§l§fT §l§f- §l§ei§l§bT§l§bh§l§9è§l§em§l§dé");
}