# Hypixel JavaScript API
An easy-to-use Hypixel API Wrapper for Node.js.
Fully made and coded with ❤ by `MineBlock64` !

## Install
```npm i hypixel-api-nodejs```

## Use
To use the commands, you need an API key, which can be obtained by typing */api new* in the Hypixel server.
The datas returned by the function is a JavaScript Object already parsed that can be immediatly used.

Get player informations from the In-Game Name:
```javascript
var player = hypixel.getPlayerByName(key, ign);
```

Get player informations from the UUID:
```javascript
var player = hypixel.getPlayerByUuid(key, uuid);
```

Get guild informations from its name:
```javascript
var guild = hypixel.getGuildByName(key, name);
```

Get guild informations from its ID:
```javascript
var guild = hypixel.getGuildById(key, id);
```

Get guild informations from a members' UUID:
```javascript
var guild = hypixel.getGuildByPlayer(key, uuid);
```

Get player's friends from its In-Game Name:
```javascript
var friends = hypixel.getFriendsByName(key, ign);
```

Get player's friends from its UUID:
```javascript
var friends = hypixel.getFriendsByUuid(key, uuid);
```

Get informations about your own API key:
```javascript
var mykey = hypixel.getKeyInformations(key);
```

Get leaderboards of every mini-games:
```javascript
var leaderboard = hypixel.getLeaderboards(key);
```

Get informations about every boosters currently active on the network:
```javascript
var boosters = hypixel.getBoosters(key);
```

Get session informations from player's UUID:      (WARNING: The endpoint of this is going to be deprecated as said on the Hypixel API GitHub)
```javascript
var session = hypixel.getSession(key, uuid);
```


## Examples

```javascript
const hypixel = require("hypixel-api-nodejs");
var key = '';   //Your own api key

var player = hypixel.getPlayerByName(key, 'MineBlock64');   //Retrieve JavaScript Object from request
var lastlogin = player.player.lastLogin;   //Get player's last connection on the server
var date = new Date(lastlogin);   //Milliseconds to date
console.log(date.toString());
```

```javascript
const hypixel = require("hypixel-api-nodejs");
var key = '';   //Your own api key
var days = 0;

var guild = hypixel.getGuildByName(key, 'The+Moon');   //Spaces must be set as "+" or "%2B" depending on your encoding system
var exp = guild.guild.members[0].expHistory;   //Get selected members' experience of this week

for(i = 0; i < exp.length; i++) {
	console.log("Experience " + days + " ago:  " + exp[i]);
	days++;
}
```

```javascript
const hypixel = require("hypixel-api-nodejs");
var key = '';   //Your own api key

var player = hypixel.getPlayerByUuid(key, 'da8ac1c348c04dd695df800c29fbddc3');   //Retrieve JavaScript Object from request
var mm = player.player.stats.MurderMystery;   //Get player's Murder Mystery Statistics

console.log(mm.wins);   //Total Murder Mystery wins
console.log(mm.deaths_mountain_MURDER_CLASSIC);   //Total deaths amount on the Moutain map in the Classic mode
console.log(mm.quickest_murderer_win_time_seconds_transport);   //Return the quickest time as murderer on the Transport map in seconds
console.log(mm.packages);   //Return an array of every items/favorite maps this player has
console.log(mm.wasSpecialRoleLastGame);   //Return a boolean; true if the player has got a special role (Murderer/Detective) the current or last game played; false if the player was Innocent
console.log(mm.suicides);   //Total suicides in the game
```

```javascript
const hypixel = require("hypixel-api-nodejs");
var key = '';   //Your own api key

var mykey = hypixel.getKeyInformations(key);   //Retrieve JavaScript Object from request
console.log(mykey.record.totalQueries);   //Display the total amount of time your key has been used to make a request
```

```javascript
const hypixel = require("hypixel-api-nodejs");
var key = '';   //Your own api key
var position = 1;

var leaderboards = hypixel.getLeaderboards(key);   //Retrieve JavaScript Object from request
var mmlb = leaderboards.leaderboards.MURDER_MYSTERY[0].leaders;   //Fetching top 15 overall leaders of Murder Mystery

for(i = 0; i < mmlb.length; i++) {
	var player = hypixel.getPlayerByUuid(key, mmbl[i]);   //Request player's datas from the UUID
	var ign = player.player.displayName;   //Getting In-Game Name value
	console.log(position + ". " + ign);
	position++;
}

/* Console:
1. BadRoller
2. Gigizu_
3. Li1Sur
4. ViolentCookiez
5. if7ueh7
6. TragicallyTrue
7. Waiting4Hytale
8. iTPcencioh
9. Freakilicious
10. JKRN
11. Nqdine
12. xmasPanPan4044
13. TheFirstOracle
14. MineBlock64
15. YeoWun            */
```
