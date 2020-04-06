/* Tick */
function modTick(){
 var E=Player.getPointedEntity();
 var hp=Entity.getHealth(E);
 var HP = " ";

 for(hp;hp>0;hp--) {
   HP=HP+"♥";
 }

 Entity.setNameTag(E,ChatColor.RED+HP);
}

/* Credits */
function newLevel()
{
clientMessage("X-Health♥ §cMade and distributed by §l§bx§l§eR§l§bè§l§9V§l§6ó§l§cL§l§fT §l§f- §l§ei§l§bT§l§bh§l§9è§l§em§l§dé");
}