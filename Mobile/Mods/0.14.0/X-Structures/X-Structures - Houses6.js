/* 
   X-Structures Made by xReVoLT - iTheme -
   View my Twitter: xReVoLTiTheme        -
   Adding more structures soon           -
*/

/*

IDs: 1105 = X-Structure Picker, 1106 = X-Structer Maker

*/

function newLevel(){
	clientMessage("§4X§f-§bStructure§4[BETA] §f- §4Houses §f- §bPART §46 §f- §4Made and Distributed by §l§bx§l§eR§l§bè§l§9V§l§6ó§l§cL§l§fT §l§f- §l§ei§l§bT§l§bh§l§9è§l§em§l§dé");
    clientMessage("Email: xReVoLTiThemeDev§4@§fgmail.com - §bTwitter: §4@§bxReVoLTiTheme");
    clientMessage("Use '§4xstructure ids§f' command to recieve the items for X-Structures!");
    clientMessage("Remember to spawn structures 2-3 blocks up!");
    print("Thanks for installing X-Structures!" + /n/n/n + "This Structure pack contains 86 Houses");
}

var structureSelectorId = 1111
var structureBuilderId = 1112
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var textsize = 12
var structure
var firstStructure

ModPE.setItem(structureSelectorId,"spawn_egg",7,"X-Structure - Houses6")
ModPE.setItem(structureBuilderId,"spawn_egg",5,"Structure Maker6")
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
		if(structure == null) clientMessage("Please select a structure using the X-Strcuture - Houses6")
    else if(structure == 1) ModernHouse84GUI(x,y,z)
    else if(structure == 2) ModernHouse85GUI(x,y,z)
    else if(structure == 3) ModernHouse86GUI(x,y,z)
    else if(structure == 4) ModernHouse87GUI(x,y,z)
    else if(structure == 5) ModernHouse88GUI(x,y,z)
    else if(structure == 6) ModernHouse89GUI(x,y,z)
    else if(structure == 7) ModernHouse90GUI(x,y,z)
    else if(structure == 8) ModernHouse91GUI(x,y,z)
    else if(structure == 9) ModernHouse92GUI(x,y,z)
    else if(structure == 10) ModernHouse93GUI(x,y,z)
    else if(structure == 11) ModernHouse94GUI(x,y,z)
    else if(structure == 12) ModernHouse95GUI(x,y,z)
    else if(structure == 13) ModernHouse96GUI(x,y,z)
    else if(structure == 14) ModernHouse97GUI(x,y,z)
    else if(structure == 15) ModernHouse98GUI(x,y,z)
    else if(structure == 16) ModernHouse99GUI(x,y,z)
    else if(structure == 17) ModernHouse100GUI(x,y,z)
    else if(structure == 18) ModernHouse101GUI(x,y,z)
    else if(structure == 19) ModernHouse102GUI(x,y,z)
    else if(structure == 20) ModernHouse103GUI(x,y,z)
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

