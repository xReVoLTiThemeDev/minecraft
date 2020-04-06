/* Required */

/**/
Block.defineBlock(202,"Obsidian Plating",[["obsidian",0]],49,false,0);
Block.setLightLevel(202,0);
Block.setRenderLayer(202,2);
Block.setDestroyTime(202,-1);
Block.setShape(202, 0.09, 0.09, 1.09, 0.91, 0.14, 1.91);

/* ============================ Cyan ============================ */

/**/
Block.defineBlock(217,"Cyan X-Beacon Base",[["glass",0]],1,false,0);
Block.setLightLevel(217,15);
Block.setRenderLayer(217,1);
Block.setDestroyTime(217,1.5);
Block.setShape(217, 0.001, 0.001, 0.001, 0.999, 0.999, 0.999);

/**/
Block.defineBlock(218,"Cyan X-Beacon Beam",[["quartz_block",0]],57,false,0);
Block.setLightLevel(218,15);
Block.setRenderLayer(218,1);
Block.setDestroyTime(218,-1);
Block.setShape(218, 0.3, 0, 0.3, 0.7, 1203, 0.7);
Block.setColor(218,[0x00FFFF]);

/**/
Block.defineBlock(219,"Cyan X-Beacon Source",[["quartz_block",0]],57,false,0);
Block.setLightLevel(219,0);
Block.setRenderLayer(219,2);
Block.setDestroyTime(219,-1);
Block.setShape(219, 1.2, 0.2, 0.2, 1.8, 0.8, 0.8);
Block.setColor(219,[0x00FFFF]);

/* ============================================================ */

function useItem(x,y,z,itemId,blockId,side) {

/* Cyan */

if(itemId==217){
preventDefault();
  if(getTile(x,y+1,z) == 0 && getTile(x,y+1,z-1) == 0 && getTile(x-1,y+1,z) == 0 && getTile(x,y+1,z-2) == 0) {
   setTile(x,y+1,z,217);
   setTile(x,y+1,z-1,202);
   setTile(x-1,y+1,z,219);
   setTile(x,y+2,z,218);
   if(Level.getGameMode() ==0){
   Entity.setCarriedItem(Player.getEntity(),217,Player.getCarriedItemCount()-1,0);
   }
}
}

/* ============================================================ */

function destroyBlock(x, y, z, side) {
 var tile = getTile(x,y,z);

/* Cyan */

if(blockId == 217 && getTile(x,y+1,z) == 219){
		   		 setTile(x,y+1,z,0)

}
else if(blockId == 217)
{
setTile(x,y+1,z,219)
}

/* Cyan */

if(getTile(x,y,z) == 217) {
  if(getTile(x,y,z-1) == 202)
  {
   Level.destroyBlock(x-1,y,z,false);
  Level.destroyBlock(x,y,z-1,false);
  Level.destroyBlock(x,y,z-1,false);
  Level.destroyBlock(x,y+1,z,false);
  }
  if(getTile(x-1,y,z) == 219)
  {
  Level.destroyBlock(x-1,y,z,false);
  Level.destroyBlock(x,y,z-1,false);
  Level.destroyBlock(x,y,z-1,false);
  Level.destroyBlock(x,y+1,z,false);
}
if(getTile(x,y+1,z) == 217)
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