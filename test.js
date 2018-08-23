
//declare global variables

//Each contains two numbers in this order; early offset and 
//late offset from central time
var easternOffset = [1,1];
var easternCentralOffset = [0,1];
var centralOffset = [0,0];
var centralMountainOffset = [-1,0];
var mountainOffset = [-1,-1];
var mountainPacificOffset = [-2,-1];
var pacificOffset = [-2,-2];
var alaskaOffset = [-3,-3];
var hawaiiOffset = [-4,-4];

var offsetList = [easternOffset, easternCentralOffset, centralOffset, centralMountainOffset,
mountainOffset, mountainPacificOffset, pacificOffset];

var callWindowHours = [8,21];

//the following variables are a list of where
//each state falls into for a timezone
var easternStateList = [];
var easternStateList = [];
var centralStateList = [];
var centralMountainStateList = [];
var mountainStateList = [];
var mountainPacificStateList = [];
var pacificStateList = [];

/* 
this section of variables contains parallel 
arrays of state codes, their corresponding 
full state name, and their corresponding
timezone.
*/
var stateAbbreviations = ["AL",	"AK",	"AZ",	"AR",	"CA",	"CO",	"CT",	"DE",	"FL",	"GA",	"HI",	"ID",	"IL",	"IN",	"IA",	"KS",	"KY",	"LA",	"ME",	"MD",	"MA",	"MI",	"MN",	"MS",	"MO",	"MT",	"NE",	"NV",	"NH",	"NJ",	"NM",	"NY",	"NC",	"ND",	"OH",	"OK",	"OR",	"PA",	"RI",	"SC",	"SD",	"TN",	"TX",	"UT",	"VT",	"VA",	"WA",	"WV",	"WI",	"WY",
];
var stateFullNames = ["Alabama",	"Alaska",	"Arizona",	"Arkansas",	"California",	"Colorado",	"Connecticut",	"Delaware",	"Florida",	"Georgia",	"Hawaii",	"Idaho",	"Illinois",	"Indiana",	"Iowa",	"Kansas",	"Kentucky",	"Louisiana",	"Maine",	"Maryland",	"Massachusetts",	"Michigan",	"Minnesota",	"Mississippi",	"Missouri",	"Montana",	"Nebraska",	"Nevada",	"New Hampshire",	"New Jersey",	"New Mexico",	"New York",	"North Carolina",	"North Dakota",	"Ohio",	"Oklahoma",	"Oregon",	"Pennsylvania",	"Rhode Island",	"South Carolina",	"South Dakota",	"Tennessee",	"Texas",	"Utah",	"Vermont",	"Virginia",	"Washington",	"West Virginia",	"Wisconsin",	"Wyoming",
];
var timeZoneOffset = [centralOffset,	alaskaOffset,	pacificOffset,	centralOffset,	pacificOffset,	mountainOffset,	easternOffset,	easternOffset,	easternCentralOffset,	easternOffset,	hawaiiOffset,	mountainPacificOffset,	centralOffset,	easternCentralOffset,	centralOffset,	centralMountainOffset,	easternCentralOffset,	centralOffset,	easternOffset,	easternOffset,	easternOffset,	easternCentralOffset,	centralOffset,	centralOffset,	centralOffset,	mountainOffset,	centralMountainOffset,	mountainPacificOffset,	easternOffset,	easternOffset,	mountainOffset,	easternOffset,	easternOffset,	centralMountainOffset,	easternOffset,	centralOffset,	mountainPacificOffset,	easternOffset,	easternOffset,	easternOffset,	centralMountainOffset,	easternCentralOffset,	centralMountainOffset,	mountainOffset,	easternOffset,	easternOffset,	pacificOffset,	easternOffset,	centralOffset,	mountainOffset,
];


/*
this section of variables contains parallel
arrays of area codes and the corresponding 
state code. 
*/

