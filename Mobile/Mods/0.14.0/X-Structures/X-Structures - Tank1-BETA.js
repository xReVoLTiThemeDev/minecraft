/* 
   X-Structures Made by xReVoLT - iTheme -
   View my Twitter: xReVoLTiTheme        -
   Adding more structures soon           -
   HEAVY BETA = HEAVY BUGS               -
*/

/*

IDs: 1301 = X-Structure Picker, 1302 = X-Structer Maker

*/

function newLevel(){
	clientMessage("§4X§f-§bStructure§4[BETA] §f- §4Tank §f- §bPART §41 §f- §4Made and Distributed by §l§bx§l§eR§l§bè§l§9V§l§6ó§l§cL§l§fT §l§f- §l§ei§l§bT§l§bh§l§9è§l§em§l§dé");
	clientMessage("Email: xReVoLTiThemeDev§4@§fgmail.com - §bTwitter: §4@§bxReVoLTiTheme");
    clientMessage("Use '§4xstructure ids§f' command to recieve the items for X-Structures!");
    clientMessage("Remember to spawn structures 2-3 blocks up!");
    print("Thanks for installing X-Structures!"+ /n/n/n + "This Structure pack contains 77 Tanks");
}

var structureSelectorId = 1901
var structureBuilderId = 1902
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var textsize = 12
var structure
var firstStructure

/*
var directory = new android.graphics.BitmapFactory.decodeFile("/mnt/sdcard/Modz/xReVoLTsLogo.jpg");
var img = new android.graphics.drawable.BitmapDrawable(directory); 
var image = new android.widget.ImageView(ctx);
var buttonWindow = null;
*/

ModPE.setItem(structureSelectorId,"spawn_egg",7,"X-Structure - Tank1")
ModPE.setItem(structureBuilderId,"spawn_egg",5,"Structure Tank1")
Player.addItemCreativeInv(structureSelectorId,1,0)
Player.addItemCreativeInv(structureBuilderId,1,0)
Item.addCraftRecipe(structureSelectorId,1,0,[265,4,0,264,1,0,265,4,0])
Item.addCraftRecipe(structureBuilderId,1,0,[265,3,0,264,1,0,265,1,0,264,1,0,265,3,0])

/*

//Check for updates
function newLevel(){
	try{
		var out=new java.io.ByteArrayOutputStream();
		var response=android.net.http.AndroidHttpClient.newInstance("Online()").execute(new org.apache.http.client.methods.HttpGet("https://raw.githubusercontent.com/wilco375/Minecraft-PE-Mod-Scripts/master/ISM_V0.8.6_update_checker.txt")).getEntity().writeTo(out);
		out.close();
		clientMessage(String(out.toString()))
	}
	catch(e){
		clientMessage("[ISM] Failed update check: no internet connection.")
	}
}

*/

function procCmd(cmd)
{
if(cmd == "xstructure ids")
    {
        Player.addItemInventory(1101, 1, 0);
        Player.addItemInventory(1102, 1, 0);
        Player.addItemInventory(1103, 1, 0);
        Player.addItemInventory(1104, 1, 0);
        Player.addItemInventory(1105, 1, 0);
        Player.addItemInventory(1106, 1, 0);
        Player.addItemInventory(1107, 1, 0);
        Player.addItemInventory(1108, 1, 0);
        Player.addItemInventory(1109, 1, 0);
        Player.addItemInventory(1110, 1, 0);
        Player.addItemInventory(1111, 1, 0);
        Player.addItemInventory(1112, 1, 0);
        Player.addItemInventory(1113, 1, 0);
        Player.addItemInventory(1114, 1, 0);
        Player.addItemInventory(1115, 1, 0);
        Player.addItemInventory(1116, 1, 0);
        Player.addItemInventory(1117, 1, 0);
        Player.addItemInventory(1118, 1, 0);
        Player.addItemInventory(1119, 1, 0);
        Player.addItemInventory(1120, 1, 0);
        Player.addItemInventory(1201, 1, 0);
        Player.addItemInventory(1202, 1, 0);
        Player.addItemInventory(1203, 1, 0);
        Player.addItemInventory(1204, 1, 0);
        Player.addItemInventory(1205, 1, 0);
        Player.addItemInventory(1206, 1, 0);
        Player.addItemInventory(1207, 1, 0);
        Player.addItemInventory(1208, 1, 0);
        Player.addItemInventory(1209, 1, 0);
        Player.addItemInventory(1210, 1, 0);
        Player.addItemInventory(1211, 1, 0);
        Player.addItemInventory(1212, 1, 0);
        Player.addItemInventory(1213, 1, 0);
        Player.addItemInventory(1214, 1, 0);
        Player.addItemInventory(1215, 1, 0);
        Player.addItemInventory(1216, 1, 0);
        Player.addItemInventory(1217, 1, 0);
        Player.addItemInventory(1218, 1, 0);
        Player.addItemInventory(1219, 1, 0);
        Player.addItemInventory(1220, 1, 0);
        Player.addItemInventory(1301, 1, 0);
        Player.addItemInventory(1302, 1, 0);
        Player.addItemInventory(1303, 1, 0);
        Player.addItemInventory(1304, 1, 0);
        Player.addItemInventory(1305, 1, 0);
        Player.addItemInventory(1306, 1, 0);
        Player.addItemInventory(1307, 1, 0);
        Player.addItemInventory(1308, 1, 0);
        Player.addItemInventory(1309, 1, 0);
        Player.addItemInventory(1310, 1, 0);
        Player.addItemInventory(1311, 1, 0);
        Player.addItemInventory(1312, 1, 0);
        Player.addItemInventory(1313, 1, 0);
        Player.addItemInventory(1314, 1, 0);
        Player.addItemInventory(1315, 1, 0);
        Player.addItemInventory(1316, 1, 0);
        Player.addItemInventory(1317, 1, 0);
        Player.addItemInventory(1318, 1, 0);
        Player.addItemInventory(1319, 1, 0);
        Player.addItemInventory(1320, 1, 0);
        Player.addItemInventory(1401, 1, 0);
        Player.addItemInventory(1402, 1, 0);
        Player.addItemInventory(1403, 1, 0);
        Player.addItemInventory(1404, 1, 0);
        Player.addItemInventory(1405, 1, 0);
        Player.addItemInventory(1406, 1, 0);
        Player.addItemInventory(1407, 1, 0);
        Player.addItemInventory(1408, 1, 0);
        Player.addItemInventory(1409, 1, 0);
        Player.addItemInventory(1410, 1, 0);
        Player.addItemInventory(1411, 1, 0);
        Player.addItemInventory(1412, 1, 0);
        Player.addItemInventory(1413, 1, 0);
        Player.addItemInventory(1414, 1, 0);
        Player.addItemInventory(1415, 1, 0);
        Player.addItemInventory(1416, 1, 0);
        Player.addItemInventory(1417, 1, 0);
        Player.addItemInventory(1418, 1, 0);
        Player.addItemInventory(1419, 1, 0);
        Player.addItemInventory(1420, 1, 0);
        Player.addItemInventory(1501, 1, 0);
        Player.addItemInventory(1502, 1, 0);
        Player.addItemInventory(1503, 1, 0);
        Player.addItemInventory(1504, 1, 0);
        Player.addItemInventory(1505, 1, 0);
        Player.addItemInventory(1506, 1, 0);
        Player.addItemInventory(1507, 1, 0);
        Player.addItemInventory(1508, 1, 0);
        Player.addItemInventory(1509, 1, 0);
        Player.addItemInventory(1510, 1, 0);
        Player.addItemInventory(1511, 1, 0);
        Player.addItemInventory(1512, 1, 0);
        Player.addItemInventory(1513, 1, 0);
        Player.addItemInventory(1514, 1, 0);
        Player.addItemInventory(1515, 1, 0);
        Player.addItemInventory(1516, 1, 0);
        Player.addItemInventory(1517, 1, 0);
        Player.addItemInventory(1518, 1, 0);
        Player.addItemInventory(1519, 1, 0);
        Player.addItemInventory(1520, 1, 0);
        Player.addItemInventory(1601, 1, 0);
        Player.addItemInventory(1602, 1, 0);
        Player.addItemInventory(1603, 1, 0);
        Player.addItemInventory(1604, 1, 0);
        Player.addItemInventory(1605, 1, 0);
        Player.addItemInventory(1606, 1, 0);
        Player.addItemInventory(1607, 1, 0);
        Player.addItemInventory(1608, 1, 0);
        Player.addItemInventory(1609, 1, 0);
        Player.addItemInventory(1610, 1, 0);
        Player.addItemInventory(1611, 1, 0);
        Player.addItemInventory(1612, 1, 0);
        Player.addItemInventory(1613, 1, 0);
        Player.addItemInventory(1614, 1, 0);
        Player.addItemInventory(1615, 1, 0);
        Player.addItemInventory(1616, 1, 0);
        Player.addItemInventory(1617, 1, 0);
        Player.addItemInventory(1618, 1, 0);
        Player.addItemInventory(1619, 1, 0);
        Player.addItemInventory(1620, 1, 0);
        Player.addItemInventory(1701, 1, 0);
        Player.addItemInventory(1702, 1, 0);
        Player.addItemInventory(1703, 1, 0);
        Player.addItemInventory(1704, 1, 0);
        Player.addItemInventory(1705, 1, 0);
        Player.addItemInventory(1706, 1, 0);
        Player.addItemInventory(1707, 1, 0);
        Player.addItemInventory(1708, 1, 0);
        Player.addItemInventory(1709, 1, 0);
        Player.addItemInventory(1710, 1, 0);
        Player.addItemInventory(1711, 1, 0);
        Player.addItemInventory(1712, 1, 0);
        Player.addItemInventory(1713, 1, 0);
        Player.addItemInventory(1714, 1, 0);
        Player.addItemInventory(1715, 1, 0);
        Player.addItemInventory(1716, 1, 0);
        Player.addItemInventory(1717, 1, 0);
        Player.addItemInventory(1718, 1, 0);
        Player.addItemInventory(1719, 1, 0);
        Player.addItemInventory(1720, 1, 0);
        Player.addItemInventory(1801, 1, 0);
        Player.addItemInventory(1802, 1, 0);
        Player.addItemInventory(1803, 1, 0);
        Player.addItemInventory(1804, 1, 0);
        Player.addItemInventory(1805, 1, 0);
        Player.addItemInventory(1806, 1, 0);
        Player.addItemInventory(1807, 1, 0);
        Player.addItemInventory(1808, 1, 0);
        Player.addItemInventory(1809, 1, 0);
        Player.addItemInventory(1810, 1, 0);
        Player.addItemInventory(1811, 1, 0);
        Player.addItemInventory(1812, 1, 0);
        Player.addItemInventory(1813, 1, 0);
        Player.addItemInventory(1814, 1, 0);
        Player.addItemInventory(1815, 1, 0);
        Player.addItemInventory(1816, 1, 0);
        Player.addItemInventory(1817, 1, 0);
        Player.addItemInventory(1818, 1, 0);
        Player.addItemInventory(1819, 1, 0);
        Player.addItemInventory(1820, 1, 0);
        Player.addItemInventory(1901, 1, 0);
        Player.addItemInventory(1902, 1, 0);
        Player.addItemInventory(1903, 1, 0);
        Player.addItemInventory(1904, 1, 0);
        Player.addItemInventory(1905, 1, 0);
        Player.addItemInventory(1906, 1, 0);
        Player.addItemInventory(1907, 1, 0);
        Player.addItemInventory(1908, 1, 0);
        Player.addItemInventory(1909, 1, 0);
        Player.addItemInventory(1910, 1, 0);
        Player.addItemInventory(1911, 1, 0);
        Player.addItemInventory(1912, 1, 0);
        Player.addItemInventory(1913, 1, 0);
        Player.addItemInventory(1914, 1, 0);
        Player.addItemInventory(1915, 1, 0);
        Player.addItemInventory(1916, 1, 0);
        Player.addItemInventory(1917, 1, 0);
        Player.addItemInventory(1918, 1, 0);
        Player.addItemInventory(1919, 1, 0);
        Player.addItemInventory(1920, 1, 0);
        Player.addItemInventory(2001, 1, 0);
        Player.addItemInventory(2002, 1, 0);
        Player.addItemInventory(2003, 1, 0);
        Player.addItemInventory(2004, 1, 0);
        Player.addItemInventory(2005, 1, 0);
        Player.addItemInventory(2006, 1, 0);
        Player.addItemInventory(2007, 1, 0);
        Player.addItemInventory(2008, 1, 0);
        Player.addItemInventory(2009, 1, 0);
        Player.addItemInventory(2010, 1, 0);
        Player.addItemInventory(2011, 1, 0);
        Player.addItemInventory(2012, 1, 0);
        Player.addItemInventory(2013, 1, 0);
        Player.addItemInventory(2014, 1, 0);
        Player.addItemInventory(2015, 1, 0);
        Player.addItemInventory(2016, 1, 0);
        Player.addItemInventory(2017, 1, 0);
        Player.addItemInventory(2018, 1, 0);
        Player.addItemInventory(2019, 1, 0);
        Player.addItemInventory(2020, 1, 0);
        Player.addItemInventory(2101, 1, 0);
        Player.addItemInventory(2102, 1, 0);
        Player.addItemInventory(2103, 1, 0);
        Player.addItemInventory(2104, 1, 0);
        Player.addItemInventory(2105, 1, 0);
        Player.addItemInventory(2106, 1, 0);
        Player.addItemInventory(2107, 1, 0);
        Player.addItemInventory(2108, 1, 0);
        Player.addItemInventory(2109, 1, 0);
        Player.addItemInventory(2110, 1, 0);
        Player.addItemInventory(2111, 1, 0);
        Player.addItemInventory(2112, 1, 0);
        Player.addItemInventory(2113, 1, 0);
        Player.addItemInventory(2114, 1, 0);
        Player.addItemInventory(2115, 1, 0);
        Player.addItemInventory(2116, 1, 0);
        Player.addItemInventory(2117, 1, 0);
        Player.addItemInventory(2118, 1, 0);
        Player.addItemInventory(2119, 1, 0);
        Player.addItemInventory(2120, 1, 0);
        Player.addItemInventory(2201, 1, 0);
        Player.addItemInventory(2202, 1, 0);
        Player.addItemInventory(2203, 1, 0);
        Player.addItemInventory(2204, 1, 0);
        Player.addItemInventory(2205, 1, 0);
        Player.addItemInventory(2206, 1, 0);
        Player.addItemInventory(2207, 1, 0);
        Player.addItemInventory(2208, 1, 0);
        Player.addItemInventory(2209, 1, 0);
        Player.addItemInventory(2210, 1, 0);
        Player.addItemInventory(2211, 1, 0);
        Player.addItemInventory(2212, 1, 0);
        Player.addItemInventory(2213, 1, 0);
        Player.addItemInventory(2214, 1, 0);
        Player.addItemInventory(2215, 1, 0);
        Player.addItemInventory(2216, 1, 0);
        Player.addItemInventory(2217, 1, 0);
        Player.addItemInventory(2218, 1, 0);
        Player.addItemInventory(2219, 1, 0);
        Player.addItemInventory(2220, 1, 0);
        Player.addItemInventory(2301, 1, 0);
        Player.addItemInventory(2302, 1, 0);
        Player.addItemInventory(2303, 1, 0);
        Player.addItemInventory(2304, 1, 0);
        Player.addItemInventory(2305, 1, 0);
        Player.addItemInventory(2306, 1, 0);
        Player.addItemInventory(2307, 1, 0);
        Player.addItemInventory(2308, 1, 0);
        Player.addItemInventory(2309, 1, 0);
        Player.addItemInventory(2310, 1, 0);
        Player.addItemInventory(2311, 1, 0);
        Player.addItemInventory(2312, 1, 0);
        Player.addItemInventory(2313, 1, 0);
        Player.addItemInventory(2314, 1, 0);
        Player.addItemInventory(2315, 1, 0);
        Player.addItemInventory(2316, 1, 0);
        Player.addItemInventory(2317, 1, 0);
        Player.addItemInventory(2318, 1, 0);
        Player.addItemInventory(2319, 1, 0);
        Player.addItemInventory(2320, 1, 0);
        Player.addItemInventory(2401, 1, 0);
        Player.addItemInventory(2402, 1, 0);
        Player.addItemInventory(2403, 1, 0);
        Player.addItemInventory(2404, 1, 0);
        Player.addItemInventory(2405, 1, 0);
        Player.addItemInventory(2406, 1, 0);
        Player.addItemInventory(2407, 1, 0);
        Player.addItemInventory(2408, 1, 0);
        Player.addItemInventory(2409, 1, 0);
        Player.addItemInventory(2410, 1, 0);
        Player.addItemInventory(2411, 1, 0);
        Player.addItemInventory(2412, 1, 0);
        Player.addItemInventory(2413, 1, 0);
        Player.addItemInventory(2414, 1, 0);
        Player.addItemInventory(2415, 1, 0);
        Player.addItemInventory(2416, 1, 0);
        Player.addItemInventory(2417, 1, 0);
        Player.addItemInventory(2418, 1, 0);
        Player.addItemInventory(2419, 1, 0);
        Player.addItemInventory(2420, 1, 0);
        Player.addItemInventory(2501, 1, 0);
        Player.addItemInventory(2502, 1, 0);
        Player.addItemInventory(2503, 1, 0);
        Player.addItemInventory(2504, 1, 0);
        Player.addItemInventory(2505, 1, 0);
        Player.addItemInventory(2506, 1, 0);
        Player.addItemInventory(2507, 1, 0);
        Player.addItemInventory(2508, 1, 0);
        Player.addItemInventory(2509, 1, 0);
        Player.addItemInventory(2510, 1, 0);
        Player.addItemInventory(2511, 1, 0);
        Player.addItemInventory(2512, 1, 0);
        Player.addItemInventory(2513, 1, 0);
        Player.addItemInventory(2514, 1, 0);
        Player.addItemInventory(2515, 1, 0);
        Player.addItemInventory(2516, 1, 0);
        Player.addItemInventory(2517, 1, 0);
        Player.addItemInventory(2518, 1, 0);
        Player.addItemInventory(2519, 1, 0);
        Player.addItemInventory(2520, 1, 0);
        Player.addItemInventory(2601, 1, 0);
        Player.addItemInventory(2602, 1, 0);
        Player.addItemInventory(2603, 1, 0);
        Player.addItemInventory(2604, 1, 0);
        Player.addItemInventory(2605, 1, 0);
        Player.addItemInventory(2606, 1, 0);
        Player.addItemInventory(2607, 1, 0);
        Player.addItemInventory(2608, 1, 0);
        Player.addItemInventory(2609, 1, 0);
        Player.addItemInventory(2610, 1, 0);
        Player.addItemInventory(2611, 1, 0);
        Player.addItemInventory(2612, 1, 0);
        Player.addItemInventory(2613, 1, 0);
        Player.addItemInventory(2614, 1, 0);
        Player.addItemInventory(2615, 1, 0);
        Player.addItemInventory(2616, 1, 0);
        Player.addItemInventory(2617, 1, 0);
        Player.addItemInventory(2618, 1, 0);
        Player.addItemInventory(2619, 1, 0);
        Player.addItemInventory(2620, 1, 0);
        Player.addItemInventory(2701, 1, 0);
        Player.addItemInventory(2702, 1, 0);
        Player.addItemInventory(2703, 1, 0);
        Player.addItemInventory(2704, 1, 0);
        Player.addItemInventory(2705, 1, 0);
        Player.addItemInventory(2706, 1, 0);
        Player.addItemInventory(2707, 1, 0);
        Player.addItemInventory(2708, 1, 0);
        Player.addItemInventory(2709, 1, 0);
        Player.addItemInventory(2710, 1, 0);
        Player.addItemInventory(2711, 1, 0);
        Player.addItemInventory(2712, 1, 0);
        Player.addItemInventory(2713, 1, 0);
        Player.addItemInventory(2714, 1, 0);
        Player.addItemInventory(2715, 1, 0);
        Player.addItemInventory(2716, 1, 0);
        Player.addItemInventory(2717, 1, 0);
        Player.addItemInventory(2718, 1, 0);
        Player.addItemInventory(2719, 1, 0);
        Player.addItemInventory(2720, 1, 0);
        Player.addItemInventory(2801, 1, 0);
        Player.addItemInventory(2802, 1, 0);
        Player.addItemInventory(2803, 1, 0);
        Player.addItemInventory(2804, 1, 0);
        Player.addItemInventory(2805, 1, 0);
        Player.addItemInventory(2806, 1, 0);
        Player.addItemInventory(2807, 1, 0);
        Player.addItemInventory(2808, 1, 0);
        Player.addItemInventory(2809, 1, 0);
        Player.addItemInventory(2810, 1, 0);
        Player.addItemInventory(2811, 1, 0);
        Player.addItemInventory(2812, 1, 0);
        Player.addItemInventory(2813, 1, 0);
        Player.addItemInventory(2814, 1, 0);
        Player.addItemInventory(2815, 1, 0);
        Player.addItemInventory(2816, 1, 0);
        Player.addItemInventory(2817, 1, 0);
        Player.addItemInventory(2818, 1, 0);
        Player.addItemInventory(2819, 1, 0);
        Player.addItemInventory(2820, 1, 0);
        Player.addItemInventory(2901, 1, 0);
        Player.addItemInventory(2902, 1, 0);
        Player.addItemInventory(2903, 1, 0);
        Player.addItemInventory(2904, 1, 0);
        Player.addItemInventory(2905, 1, 0);
        Player.addItemInventory(2906, 1, 0);
        Player.addItemInventory(2907, 1, 0);
        Player.addItemInventory(2908, 1, 0);
        Player.addItemInventory(2909, 1, 0);
        Player.addItemInventory(2910, 1, 0);
        Player.addItemInventory(2911, 1, 0);
        Player.addItemInventory(2912, 1, 0);
        Player.addItemInventory(2913, 1, 0);
        Player.addItemInventory(2914, 1, 0);
        Player.addItemInventory(2915, 1, 0);
        Player.addItemInventory(2916, 1, 0);
        Player.addItemInventory(2917, 1, 0);
        Player.addItemInventory(2918, 1, 0);
        Player.addItemInventory(2919, 1, 0);
        Player.addItemInventory(2920, 1, 0);
        Player.addItemInventory(3001, 1, 0);
        Player.addItemInventory(3002, 1, 0);
        Player.addItemInventory(3003, 1, 0);
        Player.addItemInventory(3004, 1, 0);
        Player.addItemInventory(3005, 1, 0);
        Player.addItemInventory(3006, 1, 0);
        Player.addItemInventory(3007, 1, 0);
        Player.addItemInventory(3008, 1, 0);
        Player.addItemInventory(3009, 1, 0);
        Player.addItemInventory(3010, 1, 0);
        Player.addItemInventory(3011, 1, 0);
        Player.addItemInventory(3012, 1, 0);
        Player.addItemInventory(3013, 1, 0);
        Player.addItemInventory(3014, 1, 0);
        Player.addItemInventory(3015, 1, 0);
        Player.addItemInventory(3016, 1, 0);
        Player.addItemInventory(3017, 1, 0);
        Player.addItemInventory(3018, 1, 0);
        Player.addItemInventory(3019, 1, 0);
        Player.addItemInventory(3020, 1, 0);
        clientMessage("§4All §bX§4-§bStructure §4IDs §bHave been added to your inventory!");
    }
}

//Check for an item being used
function useItem(x,y,z,itemId,blockId,side){
	if(itemId == structureSelectorId){
		housesGUI()
	}
	if(itemId == structureBuilderId){
		if(firstStructure == null && structure != null){
			var X=[x]
			var X2=[x]
			var Y=[y]
			var Y2=[y]
			var Z=[z]
			var Z2=[z]
			var I=[getTile(x,y,z)]
			var D=[Level.getData(x,y,z)]
			for(n=0;n<1+1;n++){
				setTile(X[n], Y[n], Z[n], 2);
			}
			setTile(X2[0],Y2[0],Z2[0],I[0],D[0])
			firstStructure = 1
		}
		if(structure == null) clientMessage("Please select a structure using the X-Strcuture - Tank1")
        else if(structure == 1) Tank1GUI(x,y,z)
        else if(structure == 2) Tank2GUI(x,y,z)
        else if(structure == 3) Tank3GUI(x,y,z)
        else if(structure == 5) Tank4GUI(x,y,z)
        else if(structure == 6) Tank5GUI(x,y,z)
        else if(structure == 7) Tank6GUI(x,y,z)
        else if(structure == 8) Tank7GUI(x,y,z)
        else if(structure == 9) Tank9GUI(x,y,z)
        else if(structure == 10) Tank10GUI(x,y,z)
        else if(structure == 11) Tank11GUI(x,y,z)
        else if(structure == 12) Tank12GUI(x,y,z)
        else if(structure == 13) Tank13GUI(x,y,z)
        else if(structure == 14) Tank14GUI(x,y,z)
        else if(structure == 15) Tank15GUI(x,y,z)
        else if(structure == 16) Tank16GUI(x,y,z)
        else if(structure == 17) Tank17GUI(x,y,z)
        else if(structure == 18) Tank18GUI(x,y,z)
        else if(structure == 19) Tank19GUI(x,y,z)
        else if(structure == 20) AdvancedTank1GUI(x,y,z)
/*
        else if(structure == ) GUI(x,y,z)
*/

 	}
}

function housesGUI(){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var menu = new android.widget.LinearLayout(ctx);
				var scroll = new android.widget.ScrollView(ctx);
				menu.setOrientation(android.widget.LinearLayout.VERTICAL);
				scroll.addView(menu);
				var dialog = new android.app.Dialog(ctx); 
				dialog.setContentView(scroll);
				dialog.setTitle("Choose a structure")
/*
                buttonWindow = new android.widget.PopupWindow()
                image.setBitmap(img);
                buttonWindow.setTouchable(false);
*/


/* 1 */	var  Tank1 = new android.widget.Button(ctx); 
				Tank1.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 1
							clientMessage("§4X§f-§bStructure §aRecieved!")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				Tank1.setText("Tank1")
				Tank1.setTextSize(textsize)
				menu.addView(Tank1);


/* 2 */	var  Tank2 = new android.widget.Button(ctx); 
				Tank2.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 2
							clientMessage("§4X§f-§bStructure §aRecieved!")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				Tank2.setText("Tank2")
				Tank2.setTextSize(textsize)
				menu.addView(Tank2);


/* 3 */	var  Tank3 = new android.widget.Button(ctx); 
				Tank3.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 3
							clientMessage("§4X§f-§bStructure §aRecieved!")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				Tank3.setText("Tank3")
				Tank3.setTextSize(textsize)
				menu.addView(Tank3);


/* 5 */	var  Tank4 = new android.widget.Button(ctx); 
				Tank4.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 5
							clientMessage("§4X§f-§bStructure §aRecieved!")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				Tank4.setText("Tank4")
				Tank4.setTextSize(textsize)
				menu.addView(Tank4);


/* 6 */	var  Tank5 = new android.widget.Button(ctx); 
				Tank5.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 6
							clientMessage("§4X§f-§bStructure §aRecieved!")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				Tank5.setText("Tank5")
				Tank5.setTextSize(textsize)
				menu.addView(Tank5);


/* 7 */	var  Tank6 = new android.widget.Button(ctx); 
				Tank6.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 7
							clientMessage("§4X§f-§bStructure §aRecieved!")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				Tank6.setText("Tank6")
				Tank6.setTextSize(textsize)
				menu.addView(Tank6);


/* 8 */	var  Tank7 = new android.widget.Button(ctx); 
				Tank7.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 8
							clientMessage("§4X§f-§bStructure §aRecieved!")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				Tank7.setText("Tank7")
				Tank7.setTextSize(textsize)
				menu.addView(Tank7);


/* 9 */	var  Tank9 = new android.widget.Button(ctx); 
				Tank9.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 9
							clientMessage("§4X§f-§bStructure §aRecieved!")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				Tank9.setText("Tank9")
				Tank9.setTextSize(textsize)
				menu.addView(Tank9);


/* 10 */	var  Tank10 = new android.widget.Button(ctx); 
				Tank10.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 10
							clientMessage("§4X§f-§bStructure §aRecieved!")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				Tank10.setText("Tank10")
				Tank10.setTextSize(textsize)
				menu.addView(Tank10);


/* 11 */	var  Tank11 = new android.widget.Button(ctx); 
				Tank11.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 11
							clientMessage("§4X§f-§bStructure §aRecieved!")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				Tank11.setText("Tank11")
				Tank11.setTextSize(textsize)
				menu.addView(Tank11);


/* 12 */	var  Tank12 = new android.widget.Button(ctx); 
				Tank12.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 12
							clientMessage("§4X§f-§bStructure §aRecieved!")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				Tank12.setText("Tank12")
				Tank12.setTextSize(textsize)
				menu.addView(Tank12);


/* 13 */	var  Tank13 = new android.widget.Button(ctx); 
				Tank13.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 13
							clientMessage("§4X§f-§bStructure §aRecieved!")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				Tank13.setText("Tank13")
				Tank13.setTextSize(textsize)
				menu.addView(Tank13);


/* 14 */	var  Tank14 = new android.widget.Button(ctx); 
				Tank14.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 14
							clientMessage("§4X§f-§bStructure §aRecieved!")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				Tank14.setText("Tank14")
				Tank14.setTextSize(textsize)
				menu.addView(Tank14);


/* 15 */	var  Tank15 = new android.widget.Button(ctx); 
				Tank15.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 15
							clientMessage("§4X§f-§bStructure §aRecieved!")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				Tank15.setText("Tank15")
				Tank15.setTextSize(textsize)
				menu.addView(Tank15);


/* 16 */	var  Tank16 = new android.widget.Button(ctx); 
				Tank16.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 16
							clientMessage("§4X§f-§bStructure §aRecieved!")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				Tank16.setText("Tank16")
				Tank16.setTextSize(textsize)
				menu.addView(Tank16);


/* 17 */	var  Tank17 = new android.widget.Button(ctx); 
				Tank17.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 17
							clientMessage("§4X§f-§bStructure §aRecieved!")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				Tank17.setText("Tank17")
				Tank17.setTextSize(textsize)
				menu.addView(Tank17);


/* 18 */	var  Tank18 = new android.widget.Button(ctx); 
				Tank18.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 18
							clientMessage("§4X§f-§bStructure §aRecieved!")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				Tank18.setText("Tank18")
				Tank18.setTextSize(textsize)
				menu.addView(Tank18);


/* 19 */	var  Tank19 = new android.widget.Button(ctx); 
				Tank19.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 19
							clientMessage("§4X§f-§bStructure §aRecieved!")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				Tank19.setText("Tank19")
				Tank19.setTextSize(textsize)
				menu.addView(Tank19);


/* 20 */	var  AdvancedTank1 = new android.widget.Button(ctx); 
				AdvancedTank1.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 20
							clientMessage("§4X§f-§bStructure §aRecieved!")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				AdvancedTank1.setText("AdvancedTank1")
				AdvancedTank1.setTextSize(textsize)
				menu.addView(AdvancedTank1);
		    }
	catch (e){
	print ("Error: "+e)
	}	
	dialog.show()
	}
	});
}



function Tank1GUI(x,y,z){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(ctx); 
				popup.setTitle("Continue structure transaction?")
				yaw = getYaw()
				while(yaw > 60){
					yaw = yaw-360
				}
				while(yaw < 0){
					yaw = yaw+360
				}
                if(yaw >= 0 && yaw <= 45) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 45 && yaw <= 135) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 135 && yaw <= 225) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 225 && yaw <= 15) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 15 && yaw <= 60) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							Tank1(x,y,z)
						}
						catch(e){
							clientMessage("Error: "+e)
						}
				}});
				popup.setNegativeButton("No", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						//do nothing
				}});
			}
			catch(e){
				print ("Error: "+e)
			}	
			popup.show()
		}
	});
}



function Tank2GUI(x,y,z){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(ctx); 
				popup.setTitle("Are you sure?")
				yaw = getYaw()
				while(yaw > 360){
					yaw = yaw-360
				}
				while(yaw < 0){
					yaw = yaw+360
				}
                if(yaw >= 0 && yaw <= 45) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 45 && yaw <= 135) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 135 && yaw <= 225) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 225 && yaw <= 315) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 315 && yaw <= 360) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							Tank2(x,y,z)
						}
						catch(e){
							clientMessage("Error: "+e)
						}
				}});
				popup.setNegativeButton("No", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						//do nothing
				}});
			}
			catch(e){
				print ("Error: "+e)
			}	
			popup.show()
		}
	});
}



function Tank3GUI(x,y,z){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(ctx); 
				popup.setTitle("Are you sure?")
				yaw = getYaw()
				while(yaw > 360){
					yaw = yaw-360
				}
				while(yaw < 0){
					yaw = yaw+360
				}
                if(yaw >= 0 && yaw <= 45) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 45 && yaw <= 135) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 135 && yaw <= 225) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 225 && yaw <= 315) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 315 && yaw <= 360) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							Tank3(x,y,z)
						}
						catch(e){
							clientMessage("Error: "+e)
						}
				}});
				popup.setNegativeButton("No", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						//do nothing
				}});
			}
			catch(e){
				print ("Error: "+e)
			}	
			popup.show()
		}
	});
}



function Tank4GUI(x,y,z){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(ctx); 
				popup.setTitle("Are you sure?")
				yaw = getYaw()
				while(yaw > 360){
					yaw = yaw-360
				}
				while(yaw < 0){
					yaw = yaw+360
				}
                if(yaw >= 0 && yaw <= 45) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 45 && yaw <= 135) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 135 && yaw <= 225) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 225 && yaw <= 315) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 315 && yaw <= 360) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							Tank4(x,y,z)
						}
						catch(e){
							clientMessage("Error: "+e)
						}
				}});
				popup.setNegativeButton("No", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						//do nothing
				}});
			}
			catch(e){
				print ("Error: "+e)
			}	
			popup.show()
		}
	});
}



function Tank5GUI(x,y,z){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(ctx); 
				popup.setTitle("Are you sure?")
				yaw = getYaw()
				while(yaw > 360){
					yaw = yaw-360
				}
				while(yaw < 0){
					yaw = yaw+360
				}
                if(yaw >= 0 && yaw <= 45) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 45 && yaw <= 135) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 135 && yaw <= 225) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 225 && yaw <= 315) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 315 && yaw <= 360) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							Tank5(x,y,z)
						}
						catch(e){
							clientMessage("Error: "+e)
						}
				}});
				popup.setNegativeButton("No", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						//do nothing
				}});
			}
			catch(e){
				print ("Error: "+e)
			}	
			popup.show()
		}
	});
}



