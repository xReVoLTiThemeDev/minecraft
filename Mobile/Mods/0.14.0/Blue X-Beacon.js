/* Required */

/**/
Block.defineBlock(202,"Obsidian Plating",[["obsidian",0]],49,false,0);
Block.setLightLevel(202,0);
Block.setRenderLayer(202,2);
Block.setDestroyTime(202,-1);
Block.setShape(202, 0.09, 0.09, 1.09, 0.91, 0.14, 1.91);

/* ============================ Blue ============================ */

/**/
Block.defineBlock(220,"Blue X-Beacon Base",[["glass",0]],1,false,0);
Block.setLightLevel(220,15);
Block.setRenderLayer(220,1);
Block.setDestroyTime(220,1.5);
Block.setShape(220, 0.001, 0.001, 0.001, 0.999, 0.999, 0.999);

/**/
Block.defineBlock(221,"Blue X-Beacon Beam",[["quartz_block",0]],57,false,0);
Block.setLightLevel(221,15);
Block.setRenderLayer(221,1);
Block.setDestroyTime(221,-1);
Block.setShape(221, 0.3, 0, 0.3, 0.7, 1203, 0.7);
Block.setColor(221,[0x0000FF]);

/**/
Block.defineBlock(222,"Blue X-Beacon Source",[["quartz_block",0]],57,false,0);
Block.setLightLevel(222,0);
Block.setRenderLayer(222,2);
Block.setDestroyTime(222,-1);
Block.setShape(222, 1.2, 0.2, 0.2, 1.8, 0.8, 0.8);
Block.setColor(222,[0x0000FF]);

/* ============================================================ */

function useItem(x,y,z,itemId,blockId,side) {

/* Blue */

if(itemId==220){
preventDefault();
  if(getTile(x,y+1,z) == 0 && getTile(x,y+1,z-1) == 0 && getTile(x-1,y+1,z) == 0 && getTile(x,y+1,z-2) == 0) {
   setTile(x,y+1,z,220);
   setTile(x,y+1,z-1,202);
   setTile(x-1,y+1,z,222);
   setTile(x,y+2,z,221);
   if(Level.getGameMode() ==0){
   Entity.setCarriedItem(Player.getEntity(),220,Player.getCarriedItemCount()-1,0);
   }
}
}

/* ============================================================ */

function destroyBlock(x, y, z, side) {
 var tile = getTile(x,y,z);

/* Blue */

if(blockId == 220 && getTile(x,y+1,z) == 222){
		   		 setTile(x,y+1,z,0)

}
else if(blockId == 220)
{
setTile(x,y+1,z,222)
}

/* Blue */

if(getTile(x,y,z) == 220) {
  if(getTile(x,y,z-1) == 202)
  {
   Level.destroyBlock(x-1,y,z,false);
  Level.destroyBlock(x,y,z-1,false);
  Level.destroyBlock(x,y,z-1,false);
  Level.destroyBlock(x,y+1,z,false);
  }
  if(getTile(x-1,y,z) == 222)
  {
  Level.destroyBlock(x-1,y,z,false);
  Level.destroyBlock(x,y,z-1,false);
  Level.destroyBlock(x,y,z-1,false);
  Level.destroyBlock(x,y+1,z,false);
}
if(getTile(x,y+1,z) == 220)
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