/* Required */

/**/
Block.defineBlock(202,"Obsidian Plating",[["obsidian",0]],49,false,0);
Block.setLightLevel(202,0);
Block.setRenderLayer(202,2);
Block.setDestroyTime(202,-1);
Block.setShape(202, 0.09, 0.09, 1.09, 0.91, 0.14, 1.91);

/* ============================ Gray ============================ */

/**/
Block.defineBlock(229,"Gray X-Beacon Base",[["glass",0]],1,false,0);
Block.setLightLevel(229,15);
Block.setRenderLayer(229,1);
Block.setDestroyTime(229,1.5);
Block.setShape(229, 0.001, 0.001, 0.001, 0.999, 0.999, 0.999);

/**/
Block.defineBlock(230,"Gray X-Beacon Beam",[["quartz_block",0]],57,false,0);
Block.setLightLevel(230,15);
Block.setRenderLayer(230,1);
Block.setDestroyTime(230,-1);
Block.setShape(230, 0.3, 0, 0.3, 0.7, 1203, 0.7);
Block.setColor(230,[0x808080]);

/**/
Block.defineBlock(231,"Gray X-Beacon Source",[["quartz_block",0]],57,false,0);
Block.setLightLevel(231,0);
Block.setRenderLayer(231,2);
Block.setDestroyTime(231,-1);
Block.setShape(231, 1.2, 0.2, 0.2, 1.8, 0.8, 0.8);
Block.setColor(231,[0x808080]);

/* ============================================================ */

function useItem(x,y,z,itemId,blockId,side) {

/* Gray */

if(itemId==229){
preventDefault();
  if(getTile(x,y+1,z) == 0 && getTile(x,y+1,z-1) == 0 && getTile(x-1,y+1,z) == 0 && getTile(x,y+1,z-2) == 0) {
   setTile(x,y+1,z,229);
   setTile(x,y+1,z-1,202);
   setTile(x-1,y+1,z,231);
   setTile(x,y+2,z,230);
   if(Level.getGameMode() ==0){
   Entity.setCarriedItem(Player.getEntity(),229,Player.getCarriedItemCount()-1,0);
   }
}
}

/* ============================================================ */

function destroyBlock(x, y, z, side) {
 var tile = getTile(x,y,z);

/* Gray */

if(blockId == 229 && getTile(x,y+1,z) == 231){
		   		 setTile(x,y+1,z,0)

}
else if(blockId == 229)
{
setTile(x,y+1,z,231)
}

/* Gray */

if(getTile(x,y,z) == 229) {
  if(getTile(x,y,z-1) == 202)
  {
   Level.destroyBlock(x-1,y,z,false);
  Level.destroyBlock(x,y,z-1,false);
  Level.destroyBlock(x,y,z-1,false);
  Level.destroyBlock(x,y+1,z,false);
  }
  if(getTile(x-1,y,z) == 231)
  {
  Level.destroyBlock(x-1,y,z,false);
  Level.destroyBlock(x,y,z-1,false);
  Level.destroyBlock(x,y,z-1,false);
  Level.destroyBlock(x,y+1,z,false);
}
if(getTile(x,y+1,z) == 229)
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