function Tank6GUI(x,y,z){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(ctx); 
				popup.setTitle("Are you sure?")
				yaw = getYaw()
				while(yaw > 360){
					yaw = yaw-360
				}
				while(yaw < 0){
					yaw = yaw+360
				}
                if(yaw >= 0 && yaw <= 45) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 45 && yaw <= 135) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 135 && yaw <= 225) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 225 && yaw <= 315) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 315 && yaw <= 360) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							Tank6(x,y,z)
						}
						catch(e){
							clientMessage("Error: "+e)
						}
				}});
				popup.setNegativeButton("No", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						//do nothing
				}});
			}
			catch(e){
				print ("Error: "+e)
			}	
			popup.show()
		}
	});
}



function Tank7GUI(x,y,z){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(ctx); 
				popup.setTitle("Are you sure?")
				yaw = getYaw()
				while(yaw > 360){
					yaw = yaw-360
				}
				while(yaw < 0){
					yaw = yaw+360
				}
                if(yaw >= 0 && yaw <= 45) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 45 && yaw <= 135) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 135 && yaw <= 225) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 225 && yaw <= 315) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 315 && yaw <= 360) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							Tank7(x,y,z)
						}
						catch(e){
							clientMessage("Error: "+e)
						}
				}});
				popup.setNegativeButton("No", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						//do nothing
				}});
			}
			catch(e){
				print ("Error: "+e)
			}	
			popup.show()
		}
	});
}



function Tank9GUI(x,y,z){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(ctx); 
				popup.setTitle("Are you sure?")
				yaw = getYaw()
				while(yaw > 360){
					yaw = yaw-360
				}
				while(yaw < 0){
					yaw = yaw+360
				}
                if(yaw >= 0 && yaw <= 45) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 45 && yaw <= 135) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 135 && yaw <= 225) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 225 && yaw <= 315) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 315 && yaw <= 360) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							Tank9(x,y,z)
						}
						catch(e){
							clientMessage("Error: "+e)
						}
				}});
				popup.setNegativeButton("No", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						//do nothing
				}});
			}
			catch(e){
				print ("Error: "+e)
			}	
			popup.show()
		}
	});
}



function Tank10GUI(x,y,z){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(ctx); 
				popup.setTitle("Are you sure?")
				yaw = getYaw()
				while(yaw > 360){
					yaw = yaw-360
				}
				while(yaw < 0){
					yaw = yaw+360
				}
                if(yaw >= 0 && yaw <= 45) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 45 && yaw <= 135) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 135 && yaw <= 225) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 225 && yaw <= 315) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 315 && yaw <= 360) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							Tank10(x,y,z)
						}
						catch(e){
							clientMessage("Error: "+e)
						}
				}});
				popup.setNegativeButton("No", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						//do nothing
				}});
			}
			catch(e){
				print ("Error: "+e)
			}	
			popup.show()
		}
	});
}



function Tank11GUI(x,y,z){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(ctx); 
				popup.setTitle("Are you sure?")
				yaw = getYaw()
				while(yaw > 360){
					yaw = yaw-360
				}
				while(yaw < 0){
					yaw = yaw+360
				}
                if(yaw >= 0 && yaw <= 45) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 45 && yaw <= 135) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 135 && yaw <= 225) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 225 && yaw <= 315) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 315 && yaw <= 360) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							Tank11(x,y,z)
						}
						catch(e){
							clientMessage("Error: "+e)
						}
				}});
				popup.setNegativeButton("No", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						//do nothing
				}});
			}
			catch(e){
				print ("Error: "+e)
			}	
			popup.show()
		}
	});
}



function Tank12GUI(x,y,z){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(ctx); 
				popup.setTitle("Are you sure?")
				yaw = getYaw()
				while(yaw > 360){
					yaw = yaw-360
				}
				while(yaw < 0){
					yaw = yaw+360
				}
                if(yaw >= 0 && yaw <= 45) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 45 && yaw <= 135) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 135 && yaw <= 225) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 225 && yaw <= 315) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 315 && yaw <= 360) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							Tank12(x,y,z)
						}
						catch(e){
							clientMessage("Error: "+e)
						}
				}});
				popup.setNegativeButton("No", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						//do nothing
				}});
			}
			catch(e){
				print ("Error: "+e)
			}	
			popup.show()
		}
	});
}



function Tank13GUI(x,y,z){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(ctx); 
				popup.setTitle("Are you sure?")
				yaw = getYaw()
				while(yaw > 360){
					yaw = yaw-360
				}
				while(yaw < 0){
					yaw = yaw+360
				}
                if(yaw >= 0 && yaw <= 45) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 45 && yaw <= 135) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 135 && yaw <= 225) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 225 && yaw <= 315) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 315 && yaw <= 360) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							Tank13(x,y,z)
						}
						catch(e){
							clientMessage("Error: "+e)
						}
				}});
				popup.setNegativeButton("No", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						//do nothing
				}});
			}
			catch(e){
				print ("Error: "+e)
			}	
			popup.show()
		}
	});
}



function Tank14GUI(x,y,z){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(ctx); 
				popup.setTitle("Are you sure?")
				yaw = getYaw()
				while(yaw > 360){
					yaw = yaw-360
				}
				while(yaw < 0){
					yaw = yaw+360
				}
                if(yaw >= 0 && yaw <= 45) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 45 && yaw <= 135) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 135 && yaw <= 225) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 225 && yaw <= 315) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 315 && yaw <= 360) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							Tank14(x,y,z)
						}
						catch(e){
							clientMessage("Error: "+e)
						}
				}});
				popup.setNegativeButton("No", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						//do nothing
				}});
			}
			catch(e){
				print ("Error: "+e)
			}	
			popup.show()
		}
	});
}



function Tank15GUI(x,y,z){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(ctx); 
				popup.setTitle("Are you sure?")
				yaw = getYaw()
				while(yaw > 360){
					yaw = yaw-360
				}
				while(yaw < 0){
					yaw = yaw+360
				}
                if(yaw >= 0 && yaw <= 45) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 45 && yaw <= 135) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 135 && yaw <= 225) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 225 && yaw <= 315) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 315 && yaw <= 360) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							Tank15(x,y,z)
						}
						catch(e){
							clientMessage("Error: "+e)
						}
				}});
				popup.setNegativeButton("No", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						//do nothing
				}});
			}
			catch(e){
				print ("Error: "+e)
			}	
			popup.show()
		}
	});
}



function Tank16GUI(x,y,z){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(ctx); 
				popup.setTitle("Are you sure?")
				yaw = getYaw()
				while(yaw > 360){
					yaw = yaw-360
				}
				while(yaw < 0){
					yaw = yaw+360
				}
                if(yaw >= 0 && yaw <= 45) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 45 && yaw <= 135) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 135 && yaw <= 225) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 225 && yaw <= 315) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 315 && yaw <= 360) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							Tank16(x,y,z)
						}
						catch(e){
							clientMessage("Error: "+e)
						}
				}});
				popup.setNegativeButton("No", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						//do nothing
				}});
			}
			catch(e){
				print ("Error: "+e)
			}	
			popup.show()
		}
	});
}



function Tank17GUI(x,y,z){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(ctx); 
				popup.setTitle("Are you sure?")
				yaw = getYaw()
				while(yaw > 360){
					yaw = yaw-360
				}
				while(yaw < 0){
					yaw = yaw+360
				}
                if(yaw >= 0 && yaw <= 45) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 45 && yaw <= 135) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 135 && yaw <= 225) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 225 && yaw <= 315) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 315 && yaw <= 360) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							Tank17(x,y,z)
						}
						catch(e){
							clientMessage("Error: "+e)
						}
				}});
				popup.setNegativeButton("No", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						//do nothing
				}});
			}
			catch(e){
				print ("Error: "+e)
			}	
			popup.show()
		}
	});
}



function Tank18GUI(x,y,z){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(ctx); 
				popup.setTitle("Are you sure?")
				yaw = getYaw()
				while(yaw > 360){
					yaw = yaw-360
				}
				while(yaw < 0){
					yaw = yaw+360
				}
                if(yaw >= 0 && yaw <= 45) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 45 && yaw <= 135) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 135 && yaw <= 225) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 225 && yaw <= 315) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 315 && yaw <= 360) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							Tank18(x,y,z)
						}
						catch(e){
							clientMessage("Error: "+e)
						}
				}});
				popup.setNegativeButton("No", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						//do nothing
				}});
			}
			catch(e){
				print ("Error: "+e)
			}	
			popup.show()
		}
	});
}



function Tank19GUI(x,y,z){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(ctx); 
				popup.setTitle("Are you sure?")
				yaw = getYaw()
				while(yaw > 360){
					yaw = yaw-360
				}
				while(yaw < 0){
					yaw = yaw+360
				}
                if(yaw >= 0 && yaw <= 45) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 45 && yaw <= 135) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 135 && yaw <= 225) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 225 && yaw <= 315) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 315 && yaw <= 360) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							Tank19(x,y,z)
						}
						catch(e){
							clientMessage("Error: "+e)
						}
				}});
				popup.setNegativeButton("No", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						//do nothing
				}});
			}
			catch(e){
				print ("Error: "+e)
			}	
			popup.show()
		}
	});
}



function AdvancedTank1GUI(x,y,z){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(ctx); 
				popup.setTitle("Are you sure?")
				yaw = getYaw()
				while(yaw > 360){
					yaw = yaw-360
				}
				while(yaw < 0){
					yaw = yaw+360
				}
                if(yaw >= 0 && yaw <= 45) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 45 && yaw <= 135) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 135 && yaw <= 225) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 225 && yaw <= 315) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 315 && yaw <= 360) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							AdvancedTank1(x,y,z)
						}
						catch(e){
							clientMessage("Error: "+e)
						}
				}});
				popup.setNegativeButton("No", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						//do nothing
				}});
			}
			catch(e){
				print ("Error: "+e)
			}	
			popup.show()
		}
	});
}



function Tank1(x,y,z){
 var X=[x,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9];
 var Y=[y,y+-2,y+-2,y+-1,y+0,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+1,y+-2,y+1,y+-2,y+-2,y+-2,y+1,y+-2,y+1,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+0,y+-2,y+0,y+1,y+-2,y+0,y+1,y+-2,y+0,y+1,y+2,y+4,y+-2,y+0,y+1,y+2,y+4,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+4,y+-2,y+-1,y+0,y+1,y+2,y+4,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+0,y+1,y+2,y+-2,y+0,y+1,y+2,y+-2,y+0,y+1,y+-2,y+-2,y+-2,y+4,y+5,y+6,y+-2,y+3,y+4,y+5,y+6,y+7,y+-2,y+0,y+4,y+5,y+6,y+-2,y+-1,y+1,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+-2,y+0,y+1,y+2,y+-2,y+0,y+1,y+-2,y+-2,y+-2,y+4,y+6,y+-2,y+3,y+4,y+5,y+6,y+7,y+-2,y+0,y+4,y+6,y+-2,y+0,y+1,y+3,y+4,y+-2,y+0,y+1,y+2,y+3,y+4,y+-2,y+0,y+1,y+2,y+3,y+4,y+-2,y+0,y+1,y+2,y+3,y+4,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+-2,y+0,y+1,y+2,y+-2,y+0,y+1,y+-2,y+-2,y+-2,y+4,y+5,y+6,y+-2,y+3,y+4,y+5,y+6,y+7,y+-2,y+0,y+4,y+5,y+6,y+-2,y+-1,y+1,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+-2,y+0,y+1,y+2,y+-2,y+0,y+1,y+-2,y+-2,y+-2,y+-2,y+0,y+-2,y+0,y+1,y+-2,y+0,y+1,y+-2,y+0,y+1,y+2,y+4,y+-2,y+0,y+1,y+2,y+4,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+4,y+-2,y+-1,y+0,y+1,y+2,y+4,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+0,y+1,y+2,y+-2,y+0,y+1,y+2,y+-2,y+0,y+1,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+1,y+-2,y+1,y+-2,y+-2,y+-2,y+1,y+-2,y+1,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+8];
 var Z=[z,z+-1,z+0,z+0,z+0,z+1,z+2,z+3,z+4,z+5,z+6,z+7,z+8,z+9,z+10,z+11,z+12,z+13,z+-1,z+0,z+1,z+2,z+3,z+4,z+5,z+6,z+7,z+8,z+9,z+10,z+11,z+12,z+13,z+-1,z+0,z+1,z+2,z+3,z+4,z+5,z+5,z+6,z+6,z+7,z+8,z+9,z+9,z+10,z+10,z+11,z+12,z+13,z+-1,z+0,z+1,z+1,z+2,z+2,z+2,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+13,z+-1,z+0,z+0,z+0,z+0,z+1,z+1,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+13,z+-1,z+0,z+0,z+0,z+1,z+1,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+13,z+-1,z+0,z+0,z+0,z+0,z+1,z+1,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+13,z+-1,z+0,z+1,z+1,z+2,z+2,z+2,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+13,z+-1,z+0,z+1,z+2,z+3,z+4,z+5,z+5,z+6,z+6,z+7,z+8,z+9,z+9,z+10,z+10,z+11,z+12,z+13,z+-1,z+0,z+1,z+2,z+3,z+4,z+5,z+6,z+7,z+8,z+9,z+10,z+11,z+12,z+13,z+13];
 var I=[0,0,2,57,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,85,2,85,2,2,2,85,2,85,2,2,2,2,2,2,156,2,42,156,2,42,42,2,156,42,156,85,2,35,42,156,85,2,35,35,42,156,2,35,35,42,156,85,2,35,35,42,156,85,2,35,35,42,156,2,35,42,156,2,156,42,156,2,156,156,2,2,2,42,42,44,2,44,42,42,42,44,2,156,42,42,44,2,44,96,42,44,2,42,42,156,156,42,156,2,42,42,42,156,42,156,2,42,42,42,156,42,156,2,42,42,42,156,42,156,2,42,42,42,156,42,156,2,42,42,42,156,42,156,2,42,42,42,85,2,42,42,156,2,156,96,2,2,2,44,44,2,44,11,11,11,44,2,156,44,44,2,42,156,44,9,2,42,42,156,85,68,2,42,42,42,42,9,2,42,42,42,42,9,2,42,42,42,42,42,42,2,42,42,42,42,50,96,2,42,42,42,156,42,156,2,42,42,42,85,2,42,42,156,2,156,156,2,2,2,42,42,44,2,44,42,42,42,44,2,156,42,42,44,2,44,96,42,44,2,42,42,156,156,42,156,2,42,42,42,156,42,156,2,42,42,42,156,42,156,2,42,42,42,156,42,156,2,42,42,42,156,42,156,2,42,42,42,156,42,156,2,42,42,42,85,2,42,42,156,2,156,96,2,2,2,2,156,2,42,156,2,42,42,2,156,42,156,85,2,35,42,156,85,2,35,35,42,156,2,35,35,42,156,85,2,35,35,42,156,85,2,35,35,42,156,2,35,42,156,2,156,42,156,2,156,156,2,2,2,2,2,2,2,2,85,2,85,2,2,2,85,2,85,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0];
 var D=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,2,0,0,0,0,7,0,2,0,0,15,0,0,0,0,15,15,0,0,0,15,15,0,0,0,0,15,15,0,0,0,0,15,15,0,0,0,15,0,0,0,6,0,3,0,7,3,0,0,0,0,0,6,0,14,0,0,0,0,0,2,0,0,6,0,14,0,0,0,0,0,0,2,4,0,2,0,0,0,0,4,0,0,0,0,0,0,4,0,0,0,0,0,0,4,0,0,0,0,0,0,4,0,0,0,0,0,0,7,0,3,0,0,0,0,0,0,0,0,3,0,7,1,0,0,0,6,14,0,14,8,8,0,6,0,2,6,14,0,0,2,14,0,0,0,0,2,0,5,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,1,0,0,0,0,7,0,3,0,0,0,0,0,0,0,0,3,0,7,3,0,0,0,0,0,6,0,14,0,0,0,0,0,2,0,0,6,0,14,0,0,0,0,0,0,2,6,0,2,0,0,0,0,5,0,1,0,0,0,0,5,0,1,0,0,0,0,5,0,1,0,0,0,0,5,0,1,0,0,0,0,5,0,1,0,0,0,0,0,0,0,0,3,0,7,1,0,0,0,0,2,0,0,2,0,0,0,0,7,0,2,0,0,15,0,1,0,0,15,15,0,1,0,15,15,0,1,0,0,15,15,0,1,0,0,15,15,0,1,0,15,0,1,0,6,0,1,0,7,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  for(n=0;n<1650+1;n++){
   setTile(X[n], Y[n], Z[n], I[n], D[n]);
  }
}

function Tank2(x,y,z){
 var X=[x,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0];
 var Y=[y,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+8,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+1,y+-2,y+1,y+-2,y+-2,y+-2,y+1,y+-2,y+1,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+0,y+-2,y+0,y+1,y+-2,y+0,y+1,y+-2,y+0,y+1,y+2,y+4,y+-2,y+0,y+1,y+2,y+4,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+4,y+-2,y+-1,y+0,y+1,y+2,y+4,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+0,y+1,y+2,y+-2,y+0,y+1,y+2,y+-2,y+0,y+1,y+-2,y+-2,y+-2,y+4,y+-2,y+4,y+-2,y+0,y+4,y+-2,y+0,y+1,y+4,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+-2,y+0,y+1,y+2,y+-2,y+0,y+1,y+-2,y+-2,y+-2,y+-2,y+-2,y+0,y+-2,y+0,y+1,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+-2,y+0,y+1,y+2,y+-2,y+0,y+1,y+-2,y+-2,y+-2,y+4,y+-2,y+4,y+-2,y+0,y+4,y+-2,y+0,y+1,y+4,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+-2,y+0,y+1,y+2,y+-2,y+0,y+1,y+-2,y+-2,y+-2,y+-2,y+0,y+-2,y+0,y+1,y+-2,y+0,y+1,y+-2,y+0,y+1,y+2,y+4,y+-2,y+0,y+1,y+2,y+4,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+4,y+-2,y+-1,y+0,y+1,y+2,y+4,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+0,y+1,y+2,y+-2,y+0,y+1,y+2,y+-2,y+0,y+1,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+1,y+-2,y+1,y+-2,y+-2,y+-2,y+1,y+-2,y+1,y+-2,y+-2,y+-2,y+-2,y+-2,y+-1,y+0,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2];
 var Z=[z,z+-1,z+0,z+1,z+2,z+3,z+4,z+5,z+6,z+7,z+8,z+9,z+10,z+11,z+12,z+13,z+13,z+-1,z+0,z+1,z+2,z+3,z+4,z+5,z+5,z+6,z+6,z+7,z+8,z+9,z+9,z+10,z+10,z+11,z+12,z+13,z+-1,z+0,z+1,z+1,z+2,z+2,z+2,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+13,z+-1,z+0,z+0,z+1,z+1,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+13,z+-1,z+0,z+1,z+2,z+2,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+13,z+-1,z+0,z+0,z+1,z+1,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+13,z+-1,z+0,z+1,z+1,z+2,z+2,z+2,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+13,z+-1,z+0,z+1,z+2,z+3,z+4,z+5,z+5,z+6,z+6,z+7,z+8,z+9,z+9,z+10,z+10,z+11,z+12,z+13,z+-1,z+0,z+0,z+0,z+1,z+2,z+3,z+4,z+5,z+6,z+7,z+8,z+9,z+10,z+11,z+12,z+13];
 var I=[0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,85,2,85,2,2,2,85,2,85,2,2,2,2,2,2,156,2,42,156,2,42,42,2,156,42,156,85,2,35,42,156,85,2,35,35,42,156,2,35,35,42,156,85,2,35,35,42,156,85,2,35,35,42,156,2,35,42,156,2,156,42,156,2,156,156,2,2,2,42,2,42,2,156,42,2,42,96,42,2,42,42,156,156,42,156,2,42,42,42,156,42,156,2,42,42,42,156,42,156,2,42,42,42,156,42,156,2,42,42,42,156,42,156,2,42,42,42,156,42,156,2,42,42,42,85,2,42,42,156,2,156,96,2,2,2,2,2,156,2,42,156,2,42,42,156,85,68,46,2,42,42,42,42,9,46,2,42,42,42,42,9,46,2,42,42,42,42,42,42,2,42,42,42,42,50,96,2,42,42,42,156,42,156,2,42,42,42,85,2,42,42,156,2,156,156,2,2,2,42,2,42,2,156,42,2,42,96,42,2,42,42,156,156,42,156,2,42,42,42,156,42,156,2,42,42,42,156,42,156,2,42,42,42,156,42,156,2,42,42,42,156,42,156,2,42,42,42,156,42,156,2,42,42,42,85,2,42,42,156,2,156,96,2,2,2,2,156,2,42,156,2,42,42,2,156,42,156,85,2,35,42,156,85,2,35,35,42,156,2,35,35,42,156,85,2,35,35,42,156,85,2,35,35,42,156,2,35,42,156,2,156,42,156,2,156,156,2,2,2,2,2,2,2,2,85,2,85,2,2,2,85,2,85,2,2,2,0,2,57,0,2,2,2,2,2,2,2,2,2,2,2,2,2];
 var D=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,2,0,0,0,0,7,0,0,0,0,15,0,0,0,0,15,15,0,0,0,15,15,0,0,0,0,15,15,0,0,0,0,15,15,0,0,0,15,0,0,0,6,0,3,0,7,3,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,2,4,0,2,0,0,0,0,4,0,0,0,0,0,0,4,0,0,0,0,0,0,4,0,0,0,0,0,0,4,0,0,0,0,0,0,4,0,3,0,0,0,0,0,0,0,0,3,0,7,1,0,0,0,0,0,2,0,0,2,0,0,0,2,0,5,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,1,0,0,0,0,7,0,3,0,0,0,0,0,0,0,0,3,0,7,3,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,2,5,0,2,0,0,0,0,5,0,1,0,0,0,0,5,0,1,0,0,0,0,5,0,1,0,0,0,0,5,0,1,0,0,0,0,5,0,1,0,0,0,0,0,0,0,0,3,0,7,1,0,0,0,0,2,0,0,2,0,0,0,0,7,0,2,0,0,15,0,1,0,0,15,15,0,1,0,15,15,0,1,0,0,15,15,0,1,0,0,15,15,0,1,0,15,0,1,0,6,0,3,0,7,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  for(n=0;n<1485+1;n++){
   setTile(X[n], Y[n], Z[n], I[n], D[n]);
  }
}

function Tank3(x,y,z){
 var X=[x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8];
 var Y=[y,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+1,y+-2,y+0,y+1,y+-2,y+-1,y+0,y+1,y+4,y+-2,y+-1,y+0,y+1,y+4,y+-2,y+-1,y+0,y+1,y+4,y+-2,y+-1,y+0,y+1,y+-2,y+-1,y+0,y+1,y+-2,y+-1,y+0,y+1,y+-2,y+-1,y+0,y+-2,y+-1,y+-2,y+-2,y+-2,y+4,y+-2,y+4,y+-2,y+1,y+4,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+4,y+-2,y+0,y+1,y+-2,y+0,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+1,y+3,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+4,y+-2,y+0,y+1,y+-2,y+0,y+-2,y+-2,y+-2,y+-2,y+4,y+-2,y+4,y+-2,y+1,y+4,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+4,y+-2,y+0,y+1,y+-2,y+0,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+1,y+-2,y+0,y+1,y+-2,y+-1,y+0,y+1,y+4,y+-2,y+-1,y+0,y+1,y+4,y+-2,y+-1,y+0,y+1,y+4,y+-2,y+-1,y+0,y+1,y+-2,y+-1,y+0,y+1,y+-2,y+-1,y+0,y+1,y+-2,y+-1,y+0,y+-2,y+-1,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+8];
 var Z=[z,z+0,z+1,z+2,z+3,z+4,z+5,z+6,z+7,z+8,z+9,z+10,z+11,z+12,z+13,z+0,z+1,z+2,z+3,z+4,z+5,z+6,z+7,z+8,z+9,z+10,z+11,z+12,z+13,z+0,z+1,z+2,z+3,z+3,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+12,z+12,z+13,z+0,z+1,z+1,z+2,z+2,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+11,z+11,z+12,z+13,z+0,z+1,z+2,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+11,z+11,z+12,z+13,z+0,z+1,z+1,z+2,z+2,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+11,z+11,z+12,z+13,z+0,z+1,z+2,z+3,z+3,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+12,z+12,z+13,z+0,z+1,z+2,z+3,z+4,z+5,z+6,z+7,z+8,z+9,z+10,z+11,z+12,z+13,z+13];
 var I=[0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,35,2,35,35,2,35,35,35,85,2,35,35,35,85,2,35,35,35,85,2,35,35,35,2,35,35,35,2,35,35,35,2,35,35,2,35,2,2,2,42,2,42,2,156,42,2,156,42,156,156,42,156,2,42,42,156,156,42,156,2,42,42,156,156,42,156,2,42,42,156,156,42,156,2,42,42,156,156,42,156,2,42,42,156,85,2,42,156,2,156,2,2,2,2,2,2,156,156,2,156,42,156,85,68,46,2,42,42,42,42,9,46,2,42,42,42,42,42,42,2,42,42,42,42,50,96,2,42,42,42,156,42,156,2,42,42,156,85,2,42,156,2,156,2,2,2,2,42,2,42,2,156,42,2,156,42,156,156,42,156,2,42,42,156,156,42,156,2,42,42,156,156,42,156,2,42,42,156,156,42,156,2,42,42,156,156,42,156,2,42,42,156,85,2,42,156,2,156,2,2,2,2,2,2,35,2,35,35,2,35,35,35,85,2,35,35,35,85,2,35,35,35,85,2,35,35,35,2,35,35,35,2,35,35,35,2,35,35,2,35,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0];
 var D=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15,0,15,15,0,15,15,15,0,0,15,15,15,0,0,15,15,15,0,0,15,15,15,0,15,15,15,0,15,15,15,0,15,15,0,15,0,0,0,0,0,0,0,2,0,0,6,0,2,6,0,2,0,0,0,0,4,0,0,0,0,0,0,4,0,0,0,0,0,0,4,0,0,0,0,0,0,4,0,0,0,0,0,3,0,0,0,3,0,3,0,0,0,0,0,0,2,6,0,6,0,2,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,7,0,3,0,0,0,3,0,0,0,3,0,3,0,0,0,0,0,0,0,0,2,0,0,6,0,2,6,0,2,0,0,0,1,5,0,1,0,0,0,1,5,0,1,0,0,0,1,5,0,1,0,0,0,1,5,0,1,0,0,0,3,0,0,0,3,0,3,0,0,0,0,0,0,15,0,15,15,0,15,15,15,0,0,15,15,15,0,0,15,15,15,0,0,15,15,15,0,15,15,15,0,15,15,15,0,15,15,0,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  for(n=0;n<1232+1;n++){
   setTile(X[n], Y[n], Z[n], I[n], D[n]);
  }
}

function Tank4(x,y,z){
 var X=[x,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6];
 var Y=[y,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-1,y+0,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+0,y+1,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+0,y+1,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+3,y+-2,y+3,y+-2,y+2,y+3,y+-2,y+1,y+2,y+3,y+-2,y+1,y+2,y+3,y+-2,y+1,y+2,y+3,y+-2,y+1,y+2,y+3,y+-2,y+1,y+2,y+3,y+-2,y+1,y+-2,y+-1,y+0,y+-2,y+-1,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+0,y+1,y+-2,y+0,y+1,y+3,y+-2,y+0,y+1,y+2,y+3,y+-2,y+0,y+1,y+2,y+3,y+-2,y+0,y+1,y+2,y+3,y+-2,y+0,y+1,y+2,y+3,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+3,y+-2,y+3,y+-2,y+2,y+3,y+-2,y+1,y+2,y+3,y+-2,y+1,y+2,y+3,y+-2,y+1,y+2,y+3,y+-2,y+1,y+2,y+3,y+-2,y+1,y+2,y+3,y+-2,y+1,y+-2,y+-1,y+0,y+-2,y+-1,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+0,y+1,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+0,y+1,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+8];
 var Z=[z,z+0,z+1,z+2,z+3,z+4,z+5,z+6,z+7,z+8,z+9,z+10,z+11,z+12,z+13,z+0,z+0,z+0,z+1,z+2,z+3,z+4,z+5,z+6,z+7,z+8,z+9,z+10,z+11,z+12,z+13,z+0,z+1,z+2,z+3,z+4,z+5,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+10,z+11,z+12,z+13,z+0,z+1,z+2,z+2,z+3,z+3,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+10,z+10,z+11,z+11,z+11,z+12,z+12,z+13,z+0,z+1,z+2,z+3,z+4,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+10,z+11,z+12,z+13,z+0,z+1,z+2,z+2,z+3,z+3,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+10,z+10,z+11,z+11,z+11,z+12,z+12,z+13,z+0,z+1,z+2,z+3,z+4,z+5,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+10,z+11,z+12,z+13,z+0,z+1,z+2,z+3,z+4,z+5,z+6,z+7,z+8,z+9,z+10,z+11,z+12,z+13,z+13];
 var I=[0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,57,57,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,35,35,2,35,35,35,35,2,35,35,35,35,2,35,35,2,2,2,2,2,2,2,42,2,42,2,156,42,2,156,42,42,2,42,42,42,2,42,42,42,2,42,42,42,2,42,42,42,2,156,3,42,156,2,156,2,2,2,2,2,2,2,156,42,2,42,85,46,2,42,85,68,46,2,42,42,9,46,2,42,42,9,46,2,42,42,42,42,2,2,2,2,2,2,42,2,42,2,156,42,2,156,42,42,2,42,42,42,2,42,42,42,2,42,42,42,2,42,42,42,2,156,3,42,156,2,156,2,2,2,2,2,2,2,2,35,35,2,35,35,35,35,2,35,35,35,35,2,35,35,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0];
 var D=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15,15,0,15,15,15,15,0,15,15,15,15,0,15,15,0,0,0,0,0,0,0,0,0,0,0,6,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,3,0,3,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,5,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,3,0,3,0,0,0,0,0,0,0,0,15,15,0,15,15,15,15,0,15,15,15,15,0,15,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  for(n=0;n<1232+1;n++){
   setTile(X[n], Y[n], Z[n], I[n], D[n]);
  }
}

function Tank5(x,y,z){
 var X=[x,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8];
 var Y=[y,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-1,y+0,y+-2,y+-1,y+-2,y+-1,y+-2,y+-1,y+-2,y+-1,y+-2,y+-1,y+-2,y+-1,y+-2,y+-1,y+-2,y+-1,y+-2,y+-2,y+-2,y+-1,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+2,y+-2,y+-1,y+0,y+1,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+-2,y+-2,y+-2,y+-1,y+3,y+-2,y+-1,y+0,y+3,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+-2,y+-1,y+0,y+-2,y+-1,y+-2,y+-2,y+-2,y+-1,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+-2,y+-1,y+-2,y+-2,y+-2,y+-1,y+3,y+-2,y+-1,y+0,y+3,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+-2,y+-1,y+0,y+-2,y+-1,y+-2,y+-2,y+-2,y+-1,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+2,y+-2,y+-1,y+0,y+1,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+-2,y+-2,y+-2,y+-1,y+-2,y+-1,y+-2,y+-1,y+-2,y+-1,y+-2,y+-1,y+-2,y+-1,y+-2,y+-1,y+-2,y+-1,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+8];
 var Z=[z,z+0,z+1,z+2,z+3,z+4,z+5,z+6,z+7,z+8,z+9,z+0,z+0,z+0,z+1,z+1,z+2,z+2,z+3,z+3,z+4,z+4,z+5,z+5,z+6,z+6,z+7,z+7,z+8,z+8,z+9,z+0,z+1,z+1,z+2,z+2,z+2,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+7,z+7,z+7,z+8,z+8,z+9,z+0,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+8,z+8,z+9,z+0,z+1,z+1,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+8,z+8,z+9,z+0,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+8,z+8,z+9,z+0,z+1,z+1,z+2,z+2,z+2,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+7,z+7,z+7,z+8,z+8,z+9,z+0,z+1,z+1,z+2,z+2,z+3,z+3,z+4,z+4,z+5,z+5,z+6,z+6,z+7,z+7,z+8,z+8,z+9,z+0,z+1,z+2,z+3,z+4,z+5,z+6,z+7,z+8,z+9,z+0,z+1,z+2,z+3,z+4,z+5,z+6,z+7,z+8,z+9,z+9];
 var I=[0,0,2,2,2,2,2,2,2,2,2,2,57,0,2,156,2,156,2,156,2,156,2,156,2,156,2,156,2,156,2,2,2,156,3,42,156,3,42,156,3,42,156,156,3,42,156,156,3,42,156,3,42,156,2,156,2,2,3,156,42,3,42,156,42,3,42,42,42,42,42,3,42,42,42,42,42,3,42,42,42,42,42,3,42,42,156,3,42,156,2,156,2,2,2,156,3,42,156,3,42,42,85,68,46,3,42,42,42,9,46,3,42,42,42,9,46,3,42,42,42,42,42,3,42,156,2,156,2,2,3,156,42,3,42,156,42,3,42,42,42,42,42,3,42,42,42,42,42,3,42,42,42,42,42,3,42,42,156,3,42,156,2,156,2,2,2,156,3,42,156,3,42,156,3,42,156,156,3,42,156,156,3,42,156,3,42,156,2,156,2,2,2,156,2,156,2,156,2,156,2,156,2,156,2,156,2,156,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0];
 var D=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,2,0,0,2,0,0,0,0,0,0,3,0,0,0,3,0,0,0,0,0,3,0,3,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,3,0,3,0,0,0,2,0,0,2,0,0,0,0,5,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,3,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,3,0,3,0,0,0,2,0,0,2,0,0,1,0,0,1,3,0,0,1,3,0,0,1,0,0,3,0,3,0,0,0,2,0,1,0,1,0,1,0,1,0,1,0,1,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  for(n=0;n<1100+1;n++){
   setTile(X[n], Y[n], Z[n], I[n], D[n]);
  }
}

