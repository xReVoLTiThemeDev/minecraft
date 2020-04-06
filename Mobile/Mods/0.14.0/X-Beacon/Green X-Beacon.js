/* Required */

/**/
Block.defineBlock(202,"Obsidian Plating",[["obsidian",0]],49,false,0);
Block.setLightLevel(202,0);
Block.setRenderLayer(202,2);
Block.setDestroyTime(202,-1);
Block.setShape(202, 0.09, 0.09, 1.09, 0.91, 0.14, 1.91);

/* ============================ Green ============================ */

/**/
Block.defineBlock(214,"Green X-Beacon Base",[["glass",0]],1,false,0);
Block.setLightLevel(214,15);
Block.setRenderLayer(214,1);
Block.setDestroyTime(214,1.5);
Block.setShape(214, 0.001, 0.001, 0.001, 0.999, 0.999, 0.999);

/**/
Block.defineBlock(215,"Green X-Beacon Beam",[["quartz_block",0]],57,false,0);
Block.setLightLevel(215,15);
Block.setRenderLayer(215,1);
Block.setDestroyTime(215,-1);
Block.setShape(215, 0.3, 0, 0.3, 0.7, 1203, 0.7);
Block.setColor(215,[0x00FF00]);

/**/
Block.defineBlock(216,"Green X-Beacon Source",[["quartz_block",0]],57,false,0);
Block.setLightLevel(216,0);
Block.setRenderLayer(216,2);
Block.setDestroyTime(216,-1);
Block.setShape(216, 1.2, 0.2, 0.2, 1.8, 0.8, 0.8);
Block.setColor(216,[0x00FF00]);

/* ============================================================ */

function useItem(x,y,z,itemId,blockId,side) {

/* Green */

if(itemId==214){
preventDefault();
  if(getTile(x,y+1,z) == 0 && getTile(x,y+1,z-1) == 0 && getTile(x-1,y+1,z) == 0 && getTile(x,y+1,z-2) == 0) {
   setTile(x,y+1,z,214);
   setTile(x,y+1,z-1,202);
   setTile(x-1,y+1,z,216);
   setTile(x,y+2,z,215);
   if(Level.getGameMode() ==0){
   Entity.setCarriedItem(Player.getEntity(),214,Player.getCarriedItemCount()-1,0);
   }
}
}

/* ============================================================ */

function destroyBlock(x, y, z, side) {
 var tile = getTile(x,y,z);

/* Green */

if(blockId == 214 && getTile(x,y+1,z) == 216){
		   		 setTile(x,y+1,z,0)

}
else if(blockId == 214)
{
setTile(x,y+1,z,216)
}

/* Green */

if(getTile(x,y,z) == 214) {
  if(getTile(x,y,z-1) == 202)
  {
   Level.destroyBlock(x-1,y,z,false);
  Level.destroyBlock(x,y,z-1,false);
  Level.destroyBlock(x,y,z-1,false);
  Level.destroyBlock(x,y+1,z,false);
  }
  if(getTile(x-1,y,z) == 216)
  {
  Level.destroyBlock(x-1,y,z,false);
  Level.destroyBlock(x,y,z-1,false);
  Level.destroyBlock(x,y,z-1,false);
  Level.destroyBlock(x,y+1,z,false);
}
if(getTile(x,y+1,z) == 214)
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