var areaCodeList = [907,	205,	251,	256,	334,	659,	938,	479,	501,	870,	480,	520,	602,	623,	928,	209,	213,	310,	323,	341,	369,	408,	415,	424,	442,	510,	530,	559,	562,	619,	626,	627,	628,	650,	657,	661,	669,	707,	714,	747,	752,	760,	764,	805,	818,	831,	858,	909,	916,	925,	935,	949,	951,	303,	719,	720,	970,	203,	475,	860,	959,	202,	302,	239,	305,	321,	352,	386,	407,	561,	689,	727,	754,	772,	786,	813,	850,	863,	904,	927,	941,	954,	229,	404,	470,	478,	678,	706,	762,	770,	912,	808,	319,	515,	563,	641,	712,	208,	217,	224,	309,	312,	331,	447,	464,	618,	630,	708,	730,	773,	779,	815,	847,	872,	219,	260,	317,	463,	574,	765,	766,	812,	930,	316,	620,	785,	913,	270,	364,	502,	606,	859,	225,	318,	337,	504,	985,	339,	351,	413,	508,	617,	774,	781,	857,	978,	227,	240,	301,	410,	443,	667,	207,	231,	248,	269,	278,	313,	517,	586,	616,	679,	734,	810,	906,	947,	989,	218,	320,	507,	612,	651,	661,	763,	952,	314,	417,	557,	573,	636,	660,	816,	975,	228,	601,	662,	769,	406,	252,	336,	704,	743,	828,	910,	919,	980,	984,	701,	308,	402,	531,	603,	201,	551,	609,	732,	848,	856,	862,	908,	973,	505,	575,	957,	702,	725,	775,	212,	315,	332,	347,	516,	518,	585,	607,	631,	646,	680,	716,	718,	845,	914,	917,	929,	934,	216,	220,	234,	283,	330,	380,	419,	440,	513,	567,	614,	740,	937,	405,	539,	580,	918,	458,	503,	541,	971,	215,	267,	272,	412,	445,	484,	570,	610,	717,	724,	814,	835,	878,	787,	939,	401,	803,	843,	854,	864,	605,	423,	615,	629,	731,	865,	901,	931,	210,	214,	254,	281,	325,	346,	361,	409,	430,	432,	469,	512,	682,	713,	737,	806,	817,	830,	832,	903,	915,	936,	940,	956,	972,	979,	385,	435,	801,	276,	434,	540,	571,	703,	757,	804,	802,	206,	253,	360,	425,	509,	564,	262,	274,	414,	534,	608,	715,	920,	304,	681,	307,
];
var correspondingAreaCodeStateList = ["AK",	"AL",	"AL",	"AL",	"AL",	"AL",	"AL",	"AR",	"AR",	"AR",	"AZ",	"AZ",	"AZ",	"AZ",	"AZ",	"CA",	"CA",	"CA",	"CA",	"CA",	"CA",	"CA",	"CA",	"CA",	"CA",	"CA",	"CA",	"CA",	"CA",	"CA",	"CA",	"CA",	"CA",	"CA",	"CA",	"CA",	"CA",	"CA",	"CA",	"CA",	"CA",	"CA",	"CA",	"CA",	"CA",	"CA",	"CA",	"CA",	"CA",	"CA",	"CA",	"CA",	"CA",	"CO",	"CO",	"CO",	"CO",	"CT",	"CT",	"CT",	"CT",	"DC",	"DE",	"FL",	"FL",	"FL",	"FL",	"FL",	"FL",	"FL",	"FL",	"FL",	"FL",	"FL",	"FL",	"FL",	"FL",	"FL",	"FL",	"FL",	"FL",	"FL",	"GA",	"GA",	"GA",	"GA",	"GA",	"GA",	"GA",	"GA",	"GA",	"HI",	"IA",	"IA",	"IA",	"IA",	"IA",	"ID",	"IL",	"IL",	"IL",	"IL",	"IL",	"IL",	"IL",	"IL",	"IL",	"IL",	"IL",	"IL",	"IL",	"IL",	"IL",	"IL",	"IN",	"IN",	"IN",	"IN",	"IN",	"IN",	"IN",	"IN",	"IN",	"KS",	"KS",	"KS",	"KS",	"KY",	"KY",	"KY",	"KY",	"KY",	"LA",	"LA",	"LA",	"LA",	"LA",	"MA",	"MA",	"MA",	"MA",	"MA",	"MA",	"MA",	"MA",	"MA",	"MD",	"MD",	"MD",	"MD",	"MD",	"MD",	"ME",	"MI",	"MI",	"MI",	"MI",	"MI",	"MI",	"MI",	"MI",	"MI",	"MI",	"MI",	"MI",	"MI",	"MI",	"MN",	"MN",	"MN",	"MN",	"MN",	"MN",	"MN",	"MN",	"MO",	"MO",	"MO",	"MO",	"MO",	"MO",	"MO",	"MO",	"MS",	"MS",	"MS",	"MS",	"MT",	"NC",	"NC",	"NC",	"NC",	"NC",	"NC",	"NC",	"NC",	"NC",	"ND",	"NE",	"NE",	"NE",	"NH",	"NJ",	"NJ",	"NJ",	"NJ",	"NJ",	"NJ",	"NJ",	"NJ",	"NJ",	"NM",	"NM",	"NM",	"NV",	"NV",	"NV",	"NY",	"NY",	"NY",	"NY",	"NY",	"NY",	"NY",	"NY",	"NY",	"NY",	"NY",	"NY",	"NY",	"NY",	"NY",	"NY",	"NY",	"NY",	"OH",	"OH",	"OH",	"OH",	"OH",	"OH",	"OH",	"OH",	"OH",	"OH",	"OH",	"OH",	"OH",	"OK",	"OK",	"OK",	"OK",	"OR",	"OR",	"OR",	"OR",	"PA",	"PA",	"PA",	"PA",	"PA",	"PA",	"PA",	"PA",	"PA",	"PA",	"PA",	"PA",	"PA",	"PR",	"PR",	"RI",	"SC",	"SC",	"SC",	"SC",	"SD",	"TN",	"TN",	"TN",	"TN",	"TN",	"TN",	"TN",	"TX",	"TX",	"TX",	"TX",	"TX",	"TX",	"TX",	"TX",	"TX",	"TX",	"TX",	"TX",	"TX",	"TX",	"TX",	"TX",	"TX",	"TX",	"TX",	"TX",	"TX",	"TX",	"TX",	"TX",	"TX",	"TX",	"UT",	"UT",	"UT",	"VA",	"VA",	"VA",	"VA",	"VA",	"VA",	"VA",	"VT",	"WA",	"WA",	"WA",	"WA",	"WA",	"WA",	"WI",	"WI",	"WI",	"WI",	"WI",	"WI",	"WI",	"WV",	"WV",	"WY",
];