function Tank6(x,y,z){
 var X=[x,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7];
 var Y=[y,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-1,y+0,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+0,y+-2,y+-1,y+0,y+1,y+-2,y+-1,y+0,y+1,y+-2,y+-1,y+0,y+1,y+-2,y+-1,y+0,y+1,y+-2,y+-1,y+0,y+1,y+-2,y+0,y+-2,y+-2,y+-2,y+-2,y+2,y+3,y+-2,y+0,y+2,y+3,y+-2,y+0,y+1,y+2,y+3,y+-2,y+0,y+1,y+2,y+3,y+-2,y+0,y+1,y+2,y+3,y+-2,y+0,y+1,y+2,y+3,y+-2,y+0,y+1,y+2,y+3,y+-2,y+0,y+-2,y+-2,y+-2,y+-2,y+-2,y+0,y+-2,y+0,y+1,y+2,y+3,y+-2,y+0,y+1,y+2,y+3,y+-2,y+0,y+1,y+2,y+3,y+-2,y+0,y+1,y+2,y+3,y+-2,y+0,y+1,y+2,y+3,y+-2,y+0,y+-2,y+-2,y+-2,y+-2,y+2,y+3,y+-2,y+0,y+2,y+3,y+-2,y+0,y+1,y+2,y+3,y+-2,y+0,y+1,y+2,y+3,y+-2,y+0,y+1,y+2,y+3,y+-2,y+0,y+1,y+2,y+3,y+-2,y+0,y+1,y+2,y+3,y+-2,y+0,y+-2,y+-2,y+-2,y+-2,y+-2,y+0,y+-2,y+-1,y+0,y+1,y+-2,y+-1,y+0,y+1,y+-2,y+-1,y+0,y+1,y+-2,y+-1,y+0,y+1,y+-2,y+-1,y+0,y+1,y+-2,y+0,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+8];
 var Z=[z,z+0,z+1,z+2,z+3,z+4,z+5,z+6,z+7,z+8,z+9,z+10,z+0,z+0,z+0,z+1,z+2,z+3,z+4,z+5,z+6,z+7,z+8,z+9,z+10,z+0,z+1,z+2,z+3,z+4,z+5,z+6,z+7,z+8,z+9,z+10,z+0,z+1,z+2,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+9,z+9,z+10,z+0,z+1,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+10,z+0,z+1,z+2,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+10,z+0,z+1,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+10,z+0,z+1,z+2,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+9,z+9,z+10,z+0,z+1,z+2,z+3,z+4,z+5,z+6,z+7,z+8,z+9,z+10,z+10];
 var I=[0,0,2,2,2,2,2,2,2,2,2,2,2,57,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,156,2,35,156,156,2,35,35,156,2,35,35,156,2,35,35,156,2,35,156,156,2,156,2,2,2,2,44,44,2,44,44,44,2,42,44,156,156,2,42,42,156,156,2,42,42,156,156,2,42,42,156,156,2,42,44,156,156,2,156,2,2,2,2,2,44,2,42,85,68,46,2,42,42,9,46,2,42,42,42,42,2,42,42,50,96,2,42,44,156,156,2,156,2,2,2,2,44,44,2,44,44,44,2,42,44,156,156,2,42,42,156,156,2,42,42,156,156,2,42,42,156,156,2,42,44,156,156,2,156,2,2,2,2,2,156,2,35,156,156,2,35,35,156,2,35,35,156,2,35,35,156,2,35,156,156,2,156,2,2,2,2,2,2,2,2,2,2,2,2,0];
 var D=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,15,7,2,0,15,15,0,0,15,15,0,0,15,15,0,0,15,6,3,0,3,0,0,0,0,14,6,0,6,14,6,0,0,6,4,0,0,0,0,4,0,0,0,0,4,0,0,0,0,4,0,0,0,6,7,3,0,3,0,0,0,0,0,6,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,1,0,0,6,7,3,0,3,0,0,0,0,14,6,0,6,14,6,0,0,6,5,1,0,0,0,5,1,0,0,0,5,1,0,0,0,5,1,0,0,6,7,3,0,3,0,0,0,0,0,2,0,15,7,2,0,15,15,1,0,15,15,1,0,15,15,1,0,15,6,3,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0];
  for(n=0;n<1089+1;n++){
   setTile(X[n], Y[n], Z[n], I[n], D[n]);
  }
}

function Tank7(x,y,z){
 var X=[x,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5];
 var Y=[y,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-1,y+0,y+-2,y+-2,y+-2,y+0,y+-2,y+0,y+1,y+-2,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+4,y+-2,y+-1,y+0,y+1,y+2,y+4,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+4,y+-2,y+-1,y+0,y+1,y+2,y+4,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+0,y+1,y+2,y+-2,y+0,y+1,y+-2,y+0,y+-2,y+-2,y+-2,y+-2,y+4,y+5,y+-2,y+4,y+5,y+-2,y+0,y+4,y+5,y+-2,y+-1,y+0,y+1,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+-2,y+0,y+1,y+-2,y+0,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+0,y+-2,y+0,y+1,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+-2,y+0,y+1,y+-2,y+0,y+-2,y+-2,y+-2,y+-2,y+4,y+5,y+-2,y+4,y+5,y+-2,y+0,y+4,y+5,y+-2,y+0,y+1,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+-2,y+0,y+1,y+-2,y+0,y+-2,y+-2,y+-2,y+-2,y+-2,y+0,y+-2,y+0,y+1,y+-2,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+4,y+-2,y+-1,y+0,y+1,y+2,y+4,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+4,y+-2,y+-1,y+0,y+1,y+2,y+4,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+0,y+1,y+2,y+-2,y+0,y+1,y+-2,y+0,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+8];
 var Z=[z,z+0,z+1,z+2,z+3,z+4,z+5,z+6,z+7,z+8,z+9,z+10,z+11,z+12,z+13,z+14,z+15,z+0,z+0,z+0,z+1,z+2,z+3,z+3,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+14,z+14,z+15,z+0,z+1,z+2,z+2,z+2,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+14,z+14,z+15,z+0,z+1,z+2,z+3,z+4,z+4,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+14,z+14,z+15,z+0,z+1,z+2,z+2,z+2,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+14,z+14,z+15,z+0,z+1,z+2,z+3,z+3,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+14,z+14,z+15,z+0,z+1,z+2,z+3,z+4,z+5,z+6,z+7,z+8,z+9,z+10,z+11,z+12,z+13,z+14,z+15,z+15];
 var I=[0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,57,0,2,2,2,156,2,42,156,2,35,42,44,2,35,35,42,44,85,2,35,35,42,44,85,2,35,35,42,44,2,35,35,42,44,85,2,35,35,42,44,85,2,35,35,42,44,2,35,42,44,2,42,156,2,156,2,2,2,2,42,44,2,42,44,2,156,42,44,2,44,50,96,42,44,2,42,42,156,156,42,156,2,42,42,42,156,42,156,2,42,42,42,156,42,156,2,42,42,42,156,42,156,2,42,42,42,156,42,156,2,42,42,42,156,42,156,2,42,42,42,44,2,42,156,2,156,2,2,2,2,2,2,156,2,42,156,2,42,42,156,85,68,46,2,42,42,42,42,9,46,2,42,42,42,42,9,46,2,42,42,42,42,42,156,2,42,42,42,42,50,96,2,42,42,42,156,42,156,2,42,42,42,44,85,2,42,156,2,156,2,2,2,2,42,44,2,42,44,2,156,42,44,2,42,156,42,44,2,42,42,156,156,42,156,2,42,42,42,156,42,156,2,42,42,42,156,42,156,2,42,42,42,156,42,156,2,42,42,42,156,42,156,2,42,42,42,156,42,156,2,42,42,42,44,2,42,156,2,156,2,2,2,2,2,156,2,42,156,2,35,42,44,2,35,35,42,44,85,2,35,35,42,44,85,2,35,35,42,44,2,35,35,42,44,85,2,35,35,42,44,85,2,35,35,42,44,2,35,42,44,2,42,156,2,156,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0];
 var D=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,2,0,15,0,0,0,15,15,0,0,0,0,15,15,0,0,0,0,15,15,0,0,0,15,15,0,0,0,0,15,15,0,0,0,0,15,15,0,0,0,15,0,0,0,0,3,0,3,0,0,0,0,0,0,0,0,0,0,2,0,0,0,14,4,0,0,0,0,0,0,2,6,0,2,0,0,0,0,4,0,0,0,0,0,0,4,0,0,0,0,0,0,4,0,0,0,0,0,0,4,0,0,0,0,0,0,4,0,3,0,0,0,0,0,0,0,3,0,3,0,0,0,0,0,0,2,0,0,2,0,0,0,2,0,5,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,5,1,0,0,0,0,7,0,3,0,0,0,0,0,0,0,0,3,0,3,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,2,0,0,0,0,0,2,6,0,2,0,0,0,0,5,0,1,0,0,0,0,5,0,1,0,0,0,0,5,0,1,0,0,0,0,5,0,1,0,0,0,0,7,0,3,0,0,0,0,0,0,0,3,0,3,0,0,0,0,0,2,0,0,2,0,15,0,0,0,15,15,0,0,0,0,15,15,0,0,0,0,15,15,0,0,0,15,15,0,0,0,0,15,15,0,0,0,0,15,15,0,0,0,15,0,0,0,0,3,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  for(n=0;n<1232+1;n++){
   setTile(X[n], Y[n], Z[n], I[n], D[n]);
  }
}

function Tank8(x,y,z){
 var X=[x,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5];
 var Y=[y,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-1,y+0,y+-2,y+0,y+1,y+-2,y+-1,y+0,y+1,y+-2,y+-1,y+0,y+1,y+-2,y+0,y+1,y+-2,y+-1,y+0,y+1,y+3,y+4,y+-2,y+-1,y+0,y+1,y+3,y+4,y+-2,y+0,y+1,y+3,y+4,y+-2,y+0,y+1,y+3,y+4,y+-2,y+0,y+1,y+3,y+4,y+-2,y+0,y+1,y+3,y+4,y+-2,y+-1,y+0,y+1,y+3,y+4,y+-2,y+-1,y+0,y+1,y+3,y+4,y+-2,y+0,y+1,y+-2,y+-1,y+0,y+1,y+-2,y+-1,y+0,y+1,y+-2,y+0,y+1,y+-2,y+-2,y+-2,y+0,y+1,y+-2,y+0,y+1,y+2,y+-2,y+0,y+1,y+2,y+3,y+-2,y+0,y+1,y+2,y+3,y+-2,y+0,y+2,y+3,y+4,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+-2,y+0,y+2,y+3,y+4,y+5,y+6,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+-2,y+0,y+2,y+3,y+4,y+5,y+6,y+-2,y+0,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+2,y+3,y+4,y+-2,y+0,y+2,y+3,y+-2,y+0,y+2,y+3,y+-2,y+0,y+1,y+2,y+-2,y+0,y+1,y+-2,y+-2,y+-2,y+0,y+1,y+-2,y+0,y+1,y+2,y+-2,y+0,y+1,y+2,y+3,y+-2,y+0,y+2,y+3,y+-2,y+0,y+3,y+4,y+-2,y+0,y+3,y+4,y+6,y+-2,y+0,y+3,y+4,y+5,y+6,y+-2,y+0,y+3,y+4,y+5,y+6,y+-2,y+0,y+3,y+4,y+5,y+6,y+-2,y+0,y+3,y+4,y+5,y+6,y+-2,y+0,y+3,y+4,y+5,y+-2,y+0,y+3,y+4,y+-2,y+0,y+3,y+-2,y+0,y+3,y+-2,y+0,y+2,y+-2,y+0,y+1,y+-2,y+-2,y+-2,y+0,y+1,y+-2,y+0,y+1,y+2,y+-2,y+0,y+3,y+-2,y+0,y+3,y+-2,y+0,y+1,y+2,y+3,y+4,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+-2,y+0,y+2,y+3,y+4,y+5,y+6,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+-2,y+0,y+2,y+3,y+4,y+5,y+6,y+-2,y+0,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+2,y+3,y+4,y+-2,y+0,y+2,y+3,y+-2,y+0,y+2,y+3,y+-2,y+0,y+1,y+2,y+-2,y+0,y+1,y+-2,y+-2,y+-2,y+0,y+1,y+-2,y+-1,y+0,y+1,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+3,y+4,y+-2,y+-1,y+0,y+1,y+3,y+4,y+-2,y+0,y+1,y+3,y+4,y+-2,y+0,y+1,y+3,y+4,y+-2,y+0,y+1,y+3,y+4,y+-2,y+0,y+1,y+3,y+4,y+-2,y+-1,y+0,y+1,y+3,y+4,y+-2,y+-1,y+0,y+1,y+3,y+4,y+-2,y+0,y+1,y+-2,y+-1,y+0,y+1,y+-2,y+-1,y+0,y+1,y+-2,y+0,y+1,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+8];
 var Z=[z,z+0,z+1,z+2,z+3,z+4,z+5,z+6,z+7,z+8,z+9,z+10,z+11,z+12,z+13,z+14,z+15,z+16,z+17,z+0,z+0,z+0,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+14,z+14,z+14,z+14,z+15,z+15,z+15,z+15,z+16,z+16,z+16,z+17,z+0,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+13,z+14,z+14,z+14,z+14,z+15,z+15,z+15,z+15,z+16,z+16,z+16,z+17,z+0,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+14,z+14,z+14,z+15,z+15,z+15,z+16,z+16,z+16,z+17,z+0,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+13,z+14,z+14,z+14,z+14,z+15,z+15,z+15,z+15,z+16,z+16,z+16,z+17,z+0,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+14,z+14,z+14,z+14,z+15,z+15,z+15,z+15,z+16,z+16,z+16,z+17,z+0,z+1,z+2,z+3,z+4,z+5,z+6,z+7,z+8,z+9,z+10,z+11,z+12,z+13,z+14,z+15,z+16,z+17,z+17];
 var I=[0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,57,0,2,156,156,2,35,35,156,2,35,35,156,2,42,156,2,35,35,156,156,156,2,35,35,156,156,156,2,42,156,156,156,2,42,156,156,156,2,42,156,156,156,2,42,156,156,156,2,35,35,156,156,156,2,35,35,156,156,156,2,42,156,2,35,35,156,2,35,35,156,2,156,156,2,2,2,156,156,2,42,42,42,2,42,42,42,44,2,42,42,42,156,2,42,156,42,156,2,42,50,156,42,42,42,42,2,42,156,42,42,42,42,2,42,50,156,42,42,42,42,2,42,156,42,42,42,42,2,42,156,42,42,156,2,42,50,156,42,42,44,2,42,156,42,156,2,42,156,156,2,42,156,44,2,42,50,156,2,156,156,2,2,2,156,156,2,42,42,42,2,42,42,42,44,2,42,50,44,2,42,42,42,2,42,42,85,46,2,42,42,85,68,46,2,42,42,42,9,46,2,42,42,42,9,46,2,42,42,42,42,42,2,42,42,42,156,2,42,42,42,2,42,156,2,42,44,2,42,156,2,156,156,2,2,2,156,156,2,42,42,20,2,42,96,2,42,156,2,42,50,156,42,156,2,42,50,156,42,42,42,42,2,42,156,42,42,42,42,2,42,50,156,42,42,42,42,2,42,156,42,42,42,42,2,42,156,42,42,156,2,42,50,156,42,42,44,2,42,156,42,156,2,42,156,156,2,42,156,44,2,42,50,156,2,156,156,2,2,2,156,156,2,35,35,156,2,35,35,42,20,2,42,42,42,2,35,35,156,156,156,2,35,35,156,156,156,2,42,156,156,156,2,42,156,156,156,2,42,156,156,156,2,42,156,156,156,2,35,35,156,156,156,2,35,35,156,156,156,2,42,156,2,35,35,156,2,35,35,156,2,156,156,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0];
 var D=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,15,15,0,0,15,15,0,0,0,0,0,15,15,0,6,2,0,15,15,0,4,0,0,0,0,4,0,0,0,0,4,0,0,0,0,4,0,0,0,0,4,0,0,15,15,0,4,0,0,15,15,0,7,0,0,0,0,0,15,15,0,0,15,15,0,0,7,3,0,0,0,6,2,0,0,0,0,0,0,0,0,6,0,0,0,0,2,0,0,5,0,2,0,0,5,5,0,0,0,0,0,0,5,0,0,0,0,0,0,5,5,0,0,0,0,0,0,5,0,0,0,0,0,0,5,0,0,3,0,0,5,5,0,0,6,0,0,5,0,3,0,0,5,3,0,0,5,6,0,0,5,3,0,7,3,0,0,0,6,2,0,0,0,0,0,0,0,0,6,0,0,3,14,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,3,0,0,6,0,0,3,0,7,3,0,0,0,6,2,0,0,0,0,0,0,3,0,0,2,0,0,5,4,0,2,0,0,5,4,0,0,0,0,0,0,4,0,0,0,0,0,0,5,4,0,0,0,0,0,0,4,0,0,0,0,0,0,4,0,0,3,0,0,5,4,0,0,6,0,0,4,0,3,0,0,4,3,0,0,4,6,0,0,5,3,0,7,3,0,0,0,6,2,0,15,15,1,0,15,15,0,0,0,0,0,0,0,15,15,1,6,1,0,15,15,1,5,1,0,0,1,5,1,0,0,1,5,1,0,0,1,5,1,0,0,1,5,1,0,15,15,1,5,1,0,15,15,1,7,1,0,0,1,0,15,15,1,0,15,15,1,0,7,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  for(n=0;n<1386+1;n++){
   setTile(X[n], Y[n], Z[n], I[n], D[n]);
  }
}

function Tank9(x,y,z){
 var X=[x,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9];
 var Y=[y,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-1,y+0,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+1,y+2,y+3,y+-2,y+2,y+3,y+-2,y+2,y+3,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+0,y+1,y+2,y+3,y+-2,y+1,y+2,y+3,y+-2,y+1,y+2,y+3,y+-2,y+2,y+3,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+2,y+-2,y+1,y+2,y+-2,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+-2,y+-1,y+0,y+-2,y+-1,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+1,y+2,y+-2,y+0,y+1,y+2,y+3,y+-2,y+0,y+1,y+2,y+3,y+4,y+-2,y+0,y+1,y+2,y+3,y+4,y+-2,y+0,y+1,y+2,y+3,y+4,y+-2,y+0,y+1,y+2,y+3,y+4,y+-2,y+0,y+1,y+2,y+3,y+4,y+-2,y+0,y+1,y+2,y+3,y+-2,y+0,y+1,y+2,y+-2,y+0,y+1,y+-2,y+0,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+1,y+2,y+-2,y+0,y+1,y+2,y+3,y+-2,y+0,y+1,y+2,y+3,y+-2,y+0,y+1,y+2,y+3,y+4,y+-2,y+0,y+1,y+2,y+3,y+4,y+-2,y+0,y+1,y+2,y+3,y+4,y+-2,y+0,y+1,y+2,y+3,y+-2,y+0,y+1,y+2,y+3,y+-2,y+0,y+1,y+2,y+-2,y+0,y+1,y+-2,y+0,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+1,y+2,y+-2,y+0,y+1,y+2,y+3,y+-2,y+0,y+1,y+2,y+3,y+4,y+-2,y+0,y+1,y+2,y+3,y+4,y+-2,y+0,y+1,y+2,y+3,y+4,y+-2,y+0,y+1,y+2,y+3,y+4,y+-2,y+0,y+1,y+2,y+3,y+4,y+-2,y+0,y+1,y+2,y+3,y+-2,y+0,y+1,y+2,y+-2,y+0,y+1,y+-2,y+0,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+2,y+-2,y+1,y+2,y+-2,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+-2,y+-1,y+0,y+-2,y+-1,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+0,y+1,y+2,y+3,y+-2,y+0,y+1,y+2,y+3,y+-2,y+1,y+2,y+3,y+-2,y+2,y+3,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+1,y+2,y+3,y+-2,y+2,y+3,y+-2,y+2,y+3,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+8];
 var Z=[z,z+0,z+1,z+2,z+3,z+4,z+5,z+6,z+7,z+8,z+9,z+10,z+11,z+12,z+13,z+14,z+15,z+16,z+17,z+0,z+0,z+0,z+1,z+2,z+3,z+4,z+5,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+9,z+9,z+9,z+10,z+11,z+12,z+13,z+14,z+15,z+16,z+17,z+0,z+1,z+2,z+3,z+4,z+5,z+6,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+11,z+12,z+13,z+14,z+15,z+16,z+17,z+0,z+1,z+2,z+3,z+3,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+13,z+14,z+14,z+14,z+15,z+15,z+16,z+17,z+0,z+1,z+2,z+3,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+14,z+14,z+15,z+16,z+17,z+0,z+1,z+2,z+3,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+14,z+14,z+15,z+16,z+17,z+0,z+1,z+2,z+3,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+14,z+14,z+15,z+16,z+17,z+0,z+1,z+2,z+3,z+3,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+13,z+14,z+14,z+14,z+15,z+15,z+16,z+17,z+0,z+1,z+2,z+3,z+4,z+5,z+6,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+11,z+12,z+13,z+14,z+15,z+16,z+17,z+0,z+1,z+2,z+3,z+4,z+5,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+9,z+9,z+9,z+10,z+11,z+12,z+13,z+14,z+15,z+16,z+17,z+0,z+1,z+2,z+3,z+4,z+5,z+6,z+7,z+8,z+9,z+10,z+11,z+12,z+13,z+14,z+15,z+16,z+17,z+17];
 var I=[57,57,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,57,57,2,2,2,2,2,2,2,42,42,42,2,42,42,2,42,42,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,42,85,68,46,2,42,9,46,2,42,9,46,2,42,42,2,2,2,2,2,2,2,2,2,2,2,35,2,35,35,2,35,35,35,2,35,35,35,35,2,35,35,35,35,42,2,35,35,35,35,42,2,35,35,35,35,42,2,35,35,35,35,2,35,35,35,35,2,35,35,35,35,2,35,35,35,2,35,35,2,35,2,2,2,2,2,2,2,156,156,2,156,42,42,156,2,42,42,42,42,85,2,42,42,42,42,85,2,42,42,42,42,158,2,42,42,42,42,85,2,42,42,42,42,85,2,42,42,42,156,2,42,42,156,2,42,156,2,156,2,2,2,2,2,2,2,2,156,156,2,156,42,42,156,2,42,42,42,42,2,42,42,42,42,158,2,42,42,42,50,96,2,42,42,42,42,158,2,42,42,42,42,2,42,42,42,156,2,42,42,156,2,42,156,2,156,2,2,2,2,2,2,2,2,156,156,2,156,42,42,156,2,42,42,42,42,85,2,42,42,42,42,85,2,42,42,42,42,158,2,42,42,42,42,85,2,42,42,42,42,85,2,42,42,42,156,2,42,42,156,2,42,156,2,156,2,2,2,2,2,2,2,35,2,35,35,2,35,35,35,2,35,35,35,35,2,35,35,35,35,42,2,35,35,35,35,42,2,35,35,35,35,42,2,35,35,35,35,2,35,35,35,35,2,35,35,35,35,2,35,35,35,2,35,35,2,35,2,2,2,2,2,2,2,2,2,2,42,85,68,46,2,42,42,9,46,2,42,9,46,2,42,42,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,42,42,42,2,42,42,2,42,42,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,57];
 var D=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15,0,15,15,0,15,15,15,0,15,15,15,15,0,15,15,15,15,0,0,15,15,15,15,0,0,15,15,15,15,0,0,15,15,15,15,0,15,15,15,15,0,15,15,15,15,0,15,15,15,0,15,15,0,15,0,0,0,0,0,0,0,6,2,0,6,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,3,0,0,3,0,3,0,0,0,0,0,0,0,0,6,2,0,6,0,0,2,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,5,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,3,0,0,0,3,0,0,3,0,3,0,0,0,0,0,0,0,0,6,2,0,6,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,3,0,0,3,0,3,0,0,0,0,0,0,0,15,0,15,15,0,15,15,15,0,15,15,15,15,0,15,15,15,15,0,0,15,15,15,15,0,0,15,15,15,15,0,0,15,15,15,15,0,15,15,15,15,0,15,15,15,15,0,15,15,15,0,15,15,0,15,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  for(n=0;n<2178+1;n++){
   setTile(X[n], Y[n], Z[n], I[n], D[n]);
  }
}

function Tank10(x,y,z){
 var X=[x,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6];
 var Y=[y,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-1,y+0,y+-2,y+0,y+-2,y+0,y+1,y+-2,y+0,y+1,y+2,y+-2,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+3,y+6,y+-2,y+-1,y+0,y+1,y+2,y+3,y+6,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+3,y+6,y+-2,y+-1,y+0,y+1,y+2,y+3,y+6,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+0,y+1,y+2,y+3,y+-2,y+0,y+1,y+2,y+-2,y+0,y+1,y+-2,y+0,y+-2,y+-2,y+-2,y+-2,y+0,y+-2,y+0,y+1,y+-2,y+0,y+1,y+2,y+-2,y+0,y+1,y+2,y+3,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+-2,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+-2,y+1,y+2,y+3,y+4,y+5,y+6,y+-2,y+1,y+2,y+3,y+4,y+-2,y+0,y+1,y+2,y+3,y+4,y+-2,y+0,y+1,y+2,y+-2,y+0,y+1,y+-2,y+0,y+-2,y+-2,y+-2,y+-2,y+5,y+6,y+7,y+-2,y+0,y+2,y+5,y+6,y+7,y+-2,y+0,y+1,y+2,y+5,y+6,y+7,y+-2,y+0,y+1,y+2,y+5,y+6,y+7,y+-2,y+0,y+1,y+2,y+3,y+5,y+6,y+7,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+8,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+8,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+8,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+8,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+8,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+8,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+-2,y+0,y+1,y+2,y+3,y+4,y+-2,y+0,y+1,y+2,y+3,y+4,y+-2,y+0,y+1,y+2,y+-2,y+0,y+1,y+-2,y+0,y+-2,y+-2,y+-2,y+-2,y+-2,y+0,y+-2,y+0,y+1,y+-2,y+0,y+1,y+2,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+7,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+7,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+8,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+-2,y+0,y+1,y+2,y+3,y+4,y+-2,y+0,y+1,y+2,y+3,y+4,y+-2,y+0,y+1,y+2,y+-2,y+0,y+1,y+-2,y+0,y+-2,y+-2,y+-2,y+-2,y+5,y+6,y+7,y+-2,y+0,y+5,y+6,y+7,y+-2,y+0,y+1,y+5,y+6,y+7,y+-2,y+0,y+1,y+2,y+5,y+6,y+7,y+-2,y+0,y+1,y+2,y+3,y+5,y+6,y+7,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+8,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+8,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+8,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+8,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+8,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+8,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+-2,y+0,y+1,y+2,y+3,y+4,y+-2,y+0,y+1,y+2,y+3,y+4,y+-2,y+0,y+1,y+2,y+-2,y+1,y+-2,y+0,y+-2,y+-2,y+-2,y+-2,y+-2,y+0,y+-2,y+0,y+1,y+-2,y+0,y+1,y+2,y+-2,y+0,y+1,y+2,y+3,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+-2,y+0,y+1,y+2,y+3,y+4,y+-2,y+0,y+1,y+2,y+3,y+4,y+-2,y+0,y+1,y+2,y+-2,y+0,y+1,y+-2,y+0,y+-2,y+-2,y+-2,y+-2,y+0,y+-2,y+0,y+1,y+-2,y+0,y+1,y+2,y+-2,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+3,y+6,y+-2,y+-1,y+0,y+1,y+2,y+3,y+6,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+3,y+6,y+-2,y+-1,y+0,y+1,y+2,y+3,y+6,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+0,y+1,y+2,y+3,y+-2,y+0,y+1,y+2,y+-2,y+0,y+1,y+-2,y+0,y+-2,y+8];
 var Z=[z,z+0,z+1,z+2,z+3,z+4,z+5,z+6,z+7,z+8,z+9,z+10,z+11,z+12,z+13,z+14,z+15,z+16,z+17,z+18,z+19,z+20,z+0,z+0,z+0,z+1,z+1,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+13,z+13,z+13,z+14,z+14,z+14,z+14,z+14,z+14,z+15,z+15,z+15,z+15,z+15,z+15,z+16,z+16,z+16,z+16,z+16,z+17,z+17,z+17,z+17,z+18,z+18,z+18,z+19,z+19,z+20,z+0,z+1,z+2,z+2,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+10,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+11,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+13,z+13,z+13,z+13,z+14,z+14,z+14,z+14,z+14,z+15,z+15,z+15,z+15,z+15,z+15,z+16,z+16,z+16,z+16,z+17,z+17,z+17,z+18,z+18,z+19,z+20,z+0,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+9,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+10,z+10,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+11,z+11,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+12,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+13,z+13,z+13,z+13,z+13,z+14,z+14,z+14,z+14,z+14,z+14,z+15,z+15,z+15,z+15,z+15,z+15,z+16,z+16,z+16,z+16,z+17,z+17,z+17,z+18,z+18,z+19,z+20,z+0,z+1,z+2,z+2,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+10,z+10,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+11,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+12,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+13,z+13,z+13,z+13,z+13,z+14,z+14,z+14,z+14,z+14,z+14,z+15,z+15,z+15,z+15,z+15,z+15,z+16,z+16,z+16,z+16,z+17,z+17,z+17,z+18,z+18,z+19,z+20,z+0,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+9,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+10,z+10,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+11,z+11,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+12,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+13,z+13,z+13,z+13,z+13,z+14,z+14,z+14,z+14,z+14,z+14,z+15,z+15,z+15,z+15,z+15,z+15,z+16,z+16,z+16,z+16,z+17,z+17,z+18,z+18,z+19,z+20,z+0,z+1,z+2,z+2,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+10,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+11,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+12,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+13,z+13,z+13,z+13,z+13,z+14,z+14,z+14,z+14,z+14,z+14,z+15,z+15,z+15,z+15,z+15,z+15,z+16,z+16,z+16,z+16,z+17,z+17,z+17,z+18,z+18,z+19,z+20,z+0,z+1,z+1,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+13,z+13,z+13,z+14,z+14,z+14,z+14,z+14,z+14,z+15,z+15,z+15,z+15,z+15,z+15,z+16,z+16,z+16,z+16,z+16,z+17,z+17,z+17,z+17,z+18,z+18,z+18,z+19,z+19,z+20,z+20];
 var I=[0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,57,0,2,156,2,42,156,2,42,42,156,2,35,42,42,44,2,35,35,35,42,44,2,35,35,35,42,44,2,35,35,35,42,44,85,2,35,35,35,42,44,85,2,35,35,35,42,44,2,35,35,35,42,44,85,2,35,35,35,42,44,85,2,35,35,35,42,44,2,35,35,35,42,44,2,35,35,35,42,44,2,35,35,35,42,44,2,35,42,42,44,2,42,42,156,2,42,156,2,156,2,2,2,2,156,2,42,156,2,42,42,156,2,42,42,42,156,2,42,42,42,42,44,156,156,2,42,42,42,42,156,42,42,156,2,42,42,42,42,156,42,42,156,2,42,42,42,42,156,42,42,156,2,42,42,42,42,156,42,42,156,2,42,42,42,42,156,42,42,156,2,42,42,42,156,42,42,156,2,42,42,42,44,156,156,2,42,42,42,44,2,42,42,42,42,44,2,42,42,156,2,42,156,2,156,2,2,2,2,44,42,44,2,156,85,44,42,44,2,42,156,85,44,42,44,2,42,42,85,156,42,44,2,42,42,42,156,42,42,156,2,42,42,42,42,156,42,42,42,44,2,42,42,42,42,42,42,42,42,44,2,42,42,42,42,42,42,42,42,44,2,42,42,42,42,42,42,42,42,44,2,42,42,42,42,42,42,42,42,44,2,42,42,42,42,42,42,42,42,44,2,42,42,42,42,156,42,42,156,2,42,42,42,42,44,156,156,2,42,42,42,42,44,2,42,42,42,42,85,2,42,42,156,2,42,156,2,156,2,2,2,2,2,156,2,42,156,2,42,42,156,2,42,42,42,156,156,85,46,2,42,42,42,42,42,85,46,2,42,42,42,42,42,85,68,46,2,42,42,42,42,42,42,9,46,2,42,42,42,42,42,42,9,46,2,42,42,42,42,42,42,42,42,44,2,42,42,42,42,42,42,50,96,2,42,42,42,42,156,42,42,156,2,42,42,42,42,44,156,156,2,42,42,42,42,44,2,42,42,42,42,85,2,42,42,156,2,42,156,2,156,2,2,2,2,44,42,44,2,156,44,42,44,2,42,156,44,42,44,2,42,50,96,156,42,44,2,42,42,42,156,42,42,156,2,42,42,42,42,156,42,42,42,44,2,42,42,42,42,42,42,42,42,44,2,42,42,42,42,42,42,42,42,44,2,42,42,42,42,42,42,42,42,44,2,42,42,42,42,42,42,42,42,44,2,42,42,42,42,42,42,42,42,44,2,42,42,42,42,156,42,42,156,2,42,42,42,42,44,156,156,2,42,42,42,42,44,2,42,42,42,42,85,2,42,42,156,2,156,2,156,2,2,2,2,2,156,2,42,156,2,42,42,156,2,42,42,42,156,2,42,42,42,42,44,156,156,2,42,42,42,42,156,42,42,156,2,42,42,42,42,156,42,42,156,2,42,42,42,42,156,42,42,156,2,42,42,42,42,156,42,42,156,2,42,42,42,42,156,42,42,156,2,42,42,42,42,156,42,42,156,2,42,42,42,42,44,156,156,2,42,42,42,42,44,2,42,42,42,42,44,2,42,42,156,2,42,156,2,156,2,2,2,2,156,2,42,156,2,156,42,156,2,35,156,42,44,2,35,35,35,42,44,2,35,35,35,42,44,2,35,35,35,42,44,85,2,35,35,35,42,44,85,2,35,35,35,42,44,2,35,35,35,42,44,85,2,35,35,35,42,44,85,2,35,35,35,42,44,2,35,35,35,42,44,2,35,35,35,42,44,2,35,35,35,42,44,2,35,156,42,44,2,156,42,156,2,42,156,2,156,2,0];
 var D=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,2,0,0,0,2,0,15,0,0,0,0,15,15,15,0,0,0,15,15,15,0,0,0,15,15,15,0,0,0,0,15,15,15,0,0,0,0,15,15,15,0,0,0,15,15,15,0,0,0,0,15,15,15,0,0,0,0,15,15,15,0,0,0,15,15,15,0,0,0,15,15,15,0,0,0,15,15,15,0,0,0,15,0,0,0,0,0,0,3,0,0,3,0,3,0,0,0,0,2,0,0,2,0,0,0,2,0,0,0,0,2,0,0,0,0,0,0,6,2,0,0,0,0,0,6,0,0,2,0,0,0,0,0,4,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,7,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,3,0,3,0,0,0,0,8,0,0,0,2,0,8,0,0,0,0,2,0,8,0,0,0,0,0,0,6,0,0,0,0,0,0,2,0,0,2,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,3,0,0,0,0,0,0,7,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,3,0,3,0,0,0,0,0,2,0,0,2,0,0,0,2,0,0,0,0,2,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,7,0,0,3,0,0,0,0,0,0,7,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,3,0,3,0,0,0,0,8,0,0,0,2,8,0,0,0,0,2,8,0,0,0,0,5,0,6,0,0,0,0,0,0,2,0,0,2,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,3,0,0,0,0,0,0,7,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,3,0,3,0,0,0,0,0,2,0,0,2,0,0,0,2,0,0,0,0,2,0,0,0,0,0,0,6,2,0,0,0,0,0,6,0,0,2,0,0,0,0,0,5,0,0,1,0,0,0,0,0,5,0,0,1,0,0,0,0,0,5,0,0,1,0,0,0,0,0,5,0,0,1,0,0,0,0,0,5,0,0,1,0,0,0,0,0,0,7,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,3,0,3,0,0,0,0,2,0,0,2,0,7,0,2,0,15,7,0,0,0,15,15,15,0,0,0,15,15,15,0,0,0,15,15,15,0,0,0,0,15,15,15,0,0,0,0,15,15,15,0,0,0,15,15,15,0,0,0,0,15,15,15,0,0,0,0,15,15,15,0,0,0,15,15,15,0,0,0,15,15,15,0,0,0,15,15,15,0,0,0,15,6,0,0,0,6,0,3,0,0,3,0,3,0,0];
  for(n=0;n<1848+1;n++){
   setTile(X[n], Y[n], Z[n], I[n], D[n]);
  }
}

