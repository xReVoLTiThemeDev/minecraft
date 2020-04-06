/*Detector de Creepers v2.0*\

39		Silverfish	

38		Enderman	

37		Slime	

36	Zombie Pigman

35		Spider

34		Skeleton

33	Creeper

32		Zombie
Passive mobs

10	A	Chicken

11	B	Cow

12	C	Pig

13	D	Sheep

14	E	Wolf	

16	Mooshroom	
NPCs

15	F	Villager*/
function entityAddedHook(entity) {
    if (Entity.getEntityTypeId(entity) == 33) {
Entity.setNameTag(entity,"§2Creeper");
      }
if (Entity.getEntityTypeId(entity) == 39) {
Entity.setNameTag(entity,"§7Silverfish");
      }
if (Entity.getEntityTypeId(entity) == 38) {
Entity.setNameTag(entity,"§5Enderman");
      }
if (Entity.getEntityTypeId(entity) == 37) {
Entity.setNameTag(entity,"§2Slime");
      }
if (Entity.getEntityTypeId(entity) == 36) {
Entity.setNameTag(entity,"§6ZombiePigman");
      }
if (Entity.getEntityTypeId(entity) == 35) {
Entity.setNameTag(entity,"§1Spider");
      }
if (Entity.getEntityTypeId(entity) == 34) {
Entity.setNameTag(entity,"Skeleton");
      }
if (Entity.getEntityTypeId(entity) == 32) {
Entity.setNameTag(entity,"§2Zombie");
      }
if (Entity.getEntityTypeId(entity) == 10) {
Entity.setNameTag(entity,"§cChicken");
      }
if (Entity.getEntityTypeId(entity) == 11) {
Entity.setNameTag(entity,"§7Cow");
      }
if (Entity.getEntityTypeId(entity) == 12) {
Entity.setNameTag(entity,"§dPig");
      }
if (Entity.getEntityTypeId(entity) == 13) {
Entity.setNameTag(entity,"§cSheep");
      }
if (Entity.getEntityTypeId(entity) == 14) {
Entity.setNameTag(entity,"§bWolf");
      }
if (Entity.getEntityTypeId(entity) == 15) {
Entity.setNameTag(entity,"§eVillager");
      }
if (Entity.getEntityTypeId(entity) == 16) {
Entity.setNameTag(entity,"§4Mooshroom Cow");
      }
if (Entity.getEntityTypeId(entity) == 17) {
Entity.setNameTag(entity,"§4Squid");
      }
if (Entity.getEntityTypeId(entity) == 19) {
Entity.setNameTag(entity,"§7Bat");
      }
if (Entity.getEntityTypeId(entity) == 40) {
Entity.setNameTag(entity,"§cCaveSpider");
      }
if (Entity.getEntityTypeId(entity) == 101) {
Entity.setNameTag(entity,"§eRabbit");
      }
if (Entity.getEntityTypeId(entity) == 61) {
Entity.setNameTag(entity,"§cBlaze");
      }
if (Entity.getEntityTypeId(entity) == 56) {
Entity.setNameTag(entity,"§7Ghast");
      }
if (Entity.getEntityTypeId(entity) == 62) {
Entity.setNameTag(entity,"§eMagma Cube");
      }
if (Entity.getEntityTypeId(entity) == 98) {
Entity.setNameTag(entity,"§eOcelot");
      }
}
/* Credits */
function newLevel() {
      clientMessage("X-MobDetector (a simple entity debug tool) §cMade and distributed by §l§bx§l§eR§l§bè§l§9V§l§6ó§l§cL§l§fT §l§f- §l§ei§l§bT§l§bh§l§9è§l§em§l§dé");
};