/* RequiPink */

/**/
Block.defineBlock(202,"Obsidian Plating",[["obsidian",0]],49,false,0);
Block.setLightLevel(202,0);
Block.setRenderLayer(202,2);
Block.setDestroyTime(202,-1);
Block.setShape(202, 0.09, 0.09, 1.09, 0.91, 0.14, 1.91);

/* ============================ Pink ============================ */

/**/
Block.defineBlock(238,"Pink X-Beacon Base",[["glass",0]],1,false,0);
Block.setLightLevel(238,15);
Block.setRenderLayer(238,1);
Block.setDestroyTime(238,1.5);
Block.setShape(238, 0.001, 0.001, 0.001, 0.999, 0.999, 0.999);

/**/
Block.defineBlock(239,"Pink X-Beacon Beam",[["quartz_block",0]],57,false,0);
Block.setLightLevel(239,15);
Block.setRenderLayer(239,1);
Block.setDestroyTime(239,-1);
Block.setShape(239, 0.3, 0, 0.3, 0.7, 1203, 0.7);
Block.setColor(239,[0xFF33CC]);

/**/
Block.defineBlock(240,"Pink X-Beacon Source",[["quartz_block",0]],57,false,0);
Block.setLightLevel(240,0);
Block.setRenderLayer(240,2);
Block.setDestroyTime(240,-1);
Block.setShape(240, 1.2, 0.2, 0.2, 1.8, 0.8, 0.8);
Block.setColor(240,[0xFF33CC]);

/* ============================================================ */

function useItem(x,y,z,itemId,blockId,side) {

/* Pink */

if(itemId==238){
preventDefault();
  if(getTile(x,y+1,z) == 0 && getTile(x,y+1,z-1) == 0 && getTile(x-1,y+1,z) == 0 && getTile(x,y+1,z-2) == 0) {
   setTile(x,y+1,z,238);
   setTile(x,y+1,z-1,202);
   setTile(x-1,y+1,z,240);
   setTile(x,y+2,z,239);
   if(Level.getGameMode() ==0){
   Entity.setCarriedItem(Player.getEntity(),238,Player.getCarriedItemCount()-1,0);
   }
}
}

/* ============================================================ */

function destroyBlock(x, y, z, side) {
 var tile = getTile(x,y,z);

/* Pink */

if(blockId == 238 && getTile(x,y+1,z) == 240){
		   		 setTile(x,y+1,z,0)

}
else if(blockId == 238)
{
setTile(x,y+1,z,240)
}

/* Pink */

if(getTile(x,y,z) == 238) {
  if(getTile(x,y,z-1) == 202)
  {
   Level.destroyBlock(x-1,y,z,false);
  Level.destroyBlock(x,y,z-1,false);
  Level.destroyBlock(x,y,z-1,false);
  Level.destroyBlock(x,y+1,z,false);
  }
  if(getTile(x-1,y,z) == 240)
  {
  Level.destroyBlock(x-1,y,z,false);
  Level.destroyBlock(x,y,z-1,false);
  Level.destroyBlock(x,y,z-1,false);
  Level.destroyBlock(x,y+1,z,false);
}
if(getTile(x,y+1,z) == 238)
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