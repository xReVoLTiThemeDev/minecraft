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
	clientMessage("§4X§f-§bStructure§4[BETA] §f- §4Helicopter §f- §bPART §41 §f- §4Made and Distributed by §l§bx§l§eR§l§bè§l§9V§l§6ó§l§cL§l§fT §l§f- §l§ei§l§bT§l§bh§l§9è§l§em§l§dé");
    clientMessage("Email: xReVoLTiThemeDev§4@§fgmail.com - §bTwitter: §4@§bxReVoLTiTheme");
    clientMessage("Use '§4xstructure ids§f' command to recieve the items for X-Structures!");
    clientMessage("Remember to spawn structures 2-3 blocks up!");
    print("Thanks for installing X-Structures!" + /n/n/n + "This Structure pack contains 124 Helicopters");
}

var structureSelectorId = 1601
var structureBuilderId = 1602
var root = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var textsize = 12
var structure
var firstStructure

ModPE.setItem(structureSelectorId,"spawn_egg",7,"X-Structure - Helicopter1")
ModPE.setItem(structureBuilderId,"spawn_egg",5,"Structure Helicopter1")
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
		if(structure == null) clientMessage("Please select a structure using the X-Strcuture - Helicopter1")
        else if(structure == 1) Helicopter1GUI(x,y,z)
        else if(structure == 2) Helicopter2GUI(x,y,z)
        else if(structure == 3) Helicopter3GUI(x,y,z)
        else if(structure == 5) Helicopter4GUI(x,y,z)
        else if(structure == 6) Helicopter5GUI(x,y,z)
        else if(structure == 7) Helicopter6GUI(x,y,z)
        else if(structure == 8) Helicopter7GUI(x,y,z)
        else if(structure == 9) Helicopter9GUI(x,y,z)
        else if(structure == 10) Helicopter10GUI(x,y,z)
        else if(structure == 11) Helicopter11GUI(x,y,z)
        else if(structure == 12) Helicopter12GUI(x,y,z)
        else if(structure == 13) Helicopter13GUI(x,y,z)
        else if(structure == 14) Helicopter14GUI(x,y,z)
        else if(structure == 15) Helicopter15GUI(x,y,z)
        else if(structure == 16) Helicopter16GUI(x,y,z)
        else if(structure == 17) Helicopter17GUI(x,y,z)
        else if(structure == 18) Helicopter18GUI(x,y,z)
        else if(structure == 19) Helicopter19GUI(x,y,z)
        else if(structure == 20) Helicopter20GUI(x,y,z)
        else if(structure == 22) Helicopter21GUI(x,y,z)
        else if(structure == 23) Helicopter22GUI(x,y,z)
        else if(structure == 24) Helicopter23GUI(x,y,z)
        else if(structure == 25) Helicopter24GUI(x,y,z)
        else if(structure == 26) Helicopter25GUI(x,y,z)
        else if(structure == 28) Helicopter26GUI(x,y,z)
        else if(structure == 29) Helicopter27GUI(x,y,z)
        else if(structure == 30) Helicopter28GUI(x,y,z)
        else if(structure == 31) Helicopter29GUI(x,y,z)
        else if(structure == 32) Helicopter30GUI(x,y,z)
        else if(structure == 33) Helicopter31GUI(x,y,z)
        else if(structure == 34) Helicopter32GUI(x,y,z)
        else if(structure == 35) Helicopter33GUI(x,y,z)
        else if(structure == 36) Helicopter34GUI(x,y,z)
        else if(structure == 37) Helicopter35GUI(x,y,z)
        else if(structure == 38) Helicopter36GUI(x,y,z)
        else if(structure == 39) Helicopter37GUI(x,y,z)
 	}
}

function housesGUI(){
	root.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var menu = new android.widget.LinearLayout(root);
				var scroll = new android.widget.ScrollView(root);
				menu.setOrientation(android.widget.LinearLayout.VERTICAL);
				scroll.addView(menu);
				var dialog = new android.app.Dialog(root);
				dialog.setContentView(scroll);
				dialog.setTitle("Choose a structure")


/* 1 */	var  Helicopter1 = new android.widget.Button(root);
				Helicopter1.setOnClickListener(new android.view.View.OnClickListener(){
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
				Helicopter1.setText("Helicopter1")
				Helicopter1.setTextSize(textsize)
				menu.addView(Helicopter1);


/* 2 */	var  Helicopter2 = new android.widget.Button(root);
				Helicopter2.setOnClickListener(new android.view.View.OnClickListener(){
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
				Helicopter2.setText("Helicopter2")
				Helicopter2.setTextSize(textsize)
				menu.addView(Helicopter2);


/* 3 */	var  Helicopter3 = new android.widget.Button(root);
				Helicopter3.setOnClickListener(new android.view.View.OnClickListener(){
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
				Helicopter3.setText("Helicopter3")
				Helicopter3.setTextSize(textsize)
				menu.addView(Helicopter3);


/* 5 */	var  Helicopter4 = new android.widget.Button(root);
				Helicopter4.setOnClickListener(new android.view.View.OnClickListener(){
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
				Helicopter4.setText("Helicopter4")
				Helicopter4.setTextSize(textsize)
				menu.addView(Helicopter4);


/* 6 */	var  Helicopter5 = new android.widget.Button(root);
				Helicopter5.setOnClickListener(new android.view.View.OnClickListener(){
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
				Helicopter5.setText("Helicopter5")
				Helicopter5.setTextSize(textsize)
				menu.addView(Helicopter5);


/* 7 */	var  Helicopter6 = new android.widget.Button(root);
				Helicopter6.setOnClickListener(new android.view.View.OnClickListener(){
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
				Helicopter6.setText("Helicopter6")
				Helicopter6.setTextSize(textsize)
				menu.addView(Helicopter6);


/* 8 */	var  Helicopter7 = new android.widget.Button(root);
				Helicopter7.setOnClickListener(new android.view.View.OnClickListener(){
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
				Helicopter7.setText("Helicopter7")
				Helicopter7.setTextSize(textsize)
				menu.addView(Helicopter7);


/* 9 */	var  Helicopter9 = new android.widget.Button(root);
				Helicopter9.setOnClickListener(new android.view.View.OnClickListener(){
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
				Helicopter9.setText("Helicopter9")
				Helicopter9.setTextSize(textsize)
				menu.addView(Helicopter9);


/* 10 */	var  Helicopter10 = new android.widget.Button(root);
				Helicopter10.setOnClickListener(new android.view.View.OnClickListener(){
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
				Helicopter10.setText("Helicopter10")
				Helicopter10.setTextSize(textsize)
				menu.addView(Helicopter10);


/* 11 */	var  Helicopter11 = new android.widget.Button(root);
				Helicopter11.setOnClickListener(new android.view.View.OnClickListener(){
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
				Helicopter11.setText("Helicopter11")
				Helicopter11.setTextSize(textsize)
				menu.addView(Helicopter11);


/* 12 */	var  Helicopter12 = new android.widget.Button(root);
				Helicopter12.setOnClickListener(new android.view.View.OnClickListener(){
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
				Helicopter12.setText("Helicopter12")
				Helicopter12.setTextSize(textsize)
				menu.addView(Helicopter12);


/* 13 */	var  Helicopter13 = new android.widget.Button(root);
				Helicopter13.setOnClickListener(new android.view.View.OnClickListener(){
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
				Helicopter13.setText("Helicopter13")
				Helicopter13.setTextSize(textsize)
				menu.addView(Helicopter13);


/* 14 */	var  Helicopter14 = new android.widget.Button(root);
				Helicopter14.setOnClickListener(new android.view.View.OnClickListener(){
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
				Helicopter14.setText("Helicopter14")
				Helicopter14.setTextSize(textsize)
				menu.addView(Helicopter14);


/* 15 */	var  Helicopter15 = new android.widget.Button(root);
				Helicopter15.setOnClickListener(new android.view.View.OnClickListener(){
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
				Helicopter15.setText("Helicopter15")
				Helicopter15.setTextSize(textsize)
				menu.addView(Helicopter15);


/* 16 */	var  Helicopter16 = new android.widget.Button(root);
				Helicopter16.setOnClickListener(new android.view.View.OnClickListener(){
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
				Helicopter16.setText("Helicopter16")
				Helicopter16.setTextSize(textsize)
				menu.addView(Helicopter16);


/* 17 */	var  Helicopter17 = new android.widget.Button(root);
				Helicopter17.setOnClickListener(new android.view.View.OnClickListener(){
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
				Helicopter17.setText("Helicopter17")
				Helicopter17.setTextSize(textsize)
				menu.addView(Helicopter17);


/* 18 */	var  Helicopter18 = new android.widget.Button(root);
				Helicopter18.setOnClickListener(new android.view.View.OnClickListener(){
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
				Helicopter18.setText("Helicopter18")
				Helicopter18.setTextSize(textsize)
				menu.addView(Helicopter18);


/* 19 */	var  Helicopter19 = new android.widget.Button(root);
				Helicopter19.setOnClickListener(new android.view.View.OnClickListener(){
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
				Helicopter19.setText("Helicopter19")
				Helicopter19.setTextSize(textsize)
				menu.addView(Helicopter19);


/* 20 */	var  Helicopter20 = new android.widget.Button(root);
				Helicopter20.setOnClickListener(new android.view.View.OnClickListener(){
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
				Helicopter20.setText("Helicopter20")
				Helicopter20.setTextSize(textsize)
				menu.addView(Helicopter20);


/* 22 */	var  Helicopter21 = new android.widget.Button(root);
				Helicopter21.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){
						try{
							dialog.dismiss();
							structure = 22
							clientMessage("§4X§f-§bStructure §aRecieved!")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				Helicopter21.setText("Helicopter21")
				Helicopter21.setTextSize(textsize)
				menu.addView(Helicopter21);


/* 23 */	var  Helicopter22 = new android.widget.Button(root);
				Helicopter22.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){
						try{
							dialog.dismiss();
							structure = 23
							clientMessage("§4X§f-§bStructure §aRecieved!")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				Helicopter22.setText("Helicopter22")
				Helicopter22.setTextSize(textsize)
				menu.addView(Helicopter22);


/* 24 */	var  Helicopter23 = new android.widget.Button(root);
				Helicopter23.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){
						try{
							dialog.dismiss();
							structure = 24
							clientMessage("§4X§f-§bStructure §aRecieved!")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				Helicopter23.setText("Helicopter23")
				Helicopter23.setTextSize(textsize)
				menu.addView(Helicopter23);


/* 25 */	var  Helicopter24 = new android.widget.Button(root);
				Helicopter24.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){
						try{
							dialog.dismiss();
							structure = 25
							clientMessage("§4X§f-§bStructure §aRecieved!")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				Helicopter24.setText("Helicopter24")
				Helicopter24.setTextSize(textsize)
				menu.addView(Helicopter24);


/* 26 */	var  Helicopter25 = new android.widget.Button(root);
				Helicopter25.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){
						try{
							dialog.dismiss();
							structure = 26
							clientMessage("§4X§f-§bStructure §aRecieved!")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				Helicopter25.setText("Helicopter25")
				Helicopter25.setTextSize(textsize)
				menu.addView(Helicopter25);


/* 28 */	var  Helicopter26 = new android.widget.Button(root);
				Helicopter26.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){
						try{
							dialog.dismiss();
							structure = 28
							clientMessage("§4X§f-§bStructure §aRecieved!")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				Helicopter26.setText("Helicopter26")
				Helicopter26.setTextSize(textsize)
				menu.addView(Helicopter26);


/* 29 */	var  Helicopter27 = new android.widget.Button(root);
				Helicopter27.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){
						try{
							dialog.dismiss();
							structure = 29
							clientMessage("§4X§f-§bStructure §aRecieved!")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				Helicopter27.setText("Helicopter27")
				Helicopter27.setTextSize(textsize)
				menu.addView(Helicopter27);


/* 30 */	var  Helicopter28 = new android.widget.Button(root);
				Helicopter28.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){
						try{
							dialog.dismiss();
							structure = 30
							clientMessage("§4X§f-§bStructure §aRecieved!")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				Helicopter28.setText("Helicopter28")
				Helicopter28.setTextSize(textsize)
				menu.addView(Helicopter28);


/* 31 */	var  Helicopter29 = new android.widget.Button(root);
				Helicopter29.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){
						try{
							dialog.dismiss();
							structure = 31
							clientMessage("§4X§f-§bStructure §aRecieved!")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				Helicopter29.setText("Helicopter29")
				Helicopter29.setTextSize(textsize)
				menu.addView(Helicopter29);


/* 32 */	var  Helicopter30 = new android.widget.Button(root);
				Helicopter30.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){
						try{
							dialog.dismiss();
							structure = 32
							clientMessage("§4X§f-§bStructure §aRecieved!")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				Helicopter30.setText("Helicopter30")
				Helicopter30.setTextSize(textsize)
				menu.addView(Helicopter30);


/* 33 */	var  Helicopter31 = new android.widget.Button(root);
				Helicopter31.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){
						try{
							dialog.dismiss();
							structure = 33
							clientMessage("§4X§f-§bStructure §aRecieved!")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				Helicopter31.setText("Helicopter31")
				Helicopter31.setTextSize(textsize)
				menu.addView(Helicopter31);


/* 34 */	var  Helicopter32 = new android.widget.Button(root);
				Helicopter32.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){
						try{
							dialog.dismiss();
							structure = 34
							clientMessage("§4X§f-§bStructure §aRecieved!")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				Helicopter32.setText("Helicopter32")
				Helicopter32.setTextSize(textsize)
				menu.addView(Helicopter32);


/* 35 */	var  Helicopter33 = new android.widget.Button(root);
				Helicopter33.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){
						try{
							dialog.dismiss();
							structure = 35
							clientMessage("§4X§f-§bStructure §aRecieved!")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				Helicopter33.setText("Helicopter33")
				Helicopter33.setTextSize(textsize)
				menu.addView(Helicopter33);


/* 36 */	var  Helicopter34 = new android.widget.Button(root);
				Helicopter34.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){
						try{
							dialog.dismiss();
							structure = 36
							clientMessage("§4X§f-§bStructure §aRecieved!")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				Helicopter34.setText("Helicopter34")
				Helicopter34.setTextSize(textsize)
				menu.addView(Helicopter34);


/* 37 */	var  Helicopter35 = new android.widget.Button(root);
				Helicopter35.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){
						try{
							dialog.dismiss();
							structure = 37
							clientMessage("§4X§f-§bStructure §aRecieved!")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				Helicopter35.setText("Helicopter35")
				Helicopter35.setTextSize(textsize)
				menu.addView(Helicopter35);


/* 38 */	var  Helicopter36 = new android.widget.Button(root);
				Helicopter36.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){
						try{
							dialog.dismiss();
							structure = 38
							clientMessage("§4X§f-§bStructure §aRecieved!")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				Helicopter36.setText("Helicopter36")
				Helicopter36.setTextSize(textsize)
				menu.addView(Helicopter36);


/* 39 */	var  Helicopter37 = new android.widget.Button(root);
				Helicopter37.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){
						try{
							dialog.dismiss();
							structure = 39
							clientMessage("§4X§f-§bStructure §aRecieved!")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				Helicopter37.setText("Helicopter37")
				Helicopter37.setTextSize(textsize)
				menu.addView(Helicopter37);
		    }
	catch (e){
	print ("Error: "+e)
	}
	dialog.show()
	}
	});
}



function Helicopter1GUI(x,y,z){
	root.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(root);
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
							Helicopter1(x,y,z)
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



function Helicopter2GUI(x,y,z){
	root.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(root);
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
							Helicopter2(x,y,z)
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



function Helicopter3GUI(x,y,z){
	root.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(root);
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
							Helicopter3(x,y,z)
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



function Helicopter4GUI(x,y,z){
	root.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(root);
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
							Helicopter4(x,y,z)
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



function Helicopter5GUI(x,y,z){
	root.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(root);
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
							Helicopter5(x,y,z)
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



function Helicopter6GUI(x,y,z){
	root.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(root);
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
							Helicopter6(x,y,z)
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



function Helicopter7GUI(x,y,z){
	root.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(root);
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
							Helicopter7(x,y,z)
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



function Helicopter9GUI(x,y,z){
	root.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(root);
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
							Helicopter9(x,y,z)
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



function Helicopter10GUI(x,y,z){
	root.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(root);
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
							Helicopter10(x,y,z)
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



function Helicopter11GUI(x,y,z){
	root.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(root);
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
							Helicopter11(x,y,z)
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



function Helicopter12GUI(x,y,z){
	root.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(root);
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
							Helicopter12(x,y,z)
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



function Helicopter13GUI(x,y,z){
	root.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(root);
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
							Helicopter13(x,y,z)
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



function Helicopter14GUI(x,y,z){
	root.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(root);
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
							Helicopter14(x,y,z)
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



function Helicopter15GUI(x,y,z){
	root.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(root);
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
							Helicopter15(x,y,z)
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



function Helicopter16GUI(x,y,z){
	root.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(root);
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
							Helicopter16(x,y,z)
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



function Helicopter17GUI(x,y,z){
	root.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(root);
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
							Helicopter17(x,y,z)
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



function Helicopter18GUI(x,y,z){
	root.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(root);
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
							Helicopter18(x,y,z)
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



function Helicopter19GUI(x,y,z){
	root.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(root);
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
							Helicopter19(x,y,z)
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



function Helicopter20GUI(x,y,z){
	root.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(root);
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
							Helicopter20(x,y,z)
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



function Helicopter21GUI(x,y,z){
	root.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(root);
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
							Helicopter21(x,y,z)
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



function Helicopter22GUI(x,y,z){
	root.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(root);
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
							Helicopter22(x,y,z)
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



function Helicopter23GUI(x,y,z){
	root.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(root);
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
							Helicopter23(x,y,z)
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



function Helicopter24GUI(x,y,z){
	root.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(root);
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
							Helicopter24(x,y,z)
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



function Helicopter25GUI(x,y,z){
	root.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(root);
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
							Helicopter25(x,y,z)
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



function Helicopter26GUI(x,y,z){
	root.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(root);
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
							Helicopter26(x,y,z)
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



function Helicopter27GUI(x,y,z){
	root.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(root);
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
							Helicopter27(x,y,z)
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



function Helicopter28GUI(x,y,z){
	root.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(root);
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
							Helicopter28(x,y,z)
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



function Helicopter29GUI(x,y,z){
	root.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(root);
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
							Helicopter29(x,y,z)
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



function Helicopter30GUI(x,y,z){
	root.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(root);
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
							Helicopter30(x,y,z)
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



function Helicopter1(x,y,z){
 var X=[x,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22];
 var Y=[y,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-1,y+0,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+8,y+-2,y+8,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+8,y+-2,y+8,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+8,y+-2,y+8,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+8,y+-2,y+8,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+8,y+-2,y+1,y+2,y+8,y+-2,y+1,y+2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+1,y+2,y+8,y+-2,y+0,y+1,y+3,y+8,y+-2,y+0,y+1,y+3,y+-2,y+1,y+2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+0,y+1,y+2,y+3,y+8,y+-2,y+0,y+4,y+8,y+-2,y+0,y+4,y+-2,y+0,y+1,y+2,y+3,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+8,y+-2,y+0,y+5,y+8,y+-2,y+0,y+5,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+8,y+-2,y+0,y+5,y+8,y+-2,y+0,y+5,y+8,y+-2,y+0,y+1,y+2,y+3,y+4,y+5,y+8,y+-2,y+8,y+-2,y+8,y+-2,y+8,y+-2,y+8,y+-2,y+8,y+-2,y+8,y+-2,y+8,y+-2,y+8,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+1,y+2,y+3,y+4,y+5,y+8,y+-2,y+0,y+3,y+4,y+5,y+6,y+7,y+8,y+-2,y+0,y+4,y+5,y+6,y+7,y+8,y+-2,y+1,y+2,y+3,y+4,y+5,y+8,y+-2,y+8,y+-2,y+8,y+-2,y+8,y+-2,y+8,y+-2,y+8,y+-2,y+8,y+-2,y+8,y+-2,y+8,y+-2,y+-2,y+-2,y+8,y+-2,y+8,y+-2,y+8,y+-2,y+8,y+-2,y+8,y+-2,y+8,y+-2,y+8,y+-2,y+8,y+-2,y+8,y+-2,y+1,y+2,y+3,y+4,y+8,y+-2,y+0,y+2,y+3,y+4,y+5,y+6,y+7,y+8,y+-2,y+0,y+2,y+3,y+4,y+5,y+6,y+7,y+8,y+-2,y+1,y+2,y+3,y+4,y+8,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+8,y+-2,y+8,y+-2,y+8,y+-2,y+8,y+-2,y+8,y+-2,y+8,y+-2,y+8,y+-2,y+8,y+-2,y+8,y+-2,y+1,y+2,y+3,y+8,y+-2,y+0,y+2,y+3,y+4,y+8,y+-2,y+0,y+2,y+3,y+4,y+8,y+-2,y+1,y+2,y+3,y+8,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+1,y+2,y+-2,y+0,y+2,y+3,y+-2,y+0,y+2,y+3,y+8,y+-2,y+1,y+2,y+8,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+0,y+1,y+2,y+3,y+-2,y+0,y+1,y+2,y+3,y+8,y+-2,y+8,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+0,y+1,y+2,y+-2,y+0,y+1,y+2,y+8,y+-2,y+8,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+0,y+1,y+2,y+-2,y+0,y+1,y+2,y+8,y+-2,y+8,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+0,y+1,y+2,y+-2,y+0,y+1,y+4,y+8,y+-2,y+8,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+-2,y+-1,y+0,y+1,y+3,y+4,y+8,y+-2,y+8,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+0,y+1,y+2,y+3,y+4,y+-2,y+0,y+1,y+3,y+4,y+5,y+8,y+-2,y+8,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+4,y+5,y+8,y+-2,y+8,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+4,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+8,y+9,y+10,y+11,y+12,y+13,y+14,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2];
 var Z=[z,z+-21,z+-20,z+-19,z+-18,z+-17,z+-16,z+-15,z+-14,z+-13,z+-12,z+-11,z+-10,z+-9,z+-8,z+-7,z+-6,z+-5,z+-4,z+-3,z+-2,z+-1,z+0,z+0,z+0,z+1,z+-21,z+-20,z+-19,z+-18,z+-17,z+-16,z+-15,z+-14,z+-13,z+-12,z+-11,z+-11,z+-10,z+-10,z+-9,z+-8,z+-7,z+-6,z+-5,z+-4,z+-3,z+-2,z+-1,z+0,z+1,z+-21,z+-20,z+-19,z+-18,z+-17,z+-16,z+-15,z+-14,z+-13,z+-12,z+-11,z+-11,z+-10,z+-10,z+-9,z+-8,z+-7,z+-6,z+-5,z+-4,z+-3,z+-2,z+-1,z+0,z+1,z+-21,z+-20,z+-19,z+-18,z+-17,z+-16,z+-15,z+-14,z+-13,z+-12,z+-11,z+-11,z+-10,z+-10,z+-9,z+-8,z+-7,z+-6,z+-5,z+-4,z+-3,z+-2,z+-1,z+0,z+1,z+-21,z+-20,z+-19,z+-18,z+-17,z+-16,z+-15,z+-14,z+-13,z+-12,z+-11,z+-11,z+-10,z+-10,z+-9,z+-8,z+-7,z+-6,z+-5,z+-4,z+-3,z+-2,z+-1,z+0,z+1,z+-21,z+-20,z+-19,z+-18,z+-17,z+-16,z+-15,z+-14,z+-13,z+-12,z+-11,z+-11,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-8,z+-7,z+-6,z+-5,z+-4,z+-3,z+-2,z+-1,z+0,z+1,z+-21,z+-20,z+-19,z+-18,z+-17,z+-16,z+-15,z+-14,z+-13,z+-12,z+-11,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-9,z+-8,z+-8,z+-8,z+-7,z+-6,z+-5,z+-4,z+-3,z+-2,z+-1,z+0,z+1,z+-21,z+-20,z+-19,z+-18,z+-17,z+-16,z+-15,z+-14,z+-13,z+-12,z+-11,z+-11,z+-11,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-8,z+-8,z+-8,z+-8,z+-8,z+-7,z+-6,z+-5,z+-4,z+-3,z+-2,z+-1,z+0,z+1,z+-21,z+-20,z+-19,z+-18,z+-17,z+-16,z+-15,z+-14,z+-13,z+-12,z+-11,z+-11,z+-11,z+-11,z+-11,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-8,z+-8,z+-8,z+-8,z+-8,z+-8,z+-8,z+-7,z+-6,z+-5,z+-4,z+-3,z+-2,z+-1,z+0,z+1,z+-21,z+-20,z+-19,z+-18,z+-17,z+-16,z+-15,z+-14,z+-13,z+-12,z+-11,z+-11,z+-11,z+-11,z+-11,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-9,z+-8,z+-8,z+-8,z+-8,z+-8,z+-8,z+-8,z+-8,z+-7,z+-7,z+-6,z+-6,z+-5,z+-5,z+-4,z+-4,z+-3,z+-3,z+-2,z+-2,z+-1,z+-1,z+0,z+0,z+1,z+-21,z+-20,z+-19,z+-18,z+-17,z+-16,z+-15,z+-14,z+-13,z+-12,z+-11,z+-11,z+-11,z+-11,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-10,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-9,z+-9,z+-9,z+-9,z+-8,z+-8,z+-8,z+-8,z+-8,z+-8,z+-8,z+-7,z+-7,z+-6,z+-6,z+-5,z+-5,z+-4,z+-4,z+-3,z+-3,z+-2,z+-2,z+-1,z+-1,z+0,z+0,z+1,z+-21,z+-20,z+-20,z+-19,z+-19,z+-18,z+-18,z+-17,z+-17,z+-16,z+-16,z+-15,z+-15,z+-14,z+-14,z+-13,z+-13,z+-12,z+-12,z+-11,z+-11,z+-11,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-10,z+-10,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-9,z+-9,z+-9,z+-9,z+-9,z+-9,z+-8,z+-8,z+-8,z+-8,z+-8,z+-8,z+-7,z+-6,z+-5,z+-4,z+-3,z+-2,z+-1,z+0,z+1,z+-21,z+-20,z+-20,z+-19,z+-19,z+-18,z+-18,z+-17,z+-17,z+-16,z+-16,z+-15,z+-15,z+-14,z+-14,z+-13,z+-13,z+-12,z+-12,z+-11,z+-11,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-9,z+-9,z+-9,z+-8,z+-8,z+-8,z+-8,z+-8,z+-7,z+-6,z+-5,z+-4,z+-3,z+-2,z+-1,z+0,z+1,z+-21,z+-20,z+-19,z+-18,z+-17,z+-16,z+-15,z+-14,z+-13,z+-12,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-9,z+-9,z+-8,z+-8,z+-8,z+-8,z+-7,z+-6,z+-5,z+-4,z+-3,z+-2,z+-1,z+0,z+1,z+-21,z+-20,z+-19,z+-18,z+-17,z+-16,z+-15,z+-14,z+-13,z+-12,z+-11,z+-10,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-9,z+-9,z+-9,z+-8,z+-8,z+-7,z+-6,z+-5,z+-4,z+-3,z+-2,z+-1,z+0,z+1,z+-21,z+-20,z+-19,z+-18,z+-17,z+-16,z+-15,z+-14,z+-13,z+-12,z+-11,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-9,z+-9,z+-8,z+-8,z+-7,z+-6,z+-5,z+-4,z+-3,z+-2,z+-1,z+0,z+1,z+-21,z+-20,z+-19,z+-18,z+-17,z+-16,z+-15,z+-14,z+-13,z+-12,z+-11,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-9,z+-9,z+-8,z+-8,z+-7,z+-6,z+-5,z+-4,z+-3,z+-2,z+-1,z+0,z+1,z+-21,z+-20,z+-19,z+-18,z+-17,z+-16,z+-15,z+-14,z+-13,z+-12,z+-11,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-9,z+-9,z+-8,z+-8,z+-7,z+-6,z+-5,z+-4,z+-3,z+-2,z+-1,z+0,z+1,z+-21,z+-20,z+-19,z+-18,z+-17,z+-16,z+-15,z+-14,z+-13,z+-12,z+-11,z+-10,z+-10,z+-10,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-9,z+-9,z+-9,z+-9,z+-8,z+-8,z+-7,z+-6,z+-5,z+-4,z+-3,z+-2,z+-1,z+0,z+1,z+-21,z+-20,z+-19,z+-18,z+-17,z+-16,z+-15,z+-14,z+-13,z+-12,z+-11,z+-10,z+-10,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-9,z+-9,z+-9,z+-9,z+-8,z+-8,z+-7,z+-6,z+-5,z+-4,z+-3,z+-2,z+-1,z+0,z+1,z+-21,z+-20,z+-19,z+-18,z+-17,z+-16,z+-15,z+-14,z+-13,z+-12,z+-11,z+-10,z+-9,z+-9,z+-9,z+-9,z+-8,z+-8,z+-7,z+-6,z+-5,z+-4,z+-3,z+-2,z+-1,z+0,z+1,z+-21,z+-20,z+-19,z+-18,z+-17,z+-16,z+-15,z+-14,z+-13,z+-12,z+-11,z+-10,z+-9,z+-9,z+-8,z+-7,z+-6,z+-5,z+-4,z+-3,z+-2,z+-1,z+0,z+1,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-19,z+-18,z+-17,z+-16,z+-15,z+-14,z+-13,z+-12,z+-11,z+-10,z+-9,z+-8,z+-7,z+-6,z+-5,z+-4,z+-3,z+-2,z+-1,z+0,z+1];
 var I=[0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,57,0,0,2,2,2,2,2,2,2,2,2,2,2,44,2,44,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,44,2,44,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,44,2,44,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,44,2,44,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,44,2,35,35,44,2,35,35,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,35,35,44,2,35,35,35,44,2,35,35,35,2,35,35,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,35,35,35,35,44,2,35,20,44,2,35,20,2,35,35,35,35,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,173,35,35,35,35,20,44,2,35,35,44,2,35,35,3,173,35,35,35,35,20,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,35,35,35,35,35,35,44,2,35,35,44,2,35,35,44,2,35,35,35,35,35,35,44,2,44,2,44,2,44,2,44,2,44,2,44,2,44,2,44,2,2,2,2,2,2,2,2,2,2,2,2,35,35,35,35,35,44,2,35,35,35,35,139,139,43,2,35,35,35,139,139,43,2,35,35,35,35,35,44,2,44,2,44,2,44,2,44,2,44,2,44,2,44,2,44,2,2,2,44,2,44,2,44,2,44,2,44,2,44,2,44,2,44,2,44,2,35,35,35,35,44,2,35,35,35,35,35,139,139,43,2,35,35,35,35,35,139,139,43,2,35,35,35,35,44,2,2,2,2,2,2,2,2,2,2,2,44,2,44,2,44,2,44,2,44,2,44,2,44,2,44,2,44,2,35,35,35,44,2,35,35,35,35,44,2,35,35,35,35,44,2,35,35,35,44,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,35,35,2,35,35,35,2,35,35,35,44,2,35,35,44,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,35,35,35,35,2,35,35,35,35,44,2,44,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,35,35,35,2,35,35,35,44,2,44,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,35,35,35,2,35,35,35,44,2,44,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,35,35,35,2,35,35,44,44,2,44,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,173,35,35,35,35,35,3,173,35,35,44,44,44,2,44,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,35,35,35,35,35,2,35,35,44,42,44,44,2,44,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,44,44,44,2,44,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,44,2,2,2,2,2,2,2,2,2,2,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2];
 var D=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,14,0,0,1,14,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  for(n=0;n<8993+1;n++){
   setTile(X[n], Y[n], Z[n], I[n], D[n]);
  }
}

function Helicopter2(x,y,z){
 var X=[x,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16];
 var Y=[y,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-1,y+0,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+6,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+5,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+5,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+5,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+5,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+1,y+2,y+-2,y+-1,y+1,y+2,y+-2,y+-1,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+3,y+5,y+-2,y+-1,y+0,y+1,y+3,y+-2,y+-1,y+1,y+2,y+-2,y+-1,y+1,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+1,y+-2,y+0,y+1,y+2,y+-2,y+0,y+1,y+2,y+-2,y+0,y+1,y+3,y+-2,y+-1,y+0,y+1,y+3,y+-2,y+0,y+1,y+3,y+5,y+6,y+-2,y+0,y+1,y+3,y+-2,y+-1,y+0,y+1,y+3,y+-2,y+0,y+1,y+2,y+-2,y+1,y+-2,y+-2,y+-2,y+-2,y+-2,y+2,y+3,y+-2,y+1,y+2,y+-2,y+1,y+2,y+-2,y+1,y+-2,y+1,y+-2,y+1,y+2,y+-2,y+0,y+1,y+2,y+-2,y+0,y+1,y+2,y+3,y+-2,y+0,y+1,y+3,y+-2,y+0,y+1,y+3,y+-2,y+0,y+1,y+3,y+4,y+5,y+6,y+-2,y+0,y+1,y+3,y+-2,y+0,y+1,y+3,y+-2,y+0,y+1,y+3,y+-2,y+0,y+1,y+2,y+-2,y+1,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+1,y+-2,y+0,y+1,y+2,y+-2,y+0,y+1,y+2,y+-2,y+0,y+1,y+3,y+-2,y+-1,y+0,y+1,y+3,y+-2,y+0,y+1,y+3,y+5,y+6,y+-2,y+0,y+1,y+3,y+-2,y+-1,y+0,y+1,y+3,y+-2,y+0,y+1,y+2,y+-2,y+1,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+1,y+2,y+-2,y+-1,y+1,y+2,y+-2,y+-1,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+3,y+5,y+-2,y+-1,y+0,y+1,y+3,y+-2,y+-1,y+1,y+2,y+-2,y+-1,y+1,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+5,y+-2,y+0,y+-2,y+0,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+5,y+-2,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+5,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+5,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+6,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+8,y+9,y+10,y+11,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2];
 var Z=[z,z+-18,z+-17,z+-16,z+-15,z+-14,z+-13,z+-12,z+-11,z+-10,z+-9,z+-8,z+-7,z+-6,z+-5,z+-4,z+-3,z+-2,z+-1,z+0,z+-18,z+-17,z+-16,z+-15,z+-14,z+-13,z+-12,z+-11,z+-10,z+-9,z+-8,z+-7,z+-6,z+-5,z+-4,z+-3,z+-2,z+-1,z+0,z+0,z+0,z+-18,z+-17,z+-16,z+-15,z+-14,z+-13,z+-12,z+-11,z+-10,z+-9,z+-8,z+-7,z+-6,z+-5,z+-4,z+-3,z+-3,z+-2,z+-1,z+0,z+-18,z+-17,z+-16,z+-15,z+-14,z+-13,z+-12,z+-11,z+-10,z+-9,z+-8,z+-7,z+-6,z+-5,z+-4,z+-4,z+-3,z+-2,z+-1,z+0,z+-18,z+-17,z+-16,z+-15,z+-14,z+-13,z+-12,z+-11,z+-10,z+-9,z+-8,z+-7,z+-6,z+-5,z+-4,z+-4,z+-3,z+-2,z+-1,z+0,z+-18,z+-17,z+-16,z+-15,z+-14,z+-13,z+-12,z+-11,z+-10,z+-9,z+-8,z+-7,z+-6,z+-5,z+-5,z+-4,z+-3,z+-2,z+-1,z+0,z+-18,z+-17,z+-16,z+-15,z+-14,z+-13,z+-12,z+-11,z+-10,z+-9,z+-8,z+-7,z+-6,z+-5,z+-5,z+-4,z+-3,z+-2,z+-1,z+0,z+-18,z+-17,z+-16,z+-15,z+-14,z+-13,z+-12,z+-11,z+-10,z+-9,z+-9,z+-9,z+-8,z+-8,z+-8,z+-8,z+-7,z+-7,z+-7,z+-7,z+-7,z+-6,z+-6,z+-6,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-4,z+-3,z+-3,z+-3,z+-2,z+-1,z+0,z+-18,z+-17,z+-16,z+-15,z+-14,z+-13,z+-12,z+-11,z+-11,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-9,z+-8,z+-8,z+-8,z+-8,z+-7,z+-7,z+-7,z+-7,z+-7,z+-6,z+-6,z+-6,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-4,z+-4,z+-3,z+-3,z+-3,z+-3,z+-2,z+-2,z+-1,z+0,z+-18,z+-17,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-13,z+-13,z+-12,z+-12,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-9,z+-9,z+-8,z+-8,z+-8,z+-8,z+-7,z+-7,z+-7,z+-7,z+-6,z+-6,z+-6,z+-6,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-4,z+-3,z+-3,z+-3,z+-3,z+-2,z+-2,z+-2,z+-2,z+-1,z+-1,z+0,z+-18,z+-17,z+-16,z+-15,z+-14,z+-13,z+-12,z+-11,z+-11,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-9,z+-8,z+-8,z+-8,z+-8,z+-7,z+-7,z+-7,z+-7,z+-7,z+-6,z+-6,z+-6,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-4,z+-4,z+-3,z+-3,z+-3,z+-3,z+-2,z+-2,z+-1,z+0,z+-18,z+-17,z+-16,z+-15,z+-14,z+-13,z+-12,z+-11,z+-10,z+-9,z+-9,z+-9,z+-8,z+-8,z+-8,z+-8,z+-7,z+-7,z+-7,z+-7,z+-7,z+-6,z+-6,z+-6,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-4,z+-3,z+-3,z+-3,z+-2,z+-1,z+0,z+-18,z+-17,z+-16,z+-15,z+-14,z+-13,z+-12,z+-11,z+-10,z+-9,z+-8,z+-7,z+-7,z+-6,z+-6,z+-5,z+-5,z+-4,z+-3,z+-2,z+-1,z+0,z+-18,z+-17,z+-16,z+-15,z+-14,z+-13,z+-12,z+-11,z+-10,z+-9,z+-8,z+-7,z+-7,z+-6,z+-6,z+-5,z+-5,z+-5,z+-4,z+-4,z+-3,z+-2,z+-1,z+0,z+-18,z+-17,z+-16,z+-15,z+-14,z+-13,z+-12,z+-11,z+-10,z+-9,z+-8,z+-8,z+-7,z+-6,z+-5,z+-4,z+-3,z+-2,z+-1,z+0,z+-18,z+-17,z+-16,z+-15,z+-14,z+-13,z+-12,z+-11,z+-10,z+-9,z+-8,z+-8,z+-7,z+-6,z+-5,z+-4,z+-3,z+-2,z+-1,z+0,z+-18,z+-17,z+-16,z+-15,z+-14,z+-13,z+-12,z+-11,z+-10,z+-9,z+-9,z+-8,z+-7,z+-6,z+-5,z+-4,z+-3,z+-2,z+-1,z+0,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-16,z+-15,z+-14,z+-13,z+-12,z+-11,z+-10,z+-9,z+-8,z+-7,z+-6,z+-5,z+-4,z+-3,z+-2,z+-1,z+0];
 var I=[0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,57,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,158,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,158,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,158,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,158,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,158,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,44,44,2,44,35,35,2,109,35,35,44,2,44,68,171,44,158,2,44,68,171,44,2,109,35,35,2,44,35,2,2,2,2,2,2,2,2,2,2,2,44,2,44,35,44,2,35,35,35,2,35,114,44,2,44,35,114,44,2,35,68,44,158,44,2,35,171,44,2,44,35,27,44,2,20,107,20,2,35,2,2,2,2,2,109,44,2,35,35,2,35,44,2,35,2,35,2,35,44,2,35,35,35,2,35,61,54,44,2,35,171,44,2,35,171,44,2,35,171,44,101,101,44,2,35,171,44,2,35,245,35,2,35,139,44,2,35,247,20,2,35,2,2,2,2,2,2,2,2,2,44,2,44,35,44,2,35,35,35,2,35,114,44,2,44,35,114,44,2,35,68,44,158,44,2,35,171,44,2,44,35,27,44,2,20,107,20,2,35,2,2,2,2,2,2,2,2,2,2,2,2,44,44,2,44,35,35,2,109,35,35,44,2,44,68,171,44,158,2,44,68,171,44,2,109,35,35,2,44,35,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,158,2,44,2,44,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,158,2,44,2,109,109,2,109,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,158,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,158,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,158,2,2,2,2,2,2,2,2,2,2,57,57,57,57,57,57,57,57,57,57,57,57,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2];
 var D=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,5,13,13,0,0,13,13,0,0,5,4,13,0,13,0,5,4,13,0,0,0,13,13,0,5,13,0,0,0,0,0,0,0,0,0,0,0,0,0,8,13,0,0,13,13,13,0,13,1,0,0,13,13,1,8,0,7,3,8,13,0,0,13,7,8,0,13,13,1,0,0,0,0,0,0,15,0,0,0,0,0,6,0,0,13,13,0,13,0,0,13,0,13,0,13,0,0,13,13,13,0,13,3,3,0,0,13,7,0,0,13,7,8,0,13,7,8,0,0,0,0,13,7,0,0,13,0,13,0,13,0,0,0,13,0,0,0,15,0,0,0,0,0,0,0,0,0,0,0,8,13,0,0,13,13,13,0,13,0,0,0,13,13,0,8,0,7,3,8,13,0,0,13,7,8,0,13,13,1,0,0,0,0,0,0,15,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,5,13,13,0,1,13,13,0,0,5,5,13,0,13,0,5,5,13,0,0,1,13,13,0,5,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,8,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,8,0,6,3,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  for(n=0;n<4788+1;n++){
   setTile(X[n], Y[n], Z[n], I[n], D[n]);
  }
}

function Helicopter3(x,y,z){
 var X=[x,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21];
 var Y=[y,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-1,y+0,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+2,y+-2,y+2,y+-2,y+2,y+3,y+4,y+-2,y+2,y+-2,y+2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+2,y+-2,y+2,y+3,y+-2,y+2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+7,y+-2,y+7,y+-2,y+-2,y+-2,y+-2,y+-2,y+2,y+-2,y+-2,y+-2,y+-2,y+-2,y+7,y+-2,y+7,y+-2,y+-2,y+-2,y+-2,y+7,y+-2,y+7,y+-2,y+-2,y+2,y+3,y+-2,y+1,y+2,y+3,y+-2,y+1,y+2,y+3,y+-2,y+1,y+2,y+3,y+-2,y+2,y+3,y+-2,y+-2,y+7,y+-2,y+7,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+7,y+-2,y+7,y+-2,y+2,y+3,y+-2,y+1,y+4,y+-2,y+1,y+4,y+-2,y+1,y+4,y+-2,y+2,y+3,y+-2,y+7,y+-2,y+7,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+7,y+-2,y+2,y+3,y+7,y+-2,y+1,y+4,y+-2,y+1,y+4,y+-2,y+1,y+4,y+-2,y+2,y+3,y+7,y+-2,y+7,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+2,y+3,y+7,y+-2,y+1,y+4,y+7,y+-2,y+1,y+4,y+-2,y+1,y+4,y+7,y+-2,y+2,y+3,y+7,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+1,y+2,y+3,y+-2,y+1,y+4,y+7,y+-2,y+1,y+4,y+5,y+7,y+-2,y+1,y+4,y+7,y+-2,y+1,y+2,y+3,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+1,y+2,y+3,y+-2,y+1,y+4,y+5,y+-2,y+1,y+4,y+5,y+6,y+7,y+-2,y+1,y+4,y+5,y+-2,y+1,y+2,y+3,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+1,y+2,y+3,y+-2,y+1,y+4,y+7,y+-2,y+1,y+4,y+5,y+7,y+-2,y+1,y+4,y+7,y+-2,y+1,y+2,y+3,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+1,y+2,y+3,y+7,y+-2,y+1,y+4,y+7,y+-2,y+1,y+4,y+-2,y+1,y+4,y+7,y+-2,y+1,y+2,y+3,y+7,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+7,y+-2,y+1,y+7,y+-2,y+1,y+4,y+-2,y+1,y+4,y+-2,y+1,y+4,y+-2,y+1,y+7,y+-2,y+7,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+7,y+-2,y+7,y+-2,y+2,y+3,y+-2,y+1,y+2,y+3,y+4,y+-2,y+1,y+4,y+-2,y+1,y+2,y+3,y+4,y+-2,y+2,y+3,y+-2,y+7,y+-2,y+7,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+7,y+-2,y+7,y+-2,y+-2,y+2,y+3,y+-2,y+-1,y+1,y+4,y+-2,y+-1,y+0,y+1,y+4,y+-2,y+-1,y+1,y+4,y+-2,y+2,y+3,y+-2,y+-2,y+7,y+-2,y+7,y+-2,y+-2,y+-2,y+-2,y+-2,y+7,y+-2,y+7,y+-2,y+-2,y+-2,y+2,y+3,y+-2,y+1,y+4,y+-2,y+1,y+4,y+-2,y+1,y+4,y+-2,y+2,y+3,y+-2,y+-2,y+-2,y+7,y+-2,y+7,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+2,y+3,y+-2,y+1,y+3,y+-2,y+2,y+3,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+2,y+3,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+8,y+9,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2];
 var Z=[z,z+-14,z+-13,z+-12,z+-11,z+-10,z+-9,z+-8,z+-7,z+-6,z+-5,z+-4,z+-3,z+-2,z+-1,z+0,z+0,z+0,z+1,z+-14,z+-13,z+-12,z+-11,z+-10,z+-9,z+-8,z+-7,z+-6,z+-5,z+-4,z+-3,z+-2,z+-1,z+0,z+1,z+-14,z+-13,z+-12,z+-11,z+-10,z+-9,z+-8,z+-8,z+-7,z+-7,z+-6,z+-6,z+-6,z+-6,z+-5,z+-5,z+-4,z+-4,z+-3,z+-2,z+-1,z+0,z+1,z+-14,z+-13,z+-12,z+-11,z+-10,z+-9,z+-8,z+-7,z+-7,z+-6,z+-6,z+-6,z+-5,z+-5,z+-4,z+-3,z+-2,z+-1,z+0,z+1,z+-14,z+-13,z+-12,z+-11,z+-10,z+-9,z+-8,z+-7,z+-6,z+-6,z+-5,z+-4,z+-3,z+-2,z+-1,z+0,z+1,z+-14,z+-13,z+-12,z+-11,z+-10,z+-9,z+-8,z+-7,z+-6,z+-6,z+-5,z+-4,z+-3,z+-2,z+-1,z+0,z+1,z+-14,z+-13,z+-12,z+-12,z+-11,z+-11,z+-10,z+-9,z+-8,z+-7,z+-6,z+-6,z+-5,z+-4,z+-3,z+-2,z+-1,z+-1,z+0,z+0,z+1,z+-14,z+-13,z+-11,z+-11,z+-10,z+-10,z+-9,z+-8,z+-8,z+-8,z+-7,z+-7,z+-7,z+-7,z+-6,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-3,z+-2,z+-2,z+-1,z+-1,z+0,z+1,z+-14,z+-13,z+-12,z+-11,z+-10,z+-10,z+-9,z+-9,z+-8,z+-8,z+-8,z+-7,z+-7,z+-7,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-3,z+-3,z+-2,z+-2,z+-1,z+0,z+1,z+-14,z+-13,z+-12,z+-11,z+-10,z+-9,z+-9,z+-8,z+-8,z+-8,z+-8,z+-7,z+-7,z+-7,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-4,z+-3,z+-3,z+-2,z+-1,z+0,z+1,z+-14,z+-13,z+-12,z+-11,z+-10,z+-9,z+-8,z+-8,z+-8,z+-8,z+-7,z+-7,z+-7,z+-7,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-4,z+-3,z+-2,z+-1,z+0,z+1,z+-14,z+-13,z+-12,z+-11,z+-10,z+-9,z+-8,z+-8,z+-8,z+-8,z+-7,z+-7,z+-7,z+-7,z+-6,z+-6,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-4,z+-3,z+-2,z+-1,z+0,z+1,z+-14,z+-13,z+-12,z+-11,z+-10,z+-9,z+-8,z+-8,z+-8,z+-8,z+-7,z+-7,z+-7,z+-7,z+-6,z+-6,z+-6,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-4,z+-3,z+-2,z+-1,z+0,z+1,z+-14,z+-13,z+-12,z+-11,z+-10,z+-9,z+-8,z+-8,z+-8,z+-8,z+-7,z+-7,z+-7,z+-7,z+-6,z+-6,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-4,z+-3,z+-2,z+-1,z+0,z+1,z+-14,z+-13,z+-12,z+-11,z+-10,z+-9,z+-8,z+-8,z+-8,z+-8,z+-8,z+-7,z+-7,z+-7,z+-7,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-4,z+-4,z+-3,z+-2,z+-1,z+0,z+1,z+-14,z+-13,z+-12,z+-11,z+-10,z+-9,z+-9,z+-8,z+-8,z+-8,z+-7,z+-7,z+-7,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-3,z+-3,z+-2,z+-1,z+0,z+1,z+-14,z+-13,z+-12,z+-11,z+-10,z+-10,z+-9,z+-9,z+-8,z+-8,z+-8,z+-7,z+-7,z+-7,z+-7,z+-7,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-3,z+-3,z+-2,z+-2,z+-1,z+0,z+1,z+-14,z+-13,z+-12,z+-11,z+-11,z+-10,z+-10,z+-9,z+-8,z+-8,z+-8,z+-7,z+-7,z+-7,z+-7,z+-6,z+-6,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-3,z+-2,z+-2,z+-1,z+-1,z+0,z+1,z+-14,z+-13,z+-12,z+-12,z+-11,z+-11,z+-10,z+-9,z+-8,z+-8,z+-8,z+-7,z+-7,z+-7,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-3,z+-2,z+-1,z+-1,z+0,z+0,z+1,z+-14,z+-13,z+-12,z+-11,z+-10,z+-9,z+-8,z+-7,z+-7,z+-7,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-4,z+-3,z+-2,z+-1,z+0,z+1,z+-14,z+-13,z+-12,z+-11,z+-10,z+-9,z+-8,z+-7,z+-6,z+-6,z+-6,z+-5,z+-4,z+-3,z+-2,z+-1,z+0,z+1,z+-14,z+-14,z+-14,z+-14,z+-14,z+-14,z+-14,z+-14,z+-14,z+-14,z+-14,z+-14,z+-13,z+-12,z+-11,z+-10,z+-9,z+-8,z+-7,z+-6,z+-5,z+-4,z+-3,z+-2,z+-1,z+0,z+1];
 var I=[57,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,57,57,57,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,35,2,35,2,35,35,35,2,35,2,35,2,2,2,2,2,2,2,2,2,2,2,2,2,35,2,35,35,2,35,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,35,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,35,2,2,2,2,2,2,2,2,2,2,44,2,44,2,2,2,2,2,35,2,2,2,2,2,44,2,44,2,2,2,2,44,2,44,2,2,35,35,2,35,35,35,2,35,35,35,2,35,35,35,2,35,35,2,2,44,2,44,2,2,2,2,2,2,2,44,2,44,2,35,35,2,35,35,2,35,35,2,35,35,2,35,35,2,44,2,44,2,2,2,2,2,2,2,2,2,44,2,35,35,44,2,35,35,2,35,35,2,35,35,2,35,35,44,2,44,2,2,2,2,2,2,2,2,2,2,2,35,35,44,2,35,35,44,2,35,35,2,35,35,44,2,35,35,44,2,2,2,2,2,2,2,2,2,2,2,3,35,35,35,2,35,35,44,2,35,35,98,44,2,35,35,44,3,35,35,35,2,2,2,2,2,2,2,2,2,2,2,2,35,35,35,2,35,35,98,2,35,35,98,98,44,2,35,35,98,2,35,35,35,2,2,2,2,2,2,2,2,2,2,2,2,35,35,35,2,35,35,44,2,35,35,98,44,2,35,35,44,3,35,35,35,2,2,2,2,2,2,2,2,2,2,2,2,35,35,35,44,2,35,35,44,2,35,35,2,35,35,44,2,35,35,35,44,2,2,2,2,2,2,2,2,2,2,2,44,2,35,44,2,35,35,2,35,35,2,35,35,2,35,44,2,44,2,2,2,2,2,2,2,2,2,44,2,44,2,35,35,2,35,35,35,35,2,35,35,2,35,35,35,35,2,35,35,2,44,2,44,2,2,2,2,2,2,2,44,2,44,2,2,35,35,3,159,35,35,2,139,139,35,35,3,159,35,35,2,35,35,2,2,44,2,44,2,2,2,2,2,44,2,44,2,2,2,35,35,2,35,35,2,35,35,2,35,35,2,35,35,2,2,2,44,2,44,2,2,2,2,2,2,2,2,2,35,35,2,35,102,2,35,35,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,35,102,2,2,2,2,2,2,2,2,57,57,57,57,57,57,57,57,57,57,57,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2];
 var D=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,5,0,5,5,5,0,5,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,5,5,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,5,0,5,0,0,0,0,0,5,0,0,0,0,0,5,0,5,0,0,0,0,5,0,5,0,0,5,5,0,15,5,5,0,15,5,15,0,15,5,5,0,5,5,0,0,5,0,5,0,0,0,0,0,0,0,5,0,5,0,5,5,0,15,15,0,15,15,0,15,15,0,5,5,0,5,0,5,0,0,0,0,0,0,0,0,0,5,0,5,5,5,0,15,15,0,15,15,0,15,15,0,5,5,5,0,5,0,0,0,0,0,0,0,0,0,0,0,5,5,5,0,15,15,5,0,15,15,0,15,15,5,0,5,5,5,0,0,0,0,0,0,0,0,0,0,0,0,5,15,5,0,15,15,5,0,15,15,0,5,0,15,15,5,0,5,15,5,0,0,0,0,0,0,0,0,0,0,0,0,5,15,5,0,15,15,0,0,15,15,0,0,5,0,15,15,0,0,5,15,5,0,0,0,0,0,0,0,0,0,0,0,0,5,15,5,0,15,15,5,0,15,15,0,5,0,15,15,5,0,5,15,5,0,0,0,0,0,0,0,0,0,0,0,0,5,15,5,5,0,15,15,5,0,15,15,0,15,15,5,0,5,15,5,5,0,0,0,0,0,0,0,0,0,0,0,5,0,5,5,0,15,15,0,15,15,0,15,15,0,5,5,0,5,0,0,0,0,0,0,0,0,0,5,0,5,0,5,5,0,15,5,5,5,0,15,5,0,15,5,5,5,0,5,5,0,5,0,5,0,0,0,0,0,0,0,5,0,5,0,0,5,5,0,15,15,5,0,0,0,15,5,0,15,15,5,0,5,5,0,0,5,0,5,0,0,0,0,0,5,0,5,0,0,0,5,5,0,15,5,0,15,5,0,15,5,0,5,5,0,0,0,5,0,5,0,0,0,0,0,0,0,0,0,5,5,0,5,0,0,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  for(n=0;n<4224+1;n++){
   setTile(X[n], Y[n], Z[n], I[n], D[n]);
  }
}

function Helicopter4(x,y,z){
 var X=[x,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+-1,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0,x+0];
 var Y=[y,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+8,y+9,y+10,y+11,y+12,y+13,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+3,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+2,y+3,y+4,y+-2,y+3,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+2,y+3,y+-2,y+3,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+6,y+-2,y+-2,y+-2,y+1,y+2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+6,y+-2,y+-2,y+1,y+2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+6,y+-2,y+2,y+-2,y+1,y+2,y+3,y+-2,y+2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+1,y+2,y+6,y+-2,y+0,y+1,y+2,y+3,y+-2,y+1,y+2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+1,y+2,y+-2,y+0,y+1,y+2,y+6,y+-2,y+0,y+1,y+2,y+3,y+-2,y+0,y+1,y+2,y+-2,y+1,y+2,y+-2,y+-2,y+-2,y+-2,y+-2,y+6,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+0,y+1,y+2,y+3,y+-2,y+0,y+1,y+2,y+3,y+6,y+-2,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-2,y+-2,y+6,y+-2,y+6,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+3,y+-2,y+0,y+1,y+3,y+6,y+-2,y+-1,y+0,y+1,y+3,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+6,y+-2,y+6,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-1,y+0,y+1,y+2,y+3,y+6,y+-2,y+0,y+1,y+3,y+6,y+-2,y+0,y+1,y+3,y+4,y+5,y+6,y+-2,y+0,y+1,y+3,y+6,y+-2,y+-1,y+0,y+1,y+2,y+3,y+6,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+6,y+-2,y+6,y+-2,y+-1,y+0,y+3,y+-2,y+0,y+1,y+3,y+-2,y+0,y+1,y+3,y+6,y+-2,y+0,y+1,y+3,y+-2,y+-1,y+0,y+3,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+6,y+-2,y+6,y+-2,y+-2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+3,y+-2,y+0,y+1,y+3,y+6,y+-2,y+-1,y+0,y+1,y+3,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+6,y+-2,y+-2,y+-2,y+-2,y+-2,y+-1,y+0,y+1,y+-2,y+0,y+1,y+2,y+-2,y+0,y+1,y+3,y+-2,y+0,y+1,y+2,y+6,y+-2,y+-1,y+0,y+1,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+0,y+1,y+-2,y+0,y+1,y+2,y+-2,y+0,y+1,y+6,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+0,y+1,y+-2,y+-2,y+6,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+6,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+6,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-1,y+0,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2,y+-2];
 var Z=[z,z+-1,z+0,z+1,z+2,z+3,z+4,z+5,z+6,z+7,z+8,z+9,z+10,z+11,z+12,z+13,z+14,z+15,z+16,z+17,z+18,z+19,z+19,z+19,z+19,z+19,z+19,z+19,z+19,z+19,z+19,z+19,z+19,z+19,z+19,z+19,z+19,z+-1,z+0,z+1,z+2,z+3,z+4,z+5,z+6,z+7,z+8,z+9,z+10,z+11,z+12,z+13,z+14,z+15,z+16,z+17,z+18,z+19,z+-1,z+0,z+1,z+2,z+3,z+4,z+5,z+6,z+7,z+8,z+9,z+9,z+10,z+11,z+12,z+13,z+14,z+15,z+16,z+17,z+18,z+19,z+-1,z+0,z+1,z+2,z+3,z+4,z+5,z+6,z+7,z+8,z+8,z+8,z+8,z+9,z+9,z+10,z+11,z+12,z+13,z+14,z+15,z+16,z+17,z+18,z+19,z+-1,z+0,z+1,z+2,z+3,z+4,z+5,z+6,z+7,z+8,z+8,z+8,z+9,z+9,z+10,z+11,z+12,z+13,z+14,z+15,z+16,z+17,z+18,z+19,z+-1,z+0,z+1,z+2,z+3,z+4,z+5,z+5,z+6,z+7,z+8,z+8,z+8,z+9,z+10,z+11,z+12,z+13,z+14,z+15,z+16,z+17,z+18,z+19,z+-1,z+0,z+1,z+2,z+3,z+4,z+5,z+6,z+6,z+7,z+8,z+8,z+8,z+9,z+10,z+11,z+12,z+13,z+14,z+15,z+16,z+17,z+18,z+19,z+-1,z+0,z+1,z+2,z+3,z+4,z+5,z+6,z+6,z+7,z+7,z+8,z+8,z+8,z+8,z+9,z+9,z+10,z+11,z+12,z+13,z+14,z+15,z+16,z+17,z+18,z+19,z+-1,z+0,z+1,z+2,z+3,z+4,z+5,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+10,z+11,z+12,z+13,z+14,z+15,z+16,z+17,z+18,z+19,z+-1,z+0,z+1,z+2,z+3,z+4,z+5,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+11,z+12,z+13,z+14,z+15,z+15,z+16,z+17,z+18,z+19,z+-1,z+0,z+1,z+2,z+3,z+4,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+10,z+11,z+12,z+13,z+13,z+14,z+14,z+15,z+16,z+17,z+18,z+19,z+-1,z+0,z+1,z+2,z+3,z+4,z+5,z+6,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+10,z+10,z+11,z+11,z+12,z+12,z+13,z+14,z+15,z+16,z+17,z+18,z+19,z+-1,z+0,z+1,z+2,z+3,z+4,z+5,z+6,z+6,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+10,z+10,z+10,z+11,z+12,z+13,z+14,z+15,z+16,z+17,z+18,z+19,z+-1,z+0,z+1,z+2,z+3,z+4,z+4,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+11,z+12,z+13,z+14,z+15,z+16,z+17,z+18,z+19,z+-1,z+0,z+1,z+2,z+2,z+3,z+3,z+4,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+10,z+11,z+12,z+13,z+14,z+15,z+16,z+17,z+18,z+19,z+-1,z+0,z+1,z+1,z+2,z+3,z+4,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+11,z+12,z+13,z+14,z+15,z+16,z+17,z+18,z+19,z+-1,z+0,z+1,z+2,z+3,z+4,z+5,z+6,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+10,z+11,z+12,z+13,z+14,z+15,z+16,z+17,z+18,z+19,z+-1,z+0,z+1,z+2,z+3,z+4,z+5,z+6,z+7,z+8,z+8,z+8,z+9,z+10,z+10,z+11,z+12,z+13,z+14,z+15,z+16,z+17,z+18,z+19,z+-1,z+0,z+1,z+2,z+3,z+4,z+5,z+6,z+7,z+8,z+9,z+10,z+10,z+11,z+12,z+13,z+14,z+15,z+16,z+17,z+18,z+19,z+-1,z+0,z+1,z+2,z+3,z+4,z+5,z+6,z+7,z+8,z+9,z+10,z+11,z+11,z+12,z+13,z+14,z+15,z+16,z+17,z+18,z+19,z+-1,z+0,z+0,z+0,z+1,z+2,z+3,z+4,z+5,z+6,z+7,z+8,z+9,z+10,z+11,z+12,z+13,z+14,z+15,z+16,z+17,z+18,z+19];
 var I=[0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,57,57,57,57,57,57,57,57,57,57,57,57,57,57,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,107,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,35,35,156,2,42,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,35,156,2,107,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,44,2,2,2,44,35,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,44,2,2,35,35,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,44,2,44,2,35,35,44,2,44,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,44,35,44,2,44,35,35,44,2,44,35,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,44,44,2,44,35,35,44,2,35,35,35,44,2,44,35,35,2,44,44,2,2,2,2,2,44,2,2,2,2,2,2,2,2,2,2,2,2,44,44,35,35,2,35,35,35,44,2,35,35,35,44,44,2,35,35,35,44,2,44,44,35,35,2,2,2,44,2,44,2,2,2,2,2,2,2,2,2,2,2,2,2,109,44,35,35,44,2,44,35,156,44,2,35,156,44,44,2,44,35,156,44,2,109,44,35,35,44,2,44,2,44,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,44,44,101,101,44,44,2,35,171,44,44,2,35,171,44,139,139,43,2,35,171,44,44,2,44,44,101,101,44,44,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,44,2,44,2,44,44,44,2,35,171,44,2,35,171,44,44,2,35,171,44,2,44,44,44,2,2,2,2,2,2,2,2,2,2,2,2,2,44,2,44,2,2,2,109,44,35,35,2,44,35,156,44,2,35,171,44,44,2,44,35,156,44,2,109,44,35,35,2,2,2,2,2,2,2,2,2,2,2,2,44,2,2,2,2,2,44,44,35,2,35,107,20,2,35,171,44,2,35,107,20,44,2,44,44,35,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,44,35,2,35,245,20,2,44,35,44,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,44,35,2,2,44,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,44,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,44,2,2,2,2,2,2,2,2,0,2,57,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2];
 var D=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,13,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,1,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,13,0,0,8,13,13,0,0,8,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,8,13,13,0,0,13,13,13,0,0,8,13,13,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,8,13,13,0,13,13,13,0,0,13,13,13,0,0,0,13,13,13,0,0,5,8,13,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,8,13,13,0,0,13,13,3,0,0,13,1,8,0,0,13,13,2,0,0,3,8,13,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,13,0,0,0,0,0,13,7,8,0,0,13,7,8,0,0,0,0,13,7,8,0,0,5,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,13,0,0,13,7,0,0,13,7,8,0,0,13,7,0,0,5,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,8,13,13,0,13,13,1,0,0,13,7,0,0,0,13,13,1,0,0,3,8,13,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,8,13,0,13,3,0,0,13,7,0,0,13,3,0,0,0,5,8,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,13,0,13,0,0,0,8,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  for(n=0;n<7056+1;n++){
   setTile(X[n], Y[n], Z[n], I[n], D[n]);
  }
}

function Helicopter5(x,y,z){
 var X=[x,x+-14,x+-12,x+-12,x+-12,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-10,x+-10,x+-10,x+-10,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-4,x+-4,x+-4,x+-4,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-2,x+-2,x+-2,x+-1];
 var Y=[y,y+9,y+1,y+1,y+6,y+-1,y+-1,y+0,y+1,y+-1,y+0,y+1,y+6,y+-1,y+1,y+1,y+6,y+1,y+1,y+2,y+1,y+2,y+3,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+6,y+1,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+2,y+1,y+2,y+1,y+2,y+3,y+1,y+2,y+3,y+4,y+1,y+2,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+4,y+5,y+1,y+2,y+4,y+5,y+6,y+1,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+4,y+1,y+2,y+3,y+2,y+2,y+2,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+6,y+1,y+2,y+3,y+6,y+1,y+2,y+3,y+4,y+6,y+1,y+2,y+4,y+6,y+1,y+4,y+6,y+1,y+4,y+6,y+1,y+4,y+5,y+6,y+1,y+4,y+5,y+6,y+7,y+1,y+4,y+5,y+6,y+1,y+4,y+5,y+6,y+1,y+3,y+4,y+6,y+0,y+1,y+4,y+6,y+1,y+4,y+6,y+1,y+2,y+3,y+6,y+2,y+6,y+2,y+3,y+2,y+3,y+2,y+3,y+1,y+2,y+1,y+2,y+3,y+1,y+2,y+3,y+4,y+1,y+2,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+4,y+5,y+1,y+2,y+4,y+5,y+6,y+1,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+4,y+1,y+2,y+3,y+2,y+1,y+2,y+1,y+2,y+3,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+6,y+1,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+2,y+1,y+1,y+6,y+1,y+-1,y+-1,y+0,y+1,y+-1,y+0,y+1,y+6,y+-1,y+1,y+1,y+6,y+-2];
 var Z=[z,z+31,z+18,z+19,z+19,z+17,z+18,z+18,z+18,z+19,z+19,z+19,z+19,z+20,z+18,z+19,z+19,z+20,z+14,z+14,z+15,z+15,z+15,z+16,z+16,z+16,z+16,z+17,z+17,z+17,z+17,z+18,z+18,z+18,z+18,z+19,z+19,z+19,z+19,z+19,z+20,z+20,z+21,z+21,z+21,z+21,z+22,z+22,z+22,z+22,z+23,z+23,z+23,z+23,z+24,z+24,z+24,z+25,z+13,z+13,z+14,z+14,z+14,z+15,z+15,z+15,z+15,z+16,z+16,z+16,z+17,z+17,z+17,z+17,z+18,z+18,z+18,z+18,z+19,z+19,z+19,z+19,z+19,z+20,z+20,z+20,z+21,z+21,z+21,z+21,z+21,z+22,z+22,z+22,z+22,z+23,z+23,z+23,z+23,z+24,z+24,z+25,z+25,z+25,z+26,z+27,z+28,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+7,z+7,z+8,z+8,z+9,z+9,z+9,z+10,z+10,z+10,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+13,z+14,z+14,z+14,z+14,z+14,z+15,z+15,z+15,z+15,z+16,z+16,z+16,z+17,z+17,z+17,z+18,z+18,z+18,z+18,z+19,z+19,z+19,z+19,z+19,z+20,z+20,z+20,z+20,z+21,z+21,z+21,z+21,z+22,z+22,z+22,z+22,z+23,z+23,z+23,z+23,z+24,z+24,z+24,z+25,z+25,z+25,z+25,z+26,z+26,z+3,z+3,z+4,z+4,z+5,z+5,z+13,z+13,z+14,z+14,z+14,z+15,z+15,z+15,z+15,z+16,z+16,z+16,z+17,z+17,z+17,z+17,z+18,z+18,z+18,z+18,z+19,z+19,z+19,z+19,z+19,z+20,z+20,z+20,z+21,z+21,z+21,z+21,z+21,z+22,z+22,z+22,z+22,z+23,z+23,z+23,z+23,z+24,z+24,z+25,z+25,z+25,z+26,z+14,z+14,z+15,z+15,z+15,z+16,z+16,z+16,z+16,z+17,z+17,z+17,z+17,z+18,z+18,z+18,z+18,z+19,z+19,z+19,z+19,z+19,z+20,z+20,z+21,z+21,z+21,z+21,z+22,z+22,z+22,z+22,z+23,z+23,z+23,z+23,z+24,z+24,z+24,z+25,z+18,z+19,z+19,z+20,z+17,z+18,z+18,z+18,z+19,z+19,z+19,z+19,z+20,z+18,z+19,z+19,z+0];
 var I=[0,0,42,42,44,46,46,85,42,46,85,42,44,46,42,42,44,65,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,20,42,42,42,20,42,44,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,20,42,42,42,42,42,42,42,156,50,42,46,96,42,42,156,50,42,42,54,42,44,42,54,42,43,44,42,42,43,42,156,50,42,156,42,42,42,42,42,156,50,42,42,42,20,44,20,42,44,44,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,44,46,96,42,44,42,26,50,42,44,42,26,42,44,42,42,44,42,42,44,42,42,42,44,42,42,42,43,44,42,42,42,44,42,42,42,44,42,96,42,44,35,42,42,44,42,42,44,42,42,20,44,42,44,44,44,44,44,44,44,42,42,42,42,42,42,156,50,42,46,96,42,42,156,50,42,42,54,42,44,42,54,42,43,44,42,42,43,42,156,50,42,156,42,42,42,42,42,156,50,42,42,42,20,44,20,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,20,42,42,42,20,42,44,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,20,42,42,42,44,65,46,46,85,42,46,85,42,44,46,42,42,44,0];
 var D=[0,0,0,0,8,0,0,0,0,0,0,0,8,0,0,0,8,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,0,0,1,1,0,0,5,0,0,0,5,0,0,8,0,0,0,0,2,4,0,7,0,0,0,0,0,3,3,0,0,0,0,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,1,0,8,0,10,3,0,8,0,2,0,8,0,0,8,0,0,8,0,0,0,8,0,0,0,0,0,0,0,0,8,0,0,0,8,0,7,0,8,15,0,0,8,0,0,8,0,0,0,8,0,8,0,8,8,0,0,8,0,0,0,0,0,0,0,2,0,0,2,0,0,0,2,0,0,4,0,0,0,4,0,0,8,0,0,0,0,2,4,0,7,0,0,0,0,0,3,3,0,0,0,0,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,5,0,0,0,0,0,0,0,8,0,0,0,8,0];
  for(n=0;n<5376+1;n++){
   setTile(X[n], Y[n], Z[n], I[n], D[n]);
  }
}

function Helicopter6(x,y,z){
 var X=[x,x+-12,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-1];
 var Y=[y,y+11,y+2,y+3,y+4,y+5,y+6,y+2,y+3,y+4,y+5,y+6,y+7,y+8,y+2,y+3,y+4,y+5,y+6,y+7,y+8,y+6,y+5,y+7,y+2,y+3,y+4,y+2,y+3,y+4,y+3,y+3,y+6,y+3,y+6,y+6,y+6,y+3,y+3,y+2,y+3,y+2,y+3,y+2,y+3,y+5,y+7,y+3,y+2,y+3,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+4,y+5,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+1,y+2,y+3,y+2,y+2,y+2,y+3,y+4,y+5,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+4,y+5,y+1,y+4,y+5,y+1,y+4,y+5,y+1,y+4,y+1,y+4,y+1,y+2,y+4,y+1,y+2,y+3,y+2,y+3,y+2,y+3,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+4,y+5,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+1,y+2,y+3,y+2,y+3,y+3,y+2,y+3,y+2,y+3,y+2,y+3,y+5,y+7,y+2,y+3,y+4,y+2,y+3,y+4,y+3,y+3,y+6,y+3,y+6,y+6,y+6,y+2,y+3,y+4,y+5,y+6,y+2,y+3,y+4,y+5,y+6,y+7,y+8,y+2,y+3,y+4,y+5,y+6,y+7,y+8,y+6,y+5,y+7,y+-2];
 var Z=[z,z+-14,z+-8,z+-8,z+-8,z+-8,z+-8,z+-7,z+-7,z+-7,z+-7,z+-7,z+-7,z+-7,z+-6,z+-6,z+-6,z+-6,z+-6,z+-6,z+-6,z+-5,z+-4,z+-4,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-8,z+-7,z+-7,z+-6,z+-6,z+-5,z+-4,z+-12,z+-11,z+-8,z+-8,z+-7,z+-7,z+-6,z+-6,z+-4,z+-4,z+-12,z+-11,z+-11,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-9,z+-9,z+-8,z+-8,z+-8,z+-8,z+-8,z+-7,z+-7,z+-7,z+-7,z+-6,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-3,z+-2,z+-1,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-8,z+-8,z+-8,z+-7,z+-7,z+-7,z+-6,z+-6,z+-5,z+-5,z+-4,z+-4,z+-4,z+-3,z+-3,z+-3,z+-2,z+-12,z+-11,z+-11,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-9,z+-9,z+-8,z+-8,z+-8,z+-8,z+-8,z+-7,z+-7,z+-7,z+-7,z+-6,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-3,z+-12,z+-11,z+-8,z+-8,z+-7,z+-7,z+-6,z+-6,z+-4,z+-4,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-8,z+-7,z+-7,z+-6,z+-6,z+-5,z+-4,z+-8,z+-8,z+-8,z+-8,z+-8,z+-7,z+-7,z+-7,z+-7,z+-7,z+-7,z+-7,z+-6,z+-6,z+-6,z+-6,z+-6,z+-6,z+-6,z+-5,z+-4,z+-4,z+0];
 var I=[0,0,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,44,44,42,42,42,42,42,42,42,42,42,42,42,42,42,44,44,42,42,42,42,42,42,44,44,44,42,42,42,42,42,44,42,42,42,44,44,42,54,50,44,44,42,54,44,44,42,54,50,44,42,42,42,42,42,20,42,44,44,42,42,156,42,42,156,42,54,50,44,42,44,44,42,42,42,42,44,44,42,44,42,44,42,65,96,42,42,20,42,44,42,42,42,42,42,44,42,42,42,44,44,42,54,50,44,44,42,54,44,44,42,54,50,44,42,42,42,42,42,20,42,44,44,42,42,42,42,42,42,44,44,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,44,44,0];
 var D=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,6,0,0,0,0,0,0,8,0,6,0,0,0,0,0,6,0,0,0,6,14,0,5,1,6,14,0,5,6,14,0,5,1,6,0,0,0,0,0,0,0,6,6,0,0,3,0,0,3,0,3,3,6,0,6,14,0,0,0,0,6,14,0,6,0,6,0,2,1,0,0,0,0,6,0,0,0,0,0,6,0,0,0,6,14,0,4,2,6,14,0,4,6,14,0,4,2,6,0,0,0,0,0,0,0,6,6,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0];
  for(n=0;n<2520+1;n++){
   setTile(X[n], Y[n], Z[n], I[n], D[n]);
  }
}

function Helicopter8(x,y,z){
 var X=[x,x+-52,x+-52,x+-51,x+-51,x+-51,x+-50,x+-50,x+-50,x+-50,x+-50,x+-49,x+-49,x+-49,x+-49,x+-49,x+-49,x+-49,x+-49,x+-49,x+-49,x+-49,x+-49,x+-49,x+-49,x+-48,x+-48,x+-48,x+-48,x+-48,x+-48,x+-48,x+-48,x+-48,x+-48,x+-48,x+-48,x+-48,x+-48,x+-48,x+-48,x+-48,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-46,x+-46,x+-46,x+-46,x+-46,x+-46,x+-46,x+-46,x+-46,x+-46,x+-46,x+-46,x+-46,x+-46,x+-46,x+-46,x+-46,x+-46,x+-46,x+-46,x+-46,x+-46,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-13,x+-13,x+-13,x+-13,x+-12,x+-12,x+-12,x+-11,x+-11,x+-11,x+-10,x+-10,x+-10,x+-10,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-3,x+-3,x+-3,x+-2,x+-2,x+-1,x+0,x+0,x+0,x+0];
 var Y=[y,y+13,y+0,y+10,y+10,y+10,y+10,y+10,y+0,y+10,y+10,y+10,y+10,y+-1,y+0,y+1,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+10,y+10,y+10,y+10,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+2,y+3,y+-1,y+0,y+1,y+2,y+10,y+10,y+10,y+10,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+3,y+-1,y+0,y+1,y+2,y+0,y+1,y+2,y+10,y+10,y+10,y+10,y+0,y+1,y+2,y+3,y+-1,y+0,y+3,y+-2,y+-1,y+0,y+3,y+-1,y+0,y+3,y+0,y+1,y+2,y+3,y+10,y+10,y+10,y+10,y+-1,y+0,y+1,y+4,y+-1,y+0,y+1,y+2,y+3,y+4,y+-1,y+0,y+1,y+2,y+4,y+-2,y+-1,y+0,y+4,y+-1,y+0,y+1,y+4,y+0,y+1,y+2,y+3,y+4,y+10,y+10,y+10,y+10,y+0,y+1,y+2,y+3,y+4,y+-1,y+0,y+1,y+4,y+-1,y+0,y+5,y+-1,y+0,y+1,y+4,y+0,y+1,y+2,y+3,y+4,y+10,y+10,y+10,y+10,y+0,y+1,y+2,y+3,y+4,y+-1,y+0,y+1,y+2,y+5,y+6,y+-1,y+0,y+5,y+-1,y+0,y+5,y+6,y+0,y+1,y+2,y+3,y+4,y+10,y+10,y+10,y+10,y+0,y+1,y+2,y+3,y+4,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+-1,y+0,y+1,y+2,y+4,y+5,y+-1,y+0,y+1,y+5,y+6,y+0,y+1,y+2,y+3,y+4,y+10,y+10,y+10,y+10,y+0,y+1,y+2,y+3,y+4,y+5,y+-1,y+0,y+1,y+2,y+3,y+6,y+-1,y+0,y+1,y+6,y+-1,y+0,y+1,y+6,y+0,y+1,y+2,y+3,y+4,y+5,y+10,y+10,y+10,y+10,y+-1,y+0,y+1,y+4,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-1,y+0,y+1,y+4,y+6,y+7,y+-1,y+0,y+2,y+6,y+7,y+-1,y+0,y+1,y+5,y+6,y+7,y+0,y+1,y+2,y+3,y+4,y+5,y+10,y+10,y+10,y+2,y+3,y+4,y+10,y+0,y+1,y+2,y+3,y+4,y+5,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+-1,y+0,y+2,y+3,y+4,y+5,y+6,y+7,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+0,y+1,y+2,y+3,y+4,y+5,y+2,y+3,y+4,y+10,y+10,y+1,y+2,y+3,y+4,y+5,y+10,y+0,y+1,y+2,y+5,y+6,y+10,y+-1,y+0,y+1,y+2,y+5,y+6,y+7,y+-1,y+0,y+1,y+2,y+3,y+6,y+7,y+-1,y+0,y+1,y+3,y+4,y+6,y+7,y+0,y+1,y+4,y+5,y+6,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+10,y+-1,y+0,y+1,y+4,y+10,y+1,y+2,y+3,y+4,y+5,y+0,y+1,y+5,y+6,y+10,y+-1,y+0,y+1,y+3,y+4,y+6,y+7,y+10,y+-1,y+0,y+1,y+3,y+4,y+6,y+7,y+-1,y+0,y+1,y+3,y+4,y+6,y+7,y+0,y+1,y+5,y+6,y+10,y+1,y+2,y+3,y+4,y+5,y+6,y+10,y+6,y+1,y+2,y+3,y+4,y+5,y+0,y+1,y+2,y+5,y+6,y+8,y+-1,y+0,y+1,y+6,y+7,y+8,y+10,y+-1,y+0,y+1,y+6,y+7,y+8,y+10,y+-1,y+0,y+1,y+6,y+7,y+8,y+10,y+0,y+1,y+2,y+5,y+6,y+7,y+8,y+10,y+1,y+2,y+3,y+4,y+5,y+7,y+6,y+1,y+2,y+3,y+4,y+5,y+0,y+1,y+2,y+5,y+6,y+7,y+8,y+-1,y+0,y+1,y+6,y+7,y+8,y+10,y+-1,y+0,y+1,y+6,y+7,y+8,y+9,y+10,y+-1,y+0,y+1,y+6,y+7,y+8,y+10,y+0,y+1,y+2,y+5,y+6,y+7,y+8,y+1,y+2,y+3,y+4,y+5,y+-1,y+0,y+1,y+-2,y+-1,y+0,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+3,y+0,y+4,y+4,y+1,y+2,y+3,y+4,y+5,y+0,y+1,y+2,y+5,y+6,y+7,y+10,y+-1,y+0,y+1,y+6,y+7,y+10,y+-1,y+0,y+1,y+6,y+7,y+8,y+10,y+-1,y+0,y+1,y+6,y+7,y+10,y+0,y+1,y+2,y+5,y+6,y+7,y+1,y+2,y+3,y+4,y+5,y+4,y+0,y+4,y+-1,y+0,y+1,y+3,y+0,y+1,y+2,y+-1,y+-2,y+-1,y+0,y+-1,y+0,y+1,y+-1,y+0,y+-2,y+-1,y+0,y+1,y+-1,y+0,y+2,y+3,y+0,y+1,y+3,y+-1,y+0,y+1,y+2,y+3,y+0,y+1,y+4,y+4,y+1,y+2,y+3,y+4,y+5,y+10,y+0,y+1,y+2,y+5,y+6,y+10,y+-1,y+0,y+1,y+6,y+7,y+-1,y+0,y+1,y+6,y+7,y+10,y+-1,y+0,y+1,y+6,y+7,y+10,y+0,y+1,y+2,y+5,y+6,y+10,y+1,y+2,y+3,y+4,y+5,y+4,y+0,y+1,y+4,y+-1,y+0,y+1,y+2,y+3,y+0,y+1,y+3,y+3,y+-1,y+0,y+2,y+-2,y+-1,y+0,y+1,y+-1,y+0,y+-1,y+-1,y+-1,y+0,y+2,y+-2,y+-1,y+1,y+2,y+-1,y+0,y+2,y+3,y+0,y+1,y+3,y+-1,y+0,y+2,y+3,y+0,y+1,y+4,y+4,y+10,y+1,y+2,y+3,y+4,y+5,y+10,y+0,y+1,y+2,y+5,y+6,y+-1,y+0,y+1,y+6,y+7,y+-1,y+0,y+1,y+6,y+7,y+10,y+-1,y+0,y+1,y+6,y+7,y+0,y+1,y+2,y+5,y+6,y+10,y+1,y+2,y+3,y+4,y+5,y+10,y+4,y+0,y+1,y+4,y+-1,y+0,y+2,y+3,y+0,y+1,y+3,y+3,y+-1,y+0,y+2,y+-2,y+-1,y+1,y+2,y+-1,y+0,y+2,y+-1,y+-1,y+-1,y+0,y+-1,y+0,y+1,y+-1,y+0,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+2,y+3,y+0,y+1,y+3,y+-1,y+0,y+1,y+2,y+3,y+0,y+1,y+4,y+10,y+4,y+10,y+1,y+2,y+3,y+4,y+5,y+0,y+1,y+2,y+5,y+6,y+-1,y+0,y+1,y+6,y+7,y+-1,y+0,y+1,y+6,y+7,y+10,y+-1,y+0,y+1,y+6,y+7,y+0,y+1,y+2,y+5,y+6,y+1,y+2,y+3,y+4,y+5,y+10,y+4,y+10,y+0,y+1,y+4,y+-1,y+0,y+1,y+2,y+3,y+0,y+1,y+3,y+3,y+-1,y+0,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+2,y+1,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+1,y+1,y+-1,y+0,y+2,y+-2,y+-1,y+1,y+2,y+-1,y+0,y+2,y+3,y+0,y+1,y+3,y+-1,y+0,y+2,y+3,y+10,y+0,y+1,y+4,y+10,y+4,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+5,y+6,y+-1,y+0,y+1,y+6,y+7,y+-1,y+0,y+1,y+6,y+7,y+10,y+-1,y+0,y+1,y+6,y+7,y+1,y+2,y+3,y+5,y+6,y+2,y+3,y+4,y+5,y+4,y+10,y+0,y+1,y+4,y+10,y+-1,y+0,y+2,y+3,y+0,y+1,y+3,y+3,y+-1,y+0,y+2,y+-2,y+-1,y+1,y+2,y+-1,y+0,y+2,y+1,y+-1,y+0,y+1,y+-1,y+0,y+-1,y+0,y+-1,y+1,y+2,y+1,y+2,y+3,y+-1,y+0,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+2,y+3,y+4,y+3,y+4,y+0,y+1,y+3,y+4,y+10,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+10,y+0,y+1,y+4,y+5,y+4,y+5,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+6,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+10,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+1,y+2,y+3,y+4,y+5,y+6,y+3,y+4,y+5,y+4,y+5,y+0,y+1,y+4,y+5,y+10,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+10,y+0,y+1,y+3,y+4,y+3,y+4,y+-1,y+0,y+2,y+3,y+4,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+2,y+3,y+1,y+2,y+3,y+-1,y+1,y+2,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+1,y+1,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+-1,y+2,y+3,y+10,y+0,y+1,y+2,y+3,y+10,y+-1,y+0,y+1,y+2,y+0,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+6,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+-1,y+0,y+2,y+3,y+6,y+7,y+10,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+1,y+2,y+3,y+4,y+5,y+6,y+3,y+4,y+5,y+0,y+-1,y+0,y+1,y+2,y+10,y+0,y+1,y+2,y+3,y+10,y+2,y+3,y+-1,y+-2,y+-1,y+0,y+1,y+-1,y+0,y+1,y+2,y+1,y+-1,y+0,y+1,y+-1,y+0,y+10,y+10,y+4,y+5,y+2,y+3,y+4,y+5,y+6,y+0,y+1,y+2,y+4,y+5,y+6,y+7,y+-1,y+0,y+1,y+3,y+4,y+6,y+7,y+10,y+0,y+1,y+2,y+4,y+5,y+6,y+7,y+2,y+3,y+4,y+5,y+6,y+4,y+5,y+10,y+10,y+10,y+10,y+5,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+10,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+5,y+10,y+10,y+10,y+10,y+2,y+3,y+4,y+5,y+6,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+10,y+2,y+3,y+4,y+5,y+6,y+10,y+10,y+10,y+10,y+2,y+3,y+4,y+5,y+6,y+1,y+2,y+3,y+4,y+5,y+6,y+10,y+2,y+3,y+4,y+5,y+6,y+10,y+10,y+10,y+10,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+10,y+3,y+4,y+5,y+10,y+10,y+10,y+10,y+3,y+4,y+5,y+2,y+3,y+4,y+5,y+10,y+3,y+4,y+5,y+10,y+10,y+10,y+10,y+3,y+4,y+5,y+2,y+3,y+4,y+5,y+10,y+3,y+4,y+5,y+10,y+10,y+10,y+10,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+10,y+4,y+5,y+10,y+10,y+10,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+10,y+4,y+5,y+10,y+10,y+4,y+3,y+4,y+5,y+10,y+4,y+4,y+3,y+4,y+5,y+6,y+10,y+4,y+4,y+3,y+4,y+5,y+6,y+7,y+10,y+4,y+4,y+3,y+4,y+5,y+7,y+10,y+4,y+4,y+3,y+4,y+5,y+10,y+4,y+3,y+4,y+5,y+10,y+3,y+4,y+5,y+4,y+4,y+5,y+4,y+5,y+4,y+5,y+5,y+6,y+3,y+4,y+5,y+6,y+6,y+7,y+2,y+3,y+4,y+5,y+6,y+7,y+7,y+8,y+1,y+2,y+3,y+5,y+6,y+7,y+8,y+8,y+9,y+10,y+8,y+8,y+1,y+6,y+7,y+8,y+9,y+7,y+8,y+9,y+10,y+11,y+12,y+8,y+9,y+10,y+6,y+7,y+11,y+12,y+13,y+9,y+10,y+5,y+6,y+13,y+4,y+5,y+4,y+-2,y+-1,y+0,y+-2];
 var Z=[z,z+-37,z+-10,z+-36,z+-35,z+-4,z+-35,z+-34,z+-20,z+-5,z+-4,z+-34,z+-33,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-6,z+-5,z+-33,z+-32,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-7,z+-6,z+-32,z+-31,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-8,z+-7,z+-31,z+-30,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-9,z+-8,z+-30,z+-29,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-10,z+-9,z+-29,z+-28,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-11,z+-10,z+-28,z+-27,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-12,z+-11,z+-27,z+-26,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-13,z+-12,z+-26,z+-25,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-14,z+-13,z+-25,z+-24,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-15,z+-14,z+-24,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-16,z+-15,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-16,z+-23,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-16,z+-23,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-16,z+-23,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-17,z+-31,z+-31,z+-31,z+-30,z+-30,z+-30,z+-29,z+-27,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-24,z+-23,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-17,z+-16,z+-15,z+-15,z+-14,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-11,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-31,z+-31,z+-30,z+-30,z+-30,z+-30,z+-29,z+-29,z+-29,z+-28,z+-27,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-24,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-17,z+-16,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-12,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-34,z+-33,z+-31,z+-31,z+-31,z+-30,z+-30,z+-30,z+-30,z+-29,z+-29,z+-29,z+-28,z+-27,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-16,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-12,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-7,z+-6,z+-34,z+-34,z+-33,z+-33,z+-32,z+-31,z+-31,z+-31,z+-30,z+-30,z+-30,z+-30,z+-30,z+-29,z+-29,z+-29,z+-28,z+-27,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-12,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-8,z+-7,z+-7,z+-6,z+-6,z+-34,z+-34,z+-33,z+-33,z+-33,z+-32,z+-31,z+-31,z+-31,z+-30,z+-30,z+-30,z+-30,z+-29,z+-29,z+-29,z+-28,z+-27,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-24,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-12,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-8,z+-7,z+-7,z+-7,z+-6,z+-6,z+-34,z+-34,z+-33,z+-33,z+-33,z+-32,z+-32,z+-32,z+-31,z+-31,z+-31,z+-31,z+-30,z+-30,z+-30,z+-30,z+-30,z+-30,z+-29,z+-29,z+-29,z+-29,z+-29,z+-28,z+-28,z+-27,z+-27,z+-27,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-14,z+-14,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-13,z+-12,z+-12,z+-11,z+-11,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-9,z+-8,z+-8,z+-8,z+-7,z+-7,z+-7,z+-6,z+-6,z+-34,z+-34,z+-33,z+-33,z+-33,z+-32,z+-31,z+-31,z+-31,z+-31,z+-30,z+-30,z+-30,z+-30,z+-29,z+-28,z+-28,z+-28,z+-27,z+-27,z+-27,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-25,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-15,z+-14,z+-14,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-13,z+-13,z+-12,z+-12,z+-11,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-9,z+-8,z+-7,z+-7,z+-7,z+-6,z+-6,z+-29,z+-28,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-13,z+-12,z+-30,z+-29,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-12,z+-11,z+-31,z+-30,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-11,z+-10,z+-32,z+-31,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-10,z+-9,z+-33,z+-32,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-9,z+-8,z+-34,z+-33,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-8,z+-7,z+-35,z+-34,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-7,z+-6,z+-36,z+-35,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-6,z+-5,z+-36,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-5,z+-4,z+-21,z+-20,z+-20,z+-20,z+-20,z+-19,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-21,z+-20,z+-20,z+-20,z+-20,z+-19,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-23,z+-20,z+-20,z+-23,z+-23,z+-20,z+-20,z+-23,z+-23,z+-20,z+-20,z+-20,z+-20,z+-23,z+-23,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-23,z+-23,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-23,z+-23,z+-23,z+-22,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-20,z+-20,z+-20,z+-23,z+-23,z+-23,z+-23,z+-23,z+-20,z+-20,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+0,z+0,z+0,z+1];
 var I=[0,0,35,44,44,44,44,44,42,44,44,44,44,42,42,20,42,68,102,20,42,42,20,44,44,44,44,42,42,20,20,35,42,35,20,20,42,42,20,20,44,44,44,44,42,20,20,42,42,20,20,42,42,20,42,42,20,20,42,20,20,44,44,44,44,42,24,24,24,42,42,20,44,42,114,20,42,42,20,42,24,24,24,44,44,44,44,65,65,65,35,42,42,24,71,71,24,42,42,24,35,20,42,42,42,20,42,42,24,20,42,24,20,20,24,44,44,44,44,42,24,24,24,20,42,42,24,20,42,42,20,42,42,24,20,42,24,24,24,20,44,44,44,44,42,24,24,20,20,42,42,24,24,20,101,35,42,20,42,42,20,101,42,24,24,20,20,44,44,44,44,42,24,24,20,20,42,42,24,24,35,102,20,24,35,42,24,35,102,20,42,42,67,20,24,42,24,24,20,20,44,44,44,44,42,24,24,24,24,24,42,35,24,35,68,24,42,35,24,24,42,42,24,24,42,24,24,24,24,24,44,44,44,44,65,65,65,35,42,42,24,71,71,24,24,42,42,24,35,24,44,42,35,114,89,44,42,42,24,35,24,44,42,24,24,24,24,24,44,44,44,24,24,24,44,42,24,24,24,24,24,42,42,24,24,24,24,24,24,44,42,35,24,24,71,71,24,44,42,42,24,24,24,24,24,24,44,42,24,24,24,24,24,24,24,24,44,44,24,24,24,24,24,44,42,24,44,85,24,44,42,42,24,24,35,24,24,42,35,24,24,44,24,24,42,42,24,101,101,24,24,42,24,35,85,24,42,42,24,71,71,24,24,44,65,65,65,35,44,24,24,20,24,24,42,24,85,24,44,42,42,24,101,101,89,24,44,42,35,24,101,101,89,24,42,42,24,101,101,89,24,42,24,85,24,44,24,24,20,24,24,101,44,101,24,24,24,24,24,42,24,85,85,24,101,42,42,24,24,24,101,44,42,35,24,24,24,85,44,42,42,24,24,24,101,44,42,24,85,85,24,44,101,44,24,24,24,24,24,44,24,24,24,20,24,24,42,24,114,85,24,101,101,42,42,24,24,24,85,44,42,35,24,24,24,35,101,43,42,42,24,24,24,85,44,42,24,114,85,24,101,101,24,24,20,24,24,42,42,35,42,44,46,42,42,42,35,42,44,46,43,42,44,44,24,24,24,24,24,42,24,114,85,24,101,44,42,42,24,89,24,44,42,35,24,89,24,85,44,42,42,24,89,24,44,42,24,114,85,24,101,24,24,24,24,24,44,42,44,42,44,46,43,42,42,35,42,42,44,46,42,42,35,42,35,42,46,42,101,42,35,43,44,42,35,44,42,46,42,101,43,42,35,44,44,24,24,20,24,24,44,42,24,114,85,24,44,35,42,24,24,24,42,35,24,24,24,44,35,42,24,24,24,44,42,24,114,85,24,44,24,24,20,24,24,44,42,35,44,42,46,42,101,43,42,35,44,44,42,35,43,42,46,42,101,42,35,35,35,42,35,44,42,46,101,44,42,35,43,44,42,35,44,42,46,101,43,42,35,44,44,44,24,24,24,24,24,44,42,24,114,85,24,35,42,24,24,24,42,35,24,24,24,44,35,42,24,24,24,42,24,114,85,24,44,24,24,24,24,24,44,44,42,35,44,42,46,101,43,42,35,44,44,42,35,43,42,46,101,44,42,35,44,35,35,42,35,42,35,43,42,35,44,42,46,42,101,44,42,35,43,44,42,35,44,42,46,42,101,43,42,35,44,44,44,44,24,24,20,24,24,42,24,114,85,24,42,42,24,89,24,42,35,24,89,24,44,42,42,24,89,24,42,24,114,85,24,24,24,20,24,24,44,44,44,42,35,44,42,46,42,101,43,42,35,44,44,42,35,43,42,46,42,101,44,42,35,44,43,42,35,42,35,42,35,42,101,44,43,42,35,44,42,46,101,44,42,35,43,44,42,35,44,42,46,101,43,44,42,35,44,44,44,24,24,24,24,24,54,68,85,24,42,42,24,24,24,42,35,24,24,24,44,42,42,24,24,24,24,54,68,85,24,24,24,24,24,44,44,42,35,44,44,42,46,101,43,42,35,44,44,42,35,43,42,46,101,44,42,35,44,43,42,101,44,42,35,42,35,42,43,35,43,43,35,42,35,43,35,42,9,42,35,43,35,42,35,43,43,35,43,35,42,35,43,35,44,42,9,42,35,43,43,35,44,42,35,43,35,43,35,24,24,35,24,24,24,24,24,24,42,42,24,24,24,24,24,24,24,42,35,24,24,24,24,24,24,24,44,42,42,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,35,43,35,42,35,43,35,44,42,9,42,35,43,43,35,44,42,35,43,35,43,35,42,35,43,43,35,42,9,42,35,43,35,42,35,43,35,43,43,35,42,43,35,42,35,42,35,42,42,35,101,101,101,42,35,101,42,42,35,101,101,101,44,101,101,42,35,44,101,42,42,35,101,24,24,35,24,24,24,24,35,24,42,24,24,35,24,24,24,24,42,35,24,35,24,24,44,42,24,24,35,24,24,24,24,24,24,24,24,35,24,24,24,35,101,101,42,42,35,44,101,101,42,35,44,101,101,101,101,42,42,35,101,101,42,35,101,42,42,35,42,35,44,44,24,24,24,24,24,35,24,42,24,35,24,35,24,44,42,42,35,24,35,24,24,44,42,24,35,24,35,24,44,24,24,24,35,24,24,24,44,44,44,44,24,24,24,24,24,24,24,44,42,24,24,24,24,24,24,44,44,24,24,24,24,24,24,44,24,44,44,44,44,24,24,24,24,44,42,24,24,24,24,24,24,44,24,24,24,24,44,44,44,44,44,24,24,24,24,44,24,24,24,24,24,44,44,24,24,24,24,44,44,44,44,44,24,24,24,24,24,24,24,24,44,24,24,24,44,44,44,44,24,24,24,24,24,24,24,44,24,24,24,44,44,44,44,24,24,24,24,24,24,24,44,24,24,24,44,44,44,44,24,24,101,24,24,24,24,44,24,24,44,44,44,24,24,101,24,24,24,24,44,24,24,44,44,24,24,24,24,44,24,24,24,24,24,101,44,24,24,24,24,24,101,101,44,24,24,24,24,24,101,44,24,24,24,24,24,44,24,24,24,24,44,24,24,24,101,24,24,101,101,24,24,101,101,101,24,24,24,101,101,101,101,24,24,24,24,101,101,101,101,101,24,24,24,24,24,101,101,44,44,101,24,24,24,24,101,101,101,101,101,101,24,24,24,101,101,101,101,101,24,24,101,101,101,101,101,101,57,57,0,0];
 var D=[0,0,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,4,0,0,0,1,9,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,4,0,0,0,1,9,0,0,0,0,0,3,0,1,0,0,0,0,1,0,0,0,2,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,8,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,3,11,0,0,0,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,15,0,0,0,0,0,0,1,1,0,15,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,3,0,0,0,15,0,0,0,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,15,1,1,0,0,1,0,0,0,0,0,15,4,4,0,15,1,0,0,0,1,0,0,1,1,0,15,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,3,0,0,15,0,0,0,0,0,0,0,0,0,0,15,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,15,1,1,0,0,1,0,0,0,1,0,15,1,4,4,0,0,0,0,1,0,15,1,0,0,0,0,1,0,0,1,1,0,15,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,15,1,1,0,0,1,0,0,0,0,1,0,15,1,1,0,0,0,0,0,0,0,0,1,1,0,15,1,0,0,0,1,0,0,1,1,0,15,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,3,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,4,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,15,1,1,0,0,1,0,0,0,1,0,15,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,12,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,14,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  for(n=0;n<33072+1;n++){
   setTile(X[n], Y[n], Z[n], I[n], D[n]);
  }
}

function Helicopter9(x,y,z){
 var X=[x,x+-19,x+-18,x+-17,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-15,x+-15,x+-14,x+-14,x+-14,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-6,x+-6,x+-6,x+-5,x+-5,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-3,x+-2,x+0,x+0,x+0,x+0];
 var Y=[y,y+9,y+4,y+4,y+4,y+4,y+1,y+2,y+3,y+4,y+5,y+2,y+4,y+4,y+2,y+4,y+2,y+4,y+2,y+2,y+2,y+0,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+0,y+1,y+0,y+1,y+2,y+-1,y+2,y+3,y+2,y+3,y+4,y+3,y+4,y+3,y+4,y+2,y+2,y+0,y+0,y+0,y+1,y+0,y+1,y+-1,y+0,y+1,y+-1,y+2,y+-1,y+2,y+3,y+-1,y+2,y+3,y+4,y+-1,y+0,y+2,y+3,y+4,y+0,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+2,y+3,y+2,y+3,y+-1,y+0,y+-2,y+-1,y+0,y+1,y+-2,y+-1,y+0,y+1,y+-1,y+2,y+-1,y+2,y+-1,y+2,y+-1,y+2,y+3,y+-1,y+0,y+2,y+3,y+-2,y+-1,y+2,y+3,y+-2,y+-1,y+2,y+3,y+-2,y+-1,y+0,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+0,y+1,y+2,y+3,y+0,y+2,y+3,y+2,y+2,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+0,y+0,y+0,y+1,y+0,y+1,y+-1,y+0,y+1,y+-1,y+2,y+-1,y+2,y+-1,y+2,y+3,y+4,y+-1,y+0,y+2,y+3,y+4,y+0,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+2,y+3,y+2,y+3,y+0,y+1,y+0,y+1,y+2,y+-1,y+2,y+3,y+2,y+3,y+4,y+3,y+4,y+3,y+4,y+2,y+2,y+2,y+2,y+0,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+2,y+4,y+2,y+2,y+4,y+4,y+4,y+1,y+2,y+3,y+4,y+5,y+2,y+4,y+4,y+4,y+4,y+-2,y+-2,y+-1,y+0];
 var Z=[z,z+26,z+13,z+13,z+11,z+12,z+13,z+13,z+13,z+13,z+13,z+14,z+14,z+15,z+13,z+13,z+13,z+13,z+14,z+13,z+14,z+23,z+23,z+23,z+23,z+23,z+24,z+24,z+24,z+11,z+11,z+12,z+12,z+13,z+14,z+14,z+14,z+15,z+15,z+15,z+16,z+16,z+17,z+17,z+23,z+24,z+7,z+8,z+9,z+9,z+10,z+10,z+11,z+11,z+11,z+12,z+12,z+13,z+13,z+13,z+14,z+14,z+14,z+14,z+15,z+15,z+15,z+15,z+15,z+16,z+16,z+16,z+16,z+17,z+17,z+17,z+17,z+23,z+23,z+24,z+24,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+9,z+9,z+10,z+10,z+11,z+11,z+12,z+12,z+12,z+13,z+13,z+13,z+13,z+14,z+14,z+14,z+14,z+15,z+15,z+15,z+15,z+16,z+16,z+16,z+16,z+16,z+17,z+17,z+17,z+17,z+17,z+17,z+18,z+18,z+18,z+18,z+18,z+19,z+19,z+19,z+20,z+21,z+22,z+22,z+22,z+23,z+23,z+23,z+24,z+24,z+24,z+7,z+8,z+9,z+9,z+10,z+10,z+11,z+11,z+11,z+12,z+12,z+13,z+13,z+14,z+14,z+14,z+14,z+15,z+15,z+15,z+15,z+15,z+16,z+16,z+16,z+16,z+17,z+17,z+17,z+17,z+23,z+23,z+24,z+24,z+11,z+11,z+12,z+12,z+13,z+14,z+14,z+14,z+15,z+15,z+15,z+16,z+16,z+17,z+17,z+23,z+24,z+13,z+14,z+23,z+23,z+23,z+23,z+23,z+24,z+24,z+24,z+13,z+13,z+14,z+13,z+13,z+11,z+12,z+13,z+13,z+13,z+13,z+13,z+14,z+14,z+15,z+13,z+13,z+-1,z+0,z+0,z+0];
 var I=[57,57,44,44,44,44,1,4,35,35,44,35,44,44,67,44,44,44,44,44,44,1,1,44,4,67,1,44,67,4,67,4,67,44,65,44,43,44,43,44,43,44,4,67,35,35,67,1,1,67,1,1,1,4,1,1,67,1,1,44,1,1,44,44,1,109,1,35,44,4,1,89,44,1,43,35,44,35,35,35,35,35,35,44,1,4,44,35,35,35,20,1,44,1,20,4,20,89,20,44,4,109,58,43,43,54,101,43,44,4,101,43,44,44,4,61,43,44,44,4,4,4,43,43,4,4,1,43,67,1,44,1,1,1,1,67,1,89,1,1,44,1,67,1,1,67,1,1,1,4,1,1,67,1,1,1,1,44,44,1,109,1,35,44,4,1,89,44,1,43,35,44,35,35,35,35,1,67,1,67,43,65,44,43,44,43,44,43,44,4,67,35,35,44,44,1,1,44,1,67,4,44,67,44,44,44,67,44,44,44,1,4,35,35,44,35,44,44,44,44,57,57,57,57];
 var D=[0,0,3,3,3,3,0,0,9,1,3,11,3,3,1,3,0,3,0,0,0,0,0,0,0,3,0,0,3,0,0,0,0,0,4,0,0,0,0,0,0,0,0,1,4,4,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,3,0,3,12,10,12,10,4,2,0,0,0,0,0,8,11,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,2,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,2,0,0,0,0,0,0,1,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,3,0,3,13,9,13,9,0,1,0,1,0,5,0,0,0,0,0,0,0,0,0,5,5,0,0,0,0,0,0,3,0,0,3,0,3,0,0,3,3,3,0,0,9,1,3,11,3,3,3,3,0,0,0,0];
  for(n=0;n<6720+1;n++){
   setTile(X[n], Y[n], Z[n], I[n], D[n]);
  }
}

function Helicopter10(x,y,z){
 var X=[x,x+-29,x+-28,x+-28,x+-27,x+-27,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-25,x+-25,x+-25,x+-25,x+-25,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-23,x+-23,x+-23,x+-22,x+-22,x+-21,x+-21,x+-21,x+-21,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-4,x+-4,x+-4,x+-4,x+-4,x+-3,x+-2,x+-1,x+0,x+0,x+0,x+0];
 var Y=[y,y+7,y+1,y+3,y+2,y+2,y+0,y+0,y+0,y+1,y+0,y+1,y+3,y+0,y+0,y+-1,y+0,y+1,y+0,y+-2,y+-2,y+-1,y+0,y+-2,y+4,y+-2,y+-1,y+4,y+-1,y+4,y+4,y+-1,y+0,y+4,y+4,y+-1,y+-1,y+0,y+-1,y+4,y+4,y+4,y+-1,y+-1,y+0,y+-1,y+4,y+4,y+-1,y+-1,y+0,y+1,y+-1,y+4,y+4,y+4,y+-1,y+0,y+-1,y+0,y+1,y+-1,y+0,y+4,y+4,y+-1,y+0,y+1,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+4,y+2,y+4,y+-1,y+0,y+1,y+2,y+4,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+4,y+2,y+2,y+0,y+1,y+2,y+-1,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+4,y+-1,y+1,y+2,y+3,y+0,y+1,y+2,y+2,y+2,y+-1,y+0,y+1,y+2,y+-1,y+2,y+4,y+-1,y+2,y+3,y+-1,y+2,y+4,y+-1,y+0,y+1,y+2,y+4,y+2,y+2,y+-1,y+2,y+-1,y+2,y+4,y+-1,y+2,y+-1,y+2,y+-1,y+0,y+1,y+2,y+2,y+4,y+2,y+-1,y+2,y+4,y+-1,y+2,y+3,y+-1,y+2,y+-1,y+2,y+3,y+-1,y+0,y+1,y+2,y+2,y+4,y+4,y+4,y+-1,y+2,y+-1,y+2,y+3,y+-1,y+2,y+3,y+-1,y+2,y+3,y+-1,y+0,y+1,y+2,y+4,y+4,y+-2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+2,y+3,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+4,y+4,y+4,y+-2,y+-2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+2,y+-1,y+2,y+-1,y+0,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+4,y+4,y+-2,y+-1,y+0,y+1,y+-1,y+0,y+2,y+-2,y+-1,y+2,y+-1,y+0,y+2,y+-2,y+-1,y+0,y+1,y+4,y+4,y+-1,y+0,y+-2,y+-1,y+0,y+1,y+-2,y+-1,y+0,y+1,y+-2,y+-1,y+0,y+1,y+-1,y+0,y+4,y+-1,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+-1,y+0,y+4,y+-1,y+-1,y+-1,y+-1,y+-1,y+-1,y+-1,y+-2,y+-2,y+-1,y+0];
 var Z=[z,z+23,z+12,z+12,z+11,z+12,z+9,z+10,z+11,z+11,z+12,z+12,z+12,z+13,z+10,z+11,z+11,z+11,z+12,z+10,z+11,z+11,z+11,z+12,z+18,z+11,z+11,z+17,z+11,z+16,z+1,z+11,z+11,z+16,z+2,z+10,z+11,z+11,z+12,z+15,z+3,z+4,z+10,z+11,z+11,z+12,z+14,z+5,z+10,z+11,z+11,z+11,z+12,z+14,z+6,z+7,z+10,z+10,z+11,z+11,z+11,z+12,z+12,z+13,z+8,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+8,z+9,z+10,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+12,z+14,z+8,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+14,z+8,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+11,z+11,z+11,z+12,z+12,z+12,z+13,z+13,z+13,z+13,z+13,z+14,z+8,z+9,z+9,z+10,z+10,z+10,z+11,z+11,z+12,z+12,z+13,z+13,z+13,z+13,z+14,z+14,z+8,z+9,z+9,z+9,z+10,z+10,z+10,z+11,z+11,z+12,z+12,z+12,z+13,z+13,z+13,z+13,z+14,z+15,z+16,z+8,z+9,z+9,z+10,z+10,z+10,z+11,z+11,z+11,z+12,z+12,z+12,z+13,z+13,z+13,z+13,z+17,z+8,z+9,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+13,z+13,z+18,z+19,z+7,z+8,z+9,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+11,z+11,z+12,z+12,z+12,z+13,z+13,z+13,z+13,z+13,z+14,z+20,z+6,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+11,z+11,z+11,z+12,z+12,z+12,z+13,z+13,z+13,z+13,z+21,z+6,z+9,z+9,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+13,z+13,z+5,z+9,z+10,z+10,z+10,z+11,z+11,z+11,z+12,z+12,z+12,z+13,z+13,z+4,z+10,z+11,z+12,z+13,z+13,z+13,z+13,z+-1,z+0,z+0,z+0];
 var I=[57,57,35,35,44,35,44,44,44,35,44,35,35,44,44,35,35,109,44,35,49,35,109,35,44,35,35,44,35,44,44,35,109,44,44,35,35,35,35,44,44,44,35,35,35,35,44,44,35,35,35,109,35,44,44,44,35,35,35,35,35,35,35,44,44,35,35,35,35,35,35,35,35,35,35,44,35,44,35,35,35,44,44,35,35,35,35,109,35,35,35,44,44,35,49,35,35,109,35,35,43,109,35,35,35,49,43,44,35,35,43,109,35,35,109,49,49,35,35,35,109,35,43,44,35,43,109,35,43,44,35,35,35,109,44,49,49,35,35,35,43,44,35,43,35,43,35,35,102,35,49,44,49,35,35,44,35,43,44,35,43,35,43,44,35,35,35,35,49,44,44,44,35,44,35,43,44,35,43,44,35,43,44,35,35,102,44,44,44,35,35,35,35,44,35,35,35,43,35,43,44,35,35,35,43,35,35,35,35,44,44,44,44,35,49,35,35,35,44,35,114,109,35,109,35,114,109,49,35,35,35,44,35,44,44,35,35,35,20,35,35,44,44,35,44,35,35,44,35,35,35,20,44,44,35,35,44,35,22,20,44,35,35,20,44,35,22,20,35,35,44,35,44,35,35,44,35,35,44,35,35,35,44,44,35,35,35,35,35,35,101,57,57,57,57];
 var D=[0,0,15,15,5,15,5,5,5,15,5,15,15,5,5,2,15,1,5,4,0,15,1,3,0,1,15,0,15,0,0,15,0,0,0,15,15,15,15,0,0,0,15,15,15,15,0,0,15,15,15,0,15,0,0,0,15,15,15,15,15,15,15,0,0,15,15,15,15,15,15,15,15,15,15,0,2,0,15,15,15,5,0,15,15,15,15,0,15,15,15,5,0,2,0,15,15,3,15,1,0,2,15,15,15,0,5,0,15,1,0,3,15,15,2,0,0,15,15,15,3,15,0,0,15,0,1,15,0,0,15,15,15,2,0,0,0,15,15,15,0,0,15,5,15,0,15,15,0,15,0,0,0,15,15,0,15,0,5,15,0,15,0,5,15,15,15,15,0,0,0,0,15,5,15,0,5,15,0,5,15,0,5,15,15,0,5,0,0,2,15,15,15,5,15,15,15,0,15,0,5,15,15,15,0,2,15,15,15,5,0,0,0,4,0,15,15,15,5,15,1,1,15,1,15,1,1,0,15,15,15,5,3,0,0,0,15,15,0,15,2,5,13,15,5,15,2,5,0,15,15,0,0,0,15,15,13,15,0,0,13,15,2,0,13,15,0,0,15,15,0,15,13,15,15,13,15,15,13,15,15,15,5,0,15,15,15,15,15,15,0,0,0,0,0];
  for(n=0;n<7500+1;n++){
   setTile(X[n], Y[n], Z[n], I[n], D[n]);
  }
}

function Helicopter11(x,y,z){
 var X=[x,x+-1,x+0,x+0,x+0,x+3,x+4,x+5,x+6,x+7,x+7,x+7,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+13,x+13,x+13,x+14,x+14,x+14,x+15,x+15,x+16,x+16,x+17,x+17];
 var Y=[y,y+-2,y+-2,y+-1,y+0,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+-2,y+0,y+-2,y+0,y+4,y+-2,y+0,y+-2,y+-2,y+4,y+3,y+-2,y+-1,y+0,y+1,y+2,y+0,y+3,y+4,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+3,y+4,y+-1,y+0,y+1,y+2,y+4,y+0,y+1,y+0,y+2,y+3,y+0,y+1,y+2,y+1,y+2,y+1,y+1,y+1,y+1,y+2,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+3,y+-1,y+0,y+3,y+-1,y+0,y+3,y+4,y+-1,y+0,y+1,y+3,y+-1,y+0,y+1,y+2,y+3,y+0,y+1,y+0,y+3,y+0,y+2,y+1,y+2,y+-1,y+0,y+1,y+2,y+4,y+0,y+3,y+4,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+3,y+4,y+-1,y+0,y+1,y+2,y+0,y+1,y+4,y+-2,y+0,y+-2,y+0,y+-2,y+0,y+-2,y+4,y+-2,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+6];
 var Z=[z,z+0,z+0,z+0,z+0,z+9,z+10,z+11,z+11,z+12,z+18,z+19,z+12,z+12,z+13,z+13,z+13,z+14,z+14,z+15,z+16,z+17,z+2,z+12,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+14,z+14,z+14,z+14,z+14,z+15,z+15,z+15,z+15,z+16,z+16,z+16,z+16,z+16,z+17,z+17,z+3,z+3,z+3,z+4,z+4,z+4,z+5,z+5,z+6,z+7,z+8,z+9,z+9,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+13,z+13,z+13,z+14,z+14,z+14,z+14,z+15,z+15,z+15,z+15,z+16,z+16,z+16,z+16,z+16,z+17,z+17,z+18,z+2,z+4,z+4,z+5,z+6,z+12,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+14,z+14,z+14,z+14,z+14,z+15,z+15,z+15,z+15,z+16,z+16,z+16,z+16,z+17,z+17,z+11,z+12,z+12,z+13,z+13,z+14,z+14,z+15,z+15,z+16,z+9,z+10,z+16,z+7,z+8,z+17,z+6,z+17,z+5,z+18,z+19,z+19];
 var I=[0,0,57,57,0,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,109,35,35,109,35,44,44,44,35,35,35,44,44,35,44,44,109,35,20,102,44,101,102,101,35,44,35,35,35,35,109,35,35,35,35,44,49,35,109,44,35,35,43,44,35,44,44,35,44,44,35,43,44,44,35,35,44,44,35,35,20,44,35,102,101,44,35,35,49,35,109,35,35,109,44,35,44,44,44,35,35,35,44,44,35,44,44,109,35,20,102,101,102,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,0];
 var D=[0,0,0,0,0,0,0,0,0,0,0,0,13,5,13,5,0,13,5,13,13,0,5,13,0,15,15,0,15,5,0,13,15,15,15,5,13,15,0,0,0,15,0,0,0,0,0,0,4,5,15,4,15,15,3,15,15,15,15,5,0,15,2,13,15,15,5,13,15,5,13,15,5,13,15,5,5,13,15,12,5,13,15,15,0,0,15,0,0,5,0,0,0,0,1,15,15,1,0,15,5,0,13,15,15,15,5,13,15,0,0,1,15,0,0,0,0,0,13,5,13,5,13,5,13,0,13,0,0,0,0,0,0,0,0,0,0,0,0];
  for(n=0;n<3420+1;n++){
   setTile(X[n], Y[n], Z[n], I[n], D[n]);
  }
}

function Helicopter12(x,y,z){
 var X=[x,x+0,x+0,x+0,x+0,x+2,x+2,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+6,x+6,x+6,x+6,x+7,x+7,x+7,x+7,x+8,x+8,x+8,x+8,x+9,x+9,x+9,x+9,x+9,x+9,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+29,x+29,x+29,x+29,x+29,x+29,x+30,x+31,x+32];
 var Y=[y,y+-2,y+-1,y+0,y+-2,y+3,y+5,y+1,y+1,y+4,y+1,y+4,y+0,y+1,y+2,y+3,y+4,y+5,y+1,y+1,y+1,y+1,y+3,y+5,y+0,y+1,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+0,y+1,y+1,y+0,y+1,y+-2,y+-1,y+0,y+1,y+2,y+0,y+1,y+0,y+0,y+1,y+0,y+0,y+0,y+1,y+0,y+0,y+0,y+1,y+0,y+6,y+0,y+-1,y+0,y+1,y+0,y+6,y+0,y+1,y+-1,y+0,y+1,y+0,y+1,y+6,y+0,y+1,y+-1,y+0,y+1,y+2,y+0,y+1,y+6,y+0,y+1,y+2,y+-1,y+0,y+2,y+0,y+1,y+2,y+6,y+6,y+0,y+1,y+2,y+0,y+2,y+3,y+0,y+1,y+2,y+6,y+6,y+0,y+1,y+2,y+3,y+0,y+2,y+3,y+0,y+1,y+2,y+3,y+6,y+6,y+6,y+3,y+4,y+0,y+1,y+2,y+3,y+4,y+0,y+2,y+3,y+4,y+0,y+1,y+2,y+3,y+4,y+3,y+4,y+6,y+2,y+3,y+4,y+6,y+0,y+1,y+2,y+3,y+4,y+0,y+2,y+3,y+4,y+0,y+1,y+2,y+3,y+4,y+3,y+4,y+6,y+6,y+2,y+1,y+2,y+2,y+1,y+2,y+2,y+1,y+2,y+3,y+4,y+0,y+1,y+2,y+3,y+4,y+6,y+0,y+2,y+3,y+4,y+5,y+0,y+1,y+2,y+3,y+4,y+2,y+3,y+4,y+2,y+6,y+1,y+2,y+2,y+1,y+2,y+2,y+2,y+2,y+2,y+2,y+1,y+2,y+3,y+4,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+0,y+2,y+3,y+4,y+5,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+1,y+2,y+3,y+4,y+6,y+2,y+2,y+2,y+2,y+0,y+1,y+2,y+3,y+0,y+1,y+2,y+3,y+4,y+5,y+0,y+2,y+3,y+4,y+5,y+6,y+7,y+0,y+1,y+2,y+3,y+4,y+5,y+0,y+1,y+2,y+3,y+0,y+1,y+3,y+6,y+0,y+1,y+2,y+3,y+4,y+6,y+0,y+1,y+2,y+3,y+4,y+5,y+0,y+1,y+2,y+3,y+4,y+6,y+0,y+1,y+3,y+6,y+0,y+1,y+3,y+0,y+1,y+2,y+3,y+4,y+0,y+1,y+4,y+0,y+1,y+2,y+3,y+4,y+6,y+0,y+1,y+3,y+6,y+6,y+-2,y+-1,y+0,y+1,y+0,y+1,y+2,y+3,y+4,y+0,y+1,y+4,y+0,y+1,y+2,y+3,y+4,y+-2,y+-1,y+0,y+1,y+6,y+6,y+-2,y+-1,y+0,y+1,y+0,y+1,y+2,y+3,y+4,y+0,y+1,y+2,y+4,y+0,y+1,y+2,y+3,y+4,y+-2,y+-1,y+0,y+1,y+6,y+6,y+6,y+0,y+1,y+0,y+1,y+2,y+3,y+4,y+0,y+1,y+2,y+4,y+0,y+1,y+2,y+3,y+4,y+0,y+1,y+6,y+6,y+0,y+0,y+1,y+2,y+3,y+0,y+1,y+2,y+3,y+4,y+0,y+1,y+2,y+3,y+0,y+6,y+6,y+0,y+1,y+2,y+3,y+0,y+3,y+0,y+1,y+2,y+3,y+6,y+0,y+1,y+2,y+0,y+3,y+0,y+1,y+2,y+6,y+0,y+1,y+2,y+0,y+1,y+2,y+0,y+1,y+2,y+6,y+1,y+0,y+1,y+2,y+1,y+6,y+1,y+1,y+7];
 var Z=[z,z+0,z+0,z+0,z+1,z+-13,z+-13,z+-14,z+-13,z+-13,z+-12,z+-12,z+-11,z+-11,z+-11,z+-11,z+-11,z+-11,z+-10,z+-9,z+-8,z+-13,z+-13,z+-13,z+-12,z+-12,z+-11,z+-11,z+-11,z+-11,z+-11,z+-11,z+-11,z+-10,z+-10,z+-9,z+-12,z+-12,z+-11,z+-11,z+-11,z+-11,z+-11,z+-10,z+-10,z+-12,z+-11,z+-11,z+-10,z+-12,z+-11,z+-11,z+-10,z+-12,z+-11,z+-11,z+-10,z+-18,z+-12,z+-11,z+-11,z+-11,z+-10,z+-17,z+-12,z+-12,z+-11,z+-11,z+-11,z+-10,z+-10,z+-16,z+-12,z+-12,z+-11,z+-11,z+-11,z+-11,z+-10,z+-10,z+-16,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-1,z+-15,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-2,z+-14,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-10,z+-4,z+-3,z+-14,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-5,z+-13,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-7,z+-6,z+-18,z+-17,z+-17,z+-16,z+-15,z+-15,z+-14,z+-13,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-8,z+-8,z+-7,z+-7,z+-6,z+-5,z+-5,z+-4,z+-17,z+-16,z+-15,z+-14,z+-13,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-9,z+-9,z+-8,z+-7,z+-6,z+-5,z+-13,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-11,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-9,z+-13,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-14,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-16,z+-15,z+-13,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-9,z+-9,z+-17,z+-13,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-9,z+-8,z+-19,z+-18,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-8,z+-20,z+-13,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-10,z+-9,z+-7,z+-21,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-10,z+-10,z+-10,z+-10,z+-6,z+-12,z+-12,z+-12,z+-11,z+-11,z+-10,z+-10,z+-10,z+-6,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-5,z+-12,z+-11,z+-11,z+-11,z+-10,z+-4,z+-11,z+-11,z+-23];
 var I=[0,57,57,0,0,35,35,44,44,35,44,49,109,35,35,35,35,35,44,44,44,44,35,35,109,44,35,35,35,35,35,35,35,109,44,44,35,44,35,35,35,35,35,35,44,35,35,35,35,35,35,35,35,35,35,35,35,44,35,109,35,35,35,44,35,35,43,35,35,35,35,44,35,35,43,35,35,35,35,35,44,35,35,35,109,35,35,35,35,35,44,44,35,35,35,35,35,35,35,35,35,44,44,35,35,35,35,35,35,35,35,35,35,35,44,44,44,101,101,35,35,35,35,101,35,35,35,35,35,35,35,35,101,101,101,44,35,35,35,44,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,44,44,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,44,35,35,35,35,44,35,35,35,35,35,35,35,35,35,44,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,44,44,35,35,35,35,109,35,35,35,35,35,44,44,35,35,35,35,44,35,35,35,35,35,35,109,35,35,35,35,35,35,44,35,35,35,101,101,43,35,35,35,35,35,35,44,35,35,109,35,35,35,98,44,35,35,35,35,35,44,35,35,35,35,35,44,35,35,35,35,35,44,35,35,98,44,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,44,35,35,35,44,44,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,44,44,35,35,35,35,35,35,35,20,102,35,35,35,20,35,35,35,20,102,35,35,35,35,44,44,44,35,35,35,35,35,20,102,35,35,22,20,35,35,35,20,102,35,35,44,44,35,35,35,20,102,35,35,35,20,102,35,35,20,102,35,44,44,35,35,20,102,35,20,35,35,20,102,44,35,35,20,35,20,35,35,20,44,35,35,102,35,35,20,35,35,102,44,35,35,35,102,35,44,35,35,0];
 var D=[0,0,0,0,0,15,15,5,5,15,5,0,4,13,13,13,13,13,5,5,5,5,15,15,4,5,15,0,13,13,13,13,13,4,5,5,13,5,1,0,13,13,13,13,5,13,13,13,13,13,13,13,13,13,13,13,13,5,13,4,13,13,13,5,13,13,5,13,13,13,13,5,13,13,5,13,13,13,13,13,5,13,13,13,5,13,13,13,13,13,5,5,13,13,13,13,13,13,13,13,13,5,5,13,13,13,13,13,13,13,13,13,13,13,5,5,5,0,0,13,13,13,13,0,13,13,13,13,13,13,13,13,0,0,0,5,13,13,13,5,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,5,5,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,5,13,13,13,13,5,13,13,13,13,13,13,13,13,13,5,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,5,5,13,13,13,13,0,13,13,13,13,13,5,5,13,13,13,13,5,13,13,13,13,13,13,5,13,13,13,13,13,13,5,13,13,13,0,0,5,0,13,13,13,13,13,5,13,13,5,13,13,13,3,5,13,13,13,13,13,5,13,13,13,13,13,5,13,13,13,13,13,5,13,13,3,5,13,13,1,13,13,13,13,13,13,13,13,13,13,13,13,13,5,13,13,1,5,5,2,0,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,2,0,13,13,5,5,15,0,13,13,13,13,13,0,0,13,13,2,0,13,13,13,0,0,15,0,13,13,5,5,5,13,13,13,13,13,0,0,13,13,0,0,13,13,13,0,0,13,13,5,5,13,13,13,0,0,13,13,13,0,0,13,13,0,0,13,5,5,13,13,0,0,13,0,13,13,0,0,5,13,13,0,13,0,13,13,0,5,13,13,0,13,2,0,13,13,0,5,13,5,13,0,13,5,13,1,0];
  for(n=0;n<8250+1;n++){
   setTile(X[n], Y[n], Z[n], I[n], D[n]);
  }
}

function Helicopter13(x,y,z){
 var X=[x,x+0,x+0,x+0,x+0,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+4,x+4,x+4,x+4,x+4,x+5,x+5,x+5,x+5,x+6,x+6,x+6,x+7,x+7,x+7,x+7,x+7,x+7,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+10,x+10,x+11,x+11,x+11,x+11,x+12,x+12,x+12,x+12,x+12,x+12,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+31,x+31,x+31,x+31,x+31,x+32,x+36];
 var Y=[y,y+-2,y+-2,y+-1,y+0,y+8,y+-1,y+0,y+1,y+2,y+3,y+4,y+-2,y+-1,y+1,y+2,y+3,y+4,y+-1,y+-2,y+0,y+2,y+3,y+0,y+-1,y+1,y+2,y+1,y+0,y+1,y+2,y+0,y+1,y+0,y+1,y+0,y+1,y+-1,y+0,y+1,y+0,y+-1,y+0,y+1,y+-1,y+0,y+0,y+-1,y+0,y+0,y+-1,y+0,y+-1,y+0,y+7,y+-1,y+0,y+1,y+7,y+0,y+-1,y+0,y+1,y+0,y+7,y+0,y+1,y+-1,y+0,y+1,y+0,y+1,y+7,y+0,y+1,y+-1,y+0,y+1,y+2,y+0,y+1,y+7,y+7,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+3,y+0,y+1,y+2,y+7,y+7,y+1,y+0,y+1,y+2,y+-1,y+0,y+2,y+3,y+0,y+2,y+1,y+7,y+7,y+7,y+1,y+2,y+0,y+1,y+2,y+3,y+4,y+-1,y+0,y+2,y+3,y+4,y+0,y+1,y+2,y+3,y+4,y+1,y+2,y+7,y+1,y+2,y+3,y+7,y+0,y+1,y+2,y+3,y+4,y+-1,y+0,y+1,y+2,y+3,y+4,y+0,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+7,y+7,y+1,y+2,y+3,y+-1,y+0,y+2,y+3,y+4,y+7,y+-1,y+0,y+3,y+4,y+5,y+-1,y+0,y+2,y+3,y+4,y+1,y+2,y+3,y+7,y+0,y+1,y+2,y+3,y+-1,y+0,y+3,y+4,y+5,y+7,y+-1,y+0,y+3,y+4,y+5,y+-1,y+0,y+3,y+4,y+5,y+7,y+0,y+1,y+2,y+3,y+7,y+0,y+1,y+2,y+3,y+-1,y+0,y+3,y+4,y+5,y+-1,y+0,y+3,y+4,y+5,y+6,y+7,y+-1,y+0,y+3,y+4,y+5,y+0,y+1,y+2,y+3,y+0,y+1,y+2,y+3,y+7,y+-1,y+0,y+3,y+4,y+5,y+7,y+-1,y+0,y+3,y+4,y+5,y+-1,y+0,y+3,y+4,y+5,y+7,y+0,y+3,y+7,y+0,y+1,y+2,y+3,y+-1,y+0,y+3,y+4,y+-1,y+0,y+3,y+5,y+-1,y+0,y+3,y+4,y+7,y+0,y+3,y+4,y+4,y+5,y+5,y+4,y+5,y+7,y+7,y+0,y+1,y+2,y+3,y+-1,y+0,y+3,y+-1,y+0,y+3,y+4,y+-1,y+0,y+3,y+0,y+3,y+7,y+7,y+0,y+1,y+2,y+3,y+-1,y+0,y+3,y+-1,y+0,y+3,y+4,y+-1,y+0,y+3,y+0,y+1,y+2,y+3,y+7,y+7,y+7,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+3,y+-1,y+0,y+1,y+2,y+3,y+0,y+1,y+2,y+3,y+7,y+7,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+3,y+-1,y+0,y+3,y+-1,y+0,y+1,y+2,y+3,y+0,y+1,y+2,y+3,y+7,y+7,y+0,y+1,y+2,y+-1,y+0,y+1,y+3,y+-1,y+0,y+1,y+3,y+-1,y+0,y+1,y+3,y+0,y+1,y+2,y+7,y+1,y+2,y+0,y+1,y+2,y+-1,y+0,y+1,y+3,y+0,y+1,y+2,y+1,y+2,y+7,y+0,y+1,y+2,y+0,y+1,y+2,y+0,y+1,y+2,y+7,y+0,y+0,y+1,y+0,y+7,y+0,y+8];
 var Z=[z,z+-1,z+0,z+0,z+0,z+23,z+13,z+13,z+13,z+13,z+13,z+13,z+13,z+13,z+13,z+13,z+13,z+13,z+14,z+13,z+13,z+13,z+13,z+14,z+13,z+13,z+13,z+14,z+13,z+13,z+13,z+11,z+11,z+13,z+13,z+15,z+15,z+11,z+11,z+11,z+13,z+15,z+15,z+15,z+11,z+11,z+12,z+13,z+13,z+14,z+15,z+15,z+13,z+13,z+6,z+13,z+13,z+13,z+7,z+12,z+13,z+13,z+13,z+14,z+8,z+12,z+12,z+13,z+13,z+13,z+14,z+14,z+8,z+12,z+12,z+13,z+13,z+13,z+13,z+14,z+14,z+23,z+9,z+12,z+12,z+12,z+13,z+13,z+13,z+13,z+13,z+14,z+14,z+14,z+22,z+10,z+11,z+12,z+12,z+12,z+13,z+13,z+13,z+13,z+14,z+14,z+15,z+20,z+21,z+10,z+11,z+11,z+12,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+13,z+13,z+14,z+14,z+14,z+14,z+14,z+15,z+15,z+19,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+13,z+13,z+13,z+14,z+14,z+14,z+14,z+14,z+15,z+15,z+15,z+17,z+18,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+13,z+13,z+14,z+14,z+14,z+14,z+14,z+15,z+15,z+15,z+16,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+13,z+13,z+14,z+14,z+14,z+14,z+14,z+14,z+15,z+15,z+15,z+15,z+15,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+13,z+13,z+13,z+13,z+14,z+14,z+14,z+14,z+14,z+15,z+15,z+15,z+15,z+11,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+13,z+13,z+14,z+14,z+14,z+14,z+14,z+14,z+15,z+15,z+10,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+13,z+14,z+14,z+14,z+14,z+14,z+15,z+15,z+15,z+16,z+16,z+17,z+18,z+18,z+8,z+9,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+13,z+13,z+13,z+13,z+14,z+14,z+14,z+15,z+15,z+15,z+7,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+13,z+13,z+13,z+13,z+14,z+14,z+14,z+15,z+15,z+15,z+15,z+16,z+5,z+6,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+14,z+14,z+14,z+14,z+14,z+15,z+15,z+15,z+15,z+16,z+4,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+14,z+14,z+14,z+14,z+14,z+15,z+15,z+15,z+15,z+17,z+3,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+13,z+14,z+14,z+14,z+14,z+15,z+15,z+15,z+18,z+11,z+11,z+12,z+12,z+12,z+13,z+13,z+13,z+13,z+14,z+14,z+14,z+15,z+15,z+18,z+12,z+12,z+12,z+13,z+13,z+13,z+14,z+14,z+14,z+19,z+12,z+13,z+13,z+14,z+20,z+13,z+26];
 var I=[0,0,57,57,0,20,109,35,35,35,35,35,109,109,35,35,35,35,35,35,49,35,35,35,35,109,35,35,35,35,109,109,35,35,109,109,35,44,35,109,35,44,35,109,35,109,35,44,35,35,35,109,109,35,44,35,35,109,44,35,35,35,35,35,44,35,35,35,35,35,35,35,44,35,35,35,35,35,35,35,35,44,44,35,35,35,35,35,35,35,49,35,35,35,44,44,35,35,35,35,35,35,35,49,35,35,35,44,44,44,35,35,35,35,35,35,35,35,35,35,49,49,35,35,35,35,35,35,35,44,35,35,35,44,35,35,35,35,49,35,35,35,35,49,49,35,35,35,35,49,35,35,35,44,44,35,35,35,35,35,35,35,49,44,35,35,35,35,35,35,35,35,35,49,35,35,35,44,35,35,35,35,35,35,35,49,35,44,35,35,35,35,35,35,35,35,49,35,44,35,35,35,35,44,35,35,35,35,35,35,35,35,35,35,35,35,35,101,101,44,35,35,35,35,35,35,35,35,35,35,35,35,35,44,35,35,35,35,35,44,35,35,35,35,35,35,35,35,35,35,44,35,35,44,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,44,35,35,109,35,109,35,35,44,44,44,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,44,44,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,44,44,44,35,35,35,44,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,44,44,44,35,35,35,44,44,35,114,44,35,35,35,44,35,114,35,44,35,35,35,44,44,44,35,35,102,44,35,35,44,35,35,35,44,44,35,35,44,35,35,102,44,35,102,35,35,20,109,35,35,44,35,35,20,35,102,44,35,35,102,35,35,20,35,35,102,44,35,35,35,35,44,35,0];
 var D=[0,0,0,0,0,0,4,14,14,6,2,14,4,1,14,14,14,14,15,14,0,14,14,15,14,4,14,15,14,14,1,4,14,14,1,4,14,14,14,1,14,14,14,1,14,1,14,13,14,14,14,1,4,14,0,14,14,0,0,14,14,14,14,14,0,0,14,14,14,14,0,14,5,0,0,14,14,14,14,0,0,0,5,14,0,0,14,14,0,14,0,14,0,0,0,0,14,14,14,0,14,14,14,0,14,0,14,5,0,0,14,14,14,14,14,14,2,14,14,14,0,0,14,14,14,14,2,14,14,5,14,14,14,5,14,14,14,14,0,14,14,14,14,0,0,14,14,14,14,0,14,14,14,0,0,14,14,14,14,14,1,14,0,5,14,14,14,15,14,14,14,1,14,0,14,14,14,5,14,14,14,14,14,14,14,0,14,5,14,14,14,14,14,14,14,14,0,14,5,14,14,14,14,5,14,14,14,14,14,14,14,14,14,14,14,14,15,0,0,5,14,14,14,14,14,14,14,14,14,14,14,14,14,5,14,14,14,14,14,5,14,14,14,14,14,14,14,14,14,14,5,14,14,5,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,5,14,14,2,14,2,14,15,5,0,0,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,5,5,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,0,0,5,14,14,14,0,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,0,0,0,14,14,14,0,14,14,1,0,14,14,14,14,14,1,1,0,14,14,14,0,5,0,14,14,0,14,14,2,0,14,14,2,0,14,14,2,0,14,14,0,5,14,0,14,15,0,5,14,15,0,14,15,0,14,0,0,15,15,0,15,15,0,15,15,0,0,15,15,15,15,0,15,0];
  for(n=0;n<11396+1;n++){
   setTile(X[n], Y[n], Z[n], I[n], D[n]);
  }
}

function Helicopter14(x,y,z){
 var X=[x,x+-1,x+-1,x+0,x+0,x+0,x+0,x+1,x+2,x+3,x+4,x+5,x+5,x+5,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+13,x+13,x+13,x+13,x+14,x+14,x+14,x+15,x+15,x+16,x+17,x+20];
 var Y=[y,y+-2,y+-2,y+6,y+-2,y+-1,y+0,y+6,y+6,y+6,y+6,y+6,y+1,y+2,y+6,y+3,y+1,y+2,y+1,y+2,y+-1,y+0,y+1,y+3,y+1,y+2,y+1,y+1,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+6,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+2,y+3,y+4,y+3,y+4,y+4,y+1,y+2,y+1,y+2,y+3,y+1,y+4,y+1,y+2,y+4,y+6,y+1,y+4,y+1,y+3,y+4,y+1,y+4,y+1,y+4,y+1,y+3,y+4,y+1,y+2,y+4,y+1,y+2,y+4,y+1,y+2,y+4,y+1,y+2,y+4,y+1,y+2,y+4,y+1,y+2,y+4,y+1,y+2,y+4,y+1,y+4,y+5,y+2,y+4,y+5,y+3,y+4,y+5,y+4,y+1,y+2,y+-1,y+0,y+1,y+2,y+3,y+1,y+2,y+4,y+1,y+2,y+4,y+5,y+1,y+2,y+4,y+5,y+6,y+1,y+2,y+4,y+5,y+1,y+2,y+4,y+5,y+1,y+2,y+4,y+1,y+2,y+4,y+1,y+2,y+4,y+1,y+2,y+4,y+1,y+2,y+4,y+1,y+2,y+4,y+1,y+2,y+4,y+1,y+4,y+5,y+1,y+4,y+5,y+6,y+1,y+4,y+5,y+6,y+7,y+2,y+4,y+5,y+6,y+7,y+3,y+4,y+5,y+6,y+7,y+4,y+5,y+6,y+1,y+2,y+1,y+2,y+3,y+1,y+4,y+1,y+2,y+4,y+6,y+1,y+4,y+1,y+4,y+6,y+1,y+4,y+6,y+1,y+4,y+1,y+3,y+4,y+1,y+2,y+4,y+1,y+2,y+4,y+1,y+2,y+4,y+1,y+2,y+4,y+1,y+2,y+4,y+1,y+2,y+4,y+1,y+2,y+4,y+1,y+4,y+5,y+2,y+4,y+5,y+3,y+4,y+5,y+4,y+1,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+6,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+6,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+2,y+3,y+4,y+3,y+4,y+4,y+6,y+6,y+6,y+1,y+2,y+1,y+2,y+-1,y+0,y+1,y+3,y+1,y+2,y+1,y+6,y+6,y+1,y+2,y+6,y+6,y+6,y+6,y+6,y+6,y+6,y+7];
 var Z=[z,z+-33,z+0,z+-31,z+0,z+0,z+0,z+-30,z+-30,z+-29,z+-28,z+-28,z+-16,z+-16,z+-27,z+-24,z+-18,z+-18,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-14,z+-29,z+-28,z+-28,z+-28,z+-27,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-12,z+-12,z+-11,z+-29,z+-29,z+-28,z+-28,z+-28,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-24,z+-24,z+-24,z+-23,z+-23,z+-22,z+-22,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-10,z+-29,z+-29,z+-28,z+-28,z+-28,z+-28,z+-28,z+-27,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-29,z+-29,z+-28,z+-28,z+-28,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-22,z+-22,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-10,z+-29,z+-28,z+-28,z+-28,z+-27,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-12,z+-12,z+-11,z+-27,z+-21,z+-20,z+-18,z+-18,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-14,z+-28,z+-19,z+-16,z+-16,z+-28,z+-18,z+-17,z+-29,z+-16,z+-30,z+-30,z+-33];
 var I=[0,20,0,44,57,57,0,44,44,44,44,44,35,109,44,35,35,44,35,109,35,35,35,44,35,35,35,102,20,35,102,35,20,20,35,35,35,44,35,71,71,44,44,35,35,44,44,35,102,44,44,35,35,44,44,35,35,44,44,35,102,44,35,35,35,44,35,35,102,44,35,35,35,44,35,35,35,44,35,35,102,44,35,35,35,49,35,35,35,35,35,35,20,35,44,35,20,43,44,35,114,109,44,35,109,35,35,109,35,35,35,35,35,35,35,35,67,35,35,67,35,35,67,35,35,67,35,35,35,35,35,67,35,35,67,35,35,35,44,35,35,109,35,35,109,35,35,35,35,35,35,22,20,35,35,35,35,35,35,35,35,35,35,35,44,35,35,35,35,35,35,35,44,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,109,35,35,35,109,35,35,35,35,109,35,35,35,35,35,35,35,35,35,44,35,35,109,20,35,44,35,20,43,44,35,114,109,44,35,109,35,109,44,35,35,44,35,35,35,35,35,35,67,35,35,67,35,35,67,35,35,67,35,35,35,35,35,67,35,35,67,35,35,35,44,35,35,109,35,35,109,35,102,20,35,102,35,20,20,35,35,35,44,35,35,35,44,44,35,35,44,44,35,102,44,44,35,35,44,44,44,35,35,44,44,35,102,44,35,35,35,44,35,35,102,44,35,35,35,44,35,35,35,44,35,35,102,44,35,35,35,49,35,35,35,35,35,35,44,44,44,35,44,35,109,35,35,35,44,35,35,35,44,44,35,109,44,44,44,44,44,44,44,0];
 var D=[0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,10,8,5,8,2,15,8,8,5,8,8,8,0,0,8,0,8,0,0,8,8,8,0,8,4,8,0,8,8,8,0,8,8,0,0,8,8,8,0,8,8,8,0,8,8,0,0,8,8,8,0,8,8,0,0,8,8,8,0,8,3,8,0,8,8,0,0,8,8,8,0,8,8,8,8,8,8,0,8,0,3,0,0,5,8,2,0,0,8,0,8,9,0,8,8,8,8,8,1,8,8,1,8,8,1,8,8,1,8,8,1,8,8,4,8,8,1,8,8,1,8,8,8,5,8,8,0,8,8,0,8,8,8,15,8,8,0,0,8,11,8,8,15,8,8,8,14,8,8,0,8,13,8,8,8,12,8,0,8,11,8,8,10,8,8,9,8,8,8,8,8,7,8,8,6,8,8,5,8,8,8,2,8,8,8,2,8,8,8,8,2,8,8,8,8,8,8,8,8,8,5,8,8,3,0,8,0,3,0,0,5,8,2,1,0,8,1,8,1,0,8,8,0,8,8,8,2,8,8,0,8,8,0,8,8,0,8,8,0,8,8,4,8,8,0,8,8,0,8,8,8,5,8,8,1,8,8,1,8,0,0,8,0,8,0,0,8,8,8,0,8,8,8,0,8,8,8,0,8,8,0,0,8,8,8,0,0,8,8,8,0,8,8,0,0,8,8,8,0,8,8,0,0,8,8,8,0,8,3,8,0,8,8,0,0,8,8,8,0,8,8,8,8,8,8,0,0,0,8,5,8,2,15,8,8,5,8,8,8,0,0,8,1,0,0,0,0,0,0,0,0];
  for(n=0;n<7480+1;n++){
   setTile(X[n], Y[n], Z[n], I[n], D[n]);
  }
}

function Helicopter15(x,y,z){
 var X=[x,x+-63,x+-61,x+-61,x+-61,x+-61,x+-60,x+-60,x+-60,x+-60,x+-59,x+-59,x+-59,x+-59,x+-58,x+-58,x+-58,x+-58,x+-57,x+-57,x+-57,x+-57,x+-56,x+-56,x+-56,x+-56,x+-55,x+-55,x+-55,x+-55,x+-54,x+-54,x+-54,x+-54,x+-53,x+-53,x+-53,x+-53,x+-52,x+-52,x+-52,x+-52,x+-51,x+-51,x+-51,x+-51,x+-50,x+-50,x+-50,x+-50,x+-49,x+-49,x+-49,x+-49,x+-48,x+-48,x+-48,x+-48,x+-48,x+-48,x+-48,x+-48,x+-48,x+-48,x+-48,x+-48,x+-48,x+-48,x+-48,x+-48,x+-48,x+-48,x+-48,x+-48,x+-48,x+-48,x+-48,x+-48,x+-48,x+-48,x+-48,x+-48,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-46,x+-46,x+-46,x+-46,x+-46,x+-46,x+-46,x+-46,x+-46,x+-46,x+-46,x+-46,x+-46,x+-46,x+-46,x+-46,x+-46,x+-46,x+-46,x+-46,x+-46,x+-46,x+-46,x+-46,x+-46,x+-46,x+-46,x+-46,x+-46,x+-46,x+-46,x+-46,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-12,x+-12,x+-12,x+-12,x+-11,x+-11,x+-11,x+-11,x+-10,x+-10,x+-10,x+-10,x+-9,x+-9,x+-9,x+-9,x+-8,x+-8,x+-8,x+-8,x+-7,x+-7,x+0,x+0,x+0,x+0];
 var Y=[y,y+10,y+9,y+9,y+9,y+9,y+9,y+9,y+9,y+9,y+9,y+9,y+9,y+9,y+9,y+9,y+9,y+9,y+9,y+9,y+9,y+9,y+9,y+9,y+9,y+9,y+9,y+9,y+9,y+9,y+9,y+9,y+9,y+9,y+9,y+9,y+9,y+9,y+9,y+9,y+9,y+9,y+9,y+9,y+9,y+9,y+9,y+9,y+9,y+9,y+9,y+9,y+9,y+9,y+4,y+3,y+5,y+4,y+9,y+3,y+4,y+5,y+6,y+7,y+9,y+3,y+4,y+5,y+6,y+7,y+9,y+3,y+4,y+5,y+6,y+7,y+9,y+4,y+9,y+3,y+5,y+4,y+4,y+2,y+3,y+4,y+5,y+3,y+4,y+3,y+4,y+5,y+6,y+7,y+9,y+3,y+4,y+5,y+6,y+7,y+8,y+9,y+10,y+3,y+4,y+5,y+6,y+7,y+9,y+3,y+4,y+2,y+3,y+4,y+5,y+4,y+4,y+2,y+3,y+4,y+5,y+3,y+4,y+9,y+3,y+4,y+5,y+6,y+9,y+3,y+4,y+5,y+6,y+7,y+9,y+3,y+4,y+5,y+6,y+9,y+3,y+4,y+9,y+2,y+3,y+4,y+5,y+4,y+4,y+1,y+2,y+3,y+4,y+5,y+9,y+2,y+3,y+4,y+9,y+3,y+4,y+5,y+3,y+4,y+5,y+6,y+3,y+4,y+5,y+2,y+3,y+4,y+9,y+1,y+2,y+3,y+4,y+5,y+9,y+4,y+4,y+9,y+0,y+1,y+2,y+3,y+4,y+5,y+9,y+1,y+2,y+3,y+4,y+3,y+4,y+5,y+3,y+4,y+5,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+0,y+1,y+2,y+3,y+4,y+5,y+9,y+4,y+9,y+9,y+0,y+4,y+9,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+-2,y+-1,y+0,y+3,y+4,y+-2,y+-1,y+3,y+4,y+-2,y+-1,y+0,y+3,y+4,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+0,y+4,y+9,y+9,y+9,y+9,y+-1,y+0,y+-2,y+-1,y+1,y+2,y+4,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+3,y+-2,y+-1,y+3,y+4,y+-2,y+-1,y+0,y+3,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+1,y+2,y+4,y+-1,y+0,y+9,y+9,y+9,y+9,y+-1,y+-1,y+0,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+3,y+-2,y+-1,y+0,y+3,y+-2,y+-1,y+3,y+-2,y+-1,y+0,y+3,y+-2,y+-1,y+0,y+1,y+3,y+-1,y+0,y+1,y+2,y+-1,y+0,y+-1,y+9,y+9,y+9,y+9,y+-1,y+-1,y+0,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+3,y+-2,y+-1,y+0,y+3,y+-2,y+-1,y+3,y+-2,y+-1,y+0,y+3,y+-2,y+-1,y+0,y+1,y+3,y+-1,y+0,y+1,y+2,y+-1,y+0,y+-1,y+9,y+9,y+9,y+9,y+-1,y+-1,y+0,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+2,y+3,y+-2,y+-1,y+0,y+3,y+-2,y+-1,y+3,y+-2,y+-1,y+0,y+3,y+-2,y+-1,y+0,y+2,y+3,y+-1,y+0,y+1,y+2,y+-1,y+0,y+-1,y+9,y+9,y+9,y+9,y+-1,y+-1,y+0,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+2,y+3,y+-2,y+-1,y+0,y+3,y+-2,y+-1,y+3,y+-2,y+-1,y+0,y+3,y+-2,y+-1,y+0,y+2,y+3,y+-1,y+0,y+1,y+2,y+-1,y+0,y+-1,y+9,y+9,y+9,y+9,y+-1,y+-1,y+0,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+3,y+-2,y+-1,y+0,y+3,y+-2,y+-1,y+3,y+-2,y+-1,y+0,y+3,y+-2,y+-1,y+0,y+1,y+3,y+-1,y+0,y+1,y+2,y+-1,y+0,y+-1,y+9,y+9,y+9,y+9,y+-1,y+-1,y+0,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+3,y+-2,y+-1,y+0,y+3,y+-2,y+-1,y+3,y+-2,y+-1,y+0,y+3,y+-2,y+-1,y+0,y+1,y+3,y+-1,y+0,y+1,y+2,y+-1,y+0,y+-1,y+9,y+9,y+9,y+9,y+-1,y+-1,y+0,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+2,y+3,y+-2,y+-1,y+0,y+3,y+-2,y+-1,y+0,y+3,y+-2,y+-1,y+0,y+3,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+-1,y+0,y+-1,y+9,y+9,y+9,y+9,y+-1,y+-1,y+0,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+2,y+3,y+-2,y+-1,y+3,y+-2,y+-1,y+3,y+-2,y+-1,y+3,y+-2,y+-1,y+0,y+2,y+3,y+-1,y+0,y+1,y+2,y+-1,y+0,y+-1,y+9,y+9,y+9,y+9,y+-1,y+-1,y+0,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+3,y+-2,y+-1,y+3,y+-2,y+-1,y+3,y+-2,y+-1,y+3,y+-2,y+-1,y+0,y+1,y+3,y+-1,y+0,y+1,y+2,y+-1,y+0,y+-1,y+9,y+9,y+9,y+-1,y+-1,y+0,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+3,y+-2,y+-1,y+3,y+-2,y+-1,y+3,y+-2,y+-1,y+3,y+-2,y+-1,y+0,y+1,y+3,y+-1,y+0,y+1,y+2,y+-1,y+0,y+-1,y+9,y+-1,y+-1,y+0,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+2,y+3,y+-2,y+-1,y+3,y+-2,y+-1,y+3,y+-2,y+-1,y+3,y+-2,y+-1,y+0,y+2,y+3,y+-1,y+0,y+1,y+2,y+-1,y+0,y+-1,y+-1,y+-1,y+0,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+2,y+3,y+-2,y+-1,y+3,y+-2,y+-1,y+3,y+-2,y+-1,y+3,y+-2,y+-1,y+0,y+2,y+3,y+-1,y+0,y+1,y+2,y+-1,y+0,y+-1,y+7,y+-1,y+-1,y+0,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+3,y+-2,y+-1,y+3,y+-2,y+-1,y+3,y+-2,y+-1,y+3,y+-2,y+-1,y+0,y+1,y+3,y+-1,y+0,y+1,y+2,y+-1,y+0,y+-1,y+7,y+7,y+7,y+-1,y+-1,y+0,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+3,y+-2,y+-1,y+3,y+-2,y+-1,y+3,y+-2,y+-1,y+3,y+-2,y+-1,y+0,y+1,y+3,y+-1,y+0,y+1,y+2,y+-1,y+0,y+-1,y+7,y+7,y+7,y+7,y+-1,y+-1,y+0,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+2,y+3,y+-2,y+-1,y+3,y+-2,y+-1,y+3,y+-2,y+-1,y+3,y+-2,y+-1,y+0,y+2,y+3,y+-1,y+0,y+1,y+2,y+-1,y+0,y+-1,y+7,y+7,y+7,y+7,y+-1,y+-1,y+0,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+2,y+3,y+-2,y+-1,y+3,y+-2,y+-1,y+3,y+-2,y+-1,y+3,y+-2,y+-1,y+0,y+2,y+3,y+-1,y+0,y+1,y+2,y+-1,y+0,y+-1,y+7,y+7,y+7,y+7,y+-1,y+-1,y+0,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+3,y+-2,y+-1,y+3,y+-2,y+-1,y+3,y+-2,y+-1,y+3,y+-2,y+-1,y+0,y+1,y+3,y+-1,y+0,y+1,y+2,y+-1,y+0,y+-1,y+7,y+7,y+7,y+-1,y+7,y+-1,y+0,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+3,y+-2,y+-1,y+3,y+-2,y+-1,y+3,y+-2,y+-1,y+3,y+-2,y+-1,y+0,y+1,y+3,y+-1,y+0,y+1,y+2,y+-1,y+0,y+-1,y+7,y+7,y+-1,y+7,y+-1,y+0,y+7,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+3,y+-2,y+-1,y+3,y+-2,y+-1,y+3,y+4,y+-2,y+-1,y+3,y+-2,y+-1,y+0,y+1,y+3,y+-1,y+0,y+1,y+2,y+-1,y+0,y+7,y+-1,y+7,y+-1,y+-1,y+0,y+7,y+-2,y+-1,y+0,y+1,y+2,y+7,y+-2,y+-1,y+0,y+2,y+3,y+-2,y+-1,y+3,y+4,y+-2,y+-1,y+3,y+4,y+5,y+-2,y+-1,y+3,y+4,y+-2,y+-1,y+0,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+7,y+-1,y+0,y+7,y+-1,y+-1,y+-1,y+1,y+-1,y+0,y+1,y+2,y+7,y+-2,y+-1,y+0,y+1,y+2,y+3,y+7,y+-2,y+-1,y+3,y+4,y+-2,y+-1,y+3,y+4,y+5,y+6,y+-2,y+-1,y+3,y+4,y+-2,y+-1,y+0,y+1,y+2,y+3,y+7,y+-1,y+0,y+1,y+2,y+7,y+-1,y+-1,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+3,y+7,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+7,y+-2,y+-1,y+3,y+4,y+5,y+6,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+7,y+-2,y+-1,y+0,y+1,y+2,y+3,y+7,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+3,y+4,y+-2,y+-1,y+3,y+4,y+5,y+7,y+-2,y+-1,y+3,y+4,y+5,y+6,y+7,y+-2,y+-1,y+3,y+4,y+5,y+7,y+-2,y+-1,y+3,y+4,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+1,y+3,y+4,y+-2,y+-1,y+3,y+4,y+5,y+7,y+-2,y+-1,y+3,y+4,y+5,y+6,y+7,y+8,y+-2,y+-1,y+3,y+4,y+5,y+7,y+-2,y+-1,y+3,y+4,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+3,y+4,y+-2,y+-1,y+3,y+4,y+7,y+-2,y+-1,y+3,y+4,y+5,y+7,y+-2,y+-1,y+3,y+4,y+7,y+-2,y+-1,y+3,y+4,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+3,y+7,y+-2,y+-1,y+0,y+3,y+7,y+-2,y+-1,y+0,y+3,y+4,y+-2,y+-1,y+0,y+3,y+7,y+-2,y+-1,y+3,y+7,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+7,y+-2,y+-1,y+2,y+7,y+-2,y+-1,y+0,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+2,y+-2,y+-1,y+2,y+7,y+-1,y+0,y+1,y+7,y+7,y+7,y+-1,y+0,y+1,y+-1,y+0,y+1,y+-2,y+-1,y+0,y+1,y+-1,y+0,y+1,y+-1,y+0,y+1,y+7,y+7,y+7,y+7,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+7,y+7,y+7,y+7,y+7,y+7,y+7,y+7,y+7,y+7,y+7,y+7,y+7,y+7,y+7,y+7,y+7,y+7,y+7,y+7,y+7,y+7,y+7,y+7,y+-2,y+-1,y+0,y+-2];
 var Z=[z,z+-35,z+-33,z+-32,z+-4,z+-3,z+-32,z+-31,z+-5,z+-4,z+-31,z+-30,z+-6,z+-5,z+-30,z+-29,z+-7,z+-6,z+-29,z+-28,z+-8,z+-7,z+-28,z+-27,z+-9,z+-8,z+-27,z+-26,z+-10,z+-9,z+-26,z+-25,z+-11,z+-10,z+-25,z+-24,z+-12,z+-11,z+-24,z+-23,z+-13,z+-12,z+-23,z+-22,z+-14,z+-13,z+-22,z+-21,z+-15,z+-14,z+-21,z+-20,z+-16,z+-15,z+-22,z+-21,z+-21,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-15,z+-15,z+-14,z+-22,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-14,z+-22,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-14,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-14,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-23,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-13,z+-24,z+-23,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-13,z+-12,z+-25,z+-24,z+-23,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-13,z+-12,z+-11,z+-26,z+-25,z+-23,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-13,z+-11,z+-10,z+-27,z+-26,z+-23,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-13,z+-10,z+-9,z+-28,z+-27,z+-23,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-13,z+-9,z+-8,z+-29,z+-28,z+-23,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-13,z+-8,z+-7,z+-30,z+-29,z+-23,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-13,z+-7,z+-6,z+-31,z+-30,z+-23,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-13,z+-6,z+-5,z+-32,z+-31,z+-23,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-13,z+-5,z+-4,z+-33,z+-32,z+-23,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-13,z+-4,z+-3,z+-33,z+-23,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-13,z+-3,z+-23,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-13,z+-23,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-13,z+-28,z+-23,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-13,z+-8,z+-28,z+-27,z+-23,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-13,z+-9,z+-8,z+-27,z+-26,z+-23,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-13,z+-10,z+-9,z+-26,z+-25,z+-23,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-13,z+-11,z+-10,z+-25,z+-24,z+-23,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-13,z+-12,z+-11,z+-24,z+-23,z+-23,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-13,z+-13,z+-12,z+-23,z+-23,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-13,z+-13,z+-23,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-13,z+-23,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-15,z+-14,z+-13,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-22,z+-21,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-15,z+-14,z+-23,z+-22,z+-19,z+-19,z+-18,z+-18,z+-17,z+-17,z+-14,z+-13,z+-24,z+-23,z+-13,z+-12,z+-25,z+-24,z+-12,z+-11,z+-26,z+-25,z+-11,z+-10,z+-27,z+-26,z+-10,z+-9,z+-28,z+-27,z+-9,z+-8,z+-28,z+-8,z+0,z+0,z+0,z+1];
 var I=[0,0,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,35,35,35,35,44,35,35,35,35,35,44,35,35,35,35,35,44,35,35,35,35,35,44,35,44,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,44,35,35,35,35,35,43,43,35,35,35,35,35,35,44,35,35,35,35,35,35,35,35,35,35,35,35,35,35,44,35,35,35,35,44,35,35,35,35,35,44,35,35,35,35,44,35,35,44,35,35,35,35,35,35,35,35,35,35,35,44,42,35,35,44,35,35,35,35,35,35,35,35,35,35,42,35,35,44,35,35,35,35,35,44,35,35,44,35,35,35,35,35,35,44,42,42,35,35,35,35,35,35,35,35,35,35,35,42,42,35,35,35,35,35,35,35,35,44,35,44,44,35,35,44,35,42,35,35,35,35,35,35,42,35,42,89,35,35,35,42,27,35,35,35,42,35,35,35,42,27,35,35,35,42,35,42,89,35,35,35,42,35,35,35,35,35,35,35,44,44,44,44,35,35,35,35,35,35,35,35,42,42,42,42,35,35,42,66,35,35,42,35,35,35,42,66,35,35,42,42,42,42,35,35,35,35,35,35,35,35,44,44,44,44,35,35,35,35,35,35,35,35,42,42,54,35,35,42,66,35,35,42,35,35,42,66,35,35,42,42,54,35,35,35,35,35,35,35,35,44,44,44,44,35,35,35,35,35,35,35,35,42,42,54,35,35,42,66,35,35,42,35,35,42,66,35,35,89,42,54,35,35,35,35,35,35,35,35,44,44,44,44,35,35,35,35,35,35,35,35,42,54,89,35,35,42,66,35,35,42,35,35,42,66,35,35,42,54,89,35,35,35,35,35,35,35,35,44,44,44,44,35,35,35,35,35,35,35,35,42,54,89,35,35,42,66,35,35,42,35,35,42,66,35,35,42,54,89,35,35,35,35,35,35,35,35,44,44,44,44,35,35,35,35,35,35,35,35,42,42,54,35,35,42,66,35,35,42,35,35,42,66,35,35,42,42,54,35,35,35,35,35,35,35,35,44,44,44,44,35,35,35,35,35,35,35,35,42,42,54,35,35,42,66,35,35,42,35,35,42,66,35,35,42,58,54,35,35,35,35,35,35,35,35,44,44,44,44,35,35,35,35,35,35,35,35,42,54,89,35,35,42,27,35,35,89,35,35,35,42,27,35,35,42,54,68,89,35,35,35,35,35,35,35,35,44,44,44,44,35,35,35,35,35,35,35,35,42,54,89,35,35,42,35,35,42,35,35,42,35,35,42,54,89,35,35,35,35,35,35,35,35,44,44,44,44,35,35,35,35,35,35,35,35,42,42,54,35,35,42,35,35,42,35,35,42,35,35,42,42,54,35,35,35,35,35,35,35,35,44,44,44,35,35,35,35,35,35,35,35,42,42,54,35,35,42,35,35,42,35,35,42,35,35,42,42,54,35,35,35,35,35,35,35,35,44,35,35,35,35,35,35,35,35,42,54,89,35,35,42,35,35,42,35,35,42,35,35,42,54,89,35,35,35,35,35,35,35,35,35,35,35,35,35,20,35,35,42,54,89,35,35,42,35,35,42,35,35,42,35,35,42,54,89,35,35,35,20,35,35,35,35,44,35,35,35,35,35,35,35,35,42,42,54,35,35,42,35,35,42,35,35,42,35,35,42,42,54,35,35,35,35,35,35,35,35,44,44,44,35,35,35,35,35,35,35,35,42,42,54,35,35,42,35,35,42,35,35,42,35,35,42,42,54,35,35,35,35,35,35,35,35,44,44,44,44,35,35,35,35,35,35,35,35,89,54,89,35,35,42,35,35,42,35,35,42,35,35,89,54,89,35,35,35,35,35,35,35,35,44,44,44,44,35,35,35,35,35,20,35,35,42,54,89,35,35,42,35,35,42,35,35,42,35,35,42,54,89,35,35,35,20,35,35,35,35,44,44,44,44,35,35,35,35,35,35,35,35,42,42,54,35,35,42,35,35,42,35,35,42,35,35,42,42,54,35,35,35,35,35,35,35,35,44,44,44,35,44,35,35,35,35,35,35,35,42,42,54,35,35,42,35,35,42,35,35,42,35,35,42,42,54,35,35,35,35,35,35,35,35,44,44,35,44,35,35,44,35,35,35,35,35,42,54,35,35,35,42,35,35,89,35,35,35,42,35,35,42,54,35,35,35,35,35,35,35,35,44,35,44,35,35,35,44,35,35,42,20,35,44,35,42,54,42,35,35,42,35,35,35,42,35,35,35,35,42,35,35,35,42,54,42,35,35,35,42,20,35,44,35,35,44,35,35,35,68,35,35,35,35,44,35,42,42,42,42,35,44,35,42,35,35,35,42,35,35,35,35,35,42,35,35,35,42,42,42,42,35,44,35,35,35,35,44,35,35,35,35,35,35,35,42,42,42,42,35,44,35,42,42,42,42,35,35,35,44,35,42,35,35,35,35,35,42,42,42,42,35,35,35,44,35,42,42,42,42,35,44,35,35,35,35,65,65,35,35,71,71,35,35,89,35,35,35,42,35,35,35,44,35,42,35,35,35,35,44,35,42,35,35,35,44,35,89,35,35,35,35,35,35,35,35,35,35,35,42,35,35,35,35,42,35,35,35,44,35,42,35,35,35,35,43,35,35,42,35,35,35,44,35,42,35,35,35,35,35,35,35,35,35,35,35,42,35,35,35,42,35,35,44,35,42,35,35,35,44,35,42,35,35,44,35,42,35,35,35,35,35,35,35,35,20,35,35,42,35,44,35,42,67,35,44,35,42,35,35,35,35,42,67,35,44,35,42,35,44,35,35,20,35,35,35,20,44,35,89,20,44,35,42,35,20,35,42,42,35,20,35,42,35,20,35,89,20,44,35,35,20,44,44,44,35,35,20,35,35,20,35,35,35,20,35,35,20,35,35,20,44,44,44,44,35,35,35,35,35,35,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,57,57,0,0];
 var D=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,8,8,8,0,8,8,8,8,8,0,11,8,8,8,8,0,8,8,8,8,8,0,8,0,8,8,8,8,11,8,15,8,8,8,8,8,8,8,8,0,11,8,8,8,8,0,0,5,8,8,8,8,8,0,8,8,11,8,15,8,8,8,11,8,15,8,8,8,0,8,8,8,8,0,11,8,8,8,8,0,8,8,8,8,0,8,8,0,11,8,15,8,8,8,8,11,8,15,8,0,0,8,8,0,8,8,8,11,8,8,15,8,8,8,0,8,8,0,8,11,8,8,8,0,8,8,0,8,8,11,8,8,8,0,0,0,8,8,8,8,8,11,8,15,8,8,8,0,0,8,8,8,8,11,8,8,8,0,8,0,0,8,8,0,8,0,8,11,8,8,8,8,0,3,0,0,8,8,8,0,9,8,8,11,0,11,8,8,0,9,8,8,8,0,4,0,0,8,8,8,0,8,11,8,8,8,8,8,0,0,0,0,8,8,15,0,8,11,8,8,0,0,0,0,8,8,0,1,8,11,0,11,11,8,0,1,8,8,0,0,0,0,8,15,0,8,11,8,8,8,0,0,0,0,11,8,8,8,0,8,11,8,0,0,0,8,8,0,1,8,11,0,11,8,0,1,8,8,0,0,0,8,8,0,8,11,8,8,11,0,0,0,0,11,8,8,8,0,8,11,8,0,0,0,8,8,0,1,8,11,0,11,8,0,1,8,8,0,0,0,8,8,0,8,11,8,8,11,0,0,0,0,11,8,8,8,0,8,11,8,0,0,0,8,8,0,1,8,11,0,11,8,0,1,8,8,0,0,0,8,8,0,8,11,8,8,11,0,0,0,0,11,8,8,8,0,8,11,8,0,0,0,8,8,0,1,8,11,0,11,8,0,1,8,8,0,0,0,8,8,0,8,11,8,8,11,0,0,0,0,11,8,8,8,0,8,11,8,0,0,0,8,8,0,1,8,11,0,11,8,0,1,8,8,0,0,0,8,8,0,8,11,8,8,11,0,0,0,0,11,8,8,8,0,8,11,8,0,0,0,8,8,0,1,8,11,0,11,8,0,1,8,8,0,0,0,8,8,0,8,11,8,8,11,0,0,0,0,11,8,8,8,3,8,11,8,0,0,0,8,8,0,1,8,11,0,6,11,8,0,1,8,8,0,0,2,0,8,8,3,8,11,8,8,11,0,0,0,0,11,8,8,8,0,8,11,8,0,0,0,8,8,0,8,11,0,11,8,0,8,8,0,0,0,8,8,0,8,11,8,8,11,0,0,0,0,11,8,8,8,0,8,11,8,0,0,0,8,8,0,8,11,0,11,8,0,0,8,0,0,0,8,8,0,8,11,8,8,11,0,0,0,11,8,8,8,0,8,11,8,0,0,0,8,8,0,8,11,0,11,8,0,8,8,0,0,0,8,8,0,8,11,8,8,11,0,11,8,8,8,0,8,11,8,0,0,0,8,8,0,8,11,0,11,8,0,8,8,0,0,0,8,8,0,8,11,8,8,11,11,8,8,8,0,0,11,8,0,0,0,8,8,0,8,11,0,11,8,0,8,8,0,0,0,8,8,0,0,11,8,8,11,0,11,8,8,8,0,8,11,8,0,0,0,8,8,0,8,11,0,11,8,0,8,8,0,0,0,8,8,0,8,11,8,8,11,0,0,0,11,8,8,8,0,8,11,8,0,0,0,8,8,0,8,11,0,11,8,0,8,8,0,0,0,8,8,0,8,11,8,8,11,0,0,0,0,11,8,8,8,0,8,11,8,0,0,0,8,8,0,8,11,0,11,8,0,8,8,0,0,0,8,8,0,8,11,8,8,11,0,0,0,0,11,8,8,8,0,0,11,8,0,0,0,8,8,0,8,11,0,11,8,0,8,8,0,0,0,8,8,0,0,11,8,8,11,0,0,0,0,11,8,8,8,0,8,11,8,0,0,0,8,8,0,8,11,0,11,8,0,8,8,0,0,0,8,8,0,8,11,8,8,11,0,0,0,11,0,8,8,8,0,8,11,8,0,0,0,8,8,0,8,11,0,11,8,0,8,8,0,0,0,8,8,0,8,11,8,8,11,0,0,11,0,8,8,0,8,0,8,11,8,0,0,3,8,8,0,8,11,0,11,11,8,0,8,8,0,0,4,8,8,0,8,11,8,8,0,11,0,11,8,8,0,15,0,0,0,11,0,8,0,0,0,8,8,0,8,8,11,0,11,8,8,8,0,8,8,8,0,0,0,8,15,0,0,0,11,0,8,8,0,11,1,11,2,8,8,8,11,0,8,0,0,0,0,8,0,8,0,8,8,11,0,11,8,8,8,8,0,8,8,8,0,0,0,0,8,0,8,8,8,11,0,11,1,11,8,8,11,8,0,0,0,0,8,0,8,0,0,0,0,8,8,8,0,11,0,11,8,8,8,8,0,0,0,0,8,8,8,0,8,0,0,0,0,8,0,11,8,8,11,2,2,8,11,5,13,11,8,0,8,8,8,0,8,8,8,0,11,0,11,8,8,8,0,8,0,8,8,8,0,8,0,8,8,11,8,8,11,11,8,8,11,8,0,11,8,8,8,0,8,8,8,0,11,0,11,8,8,8,0,5,8,0,8,8,8,0,8,0,8,8,11,8,8,11,11,8,8,11,8,0,8,8,8,0,8,8,0,11,0,11,8,8,0,8,0,8,8,0,8,0,8,8,11,8,8,11,11,8,0,11,8,0,8,0,8,0,1,8,0,11,0,2,8,11,8,0,1,8,0,8,0,8,0,11,8,0,11,11,8,0,0,8,0,0,0,8,0,2,0,11,0,0,5,0,8,0,2,0,8,0,0,0,11,8,0,0,0,0,11,8,0,8,8,0,1,11,8,0,8,8,0,11,8,0,0,0,0,0,11,8,11,11,11,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  for(n=0;n<30784+1;n++){
   setTile(X[n], Y[n], Z[n], I[n], D[n]);
  }
}

function Helicopter16(x,y,z){
 var X=[x,x+-54,x+-51,x+-51,x+-51,x+-50,x+-50,x+-50,x+-50,x+-50,x+-49,x+-49,x+-49,x+-49,x+-49,x+-49,x+-49,x+-49,x+-49,x+-49,x+-49,x+-49,x+-49,x+-49,x+-48,x+-48,x+-48,x+-48,x+-48,x+-48,x+-48,x+-48,x+-48,x+-48,x+-48,x+-48,x+-48,x+-48,x+-48,x+-48,x+-48,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-46,x+-46,x+-46,x+-46,x+-46,x+-46,x+-46,x+-46,x+-46,x+-46,x+-46,x+-46,x+-46,x+-46,x+-46,x+-46,x+-46,x+-46,x+-46,x+-46,x+-46,x+-46,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-45,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-13,x+-13,x+-13,x+-13,x+-12,x+-12,x+-12,x+-11,x+-11,x+-11,x+-10,x+-10,x+-10,x+-10,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-4,x+-4,x+-4,x+-4,x+-4,x+-3,x+-3,x+-2,x+-2,x+-1,x+0,x+0,x+0,x+0];
 var Y=[y,y+11,y+10,y+10,y+10,y+10,y+10,y+0,y+10,y+10,y+10,y+10,y+-1,y+0,y+1,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+10,y+10,y+10,y+10,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+2,y+3,y+-1,y+0,y+1,y+2,y+10,y+10,y+10,y+10,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+3,y+-1,y+0,y+1,y+2,y+0,y+1,y+2,y+10,y+10,y+10,y+10,y+0,y+1,y+2,y+3,y+-1,y+0,y+3,y+-2,y+-1,y+0,y+3,y+-1,y+0,y+3,y+0,y+1,y+2,y+3,y+10,y+10,y+10,y+10,y+-1,y+0,y+1,y+4,y+-1,y+0,y+1,y+2,y+3,y+4,y+-1,y+0,y+1,y+2,y+4,y+-2,y+-1,y+0,y+4,y+-1,y+0,y+1,y+4,y+0,y+1,y+2,y+3,y+4,y+10,y+10,y+10,y+10,y+0,y+1,y+2,y+3,y+4,y+-1,y+0,y+1,y+4,y+-1,y+0,y+5,y+-1,y+0,y+1,y+4,y+0,y+1,y+2,y+3,y+4,y+10,y+10,y+10,y+10,y+0,y+1,y+2,y+3,y+4,y+-1,y+0,y+1,y+2,y+5,y+6,y+-1,y+0,y+5,y+-1,y+0,y+5,y+6,y+0,y+1,y+2,y+3,y+4,y+10,y+10,y+10,y+10,y+0,y+1,y+2,y+3,y+4,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+-1,y+0,y+1,y+2,y+4,y+5,y+-1,y+0,y+1,y+5,y+6,y+0,y+1,y+2,y+3,y+4,y+10,y+10,y+10,y+10,y+0,y+1,y+2,y+3,y+4,y+5,y+-1,y+0,y+1,y+2,y+3,y+6,y+-1,y+0,y+1,y+6,y+-1,y+0,y+1,y+6,y+0,y+1,y+2,y+3,y+4,y+5,y+10,y+10,y+10,y+10,y+-1,y+0,y+1,y+4,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-1,y+0,y+1,y+4,y+6,y+7,y+-1,y+0,y+2,y+6,y+7,y+-1,y+0,y+1,y+5,y+6,y+7,y+0,y+1,y+2,y+3,y+4,y+5,y+10,y+10,y+10,y+2,y+3,y+4,y+10,y+0,y+1,y+2,y+3,y+4,y+5,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+-1,y+0,y+2,y+3,y+4,y+5,y+6,y+7,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+0,y+1,y+2,y+3,y+4,y+5,y+2,y+3,y+4,y+10,y+10,y+1,y+2,y+3,y+4,y+5,y+10,y+0,y+1,y+2,y+5,y+6,y+10,y+-1,y+0,y+1,y+2,y+5,y+6,y+7,y+-1,y+0,y+1,y+2,y+3,y+6,y+7,y+-1,y+0,y+1,y+3,y+4,y+6,y+7,y+0,y+1,y+4,y+5,y+6,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+10,y+-1,y+0,y+1,y+4,y+10,y+1,y+2,y+3,y+4,y+5,y+0,y+1,y+5,y+6,y+10,y+-1,y+0,y+1,y+3,y+4,y+6,y+7,y+10,y+-1,y+0,y+1,y+3,y+4,y+6,y+7,y+-1,y+0,y+1,y+3,y+4,y+6,y+7,y+0,y+1,y+5,y+6,y+10,y+1,y+2,y+3,y+4,y+5,y+6,y+10,y+6,y+1,y+2,y+3,y+4,y+5,y+0,y+1,y+2,y+5,y+6,y+8,y+-1,y+0,y+1,y+6,y+7,y+8,y+10,y+-1,y+0,y+1,y+6,y+7,y+8,y+10,y+-1,y+0,y+1,y+6,y+7,y+8,y+10,y+0,y+1,y+2,y+5,y+6,y+7,y+8,y+10,y+1,y+2,y+3,y+4,y+5,y+7,y+6,y+1,y+2,y+3,y+4,y+5,y+0,y+1,y+2,y+5,y+6,y+7,y+8,y+-1,y+0,y+1,y+6,y+7,y+8,y+10,y+-1,y+0,y+1,y+6,y+7,y+8,y+9,y+10,y+-1,y+0,y+1,y+6,y+7,y+8,y+10,y+0,y+1,y+2,y+5,y+6,y+7,y+8,y+1,y+2,y+3,y+4,y+5,y+-1,y+0,y+1,y+-2,y+-1,y+0,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+3,y+0,y+4,y+4,y+1,y+2,y+3,y+4,y+5,y+0,y+1,y+2,y+5,y+6,y+7,y+10,y+-1,y+0,y+1,y+6,y+7,y+10,y+-1,y+0,y+1,y+6,y+7,y+8,y+10,y+-1,y+0,y+1,y+6,y+7,y+10,y+0,y+1,y+2,y+5,y+6,y+7,y+1,y+2,y+3,y+4,y+5,y+4,y+0,y+4,y+-1,y+0,y+1,y+3,y+0,y+1,y+2,y+-1,y+-2,y+-1,y+0,y+-1,y+0,y+1,y+-1,y+0,y+-2,y+-1,y+0,y+1,y+-1,y+0,y+2,y+3,y+0,y+1,y+3,y+-1,y+0,y+1,y+2,y+3,y+0,y+1,y+4,y+4,y+1,y+2,y+3,y+4,y+5,y+10,y+0,y+1,y+2,y+5,y+6,y+10,y+-1,y+0,y+1,y+6,y+7,y+-1,y+0,y+1,y+6,y+7,y+10,y+-1,y+0,y+1,y+6,y+7,y+10,y+0,y+1,y+2,y+5,y+6,y+10,y+1,y+2,y+3,y+4,y+5,y+4,y+0,y+1,y+4,y+-1,y+0,y+1,y+2,y+3,y+0,y+1,y+3,y+3,y+-1,y+0,y+2,y+-2,y+-1,y+0,y+1,y+-1,y+0,y+-1,y+-1,y+-1,y+0,y+2,y+-2,y+-1,y+1,y+2,y+-1,y+0,y+2,y+3,y+0,y+1,y+3,y+-1,y+0,y+2,y+3,y+0,y+1,y+4,y+4,y+10,y+1,y+2,y+3,y+4,y+5,y+10,y+0,y+1,y+2,y+5,y+6,y+-1,y+0,y+1,y+6,y+7,y+-1,y+0,y+1,y+6,y+7,y+10,y+-1,y+0,y+1,y+6,y+7,y+0,y+1,y+2,y+5,y+6,y+10,y+1,y+2,y+3,y+4,y+5,y+10,y+4,y+0,y+1,y+4,y+-1,y+0,y+2,y+3,y+0,y+1,y+3,y+3,y+-1,y+0,y+2,y+-2,y+-1,y+1,y+2,y+-1,y+0,y+2,y+-1,y+-1,y+-1,y+0,y+-1,y+0,y+1,y+-1,y+0,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+2,y+3,y+0,y+1,y+3,y+-1,y+0,y+1,y+2,y+3,y+0,y+1,y+4,y+10,y+4,y+10,y+1,y+2,y+3,y+4,y+5,y+0,y+1,y+2,y+5,y+6,y+-1,y+0,y+1,y+6,y+7,y+-1,y+0,y+1,y+6,y+7,y+10,y+-1,y+0,y+1,y+6,y+7,y+0,y+1,y+2,y+5,y+6,y+1,y+2,y+3,y+4,y+5,y+10,y+4,y+10,y+0,y+1,y+4,y+-1,y+0,y+1,y+2,y+3,y+0,y+1,y+3,y+3,y+-1,y+0,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+2,y+1,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+1,y+1,y+-1,y+0,y+2,y+-2,y+-1,y+1,y+2,y+-1,y+0,y+2,y+3,y+0,y+1,y+3,y+-1,y+0,y+2,y+3,y+10,y+0,y+1,y+4,y+10,y+4,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+5,y+6,y+-1,y+0,y+1,y+6,y+7,y+-1,y+0,y+1,y+6,y+7,y+10,y+-1,y+0,y+1,y+6,y+7,y+1,y+2,y+3,y+5,y+6,y+2,y+3,y+4,y+5,y+4,y+10,y+0,y+1,y+4,y+10,y+-1,y+0,y+2,y+3,y+0,y+1,y+3,y+3,y+-1,y+0,y+2,y+-2,y+-1,y+1,y+2,y+-1,y+0,y+2,y+1,y+-1,y+0,y+1,y+-1,y+0,y+-1,y+0,y+-1,y+1,y+2,y+1,y+2,y+3,y+-1,y+0,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+2,y+3,y+4,y+3,y+4,y+0,y+1,y+3,y+4,y+10,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+10,y+0,y+1,y+4,y+5,y+4,y+5,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+6,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+10,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+1,y+2,y+3,y+4,y+5,y+6,y+3,y+4,y+5,y+4,y+5,y+0,y+1,y+4,y+5,y+10,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+10,y+0,y+1,y+3,y+4,y+3,y+4,y+-1,y+0,y+2,y+3,y+4,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+2,y+3,y+1,y+2,y+3,y+-1,y+1,y+2,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+1,y+1,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+-1,y+2,y+3,y+10,y+0,y+1,y+2,y+3,y+10,y+-1,y+0,y+1,y+2,y+0,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+6,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+-1,y+0,y+2,y+3,y+6,y+7,y+10,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+1,y+2,y+3,y+4,y+5,y+6,y+3,y+4,y+5,y+0,y+-1,y+0,y+1,y+2,y+10,y+0,y+1,y+2,y+3,y+10,y+2,y+3,y+-1,y+-2,y+-1,y+0,y+1,y+-1,y+0,y+1,y+2,y+1,y+-1,y+0,y+1,y+-1,y+0,y+10,y+10,y+4,y+5,y+2,y+3,y+4,y+5,y+6,y+0,y+1,y+2,y+4,y+5,y+6,y+7,y+-1,y+0,y+1,y+3,y+4,y+6,y+7,y+10,y+0,y+1,y+2,y+4,y+5,y+6,y+7,y+2,y+3,y+4,y+5,y+6,y+4,y+5,y+10,y+10,y+10,y+10,y+5,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+10,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+5,y+10,y+10,y+10,y+10,y+2,y+3,y+4,y+5,y+6,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+10,y+2,y+3,y+4,y+5,y+6,y+10,y+10,y+10,y+10,y+2,y+3,y+4,y+5,y+6,y+1,y+2,y+3,y+4,y+5,y+6,y+10,y+2,y+3,y+4,y+5,y+6,y+10,y+10,y+10,y+10,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+10,y+3,y+4,y+5,y+10,y+10,y+10,y+10,y+3,y+4,y+5,y+2,y+3,y+4,y+5,y+10,y+3,y+4,y+5,y+10,y+10,y+10,y+10,y+3,y+4,y+5,y+2,y+3,y+4,y+5,y+10,y+3,y+4,y+5,y+10,y+10,y+10,y+10,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+10,y+4,y+5,y+10,y+10,y+10,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+10,y+4,y+5,y+10,y+10,y+4,y+3,y+4,y+5,y+10,y+4,y+4,y+3,y+4,y+5,y+6,y+10,y+4,y+4,y+3,y+4,y+5,y+6,y+7,y+10,y+4,y+4,y+3,y+4,y+5,y+7,y+10,y+4,y+4,y+3,y+4,y+5,y+10,y+4,y+3,y+4,y+5,y+10,y+3,y+4,y+5,y+4,y+4,y+5,y+4,y+5,y+4,y+5,y+5,y+6,y+3,y+4,y+5,y+6,y+6,y+7,y+2,y+3,y+4,y+5,y+6,y+7,y+7,y+8,y+1,y+2,y+3,y+5,y+6,y+7,y+8,y+8,y+9,y+10,y+8,y+8,y+1,y+6,y+7,y+8,y+9,y+7,y+8,y+9,y+10,y+11,y+8,y+9,y+10,y+6,y+7,y+11,y+9,y+10,y+5,y+6,y+4,y+5,y+4,y+-2,y+-2,y+-1,y+0];
 var Z=[z,z+49,z+13,z+14,z+45,z+14,z+15,z+29,z+44,z+45,z+15,z+16,z+28,z+28,z+28,z+29,z+29,z+29,z+29,z+30,z+30,z+30,z+43,z+44,z+16,z+17,z+28,z+28,z+28,z+28,z+29,z+29,z+29,z+29,z+29,z+30,z+30,z+30,z+30,z+42,z+43,z+17,z+18,z+27,z+27,z+27,z+28,z+28,z+28,z+28,z+29,z+29,z+29,z+30,z+30,z+30,z+30,z+31,z+31,z+31,z+41,z+42,z+18,z+19,z+27,z+27,z+27,z+27,z+28,z+28,z+28,z+29,z+29,z+29,z+29,z+30,z+30,z+30,z+31,z+31,z+31,z+31,z+40,z+41,z+19,z+20,z+26,z+26,z+26,z+26,z+27,z+27,z+27,z+27,z+27,z+27,z+28,z+28,z+28,z+28,z+28,z+29,z+29,z+29,z+29,z+30,z+30,z+30,z+30,z+31,z+31,z+31,z+31,z+31,z+39,z+40,z+20,z+21,z+27,z+27,z+27,z+27,z+27,z+28,z+28,z+28,z+28,z+29,z+29,z+29,z+30,z+30,z+30,z+30,z+31,z+31,z+31,z+31,z+31,z+38,z+39,z+21,z+22,z+27,z+27,z+27,z+27,z+27,z+28,z+28,z+28,z+28,z+28,z+28,z+29,z+29,z+29,z+30,z+30,z+30,z+30,z+31,z+31,z+31,z+31,z+31,z+37,z+38,z+22,z+23,z+27,z+27,z+27,z+27,z+27,z+28,z+28,z+28,z+28,z+28,z+28,z+28,z+28,z+29,z+29,z+29,z+29,z+29,z+29,z+30,z+30,z+30,z+30,z+30,z+31,z+31,z+31,z+31,z+31,z+36,z+37,z+23,z+24,z+27,z+27,z+27,z+27,z+27,z+27,z+28,z+28,z+28,z+28,z+28,z+28,z+29,z+29,z+29,z+29,z+30,z+30,z+30,z+30,z+31,z+31,z+31,z+31,z+31,z+31,z+35,z+36,z+24,z+25,z+26,z+26,z+26,z+26,z+27,z+27,z+27,z+27,z+27,z+27,z+27,z+28,z+28,z+28,z+28,z+28,z+28,z+29,z+29,z+29,z+29,z+29,z+30,z+30,z+30,z+30,z+30,z+30,z+31,z+31,z+31,z+31,z+31,z+31,z+34,z+35,z+25,z+26,z+26,z+26,z+26,z+27,z+27,z+27,z+27,z+27,z+27,z+28,z+28,z+28,z+28,z+28,z+28,z+28,z+28,z+28,z+29,z+29,z+29,z+29,z+29,z+29,z+29,z+29,z+30,z+30,z+30,z+30,z+30,z+30,z+30,z+30,z+30,z+31,z+31,z+31,z+31,z+31,z+31,z+32,z+32,z+32,z+33,z+34,z+26,z+26,z+26,z+26,z+26,z+26,z+27,z+27,z+27,z+27,z+27,z+27,z+28,z+28,z+28,z+28,z+28,z+28,z+28,z+29,z+29,z+29,z+29,z+29,z+29,z+29,z+30,z+30,z+30,z+30,z+30,z+30,z+30,z+31,z+31,z+31,z+31,z+31,z+32,z+32,z+32,z+32,z+32,z+32,z+32,z+32,z+33,z+33,z+33,z+33,z+33,z+26,z+26,z+26,z+26,z+26,z+27,z+27,z+27,z+27,z+27,z+28,z+28,z+28,z+28,z+28,z+28,z+28,z+28,z+29,z+29,z+29,z+29,z+29,z+29,z+29,z+30,z+30,z+30,z+30,z+30,z+30,z+30,z+31,z+31,z+31,z+31,z+31,z+32,z+32,z+32,z+32,z+32,z+32,z+32,z+33,z+26,z+26,z+26,z+26,z+26,z+27,z+27,z+27,z+27,z+27,z+27,z+28,z+28,z+28,z+28,z+28,z+28,z+28,z+29,z+29,z+29,z+29,z+29,z+29,z+29,z+30,z+30,z+30,z+30,z+30,z+30,z+30,z+31,z+31,z+31,z+31,z+31,z+31,z+31,z+31,z+32,z+32,z+32,z+32,z+32,z+32,z+33,z+26,z+26,z+26,z+26,z+26,z+27,z+27,z+27,z+27,z+27,z+27,z+27,z+28,z+28,z+28,z+28,z+28,z+28,z+28,z+29,z+29,z+29,z+29,z+29,z+29,z+29,z+29,z+30,z+30,z+30,z+30,z+30,z+30,z+30,z+31,z+31,z+31,z+31,z+31,z+31,z+31,z+32,z+32,z+32,z+32,z+32,z+18,z+18,z+18,z+19,z+19,z+19,z+20,z+22,z+22,z+22,z+23,z+23,z+23,z+23,z+24,z+24,z+25,z+26,z+26,z+26,z+26,z+26,z+27,z+27,z+27,z+27,z+27,z+27,z+27,z+28,z+28,z+28,z+28,z+28,z+28,z+29,z+29,z+29,z+29,z+29,z+29,z+29,z+30,z+30,z+30,z+30,z+30,z+30,z+31,z+31,z+31,z+31,z+31,z+31,z+32,z+32,z+32,z+32,z+32,z+33,z+34,z+34,z+35,z+35,z+35,z+35,z+36,z+36,z+36,z+38,z+39,z+39,z+39,z+40,z+40,z+40,z+18,z+18,z+19,z+19,z+19,z+19,z+20,z+20,z+20,z+21,z+22,z+22,z+22,z+23,z+23,z+23,z+23,z+23,z+24,z+24,z+24,z+25,z+26,z+26,z+26,z+26,z+26,z+26,z+27,z+27,z+27,z+27,z+27,z+27,z+28,z+28,z+28,z+28,z+28,z+29,z+29,z+29,z+29,z+29,z+29,z+30,z+30,z+30,z+30,z+30,z+30,z+31,z+31,z+31,z+31,z+31,z+31,z+32,z+32,z+32,z+32,z+32,z+33,z+34,z+34,z+34,z+35,z+35,z+35,z+35,z+35,z+36,z+36,z+36,z+37,z+38,z+38,z+38,z+39,z+39,z+39,z+39,z+40,z+40,z+15,z+16,z+18,z+18,z+18,z+19,z+19,z+19,z+19,z+20,z+20,z+20,z+21,z+22,z+22,z+22,z+23,z+23,z+23,z+23,z+24,z+24,z+24,z+25,z+25,z+26,z+26,z+26,z+26,z+26,z+26,z+27,z+27,z+27,z+27,z+27,z+28,z+28,z+28,z+28,z+28,z+29,z+29,z+29,z+29,z+29,z+29,z+30,z+30,z+30,z+30,z+30,z+31,z+31,z+31,z+31,z+31,z+31,z+32,z+32,z+32,z+32,z+32,z+32,z+33,z+34,z+34,z+34,z+35,z+35,z+35,z+35,z+36,z+36,z+36,z+37,z+38,z+38,z+38,z+39,z+39,z+39,z+39,z+40,z+40,z+40,z+42,z+43,z+15,z+15,z+16,z+16,z+17,z+18,z+18,z+18,z+19,z+19,z+19,z+19,z+19,z+20,z+20,z+20,z+21,z+22,z+22,z+22,z+23,z+23,z+23,z+23,z+23,z+24,z+24,z+24,z+24,z+25,z+25,z+26,z+26,z+26,z+26,z+26,z+27,z+27,z+27,z+27,z+27,z+28,z+28,z+28,z+28,z+28,z+29,z+29,z+29,z+29,z+29,z+29,z+30,z+30,z+30,z+30,z+30,z+31,z+31,z+31,z+31,z+31,z+32,z+32,z+32,z+32,z+32,z+32,z+33,z+33,z+34,z+34,z+34,z+35,z+35,z+35,z+35,z+35,z+36,z+36,z+36,z+37,z+38,z+38,z+38,z+39,z+39,z+39,z+39,z+39,z+40,z+40,z+40,z+41,z+42,z+42,z+43,z+43,z+15,z+15,z+16,z+16,z+16,z+17,z+18,z+18,z+18,z+19,z+19,z+19,z+19,z+20,z+20,z+20,z+21,z+22,z+22,z+22,z+23,z+23,z+23,z+23,z+23,z+24,z+24,z+24,z+24,z+25,z+26,z+26,z+26,z+26,z+27,z+27,z+27,z+27,z+27,z+28,z+28,z+28,z+28,z+28,z+29,z+29,z+29,z+29,z+29,z+29,z+30,z+30,z+30,z+30,z+30,z+31,z+31,z+31,z+31,z+31,z+32,z+32,z+32,z+32,z+33,z+33,z+34,z+34,z+34,z+34,z+35,z+35,z+35,z+35,z+36,z+36,z+36,z+37,z+38,z+38,z+38,z+39,z+39,z+39,z+39,z+40,z+40,z+40,z+41,z+42,z+42,z+42,z+43,z+43,z+15,z+15,z+16,z+16,z+16,z+17,z+17,z+17,z+18,z+18,z+18,z+18,z+19,z+19,z+19,z+19,z+19,z+19,z+20,z+20,z+20,z+20,z+20,z+21,z+21,z+22,z+22,z+22,z+22,z+22,z+23,z+23,z+23,z+23,z+23,z+23,z+23,z+23,z+24,z+24,z+24,z+24,z+25,z+25,z+26,z+26,z+26,z+27,z+27,z+27,z+27,z+27,z+27,z+28,z+28,z+28,z+28,z+28,z+28,z+28,z+28,z+28,z+29,z+29,z+29,z+29,z+29,z+29,z+29,z+29,z+29,z+29,z+30,z+30,z+30,z+30,z+30,z+30,z+30,z+30,z+30,z+31,z+31,z+31,z+31,z+31,z+31,z+32,z+32,z+32,z+33,z+33,z+34,z+34,z+34,z+34,z+34,z+35,z+35,z+35,z+35,z+35,z+35,z+35,z+35,z+36,z+36,z+36,z+36,z+37,z+37,z+38,z+38,z+38,z+38,z+38,z+39,z+39,z+39,z+39,z+39,z+39,z+40,z+40,z+40,z+40,z+41,z+41,z+41,z+42,z+42,z+42,z+43,z+43,z+15,z+15,z+16,z+16,z+16,z+17,z+18,z+18,z+18,z+18,z+19,z+19,z+19,z+19,z+20,z+21,z+21,z+21,z+22,z+22,z+22,z+22,z+22,z+23,z+23,z+23,z+23,z+24,z+26,z+26,z+26,z+27,z+27,z+27,z+27,z+27,z+27,z+28,z+28,z+28,z+28,z+28,z+28,z+28,z+28,z+29,z+29,z+29,z+29,z+29,z+29,z+29,z+30,z+30,z+30,z+30,z+30,z+30,z+30,z+30,z+31,z+31,z+31,z+31,z+31,z+31,z+32,z+32,z+32,z+34,z+35,z+35,z+35,z+35,z+35,z+36,z+36,z+36,z+36,z+36,z+37,z+37,z+38,z+39,z+39,z+39,z+39,z+40,z+40,z+40,z+40,z+41,z+42,z+42,z+42,z+43,z+43,z+20,z+21,z+26,z+26,z+27,z+27,z+27,z+27,z+27,z+28,z+28,z+28,z+28,z+28,z+28,z+28,z+29,z+29,z+29,z+29,z+29,z+29,z+29,z+29,z+30,z+30,z+30,z+30,z+30,z+30,z+30,z+31,z+31,z+31,z+31,z+31,z+32,z+32,z+36,z+37,z+19,z+20,z+27,z+28,z+28,z+28,z+28,z+28,z+28,z+28,z+29,z+29,z+29,z+29,z+29,z+29,z+29,z+29,z+29,z+30,z+30,z+30,z+30,z+30,z+30,z+30,z+31,z+37,z+38,z+18,z+19,z+28,z+28,z+28,z+28,z+28,z+29,z+29,z+29,z+29,z+29,z+29,z+29,z+29,z+30,z+30,z+30,z+30,z+30,z+38,z+39,z+17,z+18,z+28,z+28,z+28,z+28,z+28,z+29,z+29,z+29,z+29,z+29,z+29,z+29,z+30,z+30,z+30,z+30,z+30,z+39,z+40,z+16,z+17,z+28,z+28,z+28,z+29,z+29,z+29,z+29,z+29,z+29,z+30,z+30,z+30,z+40,z+41,z+15,z+16,z+28,z+28,z+28,z+29,z+29,z+29,z+29,z+29,z+30,z+30,z+30,z+41,z+42,z+14,z+15,z+28,z+28,z+28,z+29,z+29,z+29,z+29,z+29,z+30,z+30,z+30,z+42,z+43,z+13,z+14,z+28,z+28,z+29,z+29,z+29,z+29,z+29,z+29,z+30,z+30,z+43,z+44,z+13,z+28,z+28,z+29,z+29,z+29,z+29,z+29,z+29,z+30,z+30,z+44,z+45,z+28,z+29,z+29,z+29,z+29,z+30,z+28,z+29,z+29,z+29,z+29,z+29,z+30,z+28,z+29,z+29,z+29,z+29,z+29,z+29,z+30,z+28,z+29,z+29,z+29,z+29,z+29,z+30,z+28,z+29,z+29,z+29,z+29,z+30,z+29,z+29,z+29,z+29,z+29,z+29,z+29,z+26,z+29,z+29,z+26,z+26,z+29,z+29,z+26,z+26,z+29,z+29,z+29,z+29,z+26,z+26,z+29,z+29,z+29,z+29,z+29,z+29,z+26,z+26,z+29,z+29,z+29,z+29,z+29,z+29,z+29,z+26,z+26,z+26,z+27,z+28,z+29,z+29,z+29,z+29,z+29,z+26,z+26,z+26,z+26,z+26,z+29,z+29,z+29,z+26,z+26,z+26,z+29,z+29,z+26,z+26,z+26,z+26,z+26,z+-1,z+0,z+0,z+0];
 var I=[0,0,44,44,44,44,44,42,44,44,44,44,42,42,20,42,68,102,20,42,42,20,44,44,44,44,42,42,20,20,35,42,35,20,20,42,42,20,20,44,44,44,44,42,20,20,42,42,20,20,42,42,20,42,42,20,20,42,20,20,44,44,44,44,42,42,42,42,42,42,20,44,42,114,20,42,42,20,42,42,42,42,44,44,44,44,65,65,65,35,42,42,42,71,71,42,42,42,42,35,20,42,42,42,20,42,42,42,20,42,42,20,20,42,44,44,44,44,42,42,42,42,20,42,42,42,20,42,42,20,42,42,42,20,42,42,42,42,20,44,44,44,44,42,42,42,20,20,42,42,42,42,20,101,35,42,20,42,42,20,101,42,42,42,20,20,44,44,44,44,42,42,42,20,20,42,42,42,42,35,102,20,42,35,42,42,35,102,20,42,42,67,20,42,42,42,42,20,20,44,44,44,44,42,42,42,42,42,42,42,35,42,35,68,42,42,35,42,42,42,42,42,42,42,42,42,42,42,42,44,44,44,44,65,65,65,35,42,42,42,71,71,42,42,42,42,42,35,42,44,42,35,114,89,44,42,42,42,35,42,44,42,42,42,42,42,42,44,44,44,42,42,42,44,42,42,42,42,42,42,42,42,42,42,42,42,42,42,44,42,35,42,42,71,71,42,44,42,42,42,42,42,42,42,42,44,42,42,42,42,42,42,42,42,42,44,44,42,42,42,42,42,44,42,42,44,85,42,44,42,42,42,42,35,42,42,42,35,42,42,44,42,42,42,42,42,101,101,42,42,42,42,35,85,42,42,42,42,71,71,42,42,44,65,65,65,35,44,42,42,20,42,42,42,42,85,42,44,42,42,42,101,101,89,42,44,42,35,42,101,101,89,42,42,42,42,101,101,89,42,42,42,85,42,44,42,42,20,42,42,101,44,101,42,42,42,42,42,42,42,85,85,42,101,42,42,42,42,42,101,44,42,35,42,42,42,85,44,42,42,42,42,42,101,44,42,42,85,85,42,44,101,44,42,42,42,42,42,44,42,42,42,20,42,42,42,42,114,85,42,101,101,42,42,42,42,42,85,44,42,35,42,42,42,35,101,43,42,42,42,42,42,85,44,42,42,114,85,42,101,101,42,42,20,42,42,42,42,35,42,44,46,42,42,42,35,42,44,46,43,42,44,44,42,42,42,42,42,42,42,114,85,42,101,44,42,42,42,89,42,44,42,35,42,89,42,85,44,42,42,42,89,42,44,42,42,114,85,42,101,42,42,42,42,42,44,42,44,42,44,46,43,42,42,35,42,42,44,46,42,42,35,42,35,42,46,42,101,42,35,43,44,42,35,44,42,46,42,101,43,42,35,44,44,42,42,20,42,42,44,42,42,114,85,42,44,35,42,42,42,42,42,35,42,42,42,44,35,42,42,42,42,44,42,42,114,85,42,44,42,42,20,42,42,44,42,35,44,42,46,42,101,43,42,35,44,44,42,35,43,42,46,42,101,42,35,35,35,42,35,44,42,46,101,44,42,35,43,44,42,35,44,42,46,101,43,42,35,44,44,44,42,42,42,42,42,44,42,42,114,85,42,35,42,42,42,42,42,35,42,42,42,44,35,42,42,42,42,42,42,114,85,42,44,42,42,42,42,42,44,44,42,35,44,42,46,101,43,42,35,44,44,42,35,43,42,46,101,44,42,35,44,35,35,42,35,42,35,43,42,35,44,42,46,42,101,44,42,35,43,44,42,35,44,42,46,42,101,43,42,35,44,44,44,44,42,42,20,42,42,42,42,114,85,42,42,42,42,89,42,42,35,42,89,42,44,42,42,42,89,42,42,42,114,85,42,42,42,20,42,42,44,44,44,42,35,44,42,46,42,101,43,42,35,44,44,42,35,43,42,46,42,101,44,42,35,44,43,42,35,42,35,42,35,42,101,44,43,42,35,44,42,46,101,44,42,35,43,44,42,35,44,42,46,101,43,44,42,35,44,44,44,42,42,42,42,42,54,68,85,42,42,42,42,42,42,42,35,42,42,42,44,42,42,42,42,42,42,54,68,85,42,42,42,42,42,44,44,42,35,44,44,42,46,101,43,42,35,44,44,42,35,43,42,46,101,44,42,35,44,43,42,101,44,42,35,42,35,42,43,35,43,43,35,42,35,43,35,42,9,42,35,43,35,42,35,43,43,35,43,35,42,35,43,35,44,42,9,42,35,43,43,35,44,42,35,43,35,43,35,42,42,35,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,35,42,42,42,42,42,42,42,44,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,35,43,35,42,35,43,35,44,42,9,42,35,43,43,35,44,42,35,43,35,43,35,42,35,43,43,35,42,9,42,35,43,35,42,35,43,35,43,43,35,42,43,35,42,35,42,35,42,42,35,101,101,101,42,35,101,42,42,35,101,101,101,44,101,101,42,35,44,101,42,42,35,101,42,42,35,42,42,42,42,35,42,42,42,42,35,42,42,42,42,42,35,42,35,42,42,44,42,42,42,35,42,42,42,42,42,42,42,42,35,42,42,42,35,101,101,42,42,35,44,101,101,42,35,44,101,101,101,101,42,42,35,101,101,42,35,101,42,42,35,42,35,44,44,42,42,42,42,42,35,42,42,42,35,42,35,42,44,42,42,35,42,35,42,42,44,42,42,35,42,35,42,44,42,42,42,35,42,42,42,44,44,44,44,42,42,42,42,42,42,42,44,42,42,42,42,42,42,42,44,44,42,42,42,42,42,42,44,42,44,44,44,44,42,42,42,42,44,42,42,42,42,42,42,42,44,42,42,42,42,44,44,44,44,44,42,42,42,42,44,42,42,42,42,42,44,44,42,42,42,42,44,44,44,44,44,42,42,42,42,42,42,42,42,44,42,42,42,44,44,44,44,42,42,42,42,42,42,42,44,42,42,42,44,44,44,44,42,42,42,42,42,42,42,44,42,42,42,44,44,44,44,42,42,101,42,42,42,42,44,42,42,44,44,44,42,42,101,42,42,42,42,44,42,42,44,44,42,42,42,42,44,42,42,42,42,42,101,44,42,42,42,42,42,101,101,44,42,42,42,42,42,101,44,42,42,42,42,42,44,42,42,42,42,44,42,42,42,101,42,42,101,101,42,42,101,101,101,42,42,42,101,101,101,101,42,42,42,42,101,101,101,101,101,42,42,42,42,42,101,101,44,44,101,42,42,42,42,101,101,101,101,101,42,42,42,101,101,101,42,42,101,101,101,101,101,0,57,57,0];
 var D=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,4,0,0,0,1,9,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,4,0,0,0,1,9,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,3,11,0,0,0,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,15,0,0,0,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,0,0,0,15,4,4,0,15,0,0,0,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,15,0,0,0,0,0,0,0,0,0,0,15,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,0,0,0,15,0,4,4,0,0,0,0,0,0,15,0,0,0,0,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  for(n=0;n<39270+1;n++){
   setTile(X[n], Y[n], Z[n], I[n], D[n]);
  }
}

function Helicopter17(x,y,z){
 var X=[x,x+-18,x+-17,x+-16,x+-15,x+-14,x+-14,x+-13,x+-13,x+-13,x+-12,x+-12,x+-12,x+-12,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-4,x+-4,x+-4,x+-4,x+-3,x+-3,x+-3,x+-2,x+-2,x+-1,x+0,x+0,x+0,x+0,x+1,x+1];
 var Y=[y,y+8,y+7,y+7,y+7,y+7,y+7,y+7,y+7,y+7,y+7,y+0,y+1,y+7,y+-1,y+-1,y+7,y+-1,y+0,y+1,y+-1,y+-1,y+-1,y+-1,y+7,y+7,y+1,y+0,y+1,y+4,y+-1,y+0,y+1,y+2,y+4,y+0,y+3,y+4,y+0,y+3,y+4,y+7,y+0,y+3,y+0,y+3,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+7,y+-1,y+0,y+1,y+2,y+3,y+0,y+1,y+2,y+0,y+1,y+2,y+0,y+1,y+1,y+0,y+1,y+0,y+1,y+2,y+0,y+1,y+2,y+3,y+5,y+0,y+1,y+2,y+3,y+5,y+0,y+3,y+4,y+5,y+0,y+3,y+4,y+5,y+7,y+0,y+3,y+4,y+5,y+0,y+3,y+4,y+5,y+7,y+0,y+1,y+2,y+3,y+4,y+7,y+-1,y+0,y+1,y+3,y+-1,y+0,y+3,y+-1,y+0,y+1,y+3,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+3,y+2,y+3,y+1,y+2,y+3,y+0,y+1,y+2,y+0,y+1,y+0,y+1,y+0,y+1,y+0,y+1,y+0,y+1,y+2,y+0,y+1,y+2,y+0,y+1,y+2,y+0,y+1,y+2,y+3,y+0,y+1,y+2,y+3,y+4,y+0,y+1,y+2,y+3,y+4,y+0,y+1,y+2,y+3,y+4,y+5,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+0,y+3,y+4,y+5,y+6,y+7,y+0,y+3,y+4,y+5,y+0,y+3,y+4,y+5,y+-1,y+0,y+3,y+4,y+-1,y+0,y+3,y+-1,y+0,y+1,y+3,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+0,y+1,y+4,y+3,y+2,y+1,y+1,y+0,y+1,y+0,y+1,y+2,y+0,y+1,y+2,y+3,y+5,y+0,y+1,y+2,y+3,y+5,y+0,y+3,y+4,y+5,y+7,y+0,y+3,y+4,y+5,y+7,y+0,y+3,y+4,y+5,y+0,y+3,y+4,y+5,y+7,y+0,y+1,y+2,y+3,y+4,y+-1,y+0,y+1,y+3,y+-1,y+0,y+3,y+-1,y+0,y+1,y+3,y+-1,y+0,y+1,y+2,y+0,y+1,y+2,y+0,y+1,y+0,y+1,y+4,y+-1,y+0,y+1,y+2,y+4,y+7,y+0,y+3,y+4,y+0,y+3,y+4,y+0,y+3,y+0,y+3,y+7,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+0,y+1,y+2,y+0,y+1,y+2,y+0,y+7,y+7,y+-1,y+-1,y+-1,y+0,y+1,y+-1,y+-1,y+-1,y+7,y+-1,y+7,y+0,y+1,y+7,y+7,y+7,y+7,y+7,y+7,y+7,y+7,y+-2,y+-1,y+0,y+7,y+-2];
 var Z=[z,z+-25,z+-15,z+-14,z+-14,z+-13,z+0,z+-12,z+-2,z+-1,z+-12,z+-10,z+-10,z+-3,z+-12,z+-11,z+-11,z+-10,z+-10,z+-10,z+-9,z+-8,z+-7,z+-6,z+-5,z+-4,z+-22,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-8,z+-8,z+-7,z+-7,z+-7,z+-7,z+-6,z+-6,z+-6,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-3,z+-3,z+-3,z+-2,z+-22,z+-16,z+-15,z+-15,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-9,z+-8,z+-8,z+-8,z+-8,z+-8,z+-7,z+-7,z+-7,z+-7,z+-7,z+-7,z+-6,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-4,z+-3,z+-3,z+-3,z+-3,z+-2,z+-2,z+-2,z+-2,z+-1,z+-1,z+-25,z+-24,z+-24,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-21,z+-21,z+-20,z+-20,z+-19,z+-19,z+-18,z+-18,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-9,z+-9,z+-9,z+-8,z+-8,z+-8,z+-8,z+-7,z+-7,z+-7,z+-7,z+-6,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-4,z+-3,z+-3,z+-3,z+-3,z+-2,z+-2,z+-2,z+-2,z+-1,z+-1,z+-25,z+-24,z+-23,z+-22,z+-16,z+-15,z+-15,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-9,z+-8,z+-8,z+-8,z+-8,z+-8,z+-7,z+-7,z+-7,z+-7,z+-7,z+-6,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-4,z+-3,z+-3,z+-3,z+-3,z+-2,z+-2,z+-2,z+-1,z+-22,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-9,z+-9,z+-8,z+-8,z+-8,z+-7,z+-7,z+-7,z+-7,z+-6,z+-6,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-3,z+-3,z+-3,z+-2,z+-14,z+-13,z+-12,z+-11,z+-10,z+-10,z+-10,z+-9,z+-8,z+-7,z+-7,z+-6,z+-15,z+-10,z+-10,z+-6,z+-17,z+-16,z+-6,z+-18,z+-5,z+-4,z+-4,z+0,z+0,z+0,z+-3,z+0];
 var I=[0,0,44,44,44,44,44,44,44,44,44,44,35,44,109,44,44,44,43,35,44,44,44,109,44,44,44,35,35,49,44,35,35,35,35,35,44,35,35,44,35,44,35,44,35,44,35,35,35,44,44,35,35,35,44,44,44,35,35,35,44,35,35,20,35,35,102,102,44,35,35,35,35,35,35,35,35,35,109,44,35,1,1,35,44,35,35,44,44,35,35,49,35,44,35,35,35,35,35,35,35,44,44,35,35,35,43,35,44,44,43,114,43,44,43,44,44,44,35,44,44,44,35,20,35,20,35,102,35,35,35,109,35,109,35,109,44,35,109,44,35,44,35,44,35,44,35,35,35,109,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,1,1,35,35,35,35,1,1,35,35,35,35,35,35,35,101,101,44,35,35,35,35,35,35,35,44,44,43,43,109,44,44,43,44,44,35,44,44,44,35,20,44,35,35,102,35,35,35,49,35,44,35,35,35,35,35,35,35,35,35,109,44,35,1,1,35,44,35,35,44,44,44,35,35,49,35,44,35,35,35,35,35,35,35,44,44,35,35,35,43,35,44,43,114,43,44,43,44,44,44,35,44,44,44,35,20,20,35,102,35,44,35,35,49,44,35,35,35,35,44,35,44,35,35,44,35,35,44,35,44,44,35,35,35,44,44,35,35,35,44,44,35,35,35,44,35,35,20,35,35,102,102,44,44,109,44,44,43,35,44,44,44,44,109,44,44,35,44,44,44,44,44,44,44,44,57,57,0,44,0];
 var D=[0,0,5,5,5,5,5,5,5,5,5,13,4,5,0,5,5,5,5,5,5,5,5,0,5,5,5,8,8,0,13,8,8,8,8,8,5,8,8,5,8,5,8,5,8,5,8,8,8,5,13,8,8,8,5,5,13,8,8,8,5,8,8,0,8,8,0,0,5,8,8,8,8,8,8,8,13,8,6,5,8,0,0,8,5,8,8,5,5,8,8,0,8,5,8,8,8,8,8,8,8,5,5,8,8,8,5,8,5,13,5,3,5,13,5,5,13,5,4,5,13,5,15,0,8,0,8,0,3,8,8,6,8,6,8,3,13,8,3,13,8,13,8,13,8,13,8,8,8,2,8,8,8,8,13,8,8,13,8,8,8,13,8,8,8,8,13,13,8,8,8,0,0,8,8,8,8,0,0,8,8,8,5,8,8,8,0,0,5,8,8,8,8,8,8,8,5,13,5,5,3,13,5,5,13,5,4,5,13,5,15,0,13,8,8,0,8,8,15,0,15,5,8,8,8,8,8,8,8,13,8,6,5,8,0,0,8,5,8,8,5,5,5,8,8,0,8,5,8,8,8,8,8,8,8,5,5,8,8,8,5,8,13,5,3,5,13,5,5,13,5,4,5,13,5,15,0,0,8,0,8,5,8,8,0,13,8,8,8,8,5,8,5,8,8,5,8,8,5,8,5,5,8,8,8,5,13,8,8,8,5,13,8,8,8,5,8,8,0,8,8,0,0,5,5,1,5,5,5,5,5,5,5,5,1,5,13,5,5,5,5,5,5,5,5,5,0,0,0,5,0];
  for(n=0;n<5720+1;n++){
   setTile(X[n], Y[n], Z[n], I[n], D[n]);
  }
}

function Helicopter18(x,y,z){
 var X=[x,x+-34,x+-33,x+-32,x+-31,x+-30,x+-29,x+-29,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-2,x+-2,x+-2,x+-2,x+-1,x+-1,x+0,x+0,x+0,x+0];
 var Y=[y,y+12,y+0,y+0,y+0,y+0,y+0,y+0,y+0,y+0,y+-1,y+0,y+1,y+0,y+0,y+2,y+0,y+1,y+2,y+-1,y+1,y+2,y+0,y+1,y+2,y+2,y+0,y+1,y+2,y+-1,y+3,y+-1,y+3,y+-1,y+3,y+0,y+1,y+2,y+0,y+1,y+2,y+-1,y+0,y+3,y+-1,y+0,y+3,y+-1,y+0,y+3,y+0,y+1,y+2,y+0,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+3,y+-1,y+0,y+1,y+3,y+-1,y+0,y+1,y+2,y+3,y+0,y+0,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+0,y+1,y+2,y+0,y+5,y+0,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+2,y+3,y+-1,y+0,y+1,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+0,y+5,y+0,y+8,y+9,y+0,y+1,y+7,y+8,y+1,y+2,y+6,y+7,y+2,y+3,y+5,y+6,y+3,y+4,y+5,y+5,y+6,y+6,y+7,y+7,y+8,y+8,y+9,y+9,y+10,y+0,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+4,y+-1,y+0,y+1,y+4,y+-1,y+0,y+1,y+4,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+0,y+10,y+0,y+9,y+10,y+0,y+1,y+8,y+9,y+1,y+2,y+7,y+8,y+2,y+3,y+6,y+7,y+3,y+4,y+5,y+6,y+6,y+7,y+7,y+8,y+8,y+9,y+9,y+10,y+5,y+4,y+5,y+6,y+5,y+0,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+3,y+4,y+-1,y+0,y+1,y+2,y+5,y+-1,y+0,y+1,y+5,y+-1,y+0,y+1,y+2,y+5,y+-1,y+0,y+1,y+2,y+3,y+4,y+-1,y+0,y+1,y+2,y+0,y+5,y+4,y+5,y+6,y+5,y+4,y+5,y+3,y+6,y+4,y+5,y+6,y+5,y+6,y+5,y+6,y+5,y+5,y+5,y+5,y+0,y+5,y+-2,y+-1,y+0,y+1,y+2,y+4,y+5,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-1,y+0,y+1,y+5,y+-1,y+0,y+1,y+5,y+-1,y+0,y+1,y+5,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+-1,y+0,y+1,y+2,y+4,y+5,y+0,y+5,y+5,y+5,y+5,y+5,y+5,y+5,y+6,y+5,y+6,y+4,y+6,y+3,y+6,y+4,y+5,y+4,y+5,y+3,y+6,y+4,y+5,y+6,y+5,y+6,y+5,y+5,y+5,y+5,y+5,y+0,y+4,y+5,y+-1,y+0,y+1,y+2,y+4,y+5,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-1,y+0,y+1,y+3,y+5,y+-1,y+0,y+5,y+-1,y+0,y+1,y+3,y+5,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-1,y+0,y+1,y+2,y+4,y+5,y+0,y+4,y+5,y+5,y+5,y+5,y+5,y+5,y+5,y+5,y+6,y+4,y+6,y+3,y+6,y+4,y+5,y+4,y+5,y+3,y+6,y+4,y+5,y+6,y+5,y+6,y+0,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+3,y+4,y+-1,y+0,y+3,y+4,y+-1,y+0,y+1,y+3,y+4,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+0,y+5,y+6,y+4,y+6,y+3,y+6,y+4,y+5,y+4,y+5,y+3,y+6,y+4,y+5,y+0,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+4,y+-1,y+0,y+3,y+4,y+-1,y+0,y+1,y+2,y+3,y+4,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+0,y+4,y+5,y+3,y+6,y+4,y+5,y+4,y+5,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+3,y+-1,y+0,y+3,y+-1,y+0,y+1,y+3,y+-1,y+0,y+1,y+2,y+0,y+1,y+2,y+0,y+4,y+5,y+0,y+1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+3,y+-1,y+0,y+1,y+2,y+3,y+0,y+1,y+2,y+0,y+1,y+1,y+0,y+1,y+2,y+-1,y+0,y+1,y+3,y+-1,y+0,y+3,y+-1,y+0,y+1,y+3,y+0,y+1,y+2,y+1,y+1,y+1,y+2,y+0,y+1,y+2,y+3,y+-1,y+0,y+3,y+0,y+1,y+2,y+3,y+1,y+2,y+1,y+1,y+2,y+0,y+1,y+3,y+0,y+3,y+0,y+1,y+3,y+1,y+2,y+1,y+2,y+0,y+3,y+0,y+3,y+0,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+0,y+3,y+0,y+3,y+0,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+4,y+4,y+4,y+4,y+1,y+2,y+3,y+4,y+4,y+4,y+0,y+1,y+2,y+3,y+4,y+4,y+4,y+4,y+0,y+1,y+2,y+3,y+4,y+4,y+4,y+4,y+5,y+4,y+1,y+2,y+3,y+4,y+3,y+4,y+3,y+4,y+3,y+4,y+1,y+2,y+3,y+4,y+4,y+4,y+5,y+4,y+5,y+6,y+4,y+3,y+4,y+4,y+4,y+4,y+3,y+4,y+4,y+4,y+5,y+6,y+4,y+5,y+6,y+7,y+4,y+5,y+6,y+7,y+6,y+7,y+8,y+6,y+7,y+8,y+7,y+8,y+7,y+8,y+8,y+8,y+-2,y+-2,y+-1,y+0];
 var Z=[z,z+33,z+13,z+13,z+13,z+13,z+13,z+15,z+13,z+14,z+15,z+15,z+15,z+16,z+13,z+13,z+14,z+14,z+14,z+15,z+15,z+15,z+16,z+16,z+16,z+17,z+13,z+13,z+13,z+14,z+14,z+15,z+15,z+16,z+16,z+17,z+17,z+17,z+13,z+13,z+13,z+14,z+14,z+14,z+15,z+15,z+15,z+16,z+16,z+16,z+17,z+17,z+17,z+12,z+13,z+13,z+13,z+13,z+13,z+14,z+14,z+14,z+14,z+14,z+15,z+15,z+15,z+16,z+16,z+16,z+16,z+17,z+17,z+17,z+17,z+17,z+18,z+11,z+12,z+12,z+12,z+13,z+13,z+13,z+13,z+13,z+14,z+14,z+14,z+14,z+14,z+15,z+15,z+15,z+15,z+15,z+16,z+16,z+16,z+16,z+16,z+17,z+17,z+17,z+17,z+17,z+18,z+18,z+18,z+19,z+3,z+11,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+13,z+13,z+14,z+14,z+14,z+14,z+15,z+15,z+15,z+15,z+16,z+16,z+16,z+16,z+16,z+17,z+17,z+17,z+17,z+17,z+18,z+18,z+18,z+18,z+19,z+28,z+-1,z+-1,z+-1,z+0,z+0,z+0,z+0,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+4,z+4,z+5,z+5,z+6,z+6,z+7,z+7,z+8,z+8,z+11,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+13,z+13,z+14,z+14,z+14,z+14,z+15,z+15,z+15,z+15,z+16,z+16,z+16,z+16,z+17,z+17,z+17,z+17,z+17,z+18,z+18,z+18,z+18,z+19,z+23,z+24,z+24,z+24,z+25,z+25,z+25,z+25,z+26,z+26,z+26,z+26,z+27,z+27,z+27,z+27,z+28,z+28,z+28,z+29,z+30,z+30,z+31,z+31,z+32,z+32,z+33,z+33,z+2,z+3,z+3,z+3,z+4,z+11,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+13,z+13,z+13,z+14,z+14,z+14,z+14,z+14,z+15,z+15,z+15,z+15,z+16,z+16,z+16,z+16,z+16,z+17,z+17,z+17,z+17,z+17,z+17,z+18,z+18,z+18,z+18,z+19,z+27,z+28,z+28,z+28,z+29,z+2,z+2,z+3,z+3,z+4,z+4,z+4,z+5,z+5,z+6,z+6,z+7,z+8,z+9,z+10,z+11,z+11,z+12,z+12,z+12,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+13,z+13,z+13,z+13,z+14,z+14,z+14,z+14,z+15,z+15,z+15,z+15,z+16,z+16,z+16,z+16,z+17,z+17,z+17,z+17,z+17,z+17,z+17,z+18,z+18,z+18,z+18,z+18,z+18,z+18,z+19,z+19,z+20,z+21,z+22,z+23,z+24,z+25,z+25,z+26,z+26,z+27,z+27,z+28,z+28,z+29,z+29,z+2,z+2,z+3,z+3,z+4,z+4,z+4,z+5,z+5,z+6,z+7,z+8,z+9,z+10,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+13,z+13,z+13,z+13,z+14,z+14,z+14,z+14,z+14,z+15,z+15,z+15,z+16,z+16,z+16,z+16,z+16,z+17,z+17,z+17,z+17,z+17,z+17,z+17,z+18,z+18,z+18,z+18,z+18,z+18,z+19,z+19,z+19,z+20,z+21,z+22,z+23,z+24,z+25,z+26,z+26,z+27,z+27,z+28,z+28,z+29,z+29,z+2,z+2,z+3,z+3,z+4,z+4,z+4,z+5,z+5,z+11,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+13,z+13,z+14,z+14,z+14,z+14,z+14,z+15,z+15,z+15,z+15,z+16,z+16,z+16,z+16,z+16,z+17,z+17,z+17,z+17,z+17,z+18,z+18,z+18,z+18,z+19,z+26,z+26,z+27,z+27,z+28,z+28,z+29,z+29,z+2,z+2,z+3,z+3,z+4,z+4,z+11,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+13,z+13,z+14,z+14,z+14,z+14,z+14,z+14,z+15,z+15,z+15,z+15,z+16,z+16,z+16,z+16,z+16,z+16,z+17,z+17,z+17,z+17,z+17,z+18,z+18,z+18,z+18,z+19,z+27,z+27,z+28,z+28,z+29,z+29,z+3,z+3,z+12,z+12,z+12,z+13,z+13,z+13,z+13,z+14,z+14,z+14,z+14,z+15,z+15,z+15,z+16,z+16,z+16,z+16,z+17,z+17,z+17,z+17,z+18,z+18,z+18,z+19,z+28,z+28,z+12,z+12,z+13,z+13,z+13,z+14,z+14,z+14,z+14,z+14,z+15,z+15,z+15,z+16,z+16,z+16,z+16,z+16,z+17,z+17,z+17,z+18,z+18,z+12,z+13,z+13,z+13,z+14,z+14,z+14,z+14,z+15,z+15,z+15,z+16,z+16,z+16,z+16,z+17,z+17,z+17,z+18,z+12,z+13,z+13,z+14,z+14,z+14,z+14,z+15,z+15,z+15,z+16,z+16,z+16,z+16,z+17,z+17,z+18,z+13,z+13,z+14,z+14,z+14,z+15,z+15,z+16,z+16,z+16,z+17,z+17,z+13,z+13,z+14,z+14,z+15,z+15,z+16,z+16,z+16,z+17,z+17,z+17,z+13,z+13,z+13,z+14,z+14,z+15,z+15,z+16,z+16,z+17,z+17,z+17,z+13,z+13,z+13,z+13,z+14,z+15,z+16,z+17,z+17,z+17,z+17,z+11,z+12,z+13,z+13,z+13,z+13,z+13,z+14,z+15,z+16,z+17,z+17,z+17,z+17,z+17,z+18,z+19,z+11,z+11,z+12,z+13,z+13,z+13,z+13,z+14,z+14,z+15,z+15,z+16,z+16,z+17,z+17,z+17,z+17,z+18,z+19,z+19,z+11,z+11,z+11,z+12,z+13,z+13,z+14,z+15,z+16,z+17,z+17,z+18,z+19,z+19,z+19,z+11,z+11,z+11,z+11,z+19,z+19,z+19,z+19,z+11,z+11,z+11,z+19,z+19,z+19,z+11,z+11,z+19,z+19,z+11,z+19,z+-1,z+0,z+0,z+0];
 var I=[0,0,44,44,44,44,44,43,44,43,43,35,44,43,43,102,35,35,102,35,35,102,35,35,102,102,35,35,102,35,44,35,44,35,44,35,35,102,35,35,102,35,35,44,35,35,44,35,35,44,35,35,102,35,35,35,35,35,44,35,35,114,35,44,35,35,44,35,35,114,44,35,35,35,35,44,35,35,35,35,44,35,35,35,35,44,35,35,35,35,44,35,35,71,71,44,35,35,35,35,44,35,35,35,35,44,35,35,44,35,49,35,35,35,35,43,35,35,35,35,44,35,35,35,109,35,35,35,109,35,35,35,35,109,35,35,35,35,44,35,35,35,43,35,49,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,43,35,35,35,35,43,35,35,67,109,35,35,35,109,35,35,67,109,35,35,35,35,43,35,35,35,43,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,1,1,35,44,1,35,35,35,35,43,35,35,35,35,43,43,35,35,67,35,44,35,35,35,44,35,35,67,35,44,35,35,35,35,43,43,35,35,35,43,35,1,1,35,44,1,1,1,1,44,1,1,44,43,44,43,44,43,43,43,43,35,43,35,35,35,35,43,43,43,35,35,35,35,43,43,43,35,35,35,43,35,35,35,43,35,35,35,43,35,35,35,35,43,43,43,35,35,35,35,43,43,43,35,43,43,43,43,43,43,43,44,1,44,1,44,1,44,1,1,1,1,1,44,1,1,44,43,44,43,43,43,43,43,35,43,43,35,35,35,43,43,43,35,35,35,35,43,43,43,35,35,67,35,43,35,35,43,35,35,67,35,43,35,35,35,35,43,43,43,35,35,35,43,43,43,35,43,43,43,43,43,43,43,43,1,44,1,44,1,44,1,1,1,1,1,44,1,1,44,1,44,35,35,35,35,43,35,35,35,35,43,35,35,67,43,43,35,35,43,43,35,35,67,43,43,35,35,35,35,43,35,35,35,43,35,1,44,1,44,1,44,1,1,1,1,1,44,1,1,35,35,35,35,44,35,35,35,35,44,35,35,67,35,43,44,35,35,43,44,35,35,67,35,43,44,35,35,35,35,44,35,35,35,44,35,1,1,1,44,1,1,1,1,35,35,44,35,35,35,35,35,35,67,43,35,35,43,35,35,67,43,35,35,35,35,35,35,44,35,1,1,35,35,35,35,35,35,35,67,35,44,35,35,44,35,35,67,35,44,35,35,35,35,35,35,35,35,35,35,35,67,44,35,35,44,35,35,67,44,35,35,35,35,35,35,35,35,67,35,44,35,35,44,35,67,35,44,35,35,35,35,35,35,67,44,35,44,35,67,44,35,35,35,35,35,44,35,44,35,35,44,35,35,44,35,35,43,35,109,35,109,35,109,35,35,43,35,35,43,44,44,44,44,35,35,43,44,43,44,43,43,35,43,44,44,44,44,43,43,35,43,44,44,43,43,43,44,43,43,43,44,43,44,43,44,43,44,43,43,43,44,44,43,43,43,43,43,44,43,44,44,44,44,43,44,44,43,43,43,43,43,43,44,43,43,43,44,43,43,44,43,43,44,43,44,43,44,44,44,0,57,57,0];
 var D=[0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,8,8,0,8,8,0,8,8,0,0,8,8,0,8,0,8,0,8,0,8,8,0,8,8,0,8,8,0,15,0,0,8,8,0,8,8,0,8,8,8,8,8,0,8,8,0,2,0,8,8,0,8,8,0,0,8,8,8,8,0,8,8,8,8,0,8,8,8,8,0,8,8,7,7,0,8,8,2,10,0,8,8,7,7,0,8,8,8,8,0,8,8,0,8,0,8,8,8,8,0,8,8,8,8,0,8,8,1,0,8,8,14,0,8,8,15,12,0,8,8,8,8,0,8,8,8,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,8,8,8,0,8,8,8,8,0,8,8,3,0,8,8,13,0,8,8,2,0,8,8,8,8,0,8,8,8,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,5,0,8,8,8,8,0,8,8,8,8,0,0,8,8,3,3,0,8,8,12,0,8,8,2,4,0,8,8,8,8,0,0,8,8,8,0,8,0,0,7,5,0,0,0,0,5,0,0,5,5,5,5,5,5,5,5,5,8,5,15,8,8,8,0,5,5,8,8,9,8,0,0,5,8,8,10,5,8,8,11,5,8,8,10,5,8,8,9,8,0,0,5,15,8,8,8,0,5,5,8,5,5,5,5,5,5,5,5,0,5,0,5,0,5,0,0,0,0,0,5,0,0,5,5,5,5,5,5,5,5,8,5,5,8,8,8,0,5,5,8,8,8,8,0,0,5,8,8,3,3,5,8,8,5,8,8,2,4,5,8,8,8,8,0,0,5,8,8,8,0,5,5,8,5,5,5,5,5,5,5,5,0,5,0,5,0,5,0,0,0,0,0,5,0,0,5,0,5,8,8,8,8,0,8,8,8,8,0,8,8,3,0,0,8,8,0,0,8,8,2,0,0,8,8,8,8,0,8,8,8,0,8,0,5,0,5,0,5,0,0,0,0,0,5,0,0,8,8,8,8,0,8,8,8,8,0,8,8,3,3,0,0,8,8,0,0,8,8,2,4,0,0,8,8,8,8,0,8,8,8,0,8,0,0,0,5,0,0,0,0,8,8,0,8,8,8,8,8,8,3,0,8,8,0,8,8,2,0,8,8,8,8,8,8,0,8,0,0,8,8,8,8,8,8,8,3,3,0,8,8,0,8,8,2,4,0,8,8,8,8,8,8,8,8,8,8,8,3,0,8,8,0,8,8,2,0,8,8,8,8,8,8,8,8,3,3,0,8,8,0,8,2,4,0,8,8,8,8,8,8,3,0,8,0,8,2,0,8,8,8,8,8,0,8,0,8,4,0,8,8,0,8,8,0,8,0,8,0,8,0,8,8,0,8,8,0,0,0,0,0,8,8,0,0,0,0,0,0,8,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  for(n=0;n<18375+1;n++){
   setTile(X[n], Y[n], Z[n], I[n], D[n]);
  }
}

function Helicopter19(x,y,z){
 var X=[x,x+-34,x+-33,x+-32,x+-31,x+-30,x+-29,x+-29,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+0,x+0,x+0,x+0];
 var Y=[y,y+13,y+0,y+0,y+0,y+0,y+0,y+0,y+0,y+0,y+-1,y+0,y+1,y+0,y+0,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+0,y+1,y+2,y+8,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+0,y+1,y+2,y+8,y+8,y+0,y+1,y+2,y+-1,y+0,y+1,y+3,y+-1,y+0,y+3,y+-1,y+0,y+1,y+3,y+0,y+1,y+2,y+8,y+8,y+0,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+3,y+-1,y+0,y+1,y+3,y+-1,y+0,y+1,y+2,y+3,y+0,y+8,y+8,y+0,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+0,y+1,y+2,y+0,y+8,y+8,y+0,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+2,y+3,y+-1,y+0,y+1,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+0,y+8,y+8,y+8,y+0,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+4,y+-1,y+0,y+1,y+4,y+-1,y+0,y+1,y+4,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+0,y+8,y+8,y+8,y+8,y+0,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+3,y+4,y+-1,y+0,y+1,y+2,y+5,y+-1,y+0,y+1,y+5,y+-1,y+0,y+1,y+2,y+5,y+-1,y+0,y+1,y+2,y+3,y+4,y+-1,y+0,y+1,y+2,y+0,y+8,y+8,y+3,y+4,y+5,y+6,y+8,y+5,y+6,y+5,y+6,y+5,y+6,y+5,y+5,y+5,y+5,y+0,y+5,y+-2,y+-1,y+0,y+1,y+2,y+4,y+5,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-1,y+0,y+1,y+5,y+-1,y+0,y+1,y+5,y+-1,y+0,y+1,y+5,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+-1,y+0,y+1,y+2,y+4,y+5,y+0,y+5,y+5,y+5,y+5,y+5,y+5,y+5,y+6,y+5,y+6,y+5,y+6,y+3,y+4,y+5,y+6,y+8,y+8,y+8,y+3,y+4,y+5,y+6,y+2,y+3,y+7,y+8,y+3,y+4,y+5,y+6,y+5,y+6,y+5,y+5,y+5,y+5,y+5,y+0,y+4,y+5,y+-1,y+0,y+1,y+2,y+4,y+5,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-1,y+0,y+1,y+3,y+5,y+-1,y+0,y+5,y+-1,y+0,y+1,y+3,y+5,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-1,y+0,y+1,y+2,y+4,y+5,y+0,y+4,y+5,y+5,y+5,y+5,y+5,y+5,y+5,y+5,y+6,y+3,y+4,y+5,y+6,y+2,y+7,y+8,y+3,y+4,y+5,y+6,y+8,y+8,y+3,y+4,y+5,y+6,y+7,y+8,y+2,y+3,y+7,y+8,y+9,y+3,y+4,y+5,y+6,y+7,y+5,y+6,y+0,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+3,y+4,y+-1,y+0,y+3,y+4,y+-1,y+0,y+1,y+3,y+4,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+0,y+5,y+6,y+3,y+4,y+5,y+6,y+7,y+2,y+3,y+4,y+5,y+6,y+7,y+8,y+9,y+3,y+4,y+5,y+6,y+7,y+8,y+8,y+8,y+4,y+5,y+6,y+4,y+5,y+6,y+7,y+4,y+5,y+6,y+8,y+0,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+4,y+-1,y+0,y+3,y+4,y+-1,y+0,y+1,y+2,y+3,y+4,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+0,y+4,y+5,y+6,y+8,y+4,y+5,y+6,y+7,y+4,y+5,y+6,y+8,y+8,y+8,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+3,y+-1,y+0,y+3,y+-1,y+0,y+1,y+3,y+-1,y+0,y+1,y+2,y+0,y+1,y+2,y+0,y+8,y+8,y+8,y+8,y+0,y+1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+3,y+-1,y+0,y+1,y+2,y+3,y+0,y+1,y+2,y+0,y+1,y+8,y+8,y+8,y+8,y+1,y+0,y+1,y+2,y+-1,y+0,y+1,y+3,y+-1,y+0,y+3,y+-1,y+0,y+1,y+3,y+0,y+1,y+2,y+1,y+8,y+8,y+1,y+0,y+1,y+2,y+0,y+1,y+2,y+3,y+-1,y+0,y+3,y+0,y+1,y+2,y+3,y+0,y+1,y+2,y+1,y+8,y+8,y+8,y+0,y+1,y+2,y+0,y+1,y+3,y+0,y+3,y+0,y+1,y+3,y+0,y+1,y+2,y+8,y+8,y+0,y+1,y+2,y+0,y+3,y+0,y+3,y+0,y+3,y+0,y+1,y+2,y+3,y+8,y+0,y+1,y+2,y+3,y+0,y+3,y+0,y+3,y+0,y+3,y+0,y+1,y+2,y+3,y+8,y+0,y+1,y+2,y+3,y+4,y+4,y+4,y+4,y+0,y+1,y+2,y+3,y+4,y+8,y+4,y+1,y+2,y+3,y+4,y+4,y+4,y+4,y+1,y+2,y+3,y+4,y+4,y+3,y+4,y+4,y+1,y+2,y+3,y+4,y+3,y+4,y+3,y+4,y+3,y+4,y+1,y+2,y+3,y+4,y+4,y+3,y+4,y+2,y+3,y+4,y+5,y+4,y+3,y+4,y+4,y+4,y+4,y+3,y+4,y+4,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+6,y+1,y+2,y+3,y+4,y+5,y+6,y+1,y+2,y+3,y+4,y+5,y+6,y+1,y+2,y+3,y+4,y+5,y+6,y+-2,y+-2,y+-1,y+0];
 var Z=[z,z+44,z+20,z+20,z+20,z+20,z+20,z+22,z+20,z+21,z+22,z+22,z+22,z+23,z+20,z+21,z+21,z+21,z+22,z+22,z+22,z+22,z+23,z+23,z+23,z+5,z+20,z+20,z+20,z+21,z+21,z+21,z+21,z+21,z+22,z+22,z+22,z+22,z+22,z+23,z+23,z+23,z+23,z+23,z+24,z+24,z+24,z+30,z+6,z+20,z+20,z+20,z+21,z+21,z+21,z+21,z+22,z+22,z+22,z+23,z+23,z+23,z+23,z+24,z+24,z+24,z+31,z+6,z+19,z+20,z+20,z+20,z+20,z+20,z+21,z+21,z+21,z+21,z+21,z+22,z+22,z+22,z+23,z+23,z+23,z+23,z+24,z+24,z+24,z+24,z+24,z+25,z+31,z+7,z+18,z+19,z+19,z+19,z+20,z+20,z+20,z+20,z+20,z+21,z+21,z+21,z+21,z+21,z+22,z+22,z+22,z+22,z+22,z+23,z+23,z+23,z+23,z+23,z+24,z+24,z+24,z+24,z+24,z+25,z+25,z+25,z+26,z+32,z+8,z+18,z+19,z+19,z+19,z+19,z+20,z+20,z+20,z+20,z+20,z+21,z+21,z+21,z+21,z+22,z+22,z+22,z+22,z+23,z+23,z+23,z+23,z+23,z+24,z+24,z+24,z+24,z+24,z+25,z+25,z+25,z+25,z+26,z+33,z+44,z+8,z+18,z+19,z+19,z+19,z+19,z+20,z+20,z+20,z+20,z+20,z+21,z+21,z+21,z+21,z+22,z+22,z+22,z+22,z+23,z+23,z+23,z+23,z+24,z+24,z+24,z+24,z+24,z+25,z+25,z+25,z+25,z+26,z+33,z+42,z+43,z+9,z+18,z+19,z+19,z+19,z+19,z+20,z+20,z+20,z+20,z+20,z+20,z+21,z+21,z+21,z+21,z+21,z+22,z+22,z+22,z+22,z+23,z+23,z+23,z+23,z+23,z+24,z+24,z+24,z+24,z+24,z+24,z+25,z+25,z+25,z+25,z+26,z+34,z+41,z+10,z+10,z+10,z+10,z+10,z+11,z+11,z+12,z+12,z+13,z+13,z+14,z+15,z+16,z+17,z+18,z+18,z+19,z+19,z+19,z+19,z+19,z+19,z+19,z+20,z+20,z+20,z+20,z+20,z+20,z+20,z+21,z+21,z+21,z+21,z+22,z+22,z+22,z+22,z+23,z+23,z+23,z+23,z+24,z+24,z+24,z+24,z+24,z+24,z+24,z+25,z+25,z+25,z+25,z+25,z+25,z+25,z+26,z+26,z+27,z+28,z+29,z+30,z+31,z+32,z+32,z+33,z+33,z+34,z+34,z+35,z+35,z+35,z+35,z+35,z+39,z+40,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+12,z+12,z+13,z+14,z+15,z+16,z+17,z+18,z+18,z+18,z+19,z+19,z+19,z+19,z+19,z+19,z+20,z+20,z+20,z+20,z+20,z+20,z+20,z+21,z+21,z+21,z+21,z+21,z+22,z+22,z+22,z+23,z+23,z+23,z+23,z+23,z+24,z+24,z+24,z+24,z+24,z+24,z+24,z+25,z+25,z+25,z+25,z+25,z+25,z+26,z+26,z+26,z+27,z+28,z+29,z+30,z+31,z+32,z+33,z+33,z+34,z+34,z+34,z+34,z+35,z+35,z+35,z+36,z+36,z+36,z+36,z+38,z+8,z+9,z+9,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+11,z+12,z+12,z+18,z+19,z+19,z+19,z+19,z+20,z+20,z+20,z+20,z+20,z+21,z+21,z+21,z+21,z+21,z+22,z+22,z+22,z+22,z+23,z+23,z+23,z+23,z+23,z+24,z+24,z+24,z+24,z+24,z+25,z+25,z+25,z+25,z+26,z+33,z+33,z+34,z+34,z+34,z+34,z+34,z+35,z+35,z+35,z+35,z+35,z+35,z+35,z+35,z+36,z+36,z+36,z+36,z+36,z+36,z+37,z+7,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+18,z+19,z+19,z+19,z+19,z+20,z+20,z+20,z+20,z+20,z+21,z+21,z+21,z+21,z+21,z+21,z+22,z+22,z+22,z+22,z+23,z+23,z+23,z+23,z+23,z+23,z+24,z+24,z+24,z+24,z+24,z+25,z+25,z+25,z+25,z+26,z+34,z+34,z+34,z+34,z+35,z+35,z+35,z+35,z+36,z+36,z+36,z+5,z+6,z+12,z+19,z+19,z+19,z+20,z+20,z+20,z+20,z+21,z+21,z+21,z+21,z+22,z+22,z+22,z+23,z+23,z+23,z+23,z+24,z+24,z+24,z+24,z+25,z+25,z+25,z+26,z+33,z+4,z+13,z+14,z+19,z+19,z+20,z+20,z+20,z+21,z+21,z+21,z+21,z+21,z+22,z+22,z+22,z+23,z+23,z+23,z+23,z+23,z+24,z+24,z+24,z+25,z+25,z+33,z+2,z+3,z+15,z+19,z+20,z+20,z+20,z+21,z+21,z+21,z+21,z+22,z+22,z+22,z+23,z+23,z+23,z+23,z+24,z+24,z+24,z+25,z+32,z+16,z+19,z+20,z+20,z+20,z+21,z+21,z+21,z+21,z+22,z+22,z+22,z+23,z+23,z+23,z+23,z+24,z+24,z+24,z+25,z+31,z+17,z+18,z+20,z+20,z+20,z+21,z+21,z+21,z+22,z+22,z+23,z+23,z+23,z+24,z+24,z+24,z+31,z+19,z+20,z+20,z+20,z+21,z+21,z+22,z+22,z+23,z+23,z+24,z+24,z+24,z+24,z+30,z+20,z+20,z+20,z+20,z+21,z+21,z+22,z+22,z+23,z+23,z+24,z+24,z+24,z+24,z+29,z+20,z+20,z+20,z+20,z+20,z+21,z+22,z+23,z+24,z+24,z+24,z+24,z+24,z+29,z+19,z+20,z+20,z+20,z+20,z+21,z+22,z+23,z+24,z+24,z+24,z+24,z+25,z+18,z+18,z+19,z+20,z+20,z+20,z+20,z+21,z+21,z+22,z+22,z+23,z+23,z+24,z+24,z+24,z+24,z+25,z+26,z+26,z+18,z+18,z+18,z+18,z+19,z+20,z+20,z+21,z+22,z+23,z+24,z+24,z+25,z+26,z+26,z+26,z+26,z+18,z+18,z+18,z+18,z+18,z+18,z+26,z+26,z+26,z+26,z+26,z+26,z+18,z+18,z+18,z+18,z+18,z+18,z+26,z+26,z+26,z+26,z+26,z+26,z+-1,z+0,z+0,z+0];
 var I=[0,0,44,44,44,44,44,43,44,43,43,35,44,43,43,35,35,102,35,22,35,102,35,35,102,44,35,35,102,35,35,22,20,44,35,35,44,20,44,35,35,22,20,44,35,35,102,44,44,35,35,20,35,35,35,44,35,35,44,35,35,35,44,35,35,20,44,44,35,35,35,35,35,44,35,35,114,35,44,35,35,44,35,35,114,44,35,35,35,35,44,35,44,44,35,35,35,44,35,35,35,35,44,35,35,35,35,44,35,35,71,71,44,35,35,35,35,44,35,35,35,35,44,35,35,44,35,44,44,35,35,35,35,43,35,35,35,35,44,35,35,35,109,35,35,35,109,35,35,35,35,109,35,35,35,35,44,35,35,35,43,35,44,44,44,35,35,35,35,43,35,35,35,35,43,35,35,67,109,35,35,35,109,35,35,67,109,35,35,35,35,43,35,35,35,43,35,44,44,44,44,35,35,35,35,43,35,35,35,35,43,43,35,35,67,35,44,35,35,35,44,35,35,67,35,44,35,35,35,35,43,43,35,35,35,43,35,44,44,1,1,1,1,44,1,44,43,44,43,44,43,43,43,43,35,98,35,35,35,35,43,43,43,35,35,35,35,43,43,43,35,35,35,43,35,35,35,43,35,35,35,43,35,35,35,35,43,43,43,35,35,35,35,43,43,43,35,43,43,43,43,43,43,43,44,1,44,1,44,1,1,1,1,44,44,44,1,1,1,1,1,1,1,44,1,1,1,1,43,44,43,43,43,43,43,35,43,43,35,35,35,43,43,43,35,35,35,35,43,43,43,35,35,67,35,43,35,35,43,35,35,67,35,43,35,35,35,35,43,43,43,35,35,35,43,43,43,35,43,43,43,43,43,43,43,43,1,44,1,1,1,1,1,1,44,1,1,1,1,44,44,1,1,1,1,1,44,1,1,35,35,49,1,1,1,1,1,1,44,35,35,35,35,43,35,35,35,35,43,35,35,67,43,43,35,35,43,43,35,35,67,43,43,35,35,35,35,43,35,35,35,43,35,1,44,1,1,1,1,1,1,1,1,1,1,35,35,49,1,1,1,1,1,44,44,44,101,101,101,98,98,98,98,101,101,101,44,35,35,35,35,44,35,35,35,35,44,35,35,67,35,43,44,35,35,43,44,35,35,67,35,43,44,35,35,35,35,44,35,35,35,44,35,101,101,101,44,98,98,98,98,101,101,101,44,44,44,35,35,44,35,35,35,35,35,35,67,43,35,35,43,35,35,67,43,35,35,35,35,35,35,44,35,44,44,44,44,35,35,35,35,35,35,35,67,35,44,35,35,44,35,35,67,35,44,35,35,35,35,35,44,44,44,44,35,35,35,35,35,35,67,44,35,35,44,35,35,67,44,35,35,35,35,44,44,35,44,35,35,35,67,35,44,35,35,44,35,67,35,44,44,35,35,35,44,44,44,44,35,35,35,67,44,35,44,35,67,44,44,35,35,44,44,44,35,35,35,44,35,44,35,44,44,35,35,44,44,44,35,35,43,35,109,35,109,35,109,44,35,35,43,44,44,35,35,43,44,44,44,44,44,35,35,43,44,44,44,43,35,43,44,44,44,44,43,35,43,44,44,43,43,44,43,43,43,44,43,44,43,44,43,44,43,43,43,44,44,43,43,43,43,43,43,44,43,44,44,44,44,43,44,44,43,43,43,43,44,43,43,43,43,43,44,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,0,57,57,0];
 var D=[0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,8,8,0,8,0,8,0,8,8,0,13,8,8,0,8,8,0,0,0,8,1,14,0,0,8,8,0,0,0,8,8,0,13,13,8,8,0,8,8,1,0,15,0,0,8,8,1,0,8,8,0,13,13,8,8,8,8,8,0,8,8,0,2,0,8,8,0,8,8,0,0,8,8,8,8,0,8,13,13,8,8,8,0,8,8,8,8,0,8,8,7,7,0,8,8,2,10,0,8,8,7,7,0,8,8,8,8,0,8,8,0,8,13,13,8,8,8,8,0,8,8,8,8,0,8,8,1,0,8,8,14,0,8,8,15,12,0,8,8,8,8,0,8,8,8,0,8,13,13,13,8,8,8,8,0,8,8,8,8,0,8,8,3,0,8,8,13,0,8,8,2,0,8,8,8,8,0,8,8,8,0,8,13,13,13,13,8,8,8,8,0,8,8,8,8,0,0,8,8,3,3,0,8,8,12,0,8,8,2,4,0,8,8,8,8,0,0,8,8,8,0,8,13,13,0,0,0,0,13,0,5,5,5,5,5,5,5,5,5,8,0,15,8,8,8,0,5,5,8,8,9,8,0,0,5,8,8,10,5,8,8,11,5,8,8,10,5,8,8,9,8,0,0,5,15,8,8,8,0,5,5,8,5,5,5,5,5,5,5,5,0,5,0,5,0,0,0,0,13,13,13,0,0,0,0,0,0,0,13,0,0,0,0,5,5,5,5,5,5,5,8,5,5,8,8,8,0,5,5,8,8,8,8,0,0,5,8,8,3,3,5,8,8,5,8,8,2,4,5,8,8,8,8,0,0,5,8,8,8,0,5,5,8,5,5,5,5,5,5,5,5,0,5,0,0,0,0,0,0,13,0,0,0,0,13,13,0,0,0,0,0,13,0,0,7,0,0,0,0,0,0,0,0,5,8,8,8,8,0,8,8,8,8,0,8,8,3,0,0,8,8,0,0,8,8,2,0,0,8,8,8,8,0,8,8,8,0,8,0,5,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,13,13,13,0,0,0,0,0,0,0,0,0,0,13,8,8,8,8,0,8,8,8,8,0,8,8,3,3,0,0,8,8,0,0,8,8,2,4,0,0,8,8,8,8,0,8,8,8,0,8,0,0,0,13,0,0,0,0,0,0,0,13,13,13,8,8,0,8,8,8,8,8,8,3,0,8,8,0,8,8,2,0,8,8,8,8,8,8,0,8,13,13,13,13,8,8,8,8,8,8,8,3,3,0,8,8,0,8,8,2,4,0,8,8,8,8,8,13,13,13,13,8,8,8,8,8,8,3,0,8,8,0,8,8,2,0,8,8,8,8,13,13,8,8,8,8,8,3,3,0,8,8,0,8,2,4,0,8,8,8,8,13,13,13,8,8,8,8,3,0,8,0,8,2,0,8,8,8,13,13,8,8,8,8,0,8,0,8,0,8,8,8,0,13,8,8,8,0,8,0,8,0,8,0,8,8,8,0,13,8,8,8,0,0,0,0,0,8,8,8,0,0,13,0,0,8,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  for(n=0;n<25760+1;n++){
   setTile(X[n], Y[n], Z[n], I[n], D[n]);
  }
}

function Helicopter20(x,y,z){
 var X=[x,x+-18,x+-17,x+-16,x+-15,x+-14,x+-13,x+-12,x+-12,x+-12,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-4,x+-4,x+-4,x+-3,x+-2,x+-1,x+0,x+0,x+0,x+0,x+1,x+1];
 var Y=[y,y+8,y+6,y+6,y+6,y+6,y+6,y+6,y+0,y+1,y+-1,y+-1,y+6,y+-1,y+0,y+1,y+-1,y+-1,y+-1,y+-1,y+1,y+0,y+1,y+-1,y+0,y+1,y+2,y+0,y+3,y+0,y+3,y+6,y+0,y+3,y+0,y+3,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+0,y+1,y+2,y+3,y+0,y+1,y+2,y+0,y+1,y+2,y+0,y+1,y+1,y+0,y+1,y+0,y+1,y+2,y+0,y+1,y+2,y+0,y+1,y+2,y+3,y+0,y+3,y+0,y+3,y+4,y+6,y+0,y+3,y+4,y+0,y+3,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+3,y+0,y+3,y+0,y+1,y+3,y+0,y+1,y+2,y+0,y+1,y+2,y+3,y+2,y+3,y+1,y+2,y+3,y+0,y+1,y+2,y+0,y+1,y+0,y+1,y+0,y+1,y+0,y+1,y+0,y+1,y+0,y+1,y+2,y+0,y+1,y+2,y+0,y+1,y+2,y+0,y+1,y+2,y+3,y+0,y+1,y+2,y+3,y+4,y+0,y+1,y+2,y+3,y+4,y+0,y+1,y+2,y+3,y+4,y+0,y+3,y+4,y+5,y+6,y+0,y+3,y+4,y+0,y+3,y+-1,y+0,y+3,y+-1,y+0,y+3,y+-1,y+0,y+1,y+3,y+0,y+1,y+2,y+0,y+1,y+2,y+4,y+3,y+2,y+1,y+1,y+0,y+1,y+0,y+1,y+2,y+0,y+1,y+2,y+0,y+1,y+2,y+3,y+0,y+3,y+0,y+3,y+4,y+0,y+3,y+4,y+0,y+3,y+6,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+3,y+0,y+3,y+0,y+1,y+3,y+0,y+1,y+2,y+0,y+1,y+2,y+1,y+0,y+1,y+-1,y+0,y+1,y+2,y+0,y+3,y+0,y+3,y+0,y+3,y+0,y+3,y+6,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+0,y+1,y+2,y+3,y+0,y+1,y+2,y+0,y+1,y+2,y+0,y+-1,y+-1,y+-1,y+0,y+1,y+-1,y+-1,y+-1,y+6,y+-1,y+0,y+1,y+6,y+6,y+6,y+6,y+6,y+-2,y+-1,y+0,y+6,y+-2];
 var Z=[z,z+-25,z+-15,z+-14,z+-14,z+-13,z+-12,z+-12,z+-10,z+-10,z+-12,z+-11,z+-11,z+-10,z+-10,z+-10,z+-9,z+-8,z+-7,z+-6,z+-22,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-10,z+-10,z+-10,z+-9,z+-9,z+-8,z+-8,z+-7,z+-7,z+-7,z+-7,z+-6,z+-6,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-3,z+-3,z+-3,z+-2,z+-22,z+-16,z+-15,z+-15,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-8,z+-8,z+-7,z+-7,z+-7,z+-7,z+-6,z+-6,z+-6,z+-6,z+-5,z+-5,z+-4,z+-4,z+-4,z+-3,z+-3,z+-3,z+-2,z+-2,z+-2,z+-25,z+-24,z+-24,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-21,z+-21,z+-20,z+-20,z+-19,z+-19,z+-18,z+-18,z+-17,z+-17,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-9,z+-9,z+-8,z+-8,z+-8,z+-7,z+-7,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-4,z+-3,z+-3,z+-3,z+-2,z+-2,z+-2,z+-25,z+-24,z+-23,z+-22,z+-16,z+-15,z+-15,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-8,z+-8,z+-8,z+-7,z+-7,z+-7,z+-7,z+-6,z+-6,z+-6,z+-6,z+-5,z+-5,z+-4,z+-4,z+-4,z+-3,z+-3,z+-3,z+-2,z+-2,z+-2,z+-22,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-10,z+-10,z+-9,z+-9,z+-8,z+-8,z+-8,z+-7,z+-7,z+-7,z+-7,z+-6,z+-6,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-3,z+-3,z+-3,z+-2,z+-12,z+-11,z+-10,z+-10,z+-10,z+-9,z+-8,z+-7,z+-7,z+-6,z+-10,z+-10,z+-6,z+-6,z+-5,z+-4,z+-4,z+0,z+0,z+0,z+-3,z+0];
 var I=[0,0,44,44,44,44,44,44,44,35,109,44,44,44,43,35,44,44,44,109,44,35,35,44,35,35,35,35,44,35,44,44,35,44,35,44,35,35,35,44,44,35,35,35,44,35,35,35,44,35,35,20,20,35,102,102,44,35,35,35,35,35,35,35,35,35,35,1,1,44,35,44,35,35,44,44,35,35,44,35,35,35,35,35,43,44,43,114,43,43,44,44,35,44,44,35,20,20,35,102,35,109,35,109,35,109,44,35,109,44,35,44,35,44,35,44,35,35,35,35,35,109,35,35,35,35,35,35,35,35,35,49,35,35,35,35,44,35,1,1,35,44,35,1,1,35,44,35,35,101,101,44,35,35,44,35,35,44,43,43,44,44,43,44,44,35,44,44,35,20,35,35,102,35,49,35,44,35,35,35,35,35,35,35,35,35,35,1,1,44,35,44,35,35,44,35,35,44,35,35,44,35,35,35,43,44,43,114,43,43,44,44,35,44,44,35,20,20,35,102,44,35,35,44,35,35,35,35,44,35,44,35,44,35,44,44,35,35,35,44,44,35,35,35,44,35,35,35,44,35,35,20,20,35,102,102,109,44,44,43,35,44,44,44,44,109,44,35,44,44,44,44,44,57,57,0,44,0];
 var D=[0,0,0,0,0,0,0,0,13,4,0,5,0,5,5,5,5,5,5,0,5,13,13,13,13,13,13,13,5,13,5,0,13,5,13,5,13,13,13,5,13,13,13,13,5,13,13,13,5,13,13,0,0,15,0,0,5,13,13,13,13,13,13,13,13,13,13,0,0,5,13,5,13,13,5,0,13,13,5,13,13,13,13,13,5,13,5,3,5,5,5,5,4,5,5,15,0,0,15,0,13,6,13,6,13,3,13,13,3,13,13,13,13,13,13,13,13,13,13,13,13,2,13,13,13,13,13,13,13,13,13,0,13,13,13,13,5,13,0,0,13,5,13,0,0,13,5,13,13,0,0,5,13,13,5,13,13,13,5,5,13,5,5,13,5,4,5,5,15,0,15,15,0,15,0,15,5,13,13,13,13,13,13,13,13,13,13,0,0,5,13,5,13,13,5,13,13,5,13,13,0,13,13,13,5,13,5,3,5,5,5,5,4,5,5,15,0,0,15,0,5,13,13,13,13,13,13,13,5,13,5,13,5,13,5,0,13,13,13,5,13,13,13,13,5,13,13,13,5,13,13,0,0,15,0,0,1,5,5,5,5,5,5,5,0,1,13,5,0,0,0,0,0,0,0,0,0,0];
  for(n=0;n<5720+1;n++){
   setTile(X[n], Y[n], Z[n], I[n], D[n]);
  }
}

function Helicopter21(x,y,z){
 var X=[x,x+-20,x+-20,x+-19,x+-18,x+-17,x+-16,x+-16,x+-15,x+-15,x+-14,x+-14,x+-14,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-6,x+-6,x+-6,x+-5,x+-5,x+-4,x+-4,x+-3,x+-2,x+-1,x+0,x+0,x+0,x+0,x+1];
 var Y=[y,y+11,y+7,y+7,y+7,y+7,y+7,y+7,y+7,y+7,y+7,y+7,y+7,y+0,y+0,y+7,y+0,y+1,y+0,y+0,y+7,y+-1,y+0,y+-1,y+1,y+7,y+-1,y+-1,y+-1,y+0,y+7,y+7,y+3,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+9,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+7,y+1,y+4,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+1,y+1,y+4,y+5,y+1,y+2,y+4,y+5,y+2,y+3,y+4,y+3,y+3,y+3,y+3,y+3,y+4,y+2,y+3,y+4,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+7,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+9,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+8,y+9,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+9,y+1,y+4,y+5,y+7,y+1,y+4,y+5,y+1,y+2,y+4,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+1,y+2,y+3,y+3,y+2,y+3,y+4,y+7,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+9,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+1,y+4,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+1,y+2,y+3,y+4,y+7,y+7,y+-1,y+0,y+-1,y+1,y+7,y+-1,y+-1,y+-1,y+0,y+7,y+0,y+0,y+0,y+1,y+0,y+7,y+0,y+7,y+7,y+7,y+7,y+7,y+7,y+7,y+7,y+7,y+7,y+7,y+-2,y+-1,y+0,y+-2];
 var Z=[z,z+-29,z+-20,z+-19,z+-18,z+-18,z+-17,z+-4,z+-16,z+-5,z+-16,z+-7,z+-6,z+-16,z+-15,z+-15,z+-14,z+-14,z+-13,z+-12,z+-8,z+-15,z+-15,z+-14,z+-14,z+-14,z+-13,z+-12,z+-11,z+-11,z+-10,z+-9,z+-18,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-14,z+-14,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-11,z+-11,z+-10,z+-10,z+-9,z+-9,z+-9,z+-8,z+-8,z+-8,z+-7,z+-7,z+-6,z+-28,z+-28,z+-28,z+-27,z+-27,z+-27,z+-27,z+-26,z+-26,z+-26,z+-25,z+-24,z+-23,z+-22,z+-21,z+-21,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-14,z+-14,z+-14,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-13,z+-13,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-8,z+-8,z+-8,z+-7,z+-7,z+-6,z+-6,z+-26,z+-18,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-14,z+-14,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-11,z+-10,z+-10,z+-9,z+-9,z+-9,z+-8,z+-8,z+-8,z+-7,z+-7,z+-6,z+-27,z+-26,z+-25,z+-19,z+-18,z+-15,z+-15,z+-14,z+-14,z+-14,z+-13,z+-12,z+-11,z+-11,z+-20,z+-16,z+-15,z+-14,z+-14,z+-13,z+-13,z+-12,z+-22,z+-21,z+-12,z+-23,z+-12,z+-24,z+-11,z+-10,z+-10,z+-9,z+-8,z+0,z+0,z+0,z+0];
 var I=[0,0,44,44,44,44,44,44,44,44,44,44,44,101,35,44,35,109,35,35,44,44,109,44,35,44,44,44,44,109,44,44,35,35,35,44,35,35,35,44,35,35,35,44,109,35,35,35,44,109,44,44,35,35,35,35,44,109,35,35,102,44,109,35,35,35,44,44,35,44,35,91,20,35,35,102,35,44,102,35,109,35,109,35,35,109,109,35,109,35,35,35,35,35,44,109,35,44,35,35,44,109,35,35,44,35,35,35,44,109,35,35,35,44,98,44,35,35,35,98,98,109,44,35,35,35,35,98,98,101,101,35,49,35,35,35,43,43,109,44,35,35,43,43,44,35,43,109,35,35,109,35,35,20,35,35,102,35,35,35,44,35,35,35,35,44,44,35,35,35,44,35,35,35,44,109,35,35,35,44,109,44,44,35,35,35,35,44,109,35,35,102,44,109,35,35,35,44,35,44,35,91,20,35,35,102,35,44,102,35,49,35,44,44,44,109,44,35,44,44,44,44,109,44,101,35,35,109,35,44,35,44,44,44,44,44,44,44,44,44,44,44,57,57,0,0];
 var D=[0,0,13,13,13,13,13,13,13,13,13,13,13,0,13,13,13,0,13,15,13,13,0,13,15,13,13,13,13,0,13,13,15,15,15,3,15,15,15,3,15,15,15,5,4,15,15,15,5,4,5,13,2,15,15,15,5,4,15,15,0,5,4,15,15,15,5,13,15,5,15,2,0,15,15,0,15,5,0,15,6,15,7,15,15,3,7,15,3,15,15,15,15,15,5,6,15,5,15,15,5,6,15,15,5,15,15,15,3,6,15,15,15,13,0,13,15,15,15,0,0,2,13,4,15,15,15,0,0,0,0,0,0,15,15,15,5,5,3,13,3,15,5,5,13,15,5,3,15,4,3,15,7,0,15,15,0,15,15,15,5,0,15,15,15,3,13,15,15,15,3,15,15,15,5,5,15,15,15,5,5,5,13,1,15,15,15,5,5,15,15,0,5,5,15,15,15,5,15,5,15,2,0,15,15,0,15,5,0,15,0,15,13,13,13,1,13,15,13,13,13,13,1,13,0,13,13,1,13,13,15,13,13,13,13,13,13,13,13,13,13,13,0,0,0,0];
  for(n=0;n<9240+1;n++){
   setTile(X[n], Y[n], Z[n], I[n], D[n]);
  }
}

function Helicopter22(x,y,z){
 var X=[x,x+-26,x+-25,x+-24,x+-23,x+-22,x+-21,x+-21,x+-20,x+-20,x+-19,x+-19,x+-19,x+-18,x+-18,x+-17,x+-17,x+-17,x+-17,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-9,x+-9,x+-9,x+-9,x+-8,x+-8,x+-7,x+-7,x+-7,x+-6,x+-6,x+-5,x+-5,x+-4,x+-3,x+-2,x+-1,x+0,x+0,x+0,x+0];
 var Y=[y,y+5,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+0,y+4,y+4,y+4,y+0,y+4,y+2,y+2,y+-1,y+2,y+3,y+-1,y+0,y+2,y+3,y+1,y+2,y+3,y+2,y+4,y+-2,y+2,y+0,y+3,y+1,y+0,y+1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+4,y+-1,y+0,y+1,y+2,y+4,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+4,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+-1,y+0,y+-1,y+-1,y+2,y+4,y+0,y+1,y+3,y+2,y+4,y+-2,y+0,y+0,y+0,y+1,y+0,y+1,y+-1,y+0,y+1,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+2,y+-1,y+1,y+2,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+3,y+4,y+-2,y+-1,y+3,y+-2,y+-1,y+2,y+3,y+4,y+-2,y+-1,y+0,y+1,y+3,y+-2,y+-1,y+0,y+2,y+3,y+-2,y+-1,y+0,y+2,y+-1,y+0,y+2,y+-2,y+-1,y+0,y+2,y+-2,y+-1,y+0,y+1,y+-1,y+0,y+-1,y+3,y+0,y+1,y+2,y+3,y+4,y+0,y+1,y+2,y+3,y+0,y+1,y+2,y+0,y+1,y+-1,y+0,y+1,y+-1,y+0,y+-1,y+0,y+-2,y+-1,y+0,y+1,y+-2,y+-1,y+0,y+1,y+-1,y+0,y+1,y+-1,y+0,y+1,y+-1,y+0,y+1,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+2,y+3,y+-2,y+-1,y+2,y+3,y+-2,y+-1,y+2,y+3,y+-2,y+-1,y+2,y+3,y+-2,y+-1,y+3,y+-2,y+-1,y+3,y+4,y+-2,y+-1,y+2,y+3,y+4,y+-2,y+-1,y+2,y+3,y+4,y+-2,y+-1,y+2,y+3,y+-2,y+-1,y+2,y+3,y+-2,y+-1,y+0,y+2,y+-2,y+-1,y+0,y+2,y+-2,y+-1,y+0,y+1,y+-2,y+-1,y+0,y+-1,y+0,y+1,y+2,y+-2,y+0,y+0,y+0,y+1,y+0,y+1,y+-1,y+0,y+1,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+2,y+-1,y+1,y+2,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+3,y+-2,y+-1,y+3,y+-2,y+-1,y+2,y+3,y+4,y+-2,y+-1,y+0,y+1,y+3,y+-2,y+-1,y+0,y+2,y+3,y+4,y+-2,y+-1,y+0,y+2,y+-1,y+0,y+2,y+-2,y+-1,y+0,y+2,y+-2,y+-1,y+0,y+1,y+-1,y+0,y+-1,y+0,y+1,y+0,y+1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+3,y+4,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+4,y+-1,y+0,y+1,y+2,y+4,y+-1,y+0,y+1,y+-1,y+0,y+-1,y+-1,y+0,y+2,y+2,y+4,y+-1,y+2,y+3,y+-1,y+0,y+2,y+3,y+1,y+2,y+3,y+2,y+-2,y+2,y+4,y+0,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+-2,y+-1,y+0,y+-2];
 var Z=[z,z+-35,z+-4,z+-5,z+-6,z+-6,z+-24,z+-7,z+-23,z+-8,z+-22,z+-21,z+-8,z+-20,z+-9,z+-33,z+-19,z+-18,z+-10,z+-33,z+-17,z+-15,z+-14,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-10,z+-10,z+-9,z+-9,z+-33,z+-33,z+-19,z+-18,z+-18,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-9,z+-9,z+-8,z+-8,z+-8,z+-8,z+-7,z+-7,z+-7,z+-6,z+-6,z+-5,z+-4,z+-34,z+-34,z+-33,z+-33,z+-33,z+-32,z+-32,z+-26,z+-25,z+-24,z+-23,z+-23,z+-22,z+-22,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-9,z+-8,z+-8,z+-8,z+-7,z+-7,z+-7,z+-7,z+-6,z+-6,z+-6,z+-6,z+-5,z+-5,z+-4,z+-34,z+-33,z+-33,z+-33,z+-33,z+-33,z+-32,z+-32,z+-32,z+-32,z+-31,z+-31,z+-31,z+-30,z+-30,z+-29,z+-29,z+-29,z+-28,z+-28,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-9,z+-8,z+-8,z+-8,z+-8,z+-7,z+-7,z+-7,z+-7,z+-6,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-4,z+-33,z+-33,z+-33,z+-26,z+-25,z+-24,z+-23,z+-23,z+-22,z+-22,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-9,z+-8,z+-8,z+-8,z+-7,z+-7,z+-7,z+-7,z+-6,z+-6,z+-6,z+-6,z+-5,z+-5,z+-4,z+-33,z+-19,z+-18,z+-18,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-9,z+-9,z+-9,z+-8,z+-8,z+-8,z+-8,z+-8,z+-7,z+-7,z+-7,z+-6,z+-6,z+-5,z+-4,z+-33,z+-15,z+-14,z+-14,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-10,z+-9,z+-9,z+-7,z+-33,z+-14,z+-6,z+-5,z+-15,z+-4,z+-16,z+-3,z+-2,z+-16,z+-1,z+-17,z+0,z+-18,z+-18,z+-19,z+-20,z+0,z+0,z+0,z+1];
 var I=[0,0,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,35,35,65,35,35,65,35,35,44,44,35,35,35,44,35,35,44,35,50,35,35,35,35,35,44,35,35,44,44,44,35,35,44,44,35,35,20,109,35,35,35,109,44,35,35,20,109,109,35,35,35,109,44,44,35,35,20,109,35,35,35,35,109,35,35,20,44,35,35,20,35,35,35,50,35,35,44,35,35,35,35,35,35,35,35,44,35,44,44,35,35,44,35,35,44,35,35,35,35,35,134,35,35,50,35,35,134,50,35,35,35,35,35,35,44,44,35,134,50,44,44,44,35,20,44,35,44,43,44,44,35,134,50,20,44,35,35,35,44,85,35,134,44,20,35,20,44,35,98,44,44,35,35,20,89,35,35,35,44,109,35,35,44,109,35,35,109,35,35,109,35,109,44,35,44,44,35,109,35,35,35,35,44,85,35,35,44,35,35,44,35,35,44,35,35,35,35,35,35,44,35,35,35,44,89,35,35,35,44,35,134,35,44,44,35,35,44,44,35,35,44,44,35,35,35,44,35,35,44,35,43,44,44,35,44,89,44,44,35,35,109,44,44,35,35,44,44,35,35,44,44,35,35,109,44,35,53,44,44,35,35,20,44,35,35,35,44,35,50,35,35,35,35,44,35,44,44,35,35,44,35,35,44,35,35,35,35,35,134,35,35,50,35,35,134,50,35,35,35,35,35,35,44,44,35,134,50,44,44,35,20,44,35,44,43,44,44,35,134,50,20,44,35,35,35,44,44,85,35,134,44,20,35,20,44,35,24,44,44,35,35,20,89,35,35,44,50,35,35,35,35,35,44,35,35,44,44,35,35,44,35,35,20,109,35,35,35,109,44,44,35,35,20,109,109,35,35,35,109,44,35,35,20,109,35,35,35,35,109,44,35,35,20,44,44,35,35,20,35,35,35,50,44,35,35,44,65,35,35,65,35,35,44,44,35,35,35,35,35,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,57,57,0,0];
 var D=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,13,0,4,15,4,15,5,4,2,15,5,13,15,13,15,0,2,3,13,2,4,15,15,15,15,2,13,15,15,5,0,13,15,15,5,0,15,15,0,0,15,15,15,0,5,15,15,0,0,0,15,15,15,0,5,0,15,4,0,0,7,15,15,15,0,15,15,0,5,15,15,0,15,15,15,3,7,7,13,6,14,7,7,2,15,15,15,5,15,5,13,15,15,13,15,15,5,15,15,15,15,15,3,15,15,1,15,15,2,4,15,5,15,15,15,15,5,13,15,3,3,5,0,13,15,0,13,15,13,5,0,13,15,2,1,0,13,15,6,15,5,0,15,3,13,0,4,0,13,15,3,5,13,15,15,0,0,15,15,4,13,6,15,15,5,6,15,15,3,15,15,3,15,3,13,15,5,13,15,6,15,7,15,15,5,0,15,15,5,15,15,5,15,15,5,15,15,15,15,15,15,5,15,15,15,5,0,15,15,15,13,15,3,15,5,13,15,15,5,13,15,15,5,13,15,15,15,13,15,15,13,15,5,0,13,15,13,0,0,13,15,4,3,0,13,15,15,5,13,15,3,5,13,15,5,3,13,15,2,5,13,15,15,0,13,15,15,15,13,14,1,1,15,15,15,5,15,5,13,15,15,13,15,15,5,15,15,15,15,15,3,15,15,2,15,15,2,4,15,5,15,15,15,15,5,13,15,3,3,5,13,15,0,13,15,13,5,0,13,15,2,2,0,13,15,6,15,5,0,0,15,3,13,0,4,0,13,15,1,5,13,15,15,0,0,15,15,13,4,15,15,15,15,1,13,15,15,5,13,15,15,5,15,15,0,1,15,15,15,1,5,0,15,15,0,1,1,15,15,15,1,5,15,5,0,1,7,15,15,15,1,0,15,15,0,5,0,15,15,0,15,15,15,3,13,4,15,0,5,15,5,5,1,15,5,13,15,13,15,1,3,0,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  for(n=0;n<7992+1;n++){
   setTile(X[n], Y[n], Z[n], I[n], D[n]);
  }
}

function Helicopter23(x,y,z){
 var X=[x,x+-26,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-23,x+-23,x+-23,x+-23,x+-22,x+-22,x+-22,x+-21,x+-21,x+-21,x+-20,x+-20,x+-19,x+-19,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-4,x+-4,x+-4,x+-4,x+-4,x+-3,x+-3,x+-3,x+-2,x+0,x+0,x+0,x+0];
 var Y=[y,y+12,y+1,y+2,y+3,y+0,y+2,y+4,y+0,y+1,y+2,y+3,y+4,y+0,y+2,y+4,y+1,y+2,y+3,y+0,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+1,y+2,y+5,y+1,y+2,y+0,y+1,y+2,y+3,y+1,y+2,y+5,y+5,y+5,y+1,y+2,y+0,y+1,y+2,y+3,y+1,y+2,y+5,y+5,y+5,y+5,y+1,y+2,y+-1,y+0,y+1,y+2,y+3,y+1,y+2,y+5,y+5,y+5,y+5,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+3,y+0,y+1,y+2,y+5,y+5,y+5,y+1,y+5,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+3,y+-1,y+0,y+1,y+2,y+1,y+5,y+5,y+0,y+0,y+1,y+2,y+5,y+-1,y+0,y+1,y+2,y+3,y+5,y+-1,y+0,y+1,y+3,y+4,y+5,y+-1,y+0,y+1,y+2,y+3,y+5,y+0,y+1,y+2,y+5,y+0,y+0,y+0,y+0,y+1,y+0,y+1,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+3,y+5,y+-1,y+0,y+3,y+4,y+5,y+-1,y+0,y+1,y+3,y+5,y+0,y+1,y+2,y+0,y+1,y+0,y+1,y+0,y+0,y+0,y+0,y+0,y+0,y+0,y+1,y+0,y+1,y+-1,y+0,y+1,y+2,y+5,y+-1,y+0,y+1,y+2,y+3,y+5,y+-1,y+0,y+3,y+4,y+5,y+-1,y+0,y+1,y+2,y+3,y+5,y+0,y+1,y+2,y+5,y+0,y+1,y+0,y+1,y+0,y+0,y+0,y+0,y+0,y+0,y+0,y+1,y+5,y+-1,y+0,y+1,y+2,y+5,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+3,y+4,y+-1,y+0,y+1,y+2,y+3,y+0,y+1,y+2,y+5,y+0,y+1,y+5,y+0,y+0,y+0,y+0,y+0,y+5,y+0,y+5,y+-1,y+0,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+3,y+4,y+-1,y+0,y+1,y+2,y+3,y+0,y+0,y+5,y+0,y+5,y+0,y+0,y+-1,y+0,y+1,y+5,y+0,y+5,y+-1,y+0,y+1,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+3,y+-1,y+0,y+1,y+2,y+-1,y+0,y+0,y+5,y+-1,y+0,y+1,y+5,y+0,y+5,y+5,y+-1,y+0,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+3,y+-1,y+0,y+1,y+2,y+-1,y+0,y+5,y+5,y+5,y+0,y+-1,y+0,y+1,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+0,y+5,y+-1,y+0,y+1,y+-1,y+0,y+1,y+-1,y+0,y+1,y+0,y+-1,y+0,y+1,y+0,y+-1,y+0,y+1,y+0,y+-2,y+-2,y+-1,y+0];
 var Z=[z,z+17,z+6,z+6,z+6,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+10,z+10,z+10,z+8,z+8,z+8,z+8,z+8,z+8,z+8,z+8,z+8,z+8,z+8,z+8,z+8,z+8,z+2,z+7,z+7,z+8,z+8,z+8,z+8,z+9,z+9,z+14,z+2,z+3,z+7,z+7,z+8,z+8,z+8,z+8,z+9,z+9,z+13,z+14,z+3,z+4,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+12,z+13,z+4,z+5,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+11,z+12,z+5,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+10,z+10,z+11,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+1,z+2,z+3,z+4,z+4,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+11,z+11,z+12,z+12,z+13,z+14,z+15,z+1,z+2,z+3,z+4,z+4,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+11,z+11,z+12,z+12,z+13,z+14,z+15,z+2,z+3,z+4,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+12,z+13,z+14,z+3,z+4,z+4,z+5,z+5,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+10,z+11,z+11,z+12,z+12,z+13,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+10,z+10,z+12,z+12,z+13,z+13,z+13,z+13,z+14,z+2,z+3,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+10,z+10,z+13,z+14,z+2,z+6,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+10,z+14,z+7,z+7,z+7,z+8,z+8,z+8,z+9,z+9,z+9,z+7,z+8,z+8,z+8,z+9,z+8,z+8,z+8,z+8,z+-1,z+0,z+0,z+0];
 var I=[57,57,42,42,42,42,35,42,42,35,42,35,42,42,35,42,42,42,42,42,42,42,35,42,35,35,42,35,44,42,35,42,35,44,35,44,35,42,35,44,35,44,44,44,44,35,35,35,1,35,35,35,35,44,44,44,44,35,35,35,35,35,35,35,35,35,44,44,44,44,35,35,35,35,35,35,35,35,35,35,35,44,44,44,35,44,35,35,35,35,44,35,35,26,35,35,35,35,35,35,44,44,35,35,35,35,44,35,35,35,50,35,44,46,35,26,35,35,35,35,35,35,50,35,44,35,35,35,44,44,35,35,35,44,35,43,35,35,35,35,35,35,54,35,44,46,35,35,1,1,35,35,35,35,44,35,35,35,35,43,35,44,35,35,44,44,35,35,35,44,35,43,35,35,35,35,44,35,35,54,50,35,44,46,35,35,35,35,35,35,68,50,35,44,35,35,35,44,35,43,35,44,35,35,44,44,35,35,35,44,44,35,35,35,44,44,35,35,35,35,35,35,35,35,35,35,35,35,35,35,42,35,44,44,42,44,44,35,35,44,42,44,44,35,44,35,35,35,89,64,64,44,35,35,35,68,35,89,64,64,44,35,35,44,44,44,42,35,35,42,35,44,35,44,35,35,44,35,35,35,20,35,35,35,20,35,35,35,20,35,35,35,44,35,42,35,44,35,44,44,35,35,35,35,35,20,35,35,35,20,35,35,35,20,35,35,44,44,44,35,35,35,35,35,35,35,20,35,35,35,35,44,35,35,44,35,35,35,35,35,44,35,35,35,35,35,35,35,44,35,57,57,57,57];
 var D=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,13,13,0,13,0,0,13,0,13,0,13,0,2,0,13,0,13,0,0,0,0,13,13,13,0,13,13,13,13,0,0,0,0,13,13,13,13,13,13,13,13,13,0,0,0,0,13,13,13,13,13,13,13,13,13,13,13,0,0,0,13,0,13,13,13,13,0,13,13,9,13,13,13,13,13,13,0,0,13,13,13,13,0,13,13,13,1,13,0,0,13,1,13,13,2,13,0,13,1,13,0,13,13,13,0,0,13,13,13,0,13,0,13,13,13,13,13,13,3,13,0,0,13,13,0,0,13,0,13,13,0,13,13,13,13,0,13,0,13,13,0,0,13,13,13,0,13,0,13,13,13,13,0,13,13,3,2,13,0,0,13,13,13,1,13,6,2,2,13,0,13,13,13,0,13,0,13,0,13,13,0,0,13,13,13,0,0,13,13,13,0,0,13,13,13,13,13,13,13,13,13,13,13,13,13,13,0,13,0,0,0,0,0,13,13,0,0,0,0,13,0,13,13,13,0,4,12,0,13,13,13,5,13,0,3,11,0,13,13,0,0,0,0,0,0,0,0,0,0,0,13,13,0,13,13,13,0,13,13,10,0,13,13,13,0,13,13,0,0,0,0,0,0,0,0,0,5,13,13,14,13,0,13,15,13,0,13,14,13,0,5,13,0,0,0,13,13,13,13,13,14,13,0,13,13,13,13,0,5,13,0,13,13,13,5,13,0,13,13,12,13,13,5,13,0,13,0,0,0,0];
  for(n=0;n<7695+1;n++){
   setTile(X[n], Y[n], Z[n], I[n], D[n]);
  }
}

function Helicopter24(x,y,z){
 var X=[x,x+-25,x+-24,x+-24,x+-24,x+-23,x+-23,x+-23,x+-23,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-20,x+-20,x+-20,x+-19,x+-19,x+-19,x+-19,x+-18,x+-18,x+-18,x+-18,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-3,x+-3,x+-3,x+-2,x+-1,x+0,x+0,x+0,x+0,x+0];
 var Y=[y,y+11,y+5,y+7,y+7,y+6,y+6,y+5,y+6,y+5,y+7,y+3,y+4,y+5,y+6,y+4,y+3,y+4,y+4,y+5,y+3,y+4,y+4,y+8,y+3,y+4,y+8,y+4,y+4,y+4,y+8,y+4,y+4,y+4,y+8,y+4,y+3,y+4,y+5,y+4,y+8,y+8,y+4,y+3,y+4,y+5,y+4,y+8,y+8,y+4,y+3,y+4,y+5,y+4,y+8,y+8,y+4,y+8,y+4,y+3,y+4,y+5,y+2,y+3,y+4,y+5,y+3,y+4,y+5,y+4,y+4,y+8,y+3,y+4,y+5,y+3,y+4,y+5,y+8,y+2,y+3,y+4,y+5,y+2,y+3,y+4,y+5,y+6,y+2,y+3,y+4,y+5,y+3,y+4,y+5,y+3,y+4,y+5,y+8,y+8,y+3,y+4,y+5,y+0,y+1,y+3,y+5,y+2,y+3,y+4,y+5,y+6,y+8,y+1,y+2,y+3,y+4,y+5,y+6,y+2,y+3,y+4,y+5,y+6,y+0,y+1,y+3,y+5,y+3,y+4,y+5,y+8,y+3,y+4,y+5,y+0,y+3,y+4,y+5,y+2,y+3,y+4,y+5,y+6,y+8,y+1,y+2,y+3,y+4,y+5,y+6,y+2,y+3,y+4,y+5,y+6,y+8,y+0,y+3,y+4,y+5,y+8,y+3,y+4,y+5,y+3,y+2,y+4,y+0,y+3,y+5,y+2,y+3,y+4,y+5,y+6,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+8,y+2,y+3,y+4,y+5,y+6,y+0,y+3,y+5,y+2,y+4,y+3,y+3,y+2,y+3,y+0,y+3,y+8,y+2,y+3,y+4,y+5,y+6,y+8,y+1,y+2,y+3,y+4,y+5,y+6,y+2,y+3,y+4,y+5,y+6,y+8,y+0,y+3,y+2,y+3,y+3,y+3,y+2,y+3,y+8,y+0,y+3,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+6,y+2,y+3,y+4,y+5,y+8,y+0,y+3,y+2,y+3,y+3,y+8,y+3,y+8,y+2,y+3,y+0,y+1,y+3,y+2,y+3,y+4,y+5,y+2,y+3,y+4,y+6,y+2,y+3,y+4,y+5,y+0,y+1,y+3,y+8,y+2,y+3,y+3,y+8,y+3,y+2,y+2,y+3,y+4,y+5,y+2,y+5,y+2,y+3,y+4,y+5,y+2,y+8,y+3,y+8,y+8,y+3,y+4,y+2,y+3,y+5,y+3,y+4,y+8,y+8,y+4,y+2,y+3,y+4,y+4,y+8,y+8,y+3,y+8,y+8,y+8,y+-2,y+-2,y+-1,y+0,y+8];
 var Z=[z,z+28,z+9,z+9,z+11,z+9,z+10,z+11,z+11,z+9,z+9,z+11,z+11,z+11,z+11,z+9,z+10,z+10,z+11,z+11,z+12,z+12,z+13,z+4,z+11,z+11,z+5,z+10,z+11,z+12,z+6,z+10,z+11,z+12,z+6,z+10,z+11,z+11,z+11,z+12,z+21,z+7,z+10,z+11,z+11,z+11,z+12,z+20,z+8,z+10,z+11,z+11,z+11,z+12,z+18,z+19,z+8,z+8,z+9,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+13,z+14,z+17,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+14,z+14,z+14,z+15,z+16,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+13,z+14,z+14,z+14,z+14,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+13,z+13,z+14,z+14,z+14,z+7,z+8,z+8,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+14,z+14,z+15,z+7,z+8,z+8,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+12,z+12,z+13,z+13,z+14,z+14,z+15,z+7,z+8,z+8,z+8,z+9,z+9,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+12,z+13,z+13,z+14,z+14,z+15,z+6,z+7,z+7,z+8,z+8,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+13,z+14,z+14,z+15,z+5,z+7,z+8,z+10,z+10,z+10,z+10,z+11,z+11,z+12,z+12,z+12,z+12,z+14,z+14,z+15,z+3,z+4,z+10,z+10,z+11,z+11,z+11,z+12,z+12,z+14,z+2,z+10,z+11,z+11,z+11,z+12,z+15,z+1,z+11,z+16,z+16,z+17,z+-1,z+0,z+0,z+0,z+18];
 var I=[0,0,35,35,44,35,109,35,35,35,35,35,43,35,44,44,44,44,35,109,44,44,44,44,44,35,44,101,35,101,44,101,35,101,44,101,44,35,44,101,44,44,35,35,35,44,35,44,44,35,35,35,44,35,44,44,101,44,101,44,35,44,44,35,35,109,44,35,44,101,101,44,44,35,44,43,35,43,44,44,35,35,109,44,35,35,35,44,44,35,35,109,43,35,43,44,35,44,44,44,44,35,44,44,109,44,109,35,35,35,35,44,44,44,35,35,35,35,1,35,35,35,35,44,44,109,44,109,44,35,44,44,44,35,44,44,44,101,44,44,35,35,35,1,44,44,35,35,35,35,1,44,35,35,35,1,44,44,44,101,44,44,44,35,44,35,35,35,44,44,44,1,35,35,49,1,44,43,35,35,7,101,101,44,1,35,35,49,1,44,44,44,35,35,35,42,35,44,44,44,44,1,35,35,35,44,44,44,43,35,35,35,1,1,35,35,35,44,44,44,44,35,44,42,42,35,44,44,44,44,44,35,35,102,44,43,44,44,44,35,35,102,44,44,44,35,44,42,44,42,44,35,44,44,109,44,43,35,20,102,43,35,35,44,43,35,20,102,44,109,44,44,35,44,42,44,49,35,44,35,20,102,35,20,44,35,20,102,35,44,49,44,44,35,102,35,35,20,35,102,44,44,102,35,35,20,102,44,44,35,44,44,44,0,57,57,0,44];
 var D=[0,0,15,15,0,15,1,2,8,15,15,8,0,8,0,0,8,0,8,1,8,0,0,0,8,8,0,0,8,0,0,0,8,0,0,0,8,8,0,0,0,0,8,8,8,0,8,0,0,8,8,8,0,8,0,0,0,0,0,8,8,0,8,8,8,0,8,8,0,0,0,0,8,8,0,0,7,0,0,8,8,8,0,8,8,8,8,0,8,8,8,0,0,7,0,8,8,0,0,0,8,8,0,8,2,8,1,8,8,8,8,0,0,8,8,8,8,7,0,8,8,8,8,0,8,3,8,1,8,8,0,0,8,8,0,8,8,0,0,8,8,8,8,0,0,8,8,8,8,8,0,8,8,8,8,0,0,8,8,0,0,0,8,8,0,10,10,8,8,8,0,0,8,8,0,0,8,0,8,8,0,0,0,5,0,8,8,0,0,8,8,0,10,8,10,0,15,0,8,0,0,0,8,8,8,0,0,8,0,8,8,8,0,0,8,8,8,0,0,8,0,15,0,0,0,13,0,0,8,0,8,8,8,0,8,0,0,0,8,8,8,0,0,8,0,13,0,0,0,0,0,13,0,8,2,0,0,8,0,0,0,7,6,0,0,8,0,0,8,3,0,0,13,0,0,0,0,14,8,8,0,0,8,0,8,8,0,0,14,0,0,0,0,8,0,8,2,0,8,0,0,0,0,5,8,0,0,0,0,8,0,0,0,0,0,0,0,0];
  for(n=0;n<10920+1;n++){
   setTile(X[n], Y[n], Z[n], I[n], D[n]);
  }
}

function Helicopter25(x,y,z){
 var X=[x,x+-20,x+-19,x+-18,x+-17,x+-16,x+-16,x+-16,x+-15,x+-15,x+-15,x+-15,x+-14,x+-14,x+-14,x+-14,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-6,x+-6,x+-6,x+-5,x+-5,x+-5,x+-5,x+-4,x+-4,x+-4,x+-3,x+-3,x+-2,x+-2,x+-1,x+-1,x+0,x+0,x+0,x+0];
 var Y=[y,y+8,y+5,y+5,y+5,y+5,y+7,y+7,y+5,y+7,y+7,y+7,y+5,y+7,y+7,y+7,y+5,y+2,y+0,y+7,y+-2,y+-1,y+0,y+7,y+0,y+7,y+0,y+0,y+1,y+2,y+0,y+1,y+2,y+0,y+1,y+2,y+5,y+0,y+1,y+2,y+3,y+0,y+1,y+2,y+3,y+0,y+1,y+2,y+3,y+0,y+1,y+2,y+3,y+0,y+1,y+2,y+3,y+0,y+1,y+2,y+3,y+0,y+1,y+2,y+3,y+0,y+1,y+2,y+3,y+0,y+1,y+2,y+3,y+0,y+1,y+2,y+3,y+0,y+1,y+2,y+3,y+7,y+0,y+1,y+2,y+3,y+1,y+2,y+3,y+2,y+3,y+3,y+7,y+7,y+0,y+1,y+0,y+1,y+2,y+0,y+3,y+0,y+1,y+3,y+5,y+0,y+3,y+0,y+2,y+3,y+0,y+3,y+0,y+3,y+0,y+2,y+3,y+0,y+1,y+3,y+0,y+1,y+3,y+0,y+1,y+3,y+0,y+1,y+3,y+0,y+1,y+3,y+0,y+1,y+3,y+0,y+1,y+3,y+7,y+0,y+3,y+4,y+7,y+1,y+3,y+4,y+2,y+3,y+4,y+7,y+3,y+0,y+1,y+-2,y+-1,y+0,y+1,y+2,y+0,y+1,y+3,y+0,y+3,y+4,y+0,y+3,y+4,y+5,y+0,y+3,y+4,y+0,y+3,y+4,y+0,y+3,y+0,y+3,y+0,y+3,y+0,y+3,y+0,y+3,y+0,y+3,y+0,y+3,y+0,y+3,y+4,y+0,y+3,y+4,y+5,y+0,y+3,y+4,y+5,y+6,y+1,y+3,y+4,y+5,y+6,y+7,y+2,y+3,y+4,y+5,y+6,y+3,y+4,y+5,y+0,y+1,y+0,y+1,y+2,y+0,y+3,y+0,y+1,y+3,y+5,y+0,y+3,y+0,y+3,y+5,y+0,y+3,y+5,y+0,y+3,y+0,y+2,y+3,y+0,y+1,y+3,y+0,y+1,y+3,y+0,y+1,y+3,y+0,y+1,y+3,y+0,y+1,y+3,y+0,y+1,y+3,y+0,y+1,y+3,y+0,y+3,y+4,y+7,y+1,y+3,y+4,y+2,y+3,y+4,y+3,y+1,y+3,y+0,y+0,y+1,y+2,y+0,y+1,y+2,y+0,y+1,y+2,y+5,y+0,y+1,y+2,y+3,y+0,y+1,y+2,y+3,y+0,y+1,y+2,y+3,y+0,y+1,y+2,y+3,y+5,y+0,y+1,y+2,y+3,y+0,y+1,y+2,y+3,y+0,y+1,y+2,y+3,y+0,y+1,y+2,y+3,y+0,y+1,y+2,y+3,y+0,y+1,y+2,y+3,y+0,y+1,y+2,y+3,y+0,y+1,y+2,y+3,y+1,y+2,y+3,y+7,y+2,y+3,y+3,y+5,y+5,y+5,y+0,y+-2,y+-1,y+0,y+0,y+7,y+5,y+5,y+7,y+5,y+5,y+5,y+7,y+5,y+5,y+7,y+5,y+7,y+5,y+7,y+5,y+7,y+-2,y+-2,y+-1,y+0];
 var Z=[z,z+29,z+0,z+1,z+1,z+2,z+27,z+28,z+3,z+11,z+12,z+26,z+3,z+13,z+24,z+25,z+4,z+7,z+14,z+14,z+15,z+15,z+15,z+15,z+16,z+23,z+2,z+3,z+3,z+3,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+13,z+14,z+14,z+14,z+14,z+15,z+15,z+15,z+15,z+16,z+16,z+16,z+16,z+16,z+17,z+17,z+17,z+17,z+18,z+18,z+18,z+19,z+19,z+20,z+21,z+22,z+2,z+2,z+3,z+3,z+3,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+7,z+7,z+7,z+8,z+8,z+9,z+9,z+10,z+10,z+10,z+11,z+11,z+11,z+12,z+12,z+12,z+13,z+13,z+13,z+14,z+14,z+14,z+15,z+15,z+15,z+16,z+16,z+16,z+17,z+17,z+17,z+17,z+18,z+18,z+18,z+18,z+19,z+19,z+19,z+20,z+20,z+20,z+20,z+21,z+2,z+2,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+8,z+8,z+8,z+9,z+9,z+10,z+10,z+11,z+11,z+12,z+12,z+13,z+13,z+14,z+14,z+15,z+15,z+16,z+16,z+16,z+17,z+17,z+17,z+17,z+18,z+18,z+18,z+18,z+18,z+19,z+19,z+19,z+19,z+19,z+19,z+20,z+20,z+20,z+20,z+20,z+21,z+21,z+21,z+2,z+2,z+3,z+3,z+3,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+7,z+7,z+7,z+8,z+8,z+8,z+9,z+9,z+10,z+10,z+10,z+11,z+11,z+11,z+12,z+12,z+12,z+13,z+13,z+13,z+14,z+14,z+14,z+15,z+15,z+15,z+16,z+16,z+16,z+17,z+17,z+17,z+18,z+18,z+18,z+18,z+19,z+19,z+19,z+20,z+20,z+20,z+21,z+29,z+29,z+2,z+3,z+3,z+3,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+13,z+14,z+14,z+14,z+14,z+15,z+15,z+15,z+15,z+16,z+16,z+16,z+16,z+17,z+17,z+17,z+17,z+18,z+18,z+18,z+18,z+19,z+19,z+20,z+4,z+10,z+11,z+14,z+15,z+15,z+15,z+16,z+17,z+3,z+12,z+16,z+3,z+13,z+14,z+16,z+2,z+15,z+15,z+1,z+14,z+1,z+14,z+0,z+13,z+-1,z+0,z+0,z+0];
 var I=[0,0,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,35,35,44,35,35,35,44,35,44,102,20,35,102,35,20,20,35,35,35,44,35,71,71,44,44,35,35,44,44,35,102,44,44,35,35,44,44,35,35,44,44,35,102,44,35,35,35,44,35,35,102,44,35,35,35,44,35,35,35,44,35,35,102,44,44,35,35,35,49,35,35,35,35,35,35,44,44,20,35,44,35,20,43,44,35,114,109,44,35,109,35,35,109,35,35,35,35,35,35,35,35,67,35,35,67,35,35,67,35,35,67,35,35,67,35,35,67,35,35,67,35,44,35,35,44,44,35,35,109,35,35,109,44,35,35,35,35,35,44,22,20,35,35,35,35,35,35,35,35,35,44,35,35,35,35,35,44,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,109,35,35,35,109,35,35,35,35,109,35,35,35,35,35,44,35,35,35,35,44,35,35,109,20,35,44,35,20,43,44,35,114,109,44,35,109,35,109,44,35,35,44,35,35,35,35,35,35,67,35,35,67,35,35,67,35,35,67,35,35,67,35,35,67,35,35,67,35,35,35,44,44,35,35,109,35,35,109,35,35,35,102,20,35,102,35,20,20,35,35,35,44,35,35,35,44,44,35,35,44,44,35,102,44,44,35,35,44,44,44,35,35,44,44,35,102,44,35,35,35,44,35,35,102,44,35,35,35,44,35,35,35,44,35,35,102,44,35,35,35,49,35,35,35,44,35,35,35,44,44,44,35,35,35,35,35,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,0,57,57,0];
 var D=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,8,0,15,0,8,0,8,0,0,0,8,0,8,0,0,8,8,8,0,8,4,8,0,8,8,8,0,8,8,0,0,8,8,8,0,8,8,8,0,8,8,0,0,8,8,8,0,8,8,0,0,8,8,8,0,8,8,8,0,8,8,0,0,0,8,8,8,0,8,8,8,8,8,8,0,0,0,8,0,3,0,0,5,8,2,0,0,8,0,8,9,0,8,8,8,8,8,1,8,8,1,8,8,1,8,8,1,8,8,1,8,8,1,8,8,1,8,8,1,8,0,8,8,5,0,8,8,0,8,8,0,0,8,8,8,15,0,0,0,0,8,3,8,8,8,8,8,8,8,0,8,8,8,8,8,0,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,2,8,8,8,2,8,8,8,8,2,8,8,8,8,8,0,8,8,8,8,5,8,8,3,0,8,0,3,0,0,5,8,2,1,0,8,1,8,1,0,8,8,0,8,8,8,2,8,8,0,8,8,0,8,8,0,8,8,0,8,8,0,8,8,0,8,8,0,8,8,8,5,0,8,8,1,8,8,1,8,15,15,0,0,8,0,8,0,0,8,8,8,0,8,8,8,0,8,8,8,0,8,8,0,0,8,8,8,0,0,8,8,8,0,8,8,0,0,8,8,8,0,8,8,0,0,8,8,8,0,8,8,8,0,8,8,0,0,8,8,8,0,8,8,8,0,8,8,8,0,0,0,8,15,0,8,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  for(n=0;n<7161+1;n++){
   setTile(X[n], Y[n], Z[n], I[n], D[n]);
  }
}

function Helicopter26(x,y,z){
 var X=[x,x+-23,x+-21,x+-20,x+-19,x+-18,x+-18,x+-17,x+-17,x+-16,x+-16,x+-16,x+-15,x+-15,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-7,x+-7,x+-6,x+-6,x+-6,x+-5,x+-5,x+-4,x+-4,x+-3,x+-2,x+-1,x+0,x+0,x+0,x+1];
 var Y=[y,y+6,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+2,y+2,y+2,y+4,y+2,y+-2,y+0,y+4,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+4,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+-1,y+0,y+-1,y+1,y+3,y+2,y+0,y+1,y+3,y+0,y+-2,y+-1,y+-1,y+-1,y+-1,y+0,y+-1,y+0,y+1,y+4,y+-1,y+0,y+1,y+2,y+4,y+-1,y+2,y+3,y+-1,y+2,y+4,y+-1,y+2,y+-1,y+2,y+3,y+-1,y+2,y+3,y+-1,y+0,y+1,y+2,y+-1,y+0,y+2,y+-1,y+0,y+2,y+-2,y+-1,y+0,y+1,y+-2,y+-1,y+0,y+-1,y+-1,y+2,y+0,y+1,y+-1,y+0,y+1,y+-2,y+-1,y+0,y+-2,y+-1,y+-1,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+-1,y+0,y+1,y+-1,y+0,y+1,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+4,y+-1,y+2,y+3,y+-1,y+2,y+-1,y+2,y+-1,y+2,y+3,y+-1,y+2,y+3,y+-1,y+2,y+-2,y+-1,y+2,y+-2,y+-1,y+0,y+1,y+-2,y+-1,y+0,y+-1,y+0,y+0,y+-2,y+-1,y+-1,y+-1,y+-1,y+0,y+-1,y+0,y+1,y+-1,y+0,y+1,y+2,y+4,y+-1,y+2,y+3,y+-1,y+2,y+4,y+-1,y+2,y+4,y+-1,y+2,y+3,y+-1,y+2,y+3,y+-1,y+0,y+1,y+2,y+-1,y+0,y+2,y+-1,y+0,y+2,y+-2,y+-1,y+0,y+1,y+-2,y+-1,y+0,y+-1,y+0,y+4,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+4,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+1,y+-1,y+0,y+-1,y+4,y+2,y+2,y+2,y+2,y+4,y+4,y+-2,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+-2,y+-1,y+0,y+-2];
 var Z=[z,z+-29,z+-7,z+-8,z+-9,z+-24,z+-9,z+-23,z+-10,z+-22,z+-21,z+-11,z+-20,z+-11,z+-19,z+-18,z+-14,z+-13,z+-12,z+-12,z+-11,z+-8,z+-26,z+-17,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-9,z+-9,z+-8,z+-8,z+-8,z+-8,z+-8,z+-7,z+-7,z+-7,z+-7,z+-6,z+-6,z+-5,z+-28,z+-28,z+-27,z+-26,z+-26,z+-26,z+-25,z+-24,z+-20,z+-19,z+-18,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-12,z+-12,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-9,z+-8,z+-8,z+-8,z+-7,z+-7,z+-7,z+-6,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-4,z+-3,z+-27,z+-26,z+-26,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-23,z+-23,z+-22,z+-21,z+-21,z+-20,z+-20,z+-19,z+-19,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-12,z+-12,z+-11,z+-11,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-8,z+-8,z+-7,z+-7,z+-7,z+-6,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-4,z+-26,z+-25,z+-24,z+-20,z+-19,z+-18,z+-17,z+-17,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-9,z+-8,z+-8,z+-8,z+-7,z+-7,z+-7,z+-6,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-4,z+-26,z+-15,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-11,z+-11,z+-10,z+-10,z+-10,z+-10,z+-9,z+-9,z+-9,z+-9,z+-9,z+-8,z+-8,z+-8,z+-8,z+-8,z+-7,z+-7,z+-7,z+-7,z+-6,z+-6,z+-5,z+-16,z+-14,z+-13,z+-12,z+-11,z+-10,z+-9,z+-8,z+-17,z+-8,z+-17,z+-7,z+-6,z+-18,z+-5,z+-19,z+-4,z+-19,z+-20,z+-21,z+0,z+0,z+0,z+0];
 var I=[0,0,44,44,44,44,44,44,44,44,44,44,44,44,44,44,49,49,49,44,49,35,44,44,35,35,109,35,35,35,109,44,35,35,102,35,35,35,35,35,35,35,102,44,35,35,35,35,44,49,35,35,35,44,35,35,35,20,35,35,35,35,35,35,44,35,35,44,35,35,35,35,35,35,35,35,35,44,35,35,35,44,44,35,43,109,35,43,44,35,43,35,43,44,35,43,44,35,35,35,43,35,114,109,35,35,44,44,35,22,20,44,35,35,35,35,44,44,35,35,35,109,49,35,109,35,35,35,35,109,35,35,35,35,35,35,109,35,35,35,35,35,35,35,35,35,35,35,109,35,35,35,49,43,44,35,43,109,35,43,35,43,35,43,44,35,43,44,35,109,44,35,44,44,35,35,20,44,35,35,35,44,44,35,35,35,35,35,35,35,35,35,35,35,35,44,44,35,43,109,35,43,44,35,43,44,35,43,44,35,43,44,35,35,35,43,35,114,109,35,35,44,44,35,22,20,44,35,35,35,44,44,35,35,109,35,35,35,109,35,35,102,35,35,35,35,35,44,35,35,102,44,35,35,35,35,44,49,35,35,35,44,35,35,35,20,35,35,35,44,49,49,49,49,44,44,35,44,44,44,44,44,44,44,44,44,44,44,44,57,57,0,0];
 var D=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,5,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,6,4,14,0,14,6,0,14,14,14,6,0,14,14,0,14,14,15,15,15,15,5,15,15,5,2,0,0,14,14,14,14,14,14,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,6,0,0,6,0,15,15,0,0,3,3,0,4,6,13,15,0,0,13,15,15,15,15,5,5,14,4,14,3,0,14,3,3,14,0,0,2,0,0,0,0,14,14,2,14,15,14,14,15,15,14,0,15,15,0,2,0,0,0,0,5,6,0,0,3,0,5,0,0,0,0,6,0,0,6,0,3,13,15,6,13,15,4,0,13,15,15,15,5,5,1,0,0,14,14,14,14,14,14,0,0,0,5,6,0,0,1,0,0,6,0,0,6,0,0,6,0,0,6,0,15,15,0,0,3,3,0,4,6,13,15,0,0,13,15,15,15,5,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,6,4,14,0,14,6,0,14,14,14,6,0,14,14,0,15,14,15,6,0,0,0,0,6,6,1,6,6,6,6,6,6,6,6,6,6,6,6,0,0,0,0];
  for(n=0;n<6750+1;n++){
   setTile(X[n], Y[n], Z[n], I[n], D[n]);
  }
}

function Helicopter27(x,y,z){
 var X=[x,x+0,x+0,x+0,x+0,x+1,x+2,x+3,x+4,x+4,x+4,x+4,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+9,x+9,x+9,x+9,x+9,x+10,x+10,x+11,x+11,x+11,x+12,x+12,x+12,x+12,x+13,x+13,x+13,x+13,x+14];
 var Y=[y,y+-2,y+-1,y+0,y+-2,y+4,y+4,y+4,y+1,y+1,y+4,y+1,y+4,y+4,y+4,y+-1,y+-1,y+0,y+1,y+0,y+1,y+2,y+4,y+-1,y+0,y+1,y+-1,y+1,y+-1,y+1,y+4,y+0,y+1,y+2,y+4,y+-1,y+0,y+1,y+2,y+3,y+4,y+0,y+1,y+2,y+4,y+-1,y+1,y+4,y+1,y+1,y+-1,y+1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+4,y+0,y+1,y+2,y+-1,y+1,y+1,y+4,y+4,y+4,y+-1,y+-1,y+0,y+1,y+0,y+1,y+2,y+4,y+-1,y+0,y+1,y+-1,y+1,y+4,y+1,y+2,y+1,y+4,y+2,y+4,y+2,y+3,y+1,y+2,y+3,y+2,y+1,y+4,y+1,y+3,y+6];
 var Z=[z,z+0,z+0,z+0,z+1,z+-4,z+-4,z+-4,z+-6,z+-5,z+-5,z+-4,z+-10,z+-9,z+-8,z+-7,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-3,z+-8,z+-7,z+-7,z+-7,z+-6,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-4,z+-3,z+-3,z+-3,z+-2,z+-8,z+-7,z+-7,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-3,z+-3,z+-2,z+-2,z+-1,z+0,z+-7,z+-6,z+-6,z+-6,z+-5,z+-5,z+-5,z+-5,z+-4,z+-4,z+-4,z+-3,z+-6,z+-6,z+-5,z+-5,z+-4,z+-6,z+-5,z+-6,z+-5,z+-4,z+-5,z+-5,z+-5,z+-4,z+-5,z+-5,z+-4,z+-4,z+-11];
 var I=[0,20,57,0,0,44,44,44,35,43,44,35,44,44,44,44,44,109,35,1,1,44,44,44,109,35,44,44,44,44,44,35,44,35,44,44,1,1,1,101,44,35,44,35,44,44,44,44,44,44,44,44,35,44,35,44,1,1,1,44,35,44,35,44,44,44,44,44,44,44,44,109,35,1,1,44,44,44,109,35,44,35,44,1,44,35,44,44,44,44,35,44,43,109,35,44,44,35,35,0];
 var D=[0,0,0,0,0,0,0,0,4,0,0,3,0,0,0,5,13,2,4,0,0,0,0,13,3,3,5,0,5,0,0,8,0,4,0,8,0,0,0,0,0,8,0,3,0,5,0,0,0,0,5,0,8,0,4,8,0,0,0,0,8,0,3,5,0,0,0,0,0,5,13,2,4,0,0,0,0,13,3,3,5,4,0,0,0,3,0,0,0,0,0,8,0,0,0,5,5,0,0,0];
  for(n=0;n<1755+1;n++){
   setTile(X[n], Y[n], Z[n], I[n], D[n]);
  }
}

function Helicopter28(x,y,z){
 var X=[x,x+0,x+0,x+0,x+0,x+0,x+1,x+2,x+2,x+2,x+3,x+3,x+4,x+4,x+5,x+5,x+5,x+5,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+14,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+15,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+16,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+17,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+18,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+19,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+20,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+21,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+22,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+23,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+24,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+25,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+26,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+27,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+28,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+29,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+30,x+31,x+31,x+31,x+31,x+31,x+31,x+32,x+32,x+34];
 var Y=[y,y+9,y+-2,y+-1,y+0,y+-2,y+4,y+8,y+-1,y+8,y+8,y+8,y+8,y+8,y+8,y+8,y+8,y+8,y+8,y+8,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+8,y+8,y+8,y+8,y+1,y+2,y+3,y+0,y+1,y+2,y+4,y+0,y+1,y+2,y+4,y+0,y+1,y+2,y+4,y+1,y+2,y+3,y+8,y+8,y+8,y+8,y+1,y+2,y+3,y+0,y+1,y+4,y+0,y+1,y+2,y+5,y+-1,y+1,y+5,y+0,y+1,y+2,y+5,y+0,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+8,y+8,y+8,y+8,y+1,y+2,y+3,y+4,y+0,y+1,y+2,y+5,y+0,y+1,y+2,y+5,y+-1,y+1,y+4,y+5,y+0,y+1,y+2,y+5,y+0,y+1,y+2,y+5,y+1,y+2,y+3,y+4,y+8,y+8,y+8,y+8,y+2,y+3,y+1,y+2,y+3,y+4,y+0,y+1,y+2,y+4,y+5,y+-1,y+1,y+2,y+4,y+5,y+-2,y+-1,y+1,y+2,y+3,y+4,y+5,y+6,y+-1,y+1,y+2,y+4,y+5,y+0,y+1,y+2,y+5,y+1,y+2,y+3,y+4,y+2,y+3,y+8,y+8,y+8,y+8,y+1,y+2,y+3,y+4,y+0,y+1,y+2,y+3,y+4,y+5,y+-1,y+0,y+1,y+2,y+4,y+5,y+-2,y+-1,y+0,y+1,y+5,y+6,y+-2,y+-1,y+0,y+1,y+4,y+5,y+6,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+-1,y+0,y+1,y+4,y+5,y+0,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+8,y+8,y+8,y+8,y+0,y+1,y+2,y+3,y+4,y+-1,y+0,y+2,y+3,y+4,y+5,y+-1,y+0,y+2,y+3,y+4,y+5,y+6,y+-1,y+0,y+2,y+3,y+4,y+5,y+6,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+-1,y+0,y+2,y+3,y+4,y+5,y+6,y+-1,y+0,y+2,y+3,y+4,y+5,y+6,y+-1,y+0,y+2,y+3,y+4,y+5,y+0,y+1,y+2,y+3,y+4,y+8,y+8,y+8,y+8,y+9,y+0,y+1,y+2,y+3,y+4,y+-1,y+2,y+3,y+5,y+-1,y+2,y+3,y+5,y+6,y+-1,y+2,y+3,y+6,y+-1,y+0,y+1,y+2,y+4,y+5,y+6,y+-1,y+2,y+3,y+6,y+-1,y+2,y+3,y+5,y+6,y+-1,y+2,y+3,y+5,y+0,y+1,y+2,y+3,y+4,y+8,y+8,y+9,y+4,y+5,y+6,y+8,y+4,y+5,y+6,y+8,y+9,y+4,y+5,y+6,y+4,y+4,y+4,y+4,y+4,y+3,y+4,y+0,y+1,y+2,y+3,y+4,y+5,y+-1,y+0,y+2,y+5,y+-1,y+0,y+2,y+5,y+6,y+-1,y+0,y+2,y+5,y+6,y+-1,y+2,y+5,y+6,y+-1,y+0,y+2,y+5,y+6,y+-1,y+0,y+2,y+5,y+6,y+-1,y+0,y+2,y+5,y+0,y+1,y+2,y+3,y+4,y+5,y+3,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+5,y+6,y+8,y+4,y+5,y+6,y+8,y+9,y+4,y+5,y+6,y+4,y+5,y+6,y+3,y+4,y+5,y+6,y+7,y+8,y+3,y+4,y+5,y+6,y+7,y+8,y+9,y+2,y+3,y+4,y+5,y+6,y+7,y+8,y+3,y+4,y+5,y+6,y+8,y+3,y+4,y+5,y+8,y+3,y+4,y+5,y+8,y+3,y+4,y+5,y+8,y+3,y+4,y+5,y+8,y+3,y+4,y+5,y+8,y+3,y+4,y+5,y+8,y+3,y+4,y+5,y+8,y+2,y+3,y+4,y+5,y+8,y+0,y+1,y+2,y+3,y+4,y+5,y+8,y+-1,y+2,y+3,y+5,y+6,y+-2,y+-1,y+2,y+3,y+5,y+6,y+-1,y+2,y+3,y+6,y+-1,y+2,y+5,y+6,y+-1,y+2,y+3,y+6,y+-2,y+-1,y+2,y+3,y+5,y+6,y+-1,y+2,y+3,y+5,y+6,y+0,y+1,y+2,y+3,y+4,y+5,y+2,y+3,y+4,y+5,y+3,y+4,y+5,y+3,y+4,y+5,y+3,y+4,y+5,y+3,y+4,y+5,y+3,y+4,y+5,y+3,y+4,y+5,y+3,y+4,y+5,y+3,y+4,y+5,y+6,y+2,y+3,y+4,y+5,y+6,y+7,y+8,y+3,y+4,y+5,y+6,y+7,y+8,y+9,y+3,y+4,y+5,y+6,y+7,y+8,y+4,y+5,y+6,y+8,y+8,y+8,y+8,y+8,y+8,y+8,y+8,y+8,y+8,y+8,y+8,y+8,y+8,y+8,y+8,y+8,y+8,y+8,y+8,y+8,y+8,y+9,y+4,y+5,y+6,y+8,y+9,y+3,y+4,y+5,y+6,y+7,y+8,y+9,y+2,y+3,y+4,y+5,y+6,y+7,y+8,y+9,y+2,y+3,y+5,y+6,y+7,y+8,y+9,y+2,y+3,y+6,y+8,y+9,y+3,y+6,y+8,y+9,y+3,y+6,y+8,y+3,y+6,y+8,y+9,y+3,y+6,y+8,y+3,y+6,y+8,y+3,y+6,y+8,y+3,y+6,y+8,y+2,y+3,y+6,y+8,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+8,y+-2,y+-1,y+0,y+1,y+2,y+5,y+6,y+8,y+-2,y+-1,y+0,y+2,y+5,y+6,y+8,y+-2,y+-1,y+0,y+2,y+5,y+6,y+-1,y+2,y+5,y+6,y+-2,y+-1,y+0,y+2,y+5,y+6,y+-2,y+-1,y+0,y+2,y+5,y+6,y+8,y+-2,y+-1,y+0,y+1,y+2,y+5,y+6,y+8,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+8,y+2,y+3,y+6,y+8,y+3,y+6,y+8,y+3,y+6,y+8,y+3,y+6,y+8,y+3,y+6,y+8,y+3,y+6,y+8,y+3,y+6,y+8,y+3,y+6,y+8,y+9,y+2,y+3,y+6,y+8,y+9,y+2,y+3,y+5,y+6,y+7,y+8,y+9,y+2,y+3,y+4,y+5,y+6,y+7,y+8,y+9,y+3,y+4,y+5,y+6,y+7,y+8,y+9,y+4,y+5,y+6,y+8,y+9,y+8,y+9,y+8,y+8,y+8,y+8,y+8,y+8,y+8,y+8,y+8,y+8,y+8,y+8,y+8,y+8,y+8,y+8,y+8,y+8,y+8,y+8,y+4,y+5,y+6,y+8,y+3,y+4,y+5,y+6,y+7,y+8,y+3,y+4,y+5,y+6,y+7,y+8,y+9,y+2,y+3,y+4,y+5,y+6,y+7,y+8,y+3,y+4,y+5,y+6,y+3,y+4,y+5,y+3,y+4,y+5,y+3,y+4,y+5,y+3,y+4,y+5,y+3,y+4,y+5,y+3,y+4,y+5,y+3,y+4,y+5,y+2,y+3,y+4,y+5,y+6,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+-1,y+2,y+3,y+5,y+6,y+-1,y+2,y+3,y+5,y+6,y+-1,y+2,y+3,y+6,y+-1,y+2,y+5,y+6,y+-1,y+2,y+3,y+6,y+-1,y+2,y+3,y+5,y+6,y+-1,y+2,y+3,y+5,y+6,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+8,y+2,y+3,y+4,y+5,y+6,y+8,y+3,y+4,y+5,y+8,y+3,y+4,y+5,y+8,y+3,y+4,y+5,y+8,y+3,y+4,y+5,y+8,y+3,y+4,y+5,y+8,y+3,y+4,y+5,y+8,y+3,y+4,y+5,y+8,y+3,y+4,y+5,y+6,y+8,y+2,y+3,y+4,y+5,y+6,y+7,y+8,y+3,y+4,y+5,y+6,y+7,y+8,y+9,y+3,y+4,y+5,y+6,y+7,y+8,y+4,y+5,y+6,y+4,y+5,y+6,y+4,y+5,y+6,y+8,y+9,y+4,y+5,y+6,y+8,y+4,y+4,y+4,y+5,y+5,y+5,y+3,y+4,y+5,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+-1,y+0,y+1,y+2,y+5,y+6,y+-1,y+0,y+2,y+5,y+6,y+-1,y+0,y+2,y+5,y+6,y+-1,y+2,y+5,y+6,y+-1,y+0,y+2,y+5,y+6,y+-1,y+0,y+2,y+5,y+6,y+-1,y+0,y+1,y+2,y+5,y+6,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+0,y+3,y+4,y+5,y+5,y+5,y+5,y+4,y+4,y+4,y+4,y+5,y+6,y+4,y+5,y+6,y+8,y+9,y+4,y+5,y+6,y+8,y+8,y+9,y+8,y+5,y+5,y+5,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+-1,y+2,y+3,y+5,y+6,y+-1,y+2,y+3,y+5,y+6,y+-1,y+2,y+3,y+6,y+-1,y+2,y+5,y+6,y+-1,y+2,y+3,y+6,y+-1,y+2,y+3,y+5,y+6,y+-1,y+2,y+3,y+5,y+6,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+5,y+5,y+5,y+8,y+9,y+8,y+8,y+8,y+5,y+5,y+5,y+0,y+1,y+2,y+3,y+4,y+5,y+-1,y+0,y+2,y+5,y+6,y+-1,y+0,y+2,y+5,y+6,y+-1,y+0,y+2,y+5,y+6,y+-1,y+2,y+5,y+6,y+-1,y+0,y+2,y+5,y+6,y+-1,y+0,y+2,y+5,y+6,y+-1,y+0,y+2,y+5,y+6,y+0,y+1,y+2,y+3,y+4,y+5,y+5,y+5,y+5,y+8,y+8,y+8,y+8,y+5,y+0,y+1,y+2,y+3,y+4,y+5,y+-1,y+2,y+3,y+5,y+-2,y+-1,y+2,y+3,y+5,y+6,y+-1,y+2,y+3,y+6,y+-1,y+2,y+5,y+6,y+-1,y+2,y+3,y+6,y+-2,y+-1,y+2,y+3,y+5,y+6,y+-1,y+2,y+3,y+5,y+0,y+1,y+2,y+3,y+4,y+5,y+5,y+8,y+8,y+8,y+8,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+-1,y+2,y+5,y+-2,y+-1,y+2,y+5,y+-2,y+-1,y+2,y+5,y+6,y+-1,y+0,y+1,y+2,y+5,y+6,y+-2,y+-1,y+2,y+5,y+6,y+-2,y+-1,y+2,y+5,y+-2,y+-1,y+2,y+5,y+0,y+1,y+2,y+3,y+4,y+5,y+8,y+8,y+8,y+8,y+2,y+3,y+5,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-1,y+0,y+4,y+5,y+-1,y+0,y+1,y+2,y+3,y+5,y+-1,y+0,y+1,y+5,y+6,y+-1,y+0,y+1,y+2,y+3,y+5,y+-1,y+0,y+3,y+4,y+5,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+2,y+3,y+5,y+0,y+8,y+8,y+8,y+8,y+2,y+3,y+0,y+1,y+2,y+3,y+4,y+-1,y+0,y+5,y+-1,y+1,y+5,y+-1,y+1,y+6,y+-1,y+1,y+5,y+-1,y+0,y+5,y+0,y+1,y+2,y+3,y+4,y+2,y+3,y+8,y+8,y+8,y+8,y+2,y+3,y+1,y+2,y+3,y+4,y+0,y+5,y+0,y+5,y+-1,y+0,y+6,y+7,y+0,y+5,y+0,y+1,y+5,y+1,y+2,y+3,y+4,y+2,y+3,y+8,y+8,y+3,y+8,y+8,y+2,y+3,y+2,y+3,y+4,y+5,y+6,y+1,y+2,y+3,y+5,y+-1,y+2,y+5,y+-1,y+6,y+7,y+-1,y+2,y+5,y+1,y+2,y+3,y+5,y+2,y+3,y+4,y+5,y+6,y+2,y+3,y+8,y+8,y+8,y+8,y+6,y+3,y+6,y+3,y+4,y+5,y+6,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+3,y+5,y+-2,y+6,y+7,y+-2,y+3,y+5,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+3,y+4,y+5,y+6,y+3,y+6,y+6,y+8,y+8,y+8,y+6,y+6,y+6,y+6,y+3,y+4,y+5,y+6,y+3,y+4,y+5,y+4,y+5,y+4,y+6,y+7,y+4,y+5,y+3,y+4,y+5,y+3,y+4,y+5,y+6,y+6,y+6,y+6,y+6,y+8,y+8,y+6,y+6,y+6,y+6,y+4,y+5,y+6,y+4,y+5,y+4,y+5,y+4,y+5,y+6,y+7,y+8,y+4,y+5,y+4,y+5,y+4,y+5,y+6,y+6,y+6,y+6,y+6,y+8,y+8,y+6,y+6,y+6,y+5,y+6,y+4,y+5,y+5,y+5,y+6,y+7,y+8,y+5,y+4,y+5,y+5,y+6,y+6,y+6,y+6,y+8,y+5,y+5,y+6,y+7,y+8,y+5,y+7,y+8,y+16];
 var Z=[z,z+-36,z+0,z+0,z+0,z+1,z+-42,z+-43,z+-39,z+-13,z+-43,z+-13,z+-43,z+-13,z+-44,z+-43,z+-14,z+-13,z+-44,z+-43,z+-29,z+-29,z+-29,z+-28,z+-28,z+-28,z+-27,z+-27,z+-27,z+-14,z+-13,z+-44,z+-43,z+-30,z+-30,z+-30,z+-29,z+-29,z+-29,z+-29,z+-28,z+-28,z+-28,z+-28,z+-27,z+-27,z+-27,z+-27,z+-26,z+-26,z+-26,z+-14,z+-13,z+-44,z+-43,z+-31,z+-31,z+-31,z+-30,z+-30,z+-30,z+-29,z+-29,z+-29,z+-29,z+-28,z+-28,z+-28,z+-27,z+-27,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-14,z+-13,z+-44,z+-43,z+-31,z+-31,z+-31,z+-31,z+-30,z+-30,z+-30,z+-30,z+-29,z+-29,z+-29,z+-29,z+-28,z+-28,z+-28,z+-28,z+-27,z+-27,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-14,z+-13,z+-44,z+-43,z+-32,z+-32,z+-31,z+-31,z+-31,z+-31,z+-30,z+-30,z+-30,z+-30,z+-30,z+-29,z+-29,z+-29,z+-29,z+-29,z+-28,z+-28,z+-28,z+-28,z+-28,z+-28,z+-28,z+-28,z+-27,z+-27,z+-27,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-14,z+-13,z+-44,z+-43,z+-32,z+-32,z+-32,z+-32,z+-31,z+-31,z+-31,z+-31,z+-31,z+-31,z+-30,z+-30,z+-30,z+-30,z+-30,z+-30,z+-29,z+-29,z+-29,z+-29,z+-29,z+-29,z+-28,z+-28,z+-28,z+-28,z+-28,z+-28,z+-28,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-24,z+-14,z+-13,z+-44,z+-43,z+-32,z+-32,z+-32,z+-32,z+-32,z+-31,z+-31,z+-31,z+-31,z+-31,z+-31,z+-30,z+-30,z+-30,z+-30,z+-30,z+-30,z+-30,z+-29,z+-29,z+-29,z+-29,z+-29,z+-29,z+-29,z+-28,z+-28,z+-28,z+-28,z+-28,z+-28,z+-28,z+-28,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-24,z+-24,z+-14,z+-13,z+-44,z+-43,z+-43,z+-32,z+-32,z+-32,z+-32,z+-32,z+-31,z+-31,z+-31,z+-31,z+-30,z+-30,z+-30,z+-30,z+-30,z+-29,z+-29,z+-29,z+-29,z+-28,z+-28,z+-28,z+-28,z+-28,z+-28,z+-28,z+-27,z+-27,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-24,z+-24,z+-14,z+-13,z+-13,z+-44,z+-44,z+-44,z+-44,z+-43,z+-43,z+-43,z+-43,z+-43,z+-42,z+-42,z+-42,z+-40,z+-39,z+-38,z+-37,z+-36,z+-33,z+-33,z+-32,z+-32,z+-32,z+-32,z+-32,z+-32,z+-31,z+-31,z+-31,z+-31,z+-30,z+-30,z+-30,z+-30,z+-30,z+-29,z+-29,z+-29,z+-29,z+-29,z+-28,z+-28,z+-28,z+-28,z+-27,z+-27,z+-27,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-23,z+-23,z+-20,z+-19,z+-18,z+-17,z+-16,z+-14,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-45,z+-45,z+-45,z+-44,z+-44,z+-44,z+-44,z+-44,z+-44,z+-43,z+-43,z+-43,z+-43,z+-43,z+-43,z+-43,z+-42,z+-42,z+-42,z+-42,z+-42,z+-42,z+-42,z+-41,z+-41,z+-41,z+-41,z+-41,z+-40,z+-40,z+-40,z+-40,z+-39,z+-39,z+-39,z+-39,z+-38,z+-38,z+-38,z+-38,z+-37,z+-37,z+-37,z+-37,z+-36,z+-36,z+-36,z+-36,z+-35,z+-35,z+-35,z+-35,z+-34,z+-34,z+-34,z+-34,z+-33,z+-33,z+-33,z+-33,z+-33,z+-32,z+-32,z+-32,z+-32,z+-32,z+-32,z+-32,z+-31,z+-31,z+-31,z+-31,z+-31,z+-30,z+-30,z+-30,z+-30,z+-30,z+-30,z+-29,z+-29,z+-29,z+-29,z+-28,z+-28,z+-28,z+-28,z+-27,z+-27,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-14,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-13,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-11,z+-10,z+-9,z+-8,z+-7,z+-6,z+-5,z+-4,z+-3,z+-2,z+-57,z+-56,z+-55,z+-54,z+-53,z+-52,z+-51,z+-50,z+-49,z+-48,z+-47,z+-46,z+-46,z+-45,z+-45,z+-45,z+-45,z+-45,z+-44,z+-44,z+-44,z+-44,z+-44,z+-44,z+-44,z+-43,z+-43,z+-43,z+-43,z+-43,z+-43,z+-43,z+-43,z+-42,z+-42,z+-42,z+-42,z+-42,z+-42,z+-42,z+-41,z+-41,z+-41,z+-41,z+-41,z+-40,z+-40,z+-40,z+-40,z+-39,z+-39,z+-39,z+-38,z+-38,z+-38,z+-38,z+-37,z+-37,z+-37,z+-36,z+-36,z+-36,z+-35,z+-35,z+-35,z+-34,z+-34,z+-34,z+-33,z+-33,z+-33,z+-33,z+-32,z+-32,z+-32,z+-32,z+-32,z+-32,z+-32,z+-32,z+-32,z+-31,z+-31,z+-31,z+-31,z+-31,z+-31,z+-31,z+-31,z+-30,z+-30,z+-30,z+-30,z+-30,z+-30,z+-30,z+-29,z+-29,z+-29,z+-29,z+-29,z+-29,z+-28,z+-28,z+-28,z+-28,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-14,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-13,z+-13,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-11,z+-11,z+-10,z+-10,z+-9,z+-8,z+-7,z+-6,z+-5,z+-4,z+-3,z+-2,z+-1,z+0,z+1,z+-54,z+-53,z+-52,z+-51,z+-50,z+-49,z+-48,z+-47,z+-46,z+-45,z+-45,z+-45,z+-45,z+-44,z+-44,z+-44,z+-44,z+-44,z+-44,z+-43,z+-43,z+-43,z+-43,z+-43,z+-43,z+-43,z+-42,z+-42,z+-42,z+-42,z+-42,z+-42,z+-42,z+-41,z+-41,z+-41,z+-41,z+-40,z+-40,z+-40,z+-39,z+-39,z+-39,z+-38,z+-38,z+-38,z+-37,z+-37,z+-37,z+-36,z+-36,z+-36,z+-35,z+-35,z+-35,z+-34,z+-34,z+-34,z+-33,z+-33,z+-33,z+-33,z+-33,z+-32,z+-32,z+-32,z+-32,z+-32,z+-32,z+-32,z+-32,z+-31,z+-31,z+-31,z+-31,z+-31,z+-30,z+-30,z+-30,z+-30,z+-30,z+-29,z+-29,z+-29,z+-29,z+-28,z+-28,z+-28,z+-28,z+-27,z+-27,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-16,z+-15,z+-15,z+-15,z+-15,z+-15,z+-14,z+-14,z+-14,z+-14,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-13,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-12,z+-12,z+-11,z+-11,z+-11,z+-44,z+-44,z+-44,z+-43,z+-43,z+-43,z+-43,z+-43,z+-42,z+-42,z+-42,z+-42,z+-40,z+-39,z+-38,z+-36,z+-35,z+-34,z+-33,z+-33,z+-33,z+-32,z+-32,z+-32,z+-32,z+-32,z+-32,z+-32,z+-32,z+-31,z+-31,z+-31,z+-31,z+-31,z+-31,z+-30,z+-30,z+-30,z+-30,z+-30,z+-29,z+-29,z+-29,z+-29,z+-29,z+-28,z+-28,z+-28,z+-28,z+-27,z+-27,z+-27,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-22,z+-21,z+-20,z+-18,z+-17,z+-16,z+-14,z+-14,z+-14,z+-13,z+-13,z+-13,z+-13,z+-13,z+-12,z+-12,z+-12,z+-12,z+-43,z+-43,z+-42,z+-35,z+-34,z+-33,z+-32,z+-32,z+-32,z+-32,z+-32,z+-32,z+-32,z+-31,z+-31,z+-31,z+-31,z+-31,z+-30,z+-30,z+-30,z+-30,z+-30,z+-29,z+-29,z+-29,z+-29,z+-28,z+-28,z+-28,z+-28,z+-27,z+-27,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-23,z+-22,z+-21,z+-13,z+-13,z+-12,z+-43,z+-42,z+-35,z+-34,z+-33,z+-32,z+-32,z+-32,z+-32,z+-32,z+-32,z+-31,z+-31,z+-31,z+-31,z+-31,z+-30,z+-30,z+-30,z+-30,z+-30,z+-29,z+-29,z+-29,z+-29,z+-29,z+-28,z+-28,z+-28,z+-28,z+-27,z+-27,z+-27,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-23,z+-22,z+-21,z+-13,z+-12,z+-43,z+-42,z+-33,z+-32,z+-32,z+-32,z+-32,z+-32,z+-32,z+-31,z+-31,z+-31,z+-31,z+-30,z+-30,z+-30,z+-30,z+-30,z+-30,z+-29,z+-29,z+-29,z+-29,z+-28,z+-28,z+-28,z+-28,z+-27,z+-27,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-23,z+-13,z+-12,z+-43,z+-42,z+-32,z+-32,z+-32,z+-32,z+-32,z+-32,z+-31,z+-31,z+-31,z+-31,z+-30,z+-30,z+-30,z+-30,z+-29,z+-29,z+-29,z+-29,z+-29,z+-28,z+-28,z+-28,z+-28,z+-28,z+-28,z+-27,z+-27,z+-27,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-13,z+-12,z+-43,z+-42,z+-32,z+-32,z+-32,z+-31,z+-31,z+-31,z+-31,z+-31,z+-31,z+-31,z+-30,z+-30,z+-30,z+-30,z+-29,z+-29,z+-29,z+-29,z+-29,z+-29,z+-28,z+-28,z+-28,z+-28,z+-28,z+-27,z+-27,z+-27,z+-27,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-22,z+-13,z+-12,z+-43,z+-42,z+-32,z+-32,z+-31,z+-31,z+-31,z+-31,z+-31,z+-30,z+-30,z+-30,z+-29,z+-29,z+-29,z+-28,z+-28,z+-28,z+-27,z+-27,z+-27,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-13,z+-12,z+-43,z+-42,z+-32,z+-32,z+-31,z+-31,z+-31,z+-31,z+-30,z+-30,z+-29,z+-29,z+-28,z+-28,z+-28,z+-28,z+-27,z+-27,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-13,z+-12,z+-53,z+-43,z+-42,z+-32,z+-32,z+-31,z+-31,z+-31,z+-31,z+-31,z+-30,z+-30,z+-30,z+-30,z+-29,z+-29,z+-29,z+-28,z+-28,z+-28,z+-27,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-13,z+-12,z+-43,z+-42,z+-33,z+-32,z+-32,z+-31,z+-31,z+-31,z+-31,z+-30,z+-30,z+-30,z+-30,z+-30,z+-30,z+-30,z+-30,z+-29,z+-29,z+-29,z+-28,z+-28,z+-28,z+-27,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-23,z+-13,z+-12,z+-43,z+-35,z+-34,z+-33,z+-32,z+-31,z+-31,z+-31,z+-31,z+-30,z+-30,z+-30,z+-29,z+-29,z+-28,z+-28,z+-28,z+-27,z+-27,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-24,z+-23,z+-22,z+-21,z+-13,z+-43,z+-35,z+-34,z+-33,z+-32,z+-31,z+-31,z+-31,z+-30,z+-30,z+-29,z+-29,z+-28,z+-28,z+-28,z+-28,z+-28,z+-27,z+-27,z+-26,z+-26,z+-25,z+-25,z+-25,z+-24,z+-23,z+-22,z+-21,z+-13,z+-43,z+-34,z+-33,z+-32,z+-31,z+-31,z+-30,z+-30,z+-29,z+-28,z+-28,z+-28,z+-28,z+-27,z+-26,z+-26,z+-25,z+-25,z+-24,z+-23,z+-22,z+-13,z+-29,z+-28,z+-28,z+-28,z+-28,z+-27,z+-28,z+-28,z+-57];
 var I=[0,0,57,57,0,0,0,35,0,35,35,35,35,35,35,35,35,35,35,35,35,35,20,35,35,20,35,35,20,35,35,35,35,35,35,20,35,35,35,20,35,35,35,20,35,35,35,20,35,35,20,35,35,35,35,35,35,20,35,35,20,35,35,134,35,35,35,20,35,35,134,35,35,35,35,102,20,35,35,20,35,35,35,35,35,35,20,20,35,35,35,20,35,35,68,35,35,35,35,35,35,35,68,35,20,20,35,20,35,35,20,20,35,35,35,35,35,35,35,35,102,35,35,35,35,35,20,35,35,134,35,35,139,35,35,68,35,42,35,35,35,35,68,35,35,35,35,134,20,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,102,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,65,65,65,65,96,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,134,35,35,35,35,35,134,35,35,35,35,35,35,134,35,35,35,35,35,35,35,35,64,64,35,35,35,35,134,35,35,35,35,35,35,134,35,35,35,35,35,35,134,35,35,35,35,35,35,35,35,35,35,35,35,35,44,35,20,35,35,35,35,35,134,35,35,35,134,101,35,35,35,134,35,65,96,65,96,35,101,35,35,35,134,35,35,35,134,101,35,35,35,134,35,35,20,35,35,35,35,35,44,35,35,35,35,35,35,35,35,44,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,134,35,35,35,134,35,101,35,35,134,35,101,35,35,44,101,35,35,134,35,101,35,35,134,35,101,35,35,134,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,44,35,35,35,35,35,35,35,42,42,35,44,35,35,67,67,35,44,35,44,35,35,42,42,35,44,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,20,35,35,35,35,35,35,35,134,35,35,139,35,35,134,101,35,35,35,134,35,35,44,101,35,35,35,134,35,139,35,35,134,101,35,35,35,134,35,35,35,20,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,42,42,35,44,35,35,67,67,35,44,35,44,35,42,42,35,44,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,44,35,35,35,35,44,35,35,35,35,44,35,44,35,35,35,35,35,35,35,35,35,35,35,35,44,35,44,35,35,35,35,44,35,35,35,44,35,35,35,35,35,35,0,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,44,35,35,35,35,64,64,35,35,35,35,134,35,35,35,35,35,35,35,134,35,101,35,35,35,35,134,35,101,35,35,44,101,35,35,35,134,35,101,35,35,35,134,35,101,35,35,35,35,134,35,35,35,35,35,44,35,35,35,35,64,64,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,44,35,35,35,35,44,35,35,35,35,44,35,44,35,35,35,35,35,35,35,35,35,35,35,35,44,35,44,35,35,35,35,44,35,44,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,42,42,35,44,35,35,67,67,35,44,35,44,35,35,42,42,35,44,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,44,71,71,35,35,35,35,35,35,35,134,35,35,35,35,134,101,35,35,35,134,35,35,44,101,35,35,35,134,35,35,35,134,101,35,35,35,134,35,35,44,71,71,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,42,42,35,44,35,35,67,67,35,44,35,44,35,42,42,35,44,35,35,35,35,35,35,35,35,35,35,35,44,35,35,35,35,35,35,35,35,35,35,35,35,35,44,35,35,35,35,35,35,35,35,134,35,35,35,35,35,134,35,101,35,35,134,35,101,35,35,44,101,35,35,134,35,101,35,35,134,35,101,35,35,134,35,35,35,35,44,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,44,35,35,35,35,35,44,35,35,35,35,35,20,35,35,35,35,35,35,35,134,35,35,35,35,134,101,35,35,35,134,35,35,44,101,35,35,35,134,35,35,35,134,101,35,35,35,134,35,35,35,20,35,35,35,35,35,35,35,35,35,44,35,35,35,35,35,35,35,35,35,35,20,35,35,134,35,35,35,35,134,35,101,35,35,134,35,101,35,35,44,101,35,35,134,35,101,35,35,134,35,101,35,35,134,35,35,35,35,35,35,35,20,35,35,35,35,35,35,35,35,35,35,20,35,35,35,35,35,35,134,35,139,35,35,134,101,35,35,35,134,35,35,44,101,35,35,35,134,35,139,35,35,134,101,35,35,35,134,35,35,20,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,44,35,35,35,35,101,35,65,96,68,44,101,35,35,35,35,101,35,35,35,44,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,44,35,35,35,35,35,35,35,35,35,35,35,101,35,35,35,35,35,35,35,35,44,35,35,35,35,35,35,35,35,35,35,35,35,35,0,35,35,35,35,35,35,35,35,35,101,35,35,35,35,35,44,35,35,44,35,35,44,35,35,35,35,35,35,35,101,35,35,35,35,35,35,35,35,35,35,35,101,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,101,35,35,35,35,35,0,35,35,35,35,35,35,35,35,35,35,42,35,35,35,35,35,35,35,35,35,35,35,35,42,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,42,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,42,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,42,35,101,35,35,35,35,101,35,35,42,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,0];
 var D=[0,0,0,0,0,0,0,15,0,15,15,15,15,15,15,15,15,15,15,15,4,7,0,7,7,0,4,7,0,15,15,15,15,7,7,0,7,8,1,0,7,8,1,0,7,8,1,0,7,7,0,15,15,15,15,7,7,0,7,8,0,7,8,0,7,7,8,0,7,8,0,7,7,8,0,0,0,7,4,0,15,15,15,15,7,7,0,0,7,8,3,0,7,8,5,7,7,8,2,7,7,8,5,7,0,0,1,0,7,7,0,0,15,15,15,15,7,7,7,0,0,7,7,8,11,3,0,7,8,2,4,7,0,7,8,3,7,0,7,7,7,8,2,3,7,7,8,0,0,7,7,7,7,7,7,15,15,15,15,7,7,7,7,7,8,0,0,7,7,7,7,8,3,3,7,4,7,8,8,7,7,15,7,8,8,1,7,7,3,7,8,8,4,4,4,4,1,7,7,8,4,7,7,8,7,7,7,7,7,7,7,7,15,15,15,15,7,7,7,7,7,7,1,7,7,7,7,7,1,7,7,7,7,7,7,1,7,7,7,7,7,7,7,7,0,8,7,7,7,7,1,7,7,7,7,7,7,1,7,7,7,7,7,7,1,7,7,7,7,7,7,7,7,7,15,15,15,15,0,7,0,7,7,7,7,8,1,7,7,8,1,0,7,7,8,1,7,4,3,5,1,1,0,7,7,8,1,7,7,8,1,0,7,7,8,1,7,7,0,7,7,7,15,15,0,7,7,7,0,7,7,7,15,0,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,1,8,7,7,1,8,0,7,7,1,8,0,7,7,0,0,7,7,1,8,0,7,7,1,8,0,7,7,1,8,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,0,7,7,7,15,0,7,7,7,7,7,7,7,0,0,8,0,0,7,1,1,8,0,15,0,7,7,0,0,8,0,0,7,7,7,7,0,7,0,7,15,7,0,7,15,7,7,7,15,7,0,7,15,7,0,7,15,7,7,7,15,7,7,7,15,7,7,7,7,15,7,0,7,7,7,7,15,7,8,1,7,7,0,7,8,1,0,7,7,8,1,8,7,0,0,8,7,8,1,8,0,7,8,1,0,7,7,8,1,7,7,7,0,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,0,7,7,0,7,7,7,7,7,0,7,7,0,7,7,7,7,7,7,7,0,0,8,0,0,7,1,1,8,0,15,0,7,0,0,8,0,0,7,7,7,0,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,0,7,7,7,15,0,7,0,0,8,0,15,0,7,0,0,0,15,7,7,7,0,7,1,8,0,15,0,7,7,7,15,0,7,7,15,0,7,7,15,7,7,15,0,7,7,15,7,7,15,7,7,15,7,7,15,7,7,7,15,13,7,7,7,7,3,8,7,15,4,7,1,3,8,1,7,15,15,7,1,8,0,8,15,3,7,1,8,0,7,7,0,0,7,4,7,1,8,0,7,15,7,1,8,0,8,15,3,7,1,4,8,1,7,15,13,7,7,7,7,1,8,7,15,7,7,7,15,7,7,15,7,7,15,7,7,15,7,7,15,7,7,15,7,7,15,7,7,15,0,7,7,7,15,0,0,7,1,8,0,15,0,7,0,0,0,15,7,7,7,7,0,0,8,0,15,0,7,7,7,15,0,15,0,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,7,7,7,0,7,0,0,8,0,0,7,0,0,8,0,15,0,7,7,0,0,8,0,0,7,7,7,7,7,8,7,7,8,7,7,8,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,13,1,8,7,7,7,7,7,7,8,1,7,7,7,8,1,0,8,7,8,1,7,7,0,0,7,7,8,1,7,7,8,1,0,8,7,8,1,7,7,13,3,8,7,7,7,7,7,15,7,7,7,7,7,15,7,7,7,15,7,7,7,15,7,7,7,15,7,7,7,15,7,7,7,15,7,7,7,15,7,7,7,15,7,7,7,7,0,7,7,0,0,8,0,0,7,0,0,8,0,15,0,7,0,0,8,0,0,7,7,7,7,7,7,7,7,7,15,0,7,7,7,0,7,7,7,7,7,7,7,7,7,13,7,7,7,7,7,7,7,7,1,3,8,7,7,7,1,8,0,8,7,1,8,0,7,7,0,0,7,7,1,8,0,7,7,1,8,0,8,7,1,4,8,7,7,13,7,7,7,7,7,7,7,3,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,15,0,7,7,7,0,15,0,15,7,7,7,7,0,7,7,7,7,7,7,8,1,7,7,7,8,1,0,8,7,8,1,7,7,0,0,7,7,8,1,7,7,8,1,0,8,7,8,1,7,7,7,0,7,7,7,7,7,7,7,7,15,0,15,15,15,7,7,7,7,7,7,7,0,7,7,1,8,7,7,7,1,8,0,7,7,1,8,0,8,7,0,0,8,7,1,8,0,8,7,1,8,0,7,7,1,8,7,7,7,7,7,7,0,7,7,7,7,15,15,15,15,7,7,0,7,7,7,7,7,8,1,7,0,7,8,1,0,7,7,8,1,7,7,0,0,7,7,8,1,7,0,7,8,1,0,7,7,8,1,7,7,0,7,7,7,7,7,15,15,15,15,7,7,7,7,7,7,4,7,8,7,15,7,8,7,3,7,8,0,7,5,2,4,0,0,7,4,7,8,0,7,15,7,8,7,3,7,8,7,7,7,7,7,7,7,15,15,15,15,7,7,7,7,7,7,7,7,7,7,7,0,3,7,7,15,8,0,0,7,7,15,8,0,7,7,15,8,0,0,7,7,0,0,4,7,7,7,7,7,7,7,7,7,7,7,0,15,15,15,15,7,7,7,7,7,0,7,7,7,7,7,0,7,7,0,7,7,0,7,7,8,7,7,7,7,0,7,7,7,15,15,15,15,7,7,7,7,0,7,7,7,15,7,0,15,7,7,15,7,7,8,7,7,7,0,7,7,7,15,15,0,15,15,7,7,7,7,7,0,7,7,0,0,7,15,3,7,15,7,7,15,4,7,7,0,0,7,7,7,7,0,7,7,7,15,15,15,15,7,7,7,7,7,0,7,0,0,0,0,7,0,0,7,15,3,7,15,7,7,15,4,7,0,0,0,0,7,0,0,7,7,7,0,7,7,7,7,15,15,15,7,7,7,15,7,7,0,7,7,0,7,0,7,2,7,7,0,7,7,0,7,7,7,0,7,15,7,7,7,15,15,7,7,7,15,7,0,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,0,7,15,7,7,7,15,15,7,7,7,0,7,7,7,7,7,7,7,7,7,7,7,0,7,7,7,7,15,7,7,7,7,7,7,7,7,0];
  for(n=0;n<39235+1;n++){
   setTile(X[n], Y[n], Z[n], I[n], D[n]);
  }
}

function Helicopter29(x,y,z){
 var X=[x,x+-57,x+-57,x+-57,x+-57,x+-56,x+-56,x+-56,x+-56,x+-56,x+-56,x+-56,x+-56,x+-55,x+-55,x+-55,x+-55,x+-55,x+-55,x+-55,x+-54,x+-54,x+-54,x+-54,x+-54,x+-54,x+-54,x+-53,x+-53,x+-53,x+-53,x+-53,x+-53,x+-53,x+-53,x+-52,x+-52,x+-52,x+-52,x+-52,x+-52,x+-52,x+-51,x+-51,x+-51,x+-51,x+-51,x+-51,x+-51,x+-51,x+-50,x+-50,x+-50,x+-50,x+-50,x+-50,x+-50,x+-50,x+-50,x+-50,x+-49,x+-49,x+-49,x+-49,x+-49,x+-49,x+-49,x+-49,x+-49,x+-49,x+-49,x+-49,x+-48,x+-48,x+-48,x+-48,x+-48,x+-48,x+-48,x+-48,x+-47,x+-47,x+-47,x+-47,x+-47,x+-47,x+-46,x+-46,x+-46,x+-46,x+-45,x+-45,x+-45,x+-45,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-44,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-43,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-42,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-41,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-40,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-39,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-38,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-37,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-36,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-35,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-34,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-33,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-32,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-31,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-30,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-29,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-28,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-27,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-26,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-25,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-24,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-23,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-22,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-21,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-20,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-19,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-18,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-17,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-16,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-15,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-14,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-13,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-12,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-11,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-10,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-9,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-8,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-7,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-6,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-5,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-4,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-3,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-2,x+-1,x+-1,x+-1,x+-1,x+0,x+0,x+0,x+0,x+0,x+1,x+1,x+1];
 var Y=[y,y+16,y+3,y+4,y+3,y+3,y+3,y+4,y+6,y+7,y+8,y+3,y+3,y+3,y+4,y+5,y+8,y+9,y+3,y+5,y+3,y+4,y+9,y+3,y+5,y+7,y+8,y+9,y+3,y+4,y+5,y+6,y+9,y+3,y+6,y+3,y+4,y+9,y+3,y+4,y+5,y+7,y+3,y+4,y+5,y+8,y+9,y+3,y+7,y+10,y+3,y+4,y+5,y+6,y+7,y+8,y+3,y+4,y+5,y+10,y+3,y+4,y+5,y+6,y+7,y+3,y+4,y+5,y+6,y+7,y+10,y+2,y+3,y+4,y+5,y+3,y+4,y+5,y+10,y+10,y+3,y+4,y+3,y+4,y+10,y+10,y+3,y+3,y+10,y+10,y+3,y+3,y+10,y+10,y+-2,y+2,y+3,y+2,y+3,y+10,y+10,y+2,y+3,y+2,y+3,y+10,y+2,y+10,y+2,y+1,y+2,y+3,y+1,y+2,y+3,y+10,y+2,y+10,y+2,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+10,y+1,y+2,y+10,y+1,y+2,y+0,y+1,y+2,y+3,y+4,y+0,y+1,y+2,y+3,y+4,y+10,y+1,y+2,y+10,y+1,y+2,y+1,y+2,y+3,y+0,y+1,y+2,y+3,y+4,y+0,y+1,y+2,y+3,y+4,y+10,y+1,y+2,y+3,y+10,y+1,y+2,y+1,y+2,y+0,y+1,y+2,y+3,y+2,y+3,y+4,y+2,y+3,y+4,y+10,y+0,y+1,y+2,y+3,y+10,y+1,y+2,y+7,y+0,y+1,y+2,y+3,y+0,y+1,y+2,y+3,y+2,y+3,y+4,y+5,y+6,y+3,y+4,y+5,y+6,y+10,y+0,y+1,y+2,y+3,y+10,y+0,y+1,y+2,y+3,y+7,y+1,y+2,y+6,y+7,y+0,y+1,y+2,y+3,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+0,y+1,y+3,y+4,y+5,y+6,y+0,y+1,y+3,y+4,y+5,y+6,y+10,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+10,y+0,y+1,y+2,y+3,y+1,y+2,y+6,y+7,y+1,y+2,y+5,y+6,y+0,y+1,y+2,y+3,y+5,y+0,y+3,y+4,y+5,y+6,y+0,y+3,y+4,y+5,y+7,y+0,y+3,y+4,y+5,y+7,y+10,y+0,y+1,y+3,y+4,y+5,y+6,y+10,y+0,y+1,y+2,y+3,y+5,y+1,y+2,y+5,y+6,y+0,y+1,y+2,y+3,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+0,y+1,y+3,y+4,y+5,y+7,y+0,y+1,y+2,y+3,y+4,y+7,y+0,y+3,y+4,y+7,y+10,y+0,y+1,y+3,y+4,y+5,y+7,y+10,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+0,y+1,y+2,y+3,y+0,y+1,y+2,y+3,y+0,y+1,y+3,y+4,y+5,y+6,y+0,y+4,y+5,y+6,y+7,y+0,y+3,y+4,y+6,y+7,y+8,y+0,y+3,y+4,y+6,y+7,y+8,y+10,y+0,y+3,y+4,y+5,y+6,y+7,y+10,y+0,y+1,y+3,y+4,y+5,y+6,y+0,y+1,y+2,y+3,y+-1,y+1,y+2,y+-1,y+0,y+3,y+-1,y+0,y+3,y+4,y+5,y+6,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+-1,y+0,y+3,y+4,y+5,y+6,y+7,y+8,y+-1,y+0,y+3,y+4,y+5,y+6,y+7,y+8,y+10,y+-1,y+0,y+3,y+4,y+5,y+6,y+7,y+10,y+-1,y+0,y+3,y+4,y+5,y+6,y+-1,y+0,y+1,y+3,y+-1,y+1,y+2,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+2,y+3,y+0,y+3,y+4,y+5,y+6,y+0,y+3,y+4,y+5,y+6,y+7,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+0,y+3,y+6,y+7,y+8,y+9,y+0,y+3,y+4,y+5,y+6,y+7,y+8,y+9,y+10,y+0,y+3,y+4,y+5,y+6,y+7,y+10,y+0,y+3,y+4,y+5,y+6,y+7,y+0,y+3,y+4,y+5,y+6,y+-1,y+0,y+1,y+2,y+3,y+1,y+2,y+10,y+10,y+10,y+10,y+10,y+10,y+10,y+10,y+10,y+10,y+10,y+10,y+10,y+10,y+-2,y+1,y+2,y+10,y+-2,y+-1,y+0,y+1,y+2,y+3,y+10,y+0,y+3,y+4,y+5,y+6,y+10,y+0,y+3,y+7,y+10,y+0,y+3,y+7,y+10,y+0,y+3,y+4,y+6,y+7,y+8,y+9,y+10,y+0,y+3,y+4,y+5,y+6,y+7,y+8,y+9,y+10,y+0,y+3,y+4,y+7,y+10,y+0,y+3,y+4,y+7,y+0,y+3,y+4,y+5,y+6,y+-2,y+-1,y+0,y+1,y+2,y+3,y+-2,y+1,y+2,y+10,y+10,y+10,y+10,y+10,y+10,y+10,y+10,y+10,y+10,y+10,y+10,y+10,y+10,y+10,y+10,y+1,y+2,y+10,y+0,y+1,y+2,y+3,y+10,y+0,y+3,y+4,y+5,y+6,y+10,y+0,y+3,y+7,y+10,y+0,y+3,y+4,y+7,y+10,y+0,y+3,y+6,y+7,y+8,y+9,y+10,y+0,y+3,y+4,y+5,y+6,y+7,y+8,y+9,y+10,y+0,y+3,y+4,y+6,y+7,y+10,y+0,y+3,y+7,y+0,y+3,y+4,y+5,y+6,y+0,y+1,y+2,y+3,y+1,y+2,y+1,y+2,y+0,y+1,y+2,y+3,y+0,y+3,y+4,y+5,y+6,y+0,y+3,y+7,y+0,y+3,y+4,y+7,y+10,y+0,y+3,y+6,y+7,y+8,y+9,y+10,y+0,y+3,y+4,y+5,y+6,y+7,y+8,y+9,y+10,y+0,y+3,y+6,y+7,y+10,y+0,y+3,y+7,y+10,y+0,y+3,y+4,y+5,y+6,y+10,y+0,y+1,y+2,y+3,y+10,y+1,y+2,y+10,y+10,y+10,y+10,y+10,y+10,y+10,y+10,y+10,y+10,y+10,y+10,y+10,y+10,y+10,y+10,y+10,y+1,y+2,y+0,y+1,y+2,y+3,y+0,y+3,y+4,y+5,y+6,y+0,y+3,y+7,y+0,y+3,y+4,y+7,y+10,y+0,y+3,y+7,y+8,y+9,y+10,y+0,y+3,y+4,y+5,y+6,y+7,y+8,y+9,y+10,y+0,y+3,y+7,y+10,y+0,y+3,y+7,y+10,y+0,y+3,y+4,y+5,y+6,y+10,y+0,y+1,y+2,y+3,y+10,y+1,y+2,y+10,y+10,y+10,y+10,y+10,y+10,y+10,y+10,y+10,y+10,y+10,y+10,y+10,y+10,y+10,y+0,y+-1,y+0,y+1,y+0,y+1,y+2,y+0,y+1,y+2,y+3,y+0,y+3,y+0,y+3,y+0,y+3,y+7,y+10,y+0,y+3,y+7,y+8,y+9,y+10,y+0,y+3,y+7,y+8,y+9,y+0,y+3,y+7,y+0,y+3,y+0,y+3,y+0,y+1,y+2,y+3,y+1,y+2,y+0,y+-1,y+0,y+1,y+0,y+1,y+2,y+0,y+1,y+2,y+3,y+0,y+3,y+0,y+3,y+0,y+3,y+7,y+10,y+-1,y+0,y+1,y+2,y+3,y+7,y+8,y+10,y+-1,y+0,y+1,y+2,y+3,y+7,y+8,y+0,y+3,y+7,y+0,y+3,y+0,y+3,y+0,y+1,y+2,y+3,y+1,y+2,y+0,y+-1,y+0,y+1,y+0,y+0,y+-1,y+0,y+1,y+0,y+1,y+2,y+0,y+1,y+2,y+3,y+0,y+3,y+0,y+3,y+0,y+3,y+7,y+10,y+0,y+1,y+3,y+7,y+8,y+10,y+0,y+1,y+3,y+7,y+8,y+0,y+3,y+7,y+0,y+3,y+0,y+3,y+0,y+1,y+2,y+3,y+1,y+2,y+0,y+-1,y+0,y+1,y+0,y+0,y+1,y+2,y+1,y+2,y+0,y+1,y+2,y+3,y+4,y+0,y+3,y+4,y+0,y+3,y+4,y+0,y+3,y+7,y+10,y+0,y+1,y+2,y+3,y+6,y+7,y+8,y+10,y+0,y+1,y+2,y+3,y+6,y+7,y+8,y+0,y+3,y+7,y+0,y+3,y+4,y+0,y+3,y+4,y+0,y+1,y+2,y+3,y+4,y+1,y+2,y+1,y+2,y+0,y+0,y+1,y+2,y+1,y+2,y+0,y+1,y+2,y+3,y+4,y+0,y+3,y+0,y+3,y+6,y+0,y+3,y+6,y+7,y+10,y+0,y+2,y+3,y+4,y+5,y+6,y+7,y+8,y+10,y+0,y+2,y+3,y+4,y+5,y+6,y+7,y+8,y+0,y+3,y+6,y+7,y+0,y+3,y+0,y+3,y+0,y+1,y+2,y+3,y+4,y+1,y+2,y+1,y+2,y+0,y+15,y+0,y+-1,y+0,y+1,y+0,y+1,y+2,y+0,y+1,y+2,y+3,y+4,y+0,y+3,y+4,y+5,y+6,y+0,y+3,y+4,y+5,y+6,y+0,y+1,y+3,y+6,y+10,y+0,y+3,y+4,y+5,y+6,y+7,y+8,y+10,y+0,y+3,y+4,y+5,y+6,y+7,y+8,y+0,y+1,y+3,y+6,y+0,y+3,y+0,y+3,y+0,y+1,y+2,y+3,y+4,y+1,y+2,y+0,y+-1,y+0,y+1,y+0,y+0,y+-1,y+0,y+1,y+0,y+1,y+2,y+0,y+1,y+2,y+3,y+4,y+0,y+3,y+4,y+5,y+6,y+0,y+1,y+3,y+4,y+5,y+6,y+0,y+1,y+3,y+4,y+5,y+6,y+10,y+3,y+4,y+5,y+6,y+7,y+8,y+10,y+3,y+4,y+5,y+6,y+7,y+8,y+0,y+1,y+3,y+4,y+5,y+6,y+0,y+1,y+3,y+4,y+0,y+3,y+0,y+1,y+2,y+3,y+4,y+1,y+2,y+0,y+-1,y+0,y+1,y+0,y+0,y+-1,y+0,y+1,y+0,y+1,y+2,y+0,y+1,y+2,y+3,y+0,y+3,y+4,y+5,y+6,y+0,y+1,y+3,y+4,y+6,y+3,y+6,y+7,y+10,y+-1,y+0,y+3,y+4,y+5,y+6,y+7,y+8,y+10,y+-1,y+0,y+3,y+4,y+5,y+6,y+7,y+8,y+3,y+4,y+5,y+6,y+7,y+0,y+1,y+3,y+4,y+5,y+6,y+0,y+3,y+4,y+5,y+6,y+0,y+1,y+2,y+3,y+1,y+2,y+0,y+-1,y+0,y+1,y+0,y+0,y+-1,y+0,y+1,y+0,y+1,y+2,y+-1,y+0,y+1,y+2,y+3,y+-1,y+0,y+1,y+3,y+4,y+5,y+6,y+0,y+1,y+3,y+4,y+6,y+3,y+7,y+10,y+-1,y+0,y+3,y+7,y+8,y+10,y+-1,y+0,y+3,y+7,y+8,y+3,y+7,y+0,y+1,y+3,y+4,y+6,y+-1,y+0,y+1,y+3,y+4,y+5,y+6,y+-1,y+0,y+1,y+2,y+3,y+1,y+2,y+0,y+-1,y+0,y+1,y+0,y+1,y+2,y+0,y+1,y+2,y+3,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+0,y+1,y+3,y+4,y+6,y+3,y+7,y+10,y+-1,y+0,y+1,y+2,y+3,y+7,y+8,y+10,y+-1,y+0,y+1,y+2,y+3,y+7,y+8,y+3,y+7,y+0,y+1,y+3,y+4,y+6,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+0,y+1,y+2,y+3,y+1,y+2,y+0,y+-1,y+0,y+1,y+0,y+1,y+2,y+0,y+1,y+2,y+3,y+2,y+3,y+4,y+5,y+6,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+3,y+7,y+10,y+-1,y+0,y+3,y+7,y+8,y+10,y+-1,y+0,y+3,y+4,y+7,y+8,y+3,y+4,y+7,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+2,y+3,y+4,y+5,y+6,y+0,y+1,y+2,y+3,y+1,y+2,y+0,y+-1,y+1,y+0,y+1,y+2,y+0,y+1,y+2,y+3,y+2,y+3,y+0,y+1,y+3,y+4,y+5,y+6,y+7,y+2,y+3,y+4,y+5,y+6,y+7,y+10,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+8,y+10,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+8,y+2,y+3,y+4,y+5,y+6,y+7,y+0,y+1,y+3,y+4,y+5,y+6,y+7,y+2,y+3,y+0,y+1,y+2,y+3,y+1,y+2,y+1,y+2,y+0,y+1,y+2,y+3,y+2,y+3,y+4,y+0,y+1,y+3,y+4,y+5,y+6,y+2,y+3,y+4,y+5,y+6,y+7,y+10,y+-1,y+0,y+2,y+5,y+8,y+10,y+-1,y+0,y+2,y+3,y+4,y+5,y+6,y+8,y+2,y+3,y+4,y+5,y+6,y+7,y+0,y+1,y+3,y+4,y+5,y+6,y+2,y+3,y+4,y+0,y+1,y+2,y+3,y+1,y+2,y+1,y+2,y+0,y+1,y+2,y+3,y+2,y+3,y+4,y+0,y+1,y+3,y+4,y+5,y+6,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+10,y+2,y+5,y+6,y+8,y+10,y+2,y+3,y+5,y+6,y+8,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+0,y+1,y+3,y+4,y+5,y+6,y+2,y+3,y+4,y+0,y+1,y+2,y+3,y+1,y+2,y+0,y+1,y+2,y+3,y+0,y+2,y+3,y+4,y+0,y+1,y+3,y+4,y+5,y+6,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+10,y+0,y+1,y+2,y+5,y+6,y+8,y+10,y+0,y+1,y+2,y+3,y+5,y+6,y+8,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+0,y+1,y+3,y+4,y+5,y+6,y+0,y+2,y+3,y+4,y+0,y+1,y+2,y+3,y+1,y+2,y+2,y+3,y+0,y+1,y+3,y+4,y+5,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+10,y+0,y+1,y+2,y+5,y+6,y+8,y+10,y+0,y+1,y+2,y+3,y+5,y+6,y+8,y+0,y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+0,y+1,y+3,y+4,y+5,y+2,y+3,y+1,y+2,y+2,y+0,y+1,y+2,y+3,y+2,y+3,y+4,y+5,y+10,y+2,y+5,y+6,y+7,y+10,y+2,y+3,y+4,y+5,y+6,y+7,y+2,y+3,y+4,y+5,y+0,y+1,y+2,y+3,y+2,y+0,y+2,y+0,y+1,y+2,y+3,y+3,y+4,y+5,y+10,y+2,y+3,y+4,y+6,y+10,y+2,y+3,y+4,y+6,y+3,y+4,y+5,y+0,y+1,y+2,y+3,y+0,y+2,y+2,y+0,y+1,y+2,y+3,y+3,y+4,y+5,y+3,y+6,y+10,y+3,y+6,y+3,y+4,y+5,y+0,y+1,y+2,y+3,y+2,y+2,y+0,y+1,y+2,y+3,y+-1,y+0,y+2,y+3,y+4,y+5,y+0,y+1,y+2,y+3,y+4,y+6,y+10,y+0,y+1,y+2,y+3,y+4,y+6,y+-1,y+0,y+2,y+3,y+4,y+5,y+0,y+1,y+2,y+3,y+2,y+2,y+1,y+2,y+3,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+-2,y+0,y+1,y+2,y+3,y+4,y+6,y+10,y+-2,y+0,y+1,y+2,y+3,y+4,y+6,y+-2,y+-1,y+0,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+2,y+2,y+1,y+2,y+3,y+1,y+2,y+4,y+0,y+1,y+2,y+3,y+4,y+5,y+0,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+4,y+1,y+2,y+3,y+2,y+1,y+2,y+3,y+1,y+4,y+0,y+1,y+2,y+4,y+5,y+0,y+1,y+4,y+5,y+1,y+4,y+1,y+2,y+3,y+2,y+1,y+2,y+3,y+1,y+2,y+4,y+1,y+2,y+4,y+1,y+2,y+3,y+2,y+0,y+2,y+3,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+2,y+3,y+2,y+3,y+2,y+3,y+2,y+2,y+-2,y+-1,y+0,y+2,y+2,y+-2];
 var Z=[z,z+-43,z+-23,z+-22,z+-20,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-20,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-43,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-5,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-20,z+-22,z+-22,z+-21,z+-21,z+-21,z+-20,z+-22,z+-21,z+-21,z+-20,z+-22,z+-21,z+-21,z+-20,z+-39,z+-22,z+-22,z+-21,z+-21,z+-21,z+-20,z+-22,z+-22,z+-21,z+-21,z+-21,z+-20,z+-20,z+-23,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-23,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-24,z+-24,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-25,z+-24,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-18,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-27,z+-27,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-41,z+-40,z+-39,z+-38,z+-37,z+-36,z+-35,z+-34,z+-33,z+-32,z+-31,z+-30,z+-29,z+-28,z+-27,z+-27,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-43,z+-42,z+-41,z+-40,z+-39,z+-38,z+-37,z+-36,z+-35,z+-34,z+-33,z+-32,z+-31,z+-30,z+-29,z+-28,z+-27,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-15,z+-14,z+-13,z+-12,z+-11,z+-10,z+-9,z+-8,z+-7,z+-6,z+-5,z+-4,z+-3,z+-2,z+-1,z+0,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-16,z+-15,z+-14,z+-13,z+-12,z+-11,z+-10,z+-9,z+-8,z+-7,z+-6,z+-5,z+-4,z+-3,z+-2,z+-30,z+-29,z+-29,z+-29,z+-28,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-19,z+-19,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-30,z+-29,z+-29,z+-29,z+-28,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-19,z+-19,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-15,z+-14,z+-14,z+-14,z+-13,z+-30,z+-29,z+-29,z+-29,z+-28,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-19,z+-19,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-15,z+-14,z+-14,z+-14,z+-13,z+-29,z+-28,z+-28,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-15,z+-15,z+-14,z+-29,z+-28,z+-28,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-15,z+-15,z+-14,z+-32,z+-30,z+-29,z+-29,z+-29,z+-28,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-15,z+-14,z+-14,z+-14,z+-13,z+-30,z+-29,z+-29,z+-29,z+-28,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-15,z+-14,z+-14,z+-14,z+-13,z+-30,z+-29,z+-29,z+-29,z+-28,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-15,z+-14,z+-14,z+-14,z+-13,z+-30,z+-29,z+-29,z+-29,z+-28,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-15,z+-14,z+-14,z+-14,z+-13,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-15,z+-14,z+-14,z+-14,z+-13,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-15,z+-14,z+-14,z+-13,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-27,z+-27,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-16,z+-16,z+-26,z+-26,z+-26,z+-26,z+-25,z+-25,z+-25,z+-25,z+-24,z+-24,z+-24,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-18,z+-18,z+-17,z+-17,z+-17,z+-17,z+-26,z+-26,z+-25,z+-25,z+-24,z+-24,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-17,z+-17,z+-25,z+-24,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-18,z+-25,z+-25,z+-24,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-18,z+-18,z+-25,z+-24,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-21,z+-21,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-18,z+-25,z+-24,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-19,z+-18,z+-25,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-18,z+-25,z+-24,z+-24,z+-24,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-19,z+-19,z+-19,z+-18,z+-24,z+-24,z+-24,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-19,z+-19,z+-19,z+-24,z+-23,z+-23,z+-23,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-20,z+-20,z+-20,z+-19,z+-40,z+-23,z+-23,z+-22,z+-22,z+-22,z+-22,z+-21,z+-21,z+-21,z+-21,z+-20,z+-20,z+-22,z+-22,z+-21,z+-21,z+-22,z+-21,z+0,z+0,z+0,z+-22,z+-21,z+0];
 var I=[0,0,35,44,35,35,35,24,24,24,35,35,35,35,24,24,24,35,35,35,35,44,24,35,35,35,35,0,35,24,24,98,24,35,35,35,44,24,35,35,35,35,35,24,24,24,44,35,35,35,35,24,24,24,24,24,35,24,44,35,35,24,24,24,44,35,24,24,24,44,35,0,35,24,35,35,24,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,0,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,44,35,35,35,44,35,35,35,35,35,35,35,35,35,35,24,35,35,35,35,24,35,35,35,35,35,35,35,35,35,35,35,35,35,44,35,35,35,35,44,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,24,35,35,24,35,35,35,35,35,35,35,35,85,35,35,35,35,35,35,35,35,35,35,24,1,20,35,24,1,20,35,35,35,35,35,35,35,35,35,35,85,35,35,85,85,35,35,35,35,35,35,35,35,1,1,20,35,35,35,43,43,20,35,35,35,43,43,20,35,35,35,35,35,1,1,20,35,35,35,35,35,35,35,85,85,35,35,85,85,35,35,35,35,85,35,35,1,1,20,20,35,44,35,20,35,35,44,35,20,35,35,35,35,1,1,20,35,35,35,35,35,85,35,35,85,85,35,35,35,35,35,35,35,35,1,1,35,20,35,35,35,35,20,85,42,101,35,44,20,20,35,44,20,35,35,35,35,35,35,20,35,35,35,35,35,1,1,35,35,35,35,35,35,35,35,35,35,35,35,54,44,35,35,43,43,43,35,20,35,44,44,35,35,35,35,44,44,35,35,35,35,35,43,98,43,35,35,35,35,35,54,44,35,35,35,35,35,35,35,35,35,35,35,35,35,35,54,24,24,35,35,35,35,35,98,98,98,24,35,35,35,64,64,44,24,35,35,35,35,98,98,98,24,35,35,35,35,35,98,98,98,24,35,35,35,35,54,24,24,35,35,54,35,35,35,35,65,65,65,65,35,35,35,35,35,35,35,24,24,44,35,35,24,24,24,44,35,65,65,65,65,65,24,35,35,35,24,35,35,35,35,35,24,24,24,35,35,35,35,35,35,24,24,24,35,35,35,35,24,24,24,44,35,35,24,24,44,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,24,24,20,35,35,35,20,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,24,102,35,35,35,35,35,35,35,54,35,35,35,35,54,20,35,35,24,24,20,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,24,24,20,35,35,35,20,35,35,35,68,35,35,35,35,35,35,35,98,49,35,35,24,102,24,35,35,98,49,35,35,35,35,35,35,35,35,20,35,35,24,24,20,35,35,35,35,35,35,35,35,35,35,35,35,35,35,24,35,20,35,35,20,35,35,53,35,35,35,35,35,35,35,98,49,35,35,24,102,24,35,35,98,49,35,35,35,35,35,35,35,20,35,35,35,24,35,20,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,24,24,20,35,35,20,35,35,68,35,35,35,35,35,35,35,35,35,35,24,24,24,35,35,35,35,35,35,35,35,35,35,20,35,35,35,24,24,20,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,41,41,41,41,41,35,35,35,35,35,35,35,35,35,35,35,35,35,35,20,35,35,35,35,35,20,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,41,41,41,41,41,35,35,35,35,35,35,35,35,35,35,20,35,35,35,98,35,35,35,35,35,35,35,98,35,35,35,35,35,35,20,35,35,35,35,35,35,35,35,35,35,35,35,155,155,155,155,155,41,41,41,41,41,35,35,35,35,35,35,35,35,35,35,35,35,35,35,20,35,35,24,35,35,20,35,35,24,35,35,35,35,35,35,35,35,35,35,35,35,35,35,155,155,155,155,155,49,49,101,49,35,35,49,35,35,66,35,35,35,35,35,35,35,35,35,35,35,35,35,35,24,24,35,35,35,35,35,35,24,24,35,35,35,35,35,35,35,35,35,35,35,49,35,35,66,49,35,49,101,49,49,49,101,49,35,35,49,35,35,66,35,35,35,35,35,35,35,35,35,35,35,35,35,24,24,98,24,35,35,35,35,35,24,24,98,24,35,35,35,35,35,35,35,35,35,35,49,35,35,66,49,35,49,101,49,0,41,41,41,41,41,35,35,35,35,35,35,66,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,24,24,98,35,35,35,35,35,24,24,98,35,35,35,35,35,35,35,35,35,35,35,35,35,35,66,35,35,155,155,155,155,155,41,41,41,41,41,35,35,35,35,35,35,66,35,35,35,35,35,35,35,35,35,35,35,35,35,35,64,64,35,35,35,24,24,98,35,35,35,35,24,24,98,35,35,35,35,35,54,68,35,35,35,35,54,35,35,35,35,35,35,66,35,35,155,155,155,155,155,35,35,35,35,35,35,35,35,35,35,35,35,35,24,24,44,35,35,35,54,44,35,24,24,35,114,114,35,24,24,24,24,44,35,114,114,35,24,24,24,24,44,35,24,102,24,24,35,35,35,24,24,24,35,35,24,24,44,35,35,35,35,35,35,22,22,22,22,22,35,35,35,35,35,35,35,35,35,35,35,35,65,65,96,35,24,102,44,35,35,35,35,24,35,24,35,114,114,35,24,44,35,114,114,35,24,44,35,24,35,35,35,54,24,65,65,96,35,24,102,44,35,35,35,35,35,35,35,49,49,49,49,49,35,35,35,35,35,35,35,35,35,35,24,24,44,35,35,35,54,24,35,24,35,112,112,35,35,35,35,44,35,112,112,35,35,35,35,44,35,24,35,35,35,54,24,35,35,35,35,24,24,44,35,35,35,35,35,35,101,101,49,101,101,35,35,35,35,35,35,35,35,24,24,44,35,35,35,35,24,24,24,35,24,35,57,57,35,24,44,35,57,57,35,54,35,44,35,54,24,35,35,35,35,24,24,24,35,35,24,24,44,35,35,35,35,35,35,101,101,101,101,35,35,35,35,35,35,35,24,35,35,24,24,24,54,44,35,35,35,35,24,24,35,112,112,35,35,65,65,65,65,65,44,35,112,112,35,35,35,35,35,24,24,44,35,35,35,35,24,24,35,35,24,24,24,54,44,35,24,35,35,35,35,35,35,35,35,35,35,35,35,35,24,35,35,35,24,24,35,24,35,35,35,35,24,24,35,114,114,35,35,43,35,114,114,35,54,50,35,50,43,35,35,35,35,24,24,35,35,24,24,35,24,35,24,35,35,35,35,35,35,35,35,35,35,35,35,35,35,24,35,35,35,24,24,24,24,35,35,35,35,24,35,24,20,35,35,35,107,20,35,35,54,35,85,20,35,35,35,35,24,35,24,20,35,35,24,24,24,24,35,24,35,35,35,35,35,35,35,35,35,35,35,35,35,24,35,35,35,24,24,24,24,35,35,35,35,24,35,24,20,35,35,35,35,35,68,20,35,35,35,35,53,35,53,20,35,35,35,35,24,35,24,20,35,35,24,24,24,24,35,35,24,35,35,35,35,35,35,35,35,35,35,35,35,24,24,35,35,50,35,24,35,24,20,35,35,35,35,35,35,20,35,35,35,35,53,35,35,20,35,35,50,35,24,35,24,20,35,35,35,24,24,35,35,35,35,35,35,35,35,35,35,35,24,24,35,35,35,24,20,35,35,35,35,35,24,20,35,35,24,24,35,35,35,35,35,35,35,35,35,35,35,35,24,20,35,35,64,64,20,35,35,35,35,20,35,24,20,35,35,35,35,35,35,35,35,35,35,35,50,24,20,35,20,35,35,20,50,24,20,35,35,35,35,35,35,35,35,35,35,35,35,35,35,24,20,35,35,35,35,68,20,35,35,35,35,35,53,20,35,35,35,35,24,20,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,24,20,35,35,35,35,35,35,20,35,35,35,35,35,35,35,20,35,35,35,35,35,35,24,20,35,35,35,35,35,35,35,35,35,35,24,35,35,35,35,24,20,35,35,35,35,24,20,35,35,24,35,35,35,35,35,35,35,35,24,35,35,50,24,44,35,35,24,44,35,24,35,35,35,35,35,35,24,35,54,24,35,54,24,35,35,24,35,0,35,24,35,35,24,44,35,35,24,44,35,24,35,24,35,24,101,101,57,57,0,101,101,0];
 var D=[0,0,0,1,0,0,15,2,2,2,2,15,0,15,2,2,2,2,15,15,15,1,2,15,15,15,15,0,15,2,2,3,2,15,15,15,1,2,15,15,15,15,15,2,2,2,1,15,15,2,15,2,2,2,2,2,15,2,1,15,15,2,2,2,1,15,2,2,2,1,15,0,15,2,15,15,2,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,0,15,15,15,15,15,15,15,15,15,15,15,14,15,14,15,15,15,15,15,15,15,14,15,14,15,15,15,1,15,15,15,1,15,14,14,15,14,14,15,15,15,15,2,15,15,15,15,2,15,14,14,15,14,14,15,15,15,15,15,15,15,1,15,15,15,15,1,15,15,15,15,15,14,14,14,14,15,0,15,15,0,15,2,0,15,2,15,15,0,15,15,15,14,14,0,14,14,14,14,15,0,15,15,9,15,2,0,0,15,2,0,0,15,15,0,15,15,15,14,14,14,14,0,14,14,0,0,14,14,14,14,15,0,15,15,0,0,0,15,0,15,5,5,0,15,0,15,5,5,0,15,15,0,15,15,0,0,0,15,14,15,15,14,14,14,0,0,14,14,0,0,14,15,15,14,0,15,15,0,0,0,0,15,5,1,0,15,15,5,1,0,15,15,0,15,0,0,0,15,14,15,15,14,0,14,14,0,0,14,14,14,14,15,15,15,15,0,0,14,0,0,15,0,3,0,0,0,0,15,5,0,0,15,5,0,15,15,6,15,0,4,0,15,15,15,15,15,0,0,14,14,14,14,14,14,14,14,14,15,15,15,2,13,14,15,5,5,5,14,0,15,5,13,14,14,15,15,5,13,14,14,15,15,15,5,0,5,14,15,15,15,15,3,13,14,14,14,14,14,0,14,14,0,15,15,0,15,15,2,2,2,0,15,15,15,15,0,0,0,2,0,15,15,2,8,9,2,14,0,15,15,0,0,0,2,14,15,0,15,15,0,0,0,2,15,0,15,15,3,2,2,0,15,2,15,0,14,14,2,2,2,2,0,14,14,14,14,15,0,2,2,1,15,11,2,2,2,1,15,5,5,5,5,5,2,14,15,15,2,14,14,14,15,15,2,2,2,14,14,14,15,15,15,2,2,2,14,15,15,12,2,2,2,1,15,0,2,2,1,0,14,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,14,14,15,0,0,0,14,14,14,15,14,0,2,2,0,15,15,15,0,15,15,15,14,15,15,15,4,12,14,14,14,15,15,15,2,0,0,14,14,14,15,15,15,5,14,15,15,15,5,0,14,0,2,2,0,0,0,0,14,14,14,15,14,14,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,14,14,15,14,14,14,14,15,15,15,2,2,0,15,15,15,0,15,15,15,4,14,15,15,15,4,14,14,3,0,15,15,2,0,2,14,14,3,0,15,15,3,3,14,15,15,15,0,15,15,2,2,0,14,14,14,14,14,14,14,14,14,14,14,14,15,15,2,2,0,15,15,0,15,15,3,14,15,15,15,4,14,14,3,0,15,15,2,0,2,14,14,3,0,15,15,3,14,15,15,15,0,15,15,15,2,3,0,15,14,14,14,14,15,14,14,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,14,14,14,14,14,14,15,15,2,2,0,15,15,0,15,15,5,14,15,15,15,14,14,14,15,15,15,2,2,2,14,14,14,15,15,15,14,15,15,15,0,15,15,15,2,2,0,15,14,14,14,14,15,14,14,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,0,0,0,0,0,14,14,14,14,0,14,15,15,15,15,15,15,14,15,0,15,14,14,14,15,0,15,14,14,14,15,15,14,15,15,15,15,14,14,0,14,14,14,0,0,0,0,0,14,14,14,14,11,14,15,15,15,15,0,15,14,15,3,0,0,0,15,14,14,15,3,0,0,0,15,14,14,0,15,14,15,15,15,15,14,14,12,14,14,14,0,0,0,0,0,0,0,0,0,0,14,14,14,14,0,14,15,15,15,15,15,15,14,15,0,0,15,2,14,15,0,0,15,2,14,15,15,14,15,15,15,15,14,14,0,14,14,14,0,0,0,0,0,0,0,0,0,14,14,0,14,14,1,15,15,2,15,15,6,15,15,14,15,15,0,0,15,2,2,14,15,15,0,0,15,2,2,14,15,15,14,15,15,6,15,15,3,14,0,14,14,1,0,14,0,0,0,0,0,0,0,14,14,0,14,14,1,15,15,15,15,0,15,15,0,14,15,15,0,15,2,2,0,2,14,15,15,0,15,2,2,0,2,14,15,15,3,14,15,15,15,15,14,0,14,14,1,0,14,0,0,0,0,0,0,0,0,0,14,14,14,14,14,14,1,15,15,5,5,0,15,15,5,5,0,15,10,15,4,15,15,15,2,2,0,14,14,15,15,15,2,2,0,14,14,15,10,15,3,15,15,15,15,14,14,14,14,1,14,14,0,0,0,0,0,0,0,0,0,0,14,14,14,14,14,14,1,15,15,5,5,0,15,0,15,5,5,0,15,15,15,2,8,4,15,15,2,2,0,14,14,15,15,2,2,0,14,14,15,15,15,4,3,3,15,0,15,4,15,15,14,14,14,14,1,14,14,0,0,0,0,0,0,0,0,0,0,14,14,14,14,14,14,15,15,2,2,1,15,15,15,5,1,15,2,2,15,6,2,15,2,2,2,2,1,15,7,3,15,2,2,2,2,1,15,2,0,2,2,15,15,15,2,2,2,15,15,2,2,1,14,14,14,14,14,14,0,0,0,0,0,0,0,0,0,0,14,14,14,14,14,14,14,3,3,2,15,2,0,1,15,15,15,0,2,15,2,15,6,2,15,2,1,15,7,3,15,2,1,15,2,15,15,15,2,2,2,2,2,15,2,0,1,14,14,14,14,14,14,14,0,0,0,0,0,14,14,14,14,14,14,15,15,15,15,2,2,1,15,15,15,3,2,15,2,15,0,0,0,0,15,0,1,15,0,0,0,0,15,0,1,15,2,15,15,15,2,2,15,15,15,15,2,2,1,14,14,14,14,14,14,0,0,0,0,0,14,14,14,14,14,14,15,15,2,2,1,15,15,15,15,2,2,2,15,2,15,0,0,15,2,1,15,0,0,15,4,9,1,15,4,2,15,15,15,15,2,2,2,15,15,2,2,1,14,14,14,14,14,14,0,0,0,0,14,14,14,14,14,14,15,2,15,15,2,2,2,2,1,15,15,15,15,2,2,15,0,0,0,15,3,3,3,3,3,1,15,0,0,0,15,15,15,15,2,2,1,15,15,15,15,2,2,15,15,2,2,2,3,1,15,2,14,14,14,14,14,14,14,14,14,14,14,14,15,2,0,15,15,2,2,0,2,15,15,15,0,2,2,15,5,1,15,15,1,15,5,1,15,2,4,15,1,1,15,15,15,0,2,2,15,15,2,2,0,2,15,2,0,14,14,14,14,14,14,14,14,14,14,14,14,15,2,1,15,15,2,2,2,2,15,15,15,15,2,0,2,0,15,15,15,1,0,15,15,2,15,0,0,15,15,15,15,2,0,2,0,15,15,2,2,2,2,15,2,1,14,14,14,14,14,14,14,14,14,14,12,15,2,0,15,15,2,2,2,2,15,15,15,15,2,0,2,0,15,15,15,15,15,2,0,15,15,15,15,2,15,1,0,15,15,15,15,2,0,2,0,15,15,2,2,2,2,11,15,2,0,14,14,14,14,14,14,14,5,15,15,14,2,2,15,15,2,15,2,0,2,0,15,15,15,15,15,3,0,15,15,15,15,2,15,4,0,15,15,2,15,2,0,2,0,15,15,14,2,2,14,5,14,14,14,15,15,15,14,15,15,2,2,15,15,15,2,0,15,15,15,15,15,2,0,15,15,2,2,15,15,15,14,14,12,14,15,15,15,14,15,2,0,15,15,0,8,0,15,15,15,15,0,15,2,0,15,15,15,14,11,14,14,15,15,15,14,3,2,0,15,0,15,15,0,4,2,0,15,15,15,14,14,14,15,15,15,14,0,0,15,15,2,0,15,15,15,15,2,0,15,15,15,15,15,1,0,0,0,15,15,2,0,15,15,15,14,14,14,15,15,14,0,0,15,15,15,15,2,0,15,15,15,15,15,2,0,1,15,15,15,15,15,2,0,0,0,15,15,15,15,2,0,15,15,14,14,14,15,0,14,15,0,2,15,15,15,0,2,0,15,15,15,0,2,0,15,0,2,15,0,14,14,5,14,14,15,2,15,15,5,2,1,15,15,2,1,15,2,5,14,14,14,15,15,2,15,4,2,15,4,2,15,15,2,14,0,15,2,15,15,2,1,15,15,2,1,15,2,15,2,15,2,0,0,0,0,0,0,0,0];
  for(n=0;n<49324+1;n++){
   setTile(X[n], Y[n], Z[n], I[n], D[n]);
  }
}

function Helicopter30(x,y,z){
 var X=[x,x+-1,x+0,x+0,x+0,x+1,x+1,x+2,x+2,x+3,x+3,x+4,x+4,x+4,x+4,x+4,x+4,x+5,x+5,x+5,x+5,x+5,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+9,x+9,x+9,x+9,x+9,x+10,x+10,x+10,x+10,x+10,x+10,x+11,x+11,x+12,x+12,x+13,x+13,x+14];
 var Y=[y,y+-2,y+-2,y+-1,y+0,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+-2,y+-2,y+-1,y+-2,y+1,y+-2,y+2,y+-2,y+-1,y+1,y+-2,y+-2,y+-1,y+2,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+1,y+-2,y+-1,y+0,y+-1,y+-1,y+-1,y+-1,y+1,y+1,y+-2,y+-1,y+1,y+-2,y+-1,y+1,y+-2,y+-1,y+1,y+-2,y+-1,y+0,y+1,y+-2,y+-1,y+0,y+1,y+-2,y+-1,y+0,y+1,y+2,y+-2,y+-1,y+0,y+2,y+-2,y+-1,y+0,y+2,y+-2,y+-1,y+0,y+2,y+-2,y+-1,y+2,y+-2,y+-1,y+2,y+-1,y+2,y+-1,y+2,y+-1,y+-1,y+0,y+-1,y+0,y+1,y+-2,y+-2,y+-1,y+2,y+-2,y+-1,y+0,y+-2,y+-1,y+0,y+1,y+-2,y+-1,y+0,y+-1,y+-1,y+-1,y+-1,y+-2,y+2,y+-2,y+-1,y+1,y+2,y+-2,y+-2,y+-1,y+-2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+6];
 var Z=[z,z+0,z+0,z+0,z+0,z+6,z+12,z+6,z+12,z+7,z+11,z+7,z+8,z+9,z+9,z+10,z+11,z+8,z+8,z+9,z+9,z+10,z+7,z+8,z+8,z+8,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+12,z+13,z+14,z+16,z+2,z+3,z+4,z+4,z+4,z+5,z+5,z+5,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+14,z+14,z+14,z+15,z+15,z+16,z+16,z+17,z+18,z+18,z+19,z+19,z+19,z+7,z+8,z+8,z+8,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+12,z+13,z+14,z+16,z+8,z+8,z+9,z+9,z+10,z+7,z+8,z+9,z+9,z+10,z+11,z+7,z+11,z+6,z+12,z+6,z+12,z+20];
 var I=[0,0,57,57,0,44,44,44,44,44,44,44,35,35,126,35,44,107,44,107,126,44,126,126,126,44,134,35,126,135,35,126,44,126,67,44,126,126,126,126,44,44,135,126,44,35,126,44,35,20,44,35,20,126,44,35,35,126,44,35,35,101,101,101,35,35,126,44,35,35,126,44,126,35,126,44,126,35,44,126,35,44,5,44,35,44,35,126,126,126,35,134,126,126,126,44,135,35,126,135,35,126,44,126,67,44,126,126,126,126,107,44,107,126,44,44,35,35,126,35,44,44,44,44,44,44,44,0];
 var D=[0,0,0,0,0,0,0,0,0,0,0,0,7,7,1,7,0,3,0,3,1,0,10,10,1,0,6,13,1,4,13,1,0,10,4,3,2,1,1,10,0,0,6,2,0,13,2,0,13,0,0,13,0,1,0,13,13,1,0,13,13,0,0,0,13,13,1,0,13,13,1,0,9,2,2,0,9,13,0,9,13,0,1,0,13,0,13,9,1,10,2,2,9,10,2,0,6,13,2,5,13,2,0,10,5,3,2,2,1,9,1,0,1,2,0,0,7,7,1,7,0,0,0,0,0,0,0,0];
  for(n=0;n<3024+1;n++){
   setTile(X[n], Y[n], Z[n], I[n], D[n]);
  }
}