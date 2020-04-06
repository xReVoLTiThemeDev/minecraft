/* Required */

/**/
Block.defineBlock(202,"Obsidian Plating",[["obsidian",0]],49,false,0);
Block.setLightLevel(202,0);
Block.setRenderLayer(202,2);
Block.setDestroyTime(202,-1);
Block.setShape(202, 0.09, 0.09, 1.09, 0.91, 0.14, 1.91);

/* ============================ Brown ============================ */

/**/
Block.defineBlock(226,"Brown X-Beacon Base",[["glass",0]],1,false,0);
Block.setLightLevel(226,15);
Block.setRenderLayer(226,1);
Block.setDestroyTime(226,1.5);
Block.setShape(226, 0.001, 0.001, 0.001, 0.999, 0.999, 0.999);

/**/
Block.defineBlock(227,"Brown X-Beacon Beam",[["quartz_block",0]],57,false,0);
Block.setLightLevel(227,15);
Block.setRenderLayer(227,1);
Block.setDestroyTime(227,-1);
Block.setShape(227, 0.3, 0, 0.3, 0.7, 1203, 0.7);
Block.setColor(227,[0x8B4513]);

/**/
Block.defineBlock(228,"Brown X-Beacon Source",[["quartz_block",0]],57,false,0);
Block.setLightLevel(228,0);
Block.setRenderLayer(228,2);
Block.setDestroyTime(228,-1);
Block.setShape(228, 1.2, 0.2, 0.2, 1.8, 0.8, 0.8);
Block.setColor(228,[0x8B4513]);

/* ============================================================ */

function useItem(x,y,z,itemId,blockId,side) {

/* Brown */

if(itemId==226){
preventDefault();
  if(getTile(x,y+1,z) == 0 && getTile(x,y+1,z-1) == 0 && getTile(x-1,y+1,z) == 0 && getTile(x,y+1,z-2) == 0) {
   setTile(x,y+1,z,226);
   setTile(x,y+1,z-1,202);
   setTile(x-1,y+1,z,228);
   setTile(x,y+2,z,227);
   if(Level.getGameMode() ==0){
   Entity.setCarriedItem(Player.getEntity(),226,Player.getCarriedItemCount()-1,0);
   }
}
}

/* ============================================================ */

function destroyBlock(x, y, z, side) {
 var tile = getTile(x,y,z);

/* Brown */

if(blockId == 226 && getTile(x,y+1,z) == 228){
		   		 setTile(x,y+1,z,0)

}
else if(blockId == 226)
{
setTile(x,y+1,z,228)
}

/* Brown */

if(getTile(x,y,z) == 226) {
  if(getTile(x,y,z-1) == 202)
  {
   Level.destroyBlock(x-1,y,z,false);
  Level.destroyBlock(x,y,z-1,false);
  Level.destroyBlock(x,y,z-1,false);
  Level.destroyBlock(x,y+1,z,false);
  }
  if(getTile(x-1,y,z) == 228)
  {
  Level.destroyBlock(x-1,y,z,false);
  Level.destroyBlock(x,y,z-1,false);
  Level.destroyBlock(x,y,z-1,false);
  Level.destroyBlock(x,y+1,z,false);
}
if(getTile(x,y+1,z) == 226)
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