/*
	The purpose of this function is to determine
	the timezone offset based on the state
	information passed to this function.
*/
function findTimeZoneOffset(state) {
	"use strict";

	var index;

	for(index = 0; index <= stateFullNames.length; index += 1) {
		if(state === stateFullNames[index]) {
			break;
		}

	}

	return timeZoneOffset[index];


}


/*
	The purpose of this function is to match the full
	state name with the abbreviation passed from the 
	function calling this one.	
*/
function findMatchingStateName(stateCode) {
	"use strict";

	var index;

	for(index = 0; index <= stateAbbreviations.length; index += 1) {
		if(stateCode === stateAbbreviations[index]) {
			break;
		}


	}

	return stateFullNames[index];


}


/*
	The purpose of this function is to determine what
	state the user entered area code belongs to.
*/
function findMatchingState(areaCode) {
	"use strict";
	
	var index;
	var matchingStateName;
	
	for(index = 0; index <= areaCodeList.length; index += 1) {
		if(areaCode === areaCodeList[index]) {
			break;
		}
	};
	
	matchingStateName = findMatchingStateName(correspondingAreaCodeStateList[index]);
	
	return matchingStateName;
}


/*
	The purpose of this function is to take the two given timezone offsets
	and determine which value is the lower of the two and pass that value back.
*/
function determineBestEarlyOffset(valueOne, valueTwo) {
	"use strict";

	var lowest;

	lowest = Math.min(valueOne, valueTwo);

	return lowest;

}

/*
	The purpose of this function is to take the two given timezone offsets
	and determine which value is the higher of the two and pass that value back.
*/
function determineBestLateOffset(valueOne, valueTwo) {
	"use strict";

	var highest;

	highest = Math.max(valueOne, valueTwo);

	return highest;

}

function formatAMPM() {
  var hours = new Date().getHours();
  var minutes = new Date().getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}




/*
	The purpose of this function is to obtain the user entered
	data from the html page and call subsequent functions to 
	find the desired matching data. 
*/
function testMainController() {
	"use strict";
	
	// declare local variables 
	var userEnteredAreaCode;
	var matchingState;
	var userEnteredStateCode;
	var fullStateName;
	var outputElement;
	var currentTimeHours = new Date().getHours();
	var currentTimeMinutes = new Date().getMinutes();
	var timeZoneOffsetForAreaCode;
	var timeZoneOffsetForStateCode;
	var earlyCallTimeOffset;
	var lateCallTimeOffset;

	// get the desired HTML elements including user input fields
	userEnteredAreaCode = document.getElementById("areaCodeId").value;
	userEnteredStateCode = document.getElementById("stateCodeId").value;
	outputElement = document.getElementById("outputElementId");

	//convert the user entered area code into a number
	userEnteredAreaCode = Number(userEnteredAreaCode);

	//call function to find out what state the user entered area code belongs to
	matchingState = findMatchingState(userEnteredAreaCode);

	//call function to match state abbreviation to full state name
	fullStateName = findMatchingStateName(userEnteredStateCode);

	//call function to determine timezone offset for the area code entered
	timeZoneOffsetForAreaCode = findTimeZoneOffset(matchingState);

	//call function to determine timezone offset for the state code entered
	timeZoneOffsetForStateCode = findTimeZoneOffset(fullStateName);

	//call functions to determine which timezone offsets to use
	earlyCallTimeOffset = determineBestEarlyOffset(timeZoneOffsetForAreaCode[0], timeZoneOffsetForStateCode[0]);
	lateCallTimeOffset = determineBestLateOffset(timeZoneOffsetForAreaCode[1], timeZoneOffsetForStateCode[1]);


/*  use this section to override current hours of time for testing...
	currentTimeHours.setHours(7);
	currentTimeHours = currentTimeHours.getHours();
*/


	if(currentTimeHours + earlyCallTimeOffset < callWindowHours[0] || 
		currentTimeHours + lateCallTimeOffset >= callWindowHours[1]) {
		outputElement.innerHTML = "cannot call.";
	} else {
		outputElement.innerHTML = "can call";
	}

console.log(earlyCallTimeOffset);
console.log(lateCallTimeOffset);
console.log(currentTimeHours);












/* 
junk testing
	console.log(19 % 12);

	console.log(19 < 20 ? 12 : 11);
end junk testing
*/



}