/* 1 */	var  ModernHouse84 = new android.widget.Button(ctx); 
				ModernHouse84.setOnClickListener(new android.view.View.OnClickListener(){
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
				ModernHouse84.setText("ModernHouse84")
				ModernHouse84.setTextSize(textsize)
				menu.addView(ModernHouse84);

/* 2 */	var  ModernHouse85 = new android.widget.Button(ctx); 
				ModernHouse85.setOnClickListener(new android.view.View.OnClickListener(){
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
				ModernHouse85.setText("ModernHouse85")
				ModernHouse85.setTextSize(textsize)
				menu.addView(ModernHouse85);

/* 3 */	var  ModernHouse86 = new android.widget.Button(ctx); 
				ModernHouse86.setOnClickListener(new android.view.View.OnClickListener(){
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
				ModernHouse86.setText("ModernHouse86")
				ModernHouse86.setTextSize(textsize)
				menu.addView(ModernHouse86);

/* 4 */	var  ModernHouse87 = new android.widget.Button(ctx); 
				ModernHouse87.setOnClickListener(new android.view.View.OnClickListener(){
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
				ModernHouse87.setText("ModernHouse87")
				ModernHouse87.setTextSize(textsize)
				menu.addView(ModernHouse87);

/* 5 */	var  ModernHouse88 = new android.widget.Button(ctx); 
				ModernHouse88.setOnClickListener(new android.view.View.OnClickListener(){
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
				ModernHouse88.setText("ModernHouse88")
				ModernHouse88.setTextSize(textsize)
				menu.addView(ModernHouse88);

/* 6 */	var  ModernHouse89 = new android.widget.Button(ctx); 
				ModernHouse89.setOnClickListener(new android.view.View.OnClickListener(){
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
				ModernHouse89.setText("ModernHouse89")
				ModernHouse89.setTextSize(textsize)
				menu.addView(ModernHouse89);

/* 8 */	var  ModernHouse90 = new android.widget.Button(ctx); 
				ModernHouse90.setOnClickListener(new android.view.View.OnClickListener(){
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
				ModernHouse90.setText("ModernHouse90")
				ModernHouse90.setTextSize(textsize)
				menu.addView(ModernHouse90);

/* 9 */	var  ModernHouse91 = new android.widget.Button(ctx); 
				ModernHouse91.setOnClickListener(new android.view.View.OnClickListener(){
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
				ModernHouse91.setText("ModernHouse91")
				ModernHouse91.setTextSize(textsize)
				menu.addView(ModernHouse91);

/* 10 */	var  ModernHouse92 = new android.widget.Button(ctx); 
				ModernHouse92.setOnClickListener(new android.view.View.OnClickListener(){
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
				ModernHouse92.setText("ModernHouse92")
				ModernHouse92.setTextSize(textsize)
				menu.addView(ModernHouse92);

/* 11 */	var  ModernHouse93 = new android.widget.Button(ctx); 
				ModernHouse93.setOnClickListener(new android.view.View.OnClickListener(){
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
				ModernHouse93.setText("ModernHouse93")
				ModernHouse93.setTextSize(textsize)
				menu.addView(ModernHouse93);

/* 12 */	var  ModernHouse94 = new android.widget.Button(ctx); 
				ModernHouse94.setOnClickListener(new android.view.View.OnClickListener(){
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
				ModernHouse94.setText("ModernHouse94")
				ModernHouse94.setTextSize(textsize)
				menu.addView(ModernHouse94);

/* 13 */	var  ModernHouse95 = new android.widget.Button(ctx); 
				ModernHouse95.setOnClickListener(new android.view.View.OnClickListener(){
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
				ModernHouse95.setText("ModernHouse95")
				ModernHouse95.setTextSize(textsize)
				menu.addView(ModernHouse95);

/* 14 */	var  ModernHouse96 = new android.widget.Button(ctx); 
				ModernHouse96.setOnClickListener(new android.view.View.OnClickListener(){
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
				ModernHouse96.setText("ModernHouse96")
				ModernHouse96.setTextSize(textsize)
				menu.addView(ModernHouse96);

/* 15 */	var  ModernHouse97 = new android.widget.Button(ctx); 
				ModernHouse97.setOnClickListener(new android.view.View.OnClickListener(){
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
				ModernHouse97.setText("ModernHouse97")
				ModernHouse97.setTextSize(textsize)
				menu.addView(ModernHouse97);

/* 16 */	var  ModernHouse98 = new android.widget.Button(ctx); 
				ModernHouse98.setOnClickListener(new android.view.View.OnClickListener(){
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
				ModernHouse98.setText("ModernHouse98")
				ModernHouse98.setTextSize(textsize)
				menu.addView(ModernHouse98);

/* 17 */	var  ModernHouse99 = new android.widget.Button(ctx); 
				ModernHouse99.setOnClickListener(new android.view.View.OnClickListener(){
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
				ModernHouse99.setText("ModernHouse99")
				ModernHouse99.setTextSize(textsize)
				menu.addView(ModernHouse99);

/* 18 */	var  ModernHouse100 = new android.widget.Button(ctx); 
				ModernHouse100.setOnClickListener(new android.view.View.OnClickListener(){
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
				ModernHouse100.setText("ModernHouse100")
				ModernHouse100.setTextSize(textsize)
				menu.addView(ModernHouse100);

/* 19 */	var  ModernHouse101 = new android.widget.Button(ctx); 
				ModernHouse101.setOnClickListener(new android.view.View.OnClickListener(){
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
				ModernHouse101.setText("ModernHouse101")
				ModernHouse101.setTextSize(textsize)
				menu.addView(ModernHouse101);

/* 20 */	var  ModernHouse102 = new android.widget.Button(ctx); 
				ModernHouse102.setOnClickListener(new android.view.View.OnClickListener(){
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
				ModernHouse102.setText("ModernHouse102")
				ModernHouse102.setTextSize(textsize)
				menu.addView(ModernHouse102);

/* 21 */	var  ModernHouse103 = new android.widget.Button(ctx); 
				ModernHouse103.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 21
							clientMessage("§4X§f-§bStructure §aRecieved!")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				ModernHouse103.setText("ModernHouse103")
				ModernHouse103.setTextSize(textsize)
				menu.addView(ModernHouse103);

		    }
	catch (e){
	print ("Error: "+e)
	}	
	dialog.show()
	}
	});
}

function ModernHouse84GUI(x,y,z){
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
				else if(yaw >= 225 && yaw <= 645) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 645 && yaw <= 360) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							ModernHouse84(x,y,z)
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

function ModernHouse85GUI(x,y,z){
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
				else if(yaw >= 225 && yaw <= 645) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 645 && yaw <= 360) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							ModernHouse85(x,y,z)
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

function ModernHouse86GUI(x,y,z){
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
				else if(yaw >= 225 && yaw <= 645) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 645 && yaw <= 360) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							ModernHouse86(x,y,z)
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

function ModernHouse87GUI(x,y,z)

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
				else if(yaw >= 225 && yaw <= 645) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 645 && yaw <= 360) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							87(x,y,z)
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

function ModernHouse88GUI(x,y,z)
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
				else if(yaw >= 225 && yaw <= 645) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 645 && yaw <= 360) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							ModernHouse88(x,y,z)
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

function ModernHouse89GUI(x,y,z)
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
				else if(yaw >= 225 && yaw <= 645) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 645 && yaw <= 360) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
                        ModernHouse89(x,y,z)
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

function ModernHouse90GUI(x,y,z)
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
				else if(yaw >= 225 && yaw <= 645) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 645 && yaw <= 360) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
                        ModernHouse90(x,y,z)
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

function ModernHouse91GUI(x,y,z)
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
				else if(yaw >= 225 && yaw <= 645) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 645 && yaw <= 360) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
                        ModernHouse91(x,y,z)
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

function ModernHouse92GUI(x,y,z){
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
				else if(yaw >= 225 && yaw <= 645) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 645 && yaw <= 360) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							ModernHouse92(x,y,z)
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

function ModernHouse93GUI(x,y,z){
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
				else if(yaw >= 225 && yaw <= 645) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 645 && yaw <= 360) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							ModernHouse93(x,y,z)
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

function ModernHouse94GUI(x,y,z){
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
				else if(yaw >= 225 && yaw <= 645) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 645 && yaw <= 360) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							ModernHouse94(x,y,z)
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

function ModernHouse95GUI(x,y,z){
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
				else if(yaw >= 225 && yaw <= 645) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 645 && yaw <= 360) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							ModernHouse95(x,y,z)
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

function ModernHouse96GUI(x,y,z){
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
				else if(yaw >= 225 && yaw <= 645) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 645 && yaw <= 360) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							ModernHouse96(x,y,z)
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

function ModernHouse97GUI(x,y,z){
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
				else if(yaw >= 225 && yaw <= 645) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 645 && yaw <= 360) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							ModernHouse97(x,y,z)
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

function ModernHouse98GUI(x,y,z){
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
				else if(yaw >= 225 && yaw <= 645) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 645 && yaw <= 360) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							ModernHouse98(x,y,z)
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

function ModernHouse99GUI(x,y,z){
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
				else if(yaw >= 225 && yaw <= 645) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 645 && yaw <= 360) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							ModernHouse99(x,y,z)
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

function ModernHouse100GUI(x,y,z){
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
				else if(yaw >= 225 && yaw <= 645) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 645 && yaw <= 360) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							ModernHouse100(x,y,z)
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

function ModernHouse101GUI(x,y,z){
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
				else if(yaw >= 225 && yaw <= 645) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 645 && yaw <= 360) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							ModernHouse101(x,y,z)
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

function ModernHouse102GUI(x,y,z){
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
				else if(yaw >= 225 && yaw <= 645) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 645 && yaw <= 360) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							ModernHouse102(x,y,z)
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

function ModernHouse103GUI(x,y,z){
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
				else if(yaw >= 225 && yaw <= 645) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				else if(yaw >= 645 && yaw <= 360) popup.setMessage("The structure will be placed. It may crash the game. Use with caution. You've been warned. It's quite buggy.")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							ModernHouse103(x,y,z)
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