function Tank11(x,y,z){
 var X=[x,x+-27,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-5,x+-5,x+-5,x+-4,x+-3,x+-2,x+-1,x+0,x+0,x+0,x+0,x+0];
 var Y=[y,y+9,y+-1,y+-1,y+0,y+0,y+0,y+0,y+0,y+-1,y+-2,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+1,y+-2,y+-1,y+0,y+1,y+-2,y+-1,y+0,y+1,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-1,y+-2,y+-1,y+0,y+1,y+-2,y+0,y+1,y+2,y+-2,y+0,y+1,y+2,y+-2,y+-1,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+-1,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+1,y+2,y+-2,y+1,y+2,y+-2,y+-1,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-1,y+-2,y+-1,y+0,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+2,y+-1,y+2,y+-2,y+-1,y+0,y+2,y+-2,y+-1,y+1,y+2,y+3,y+4,y+-2,y+1,y+2,y+3,y+-2,y+1,y+3,y+-2,y+1,y+2,y+3,y+-2,y+-1,y+1,y+2,y+-2,y+-1,y+0,y+2,y+-1,y+2,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+1,y+2,y+3,y+-2,y+1,y+3,y+-2,y+1,y+3,y+4,y+-2,y+1,y+3,y+-2,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+2,y+-1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+1,y+2,y+3,y+-2,y+1,y+3,y+-2,y+0,y+4,y+-2,y+1,y+3,y+4,y+5,y+6,y+-2,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+1,y+2,y+3,y+4,y+-2,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+4,y+-2,y+1,y+3,y+4,y+-2,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-1,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+1,y+2,y+3,y+4,y+5,y+-2,y+1,y+2,y+3,y+4,y+6,y+-2,y+1,y+3,y+4,y+5,y+-2,y+1,y+3,y+4,y+-2,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-1,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+1,y+2,y+3,y+4,y+5,y+-2,y+1,y+3,y+4,y+5,y+-2,y+1,y+2,y+3,y+4,y+-2,y+1,y+3,y+4,y+-2,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-1,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+1,y+2,y+3,y+-2,y+1,y+3,y+-2,y+1,y+2,y+3,y+4,y+-2,y+1,y+3,y+-2,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-1,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+1,y+2,y+3,y+-2,y+1,y+3,y+-2,y+1,y+4,y+-2,y+1,y+3,y+-2,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-1,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+1,y+2,y+3,y+-2,y+1,y+3,y+-2,y+-1,y+2,y+4,y+-2,y+1,y+3,y+-2,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-1,y+-2,y+-1,y+0,y+2,y+-2,y+1,y+2,y+3,y+-2,y+1,y+3,y+-2,y+-1,y+0,y+2,y+3,y+-2,y+1,y+3,y+-2,y+1,y+2,y+3,y+-2,y+-1,y+0,y+2,y+-1,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+-1,y+-2,y+-1,y+0,y+-1,y+0,y+1,y+2,y+-1,y+1,y+2,y+-1,y+1,y+2,y+3,y+-1,y+1,y+2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-1,y+0,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+2,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+2,y+-1,y+0,y+2,y+-1,y+0,y+2,y+-1,y+0,y+-2,y+-1,y+0,y+-1,y+0,y+0,y+0,y+0,y+2,y+0,y+0,y+-1,y+0,y+-1,y+2,y+-1,y+2,y+2,y+2,y+2,y+-2,y+-2,y+-1,y+0,y+2];
 var Z=[z,z+8,z+1,z+2,z+2,z+3,z+4,z+5,z+6,z+7,z+1,z+1,z+1,z+2,z+2,z+3,z+3,z+4,z+4,z+5,z+5,z+6,z+6,z+7,z+7,z+7,z+1,z+1,z+1,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+7,z+7,z+7,z+8,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+0,z+1,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+8,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+0,z+0,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+0,z+1,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+8,z+0,z+0,z+1,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+1,z+1,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+0,z+1,z+1,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+8,z+1,z+1,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+0,z+1,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+8,z+1,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+4,z+4,z+4,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+0,z+1,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+8,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+0,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+8,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+1,z+1,z+1,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+7,z+7,z+7,z+1,z+1,z+1,z+2,z+2,z+3,z+3,z+3,z+4,z+4,z+4,z+5,z+5,z+5,z+6,z+6,z+7,z+7,z+7,z+1,z+1,z+2,z+3,z+4,z+4,z+5,z+6,z+7,z+7,z+1,z+4,z+7,z+4,z+4,z+4,z+4,z+-1,z+0,z+0,z+0,z+4];
 var I=[0,0,96,65,65,101,101,101,101,96,96,35,43,121,43,44,49,44,49,44,49,44,43,96,35,43,35,35,43,44,44,43,44,44,43,44,44,44,43,44,44,44,43,44,44,44,43,35,35,43,35,35,35,44,44,44,24,44,65,44,54,44,101,44,54,44,101,44,54,54,44,101,44,24,44,101,35,35,44,44,35,35,35,44,44,101,44,121,24,44,121,44,121,44,24,44,44,121,44,121,44,121,44,121,24,44,121,35,35,44,44,101,35,35,35,121,101,44,35,121,44,121,44,24,121,44,121,44,44,24,44,24,121,44,24,44,35,121,44,24,35,35,121,101,35,101,35,35,121,24,44,35,44,121,35,35,44,44,44,44,44,43,44,44,44,44,44,44,35,44,121,35,35,121,24,35,101,101,35,35,121,44,121,44,44,44,44,44,43,44,44,44,44,44,44,43,44,44,44,44,44,35,35,24,44,121,101,35,101,35,35,121,44,24,44,44,44,44,44,43,44,44,65,44,44,43,44,35,35,35,44,44,44,44,35,35,121,44,121,35,101,35,35,121,44,121,44,44,43,44,43,44,44,43,43,43,43,43,44,121,44,44,44,44,44,44,44,43,44,44,35,35,121,44,121,35,35,35,121,44,121,43,44,43,44,43,43,121,44,44,65,65,35,44,44,44,44,43,121,44,44,44,44,44,43,44,44,35,35,24,44,121,35,35,35,121,44,121,44,44,43,44,43,44,102,44,44,121,35,102,44,44,65,65,96,44,44,44,44,44,43,44,44,35,35,24,44,121,35,35,35,121,44,24,44,43,44,44,44,44,44,44,44,121,43,44,44,44,44,44,43,44,44,35,35,121,44,121,35,35,35,121,44,121,44,43,44,44,44,44,44,44,44,44,44,44,44,44,43,44,44,35,35,121,44,121,35,35,35,121,44,121,44,44,44,44,44,43,44,44,44,44,44,44,24,44,44,44,44,44,35,35,24,44,121,35,35,35,121,24,44,44,44,44,44,43,44,44,121,35,44,44,44,43,44,44,44,44,44,35,35,121,121,35,35,35,121,44,35,35,44,121,44,43,44,44,44,121,121,102,44,43,44,43,44,44,44,35,35,44,121,35,35,121,35,35,35,43,43,44,44,121,43,44,121,24,44,44,44,43,44,121,43,44,44,121,35,35,43,35,35,43,43,24,44,43,43,44,121,43,43,44,24,43,43,44,121,43,43,44,35,35,121,96,35,44,44,121,44,43,44,44,43,24,44,43,44,44,43,96,35,44,35,44,43,121,121,24,121,43,35,44,96,24,96,24,24,24,24,0,20,57,0,49];
 var D=[0,0,6,4,4,0,0,0,0,6,6,15,1,0,1,9,0,9,0,9,0,9,1,6,15,1,15,15,1,9,1,1,9,1,1,1,9,1,1,1,9,1,1,1,9,1,1,15,7,1,3,15,7,1,1,9,2,1,4,9,5,1,0,9,5,1,0,9,5,5,1,0,9,2,1,0,15,7,1,1,4,15,7,1,1,0,9,0,2,1,0,9,0,1,0,9,1,0,9,0,1,0,9,0,2,1,0,15,7,1,1,0,3,15,7,0,0,9,0,0,1,0,9,0,0,1,0,9,1,0,9,0,0,1,0,9,0,0,1,0,15,7,0,0,4,0,15,7,0,0,9,11,1,0,0,0,9,1,1,1,9,1,1,9,1,1,1,9,12,1,0,15,7,0,0,3,0,0,15,7,0,9,0,9,1,1,1,9,1,1,9,1,9,1,9,1,1,9,1,1,1,15,7,0,9,0,0,4,0,15,7,0,9,0,9,1,1,1,9,1,9,9,4,1,9,1,9,0,0,0,9,1,1,1,15,7,0,9,0,3,0,15,7,0,9,0,1,9,1,1,1,1,9,1,1,1,1,1,9,0,1,1,9,1,9,1,9,1,1,1,15,7,0,9,0,4,15,7,0,9,0,1,9,1,1,1,1,0,9,1,5,5,3,1,9,1,9,1,0,9,1,9,1,9,1,1,1,15,7,0,9,0,3,15,7,0,9,0,1,9,1,1,1,1,0,9,1,0,5,0,9,1,4,4,7,9,1,9,1,9,1,1,1,15,7,0,9,0,4,15,7,0,9,0,9,1,1,1,9,1,9,9,1,0,1,1,9,1,9,9,1,1,1,15,7,0,9,0,3,15,7,0,9,0,9,1,1,1,9,1,9,9,9,1,9,1,9,9,1,1,1,15,7,0,9,0,4,15,7,0,9,0,9,1,1,1,9,1,9,9,1,1,1,9,0,9,9,1,1,1,15,7,0,9,0,3,15,7,0,0,9,1,1,1,9,1,9,9,0,2,1,9,9,1,9,9,1,1,1,15,7,0,0,4,15,7,0,9,10,0,1,0,9,1,1,1,9,0,0,0,1,1,9,1,1,1,9,10,0,1,0,15,7,0,3,15,7,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,15,7,1,15,15,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,15,15,0,7,15,9,9,0,9,1,1,9,1,0,9,1,1,9,1,7,15,9,15,9,1,0,0,0,0,1,15,9,7,0,7,2,2,0,0,0,0,0,0,0];
  for(n=0;n<3360+1;n++){
   setTile(X[n], Y[n], Z[n], I[n], D[n]);
  }
}

function Tank12(x,y,z){
 var X=[x,x+-27,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-5,x+-5,x+-5,x+-4,x+-3,x+-2,x+-1,x+0,x+0,x+0,x+0,x+0];
 var Y=[y,y+9,y+-1,y+-1,y+0,y+0,y+0,y+0,y+0,y+-1,y+-2,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+1,y+-2,y+-1,y+0,y+1,y+-2,y+-1,y+0,y+1,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+1,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+1,y+2,y+-2,y+-1,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+-1,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-1,y+-2,y+-1,y+0,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+2,y+-1,y+2,y+-2,y+-1,y+0,y+2,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+-2,y+1,y+2,y+3,y+-2,y+1,y+3,y+-2,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+2,y+-1,y+2,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+0,y+1,y+3,y+-2,y+1,y+3,y+4,y+-2,y+0,y+1,y+3,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+2,y+-1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+1,y+3,y+-2,y+0,y+4,y+-2,y+1,y+3,y+4,y+5,y+6,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+3,y+4,y+-2,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+4,y+-2,y+1,y+3,y+4,y+-2,y+-1,y+0,y+1,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-1,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+3,y+4,y+5,y+-2,y+1,y+2,y+3,y+4,y+6,y+-2,y+1,y+3,y+4,y+5,y+-2,y+1,y+3,y+4,y+-2,y+-1,y+0,y+1,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-1,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+3,y+4,y+5,y+-2,y+1,y+3,y+4,y+5,y+-2,y+1,y+2,y+3,y+4,y+-2,y+1,y+3,y+4,y+-2,y+-1,y+0,y+1,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-1,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+1,y+3,y+-2,y+1,y+2,y+3,y+4,y+-2,y+1,y+3,y+-2,y+-1,y+0,y+1,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-1,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+3,y+-2,y+1,y+3,y+-2,y+1,y+3,y+4,y+-2,y+1,y+3,y+-2,y+-1,y+0,y+1,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-1,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+1,y+3,y+-2,y+2,y+3,y+4,y+-2,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-1,y+-2,y+-1,y+0,y+2,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+1,y+3,y+-2,y+-1,y+2,y+3,y+4,y+-2,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+2,y+-1,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+-1,y+-2,y+-1,y+0,y+-1,y+0,y+1,y+2,y+-1,y+1,y+2,y+-1,y+0,y+1,y+2,y+3,y+-1,y+1,y+2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-1,y+0,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+2,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+2,y+-1,y+0,y+2,y+-1,y+0,y+2,y+-1,y+0,y+-2,y+-1,y+0,y+-1,y+0,y+0,y+0,y+0,y+2,y+0,y+0,y+-1,y+0,y+-1,y+2,y+-1,y+2,y+2,y+2,y+2,y+-2,y+-2,y+-1,y+0,y+2];
 var Z=[z,z+8,z+1,z+2,z+2,z+3,z+4,z+5,z+6,z+7,z+1,z+1,z+1,z+2,z+2,z+3,z+3,z+4,z+4,z+5,z+5,z+6,z+6,z+7,z+7,z+7,z+1,z+1,z+1,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+7,z+7,z+7,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+0,z+1,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+8,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+0,z+0,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+0,z+1,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+8,z+0,z+0,z+1,z+1,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+1,z+1,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+0,z+1,z+1,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+8,z+1,z+1,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+0,z+1,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+8,z+1,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+0,z+1,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+8,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+0,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+8,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+1,z+1,z+1,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+7,z+7,z+7,z+1,z+1,z+1,z+2,z+2,z+3,z+3,z+3,z+4,z+4,z+4,z+5,z+5,z+5,z+6,z+6,z+7,z+7,z+7,z+1,z+1,z+2,z+3,z+4,z+4,z+5,z+6,z+7,z+7,z+1,z+4,z+7,z+4,z+4,z+4,z+4,z+-1,z+0,z+0,z+0,z+4];
 var I=[0,0,96,65,65,101,101,101,101,96,96,35,35,35,35,44,49,44,49,44,49,44,35,96,35,35,35,35,35,44,44,35,44,44,35,44,44,44,35,44,44,44,35,44,44,44,35,35,35,35,35,35,44,44,44,49,1,44,65,44,35,49,44,101,44,44,101,44,35,44,101,44,49,1,44,101,35,35,44,44,35,35,35,44,44,101,44,35,1,44,35,44,35,35,44,35,44,35,44,35,44,35,49,44,35,44,35,1,44,35,35,35,44,44,101,35,35,35,35,101,44,1,35,44,35,44,35,35,44,35,44,44,35,44,35,35,44,35,44,35,35,44,35,35,35,35,101,35,101,35,35,35,35,44,1,35,44,35,35,35,44,44,44,44,44,44,44,44,44,44,44,44,1,35,44,35,35,35,35,35,35,101,101,35,35,35,44,35,44,1,1,44,44,44,44,35,35,44,44,44,35,44,44,35,35,44,44,1,1,44,44,44,35,35,35,44,35,101,35,101,35,35,35,44,35,44,44,1,35,44,44,44,44,35,44,44,65,44,44,44,44,35,35,35,44,1,35,35,44,44,35,35,35,44,35,35,101,35,35,35,44,35,44,44,35,1,35,35,44,44,35,35,35,35,35,44,35,44,44,44,44,44,44,44,35,1,35,44,35,35,35,44,35,35,35,35,35,44,35,35,44,1,35,35,35,35,35,44,44,65,65,35,44,44,44,44,35,35,44,44,44,44,44,1,35,35,44,35,35,35,44,35,35,35,35,35,44,35,44,44,35,1,35,35,44,102,44,44,44,35,102,44,44,65,65,96,44,44,44,44,44,35,1,35,44,35,35,35,44,35,35,35,35,35,44,35,44,1,35,35,35,44,44,44,44,44,44,35,35,44,44,44,44,44,1,35,35,44,35,35,35,44,35,35,35,35,35,44,35,44,35,1,35,44,44,44,44,44,43,96,44,44,44,44,44,35,1,35,44,35,35,35,44,35,35,35,35,35,44,35,44,1,35,35,35,44,44,35,44,44,44,49,44,44,35,35,44,44,1,35,35,20,44,35,35,35,44,35,35,35,35,35,35,44,1,1,44,44,44,44,35,44,44,44,44,49,44,44,35,22,44,44,1,1,44,44,44,35,35,35,35,35,35,35,35,44,1,35,44,35,44,35,35,44,44,44,35,35,102,44,35,44,35,35,44,44,44,1,35,44,35,35,35,35,35,35,35,35,35,44,44,35,35,44,35,35,35,44,44,44,35,44,35,35,44,44,35,35,35,35,35,35,35,35,35,44,35,35,44,35,35,35,44,35,35,35,44,35,35,35,44,35,35,35,96,35,44,44,35,44,35,44,44,35,35,44,35,44,44,35,96,35,44,35,44,35,35,35,35,35,35,35,44,96,35,96,4,4,35,35,0,20,57,0,49];
 var D=[0,0,6,4,4,0,0,0,0,6,6,15,13,13,13,13,0,13,0,13,0,13,12,6,15,13,15,15,12,13,5,15,13,5,15,5,13,5,13,5,13,5,12,5,13,5,13,15,15,12,15,7,5,5,13,0,0,5,4,13,3,0,5,0,13,5,0,13,4,5,0,13,0,0,5,0,15,7,5,5,4,15,7,5,5,0,13,12,0,5,13,13,12,1,5,15,13,4,5,15,13,12,0,5,13,13,15,0,5,12,15,7,5,5,0,3,15,7,12,0,13,0,12,5,12,13,12,12,5,13,13,5,13,13,13,13,5,15,13,0,15,5,12,15,7,13,0,4,0,15,7,13,15,13,0,0,5,13,0,0,13,5,5,5,13,13,5,13,5,5,5,13,0,0,5,15,15,7,12,13,3,0,0,15,7,15,13,13,13,0,0,5,5,5,13,11,13,5,13,5,12,5,13,12,15,5,13,0,0,5,5,5,15,7,12,13,12,0,4,0,15,7,12,13,12,5,13,0,7,5,5,5,13,15,13,13,4,5,13,5,13,0,0,0,13,0,7,13,5,5,15,7,13,13,15,3,0,15,7,13,13,15,5,13,7,0,13,15,5,13,15,13,12,13,13,13,15,5,5,13,5,13,5,13,7,0,15,5,15,7,15,13,13,4,15,7,12,13,15,15,13,0,7,13,13,15,12,13,5,5,5,4,5,13,5,13,15,15,13,5,13,5,13,0,7,13,5,15,7,13,13,12,3,15,7,15,13,13,5,13,7,0,15,15,5,0,13,5,13,5,0,13,5,4,4,3,13,5,13,5,13,7,0,12,5,15,7,12,13,12,4,15,7,15,13,15,13,0,7,15,0,5,13,5,13,13,5,13,15,5,13,5,13,13,0,7,13,5,15,7,12,13,15,3,15,7,13,13,13,13,7,0,13,5,13,5,13,13,5,6,5,13,5,13,13,7,0,15,5,15,7,13,13,12,4,15,7,12,13,12,13,0,7,12,0,5,13,15,13,13,5,0,5,13,15,2,13,13,0,7,13,0,5,15,7,15,13,15,3,15,7,15,15,13,0,0,5,5,5,13,13,13,13,5,5,0,5,13,12,0,13,13,0,0,5,5,5,15,7,15,13,4,15,7,12,13,0,0,5,15,13,11,15,5,5,13,15,2,0,5,15,13,12,13,5,5,13,0,0,5,12,15,7,12,3,15,7,15,15,5,5,13,13,5,15,15,12,5,5,5,13,5,15,12,5,5,12,15,7,13,15,15,13,13,12,5,12,13,5,12,12,15,5,12,15,13,5,13,13,13,5,15,15,12,7,15,13,13,13,13,13,5,13,13,13,13,15,5,13,15,7,15,13,15,13,15,13,12,12,13,15,15,13,7,15,7,0,0,12,13,0,0,0,0,0];
  for(n=0;n<3360+1;n++){
   setTile(X[n], Y[n], Z[n], I[n], D[n]);
  }
}

function Tank13(x,y,z){
 var X=[x,x+-27,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-5,x+-5,x+-5,x+-4,x+-3,x+-2,x+-1,x+0,x+0,x+0,x+0,x+0];
 var Y=[y,y+9,y+-1,y+-1,y+0,y+0,y+0,y+0,y+0,y+-1,y+-2,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+1,y+-2,y+-1,y+0,y+1,y+-2,y+-1,y+0,y+1,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+1,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+1,y+2,y+-2,y+-1,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+-1,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-1,y+-2,y+-1,y+0,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+2,y+-1,y+2,y+-2,y+-1,y+0,y+2,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+-2,y+1,y+2,y+3,y+-2,y+1,y+3,y+-2,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+2,y+-1,y+2,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+0,y+1,y+3,y+-2,y+1,y+3,y+4,y+-2,y+0,y+1,y+3,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+2,y+-1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+1,y+3,y+-2,y+0,y+4,y+-2,y+1,y+3,y+4,y+5,y+6,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+3,y+4,y+-2,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+4,y+-2,y+1,y+3,y+4,y+-2,y+-1,y+0,y+1,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-1,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+3,y+4,y+5,y+-2,y+1,y+2,y+3,y+4,y+6,y+-2,y+1,y+3,y+4,y+5,y+-2,y+1,y+3,y+4,y+-2,y+-1,y+0,y+1,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-1,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+3,y+4,y+5,y+-2,y+1,y+3,y+4,y+5,y+-2,y+1,y+2,y+3,y+4,y+-2,y+1,y+3,y+4,y+-2,y+-1,y+0,y+1,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-1,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+1,y+3,y+-2,y+1,y+2,y+3,y+4,y+-2,y+1,y+3,y+-2,y+-1,y+0,y+1,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-1,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+3,y+-2,y+1,y+3,y+-2,y+1,y+3,y+4,y+-2,y+1,y+3,y+-2,y+-1,y+0,y+1,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-1,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+1,y+3,y+-2,y+2,y+3,y+4,y+-2,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-1,y+-2,y+-1,y+0,y+2,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+1,y+3,y+-2,y+-1,y+2,y+3,y+4,y+-2,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+2,y+-1,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+-1,y+-2,y+-1,y+0,y+-1,y+0,y+1,y+2,y+-1,y+1,y+2,y+-1,y+0,y+1,y+2,y+3,y+-1,y+1,y+2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-1,y+0,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+2,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+2,y+-1,y+0,y+2,y+-1,y+0,y+2,y+-1,y+0,y+-2,y+-1,y+0,y+-1,y+0,y+0,y+0,y+0,y+2,y+0,y+0,y+-1,y+0,y+-1,y+2,y+-1,y+2,y+2,y+2,y+2,y+-2,y+-2,y+-1,y+0,y+2];
 var Z=[z,z+8,z+1,z+2,z+2,z+3,z+4,z+5,z+6,z+7,z+1,z+1,z+1,z+2,z+2,z+3,z+3,z+4,z+4,z+5,z+5,z+6,z+6,z+7,z+7,z+7,z+1,z+1,z+1,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+7,z+7,z+7,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+0,z+1,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+8,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+0,z+0,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+0,z+1,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+8,z+0,z+0,z+1,z+1,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+1,z+1,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+0,z+1,z+1,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+8,z+1,z+1,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+0,z+1,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+8,z+1,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+0,z+1,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+8,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+0,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+8,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+1,z+1,z+1,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+7,z+7,z+7,z+1,z+1,z+1,z+2,z+2,z+3,z+3,z+3,z+4,z+4,z+4,z+5,z+5,z+5,z+6,z+6,z+7,z+7,z+7,z+1,z+1,z+2,z+3,z+4,z+4,z+5,z+6,z+7,z+7,z+1,z+4,z+7,z+4,z+4,z+4,z+4,z+-1,z+0,z+0,z+0,z+4];
 var I=[0,0,96,65,65,101,101,101,101,96,96,35,35,35,35,44,49,44,49,44,49,44,35,96,35,35,35,35,35,44,44,35,44,44,35,44,44,44,35,44,44,44,35,44,44,44,35,35,35,35,35,35,44,44,44,49,1,44,65,44,35,35,44,101,44,44,101,44,35,44,101,44,49,1,44,101,35,35,44,44,35,35,35,44,44,101,44,35,1,44,35,44,35,49,44,35,44,35,44,35,44,35,49,44,35,44,35,1,44,35,35,35,44,44,101,35,35,35,35,101,44,1,35,44,35,44,35,35,44,35,44,44,35,44,35,35,44,35,44,35,35,44,35,35,35,35,101,35,101,35,35,35,35,44,1,35,44,35,35,35,44,44,44,44,44,43,44,44,44,44,44,44,1,35,44,35,35,35,35,35,35,101,101,35,35,35,44,35,44,1,1,44,44,44,44,35,35,44,44,44,35,44,44,35,35,44,44,1,1,44,44,44,35,35,35,44,35,101,35,101,35,35,35,44,35,44,44,1,35,44,44,44,44,35,43,44,65,44,44,44,44,35,35,35,44,1,35,35,44,44,35,35,35,44,35,35,101,35,35,35,44,35,44,44,35,1,35,35,44,44,35,35,35,35,35,44,35,44,44,44,44,44,44,44,35,1,35,44,35,35,35,44,35,35,35,35,35,44,35,35,44,1,35,35,35,35,35,44,44,65,65,35,44,44,44,44,35,35,44,44,44,44,44,1,35,35,44,35,35,35,44,35,35,35,35,35,44,35,44,44,35,1,35,35,44,102,44,44,44,35,102,44,44,65,65,96,44,44,44,44,44,35,1,35,44,35,35,35,44,35,35,35,35,35,44,35,44,1,35,35,35,44,44,44,44,44,44,35,35,44,44,44,44,44,1,35,35,44,35,35,35,44,35,35,35,35,35,44,35,44,35,1,35,44,44,44,44,44,43,96,44,44,44,44,44,35,1,35,44,35,35,35,44,35,35,35,35,35,44,35,44,1,35,35,35,44,44,35,44,44,44,49,44,44,35,35,44,44,1,35,35,20,44,35,35,35,44,35,35,35,35,35,35,44,1,1,44,44,44,44,35,44,44,44,44,49,44,44,35,22,44,44,1,1,44,44,44,35,35,35,35,35,35,35,35,44,1,35,44,35,44,35,35,44,44,44,35,35,102,44,35,44,35,35,44,44,44,1,35,44,35,35,35,35,35,35,35,35,35,44,44,35,35,44,35,35,35,44,44,44,35,44,35,35,44,44,35,35,35,35,35,35,35,35,35,44,35,35,44,35,35,35,44,35,35,35,44,35,35,35,44,35,35,35,96,35,44,44,35,44,35,44,44,35,35,44,35,44,44,35,96,35,44,35,44,35,35,35,35,35,35,35,44,96,35,96,43,43,35,35,0,20,57,0,49];
 var D=[0,0,6,4,4,0,0,0,0,6,6,15,0,8,0,8,0,8,0,8,0,8,8,6,15,0,15,15,0,8,5,8,8,0,0,0,8,0,8,0,8,0,0,0,8,0,0,15,15,8,15,7,6,0,13,0,0,0,4,13,3,2,0,0,13,0,0,13,4,0,0,13,0,0,0,0,15,7,0,0,4,15,7,6,0,0,13,8,0,0,8,13,8,0,0,0,13,4,0,8,13,0,0,0,8,13,15,0,0,8,15,7,0,0,0,3,15,7,0,0,13,0,0,0,0,13,0,0,0,0,13,0,0,13,8,8,0,8,13,8,8,0,0,15,7,0,0,4,0,15,7,8,8,13,0,0,0,0,0,0,13,0,0,0,13,0,0,13,0,0,0,13,0,0,0,0,15,7,8,8,3,0,0,15,7,8,8,8,13,0,0,6,0,0,13,11,8,0,13,0,8,0,13,12,8,0,13,0,0,0,0,0,15,7,8,8,8,0,4,0,15,7,0,8,8,0,13,0,7,6,0,0,13,0,0,13,4,0,13,0,8,0,0,0,13,0,7,0,0,0,15,7,0,8,0,3,0,15,7,8,8,8,0,13,7,0,8,8,0,13,0,8,0,8,8,13,8,0,0,13,0,8,0,13,7,0,8,0,15,7,8,8,0,4,15,7,0,8,0,0,13,0,7,8,8,8,0,13,5,5,5,4,5,13,5,8,0,8,13,5,8,0,13,0,7,8,0,15,7,0,8,8,3,15,7,8,8,8,0,13,7,0,0,8,0,0,13,5,8,5,0,13,5,4,4,3,13,5,8,0,13,7,0,0,0,15,7,8,8,0,4,15,7,0,8,0,13,0,7,8,0,0,13,5,8,13,5,8,8,0,13,5,8,13,0,7,0,0,15,7,8,8,8,3,15,7,0,8,8,13,7,0,0,0,13,5,8,13,5,6,0,13,5,8,13,7,0,8,0,15,7,0,8,0,4,15,7,0,8,0,13,0,7,8,0,0,13,8,8,13,5,0,0,13,0,2,8,13,0,7,8,0,0,15,7,8,8,0,3,15,7,8,0,13,0,0,0,5,0,13,0,8,13,5,5,0,0,13,0,0,8,13,0,0,0,5,0,15,7,8,8,4,15,7,0,8,0,0,0,8,8,11,8,5,0,8,8,2,0,5,8,8,12,8,5,0,8,0,0,0,8,15,7,0,3,15,7,8,15,0,0,0,8,0,8,8,8,0,5,0,8,0,0,8,0,0,8,15,7,8,15,15,8,8,8,0,8,8,0,8,0,8,0,0,0,8,0,8,0,0,0,15,15,0,7,15,8,8,0,8,0,0,8,0,0,8,8,0,8,8,7,15,8,15,8,8,8,0,8,8,0,15,8,7,0,7,0,0,8,8,0,0,0,0,0];
  for(n=0;n<3360+1;n++){
   setTile(X[n], Y[n], Z[n], I[n], D[n]);
  }
}

