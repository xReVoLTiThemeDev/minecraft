/* Required */

/**/
Block.defineBlock(202,"Obsidian Plating",[["obsidian",0]],49,false,0);
Block.setLightLevel(202,0);
Block.setRenderLayer(202,2);
Block.setDestroyTime(202,-1);
Block.setShape(202, 0.09, 0.09, 1.09, 0.91, 0.14, 1.91);

/* ============================ Orange ============================ */

/**/
Block.defineBlock(208,"Orange X-Beacon Base",[["glass",0]],1,false,0);
Block.setLightLevel(208,15);
Block.setRenderLayer(208,1);
Block.setDestroyTime(208,1.5);
Block.setShape(208, 0.001, 0.001, 0.001, 0.999, 0.999, 0.999);

/**/
Block.defineBlock(209,"Orange X-Beacon Beam",[["quartz_block",0]],57,false,0);
Block.setLightLevel(209,15);
Block.setRenderLayer(209,1);
Block.setDestroyTime(209,-1);
Block.setShape(209, 0.3, 0, 0.3, 0.7, 1203, 0.7);
Block.setColor(209,[0xFF6600]);

/**/
Block.defineBlock(210,"Orange X-Beacon Source",[["quartz_block",0]],57,false,0);
Block.setLightLevel(210,0);
Block.setRenderLayer(210,2);
Block.setDestroyTime(210,-1);
Block.setShape(210, 1.2, 0.2, 0.2, 1.8, 0.8, 0.8);
Block.setColor(210,[0xFF6600]);

/* ============================================================ */

function useItem(x,y,z,itemId,blockId,side) {

/* Orange */

if(itemId==208){
preventDefault();
  if(getTile(x,y+1,z) == 0 && getTile(x,y+1,z-1) == 0 && getTile(x-1,y+1,z) == 0 && getTile(x,y+1,z-2) == 0) {
   setTile(x,y+1,z,208);
   setTile(x,y+1,z-1,202);
   setTile(x-1,y+1,z,210);
   setTile(x,y+2,z,209);
   if(Level.getGameMode() ==0){
   Entity.setCarriedItem(Player.getEntity(),208,Player.getCarriedItemCount()-1,0);
   }
}
}

/* ============================================================ */

function destroyBlock(x, y, z, side) {
 var tile = getTile(x,y,z);

/* Orange */

if(blockId == 208 && getTile(x,y+1,z) == 210){
		   		 setTile(x,y+1,z,0)

}
else if(blockId == 208)
{
setTile(x,y+1,z,210)
}

/* Orange */

if(getTile(x,y,z) == 208) {
  if(getTile(x,y,z-1) == 202)
  {
   Level.destroyBlock(x-1,y,z,false);
  Level.destroyBlock(x,y,z-1,false);
  Level.destroyBlock(x,y,z-1,false);
  Level.destroyBlock(x,y+1,z,false);
  }
  if(getTile(x-1,y,z) == 210)
  {
  Level.destroyBlock(x-1,y,z,false);
  Level.destroyBlock(x,y,z-1,false);
  Level.destroyBlock(x,y,z-1,false);
  Level.destroyBlock(x,y+1,z,false);
}
if(getTile(x,y+1,z) == 208)
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