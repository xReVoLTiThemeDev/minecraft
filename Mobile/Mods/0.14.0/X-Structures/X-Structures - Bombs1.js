/* 
   X-Structures Made by xReVoLT - iTheme -
   View my Twitter: xReVoLTiTheme        -
   Adding more structures soon           -
*/

/*

IDs: 1101 = X-Structure Picker, 1102 = X-Structer Maker

*/

function newLevel(){
	clientMessage("§4X§f-§bStructure §f- §4Bomb §f- §bPART §41 §f- §4Made and Distributed by §l§bx§l§eR§l§bè§l§9V§l§6ó§l§cL§l§fT §l§f- §l§ei§l§bT§l§bh§l§9è§l§em§l§dé");
    clientMessage("Email: xReVoLTiThemeDev§4@§fgmail.com - §bTwitter: §4@§bxReVoLTiTheme");
    clientMessage("Use '§4xstructure ids§f' command to recieve the items for X-Structures");
    clientMessage("Remember to spawn structures 2-3 blocks up");
    print("Thanks for installing X-Structures!" + /n/n/n + "This Structure pack contains 21 Bombs");
}

var structureSelectorId = 2001
var structureBuilderId = 2002
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var textsize = 12
var structure
var firstStructure

ModPE.setItem(structureSelectorId,"spawn_egg",7,"X-Structure - Bomb1")
ModPE.setItem(structureBuilderId,"spawn_egg",5,"Structure Maker1")
Player.addItemCreativeInv(structureSelectorId,1,0)
Player.addItemCreativeInv(structureBuilderId,1,0)
Item.addCraftRecipe(structureSelectorId,1,0,[265,4,0,264,1,0,265,4,0])
Item.addCraftRecipe(structureBuilderId,1,0,[265,3,0,264,1,0,265,1,0,264,1,0,265,3,0])

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

//Check for an item being used
function useItem(x,y,z,itemId,blockId,side){
	if(itemId == structureSelectorId){
		BombGUI()
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
		if(structure == null) clientMessage("Please select a structure using the X-Strcuture - Bomb2")
		else if(structure == 3) Bomb1GUI(x,y,z)
		else if(structure == 4) Bomb2GUI(x,y,z)
		else if(structure == 5) Bomb3GUI(x,y,z)
		else if(structure == 6) Bomb4GUI(x,y,z)
		else if(structure == 7) MOABGUI(x,y,z)
 	}
}