function Tank14(x,y,z){
 var X=[x,x+0,x+0,x+0,x+0,x+2,x+3,x+4,x+5,x+6,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+26];
 var Y=[y,y+-2,y+-1,y+0,y+-2,y+2,y+2,y+2,y+2,y+2,y+0,y+0,y+0,y+0,y+2,y+0,y+0,y+0,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+2,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+2,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+3,y+-2,y+-1,y+3,y+-2,y+-1,y+0,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+2,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+3,y+-2,y+-1,y+0,y+3,y+-2,y+-1,y+0,y+3,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+2,y+3,y+-2,y+-1,y+0,y+3,y+-2,y+-1,y+0,y+2,y+3,y+4,y+-2,y+-1,y+0,y+3,y+-2,y+-1,y+0,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+3,y+-2,y+-1,y+0,y+3,y+4,y+5,y+-2,y+-1,y+0,y+2,y+3,y+4,y+5,y+-2,y+-1,y+0,y+3,y+-2,y+-1,y+0,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+3,y+4,y+5,y+-2,y+-1,y+0,y+2,y+3,y+4,y+6,y+-2,y+-1,y+0,y+4,y+5,y+-2,y+-1,y+0,y+3,y+-2,y+-1,y+0,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+2,y+3,y+4,y+5,y+-2,y+-1,y+0,y+3,y+-2,y+-1,y+0,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+3,y+-2,y+-1,y+0,y+3,y+-2,y+-1,y+0,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+-1,y+0,y+3,y+-2,y+-1,y+0,y+3,y+-2,y+-1,y+0,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+1,y+-1,y+0,y+1,y+-1,y+0,y+1,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+0,y+0,y+0,y+0,y+0,y+0,y+0,y+9];
 var Z=[z,z+0,z+0,z+0,z+1,z+-3,z+-3,z+-3,z+-3,z+-3,z+-6,z+-5,z+-4,z+-3,z+-3,z+-2,z+-1,z+0,z+-6,z+-6,z+-5,z+-5,z+-4,z+-4,z+-3,z+-3,z+-3,z+-2,z+-2,z+-1,z+-1,z+0,z+0,z+-6,z+-6,z+-5,z+-5,z+-4,z+-4,z+-3,z+-3,z+-3,z+-2,z+-2,z+-1,z+-1,z+0,z+0,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-4,z+-4,z+-3,z+-3,z+-3,z+-3,z+-3,z+-2,z+-2,z+-2,z+-2,z+-2,z+-1,z+-1,z+-1,z+0,z+0,z+0,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-4,z+-3,z+-3,z+-3,z+-2,z+-2,z+-2,z+-2,z+-1,z+-1,z+-1,z+-1,z+-1,z+0,z+0,z+0,z+-6,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-4,z+-3,z+-3,z+-3,z+-3,z+-2,z+-2,z+-2,z+-2,z+-1,z+-1,z+-1,z+-1,z+-1,z+-1,z+0,z+0,z+0,z+0,z+-6,z+-6,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-4,z+-3,z+-3,z+-3,z+-3,z+-3,z+-3,z+-2,z+-2,z+-2,z+-2,z+-1,z+-1,z+-1,z+-1,z+-1,z+0,z+0,z+0,z+0,z+0,z+-6,z+-6,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-4,z+-4,z+-4,z+-3,z+-3,z+-3,z+-3,z+-3,z+-3,z+-3,z+-2,z+-2,z+-2,z+-2,z+-1,z+-1,z+-1,z+-1,z+0,z+0,z+0,z+0,z+0,z+-6,z+-6,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-4,z+-4,z+-4,z+-4,z+-3,z+-3,z+-3,z+-3,z+-3,z+-2,z+-2,z+-2,z+-2,z+-1,z+-1,z+-1,z+-1,z+0,z+0,z+0,z+0,z+0,z+-6,z+-6,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-4,z+-4,z+-4,z+-4,z+-3,z+-3,z+-3,z+-3,z+-2,z+-2,z+-2,z+-2,z+-1,z+-1,z+-1,z+-1,z+-1,z+0,z+0,z+0,z+0,z+0,z+-6,z+-6,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-4,z+-3,z+-3,z+-3,z+-3,z+-2,z+-2,z+-2,z+-2,z+-1,z+-1,z+-1,z+-1,z+-1,z+0,z+0,z+0,z+0,z+0,z+-6,z+-6,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-5,z+-5,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-4,z+-3,z+-3,z+-3,z+-3,z+-2,z+-2,z+-2,z+-2,z+-1,z+-1,z+-1,z+-1,z+-1,z+0,z+0,z+0,z+0,z+0,z+-6,z+-6,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-4,z+-4,z+-3,z+-3,z+-3,z+-3,z+-2,z+-2,z+-2,z+-2,z+-2,z+-1,z+-1,z+-1,z+-1,z+-1,z+-1,z+-1,z+0,z+0,z+0,z+0,z+0,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-4,z+-4,z+-3,z+-3,z+-3,z+-3,z+-3,z+-2,z+-2,z+-2,z+-2,z+-2,z+-1,z+-1,z+-1,z+-1,z+0,z+0,z+0,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-4,z+-4,z+-3,z+-3,z+-3,z+-3,z+-3,z+-2,z+-2,z+-2,z+-2,z+-2,z+-1,z+-1,z+-1,z+0,z+0,z+0,z+-6,z+-6,z+-5,z+-5,z+-4,z+-4,z+-4,z+-4,z+-3,z+-3,z+-3,z+-3,z+-2,z+-2,z+-2,z+-1,z+-1,z+0,z+0,z+-6,z+-6,z+-5,z+-5,z+-4,z+-4,z+-4,z+-3,z+-3,z+-3,z+-2,z+-2,z+-2,z+-1,z+-1,z+0,z+0,z+-6,z+-6,z+-5,z+-5,z+-4,z+-4,z+-3,z+-3,z+-2,z+-2,z+-1,z+-1,z+0,z+0,z+-6,z+-5,z+-4,z+-3,z+-2,z+-1,z+0,z+-9];
 var I=[0,57,57,0,0,35,121,121,121,121,121,121,121,121,121,121,121,121,35,121,121,121,121,121,121,121,121,121,121,121,121,35,121,35,121,121,121,121,121,121,121,121,121,121,121,121,35,121,35,35,121,44,121,121,44,121,121,24,24,44,121,121,20,121,44,121,121,24,24,44,121,121,35,35,121,35,35,121,44,121,121,121,121,44,121,121,24,44,35,121,44,121,121,24,44,121,121,121,121,35,35,121,35,35,121,24,44,121,121,121,35,121,44,121,121,24,44,121,121,121,44,121,121,24,44,121,121,121,35,121,35,35,121,121,35,35,121,121,121,44,121,121,35,121,44,121,121,24,44,121,121,65,65,96,44,121,121,24,44,121,121,35,121,35,35,121,121,121,35,35,121,121,121,44,121,121,121,44,121,121,24,35,102,44,121,121,24,121,121,102,44,121,121,24,44,121,121,121,35,35,121,121,121,35,35,121,121,121,44,121,121,121,121,24,44,121,121,65,65,35,44,44,121,121,121,43,44,121,121,24,44,121,121,121,35,35,121,121,121,35,35,121,101,101,44,121,121,121,121,44,121,121,24,24,24,121,44,121,121,121,44,121,121,24,44,121,121,121,121,35,35,121,101,101,35,35,121,101,101,44,121,121,121,121,44,121,121,24,44,121,121,121,44,121,121,24,44,121,121,121,121,35,35,121,101,101,35,35,121,101,101,44,121,121,121,121,35,35,35,44,121,121,24,44,121,121,121,44,121,121,24,44,121,121,121,121,35,35,121,101,101,35,35,121,101,101,44,121,121,121,121,44,121,121,24,24,44,121,121,121,44,121,121,24,24,44,121,121,121,121,35,35,35,35,121,101,101,35,35,121,44,121,121,44,121,121,24,24,44,121,121,35,121,44,121,121,24,24,44,121,121,100,35,35,121,35,35,121,44,121,121,44,121,121,24,24,44,121,121,35,121,44,121,121,24,24,44,121,121,35,35,121,35,121,121,121,121,121,100,100,121,121,121,121,121,121,100,121,121,35,121,35,121,121,121,121,121,100,121,121,121,121,121,100,121,121,35,121,44,121,44,121,44,121,44,121,44,121,44,121,44,121,101,101,101,101,101,101,101,0];
 var D=[0,0,0,0,0,15,0,0,0,0,0,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,0,0,0,0,0,15,0,15,0,0,0,0,0,0,0,0,0,0,0,0,15,0,15,7,0,9,0,0,9,0,0,0,0,9,0,0,0,0,9,0,0,0,0,9,0,0,15,7,0,15,7,0,9,0,0,0,0,9,0,0,0,9,15,0,9,0,0,0,9,0,0,0,0,15,7,0,15,7,0,0,9,0,0,0,0,0,9,0,0,0,9,0,0,0,9,0,0,0,9,0,0,0,0,0,15,7,0,0,15,7,0,0,0,9,0,0,11,0,9,0,0,0,9,0,0,4,4,6,9,0,0,0,9,0,0,12,0,15,7,0,0,0,15,7,0,0,0,9,0,0,0,9,0,0,0,4,0,9,0,0,0,0,0,0,9,0,0,0,9,0,0,0,15,7,0,0,0,15,7,0,0,0,9,0,0,0,0,0,9,0,0,4,4,12,1,9,0,0,0,1,9,0,0,0,9,0,0,0,15,7,0,0,0,15,7,0,0,0,9,0,0,0,0,9,0,0,0,0,0,0,9,0,0,0,9,0,0,0,9,0,0,0,0,15,7,0,0,0,15,7,0,0,0,9,0,0,0,0,9,0,0,0,9,0,0,0,9,0,0,0,9,0,0,0,0,15,7,0,0,0,15,7,0,0,0,9,0,0,0,0,0,0,0,9,0,0,0,9,0,0,0,9,0,0,0,9,0,0,0,0,15,7,0,0,0,15,7,0,0,0,9,0,0,0,0,9,0,0,0,0,9,0,0,0,9,0,0,0,0,9,0,0,0,0,0,0,15,7,0,0,0,15,7,0,9,0,0,9,0,0,0,0,9,0,0,10,0,9,0,0,0,0,9,0,0,0,15,7,0,15,7,0,9,0,0,9,0,0,0,0,9,0,0,0,0,9,0,0,0,0,9,0,0,15,7,0,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15,0,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15,0,9,0,9,0,9,0,9,0,9,0,9,0,9,0,0,0,0,0,0,0,0,0];
  for(n=0;n<3564+1;n++){
   setTile(X[n], Y[n], Z[n], I[n], D[n]);
  }
}

function Tank15(x,y,z){
 var X=[x,x+0,x+0,x+0,x+0,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+14,x+14,x+14];
 var Y=[y,y+-2,y+-1,y+0,y+-2,y+-1,y+-1,y+-1,y+1,y+-2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+1,y+0,y+1,y+-2,y+-1,y+0,y+1,y+2,y+-1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+0,y+1,y+-1,y+0,y+1,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+1,y+2,y+-2,y+-1,y+0,y+2,y+3,y+-2,y+-1,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+0,y+1,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+-2,y+-1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+0,y+1,y+-1,y+0,y+1,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+2,y+3,y+-2,y+-1,y+0,y+3,y+4,y+-2,y+-1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+0,y+1,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+2,y+-2,y+-1,y+2,y+3,y+-2,y+-1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+0,y+1,y+-1,y+0,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+2,y+-2,y+-1,y+2,y+3,y+-2,y+-1,y+0,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+0,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+2,y+3,y+-2,y+-1,y+0,y+2,y+-2,y+-1,y+0,y+1,y+2,y+0,y+-1,y+0,y+-2,y+-1,y+0,y+1,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+-2,y+-1,y+0,y+1,y+-2,y+-1,y+0,y+1,y+-1,y+0,y+-2,y+-1,y+0,y+1,y+-2,y+-1,y+0,y+1,y+-2,y+-1,y+0,y+1,y+-2,y+-1,y+0,y+1,y+-2,y+-1,y+0,y+1,y+-1,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-1,y+-2,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+-2,y+-1,y+0,y+5,y+-1,y+-1];
 var Z=[z,z+0,z+0,z+0,z+1,z+-5,z+-3,z+-1,z+-6,z+-5,z+-5,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-4,z+-3,z+-3,z+-3,z+-3,z+-2,z+-2,z+-2,z+-2,z+-1,z+-1,z+-1,z+-1,z+-1,z+0,z+-6,z+-6,z+-5,z+-5,z+-5,z+-5,z+-5,z+-4,z+-4,z+-3,z+-3,z+-3,z+-3,z+-2,z+-2,z+-1,z+-1,z+-1,z+-1,z+-1,z+0,z+0,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-4,z+-3,z+-3,z+-3,z+-3,z+-3,z+-2,z+-2,z+-2,z+-2,z+-1,z+-1,z+-1,z+-1,z+-1,z+0,z+0,z+0,z+-6,z+-6,z+-5,z+-5,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-4,z+-3,z+-3,z+-3,z+-3,z+-3,z+-3,z+-3,z+-2,z+-2,z+-2,z+-2,z+-1,z+-1,z+-1,z+-1,z+-1,z+0,z+0,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-4,z+-3,z+-3,z+-3,z+-3,z+-3,z+-2,z+-2,z+-2,z+-2,z+-1,z+-1,z+-1,z+-1,z+-1,z+0,z+0,z+0,z+-6,z+-6,z+-5,z+-5,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-3,z+-3,z+-3,z+-3,z+-2,z+-2,z+-2,z+-1,z+-1,z+-1,z+-1,z+-1,z+0,z+0,z+-6,z+-6,z+-5,z+-5,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-4,z+-3,z+-3,z+-3,z+-3,z+-2,z+-2,z+-2,z+-2,z+-1,z+-1,z+-1,z+-1,z+-1,z+0,z+0,z+-6,z+-5,z+-5,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-4,z+-4,z+-3,z+-3,z+-3,z+-3,z+-3,z+-2,z+-2,z+-2,z+-2,z+-1,z+-1,z+-1,z+-1,z+-1,z+0,z+-6,z+-6,z+-5,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-4,z+-4,z+-3,z+-3,z+-3,z+-3,z+-2,z+-2,z+-2,z+-2,z+-1,z+-1,z+-1,z+-1,z+0,z+0,z+-5,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-4,z+-3,z+-3,z+-3,z+-3,z+-2,z+-2,z+-2,z+-2,z+-1,z+-1,z+-1,z+-1,z+-6,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-3,z+-3,z+-3,z+-2,z+-2,z+-2,z+-1,z+-1,z+-1,z+0,z+-5,z+-5,z+-5,z+-4,z+-4,z+-3,z+-3,z+-2,z+-2,z+-1,z+-1,z+-1,z+-7,z+-5,z+-1];
 var I=[0,57,57,0,0,96,65,96,101,96,35,24,121,43,121,24,24,121,121,35,107,121,121,24,24,24,96,35,24,121,43,101,96,101,35,35,121,121,44,121,43,121,71,71,43,121,43,35,35,121,121,44,96,101,35,96,101,35,35,121,121,44,44,44,35,44,44,121,35,44,121,44,44,35,44,35,35,121,24,44,35,96,101,96,101,35,35,121,121,44,44,44,44,121,44,44,121,121,43,121,44,44,44,44,121,35,35,121,121,44,96,101,35,96,68,35,35,121,24,44,44,44,43,121,44,44,65,49,44,44,44,43,24,35,35,121,121,44,35,96,68,96,68,35,35,121,121,44,44,44,44,44,44,44,109,44,44,44,35,35,121,24,44,96,68,35,96,35,35,121,24,44,44,43,114,43,44,44,44,44,44,43,114,44,35,35,121,24,44,35,96,96,35,35,121,121,44,44,43,35,65,96,44,44,35,44,44,44,43,35,44,35,35,121,121,44,96,35,96,35,35,121,121,44,121,22,102,44,44,121,121,121,44,121,22,121,35,35,121,24,35,96,35,35,121,44,44,121,22,44,44,121,121,44,44,121,22,44,35,35,121,44,35,35,35,24,44,121,121,44,121,24,44,121,121,35,35,121,35,96,35,44,121,44,121,44,24,44,96,35,44,0,96,96];
 var D=[0,0,0,0,0,6,4,6,0,6,15,0,0,1,0,2,2,0,0,0,3,0,0,2,2,0,6,15,0,0,1,0,4,0,15,7,0,0,1,0,1,0,0,8,1,0,1,15,7,0,0,1,5,0,4,4,0,15,7,0,0,1,9,1,3,1,9,0,0,1,0,9,1,4,1,15,7,0,0,1,3,5,0,4,0,15,7,0,0,1,9,1,1,0,9,1,0,0,1,0,1,9,1,1,0,15,7,0,0,1,5,0,4,4,2,15,7,0,0,1,9,1,1,0,9,1,5,0,1,9,1,1,0,15,7,0,0,1,3,5,3,4,2,15,7,0,0,1,9,1,1,9,1,1,1,9,1,1,15,7,0,0,1,5,3,4,4,15,7,0,0,1,9,1,1,1,9,1,1,5,9,1,1,1,15,7,0,0,1,3,5,4,15,7,0,0,1,9,1,2,3,3,9,1,2,1,5,9,1,2,1,15,7,0,0,1,5,4,4,15,7,0,0,9,0,0,0,1,9,0,0,0,9,0,0,0,15,7,0,0,3,5,15,7,0,1,9,0,0,1,9,0,0,1,9,0,0,1,15,7,0,1,4,15,7,0,9,0,0,9,0,0,9,0,0,15,7,0,3,7,15,1,0,1,0,1,0,1,7,15,1,0,7,7];
  for(n=0;n<1080+1;n++){
   setTile(X[n], Y[n], Z[n], I[n], D[n]);
  }
}

function Tank16(x,y,z){
 var X=[x,x+-26,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-4,x+-3,x+-2,x+-1,x+0,x+0,x+0,x+0,x+0];
 var Y=[y,y+9,y+-1,y+0,y+1,y+0,y+1,y+0,y+1,y+0,y+1,y+-1,y+-2,y+-1,y+0,y+0,y+0,y+0,y+0,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+-2,y+-1,y+0,y+-1,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-1,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-1,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+1,y+2,y+3,y+-2,y+-1,y+1,y+2,y+3,y+-2,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+-1,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+1,y+3,y+-2,y+1,y+3,y+-2,y+1,y+3,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-1,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+1,y+4,y+-2,y+-1,y+0,y+4,y+-2,y+1,y+4,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-1,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+1,y+4,y+-2,y+-1,y+0,y+4,y+-2,y+1,y+4,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-1,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+1,y+4,y+5,y+6,y+-2,y+1,y+2,y+3,y+4,y+5,y+-2,y+1,y+4,y+5,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-1,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+1,y+4,y+-2,y+1,y+2,y+3,y+4,y+5,y+-2,y+1,y+4,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-1,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+1,y+4,y+-2,y+1,y+3,y+4,y+-2,y+1,y+4,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-1,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+1,y+4,y+-2,y+1,y+3,y+4,y+-2,y+-1,y+1,y+4,y+5,y+6,y+-2,y+-1,y+0,y+1,y+2,y+3,y+5,y+-2,y+-1,y+0,y+1,y+2,y+-1,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+1,y+4,y+-2,y+2,y+3,y+4,y+-2,y+1,y+4,y+5,y+6,y+-2,y+-1,y+0,y+1,y+2,y+3,y+5,y+6,y+-2,y+-1,y+0,y+1,y+2,y+-1,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+1,y+3,y+4,y+-2,y+-1,y+2,y+3,y+4,y+-2,y+1,y+3,y+4,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-1,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+1,y+3,y+-2,y+-1,y+0,y+2,y+3,y+4,y+-2,y+-1,y+0,y+1,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-1,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+-1,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-1,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+3,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+3,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+3,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+3,y+3,y+3,y+3,y+-2,y+-2,y+-1,y+0,y+3];
 var Z=[z,z+13,z+3,z+4,z+4,z+5,z+5,z+7,z+7,z+8,z+8,z+9,z+3,z+3,z+3,z+4,z+5,z+6,z+7,z+8,z+9,z+9,z+9,z+3,z+3,z+3,z+4,z+4,z+5,z+5,z+6,z+6,z+7,z+7,z+8,z+8,z+9,z+9,z+9,z+2,z+3,z+3,z+3,z+4,z+4,z+4,z+5,z+5,z+5,z+6,z+6,z+6,z+7,z+7,z+7,z+8,z+8,z+8,z+9,z+9,z+9,z+10,z+3,z+3,z+3,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+9,z+9,z+9,z+2,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+10,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+6,z+6,z+6,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+2,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+10,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+2,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+10,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+2,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+10,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+2,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+10,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+2,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+10,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+2,z+3,z+3,z+3,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+9,z+9,z+9,z+10,z+3,z+3,z+3,z+4,z+4,z+4,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+8,z+8,z+8,z+9,z+9,z+9,z+3,z+3,z+4,z+4,z+5,z+5,z+6,z+6,z+6,z+7,z+7,z+8,z+8,z+9,z+9,z+3,z+3,z+4,z+4,z+5,z+5,z+6,z+6,z+6,z+7,z+7,z+8,z+8,z+9,z+9,z+6,z+6,z+6,z+6,z+-1,z+0,z+0,z+0,z+6];
 var I=[0,0,96,101,49,101,49,101,49,101,49,96,96,35,35,35,35,35,35,35,96,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,1,35,44,35,35,1,35,44,35,35,1,35,44,35,35,35,35,35,35,35,35,35,35,35,35,1,1,44,35,35,35,35,109,35,35,35,35,109,35,35,35,109,35,1,1,44,35,35,35,35,35,35,35,35,44,35,35,35,35,35,35,44,35,44,35,35,44,35,35,44,35,35,35,35,35,35,44,35,35,35,44,35,35,35,35,35,44,35,35,1,1,1,35,35,35,44,44,35,1,1,44,35,44,44,35,1,1,1,35,35,35,35,35,44,35,35,35,35,35,44,43,35,35,35,1,35,35,35,44,35,35,65,65,35,35,44,35,35,35,35,1,35,35,35,35,35,44,43,35,35,35,35,44,43,35,1,1,1,35,35,35,44,35,35,35,35,44,1,1,35,35,35,44,35,44,35,1,1,1,35,35,35,35,35,44,43,35,35,35,35,44,43,35,35,35,1,35,35,35,44,35,35,44,65,65,65,96,35,44,35,35,35,35,1,35,35,35,35,35,44,43,35,35,35,35,44,43,35,1,1,1,35,35,35,44,35,35,44,96,35,35,44,35,35,1,1,1,35,35,35,35,35,44,43,35,35,35,35,44,43,35,1,35,1,35,35,35,35,44,35,35,1,49,35,35,35,44,35,1,35,35,1,35,1,35,35,44,35,35,35,44,43,35,35,35,35,44,44,35,1,1,1,35,35,35,1,35,35,44,49,35,35,1,35,44,35,35,1,1,1,35,35,44,44,35,35,35,44,44,35,35,35,35,44,44,35,1,1,43,35,44,35,1,35,44,35,109,44,49,35,35,1,35,44,35,1,1,43,35,44,35,35,35,44,44,35,35,35,35,44,44,35,35,1,43,35,35,1,1,35,35,1,35,44,49,44,35,1,35,1,35,35,35,1,43,35,35,35,35,44,44,35,35,35,35,35,35,35,44,44,35,35,1,43,43,109,35,35,1,102,1,49,35,35,1,43,43,109,35,35,35,44,44,35,35,35,35,35,35,35,35,35,35,35,35,35,44,44,35,35,35,44,109,35,35,35,35,44,44,35,35,35,35,35,35,35,35,35,35,44,35,44,44,35,44,44,35,44,35,44,35,44,44,35,44,35,35,35,35,35,35,44,35,44,35,44,35,35,44,35,44,35,35,35,109,109,44,109,44,109,44,35,109,44,109,44,35,109,35,35,35,35,0,57,57,0,49];
 var D=[0,0,6,0,0,0,0,0,0,0,0,6,6,15,13,15,13,12,15,12,6,15,13,15,15,12,13,12,13,15,13,12,13,12,13,12,15,15,12,4,15,7,13,13,13,13,13,13,15,13,13,13,13,13,12,13,13,15,15,7,15,3,15,15,12,13,13,12,13,0,13,5,15,13,0,0,5,12,13,0,12,5,13,13,13,13,15,15,12,4,15,7,12,13,0,0,5,15,13,13,15,0,13,9,13,12,0,13,12,13,0,13,0,0,5,12,15,7,15,3,15,15,13,5,12,13,7,7,13,15,5,13,5,15,13,5,12,13,5,13,13,7,7,15,12,5,15,15,13,5,12,4,15,7,13,5,13,13,0,0,0,12,12,13,5,5,13,0,0,5,13,5,5,13,0,0,0,15,12,15,7,12,5,13,3,15,15,12,5,5,13,7,7,0,15,15,13,5,13,13,5,5,12,13,5,15,13,7,7,0,12,15,15,15,13,5,5,4,15,7,13,5,5,13,0,0,0,12,12,13,5,15,0,0,13,5,0,0,12,12,13,5,13,5,13,0,0,0,15,15,15,7,13,5,5,3,15,15,13,5,5,13,7,7,0,12,12,13,5,12,13,5,5,5,5,3,13,5,12,13,7,7,0,15,12,15,15,12,5,5,4,15,7,13,5,5,13,0,0,0,13,13,13,5,12,13,5,6,12,13,5,15,13,0,0,0,13,13,15,7,15,5,5,3,15,15,12,5,5,13,0,0,0,12,12,13,11,5,15,13,0,0,12,13,12,5,15,0,5,13,0,0,0,12,12,13,15,15,13,5,5,4,15,7,13,5,5,13,0,0,0,15,15,13,0,12,13,5,0,13,13,0,15,13,5,13,0,0,0,15,15,13,5,15,7,12,5,5,3,15,15,13,5,5,13,0,0,5,15,5,13,0,13,5,13,0,5,0,13,13,0,13,5,13,0,0,5,15,5,15,15,12,5,5,4,15,7,12,5,5,13,13,0,5,13,13,0,0,12,13,0,2,5,0,5,13,0,2,0,13,13,13,0,5,12,15,7,13,5,5,3,15,15,12,12,13,13,5,5,15,13,0,5,5,1,13,13,0,0,0,0,12,13,0,5,5,1,15,13,12,5,5,15,15,13,4,15,7,13,13,13,12,12,12,15,5,5,13,15,13,5,5,15,15,13,13,5,5,13,12,12,15,7,12,3,15,15,12,13,13,5,13,13,5,13,13,5,12,13,13,5,13,13,5,15,15,13,15,13,12,5,12,5,12,5,12,12,5,12,5,15,13,15,1,5,5,5,5,5,5,13,5,5,5,5,15,1,15,12,13,13,0,0,0,0,0];
  for(n=0;n<4860+1;n++){
   setTile(X[n], Y[n], Z[n], I[n], D[n]);
  }
}

function Tank17(x,y,z){
 var X=[x,x+-9,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+1];
 var Y=[y,y+7,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+0,y+1,y+1,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+0,y+1,y+2,y+0,y+1,y+2,y+1,y+1,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+2,y+3,y+-1,y+0,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-1,y+2,y+3,y+4,y+5,y+6,y+-1,y+2,y+3,y+4,y+5,y+6,y+-1,y+2,y+3,y+4,y+5,y+6,y+-1,y+2,y+3,y+5,y+-1,y+2,y+3,y+5,y+-1,y+2,y+3,y+-1,y+2,y+3,y+-1,y+2,y+3,y+-1,y+2,y+3,y+-1,y+2,y+3,y+-1,y+0,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+0,y+1,y+2,y+1,y+-1,y+2,y+-1,y+0,y+1,y+2,y+3,y+-1,y+2,y+3,y+-1,y+2,y+3,y+-1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+-1,y+0,y+2,y+3,y+4,y+5,y+6,y+-1,y+0,y+1,y+2,y+6,y+-1,y+2,y+3,y+4,y+5,y+6,y+-1,y+2,y+3,y+4,y+5,y+6,y+-1,y+2,y+3,y+5,y+-1,y+2,y+3,y+5,y+-1,y+2,y+3,y+5,y+-1,y+2,y+3,y+5,y+-1,y+2,y+3,y+5,y+-1,y+0,y+1,y+2,y+3,y+5,y+-1,y+0,y+1,y+2,y+5,y+-1,y+0,y+1,y+2,y+5,y+-1,y+0,y+1,y+2,y+5,y+0,y+1,y+2,y+1,y+1,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+2,y+3,y+-1,y+0,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+-1,y+2,y+3,y+4,y+5,y+6,y+-1,y+3,y+5,y+-1,y+0,y+3,y+5,y+-1,y+0,y+2,y+4,y+-1,y+0,y+1,y+4,y+-1,y+0,y+1,y+4,y+-1,y+0,y+1,y+2,y+3,y+4,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+0,y+1,y+2,y+1,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+0,y+1,y+2,y+0,y+1,y+2,y+1,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+0,y+1,y+1,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2];
 var Z=[z,z+-22,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-8,z+-8,z+-8,z+-7,z+-7,z+-7,z+-6,z+-6,z+-6,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-9,z+-8,z+-8,z+-8,z+-8,z+-7,z+-7,z+-7,z+-7,z+-6,z+-6,z+-6,z+-6,z+-5,z+-5,z+-4,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-9,z+-9,z+-8,z+-8,z+-8,z+-8,z+-8,z+-7,z+-7,z+-7,z+-7,z+-6,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-3,z+-3,z+-3,z+-2,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-8,z+-8,z+-8,z+-7,z+-7,z+-7,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-4,z+-3,z+-3,z+-3,z+-2,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-9,z+-8,z+-8,z+-8,z+-8,z+-7,z+-7,z+-7,z+-7,z+-7,z+-7,z+-6,z+-6,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-4,z+-4,z+-3,z+-3,z+-3,z+-2,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-9,z+-8,z+-8,z+-8,z+-8,z+-8,z+-8,z+-7,z+-7,z+-7,z+-7,z+-7,z+-6,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-4,z+-3,z+-3,z+-3,z+-2,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-9,z+-9,z+-8,z+-8,z+-8,z+-8,z+-8,z+-7,z+-7,z+-7,z+-7,z+-7,z+-6,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-3,z+-3,z+-3,z+-2,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-9,z+-8,z+-8,z+-8,z+-8,z+-7,z+-7,z+-7,z+-7,z+-6,z+-6,z+-6,z+-6,z+-5,z+-5,z+-4,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-8,z+-8,z+-8,z+-7,z+-7,z+-7,z+-6,z+-6,z+-6,z+0,z+0,z+0,z+0];
 var I=[0,0,109,35,109,35,35,35,109,35,109,109,35,109,35,35,35,109,35,109,109,35,109,35,35,35,109,35,109,109,35,109,35,35,35,109,35,109,44,35,35,35,35,35,35,35,49,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,49,35,35,35,109,35,35,35,109,35,35,35,109,35,35,35,49,35,35,35,109,35,35,35,109,35,35,35,109,35,35,35,49,35,35,35,44,35,35,44,35,35,35,35,35,35,35,35,35,1,1,1,35,35,35,35,35,1,35,1,35,35,1,35,1,35,35,35,1,1,35,35,35,1,1,35,35,1,35,1,35,35,1,35,1,35,35,35,1,1,35,35,35,1,1,35,35,1,35,1,35,35,1,35,35,35,35,1,1,35,35,35,1,1,35,35,35,1,1,35,35,1,1,35,35,1,1,35,35,1,109,35,35,44,35,35,35,35,35,35,35,35,67,1,35,35,67,1,35,35,67,35,1,35,35,1,1,1,35,44,35,35,1,35,109,35,44,35,1,35,109,35,44,35,1,35,43,35,44,35,44,35,35,35,44,35,35,35,44,35,35,44,35,35,44,35,35,44,35,35,35,35,35,35,35,35,1,20,35,35,44,98,109,35,35,44,35,65,35,35,71,71,35,35,35,44,35,35,1,35,35,1,35,35,71,71,1,35,44,35,44,35,35,1,35,35,35,44,35,65,65,65,44,35,1,35,44,35,44,35,44,35,44,35,44,35,44,35,35,35,44,35,35,35,1,35,35,35,1,35,35,35,1,35,35,35,35,35,35,35,35,35,35,35,35,35,35,1,35,35,35,35,1,1,109,35,35,35,44,35,35,35,35,35,35,35,35,1,35,35,35,35,67,1,35,35,67,1,35,35,1,1,1,35,44,35,35,1,1,1,35,109,35,44,35,1,1,1,35,109,35,44,35,1,35,43,35,44,35,35,35,35,109,35,35,35,1,35,44,35,1,44,44,35,1,1,44,35,1,1,35,20,44,35,1,1,35,102,35,1,1,35,35,1,1,35,35,44,1,109,35,35,44,35,35,35,35,35,35,35,1,1,1,35,35,1,35,1,35,35,35,35,35,1,35,1,35,35,35,1,1,35,35,35,1,1,35,35,1,35,1,35,35,1,35,1,35,35,35,1,1,35,35,35,1,1,35,35,1,35,1,35,35,1,35,35,35,35,1,1,35,35,35,1,1,35,35,35,1,1,35,35,35,1,1,35,35,1,1,35,35,1,109,35,35,44,35,44,35,35,35,35,35,35,35,49,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,49,35,35,35,109,35,35,35,109,35,35,35,109,35,35,35,49,35,35,35,109,35,35,35,109,35,35,35,109,35,35,35,49,35,35,35,44,35,35,44,35,35,35,109,35,109,35,35,35,109,35,109,109,35,109,35,35,35,109,35,109,109,35,109,35,35,35,109,35,109,109,35,109,35,35,35,109,35,109,57,57,0,0];
 var D=[0,0,6,15,2,15,13,15,7,15,3,6,15,2,15,13,15,7,15,3,6,15,2,15,13,15,7,15,3,6,15,2,15,13,15,7,15,3,13,13,13,13,13,13,13,13,0,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,0,13,13,13,4,13,13,13,4,13,13,13,4,13,13,13,0,13,13,13,4,13,13,13,4,13,13,13,4,13,13,13,0,13,13,13,13,13,13,5,13,13,13,13,13,13,13,13,13,0,0,0,13,0,0,0,13,0,7,0,13,13,0,7,0,13,13,7,0,0,13,13,7,0,0,13,13,0,7,0,13,13,0,7,0,13,13,7,0,0,13,13,7,0,0,13,13,0,7,0,13,13,0,7,13,13,13,0,0,13,13,13,0,0,13,13,13,0,0,13,13,0,0,13,13,0,0,13,13,0,3,13,13,5,13,4,13,13,13,13,13,13,1,0,13,13,1,0,13,13,1,12,0,13,13,0,0,0,13,13,13,13,0,13,4,13,5,13,0,13,4,13,5,13,0,13,5,13,5,13,8,13,13,13,8,13,13,13,8,13,13,8,13,13,8,13,13,8,13,13,13,13,13,4,13,13,0,0,13,13,5,3,3,13,13,5,13,2,4,13,5,8,13,13,13,13,13,13,0,13,13,0,13,13,5,10,0,13,5,13,5,13,0,0,13,15,13,5,13,4,4,4,5,13,0,13,5,13,5,13,8,13,5,13,5,13,8,13,13,13,8,13,13,13,0,13,13,13,0,13,13,13,0,13,13,13,2,2,13,13,13,13,4,2,13,13,13,0,15,13,13,13,0,0,3,15,13,13,5,13,4,13,13,13,13,13,13,0,11,3,13,13,0,0,13,13,0,0,13,13,0,0,0,13,13,13,13,0,0,0,13,5,13,5,13,0,0,0,13,5,13,5,13,0,13,5,13,5,13,13,13,13,2,13,13,13,0,2,5,13,0,5,5,13,0,0,5,13,0,0,4,0,5,13,0,0,13,0,13,0,0,13,13,0,0,13,13,5,0,3,13,13,5,13,13,13,13,13,13,13,0,0,0,13,13,0,7,0,13,0,0,0,13,0,7,0,13,13,7,0,0,13,13,7,0,0,13,13,0,7,0,13,13,0,7,0,13,13,7,0,0,13,13,7,0,0,13,13,0,7,0,13,13,0,7,13,13,13,0,0,13,13,13,0,0,13,13,13,0,0,13,13,13,0,0,13,13,0,0,13,13,0,3,13,13,5,13,13,13,13,13,13,13,13,13,0,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,0,13,13,13,5,13,13,13,5,13,13,13,5,13,13,13,0,13,13,13,5,13,13,13,5,13,13,13,5,13,13,13,0,13,13,13,13,13,13,5,13,13,13,6,15,2,15,13,15,7,15,3,6,15,2,15,13,15,7,15,3,6,15,2,15,13,15,7,15,3,6,15,2,15,13,15,7,15,3,0,0,0,0];
  for(n=0;n<2530+1;n++){
   setTile(X[n], Y[n], Z[n], I[n], D[n]);
  }
}

