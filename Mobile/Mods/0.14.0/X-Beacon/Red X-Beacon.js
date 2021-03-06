/* Required */

/**/
Block.defineBlock(202,"Obsidian Plating",[["obsidian",0]],49,false,0);
Block.setLightLevel(202,0);
Block.setRenderLayer(202,2);
Block.setDestroyTime(202,-1);
Block.setShape(202, 0.09, 0.09, 1.09, 0.91, 0.14, 1.91);

/* ============================ Red ============================ */

/**/
Block.defineBlock(205,"Red X-Beacon Base",[["glass",0]],1,false,0);
Block.setLightLevel(205,15);
Block.setRenderLayer(205,1);
Block.setDestroyTime(205,1.5);
Block.setShape(205, 0.001, 0.001, 0.001, 0.999, 0.999, 0.999);

/**/
Block.defineBlock(206,"Red X-Beacon Beam",[["quartz_block",0]],57,false,0);
Block.setLightLevel(206,15);
Block.setRenderLayer(206,1);
Block.setDestroyTime(206,-1);
Block.setShape(206, 0.3, 0, 0.3, 0.7, 1203, 0.7);
Block.setColor(206,[0xFF0000]);

/**/
Block.defineBlock(207,"Red X-Beacon Source",[["quartz_block",0]],57,false,0);
Block.setLightLevel(207,0);
Block.setRenderLayer(207,2);
Block.setDestroyTime(207,-1);
Block.setShape(207, 1.2, 0.2, 0.2, 1.8, 0.8, 0.8);
Block.setColor(207,[0xFF0000]);

/* ============================================================ */

function useItem(x,y,z,itemId,blockId,side) {

/* Red */

if(itemId==205){
preventDefault();
  if(getTile(x,y+1,z) == 0 && getTile(x,y+1,z-1) == 0 && getTile(x-1,y+1,z) == 0 && getTile(x,y+1,z-2) == 0) {
   setTile(x,y+1,z,205);
   setTile(x,y+1,z-1,202);
   setTile(x-1,y+1,z,207);
   setTile(x,y+2,z,206);
   if(Level.getGameMode() ==0){
   Entity.setCarriedItem(Player.getEntity(),205,Player.getCarriedItemCount()-1,0);
   }
}
}

/* ============================================================ */

function destroyBlock(x, y, z, side) {
 var tile = getTile(x,y,z);

/* Red */

if(blockId == 205 && getTile(x,y+1,z) == 207){
		   		 setTile(x,y+1,z,0)

}
else if(blockId == 205)
{
setTile(x,y+1,z,207)
}

/* Red */

if(getTile(x,y,z) == 205) {
  if(getTile(x,y,z-1) == 202)
  {
   Level.destroyBlock(x-1,y,z,false);
  Level.destroyBlock(x,y,z-1,false);
  Level.destroyBlock(x,y,z-1,false);
  Level.destroyBlock(x,y+1,z,false);
  }
  if(getTile(x-1,y,z) == 207)
  {
  Level.destroyBlock(x-1,y,z,false);
  Level.destroyBlock(x,y,z-1,false);
  Level.destroyBlock(x,y,z-1,false);
  Level.destroyBlock(x,y+1,z,false);
}
if(getTile(x,y+1,z) == 205)
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