function BombGUI(){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var menu = new android.widget.LinearLayout(ctx);
				var scroll = new android.widget.ScrollView(ctx);
				menu.setOrientation(android.widget.LinearLayout.VERTICAL);
				scroll.addView(menu);
				var dialog = new android.app.Dialog(ctx); 
				dialog.setContentView(scroll);
				dialog.setTitle("Choose a structure to spawn")
/*
				var  House = new android.widget.Button(ctx); 
				House.setOnClickListener(new android.view.View.OnClickListener(){
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
				House.setText("House1")
				House.setTextSize(textsize)
				menu.addView(House);
*/
/* 7 */
                var  Bomb1 = new android.widget.Button(ctx); 
				Bomb1.setOnClickListener(new android.view.View.OnClickListener(){
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
				Bomb1.setText("Bomb1")
				Bomb1.setTextSize(textsize)
				menu.addView(Bomb1);
/* 8 */
				var  Bomb2 = new android.widget.Button(ctx); 
				Bomb2.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 4
							clientMessage("§4X§f-§bStructure §aRecieved!")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				Bomb2.setText("Bomb2")
				Bomb2.setTextSize(textsize)
				menu.addView(Bomb2);
/* 9 */
				var  Bomb3 = new android.widget.Button(ctx); 
				Bomb3.setOnClickListener(new android.view.View.OnClickListener(){
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
				Bomb3.setText("Bomb3")
				Bomb3.setTextSize(textsize)
				menu.addView(Bomb3);
/* 10 */
				var  Bomb4 = new android.widget.Button(ctx); 
				Bomb4.setOnClickListener(new android.view.View.OnClickListener(){
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
				Bomb4.setText("Bomb4")
				Bomb4.setTextSize(textsize)
				menu.addView(Bomb4);
/* 11 */
				var  MOAB = new android.widget.Button(ctx); 
				MOAB.setOnClickListener(new android.view.View.OnClickListener(){
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
				MOAB.setText("MOAB")
				MOAB.setTextSize(textsize)
				menu.addView(MOAB);
		    }
	catch (e){
	print ("Error: "+e)
	}	
	dialog.show()
	}
	});
}

function Bomb1GUI(x,y,z){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(ctx); 
				popup.setTitle("Continue structure transaction?")
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
							Bomb1(x,y,z)
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

function Bomb2GUI(x,y,z){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(ctx); 
				popup.setTitle("Continue structure transaction?")
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
							Bomb2(x,y,z)
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

function Bomb3GUI(x,y,z){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(ctx); 
				popup.setTitle("Continue structure transaction?")
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
							Bomb3(x,y,z)
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

function Bomb4GUI(x,y,z){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(ctx); 
				popup.setTitle("Continue structure transaction?")
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
							Bomb4(x,y,z)
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

function MOABGUI(x,y,z){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(ctx); 
				popup.setTitle("Continue structure transaction?")
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
							MOAB(x,y,z)
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

function Bomb1(x,y,z){
 var X=[x,x+-7,x+-6,x+-6,x+-6,x+-6,x+-6,x+-5,x+-5,x+-5,x+-4,x+-3,x+-2,x+-1,x+0,x+0,x+0,x+0];
 var Y=[y,y+1,y+-1,y+-2,y+-1,y+0,y+-1,y+-2,y+-1,y+0,y+-1,y+-1,y+-1,y+-1,y+-2,y+-2,y+-1,y+0];
 var Z=[z,z+3,z+0,z+1,z+1,z+1,z+2,z+1,z+1,z+1,z+1,z+1,z+1,z+1,z+-1,z+0,z+0,z+0];
 var I=[0,0,96,101,1,101,96,101,1,101,35,35,1,35,0,57,57,0];
 var D=[0,0,0,0,0,0,1,0,0,0,13,13,0,1,0,0,0,0];
  for(n=0;n<160+1;n++){
   setTile(X[n], Y[n], Z[n], I[n], D[n]);
  }
}

function Bomb2(x,y,z){
 var X=[x,x+-9,x+-8,x+-7,x+-7,x+-7,x+-7,x+-7,x+-6,x+-5,x+-4,x+-3,x+-2,x+0,x+0,x+0,x+0];
 var Y=[y,y+2,y+0,y+0,y+-1,y+0,y+1,y+0,y+0,y+0,y+0,y+0,y+0,y+-2,y+-2,y+-1,y+0];
 var Z=[z,z+3,z+1,z+0,z+1,z+1,z+1,z+2,z+1,z+1,z+1,z+1,z+1,z+-1,z+0,z+0,z+0];
 var I=[0,0,35,101,101,1,101,101,1,35,35,35,1,0,57,57,0];
 var D=[0,0,2,0,0,0,0,0,0,13,13,13,0,0,0,0,0];
  for(n=0;n<250+1;n++){
   setTile(X[n], Y[n], Z[n], I[n], D[n]);
  }
}

function Bomb3(x,y,z){
 var X=[x,x+-9,x+-8,x+-7,x+-7,x+-7,x+-7,x+-7,x+-6,x+-6,x+-5,x+-5,x+-4,x+-4,x+-3,x+-3,x+-2,x+0,x+0,x+0,x+0];
 var Y=[y,y+1,y+-1,y+-1,y+-2,y+-1,y+0,y+-1,y+-1,y+0,y+-2,y+-1,y+-2,y+-1,y+-2,y+-1,y+-1,y+-2,y+-1,y+0,y+-2];
 var Z=[z,z+-3,z+-1,z+-2,z+-1,z+-1,z+-1,z+0,z+-1,z+-1,z+-1,z+-1,z+-1,z+-1,z+-1,z+-1,z+-1,z+0,z+0,z+0,z+1];
 var I=[0,0,35,101,101,1,101,101,1,35,44,46,44,46,44,46,1,57,57,0,0];
 var D=[0,0,2,0,0,0,0,0,0,6,13,0,13,0,13,0,0,0,0,0,0];
  for(n=0;n<200+1;n++){
   setTile(X[n], Y[n], Z[n], I[n], D[n]);
  }
}

function Bomb4(x,y,z){
 var X=[x,x+0,x+0,x+0,x+1,x+2,x+3,x+4,x+5];
 var Y=[y,y+-1,y+0,y+-1,y+-1,y+-1,y+-1,y+-1,y+0];
 var Z=[z,z+0,z+0,z+1,z+-1,z+-1,z+-1,z+-1,z+-2];
 var I=[0,57,0,0,1,35,35,35,0];
 var D=[0,0,0,0,0,13,13,1,0];
  for(n=0;n<48+1;n++){
   setTile(X[n], Y[n], Z[n], I[n], D[n]);
  }
}

function MOAB(x,y,z){
 var X=[x,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+16,x+16,x+16,x+16,x+16,x+17,x+17,x+17,x+17,x+17,x+18,x+19,x+19];
 var Y=[y,y+-2,y+3,y+-1,y+2,y+-1,y+0,y+1,y+2,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+2,y+-2,y+3,y+-2,y+-1,y+0,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+0,y+1,y+2,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+0,y+1,y+2,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+3,y+0,y+1,y+2,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+3,y+0,y+1,y+2,y+1,y+1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+3,y+0,y+1,y+2,y+1,y+1,y+1,y+1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+3,y+0,y+1,y+2,y+1,y+1,y+1,y+1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+3,y+0,y+1,y+2,y+1,y+1,y+1,y+1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+3,y+0,y+1,y+2,y+1,y+1,y+1,y+1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+3,y+0,y+1,y+2,y+1,y+1,y+1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+3,y+0,y+1,y+2,y+1,y+1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+3,y+0,y+1,y+2,y+1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+3,y+0,y+1,y+2,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+3,y+0,y+1,y+2,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+3,y+0,y+1,y+2,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+0,y+1,y+2,y+0,y+1,y+2,y+0,y+1,y+2,y+0,y+1,y+2,y+1,y+0,y+1,y+2,y+1,y+1,y+0,y+1,y+2,y+1,y+1,y+-2,y+5];
 var Z=[z,z+0,z+0,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+6,z+6,z+0,z+0,z+0,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+0,z+1,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+5,z+6,z+0,z+1,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+5,z+6,z+0,z+1,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+5,z+6,z+0,z+1,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+5,z+6,z+0,z+1,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+5,z+6,z+1,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+5,z+1,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+5,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+2,z+2,z+2,z+3,z+3,z+3,z+4,z+4,z+4,z+2,z+3,z+3,z+3,z+4,z+2,z+3,z+3,z+3,z+4,z+3,z+0,z+7];
 var I=[57,42,42,42,42,109,109,109,109,1,1,35,109,109,109,109,42,42,42,42,57,57,57,109,109,109,44,35,35,35,109,109,109,35,35,109,44,35,35,35,35,35,109,35,35,109,44,35,46,46,44,35,35,109,35,35,109,44,35,46,46,44,35,35,109,35,35,35,35,109,44,35,46,46,44,35,35,109,35,35,35,35,35,35,109,44,35,46,46,44,35,35,109,35,35,35,35,35,35,109,44,35,46,46,44,35,35,109,35,35,35,35,35,35,109,44,35,46,46,44,35,35,109,35,35,35,35,35,35,109,44,35,46,46,44,35,35,109,35,35,35,35,35,109,44,35,46,46,44,35,35,109,35,35,35,35,109,44,35,46,46,44,35,35,109,35,35,35,109,44,35,46,46,44,35,35,109,35,35,35,44,35,46,46,44,35,35,35,35,35,35,44,35,46,35,35,35,35,35,35,35,35,44,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,20,57];
 var D=[0,0,0,0,0,7,2,6,2,0,0,13,6,3,7,3,0,0,0,0,0,0,0,2,6,2,13,13,13,13,3,7,3,13,13,2,13,13,13,13,13,13,3,13,13,2,13,13,0,0,5,13,13,3,13,13,2,13,13,0,0,5,13,13,3,13,13,13,13,2,13,13,0,0,5,13,13,3,13,13,13,13,13,13,2,13,13,0,0,5,13,13,3,13,13,13,13,13,13,2,13,13,0,0,5,13,13,3,13,13,13,13,13,13,2,13,13,0,0,5,13,13,3,13,13,13,13,13,13,2,13,13,0,0,5,13,13,3,13,13,13,13,13,2,13,13,0,0,5,13,13,3,13,13,13,13,2,13,13,0,0,5,13,13,3,13,13,13,2,13,13,0,0,5,13,13,3,13,13,13,13,13,0,0,5,13,13,13,13,13,13,13,13,0,13,6,13,13,13,13,13,13,13,13,13,13,13,13,13,4,4,4,4,13,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0];
  for(n=0;n<1344+1;n++){
   setTile(X[n], Y[n], Z[n], I[n], D[n]);
  }
}