function Tank18(x,y,z){
 var X=[x,x+-10,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1];
 var Y=[y,y+8,y+0,y+1,y+2,y+0,y+1,y+2,y+0,y+1,y+2,y+0,y+1,y+2,y+0,y+1,y+2,y+0,y+1,y+2,y+0,y+1,y+2,y+0,y+1,y+2,y+0,y+1,y+2,y+0,y+1,y+2,y+0,y+1,y+2,y+0,y+1,y+2,y+0,y+1,y+2,y+0,y+1,y+2,y+0,y+1,y+0,y+1,y+0,y+1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+0,y+1,y+0,y+1,y+0,y+1,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+0,y+1,y+1,y+0,y+1,y+0,y+1,y+0,y+1,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+0,y+1,y+2,y+0,y+1,y+2,y+1,y+0,y+1,y+0,y+1,y+1,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+2,y+3,y+-1,y+0,y+2,y+3,y+4,y+-1,y+0,y+2,y+3,y+-1,y+0,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+4,y+-1,y+2,y+3,y+-1,y+2,y+3,y+-1,y+2,y+3,y+-1,y+2,y+3,y+-1,y+2,y+3,y+-1,y+2,y+3,y+-1,y+2,y+3,y+-1,y+2,y+3,y+-1,y+0,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+0,y+1,y+2,y+1,y+1,y+0,y+1,y+-1,y+2,y+-1,y+0,y+1,y+2,y+3,y+-1,y+2,y+3,y+-1,y+2,y+3,y+-1,y+2,y+3,y+-1,y+2,y+3,y+-1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+2,y+3,y+-1,y+2,y+3,y+-1,y+2,y+3,y+-1,y+2,y+3,y+-1,y+2,y+3,y+-1,y+2,y+3,y+-1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+0,y+1,y+2,y+1,y+0,y+1,y+1,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+2,y+3,y+-1,y+0,y+2,y+3,y+-1,y+0,y+2,y+3,y+4,y+-1,y+0,y+2,y+3,y+-1,y+0,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+2,y+3,y+-1,y+3,y+4,y+5,y+-1,y+0,y+3,y+-1,y+0,y+2,y+4,y+-1,y+0,y+1,y+4,y+-1,y+0,y+1,y+4,y+-1,y+0,y+1,y+2,y+3,y+4,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+0,y+1,y+2,y+1,y+1,y+0,y+1,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+0,y+1,y+2,y+0,y+1,y+2,y+1,y+0,y+1,y+0,y+1,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+0,y+1,y+1,y+0,y+1,y+0,y+1,y+0,y+1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+0,y+1,y+0,y+1,y+0,y+1,y+-2,y+-1,y+0,y+0,y+1,y+2,y+0,y+1,y+2,y+0,y+1,y+2,y+0,y+1,y+2,y+0,y+1,y+2,y+0,y+1,y+2,y+0,y+1,y+2,y+0,y+1,y+2,y+0,y+1,y+2,y+0,y+1,y+2,y+0,y+1,y+2,y+0,y+1,y+2,y+0,y+1,y+2,y+0,y+1,y+2,y+0,y+1,y+0,y+1,y+0,y+1,y+-2];
 var Z=[z,z+-22,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-8,z+-8,z+-8,z+-7,z+-7,z+-6,z+-6,z+-5,z+-5,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-17,z+-17,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-13,z+-13,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-9,z+-9,z+-8,z+-8,z+-8,z+-7,z+-7,z+-7,z+-6,z+-6,z+-6,z+-5,z+-5,z+-4,z+-4,z+-3,z+-3,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-9,z+-8,z+-8,z+-8,z+-8,z+-7,z+-7,z+-7,z+-7,z+-6,z+-6,z+-6,z+-6,z+-5,z+-5,z+-4,z+-3,z+-3,z+-2,z+-2,z+-1,z+-1,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-11,z+-11,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-9,z+-9,z+-8,z+-8,z+-8,z+-8,z+-8,z+-7,z+-7,z+-7,z+-7,z+-6,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-3,z+-3,z+-3,z+-2,z+-1,z+-1,z+0,z+0,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-8,z+-8,z+-8,z+-7,z+-7,z+-7,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-4,z+-3,z+-3,z+-3,z+-2,z+-1,z+0,z+0,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-8,z+-8,z+-8,z+-7,z+-7,z+-7,z+-7,z+-7,z+-6,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-4,z+-3,z+-3,z+-3,z+-2,z+0,z+0,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-9,z+-8,z+-8,z+-8,z+-8,z+-8,z+-8,z+-7,z+-7,z+-7,z+-7,z+-7,z+-6,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-4,z+-3,z+-3,z+-3,z+-2,z+-1,z+0,z+0,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-9,z+-9,z+-8,z+-8,z+-8,z+-8,z+-8,z+-7,z+-7,z+-7,z+-7,z+-7,z+-6,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-3,z+-3,z+-3,z+-2,z+-1,z+-1,z+0,z+0,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-9,z+-8,z+-8,z+-8,z+-8,z+-7,z+-7,z+-7,z+-7,z+-6,z+-6,z+-6,z+-6,z+-5,z+-5,z+-4,z+-3,z+-3,z+-2,z+-2,z+-1,z+-1,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-17,z+-17,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-13,z+-13,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-9,z+-9,z+-8,z+-8,z+-8,z+-7,z+-7,z+-7,z+-6,z+-6,z+-6,z+-5,z+-5,z+-4,z+-4,z+-3,z+-3,z+0,z+0,z+0,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-8,z+-8,z+-8,z+-7,z+-7,z+-6,z+-6,z+-5,z+-5,z+0];
 var I=[0,0,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,109,35,109,35,35,35,109,35,109,101,101,109,35,109,35,35,35,109,35,109,101,101,109,35,109,35,35,35,109,35,109,101,101,109,35,109,35,35,35,109,35,109,101,101,101,101,101,101,44,35,35,35,35,35,35,35,49,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,49,35,35,35,109,35,35,35,109,35,35,35,109,35,35,35,49,35,35,35,109,35,35,35,109,35,35,35,109,35,35,35,49,35,35,35,44,35,35,44,35,35,35,101,101,101,101,101,101,35,35,35,35,35,35,1,1,1,35,35,1,35,1,35,35,1,35,1,35,35,35,1,1,35,35,35,1,1,35,35,1,35,1,35,35,1,35,1,35,35,35,1,1,35,35,35,1,1,35,35,1,35,1,35,35,35,35,35,1,35,35,35,35,1,1,35,35,35,1,1,35,35,35,1,1,35,35,1,1,35,35,1,1,35,35,1,109,35,35,44,35,101,101,101,101,35,35,35,35,35,35,35,67,1,35,35,67,1,35,35,35,67,1,35,35,67,1,35,35,67,35,1,35,35,1,1,43,35,35,35,44,35,35,44,35,35,44,35,35,44,35,35,44,35,35,44,35,35,44,35,35,35,35,35,35,35,35,1,20,35,35,44,98,109,35,35,44,35,101,101,101,65,35,35,71,71,35,35,35,44,35,35,1,35,35,1,35,35,1,35,35,1,35,35,71,71,43,35,35,35,44,35,35,44,35,35,44,35,35,44,35,35,43,35,35,43,35,35,43,35,35,35,35,35,35,35,35,35,35,35,1,35,35,35,1,1,109,35,35,44,35,101,101,35,35,35,35,35,35,35,1,35,35,35,67,1,35,35,67,1,35,101,35,67,1,35,35,67,1,35,35,1,1,43,35,35,44,35,35,35,35,35,35,109,35,35,1,35,44,35,1,44,44,35,1,1,44,35,1,1,35,20,44,35,1,1,35,102,35,1,1,35,35,1,1,35,35,44,1,109,35,35,44,35,101,101,101,35,35,35,35,35,35,1,1,1,35,35,1,35,1,35,35,1,35,1,35,35,35,1,1,35,35,35,1,1,35,35,1,35,1,35,35,1,35,1,35,35,35,1,1,35,35,35,1,1,35,35,1,35,1,35,35,1,35,35,35,35,1,1,35,35,35,1,1,35,35,35,1,1,35,35,35,1,1,35,35,1,1,35,35,1,109,35,35,44,35,101,101,101,101,44,35,35,35,35,35,35,35,49,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,49,35,35,35,109,35,35,35,109,35,35,35,109,35,35,35,49,35,35,35,109,35,35,35,109,35,35,35,109,35,35,35,49,35,35,35,44,35,35,44,35,35,35,101,101,101,101,101,101,101,101,101,109,35,109,35,35,35,109,35,109,101,101,109,35,109,35,35,35,109,35,109,101,101,109,35,109,35,35,35,109,35,109,101,101,109,35,109,35,35,35,109,35,109,101,101,101,101,101,101,57,57,0,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,0];
 var D=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,15,2,15,13,15,7,15,3,0,0,6,15,2,15,13,15,7,15,3,0,0,6,15,2,15,13,15,7,15,3,0,0,6,15,2,15,13,15,7,15,3,0,0,0,0,0,0,13,13,13,13,13,13,13,13,0,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,0,13,13,13,4,13,13,13,4,13,13,13,4,13,13,13,0,13,13,13,4,13,13,13,4,13,13,13,4,13,13,13,0,13,13,13,13,13,13,5,13,13,13,0,0,0,0,0,0,13,13,13,13,13,13,0,0,0,13,13,0,7,0,13,13,0,7,0,13,13,7,0,0,13,13,7,0,0,13,13,0,7,0,13,13,0,7,0,13,13,7,0,0,13,13,7,0,0,13,13,0,7,0,13,0,0,0,13,0,7,13,13,13,0,0,13,13,13,0,0,13,13,13,0,0,13,13,0,0,13,13,0,0,13,13,0,3,13,13,5,13,0,0,0,0,4,13,13,13,13,13,13,1,0,13,13,1,0,13,0,13,1,0,13,13,1,0,13,13,1,12,0,13,13,0,0,0,13,0,13,8,13,13,8,13,13,8,13,13,8,13,13,8,13,13,8,13,13,8,13,13,13,13,13,4,13,13,0,0,13,13,5,3,3,13,13,5,13,0,0,0,2,4,13,1,8,13,13,13,13,13,13,0,13,13,0,13,13,0,13,13,0,13,13,5,8,0,13,13,0,8,13,13,8,13,13,8,13,13,8,13,13,0,13,13,0,13,13,0,13,13,2,2,13,13,13,4,2,13,13,0,15,13,13,0,0,3,13,13,5,13,0,0,4,13,13,13,13,13,13,0,3,13,13,0,0,13,13,0,0,13,0,13,0,0,13,13,0,0,13,13,0,0,0,13,13,8,13,13,13,0,0,13,2,13,13,0,2,5,13,0,5,5,13,0,0,5,13,0,0,4,0,5,13,0,0,13,0,13,0,0,13,13,0,0,13,13,5,0,3,13,13,5,13,0,0,0,13,13,13,13,13,13,0,0,0,13,13,0,7,0,13,13,0,7,0,13,13,7,0,0,13,13,7,0,0,13,13,0,7,0,13,13,0,7,0,13,13,7,0,0,13,13,7,0,0,13,13,0,7,0,13,13,0,7,13,13,13,0,0,13,13,13,0,0,13,13,13,0,0,13,13,13,0,0,13,13,0,0,13,13,0,3,13,13,5,13,0,0,0,0,13,13,13,13,13,13,13,13,0,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,0,13,13,13,5,13,13,13,5,13,13,13,5,13,13,13,0,13,13,13,5,13,13,13,5,13,13,13,5,13,13,13,0,13,13,13,13,13,13,5,13,13,13,0,0,0,0,0,0,0,0,0,6,15,2,15,13,15,7,15,3,0,0,6,15,2,15,13,15,7,15,3,0,0,6,15,2,15,13,15,7,15,3,0,0,6,15,2,15,13,15,7,15,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  for(n=0;n<3036+1;n++){
   setTile(X[n], Y[n], Z[n], I[n], D[n]);
  }
}

function Tank19(x,y,z){
 var X=[x,x+-26,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-4,x+-3,x+-2,x+-1,x+0,x+0,x+0,x+0,x+0];
 var Y=[y,y+9,y+-1,y+0,y+1,y+0,y+1,y+0,y+1,y+0,y+1,y+-1,y+-2,y+-1,y+0,y+0,y+0,y+0,y+0,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+-2,y+-1,y+0,y+-1,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-1,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-1,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+1,y+2,y+3,y+-2,y+-1,y+1,y+2,y+3,y+-2,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+-1,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+1,y+3,y+-2,y+1,y+3,y+-2,y+1,y+3,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-1,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+1,y+4,y+-2,y+-1,y+0,y+4,y+-2,y+1,y+4,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-1,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+1,y+4,y+-2,y+-1,y+0,y+4,y+-2,y+1,y+4,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-1,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+1,y+4,y+5,y+6,y+-2,y+1,y+2,y+3,y+4,y+5,y+-2,y+1,y+4,y+5,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-1,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+1,y+4,y+-2,y+1,y+2,y+3,y+4,y+5,y+-2,y+1,y+4,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-1,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+1,y+4,y+-2,y+1,y+3,y+4,y+-2,y+1,y+4,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-1,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+1,y+4,y+-2,y+1,y+3,y+4,y+-2,y+-1,y+1,y+4,y+5,y+6,y+-2,y+-1,y+0,y+1,y+2,y+3,y+5,y+-2,y+-1,y+0,y+1,y+2,y+-1,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+1,y+4,y+-2,y+2,y+3,y+4,y+-2,y+1,y+4,y+5,y+6,y+-2,y+-1,y+0,y+1,y+2,y+3,y+5,y+6,y+-2,y+-1,y+0,y+1,y+2,y+-1,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+1,y+3,y+4,y+-2,y+-1,y+2,y+3,y+4,y+-2,y+1,y+3,y+4,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-1,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+1,y+3,y+-2,y+-1,y+0,y+2,y+3,y+4,y+-2,y+-1,y+0,y+1,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-1,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+-1,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-1,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+3,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+3,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+3,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+3,y+3,y+3,y+3,y+-2,y+-2,y+-1,y+0,y+3];
 var Z=[z,z+13,z+3,z+4,z+4,z+5,z+5,z+7,z+7,z+8,z+8,z+9,z+3,z+3,z+3,z+4,z+5,z+6,z+7,z+8,z+9,z+9,z+9,z+3,z+3,z+3,z+4,z+4,z+5,z+5,z+6,z+6,z+7,z+7,z+8,z+8,z+9,z+9,z+9,z+2,z+3,z+3,z+3,z+4,z+4,z+4,z+5,z+5,z+5,z+6,z+6,z+6,z+7,z+7,z+7,z+8,z+8,z+8,z+9,z+9,z+9,z+10,z+3,z+3,z+3,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+9,z+9,z+9,z+2,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+10,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+6,z+6,z+6,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+2,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+10,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+2,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+10,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+2,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+10,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+2,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+10,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+2,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+10,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+2,z+3,z+3,z+3,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+9,z+9,z+9,z+10,z+3,z+3,z+3,z+4,z+4,z+4,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+8,z+8,z+8,z+9,z+9,z+9,z+3,z+3,z+4,z+4,z+5,z+5,z+6,z+6,z+6,z+7,z+7,z+8,z+8,z+9,z+9,z+3,z+3,z+4,z+4,z+5,z+5,z+6,z+6,z+6,z+7,z+7,z+8,z+8,z+9,z+9,z+6,z+6,z+6,z+6,z+-1,z+0,z+0,z+0,z+6];
 var I=[0,0,96,101,49,101,49,101,49,101,49,96,96,35,35,35,35,35,35,35,96,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,1,35,44,35,35,1,35,44,35,35,1,35,44,35,35,35,35,35,35,35,35,35,35,35,35,1,1,44,35,35,35,35,109,35,35,35,35,109,35,35,35,109,35,1,1,44,35,35,35,35,35,35,35,35,44,35,35,35,35,35,35,44,35,44,35,35,44,35,35,44,35,35,35,35,35,35,44,35,35,35,44,35,35,35,35,35,44,35,35,1,1,1,35,35,35,44,44,35,1,1,44,35,44,44,35,1,1,1,35,35,35,35,35,44,35,35,35,35,35,44,43,35,35,35,1,35,35,35,44,35,35,65,65,35,35,44,35,35,35,35,1,35,35,35,35,35,44,43,35,35,35,35,44,43,35,1,1,1,35,35,35,44,35,35,35,35,44,1,1,35,35,35,44,35,44,35,1,1,1,35,35,35,35,35,44,43,35,35,35,35,44,43,35,35,35,1,35,35,35,44,35,35,44,65,65,65,96,35,44,35,35,35,35,1,35,35,35,35,35,44,43,35,35,35,35,44,43,35,1,1,1,35,35,35,44,35,35,44,96,35,35,44,35,35,1,1,1,35,35,35,35,35,44,43,35,35,35,35,44,43,35,1,35,1,35,35,35,35,44,35,35,1,49,35,35,35,44,35,1,35,35,1,35,1,35,35,44,35,35,35,44,43,35,35,35,35,44,44,35,1,1,1,35,35,35,1,35,35,44,49,35,35,1,35,44,35,35,1,1,1,35,35,44,44,35,35,35,44,44,35,35,35,35,44,44,35,1,1,43,35,44,35,1,35,44,35,109,44,49,35,35,1,35,44,35,1,1,43,35,44,35,35,35,44,44,35,35,35,35,44,44,35,35,1,43,35,35,1,1,35,35,1,35,44,49,44,35,1,35,1,35,35,35,1,43,35,35,35,35,44,44,35,35,35,35,35,35,35,44,44,35,35,1,43,43,109,35,35,1,102,1,49,35,35,1,43,43,109,35,35,35,44,44,35,35,35,35,35,35,35,35,35,35,35,35,35,44,44,35,35,35,44,109,35,35,35,35,44,44,35,35,35,35,35,35,35,35,35,35,44,35,44,44,35,44,44,35,44,35,44,35,44,44,35,44,35,35,35,35,35,35,44,35,44,35,44,35,35,44,35,44,35,35,35,109,109,44,109,44,109,44,35,109,44,109,44,35,109,35,35,35,35,0,57,57,0,49];
 var D=[0,0,6,0,0,0,0,0,0,0,0,6,6,15,13,15,13,12,15,12,6,15,13,15,15,12,13,12,13,15,13,12,13,12,13,12,15,15,12,4,15,7,13,13,13,13,13,13,15,13,13,13,13,13,12,13,13,15,15,7,15,3,15,15,12,13,13,12,13,0,13,5,15,13,0,0,5,12,13,0,12,5,13,13,13,13,15,15,12,4,15,7,12,13,0,0,5,15,13,13,15,0,13,9,13,12,0,13,12,13,0,13,0,0,5,12,15,7,15,3,15,15,13,5,12,13,7,7,13,15,5,13,5,15,13,5,12,13,5,13,13,7,7,15,12,5,15,15,13,5,12,4,15,7,13,5,13,13,0,0,0,12,12,13,5,5,13,0,0,5,13,5,5,13,0,0,0,15,12,15,7,12,5,13,3,15,15,12,5,5,13,7,7,0,15,15,13,5,13,13,5,5,12,13,5,15,13,7,7,0,12,15,15,15,13,5,5,4,15,7,13,5,5,13,0,0,0,12,12,13,5,15,0,0,13,5,0,0,12,12,13,5,13,5,13,0,0,0,15,15,15,7,13,5,5,3,15,15,13,5,5,13,7,7,0,12,12,13,5,12,13,5,5,5,5,3,13,5,12,13,7,7,0,15,12,15,15,12,5,5,4,15,7,13,5,5,13,0,0,0,13,13,13,5,12,13,5,6,12,13,5,15,13,0,0,0,13,13,15,7,15,5,5,3,15,15,12,5,5,13,0,0,0,12,12,13,11,5,15,13,0,0,12,13,12,5,15,0,5,13,0,0,0,12,12,13,15,15,13,5,5,4,15,7,13,5,5,13,0,0,0,15,15,13,0,12,13,5,0,13,13,0,15,13,5,13,0,0,0,15,15,13,5,15,7,12,5,5,3,15,15,13,5,5,13,0,0,5,15,5,13,0,13,5,13,0,5,0,13,13,0,13,5,13,0,0,5,15,5,15,15,12,5,5,4,15,7,12,5,5,13,13,0,5,13,13,0,0,12,13,0,2,5,0,5,13,0,2,0,13,13,13,0,5,12,15,7,13,5,5,3,15,15,12,12,13,13,5,5,15,13,0,5,5,1,13,13,0,0,0,0,12,13,0,5,5,1,15,13,12,5,5,15,15,13,4,15,7,13,13,13,12,12,12,15,5,5,13,15,13,5,5,15,15,13,13,5,5,13,12,12,15,7,12,3,15,15,12,13,13,5,13,13,5,13,13,5,12,13,13,5,13,13,5,15,15,13,15,13,12,5,12,5,12,5,12,12,5,12,5,15,13,15,1,5,5,5,5,5,5,13,5,5,5,5,15,1,15,12,13,13,0,0,0,0,0];
  for(n=0;n<4860+1;n++){
   setTile(X[n], Y[n], Z[n], I[n], D[n]);
  }
}

function AdvancedTank1(x,y,z){
 var X=[x,x+-1,x+0,x+0,x+2,x+2,x+2,x+2,x+2,x+2,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+31,x+32,x+32,x+32,x+32,x+32,x+32,x+34];
 var Y=[y,y+-2,y+-1,y+0,y+0,y+0,y+0,y+0,y+0,y+0,y+2,y+2,y+3,y+0,y+1,y+3,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+4,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+-2,y+-1,y+0,y+1,y+2,y+4,y+-1,y+0,y+1,y+2,y+4,y+0,y+1,y+4,y+3,y+1,y+2,y+-1,y+0,y+1,y+2,y+2,y+3,y+2,y+3,y+3,y+4,y+0,y+3,y+4,y+-1,y+1,y+3,y+4,y+-2,y+-1,y+1,y+2,y+4,y+-2,y+2,y+4,y+-2,y+2,y+4,y+-2,y+2,y+4,y+-2,y+2,y+4,y+-2,y+2,y+4,y+-2,y+-1,y+2,y+4,y+-2,y+2,y+4,y+-2,y+2,y+4,y+-2,y+2,y+4,y+-2,y+2,y+4,y+-2,y+2,y+4,y+-2,y+2,y+4,y+-2,y+2,y+4,y+-2,y+2,y+4,y+-2,y+2,y+4,y+-2,y+2,y+4,y+-2,y+2,y+4,y+-2,y+2,y+4,y+-2,y+2,y+4,y+-2,y+2,y+4,y+-2,y+-1,y+1,y+2,y+4,y+-1,y+1,y+4,y+0,y+4,y+5,y+6,y+7,y+3,y+4,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+2,y+3,y+2,y+3,y+3,y+4,y+0,y+1,y+3,y+4,y+-1,y+0,y+1,y+2,y+3,y+4,y+-2,y+-1,y+0,y+1,y+2,y+4,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+-1,y+1,y+2,y+3,y+4,y+5,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+-1,y+1,y+2,y+3,y+4,y+5,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+-1,y+1,y+2,y+3,y+4,y+5,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+-2,y+-1,y+1,y+2,y+3,y+4,y+5,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+-1,y+1,y+2,y+3,y+4,y+5,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+-1,y+1,y+2,y+3,y+4,y+5,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+-1,y+0,y+1,y+2,y+4,y+5,y+-1,y+0,y+1,y+2,y+4,y+0,y+1,y+4,y+3,y+4,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+3,y+4,y+3,y+4,y+3,y+4,y+5,y+4,y+5,y+4,y+5,y+0,y+4,y+5,y+6,y+7,y+8,y+9,y+-1,y+1,y+4,y+5,y+0,y+4,y+5,y+0,y+4,y+5,y+-1,y+1,y+4,y+5,y+0,y+4,y+5,y+0,y+4,y+5,y+-1,y+1,y+4,y+5,y+0,y+4,y+5,y+0,y+4,y+5,y+-1,y+1,y+4,y+5,y+0,y+4,y+5,y+0,y+4,y+5,y+-1,y+1,y+4,y+5,y+0,y+4,y+5,y+0,y+4,y+5,y+-1,y+1,y+4,y+5,y+0,y+4,y+5,y+4,y+5,y+4,y+5,y+4,y+4,y+3,y+4,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+3,y+4,y+-1,y+0,y+1,y+2,y+3,y+4,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+8,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+-1,y+0,y+1,y+-1,y+1,y+2,y+-1,y+2,y+3,y+4,y+-1,y+3,y+4,y+-1,y+4,y+5,y+-1,y+5,y+6,y+-1,y+6,y+-1,y+6,y+7,y+-1,y+0,y+1,y+3,y+6,y+7,y+-1,y+0,y+3,y+6,y+7,y+-1,y+0,y+3,y+6,y+7,y+-1,y+0,y+1,y+3,y+6,y+7,y+-1,y+0,y+3,y+6,y+7,y+-1,y+0,y+3,y+6,y+7,y+-1,y+0,y+1,y+3,y+6,y+7,y+-1,y+0,y+3,y+6,y+7,y+-1,y+0,y+3,y+6,y+7,y+-1,y+0,y+1,y+3,y+6,y+7,y+-1,y+0,y+3,y+6,y+7,y+-1,y+0,y+3,y+6,y+7,y+-1,y+0,y+1,y+3,y+6,y+7,y+-1,y+0,y+3,y+6,y+7,y+-1,y+0,y+3,y+6,y+7,y+-1,y+0,y+1,y+3,y+6,y+7,y+-1,y+6,y+7,y+-1,y+6,y+7,y+-1,y+0,y+5,y+6,y+0,y+1,y+4,y+5,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+2,y+2,y+2,y+-1,y+0,y+1,y+-1,y+1,y+2,y+-1,y+2,y+3,y+-1,y+3,y+4,y+-1,y+4,y+-1,y+5,y+6,y+-1,y+6,y+-1,y+7,y+8,y+-1,y+0,y+1,y+3,y+7,y+8,y+-1,y+0,y+3,y+7,y+8,y+-1,y+0,y+3,y+7,y+8,y+-1,y+0,y+1,y+3,y+7,y+8,y+-1,y+0,y+3,y+7,y+8,y+-1,y+0,y+3,y+7,y+8,y+-1,y+0,y+1,y+3,y+7,y+8,y+-1,y+0,y+3,y+5,y+6,y+7,y+8,y+-1,y+0,y+3,y+5,y+6,y+7,y+8,y+-1,y+0,y+1,y+3,y+5,y+6,y+7,y+8,y+-1,y+0,y+3,y+5,y+6,y+7,y+8,y+-1,y+0,y+3,y+5,y+6,y+7,y+8,y+-1,y+0,y+1,y+3,y+5,y+6,y+7,y+8,y+-1,y+0,y+3,y+5,y+6,y+7,y+8,y+-1,y+0,y+3,y+5,y+6,y+7,y+8,y+-1,y+0,y+1,y+3,y+5,y+6,y+7,y+8,y+-1,y+5,y+6,y+7,y+8,y+-1,y+5,y+6,y+7,y+8,y+-1,y+0,y+5,y+6,y+7,y+1,y+4,y+5,y+6,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+-1,y+0,y+1,y+-1,y+1,y+2,y+-1,y+2,y+3,y+-1,y+3,y+-1,y+4,y+-1,y+5,y+6,y+-1,y+6,y+7,y+-1,y+7,y+8,y+-1,y+0,y+1,y+6,y+7,y+8,y+-1,y+0,y+1,y+6,y+7,y+8,y+-1,y+0,y+1,y+6,y+7,y+8,y+-1,y+0,y+1,y+6,y+7,y+8,y+-1,y+0,y+1,y+6,y+7,y+8,y+-1,y+0,y+1,y+6,y+7,y+8,y+-1,y+0,y+1,y+6,y+7,y+8,y+-1,y+0,y+1,y+5,y+6,y+7,y+8,y+-1,y+0,y+5,y+6,y+-1,y+0,y+1,y+5,y+-1,y+0,y+1,y+5,y+-1,y+0,y+1,y+5,y+-1,y+0,y+1,y+5,y+-1,y+0,y+1,y+5,y+-1,y+0,y+3,y+5,y+-1,y+0,y+1,y+5,y+-1,y+5,y+-1,y+5,y+-1,y+0,y+5,y+0,y+1,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+1,y+2,y+3,y+-1,y+0,y+1,y+-1,y+1,y+2,y+-1,y+2,y+3,y+-1,y+3,y+4,y+-1,y+4,y+5,y+-1,y+0,y+5,y+6,y+-1,y+0,y+6,y+7,y+-1,y+7,y+8,y+-1,y+6,y+7,y+8,y+-1,y+6,y+7,y+-1,y+6,y+7,y+-1,y+6,y+7,y+-1,y+4,y+6,y+7,y+-1,y+6,y+7,y+-1,y+6,y+7,y+-1,y+0,y+1,y+5,y+6,y+7,y+-1,y+0,y+5,y+6,y+-1,y+0,y+1,y+5,y+-1,y+5,y+-1,y+5,y+-1,y+5,y+-1,y+0,y+1,y+2,y+5,y+-1,y+0,y+1,y+2,y+3,y+5,y+-1,y+0,y+1,y+2,y+5,y+-1,y+5,y+-1,y+5,y+-1,y+0,y+5,y+1,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+-1,y+0,y+-1,y+1,y+2,y+-1,y+2,y+3,y+-1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+4,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+8,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+8,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+8,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-1,y+5,y+-1,y+0,y+1,y+5,y+-1,y+0,y+1,y+5,y+-1,y+0,y+1,y+5,y+-1,y+5,y+-1,y+5,y+-1,y+5,y+-1,y+0,y+1,y+2,y+3,y+5,y+-1,y+0,y+1,y+2,y+3,y+5,y+-1,y+0,y+1,y+2,y+3,y+5,y+-1,y+5,y+-1,y+5,y+-1,y+0,y+5,y+0,y+1,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+-1,y+0,y+1,y+-1,y+1,y+2,y+-1,y+2,y+3,y+-1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+4,y+-1,y+0,y+4,y+5,y+6,y+-1,y+0,y+4,y+5,y+6,y+-1,y+6,y+7,y+8,y+-1,y+6,y+7,y+8,y+-1,y+6,y+7,y+-1,y+0,y+1,y+2,y+5,y+6,y+7,y+-1,y+1,y+2,y+5,y+6,y+7,y+8,y+-1,y+0,y+1,y+3,y+5,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-1,y+1,y+2,y+3,y+4,y+5,y+-1,y+5,y+-1,y+5,y+-1,y+5,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-1,y+0,y+5,y+1,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+-1,y+0,y+1,y+-1,y+1,y+2,y+-1,y+2,y+3,y+-1,y+2,y+-1,y+0,y+1,y+2,y+3,y+4,y+-1,y+4,y+5,y+6,y+-1,y+4,y+5,y+6,y+7,y+-1,y+6,y+7,y+8,y+-1,y+6,y+7,y+8,y+-1,y+6,y+7,y+-1,y+0,y+5,y+6,y+-1,y+5,y+-1,y+0,y+1,y+3,y+5,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-1,y+1,y+2,y+3,y+4,y+5,y+-1,y+5,y+9,y+10,y+11,y+12,y+13,y+14,y+-1,y+5,y+9,y+10,y+11,y+12,y+13,y+14,y+15,y+-1,y+5,y+9,y+10,y+11,y+12,y+13,y+14,y+15,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+9,y+10,y+11,y+12,y+13,y+14,y+15,y+-1,y+5,y+9,y+10,y+11,y+12,y+13,y+14,y+15,y+-1,y+5,y+11,y+12,y+13,y+-1,y+2,y+5,y+-1,y+1,y+2,y+3,y+5,y+-1,y+2,y+5,y+-1,y+5,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+12,y+-1,y+0,y+5,y+0,y+1,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+8,y+12,y+-1,y+0,y+1,y+-1,y+1,y+2,y+-1,y+2,y+3,y+-1,y+3,y+4,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-1,y+4,y+5,y+6,y+-1,y+5,y+6,y+7,y+-1,y+6,y+7,y+8,y+-1,y+6,y+7,y+8,y+-1,y+6,y+7,y+-1,y+0,y+5,y+6,y+-1,y+0,y+5,y+-1,y+0,y+1,y+5,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-1,y+1,y+2,y+3,y+4,y+5,y+8,y+9,y+10,y+11,y+12,y+13,y+-1,y+5,y+6,y+8,y+14,y+15,y+-1,y+0,y+5,y+6,y+8,y+15,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+8,y+15,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+8,y+15,y+-1,y+5,y+6,y+8,y+15,y+-1,y+5,y+8,y+9,y+10,y+14,y+-1,y+2,y+5,y+9,y+10,y+11,y+12,y+13,y+-1,y+1,y+2,y+3,y+5,y+9,y+10,y+11,y+12,y+-1,y+2,y+5,y+9,y+10,y+11,y+12,y+-1,y+5,y+9,y+10,y+11,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+9,y+10,y+11,y+12,y+-1,y+0,y+5,y+9,y+10,y+11,y+1,y+4,y+8,y+9,y+10,y+11,y+12,y+1,y+2,y+3,y+9,y+10,y+11,y+1,y+2,y+3,y+4,y+9,y+10,y+11,y+8,y+9,y+10,y+11,y+12,y+9,y+10,y+11,y+9,y+10,y+11,y+12,y+13,y+9,y+10,y+11,y+9,y+10,y+11,y+9,y+10,y+11,y+10,y+10,y+-1,y+0,y+1,y+-1,y+1,y+2,y+-1,y+2,y+3,y+4,y+5,y+6,y+-1,y+3,y+4,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-1,y+4,y+5,y+6,y+-1,y+5,y+6,y+7,y+-1,y+6,y+7,y+8,y+-1,y+6,y+7,y+8,y+-1,y+6,y+7,y+-1,y+0,y+5,y+6,y+-1,y+5,y+10,y+11,y+12,y+-1,y+0,y+1,y+5,y+10,y+11,y+12,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+8,y+9,y+10,y+11,y+12,y+13,y+-1,y+1,y+2,y+3,y+4,y+5,y+8,y+9,y+10,y+11,y+13,y+-1,y+5,y+6,y+8,y+14,y+15,y+-1,y+0,y+5,y+8,y+15,y+-1,y+0,y+1,y+2,y+3,y+5,y+6,y+7,y+8,y+15,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+8,y+15,y+16,y+-1,y+5,y+6,y+8,y+15,y+-1,y+5,y+8,y+14,y+-1,y+1,y+2,y+3,y+5,y+8,y+12,y+13,y+-1,y+0,y+1,y+2,y+3,y+5,y+8,y+12,y+13,y+-1,y+1,y+2,y+3,y+5,y+8,y+12,y+13,y+-1,y+5,y+8,y+12,y+13,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+8,y+12,y+13,y+-1,y+0,y+5,y+8,y+12,y+13,y+0,y+1,y+4,y+8,y+12,y+13,y+1,y+2,y+3,y+4,y+8,y+12,y+1,y+2,y+3,y+4,y+8,y+12,y+8,y+12,y+8,y+12,y+8,y+12,y+8,y+12,y+8,y+12,y+8,y+12,y+-1,y+0,y+1,y+-1,y+0,y+1,y+2,y+-1,y+2,y+3,y+-1,y+3,y+4,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-1,y+4,y+5,y+6,y+-1,y+5,y+6,y+7,y+-1,y+6,y+7,y+8,y+-1,y+6,y+7,y+8,y+-1,y+6,y+7,y+-1,y+0,y+5,y+6,y+9,y+10,y+11,y+-1,y+5,y+9,y+12,y+-1,y+0,y+1,y+5,y+8,y+9,y+13,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+8,y+9,y+12,y+13,y+-1,y+1,y+2,y+3,y+4,y+5,y+8,y+13,y+-1,y+5,y+6,y+8,y+14,y+15,y+16,y+17,y+-1,y+0,y+5,y+6,y+7,y+8,y+15,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+15,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+8,y+15,y+-1,y+5,y+6,y+8,y+15,y+-1,y+5,y+8,y+14,y+-1,y+0,y+1,y+2,y+3,y+5,y+8,y+12,y+13,y+-1,y+0,y+1,y+2,y+3,y+5,y+8,y+12,y+-1,y+0,y+1,y+2,y+3,y+5,y+8,y+12,y+-1,y+5,y+8,y+12,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+8,y+12,y+-1,y+0,y+5,y+8,y+12,y+1,y+4,y+8,y+12,y+1,y+2,y+3,y+4,y+5,y+8,y+12,y+1,y+2,y+3,y+8,y+12,y+8,y+12,y+8,y+12,y+8,y+12,y+8,y+12,y+13,y+8,y+12,y+13,y+8,y+12,y+13,y+8,y+12,y+13,y+8,y+12,y+-1,y+0,y+1,y+-1,y+1,y+2,y+-1,y+2,y+3,y+4,y+5,y+6,y+-1,y+3,y+4,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-1,y+4,y+5,y+6,y+-1,y+5,y+6,y+7,y+-1,y+6,y+7,y+8,y+-1,y+6,y+7,y+8,y+-1,y+6,y+7,y+-1,y+0,y+5,y+6,y+-1,y+5,y+10,y+11,y+12,y+-1,y+0,y+1,y+5,y+10,y+11,y+12,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+8,y+9,y+10,y+11,y+12,y+13,y+-1,y+1,y+2,y+3,y+4,y+5,y+8,y+9,y+10,y+11,y+13,y+-1,y+5,y+6,y+8,y+14,y+15,y+-1,y+0,y+5,y+8,y+15,y+-1,y+0,y+1,y+2,y+3,y+5,y+6,y+7,y+8,y+15,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+8,y+15,y+16,y+-1,y+5,y+6,y+8,y+15,y+-1,y+5,y+8,y+14,y+-1,y+1,y+2,y+3,y+5,y+8,y+12,y+13,y+-1,y+0,y+1,y+2,y+3,y+5,y+8,y+12,y+13,y+-1,y+1,y+2,y+3,y+5,y+8,y+12,y+13,y+-1,y+5,y+8,y+12,y+13,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+8,y+12,y+13,y+-1,y+0,y+5,y+8,y+12,y+13,y+0,y+1,y+4,y+8,y+12,y+13,y+1,y+2,y+3,y+4,y+8,y+12,y+1,y+2,y+3,y+4,y+8,y+12,y+8,y+12,y+8,y+12,y+8,y+12,y+8,y+12,y+8,y+12,y+8,y+12,y+-1,y+0,y+1,y+-1,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+4,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-1,y+0,y+4,y+5,y+6,y+-1,y+0,y+5,y+6,y+7,y+-1,y+6,y+7,y+8,y+-1,y+6,y+7,y+8,y+-1,y+6,y+7,y+-1,y+0,y+5,y+6,y+-1,y+0,y+5,y+-1,y+0,y+1,y+5,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-1,y+1,y+2,y+3,y+4,y+5,y+8,y+9,y+10,y+11,y+12,y+13,y+-1,y+5,y+6,y+8,y+14,y+15,y+-1,y+0,y+5,y+6,y+8,y+15,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+8,y+15,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+8,y+15,y+-1,y+5,y+6,y+8,y+15,y+-1,y+5,y+8,y+9,y+10,y+14,y+-1,y+2,y+5,y+9,y+10,y+11,y+12,y+13,y+-1,y+1,y+2,y+3,y+5,y+9,y+10,y+11,y+12,y+-1,y+2,y+5,y+9,y+10,y+11,y+12,y+-1,y+5,y+9,y+10,y+11,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+9,y+10,y+11,y+12,y+-1,y+0,y+5,y+9,y+10,y+11,y+1,y+4,y+8,y+9,y+10,y+11,y+12,y+1,y+2,y+3,y+9,y+10,y+11,y+1,y+2,y+3,y+4,y+9,y+10,y+11,y+8,y+9,y+10,y+11,y+12,y+9,y+10,y+11,y+9,y+10,y+11,y+12,y+13,y+9,y+10,y+11,y+9,y+10,y+11,y+9,y+10,y+11,y+10,y+10,y+0,y+-1,y+0,y+1,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+3,y+-1,y+0,y+1,y+3,y+-1,y+0,y+1,y+2,y+3,y+4,y+-1,y+0,y+1,y+4,y+5,y+6,y+-1,y+0,y+4,y+5,y+6,y+7,y+-1,y+6,y+7,y+8,y+-1,y+6,y+7,y+8,y+-1,y+6,y+7,y+-1,y+0,y+5,y+6,y+-1,y+5,y+-1,y+0,y+1,y+3,y+5,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-1,y+1,y+2,y+3,y+4,y+5,y+-1,y+5,y+9,y+10,y+11,y+12,y+13,y+14,y+-1,y+5,y+9,y+10,y+11,y+12,y+13,y+14,y+15,y+-1,y+5,y+9,y+10,y+11,y+12,y+13,y+14,y+15,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+9,y+10,y+11,y+12,y+13,y+14,y+15,y+-1,y+5,y+9,y+10,y+11,y+12,y+13,y+14,y+15,y+-1,y+5,y+11,y+12,y+13,y+-1,y+2,y+5,y+-1,y+1,y+2,y+3,y+5,y+-1,y+2,y+5,y+-1,y+5,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+12,y+-1,y+0,y+5,y+0,y+1,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+8,y+12,y+0,y+-1,y+0,y+1,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+3,y+-1,y+0,y+1,y+3,y+-1,y+0,y+1,y+2,y+3,y+4,y+-1,y+0,y+1,y+4,y+5,y+6,y+-1,y+0,y+4,y+5,y+6,y+-1,y+6,y+7,y+8,y+-1,y+6,y+7,y+8,y+-1,y+6,y+7,y+-1,y+0,y+1,y+2,y+5,y+6,y+7,y+-1,y+1,y+2,y+5,y+6,y+7,y+8,y+-1,y+0,y+1,y+3,y+5,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-1,y+1,y+2,y+3,y+4,y+5,y+-1,y+5,y+-1,y+5,y+-1,y+5,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-1,y+0,y+5,y+1,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+-1,y+0,y+-1,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+4,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+8,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+8,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+8,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-1,y+5,y+-1,y+0,y+1,y+5,y+-1,y+0,y+1,y+5,y+-1,y+0,y+1,y+5,y+-1,y+5,y+-1,y+5,y+-1,y+5,y+-1,y+0,y+1,y+2,y+3,y+5,y+-1,y+0,y+1,y+2,y+3,y+5,y+-1,y+0,y+1,y+2,y+3,y+5,y+-1,y+5,y+-1,y+5,y+-1,y+0,y+5,y+0,y+1,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+-1,y+0,y+1,y+-1,y+1,y+2,y+-1,y+2,y+3,y+-1,y+3,y+4,y+-1,y+4,y+5,y+-1,y+5,y+6,y+-1,y+6,y+7,y+-1,y+7,y+8,y+-1,y+6,y+7,y+8,y+-1,y+6,y+7,y+-1,y+6,y+7,y+-1,y+6,y+7,y+-1,y+4,y+6,y+7,y+-1,y+6,y+7,y+-1,y+6,y+7,y+-1,y+0,y+1,y+5,y+6,y+7,y+-1,y+0,y+5,y+6,y+-1,y+0,y+1,y+5,y+-1,y+5,y+-1,y+5,y+-1,y+5,y+-1,y+0,y+1,y+2,y+5,y+-1,y+0,y+1,y+2,y+3,y+5,y+-1,y+0,y+1,y+2,y+5,y+-1,y+5,y+-1,y+5,y+-1,y+0,y+5,y+1,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+-1,y+0,y+1,y+-1,y+1,y+2,y+-1,y+2,y+3,y+-1,y+3,y+-1,y+4,y+-1,y+5,y+6,y+-1,y+6,y+7,y+-1,y+7,y+8,y+-1,y+0,y+1,y+6,y+7,y+8,y+-1,y+0,y+1,y+6,y+7,y+8,y+-1,y+0,y+1,y+6,y+7,y+8,y+-1,y+0,y+1,y+6,y+7,y+8,y+-1,y+0,y+1,y+6,y+7,y+8,y+-1,y+0,y+1,y+6,y+7,y+8,y+-1,y+0,y+1,y+6,y+7,y+8,y+-1,y+0,y+1,y+5,y+6,y+7,y+8,y+-1,y+0,y+5,y+6,y+-1,y+0,y+1,y+5,y+-1,y+0,y+1,y+5,y+-1,y+0,y+1,y+5,y+-1,y+0,y+1,y+5,y+-1,y+0,y+1,y+5,y+-1,y+0,y+3,y+5,y+-1,y+0,y+1,y+5,y+-1,y+5,y+-1,y+5,y+-1,y+0,y+5,y+0,y+1,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+1,y+2,y+3,y+-1,y+0,y+1,y+-1,y+1,y+2,y+-1,y+2,y+3,y+-1,y+3,y+4,y+-1,y+4,y+-1,y+5,y+6,y+-1,y+6,y+-1,y+7,y+8,y+-1,y+0,y+1,y+3,y+7,y+8,y+-1,y+0,y+3,y+7,y+8,y+-1,y+0,y+3,y+7,y+8,y+-1,y+0,y+1,y+3,y+7,y+8,y+-1,y+0,y+3,y+7,y+8,y+-1,y+0,y+3,y+7,y+8,y+-1,y+0,y+1,y+3,y+7,y+8,y+-1,y+0,y+3,y+5,y+6,y+7,y+8,y+-1,y+0,y+3,y+5,y+6,y+7,y+8,y+-1,y+0,y+1,y+3,y+5,y+6,y+7,y+8,y+-1,y+0,y+3,y+5,y+6,y+7,y+8,y+-1,y+0,y+3,y+5,y+6,y+7,y+8,y+-1,y+0,y+1,y+3,y+5,y+6,y+7,y+8,y+-1,y+0,y+3,y+5,y+6,y+7,y+8,y+-1,y+0,y+3,y+5,y+6,y+7,y+8,y+-1,y+0,y+1,y+3,y+5,y+6,y+7,y+8,y+-1,y+5,y+6,y+7,y+8,y+-1,y+5,y+6,y+7,y+8,y+-1,y+0,y+5,y+6,y+7,y+1,y+4,y+5,y+6,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+-1,y+0,y+1,y+-1,y+1,y+2,y+-1,y+2,y+3,y+4,y+-1,y+3,y+4,y+-1,y+4,y+5,y+-1,y+5,y+6,y+-1,y+6,y+-1,y+6,y+7,y+-1,y+0,y+1,y+3,y+6,y+7,y+-1,y+0,y+3,y+6,y+7,y+-1,y+0,y+3,y+6,y+7,y+-1,y+0,y+1,y+3,y+6,y+7,y+-1,y+0,y+3,y+6,y+7,y+-1,y+0,y+3,y+6,y+7,y+-1,y+0,y+1,y+3,y+6,y+7,y+-1,y+0,y+3,y+6,y+7,y+-1,y+0,y+3,y+6,y+7,y+-1,y+0,y+1,y+3,y+6,y+7,y+-1,y+0,y+3,y+6,y+7,y+-1,y+0,y+3,y+6,y+7,y+-1,y+0,y+1,y+3,y+6,y+7,y+-1,y+0,y+3,y+6,y+7,y+-1,y+0,y+3,y+6,y+7,y+-1,y+0,y+1,y+3,y+6,y+7,y+-1,y+6,y+7,y+-1,y+6,y+7,y+-1,y+0,y+5,y+6,y+0,y+1,y+4,y+5,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+2,y+2,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+3,y+4,y+-1,y+0,y+1,y+2,y+3,y+4,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+8,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+3,y+4,y+3,y+4,y+3,y+4,y+5,y+4,y+5,y+4,y+5,y+0,y+4,y+5,y+6,y+7,y+8,y+9,y+-1,y+1,y+4,y+5,y+0,y+4,y+5,y+0,y+4,y+5,y+-1,y+1,y+4,y+5,y+0,y+4,y+5,y+0,y+4,y+5,y+-1,y+1,y+4,y+5,y+0,y+4,y+5,y+0,y+4,y+5,y+-1,y+1,y+4,y+5,y+0,y+4,y+5,y+0,y+4,y+5,y+-1,y+1,y+4,y+5,y+0,y+4,y+5,y+0,y+4,y+5,y+-1,y+1,y+4,y+5,y+0,y+4,y+5,y+4,y+5,y+4,y+5,y+4,y+4,y+3,y+4,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+2,y+3,y+2,y+3,y+3,y+4,y+0,y+1,y+3,y+4,y+-1,y+0,y+1,y+2,y+3,y+4,y+-2,y+-1,y+0,y+1,y+2,y+4,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+-1,y+1,y+2,y+3,y+4,y+5,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+-1,y+1,y+2,y+3,y+4,y+5,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+-1,y+1,y+2,y+3,y+4,y+5,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+-2,y+-1,y+1,y+2,y+3,y+4,y+5,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+-1,y+1,y+2,y+3,y+4,y+5,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+-1,y+1,y+2,y+3,y+4,y+5,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+-1,y+0,y+1,y+2,y+4,y+5,y+-1,y+0,y+1,y+2,y+4,y+0,y+1,y+4,y+3,y+4,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+2,y+3,y+2,y+3,y+3,y+4,y+0,y+3,y+4,y+-1,y+1,y+3,y+4,y+-2,y+-1,y+1,y+2,y+4,y+-2,y+2,y+4,y+-2,y+2,y+4,y+-2,y+2,y+4,y+-2,y+2,y+4,y+-2,y+2,y+4,y+-2,y+-1,y+2,y+4,y+-2,y+2,y+4,y+-2,y+2,y+4,y+-2,y+2,y+4,y+-2,y+2,y+4,y+-2,y+2,y+4,y+-2,y+2,y+4,y+-2,y+2,y+4,y+-2,y+2,y+4,y+-2,y+2,y+4,y+-2,y+2,y+4,y+-2,y+2,y+4,y+-2,y+2,y+4,y+-2,y+2,y+4,y+-2,y+2,y+4,y+-2,y+-1,y+1,y+2,y+4,y+-1,y+1,y+4,y+0,y+4,y+5,y+6,y+7,y+3,y+4,y+1,y+2,y+3,y+2,y+2,y+3,y+0,y+1,y+3,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+4,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+-2,y+-1,y+0,y+1,y+2,y+4,y+-1,y+0,y+1,y+2,y+4,y+0,y+1,y+4,y+3,y+1,y+2,y+0,y+0,y+0,y+0,y+0,y+0,y+22];
 var Z=[z,z+0,z+0,z+0,z+-32,z+-29,z+-26,z+-23,z+-20,z+-17,z+-40,z+-39,z+-38,z+-37,z+-37,z+-37,z+-36,z+-36,z+-36,z+-36,z+-36,z+-35,z+-35,z+-35,z+-35,z+-35,z+-35,z+-34,z+-34,z+-34,z+-34,z+-34,z+-34,z+-34,z+-33,z+-33,z+-33,z+-33,z+-33,z+-33,z+-33,z+-32,z+-32,z+-32,z+-32,z+-32,z+-32,z+-32,z+-31,z+-31,z+-31,z+-31,z+-31,z+-31,z+-31,z+-30,z+-30,z+-30,z+-30,z+-30,z+-30,z+-30,z+-29,z+-29,z+-29,z+-29,z+-29,z+-29,z+-29,z+-28,z+-28,z+-28,z+-28,z+-28,z+-28,z+-28,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-11,z+-10,z+-10,z+-41,z+-41,z+-41,z+-41,z+-40,z+-40,z+-39,z+-39,z+-38,z+-38,z+-37,z+-37,z+-37,z+-36,z+-36,z+-36,z+-36,z+-35,z+-35,z+-35,z+-35,z+-35,z+-34,z+-34,z+-34,z+-33,z+-33,z+-33,z+-32,z+-32,z+-32,z+-31,z+-31,z+-31,z+-30,z+-30,z+-30,z+-29,z+-29,z+-29,z+-29,z+-28,z+-28,z+-28,z+-27,z+-27,z+-27,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-10,z+-10,z+-10,z+-41,z+-41,z+-41,z+-41,z+-40,z+-40,z+-39,z+-39,z+-38,z+-38,z+-37,z+-37,z+-37,z+-37,z+-36,z+-36,z+-36,z+-36,z+-36,z+-36,z+-35,z+-35,z+-35,z+-35,z+-35,z+-35,z+-34,z+-34,z+-34,z+-34,z+-34,z+-34,z+-34,z+-34,z+-33,z+-33,z+-33,z+-33,z+-33,z+-33,z+-33,z+-33,z+-32,z+-32,z+-32,z+-32,z+-32,z+-32,z+-32,z+-31,z+-31,z+-31,z+-31,z+-31,z+-31,z+-31,z+-31,z+-30,z+-30,z+-30,z+-30,z+-30,z+-30,z+-30,z+-30,z+-29,z+-29,z+-29,z+-29,z+-29,z+-29,z+-29,z+-28,z+-28,z+-28,z+-28,z+-28,z+-28,z+-28,z+-28,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-14,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-11,z+-11,z+-10,z+-10,z+-10,z+-41,z+-41,z+-41,z+-41,z+-40,z+-40,z+-40,z+-40,z+-40,z+-39,z+-39,z+-39,z+-39,z+-39,z+-38,z+-38,z+-37,z+-37,z+-36,z+-36,z+-36,z+-35,z+-35,z+-34,z+-34,z+-33,z+-33,z+-33,z+-33,z+-33,z+-33,z+-33,z+-32,z+-32,z+-32,z+-32,z+-31,z+-31,z+-31,z+-30,z+-30,z+-30,z+-29,z+-29,z+-29,z+-29,z+-28,z+-28,z+-28,z+-27,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-15,z+-15,z+-14,z+-14,z+-13,z+-12,z+-11,z+-11,z+-10,z+-10,z+-10,z+-40,z+-40,z+-40,z+-40,z+-39,z+-39,z+-39,z+-39,z+-38,z+-38,z+-38,z+-38,z+-38,z+-38,z+-37,z+-37,z+-37,z+-37,z+-37,z+-37,z+-36,z+-36,z+-36,z+-36,z+-36,z+-36,z+-36,z+-35,z+-35,z+-35,z+-35,z+-35,z+-35,z+-35,z+-35,z+-34,z+-34,z+-34,z+-34,z+-34,z+-34,z+-34,z+-34,z+-33,z+-33,z+-33,z+-33,z+-33,z+-33,z+-33,z+-33,z+-32,z+-32,z+-32,z+-32,z+-32,z+-32,z+-32,z+-32,z+-31,z+-31,z+-31,z+-31,z+-31,z+-31,z+-31,z+-31,z+-30,z+-30,z+-30,z+-30,z+-30,z+-30,z+-30,z+-30,z+-29,z+-29,z+-29,z+-29,z+-29,z+-29,z+-29,z+-29,z+-28,z+-28,z+-28,z+-28,z+-28,z+-28,z+-28,z+-28,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-25,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-16,z+-16,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-14,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-13,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-40,z+-40,z+-40,z+-39,z+-39,z+-39,z+-38,z+-38,z+-38,z+-38,z+-37,z+-37,z+-37,z+-36,z+-36,z+-36,z+-35,z+-35,z+-35,z+-34,z+-34,z+-33,z+-33,z+-33,z+-32,z+-32,z+-32,z+-32,z+-32,z+-32,z+-31,z+-31,z+-31,z+-31,z+-31,z+-30,z+-30,z+-30,z+-30,z+-30,z+-29,z+-29,z+-29,z+-29,z+-29,z+-29,z+-28,z+-28,z+-28,z+-28,z+-28,z+-27,z+-27,z+-27,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-10,z+-9,z+-8,z+-40,z+-40,z+-40,z+-39,z+-39,z+-39,z+-38,z+-38,z+-38,z+-37,z+-37,z+-37,z+-36,z+-36,z+-35,z+-35,z+-35,z+-34,z+-34,z+-33,z+-33,z+-33,z+-32,z+-32,z+-32,z+-32,z+-32,z+-32,z+-31,z+-31,z+-31,z+-31,z+-31,z+-30,z+-30,z+-30,z+-30,z+-30,z+-29,z+-29,z+-29,z+-29,z+-29,z+-29,z+-28,z+-28,z+-28,z+-28,z+-28,z+-27,z+-27,z+-27,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-11,z+-40,z+-40,z+-40,z+-39,z+-39,z+-39,z+-38,z+-38,z+-38,z+-37,z+-37,z+-36,z+-36,z+-35,z+-35,z+-35,z+-34,z+-34,z+-34,z+-33,z+-33,z+-33,z+-32,z+-32,z+-32,z+-32,z+-32,z+-32,z+-31,z+-31,z+-31,z+-31,z+-31,z+-31,z+-30,z+-30,z+-30,z+-30,z+-30,z+-30,z+-29,z+-29,z+-29,z+-29,z+-29,z+-29,z+-28,z+-28,z+-28,z+-28,z+-28,z+-28,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-15,z+-15,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-40,z+-40,z+-40,z+-39,z+-39,z+-39,z+-38,z+-38,z+-38,z+-37,z+-37,z+-37,z+-36,z+-36,z+-36,z+-35,z+-35,z+-35,z+-35,z+-34,z+-34,z+-34,z+-34,z+-33,z+-33,z+-33,z+-32,z+-32,z+-32,z+-32,z+-31,z+-31,z+-31,z+-30,z+-30,z+-30,z+-29,z+-29,z+-29,z+-28,z+-28,z+-28,z+-28,z+-27,z+-27,z+-27,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-21,z+-21,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-15,z+-15,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-11,z+-40,z+-40,z+-39,z+-39,z+-39,z+-38,z+-38,z+-38,z+-37,z+-37,z+-37,z+-36,z+-36,z+-36,z+-36,z+-36,z+-36,z+-35,z+-35,z+-35,z+-35,z+-35,z+-35,z+-35,z+-35,z+-34,z+-34,z+-34,z+-34,z+-34,z+-34,z+-34,z+-34,z+-34,z+-33,z+-33,z+-33,z+-33,z+-33,z+-33,z+-33,z+-33,z+-33,z+-33,z+-32,z+-32,z+-32,z+-32,z+-32,z+-32,z+-32,z+-32,z+-32,z+-32,z+-31,z+-31,z+-31,z+-31,z+-31,z+-31,z+-31,z+-31,z+-31,z+-30,z+-30,z+-30,z+-30,z+-30,z+-30,z+-30,z+-30,z+-30,z+-30,z+-29,z+-29,z+-29,z+-29,z+-29,z+-29,z+-29,z+-29,z+-29,z+-28,z+-28,z+-28,z+-28,z+-28,z+-28,z+-28,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-21,z+-21,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-15,z+-15,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-11,z+-40,z+-40,z+-40,z+-39,z+-39,z+-39,z+-38,z+-38,z+-38,z+-37,z+-37,z+-37,z+-36,z+-36,z+-36,z+-36,z+-36,z+-36,z+-35,z+-35,z+-35,z+-35,z+-35,z+-34,z+-34,z+-34,z+-34,z+-34,z+-33,z+-33,z+-33,z+-33,z+-32,z+-32,z+-32,z+-32,z+-31,z+-31,z+-31,z+-30,z+-30,z+-30,z+-30,z+-30,z+-30,z+-30,z+-29,z+-29,z+-29,z+-29,z+-29,z+-29,z+-29,z+-28,z+-28,z+-28,z+-28,z+-28,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-24,z+-24,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-11,z+-40,z+-40,z+-40,z+-39,z+-39,z+-39,z+-38,z+-38,z+-38,z+-37,z+-37,z+-36,z+-36,z+-36,z+-36,z+-36,z+-36,z+-35,z+-35,z+-35,z+-35,z+-34,z+-34,z+-34,z+-34,z+-34,z+-33,z+-33,z+-33,z+-33,z+-32,z+-32,z+-32,z+-32,z+-31,z+-31,z+-31,z+-30,z+-30,z+-30,z+-30,z+-29,z+-29,z+-28,z+-28,z+-28,z+-28,z+-28,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-11,z+-10,z+-10,z+-40,z+-40,z+-40,z+-39,z+-39,z+-39,z+-38,z+-38,z+-38,z+-37,z+-37,z+-37,z+-36,z+-36,z+-36,z+-36,z+-36,z+-36,z+-36,z+-35,z+-35,z+-35,z+-35,z+-34,z+-34,z+-34,z+-34,z+-33,z+-33,z+-33,z+-33,z+-32,z+-32,z+-32,z+-32,z+-31,z+-31,z+-31,z+-30,z+-30,z+-30,z+-30,z+-29,z+-29,z+-29,z+-28,z+-28,z+-28,z+-28,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-13,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-11,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-8,z+-8,z+-8,z+-8,z+-8,z+-7,z+-7,z+-7,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-4,z+-3,z+-40,z+-40,z+-40,z+-39,z+-39,z+-39,z+-38,z+-38,z+-38,z+-38,z+-38,z+-38,z+-37,z+-37,z+-37,z+-36,z+-36,z+-36,z+-36,z+-36,z+-36,z+-36,z+-35,z+-35,z+-35,z+-35,z+-34,z+-34,z+-34,z+-34,z+-33,z+-33,z+-33,z+-33,z+-32,z+-32,z+-32,z+-32,z+-31,z+-31,z+-31,z+-30,z+-30,z+-30,z+-30,z+-29,z+-29,z+-29,z+-29,z+-29,z+-28,z+-28,z+-28,z+-28,z+-28,z+-28,z+-28,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-11,z+-11,z+-11,z+-10,z+-10,z+-9,z+-9,z+-8,z+-8,z+-7,z+-7,z+-6,z+-6,z+-5,z+-5,z+-40,z+-40,z+-40,z+-39,z+-39,z+-39,z+-39,z+-38,z+-38,z+-38,z+-37,z+-37,z+-37,z+-36,z+-36,z+-36,z+-36,z+-36,z+-36,z+-36,z+-35,z+-35,z+-35,z+-35,z+-34,z+-34,z+-34,z+-34,z+-33,z+-33,z+-33,z+-33,z+-32,z+-32,z+-32,z+-32,z+-31,z+-31,z+-31,z+-30,z+-30,z+-30,z+-30,z+-30,z+-30,z+-30,z+-29,z+-29,z+-29,z+-29,z+-28,z+-28,z+-28,z+-28,z+-28,z+-28,z+-28,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-11,z+-11,z+-10,z+-10,z+-9,z+-9,z+-8,z+-8,z+-7,z+-7,z+-7,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-3,z+-3,z+-40,z+-40,z+-40,z+-39,z+-39,z+-39,z+-38,z+-38,z+-38,z+-38,z+-38,z+-38,z+-37,z+-37,z+-37,z+-36,z+-36,z+-36,z+-36,z+-36,z+-36,z+-36,z+-35,z+-35,z+-35,z+-35,z+-34,z+-34,z+-34,z+-34,z+-33,z+-33,z+-33,z+-33,z+-32,z+-32,z+-32,z+-32,z+-31,z+-31,z+-31,z+-30,z+-30,z+-30,z+-30,z+-29,z+-29,z+-29,z+-29,z+-29,z+-28,z+-28,z+-28,z+-28,z+-28,z+-28,z+-28,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-11,z+-11,z+-11,z+-10,z+-10,z+-9,z+-9,z+-8,z+-8,z+-7,z+-7,z+-6,z+-6,z+-5,z+-5,z+-40,z+-40,z+-40,z+-39,z+-39,z+-39,z+-39,z+-38,z+-38,z+-38,z+-38,z+-38,z+-37,z+-37,z+-37,z+-37,z+-37,z+-37,z+-36,z+-36,z+-36,z+-36,z+-36,z+-36,z+-36,z+-35,z+-35,z+-35,z+-35,z+-35,z+-34,z+-34,z+-34,z+-34,z+-34,z+-33,z+-33,z+-33,z+-33,z+-32,z+-32,z+-32,z+-32,z+-31,z+-31,z+-31,z+-30,z+-30,z+-30,z+-30,z+-29,z+-29,z+-29,z+-28,z+-28,z+-28,z+-28,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-13,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-11,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-8,z+-8,z+-8,z+-8,z+-8,z+-7,z+-7,z+-7,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-4,z+-3,z+-41,z+-40,z+-40,z+-40,z+-39,z+-39,z+-39,z+-39,z+-39,z+-38,z+-38,z+-38,z+-38,z+-37,z+-37,z+-37,z+-37,z+-36,z+-36,z+-36,z+-36,z+-36,z+-36,z+-35,z+-35,z+-35,z+-35,z+-35,z+-35,z+-34,z+-34,z+-34,z+-34,z+-34,z+-34,z+-33,z+-33,z+-33,z+-33,z+-32,z+-32,z+-32,z+-32,z+-31,z+-31,z+-31,z+-30,z+-30,z+-30,z+-30,z+-29,z+-29,z+-28,z+-28,z+-28,z+-28,z+-28,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-11,z+-10,z+-10,z+-41,z+-40,z+-40,z+-40,z+-39,z+-39,z+-39,z+-39,z+-39,z+-38,z+-38,z+-38,z+-38,z+-37,z+-37,z+-37,z+-37,z+-36,z+-36,z+-36,z+-36,z+-36,z+-36,z+-35,z+-35,z+-35,z+-35,z+-35,z+-35,z+-34,z+-34,z+-34,z+-34,z+-34,z+-33,z+-33,z+-33,z+-33,z+-32,z+-32,z+-32,z+-32,z+-31,z+-31,z+-31,z+-30,z+-30,z+-30,z+-30,z+-30,z+-30,z+-30,z+-29,z+-29,z+-29,z+-29,z+-29,z+-29,z+-29,z+-28,z+-28,z+-28,z+-28,z+-28,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-24,z+-24,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-11,z+-40,z+-40,z+-39,z+-39,z+-39,z+-39,z+-38,z+-38,z+-38,z+-38,z+-38,z+-37,z+-37,z+-37,z+-37,z+-37,z+-36,z+-36,z+-36,z+-36,z+-36,z+-36,z+-35,z+-35,z+-35,z+-35,z+-35,z+-35,z+-35,z+-35,z+-34,z+-34,z+-34,z+-34,z+-34,z+-34,z+-34,z+-34,z+-34,z+-33,z+-33,z+-33,z+-33,z+-33,z+-33,z+-33,z+-33,z+-33,z+-33,z+-32,z+-32,z+-32,z+-32,z+-32,z+-32,z+-32,z+-32,z+-32,z+-32,z+-31,z+-31,z+-31,z+-31,z+-31,z+-31,z+-31,z+-31,z+-31,z+-30,z+-30,z+-30,z+-30,z+-30,z+-30,z+-30,z+-30,z+-30,z+-30,z+-29,z+-29,z+-29,z+-29,z+-29,z+-29,z+-29,z+-29,z+-29,z+-28,z+-28,z+-28,z+-28,z+-28,z+-28,z+-28,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-21,z+-21,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-15,z+-15,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-11,z+-40,z+-40,z+-40,z+-39,z+-39,z+-39,z+-38,z+-38,z+-38,z+-37,z+-37,z+-37,z+-36,z+-36,z+-36,z+-35,z+-35,z+-35,z+-34,z+-34,z+-34,z+-33,z+-33,z+-33,z+-32,z+-32,z+-32,z+-32,z+-31,z+-31,z+-31,z+-30,z+-30,z+-30,z+-29,z+-29,z+-29,z+-28,z+-28,z+-28,z+-28,z+-27,z+-27,z+-27,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-21,z+-21,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-15,z+-15,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-11,z+-40,z+-40,z+-40,z+-39,z+-39,z+-39,z+-38,z+-38,z+-38,z+-37,z+-37,z+-36,z+-36,z+-35,z+-35,z+-35,z+-34,z+-34,z+-34,z+-33,z+-33,z+-33,z+-32,z+-32,z+-32,z+-32,z+-32,z+-32,z+-31,z+-31,z+-31,z+-31,z+-31,z+-31,z+-30,z+-30,z+-30,z+-30,z+-30,z+-30,z+-29,z+-29,z+-29,z+-29,z+-29,z+-29,z+-28,z+-28,z+-28,z+-28,z+-28,z+-28,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-15,z+-15,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-40,z+-40,z+-40,z+-39,z+-39,z+-39,z+-38,z+-38,z+-38,z+-37,z+-37,z+-37,z+-36,z+-36,z+-35,z+-35,z+-35,z+-34,z+-34,z+-33,z+-33,z+-33,z+-32,z+-32,z+-32,z+-32,z+-32,z+-32,z+-31,z+-31,z+-31,z+-31,z+-31,z+-30,z+-30,z+-30,z+-30,z+-30,z+-29,z+-29,z+-29,z+-29,z+-29,z+-29,z+-28,z+-28,z+-28,z+-28,z+-28,z+-27,z+-27,z+-27,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-11,z+-40,z+-40,z+-40,z+-39,z+-39,z+-39,z+-38,z+-38,z+-38,z+-38,z+-37,z+-37,z+-37,z+-36,z+-36,z+-36,z+-35,z+-35,z+-35,z+-34,z+-34,z+-33,z+-33,z+-33,z+-32,z+-32,z+-32,z+-32,z+-32,z+-32,z+-31,z+-31,z+-31,z+-31,z+-31,z+-30,z+-30,z+-30,z+-30,z+-30,z+-29,z+-29,z+-29,z+-29,z+-29,z+-29,z+-28,z+-28,z+-28,z+-28,z+-28,z+-27,z+-27,z+-27,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-10,z+-9,z+-8,z+-40,z+-40,z+-40,z+-40,z+-39,z+-39,z+-39,z+-39,z+-38,z+-38,z+-38,z+-38,z+-38,z+-38,z+-37,z+-37,z+-37,z+-37,z+-37,z+-37,z+-36,z+-36,z+-36,z+-36,z+-36,z+-36,z+-36,z+-35,z+-35,z+-35,z+-35,z+-35,z+-35,z+-35,z+-35,z+-34,z+-34,z+-34,z+-34,z+-34,z+-34,z+-34,z+-34,z+-33,z+-33,z+-33,z+-33,z+-33,z+-33,z+-33,z+-33,z+-32,z+-32,z+-32,z+-32,z+-32,z+-32,z+-32,z+-32,z+-31,z+-31,z+-31,z+-31,z+-31,z+-31,z+-31,z+-31,z+-30,z+-30,z+-30,z+-30,z+-30,z+-30,z+-30,z+-30,z+-29,z+-29,z+-29,z+-29,z+-29,z+-29,z+-29,z+-29,z+-28,z+-28,z+-28,z+-28,z+-28,z+-28,z+-28,z+-28,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-25,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-16,z+-16,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-14,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-13,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-41,z+-41,z+-41,z+-41,z+-40,z+-40,z+-40,z+-40,z+-40,z+-39,z+-39,z+-39,z+-39,z+-39,z+-38,z+-38,z+-37,z+-37,z+-36,z+-36,z+-36,z+-35,z+-35,z+-34,z+-34,z+-33,z+-33,z+-33,z+-33,z+-33,z+-33,z+-33,z+-32,z+-32,z+-32,z+-32,z+-31,z+-31,z+-31,z+-30,z+-30,z+-30,z+-29,z+-29,z+-29,z+-29,z+-28,z+-28,z+-28,z+-27,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-15,z+-15,z+-14,z+-14,z+-13,z+-12,z+-11,z+-11,z+-10,z+-10,z+-10,z+-41,z+-41,z+-41,z+-41,z+-40,z+-40,z+-39,z+-39,z+-38,z+-38,z+-37,z+-37,z+-37,z+-37,z+-36,z+-36,z+-36,z+-36,z+-36,z+-36,z+-35,z+-35,z+-35,z+-35,z+-35,z+-35,z+-34,z+-34,z+-34,z+-34,z+-34,z+-34,z+-34,z+-34,z+-33,z+-33,z+-33,z+-33,z+-33,z+-33,z+-33,z+-33,z+-32,z+-32,z+-32,z+-32,z+-32,z+-32,z+-32,z+-31,z+-31,z+-31,z+-31,z+-31,z+-31,z+-31,z+-31,z+-30,z+-30,z+-30,z+-30,z+-30,z+-30,z+-30,z+-30,z+-29,z+-29,z+-29,z+-29,z+-29,z+-29,z+-29,z+-28,z+-28,z+-28,z+-28,z+-28,z+-28,z+-28,z+-28,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-14,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-11,z+-11,z+-10,z+-10,z+-10,z+-41,z+-41,z+-41,z+-41,z+-40,z+-40,z+-39,z+-39,z+-38,z+-38,z+-37,z+-37,z+-37,z+-36,z+-36,z+-36,z+-36,z+-35,z+-35,z+-35,z+-35,z+-35,z+-34,z+-34,z+-34,z+-33,z+-33,z+-33,z+-32,z+-32,z+-32,z+-31,z+-31,z+-31,z+-30,z+-30,z+-30,z+-29,z+-29,z+-29,z+-29,z+-28,z+-28,z+-28,z+-27,z+-27,z+-27,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-10,z+-10,z+-10,z+-40,z+-39,z+-38,z+-37,z+-37,z+-37,z+-36,z+-36,z+-36,z+-36,z+-36,z+-35,z+-35,z+-35,z+-35,z+-35,z+-35,z+-34,z+-34,z+-34,z+-34,z+-34,z+-34,z+-34,z+-33,z+-33,z+-33,z+-33,z+-33,z+-33,z+-33,z+-32,z+-32,z+-32,z+-32,z+-32,z+-32,z+-32,z+-31,z+-31,z+-31,z+-31,z+-31,z+-31,z+-31,z+-30,z+-30,z+-30,z+-30,z+-30,z+-30,z+-30,z+-29,z+-29,z+-29,z+-29,z+-29,z+-29,z+-29,z+-28,z+-28,z+-28,z+-28,z+-28,z+-28,z+-28,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-11,z+-10,z+-10,z+-32,z+-29,z+-26,z+-23,z+-20,z+-17,z+-43];
 var I=[0,0,57,0,35,35,35,35,35,35,109,109,109,173,66,109,173,173,173,66,109,109,173,173,173,66,139,173,173,173,173,173,66,139,173,173,43,173,173,66,139,173,43,22,43,173,66,139,173,173,43,173,173,66,139,173,173,43,173,173,66,139,173,43,22,43,173,66,139,173,173,43,173,173,66,139,173,173,43,173,173,66,139,173,43,22,43,173,66,139,173,173,43,173,173,66,139,173,173,43,173,173,66,139,173,43,22,43,173,66,139,173,173,43,173,173,66,139,173,173,43,173,173,66,139,173,43,22,43,173,66,139,173,173,43,173,173,66,139,173,173,43,173,173,66,139,173,43,22,43,173,66,139,173,173,43,173,173,66,139,173,173,173,173,173,66,139,109,173,173,173,66,139,173,173,173,66,139,173,66,139,109,109,109,109,42,42,109,42,44,42,109,42,44,173,42,44,173,173,42,109,109,173,173,109,22,173,173,22,173,173,22,173,173,22,173,173,22,173,173,22,173,44,173,22,173,173,22,173,173,22,173,173,22,173,173,22,173,173,22,173,173,22,173,173,22,173,173,22,173,173,22,173,173,22,173,173,22,173,173,22,173,173,22,173,173,22,109,173,173,109,22,173,173,22,173,22,139,139,35,42,109,109,42,109,109,42,42,109,42,44,42,109,42,44,173,66,42,44,173,35,173,66,42,109,109,173,35,173,66,22,173,35,35,35,173,66,42,109,173,35,35,35,173,66,22,109,173,35,35,173,66,42,109,173,35,35,35,173,66,42,22,173,35,35,35,173,66,42,109,173,35,35,173,66,42,22,173,35,35,35,173,66,42,109,173,35,35,35,173,66,42,22,173,35,35,173,66,42,109,173,35,35,35,173,66,42,173,35,35,35,173,66,42,173,35,35,173,66,42,109,173,35,35,35,173,66,42,22,173,35,35,35,173,66,42,109,173,35,35,173,66,42,22,173,35,35,35,173,66,42,109,173,35,35,35,173,66,42,22,173,35,35,173,66,42,109,173,35,35,35,173,66,42,173,35,35,35,173,66,42,109,109,173,35,173,66,42,109,173,35,173,66,173,173,66,42,42,109,109,42,109,109,42,42,109,109,22,22,42,44,109,22,22,42,109,42,44,42,44,42,109,139,42,139,22,109,43,42,139,139,139,139,35,43,43,42,42,43,42,42,43,42,42,43,43,42,42,43,42,42,43,42,42,43,43,42,42,43,42,109,43,42,109,43,43,42,42,43,42,42,43,42,42,43,43,42,42,43,42,42,43,42,42,43,43,42,42,43,42,109,42,42,42,109,42,173,42,109,109,42,109,109,42,42,44,98,98,42,109,98,98,98,42,139,139,98,98,98,98,42,139,98,98,98,98,98,42,139,98,98,98,98,98,98,42,139,98,98,98,98,98,98,42,139,98,98,98,98,98,98,42,139,98,42,98,98,98,98,98,109,98,98,98,98,98,98,98,109,98,98,98,98,98,98,98,109,98,42,98,98,98,98,98,109,98,98,98,98,98,98,98,109,98,98,98,98,98,98,98,109,98,42,98,98,98,98,98,109,98,98,98,98,98,98,42,139,139,98,98,98,98,98,98,42,139,139,98,42,98,98,98,98,98,109,98,98,98,98,98,98,98,109,98,98,98,98,98,98,98,109,98,42,98,98,98,98,98,109,98,98,98,98,98,98,98,109,98,98,98,98,98,98,98,109,98,42,98,98,98,98,98,109,98,98,98,98,98,98,42,139,139,35,98,98,98,98,98,98,98,109,98,98,98,98,98,98,109,98,98,98,98,139,139,35,98,98,98,139,109,98,139,109,22,109,98,42,44,42,42,43,139,42,98,139,42,98,139,42,42,139,42,98,42,42,109,42,42,35,109,42,44,42,156,109,42,109,42,156,109,42,44,42,42,35,109,42,109,42,156,109,42,44,42,156,109,42,109,42,42,35,109,42,44,42,156,109,42,109,42,156,109,42,44,42,42,35,109,42,109,42,156,109,42,44,42,156,109,42,109,42,42,35,109,42,44,42,156,109,42,109,42,156,109,42,44,42,42,35,109,42,109,42,42,44,42,42,109,109,42,42,44,139,42,42,109,42,22,42,44,109,139,109,139,139,35,109,173,139,98,42,109,42,42,44,42,98,139,42,98,42,22,139,42,98,42,42,109,42,41,35,44,42,109,42,156,44,42,109,42,156,44,42,109,42,41,35,44,42,109,42,156,44,42,109,42,156,44,42,109,42,41,35,44,42,109,42,156,44,44,43,42,109,42,156,44,44,109,42,109,42,41,35,44,44,109,42,109,42,156,44,44,109,42,109,42,156,44,44,109,42,109,42,41,35,44,44,109,42,109,42,156,44,44,109,42,109,42,156,44,44,109,42,109,42,41,35,44,44,109,42,109,42,44,109,42,109,42,44,109,42,109,109,42,43,173,109,42,43,173,109,42,22,109,42,109,42,89,44,109,173,139,98,42,109,42,42,44,42,98,42,98,42,22,139,42,42,139,42,42,109,42,41,35,42,139,139,42,41,35,42,139,44,42,41,35,42,139,139,42,41,35,42,139,44,42,41,35,42,139,139,42,41,35,42,139,44,42,41,35,42,139,139,42,41,35,44,42,139,44,42,156,139,109,42,41,35,139,42,41,35,139,42,41,35,139,42,41,35,139,42,41,35,139,42,156,44,139,42,41,35,139,42,139,42,139,109,42,98,139,42,42,109,42,22,22,139,139,139,35,109,42,44,109,173,139,98,42,109,42,42,44,42,42,139,42,42,139,42,35,42,139,42,35,42,139,42,42,109,42,42,139,44,42,42,109,42,42,109,42,42,109,42,35,42,109,42,42,109,42,42,109,42,41,35,44,42,109,42,156,139,109,42,41,35,139,42,139,42,139,42,139,42,41,35,109,139,42,41,35,43,109,139,42,41,35,109,139,42,139,42,139,109,42,98,42,42,109,42,22,43,22,109,109,42,22,139,109,173,98,42,109,42,42,109,42,42,139,42,22,22,22,42,139,42,71,71,42,42,42,139,109,42,71,71,42,42,42,42,42,139,42,42,42,42,42,42,22,42,42,109,42,42,42,42,42,22,42,42,139,139,42,42,42,42,22,42,42,42,109,42,42,42,22,42,42,139,139,139,139,42,42,22,42,42,42,139,139,139,42,22,22,22,22,35,22,42,109,109,109,109,109,22,42,42,42,41,35,42,42,41,35,42,42,41,35,42,42,42,42,42,42,42,42,109,109,43,109,42,42,41,41,35,109,42,42,109,109,43,109,42,42,42,42,42,109,42,98,139,42,42,139,42,22,43,22,139,109,42,22,139,109,42,139,98,42,139,42,42,109,42,42,139,42,43,43,43,42,139,42,35,42,139,109,42,35,109,42,22,42,109,22,109,42,42,139,44,42,42,109,42,109,35,35,139,139,139,42,35,35,139,139,139,139,42,42,35,44,22,42,109,42,42,42,42,42,42,109,109,109,109,22,42,42,42,42,42,42,42,43,43,43,43,43,42,42,22,41,41,41,22,42,42,22,41,41,41,22,42,42,22,41,41,41,22,42,42,22,41,95,41,22,42,42,22,41,41,41,22,42,42,22,41,41,41,22,42,42,22,41,41,41,22,42,109,42,98,42,42,109,42,22,43,22,109,109,42,22,139,109,42,139,98,42,139,42,42,109,42,42,42,43,43,43,42,139,42,42,139,109,42,109,42,42,139,42,109,42,109,42,42,139,139,42,42,109,42,109,22,109,42,22,42,42,35,44,22,42,109,42,42,42,42,22,42,109,109,109,109,42,42,42,42,42,43,43,43,109,42,42,109,42,139,42,139,42,139,42,42,109,42,139,42,139,42,139,42,22,41,41,41,22,42,109,42,139,42,139,42,139,42,42,42,42,43,43,43,43,109,42,42,22,22,22,42,20,109,42,20,11,20,109,42,20,109,42,109,42,22,41,41,41,22,42,139,109,42,98,139,42,42,109,42,22,22,139,139,109,42,44,139,139,139,109,42,44,98,42,139,42,42,139,42,42,139,42,43,43,43,43,42,139,42,109,42,139,42,109,42,139,42,109,42,109,42,42,139,44,42,42,109,42,35,42,109,42,35,42,42,42,35,42,42,109,42,42,42,42,42,42,109,109,109,109,22,42,42,42,155,155,109,42,42,109,43,42,109,42,54,139,109,98,43,42,42,42,42,42,42,139,109,98,43,42,42,42,42,42,42,139,109,98,43,42,42,109,43,42,42,42,42,42,42,98,42,20,22,42,42,42,22,98,42,20,11,20,22,22,42,22,98,42,20,22,22,42,22,109,42,22,42,42,42,42,22,41,41,41,22,42,42,22,42,139,109,42,98,42,22,42,42,42,109,42,22,42,109,42,22,22,139,22,139,109,42,44,139,139,155,139,139,22,155,22,139,22,155,22,22,155,22,139,139,139,22,139,139,22,139,139,22,139,22,139,109,42,139,98,42,139,42,42,139,139,139,35,42,42,44,42,43,43,43,43,42,44,42,109,42,139,42,109,42,139,42,109,42,109,42,42,139,139,42,42,109,42,109,42,109,42,42,42,42,109,42,42,35,42,42,42,42,42,109,42,42,42,42,22,109,109,42,42,42,109,42,109,109,109,109,42,155,42,42,42,42,42,42,109,98,42,109,42,109,139,155,43,42,139,35,35,35,139,43,43,43,43,42,42,42,42,42,42,139,155,43,139,42,42,109,98,42,42,42,155,43,42,22,22,22,22,42,42,109,42,44,22,11,22,139,22,22,109,42,22,22,22,139,22,22,109,42,22,42,42,109,42,22,41,41,41,22,109,42,42,109,109,42,98,42,42,109,139,42,42,42,42,109,42,22,22,139,139,139,109,42,44,139,139,139,22,22,22,22,22,22,139,139,139,139,139,139,109,22,44,98,42,42,44,42,42,44,42,42,44,42,43,43,43,43,42,44,42,109,42,139,42,109,42,44,42,109,42,109,42,42,139,44,42,42,109,42,109,42,109,109,22,22,42,42,22,22,42,42,35,22,109,22,22,42,109,42,42,42,42,42,155,22,22,22,42,109,109,109,109,42,155,22,42,42,109,98,22,139,139,139,42,139,139,43,43,43,22,42,139,139,139,35,35,133,22,42,42,42,42,42,42,139,43,43,43,22,42,42,109,98,42,42,42,155,43,42,41,41,20,41,22,42,42,109,42,41,41,11,22,139,42,42,42,41,41,20,41,139,42,42,42,22,42,42,42,22,41,41,41,22,109,22,22,109,42,98,22,22,42,42,22,22,42,22,22,139,139,22,22,109,42,44,155,155,155,155,155,155,155,155,22,22,109,22,22,109,22,22,109,22,22,109,109,109,109,42,139,98,42,139,42,42,139,139,139,35,42,42,44,42,43,43,43,43,42,44,42,109,42,139,42,109,42,139,42,109,42,109,42,42,139,139,42,42,109,42,109,42,109,42,42,42,42,109,42,42,35,42,42,42,42,42,109,42,42,42,42,22,109,109,42,42,42,109,42,109,109,109,109,42,155,42,42,42,42,42,42,109,98,42,109,42,109,139,155,43,42,139,35,35,35,139,43,43,43,43,42,42,42,42,42,42,139,155,43,139,42,42,109,98,42,42,42,155,43,42,22,22,22,22,42,42,109,42,44,22,11,22,139,22,22,109,42,22,22,22,139,22,22,109,42,22,42,42,109,42,22,41,41,41,22,109,42,42,109,109,42,98,42,42,109,139,42,42,42,42,109,42,22,22,139,139,139,109,42,44,139,139,139,22,22,22,22,22,22,139,139,139,139,139,139,109,42,44,98,42,43,44,42,22,22,42,139,42,22,22,22,42,139,42,43,22,22,43,42,139,42,109,109,42,139,42,109,109,42,139,42,109,42,109,42,42,139,44,42,42,109,42,35,42,109,42,35,42,42,42,35,42,42,109,42,42,42,42,42,42,109,109,109,109,22,42,42,42,155,155,109,42,42,109,43,42,109,42,54,139,109,98,43,42,42,42,42,42,42,139,109,98,43,42,42,42,42,42,42,139,109,98,43,42,42,109,43,42,42,42,42,42,42,98,42,20,22,42,42,42,22,98,42,20,11,20,22,22,42,22,98,42,20,22,22,42,22,109,42,22,42,42,42,42,22,41,41,41,22,42,42,22,42,139,109,42,98,42,22,42,42,42,109,42,22,42,109,42,22,22,139,22,139,109,42,44,139,139,155,139,139,22,155,22,139,22,155,22,22,155,22,139,139,139,22,139,139,22,139,139,22,139,22,139,65,109,42,35,98,44,71,71,44,42,44,35,109,42,44,35,139,42,43,71,71,42,139,42,44,35,42,139,109,42,109,109,42,42,139,42,109,42,109,42,42,139,139,42,42,109,42,109,22,109,42,22,42,42,35,44,22,42,109,42,42,42,42,22,42,109,109,109,109,42,42,42,42,42,43,43,43,109,42,42,109,42,139,42,139,42,139,42,42,109,42,139,42,139,42,139,42,22,41,41,41,22,42,109,42,139,42,139,42,139,42,42,42,42,43,43,43,43,109,42,42,22,22,22,42,20,109,42,20,11,20,109,42,20,109,42,109,42,22,41,41,41,22,42,139,109,42,98,139,42,42,109,42,22,22,139,139,109,42,44,139,139,139,65,109,42,35,98,44,71,71,44,42,44,35,109,42,44,35,139,42,43,71,71,42,139,42,44,35,42,139,109,42,109,109,42,22,42,109,22,109,42,42,139,44,42,42,109,42,109,35,35,139,139,139,42,35,35,139,139,139,139,42,42,35,44,22,42,109,42,42,42,42,42,42,109,109,109,109,22,42,42,42,42,42,42,42,43,43,43,43,43,42,42,22,41,41,41,22,42,42,22,41,41,41,22,42,42,22,41,41,41,22,42,42,22,41,95,41,22,42,42,22,41,41,41,22,42,42,22,41,41,41,22,42,42,22,41,41,41,22,42,109,42,98,42,42,109,42,22,43,22,109,109,42,22,139,109,173,98,42,43,44,42,22,22,42,109,42,22,22,22,139,42,22,22,22,42,139,42,42,42,42,42,42,139,109,42,42,42,42,42,42,42,42,139,42,42,42,42,42,42,22,42,42,109,42,42,42,42,42,22,42,42,139,139,42,42,42,42,22,42,42,42,109,42,42,42,22,42,42,139,139,139,139,42,42,22,42,42,42,139,139,139,42,22,22,22,22,35,22,42,109,109,109,109,109,22,42,42,42,41,35,42,42,41,35,42,42,41,35,42,42,42,42,42,42,42,42,109,109,43,109,42,42,41,41,35,109,42,42,109,109,43,109,42,42,42,42,42,109,42,98,139,42,42,139,42,22,43,22,139,109,42,22,139,109,173,139,98,42,109,42,42,44,42,42,139,42,42,139,42,42,139,42,42,139,42,42,109,42,42,139,44,42,42,109,42,42,109,42,42,109,42,35,42,109,42,42,109,42,42,109,42,41,35,44,42,109,42,156,139,109,42,41,35,139,42,139,42,139,42,139,42,41,35,109,139,42,41,35,43,109,139,42,41,35,109,139,42,139,42,139,109,42,98,42,42,109,42,22,43,22,109,109,42,22,139,109,173,139,98,42,109,42,42,44,42,98,42,98,42,22,139,42,42,139,42,42,109,42,41,35,42,139,139,42,41,35,42,139,44,42,41,35,42,139,139,42,41,35,42,139,44,42,41,35,42,139,139,42,41,35,42,139,44,42,41,35,42,139,139,42,41,35,44,42,139,44,42,156,139,109,42,41,35,139,42,41,35,139,42,41,35,139,42,41,35,139,42,41,35,139,42,156,44,139,42,41,35,139,42,139,42,139,109,42,98,139,42,42,109,42,22,22,139,139,139,35,109,42,44,109,173,139,98,42,109,42,42,44,42,98,139,42,98,42,22,139,42,98,42,42,109,42,41,35,44,42,109,42,156,44,42,109,42,156,44,42,109,42,41,35,44,42,109,42,156,44,42,109,42,156,44,42,109,42,41,35,44,42,109,42,156,44,44,43,42,109,42,156,44,44,109,42,109,42,41,35,44,44,109,42,109,42,156,44,44,109,42,109,42,156,44,44,109,42,109,42,41,35,44,44,109,42,109,42,156,44,44,109,42,109,42,156,44,44,109,42,109,42,41,35,44,44,109,42,109,42,44,109,42,109,42,44,109,42,109,109,42,43,173,109,42,43,173,109,42,22,109,42,109,42,89,44,109,22,109,98,42,44,42,42,43,139,42,98,139,42,98,139,42,42,139,42,98,42,42,109,42,42,35,109,42,44,42,156,109,42,109,42,156,109,42,44,42,42,35,109,42,109,42,156,109,42,44,42,156,109,42,109,42,42,35,109,42,44,42,156,109,42,109,42,156,109,42,44,42,42,35,109,42,109,42,156,109,42,44,42,156,109,42,109,42,42,35,109,42,44,42,156,109,42,109,42,156,109,42,44,42,42,35,109,42,109,42,42,44,42,42,109,109,42,42,44,139,42,42,109,42,22,42,44,109,139,109,139,139,35,109,42,42,44,98,98,42,109,98,98,98,42,139,139,98,98,98,98,42,139,98,98,98,98,98,42,139,98,98,98,98,98,98,42,139,98,98,98,98,98,98,42,139,98,98,98,98,98,98,42,139,98,42,98,98,98,98,98,109,98,98,98,98,98,98,98,109,98,98,98,98,98,98,98,109,98,42,98,98,98,98,98,109,98,98,98,98,98,98,98,109,98,98,98,98,98,98,98,109,98,42,98,98,98,98,98,109,98,98,98,98,98,98,42,139,139,98,98,98,98,98,98,42,139,139,98,42,98,98,98,98,98,109,98,98,98,98,98,98,98,109,98,98,98,98,98,98,98,109,98,42,98,98,98,98,98,109,98,98,98,98,98,98,98,109,98,98,98,98,98,98,98,109,98,42,98,98,98,98,98,109,98,98,98,98,98,98,42,139,139,35,98,98,98,98,98,98,98,109,98,98,98,98,98,98,109,98,98,98,98,139,139,35,98,98,98,139,109,98,139,109,42,42,109,109,22,22,42,44,109,22,22,42,109,42,44,42,44,42,109,139,42,139,22,109,43,42,139,139,139,139,35,43,43,42,42,43,42,42,43,42,42,43,43,42,42,43,42,42,43,42,42,43,43,42,42,43,42,109,43,42,109,43,43,42,42,43,42,42,43,42,42,43,43,42,42,43,42,42,43,42,42,43,43,42,42,43,42,109,42,42,42,109,42,173,42,109,109,42,109,109,42,42,109,42,44,42,109,42,44,173,66,42,44,173,35,173,66,42,109,109,173,35,173,66,22,173,35,35,35,173,66,42,109,173,35,35,35,173,66,22,109,173,35,35,173,66,42,109,173,35,35,35,173,66,42,22,173,35,35,35,173,66,42,109,173,35,35,173,66,42,22,173,35,35,35,173,66,42,109,173,35,35,35,173,66,42,22,173,35,35,173,66,42,109,173,35,35,35,173,66,42,173,35,35,35,173,66,42,173,35,35,173,66,42,109,173,35,35,35,173,66,42,22,173,35,35,35,173,66,42,109,173,35,35,173,66,42,22,173,35,35,35,173,66,42,109,173,35,35,35,173,66,42,22,173,35,35,173,66,42,109,173,35,35,35,173,66,42,173,35,35,35,173,66,42,109,109,173,35,173,66,42,109,173,35,173,66,173,173,66,42,42,109,109,42,109,109,42,42,109,42,44,42,109,42,44,173,42,44,173,173,42,109,109,173,173,109,22,173,173,22,173,173,22,173,173,22,173,173,22,173,173,22,173,44,173,22,173,173,22,173,173,22,173,173,22,173,173,22,173,173,22,173,173,22,173,173,22,173,173,22,173,173,22,173,173,22,173,173,22,173,173,22,173,173,22,173,173,22,109,173,173,109,22,173,173,22,173,22,139,139,35,42,109,109,42,109,109,109,109,173,66,109,173,173,173,66,109,109,173,173,173,66,139,173,173,173,173,173,66,139,173,173,43,173,173,66,139,173,43,22,43,173,66,139,173,173,43,173,173,66,139,173,173,43,173,173,66,139,173,43,22,43,173,66,139,173,173,43,173,173,66,139,173,173,43,173,173,66,139,173,43,22,43,173,66,139,173,173,43,173,173,66,139,173,173,43,173,173,66,139,173,43,22,43,173,66,139,173,173,43,173,173,66,139,173,173,43,173,173,66,139,173,43,22,43,173,66,139,173,173,43,173,173,66,139,173,173,43,173,173,66,139,173,43,22,43,173,66,139,173,173,43,173,173,66,139,173,173,173,173,173,66,139,109,173,173,173,66,139,173,173,173,66,139,173,66,139,109,109,109,35,35,35,35,35,35,0];
 var D=[0,0,0,0,2,2,2,2,2,2,0,0,0,0,5,0,0,0,0,0,0,6,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,4,0,0,0,0,0,0,0,4,0,0,7,0,6,0,0,2,0,0,0,2,0,0,0,0,0,0,0,0,2,6,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,3,0,0,0,0,0,0,0,0,5,0,3,7,0,3,6,0,0,2,0,0,0,2,0,0,0,5,0,0,0,15,0,0,0,2,6,0,15,0,5,0,0,15,15,15,0,0,0,2,0,15,15,15,0,0,0,0,0,15,15,0,0,0,0,0,15,15,15,0,0,0,0,0,15,15,15,0,0,0,0,0,15,15,0,0,0,0,0,15,15,15,0,0,0,0,0,15,15,15,0,0,0,0,0,15,15,0,0,0,0,0,15,15,15,0,0,0,0,15,15,15,0,0,0,0,15,15,0,0,0,0,0,15,15,15,0,0,0,0,0,15,15,15,0,0,0,0,0,15,15,0,0,0,0,0,15,15,15,0,0,0,0,0,15,15,15,0,0,0,0,0,15,15,0,0,0,0,0,15,15,15,0,0,0,0,15,15,15,0,0,0,0,7,0,15,0,4,0,3,0,15,0,0,0,0,4,0,0,3,7,0,3,6,0,0,2,4,0,0,0,0,4,0,0,0,2,0,0,0,0,0,2,0,0,0,0,2,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,3,7,0,3,6,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,5,0,0,0,0,7,0,0,6,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,3,1,0,0,0,1,1,0,2,0,1,1,0,0,0,0,3,1,0,2,0,1,1,0,0,0,1,1,0,2,0,0,3,1,0,0,0,1,1,0,2,0,1,1,0,0,0,0,3,1,0,2,0,1,1,0,0,0,1,1,0,2,0,0,3,1,0,0,0,1,1,0,2,0,1,1,0,0,0,0,3,1,0,2,0,0,0,0,0,2,7,0,0,0,0,0,0,2,0,0,0,0,7,0,2,0,0,3,6,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,13,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,9,0,0,0,0,1,0,8,0,0,0,0,1,0,8,4,0,0,0,0,8,0,8,4,0,0,0,1,0,8,4,0,0,0,1,0,8,4,0,0,0,0,11,0,8,4,0,0,0,1,0,8,4,0,0,0,1,0,8,4,0,0,0,0,12,0,8,4,0,0,0,8,4,0,0,0,8,4,0,0,7,0,0,0,3,0,0,0,7,0,0,6,0,7,0,0,0,6,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,11,0,0,0,0,0,12,0,0,0,0,0,13,0,0,0,0,0,14,0,0,0,0,0,15,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,0,0,11,8,0,0,0,0,1,0,3,0,0,9,0,0,0,10,0,0,0,11,0,0,0,12,0,0,0,13,0,0,1,0,0,0,0,13,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,5,7,0,0,6,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,3,0,0,1,0,0,1,0,10,0,1,0,0,1,0,0,1,0,0,12,8,0,1,0,1,0,3,0,0,1,0,0,0,0,0,0,0,0,0,14,2,0,0,0,15,0,0,0,0,0,14,3,0,0,0,0,0,7,0,0,0,0,3,0,0,0,0,3,7,0,0,0,6,0,0,0,2,0,0,2,0,0,0,0,0,0,0,0,0,0,2,9,0,0,0,0,2,0,2,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,14,0,0,0,15,0,0,0,0,0,0,0,0,2,2,0,2,0,0,0,0,14,0,0,0,3,3,0,3,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,6,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,7,0,0,0,7,0,2,0,0,0,0,0,0,3,0,3,9,1,0,0,0,0,1,1,0,0,0,0,0,0,2,0,0,0,3,0,0,0,0,0,0,7,7,7,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,3,0,0,0,0,3,7,0,0,0,6,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,2,0,7,0,0,0,0,7,0,2,0,0,0,0,0,0,3,0,3,0,3,0,0,0,0,2,0,0,0,3,0,0,0,0,0,0,7,7,7,7,0,0,0,0,0,0,0,0,2,0,0,4,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,1,0,0,0,0,0,7,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,7,0,0,0,7,0,2,0,0,0,0,0,0,3,0,5,0,3,0,5,0,0,0,5,0,0,3,0,0,0,0,0,0,7,7,7,7,0,0,0,0,0,0,2,0,0,2,0,0,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,7,0,0,0,7,0,2,0,0,0,0,0,0,3,0,3,0,3,0,0,0,0,2,0,0,13,0,0,0,0,0,3,0,0,0,0,0,6,0,0,0,0,2,0,7,7,7,7,0,0,0,0,0,0,0,0,2,0,0,2,0,3,0,0,0,0,0,4,4,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,8,0,2,0,0,0,0,3,0,0,0,0,0,0,0,3,0,0,0,0,3,0,0,0,0,0,0,1,0,0,3,7,0,0,0,0,3,0,0,0,0,0,3,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,7,0,0,0,7,0,2,0,0,0,0,0,0,3,0,3,0,3,6,0,0,0,0,0,0,0,0,2,0,6,0,0,0,3,0,0,0,0,0,0,0,0,0,0,7,7,7,7,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,3,0,0,3,0,0,3,7,3,6,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,7,0,0,0,7,0,2,0,0,0,0,0,0,3,0,3,0,3,0,0,0,0,2,0,0,5,0,0,0,0,0,3,0,0,0,0,0,6,1,0,0,0,2,0,7,7,7,7,0,0,0,0,0,0,0,0,2,0,0,2,0,3,0,0,0,0,0,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,8,0,2,0,0,0,0,3,0,0,0,0,0,0,0,3,0,0,0,0,3,0,0,0,0,0,0,0,0,0,3,7,0,0,0,0,3,0,0,0,0,0,3,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,7,0,0,0,7,0,2,0,0,0,0,0,0,3,0,5,0,3,0,5,0,0,0,5,0,0,3,0,0,0,0,0,0,7,7,7,7,0,0,0,0,0,0,2,0,0,1,0,0,2,0,2,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,5,0,0,0,1,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,6,0,0,0,8,1,9,0,0,8,0,2,0,8,0,0,0,0,3,8,0,0,0,8,0,0,0,2,0,3,7,0,0,0,0,7,0,2,0,0,0,0,0,0,3,0,3,0,3,0,0,0,0,2,0,0,0,3,0,0,0,0,0,0,7,7,7,7,0,0,0,0,0,0,0,0,2,0,0,5,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,2,6,0,0,0,8,1,8,0,0,8,0,2,0,8,0,0,0,0,3,9,0,0,0,8,0,0,0,2,0,3,7,0,0,0,7,0,2,0,0,0,0,0,0,3,0,3,2,10,0,0,0,0,2,2,0,0,0,0,0,0,2,0,0,0,3,0,0,0,0,0,0,7,7,7,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,3,0,0,0,0,3,7,0,0,0,6,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,13,0,0,0,14,0,0,0,15,0,0,0,0,0,0,0,0,2,2,0,2,0,0,0,0,14,1,0,0,3,3,0,3,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,6,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,3,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,12,8,0,0,0,0,0,3,0,0,11,0,0,0,0,0,0,0,0,0,14,2,0,0,0,15,0,1,0,0,0,14,3,0,0,0,0,0,7,0,0,0,0,3,0,0,0,0,3,7,0,0,0,6,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,11,0,0,0,0,0,12,0,0,0,0,0,13,0,0,0,0,0,14,0,0,0,0,0,15,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,0,0,11,8,0,0,0,0,0,0,7,0,0,9,0,0,0,10,0,0,0,11,0,0,0,12,0,0,0,13,0,0,0,0,0,0,0,13,0,0,0,0,0,7,0,0,0,0,0,1,0,0,0,0,0,0,5,7,0,0,6,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,10,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,13,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,9,0,0,1,0,0,0,8,0,0,1,0,0,0,8,5,0,1,0,0,8,0,8,5,0,1,0,0,0,8,5,0,1,0,0,0,8,5,0,1,0,0,11,0,8,5,0,1,0,0,0,8,5,0,1,0,0,0,8,5,0,1,0,0,12,0,8,5,0,1,0,8,5,0,1,0,8,5,0,1,7,0,0,0,3,0,0,0,7,0,0,6,0,7,0,0,0,6,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,1,0,0,2,0,0,0,0,0,0,0,0,0,2,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,1,0,0,2,0,0,0,0,0,0,0,0,0,2,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,1,0,0,2,0,0,0,0,0,2,7,0,0,0,0,0,0,2,0,0,0,0,7,0,2,0,0,3,6,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,1,0,0,0,0,0,0,3,0,0,0,0,0,0,5,0,0,0,0,7,0,0,6,0,0,2,5,0,0,0,0,5,0,0,0,2,0,0,0,0,0,2,0,0,0,0,2,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,3,0,0,0,3,7,0,3,6,0,0,2,0,0,0,2,0,0,0,5,0,0,0,15,0,0,0,2,6,0,15,0,5,0,0,15,15,15,0,0,0,2,0,15,15,15,0,0,0,1,0,15,15,0,0,0,1,0,15,15,15,0,0,0,0,0,15,15,15,0,0,0,1,0,15,15,0,0,0,0,0,15,15,15,0,0,0,1,0,15,15,15,0,0,0,0,0,15,15,0,0,0,1,0,15,15,15,0,0,0,0,15,15,15,0,0,0,0,15,15,0,0,0,1,0,15,15,15,0,0,0,0,0,15,15,15,0,0,0,1,0,15,15,0,0,0,0,0,15,15,15,0,0,0,1,0,15,15,15,0,0,0,0,0,15,15,0,0,0,1,0,15,15,15,0,0,0,0,15,15,15,0,0,0,1,7,0,15,0,4,0,3,0,15,0,0,0,0,4,0,0,3,7,0,3,6,0,0,2,0,0,0,2,0,0,0,0,0,0,0,0,2,6,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,3,0,0,0,0,0,0,0,0,5,0,3,7,0,3,1,1,1,0,5,1,0,0,0,0,1,6,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,4,0,0,0,0,0,0,0,4,0,1,7,1,1,1,1,1,1,1,0];
  for(n=0;n<39600+1;n++){
   setTile(X[n], Y[n], Z[n], I[n], D[n]);
  }
}