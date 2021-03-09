var css = "/* Base 64 images */\n#fshWorldButtonContainer .huntOn {\n  background-image: url('data:image/gif;base64,R0lGODlhKAAoALMAAD+yQH3Kf7zjvxCfEMvpzur17qzcry+rMDCsMGLAY9vv3k64T5fUmh+lIPr7/gCZACH5BAAAAAAALAAAAAAoACgAAASsEL1Jq704T6m7/2AojmRpnmiqrtQSBA2rDYJjO4mMBfd9YICXcAEoFn+eQs8WAAoDDIFiSRVYGROqwxAaELTVyXSZCx0ESrBNMFlYpY7CwOQFF67PAABZqqvBBHN9X39aXHSEhUsofoo3KY2OgieRhQAqAy8JAAZ/lzo1amUyoWBNoH+nMmlghzKFbDqwOgOKOgC2MriFkyq7njIDRsPEvTrHyMnKy8zHHM0bEQA7');\n  background-size: contain;\n}\n\n#fshWorldButtonContainer .huntOff {\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAABh0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjM2qefiJQAAAVhJREFUWEftl08OQTEQxrkq5xDHkDiDxAUkrEms7IiNFQtWNiTKJxmppm2mpp33IhXNC9qZX7/50+qaTuf1bvELgG0ekK8CSkSoCkrUexew1EDp9Y0ADpZDg8HZnCrg7DA3t/vja/QW/SioGiAUc+Hoc0zJDyDJbj85IeDOOV3PQcBYuIOAo83YICTbyz5o2KcI1tCADdpASD18P9lNg2FmhXh1XCdBEgxACTC20VgesgDhBM5iYQqpaaeArS4BwyYrB7m5RPM4qsK5He5f8pytoG8DHMhY7tm/wZbPhwgQBnNC+opFDJgb0lUxC2BOyGKAuSCLAuaALA4IB9ROqAEj+bnVrALoOvHdYkLA7qmSrUhijT4F0L04VEAom3KGu81aRUFugWCefQNS+9P0V4DYjF1wrQtxBfT1w5QcbETB1Nu6eg5WQIkC0rUqbUYCWQEl6qmdxRLIJyPitjwjlrDgAAAAAElFTkSuQmCC');\n  background-size: contain;\n}\n\n#fshWorldButtonContainer .soundOff {\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHNSURBVHjaYvz//z8DJQAggJgYKAQAAUS0Ad3dnZFtbS1P0cUBAoiFkMaenm7m////Nfz9+7f4379/nO/9/XOAwpsEN258BJIHCCAMA/r7+6wYGCDh8u/ffwag5oXCwsIqQkJCDOw7doCE04B4GUw9QABhGADUcJSVlQ1EMzABPSgsLMbAxsbBIHnyNIPMqzcgJVeAtr+DqQcIIAwD/v37y2BoaMjw8+cvIPsfw5MnTxhEjx1gkHv9muEdCwsD19+/acjqAQIIw4A/f/4yPH78mOHhw0dgAwwePmTQAWr+xMHBMF+Yn6Fn8vQvyOoBAgiLAX8Yvn79wnDv3j0Gx0+fGHS+f2d4AUwri/l5GX79/YcRyAABhBGNP358ZwClLV+g7Xa/fjG8YWRgqP78meED0CCQ99ABQABhuODnz58MYsePMRh9+MjwnpmFYamUOAMXMDSZgBjkJXQAEEAYLkh68HiO9bsPH5j//b++ho/L5fOvH3dlZCQZxMSEGbAle4AAQjEAmEgMJH798gemnNvs//+bNcxduJeBgVH9+7fvbW/fvPuOLaEBBBDYVGT8zs/PHYh50MVTUxOjgfgZujhAADFSmhsBAoji3AgQYAAwuNxkuZyGCwAAAABJRU5ErkJggg==');\n  background-size: 90%;\n  background-repeat: no-repeat;\n  background-color: #D0B074;\n}\n\n#fshWorldButtonContainer .soundOn {\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAI9SURBVHjaYvz//z8DJQAggJgYKAQAAYTTgO7uzsi2tpanhAwACCAWdIGenm7m////Nfz9+7f4379/nNg0PcoqTmH48XOb3LwpzwACiKW/v8+KgQESDv/+/WcAal4oLCysIiQkxHDhwnlMzRmF1dxMf1u+fvtxBsg1BQggFqCGo6ysbCCNDExADwkLizGwsXEwfP78heHnj5+omtMLUoE2b/z153cLD8s/k0duIdkAAcTy799fBkNDQ4afP38BXfCP4cmTJwwPHtxi4OPjY/j1C2HAo9T8FG7Gv7OANlf+/vEzn52dcSLDtx+5AAHE8ufPX4bHjx8zPHz4CGzAjx8/GL5+/Qp0DSPD7z+/wZpfBUbfYeDiTv/7/w8Dw7fv7XJbVzA+svaeCHSNOkAAAQ34A9TwheHevXtAG38xfPnyheHbt28MCgpyDLCwAQJBhu8/gNy/QAN+QERA9M+fDAABxPTjx3cGUFoSFhZiEBDgZwB5CWQACIPYICC2fqkwUIMay9/fII2Vjwwc83i4mRkYvv+8CRBALD+Bpty8eY0B5BKQF6SlJSEJBBiiID4MyO1YNf2RmTsj0NmHWBn/XWb4BbT1x8/JAAHE9PfPb+sf339aAw2C4u93ZWQkGcTEhBnQk7ncqZ3TgLaGsgNTz5dHb8/IPb80FSCAGNEVpaUlMf//978JyCxkYGTgnD17PiNGWhDTyWD49XuT3IebzwACCGwLNpyamhgNxM9wycMwQAAxUpobAQKI4twIEGAA+Mk8nL2QZm8AAAAASUVORK5CYII=');\n  background-size: 90%;\n  background-repeat: no-repeat;\n  background-color: #D0B074;\n}\n\n.fshDot {\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 100%;\n  height: 10px;\n  width: 10px;\n  float: left;\n}\n\n.greenDiamond {\n  background-image: url('data:image/gif;base64,R0lGODlhCQAJAJH/AMDAwAcADAD/RAAAACH5BAEAAAAALAAAAAAJAAkAQAIUhBGnqCEPRUJwGvfslS1yGmmOVQAAOw%3D%3D');\n}\n\n.yellowDiamond {\n  background-image: url('data:image/gif;base64,R0lGODlhCQAJAJH/AMDAwP3/AAcADAAAACH5BAEAAAAALAAAAAAJAAkAQAIUhCGnqBIPQ0JwGvfslS1yGmmOVQAAOw%3D%3D');\n}\n\n.orangeDiamond {\n  background-image: url('data:image/gif;base64,R0lGODlhCQAJAJH/AMDAwP+9AAcADAAAACH5BAEAAAAALAAAAAAJAAkAQAIUhCGnqBIPQ0JwGvfslS1yGmmOVQAAOw%3D%3D');\n}\n\n.offlineDot {\n  background-image: url('data:image/gif;base64,R0lGODlhDgAOAMQAAP///1paWnNzc4SEhK2trbW1tZylpWNra3OEhDE5OWNzc73e3rXW1qXGxpy9vZS1tYSlpXucnHOUlFJra2OEhEpjYxghISk5OVJzczlSUkprayExMTFKShgpKRAhIQAAACH5BAEAAAAALAAAAAAOAA4AQAWGICAChCINxihm2WRKiKJl19YBiBY5zNI8CAztMCJsLJ2Ox7MhqAgViiQioUxoBREHQ3E0GD8rzSK6XDicDNqMdIoKGA1mMsuk3hoKxOuAUDQcGykVGBENC4gOEkJnABxREQ8PEBIKFYEeAAoJGRUTdJc1FgIiAx1mZhtHHQMqIgQCHAGtKiEAOw%3D%3D');\n}\n\n.sevenDayDot {\n  background-image: url('data:image/gif;base64,R0lGODlhDgAOAMQAAP///0JCQoSEhK2trXNrazEpKZyUnDkpMa1rjJxae5RSc3s5WlopQnMxUmMhQjkIIaWUnGNSWiEQGFIhOSEAEL1zlLVrjIxSa3M5UlIYMUoQKSkAEBgACIRrc2tSWgAAACH5BAEAAAAALAAAAAAOAA4AQAV8ICACENZ1xihqj+YsGMZkxUZJgJc1ilUhicbksYmMBhKKksMpDFQQV2PRcLA2T8Bjl0D8FEIiR0TZPM5n2y0LGDA0cJYmJRpkXopEYmG1pTQTCwkVhHtDGwcAGy4LeQoLbw8UYxFmGRkTl0STBCICSqCgEgIqdQQBEaQqIQA7');\n}\n\n.redDot {\n  background-image: url('data:image/gif;base64,R0lGODlhDgAOAMQAAP///62trYyEhL2trUIpKa2UnP9znDEQGP9rjL0hQqUYOXsIIXtSWlIpMf9Sc94xUpQYMa0QMaUIKSkACFIAEHsAGJxCUudSa85CWs45UoRSWnMIGGMAEKVrczkACAAAACH5BAEAAAAALAAAAAAOAA4AQAV7ICAChdV1xSguS5RgWKZAy0YdgBY9juE7sgWHMQocPJSJkhBQFSSJhzQTETYBLYwDYUBcghyPiLKpsFg2z+EKGCgicIk5JXJHHfhHIlKhpCA7PT8YCjUNABVQWg4XhDRJORsLEBAzNDYTHSICFGSeSQcCKiIBDA0MoiohADs%3D');\n}\n";
var modules_ae2173b2 = {};

var css$1 = ".custombutton[disabled] {\n  background: #B8B8B8;\n  pointer-events: none;\n}\n\n#fshWorldPrefs img {vertical-align: text-bottom;}\n.cR .fshFten {margin: 0.5em 0;}\n\n/* Scout Tower Titan Tracker & Super Elite Log */\n.fshTTracker {\n  width: 500px;\n  margin: auto;\n}\n.fshCooldown {\n  color: #640000;\n}\n\n/* New Map */\n/* #missingBuffs {\n  text-align: center;\n  margin: 0 0 4px 0;\n} */\n#fshWorldButtonContainer {\n  float: left;\n  height: 25.6px;\n  display: flex;\n  align-items: center;\n}\n#fshWorldButtonContainer > div:first-child {\n  margin-right: 0.25em;\n}\n\n.fshToggle {display: flex;}\n.fshToggle input {display: none;}\n.fshToggle input ~ label:nth-child(2) {display: none;}\n.fshToggle input ~ label:nth-child(3) {display: block;}\n.fshToggle input:checked ~ label:nth-child(2) {display: block;}\n.fshToggle input:checked ~ label:nth-child(3) {display: none;}\n\n.fshCurveContainer .fshCurveEle {\n  background-position: center center;\n  border: solid 1px #4f3717;\n  border-radius: 2px;\n  box-shadow: 0 0 4px #4f3717;\n  margin-left: 0.25em;\n}\n\n.fshCurveBtn {\n  height: 17px;\n  padding: 0;\n  width: 17px;\n}\n\n.fshCurveLbl {\n  height: 15px;\n  width: 15px;\n}\n\n.fshFsty div {font-size: 70%}\n.fshFten div {font-size: 11px;}\n.fshFten select {\n  font-family: 'Open Sans', Helvetica, Arial, sans-serif;\n  font-size: 11px;\n}\n\n\n/* Settings */\n#fshSettingsTable {border-spacing: 10px;}\n.networkIcon {display: inline-block;}\n.fshHelpTitle {\n  font-weight: bold;\n  color: #FFF380;\n}\n\n/* Advisor */\n.fshSpinnerMsg {\n  align-self: center;\n}\n\n/* Bazaar */\n.bazaarButton {\n  display: inline-block;\n  height: 20px;\n  width: 20px;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n  cursor: pointer;\n}\n.bazaarSelected {\n  display: inline-block;\n  height: 45px;\n  width: 45px;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n}\n\n/* Guild Add/Remove Tags */\n.guildTagSpinner {\n  width: 14px;\n  height: 14px;\n  display: inline-block;\n  vertical-align: middle;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n}\n\n/* Top Lists */\n#fshFindOnlinePlayers {\n  width: 120px;\n  float: right;\n  margin: 0 100px 0 0;\n  padding: 0;\n}\n.fshTopListWrap {\n  width: 190px;\n  display: block;\n}\n.fshTopListSpinner {\n  float: right;\n  margin: 0 160px 0 0;\n}\n\n/* Helper Menu */\n#content {max-width:600px}\n.column {\n  float: left;\n  width: 180px;\n  margin-right: 5px;\n}\n.column h3 {\n  background: #e0e0e0;\n  font: bold 13px Arial;\n  margin: 0 0 5px 0;\n}\n.helperMenuDiv {\n  cursor: default;\n  text-decoration: none;\n  text-align: center;\n  position: absolute;\n  color: black;\n  font-size: 12px;\n  border-radius: 5px;\n  border:3px solid #ccbb77;\n  z-index: 1;\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 100ms linear, visibility 0s linear 100ms;\n}\n.showMenuDiv {\n  opacity: 1;\n  visibility: visible;\n  transition: opacity 100ms linear, visibility 0s linear;\n}\n.helperMenuDiv .a-reply {\n  cursor: pointer;\n  text-decoration: underline;\n}\n.helperMenu {\n  position: absolute;\n  top: 0;\n  left: 0;\n  color: yellow;\n  font-weight: bold;\n  cursor: pointer;\n  text-decoration: underline;\n  z-index: 100100;\n  text-align: center;\n  white-space: nowrap;\n}\n\n/* Quick Links */\n.fshQuickLinks {\n  position: absolute;\n  z-index: 100050;\n  text-align: left;\n  white-space: nowrap;\n  color: black;\n  font-size: 12px;\n  border-radius: 5px;\n  border: 3px solid #ccbb77;\n  width: 100px;\n}\n\n/* Lists */\n.HelperTextLink {\n  color: blue;\n  font-size: x-small;\n  cursor: pointer;\n}\n.HelperTextLink:hover {text-decoration: underline;}\n\n/* Profile*/\n.fastWorn {\n  color: green;\n  font-weight: bold;\n}\n.compDelBtn {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #A0CFEC;\n}\n\n/* General */\n.custombutton.fshHide {display: none;}\n.no-close .ui-dialog-titlebar-close {display: none;}\n.sendLink {\n  cursor: pointer;\n  text-decoration: underline;\n  color: blue;\n}\n.dropLink {\n  cursor: pointer;\n  text-decoration: underline;\n  color: red;\n}\n.fshLink {\n  cursor: pointer;\n  text-decoration: underline;\n}\n.buffLink {cursor: pointer;}\n.fshPoint {cursor: pointer;}\n.smallLink {\n  cursor: pointer;\n  text-decoration: underline;\n  color: blue;\n  font-size: x-small;\n}\n.notLink {\n  color: grey;\n  font-size: x-small;\n}\n.fshMove {cursor: move;}\n\n.pCR a {color: #F7EAC9;}\n\n.fshRed {color: red;}\n.fshBlue {color: blue;}\n.fshGreen {color: green;}\n.fshNavy {color: navy;}\n.fshMaroon {color: maroon;}\n.fshWhite {color: white;}\n.fshGrey {color: grey;}\n.fshLime {color: lime;}\n.fshYellow {color: yellow;}\n.fshPink {color: pink;}\n.fshBrown {color: brown;}\n.fshDarkCyan {color: DarkCyan;}\n.fshOliveDrab {color: OliveDrab;}\n.fshDodgerBlue {color: DodgerBlue;}\n.fshPowderBlue {color: PowderBlue;}\n.fshLightSkyBlue {color: LightSkyBlue;}\n.fshPaleVioletRed {color: PaleVioletRed;}\n.fshRed a {color: red;}\n.fshGreen a {color: green;}\n.fshYellow a {color: yellow;}\n.fshDarkCyan a {color: DarkCyan;}\n.fshOliveDrab a {color: OliveDrab;}\n.fshPaleVioletRed a {color: PaleVioletRed;}\n.fshHeader {background-color: #CD9E4B;}\n.fshBlack {background-color: black;}\n.fshVerySoftOrange {background-color: #e2b960;}\n.fshBtnBox {\n  font-size: x-small;\n  text-align: right;\n}\n.fshBkRed {background-color: red;}\n\n.fshCommon {color: white;}\n.fshRare {color: #3366ff;}\n.fshUnique {color: #cc33ff;}\n.fshLegendary {color: #ffff40;}\n.fshSuper {color: #ff0000;}\n.fshCrystal {color: #6633ff;}\n.fshEpic {color: #009933;}\n\n.fshVMid {vertical-align: middle;}\n.fshCenter {text-align: center;}\n.fshTblCenter {margin: 0 auto;}\n.fshRight {text-align: right;}\n.fshHide {display: none;}\n.fshWearHide {display: none;}\n.fshInline {display: inline;}\n.fshBlock {display: inline-block;}\n.fshNoWrap {white-space: nowrap;}\n.fshBold {font-weight: bold;}\n.fshFixed {position: fixed;}\n.fshRelative {position: relative;}\n.fshXSmall {font-size: x-small;}\n.fshXXSmall {font-size: xx-small;}\n.fshSmall {font-size: small;}\n.fshFloatLeft {float: left;}\n.fshFloatRight {float: right;}\n.fshFlex {display: flex;}\n.fshAdvRank {\n  width: 62px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.fshBreakAll {word-break: break-all}\n\n/* Shoutbox Preview Table */\n.sbpTbl {\n  width: 325px;\n  margin: 0 auto;\n}\n/* Shoutbox Preview Header */\n.sbpHdr {\n  text-align: center;\n  color: #7D2252;\n  background-color: #CD9E4B;\n}\n/* Shoutbox Preview Msg */\n.sbpMsg {\n  width: 325px;\n  display: inline-block;\n  overflow-wrap: break-word;\n  font-size: 11px;\n}\n\n#fshAllyEnemy .fshHide {display: none;}\n#fshAllyEnemy .fshWhite {color: white;}\n#fshAllyEnemy .fshRed {color: red;}\n#fshAllyEnemy .fshDodgerBlue {color: DodgerBlue;}\n#fshAllyEnemy .fshPowderBlue {color: PowderBlue;}\n#fshAllyEnemy .fshLightSkyBlue {color: LightSkyBlue;}\n#fshAllyEnemy .fshPaleVioletRed {color: PaleVioletRed;}\n#fshAllyEnemy .fshPink {color: pink;}\n\n#minibox-guild-members-list .fshGreen {color: green;}\n#minibox-guild-members-list .fshWhite {color: white;}\n#minibox-guild-members-list .fshGrey {color: grey;}\n#minibox-guild-members-list .fshHide {display: none;}\n#minibox-allies-list .fshDodgerBlue {color: DodgerBlue;}\n#minibox-allies-list .fshLightSkyBlue {color: LightSkyBlue;}\n#minibox-allies-list .fshPowderBlue {color: PowderBlue;}\n#minibox-allies-list .fshHide {display: none;}\n\n.fastPray {text-align: center;}\n.fastPray table {\n  float: left;\n}\n.fastPray td {padding: 1px;}\n.fastPray span {\n  cursor: pointer;\n  display: inline-block;\n  height: 16px;\n  width: 16px;\n  background-repeat: no-repeat;\n}\n\n.quickbuffTable {margin: 0 auto;}\n.quickbuffTableHeader {\n  text-align: center;\n  padding: 0 4px;\n  color: orange;\n}\n.quickbuffTableDetail {\n  text-align: center;\n  padding: 0 4px;\n}\n.quickbuffActivate {\n  cursor: pointer;\n  color: red;\n}\n\n#quickbuff .player h1 {float: left;}\n#quickbuff .player p {clear: both;}\n\n.fshBuffOn {color: white; font-size: x-small;}\n.fshLastActivity {color: #cccccc; font-size: x-small;}\n#quickbuff #buff-outer .fshDim span {\n  color: #999999;\n}\n\n.profile-stat-bonus {font-size: x-small;}\n#minibox-enemy {margin: 0 0 10px; overflow: hidden}\n#fshResetEnemy {\n  font-size: xx-small;\n  cursor: pointer;\n  text-decoration: underline;\n}\n.enemy-send-message {\n  cursor: pointer;\n  background-position: -198px -80px;\n}\n.enemy-quickbuff {\n  cursor: pointer;\n  background-position: -210px -80px;\n}\n.enemy-secure-trade {background-position: -222px -80px;}\n.enemy-trade {background-position: -234px -80px;}\n.player-row {white-space: nowrap}\n#fshAllyEnemy .enemy-quick-buff {\n  clear: both;\n  text-align: center;\n  font-size: 11px;\n  margin: 0;\n  padding-top: 5px;\n  color: #F7EAC9;\n  text-decoration: underline;\n  cursor: pointer;\n}\n.enemy-buff-check-on,\n.enemy-buff-check-off {\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  margin: 0 1px 2px 0;\n  vertical-align: bottom;\n  background: transparent url('https://cdn2.fallensword.com/ui/misc/icons.png');\n  cursor: pointer;\n}\n.enemy-buff-check-off {\n  background-position: -246px -80px;\n}\n.enemy-buff-check-on {\n  background-position: -270px -80px;\n}\n\n.fshMoveItem {\n  font-size: xx-small;\n  border: none;\n  height: 11px;\n}\n\n#fshBazaar {font-size: x-small;}\n#fshBazaar #fshBazaarWarning {\n  color: red;\n  font-size: small\n}\n\n/* Relic */\n\n#dialog-relic .fshRelicLeftDiv {\n  width: 100px;\n  margin-right: 10px;\n}\n#dialog-relic .fshRelicMidDiv {\n  width: 160px;\n  margin-right: 10px;\n}\n.fshRelicRightDiv {\n  width: 160px;\n}\n#dialog-relic .fshRelicLowDiv {\n  width: 455px;\n  padding-top: 10px;\n}\n.fshRelicLowDiv a {\n  color: red;\n}\n.relicT th {border-top: 2px black solid;}\n.relicT td {font-size: x-small;}\n.relicT td, .relicT th {text-align: right;}\n.relicS td:nth-child(1) {color: brown;}\n.relicS td:nth-child(1), .relicS th:nth-child(1) {width: 112px;}\n.relicS td:nth-child(2), .relicS th:nth-child(2) {width: 46px;}\n\n/* Online Players */\n.fshImgCntr {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.lvlHighlight {background-color: #4671C8;}\n.lvlGvGHighlight {background-color: #FF9900;}\n\n.fshInvFilter {\n  width: 100%;\n}\n.fshInvFilter th {\n  background-color: #cd9e4b;\n}\n\n#fshInv_filter input {width: 200px}\n\n.fshNumberInput {width: 3em;}\n\n.text-input-wrapper {\n  border: 1px solid;\n  padding: 1px 6px 1px 1px;\n  display: inline-block;\n  background: white;\n}\n.text-input-wrapper input {\n  border: none;\n}\n.text-input-wrapper span {\n  cursor: pointer;\n  color: blue;\n  font-weight: bold;\n}\n\n/* Recipe Manager */\n\n.rmTh {background-color: #ddd;}\n.rmTh th {text-align: center;}\n.rmTr {\n  vertical-align: middle;\n  text-align: center;\n}\n.rmTd {border-bottom: 1px solid #CD9E4B;}\n.rmTd img {margin: 0 auto;}\n.rmItem {\n  display: inline-block;\n  margin: 0 3px;\n}\n.rmItem p {margin: 0;}\n\n/* New World Shop Multi Buy */\n.fshClear {clear: both;}\n\n/* Button as Link */\n.fshBl {\n  background: transparent;\n  border: none;\n  color: blue;\n  cursor: pointer;\n  font-family : inherit;\n  margin: 0;\n  padding: 0;\n  text-decoration: underline;\n  user-select: text;\n}\nbutton::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n.fshBl.fshBls {font-size: 84%;}\n\n/* Create Auction Craft Buttons */\n.fshAC {\n  margin: 10px auto 10px auto;\n  text-align: center;\n}\n\n/* Composing Potion*/\n.fshPot {\n  background-repeat: no-repeat;\n  background-position: center;\n}\n/* Success Msg */\n.fshScs {height: 26px;}\n\n/* New Row */\n.fshNr {\n  background-color: #F5F298;\n}\n/* Old Row */\n.fshOr {\n  background-color: #CD9E4B;\n}\n\n/* AH Quick Search - Category Header */\n.fshQs {\n  font-weight: bold;\n  font-size: large;\n}\n\n/* Quick Extract */\n.qeHead {\n  background-color: #CD9E4B;\n  width: 100%;\n}\n\n/* Find Buffs & Other */\n\n.fshFind {\n  width: 620px;\n  border-collapse: collapse;\n  margin: 0 auto;\n}\n\n.headCell {\n  width: 50%;\n}\n\n.findLabel {\n  text-align: right;\n  color: brown;\n}\n\n.leftLabel {\n  text-align: right;\n  color: brown;\n  width: 30%;\n}\n\n.extraProfile {\n  width: 118px;\n}\n\n.selectOnline {\n  width: 140px;\n}\n\n.disclaim {\n  font-size: xx-small;\n  color: brown;\n  margin-left: 28px;\n  margin-right: 28px;\n}\n\n.buffProg {\n  width: 310px;\n}\n\n.nameCol {\n  width: 120px;\n}\n\n.infoCol {\n  width: 200px;\n}\n\n.fshResult {\n  width: 620px;\n  border-collapse: collapse;\n  margin: 0 auto;\n  border-width: 1px;\n  border-style: solid;\n  border-color: gray black black gray;\n}\n\n.fshResult > tbody > tr > th, .fshResult > tbody > tr > td {\n  padding: 2px;\n  border-width: 1px;\n  border-style: solid;\n  border-color: black gray gray black;\n}\n\n.resAct {\n  color: gray;\n  text-align: right;\n  width: 50%;\n}\n\n.resLbl {\n  color: gray;\n  text-align: right;\n  width: 25%;\n}\n\n.resVal {\n  width: 25%\n}\n\n/* End of Find Buffs & Other */\n\n/* ClearFix */\n.nav-link:after, .nav-level-1:after, .nav-level-2:after {\n  content: '';\n  display: table;\n  clear: both;\n}\n\n/* Stop resizable textareas */\ntextarea {resize: none;}\n\n/* Quick Extract and Inventing results */\n.fshNbrList {list-style: decimal inside;}\n\n/* topbanner-stats */\n#topbanner-stats a {color: #F7EAC9;}\n\n/* Spoils of War */\n#fshScoutTower {\n  height: 21px;\n  width: 21px;\n}\n\n";
var modules_0a74b28e = {};

var css$2 = ".fshFormGroup {background-image: url('https://cdn2.fallensword.com/ui/world/icon_action_formgroup.png');}\n.fshQuickBuff {background-image: url('https://cdn2.fallensword.com/ui/world/icon_action_quickbuff.png');}\n.fshRealmMap {background-image: url('https://cdn2.fallensword.com/ui/world/icon_action_map.png');}\n.fshTempleZero {background-image: url('https://cdn2.fallensword.com/temple/0.png');}\n.fshTempleOne {background-image: url('https://cdn2.fallensword.com/temple/1.png');}\n.fshTempleTwo {background-image: url('https://cdn2.fallensword.com/temple/2.png');}\n.fshTempleThree {background-image: url('https://cdn2.fallensword.com/temple/3.png');}\n.fshOldSpinner {background-image: url('https://cdn2.fallensword.com/ui/world/action_spinner.gif')}\n.fshInnerBg {background-image: url('https://cdn2.fallensword.com/ui/misc/inner_bg.png');}\n.fshJoin {background-image: url('https://cdn2.fallensword.com/ui/world/icon_action_join.png');}\n.fshGold {background-image: url('https://cdn2.fallensword.com/currency/0.png');}\n.fshWiki {background-image: url('https://cdn2.fallensword.com/ui/misc/wiki.png');}\n";
var modules_2331501e = {};

var css$3 = "[data-tooltip] {\n  position: relative;\n  display: inline-block;\n}\n\n[data-tooltip]:before, [data-tooltip]:after {\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%, -12px);\n  z-index: 1000;\n  pointer-events: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  opacity: 0;\n  transition: opacity .35s ease .25s;\n}\n\n[data-tooltip]:before {\n  content: attr(data-tooltip);\n  background: #333;\n  color: #eee;\n  padding: 8px 12px;\n  white-space: nowrap;\n  bottom: 100%;\n  border-radius: 3px;\n  box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.65);\n}\n\n[data-tooltip]:after {\n  content: '';\n  background: transparent;\n  border: 8px solid transparent;\n  border-top-color: #333;\n}\n\n[data-tooltip]:hover:before, [data-tooltip]:hover:after, [data-tooltip]:focus:before, [data-tooltip]:focus:after, [data-tooltip]:active:before, [data-tooltip]:active:after {\n  opacity: 1;\n}\n\n[data-tooltip].tooltip-multiline:before {\n  width: 100vw;\n  max-width: 240px;\n  white-space: normal;\n}\n\n[data-tooltip][class*=\"tooltip-bottom\"]:before, [data-tooltip][class*=\"tooltip-bottom\"]:after {\n  transform: translate(-50%, 12px);\n}\n\n[data-tooltip][class*=\"tooltip-bottom\"]:before {\n  bottom: auto;\n  top: 100%;\n}\n\n[data-tooltip][class*=\"tooltip-bottom\"]:after {\n  bottom: 0;\n  border: 8px solid transparent;\n  border-bottom-color: #333;\n}\n\n[data-tooltip].tooltip-bottom-left:before {\n  transform: translate(-24px, 12px);\n}\n\n[data-tooltip].tooltip-bottom-right:before {\n  left: auto;\n  right: 50%;\n  transform: translate(24px, 12px);\n}\n\n[data-tooltip].tooltip-top-left:before {\n  transform: translate(-24px, -12px);\n}\n\n[data-tooltip].tooltip-top-right:before {\n  left: auto;\n  right: 50%;\n  transform: translate(24px, -12px);\n}\n";
var modules_89f385fc = {};

var css$4 = "/* Mailbox & Crafting & Forging */\n.fshTakeGrid,\n.fshItemGrid {\n  display: grid;\n  grid-gap: 2px;\n  grid-template-columns: repeat(9, 60px);\n  justify-content: center;\n}\n\n.fshItemGrid div,\n.fshTakeGrid div div:nth-child(1) {\n  align-items: center;\n  background: url('https://cdn2.fallensword.com/ui/inventory/2x3.png');\n  display: flex;\n  height: 90px;\n  justify-content: center;\n  width: 60px;\n}\n";
var modules_bf79807f = {};

var css$5 = "/* https://stephanwagner.me/only-css-loading-spinner */\n/* Requires position: relative, absolute or fixed */\n@-webkit-keyframes fshSpinner {\n  to {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@keyframes fshSpinner {\n  to {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n.fshSpinner:before {\n  content: '';\n  box-sizing: border-box;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 20px; /* TODO Find most common values here */\n  height: 20px; /* TODO Find most common values here */\n  margin-top: -10px; /* TODO Find most common values here */\n  margin-left: -10px; /* TODO Find most common values here */\n  border-radius: 50%;\n  border: 2px solid #ccc;\n  border-top-color: #07d;\n  -webkit-animation: fshSpinner .6s linear infinite;\n  animation: fshSpinner .6s linear infinite;\n}\n.fshSpinner64:before {\n  width: 64px;\n  height: 64px;\n  margin-top: -32px;\n  margin-left: -32px;\n  border-width: 4px;\n}\n.fshSpinner12:before {\n  width: 12px;\n  height: 12px;\n  margin-top: -6px;\n  margin-left: -6px;\n}\n.fshSpin12:before {\n  width: 12px;\n  height: 12px;\n}\n.fshComposingSpinner:before {\n  top: 75%;\n}\n";
var modules_0c547ad1 = {};

function fallback(a, b) {
  return a || b;
}

const isArray = (e) => Array.isArray(e);

function isFunction(e) { return typeof e === 'function'; }

function isUndefined(e) { return typeof e === 'undefined'; }

function on(target, type, listener, options) {
  if (target instanceof EventTarget) {
    target.addEventListener(type, listener, options);
  }
}

function parseStack(e) {
  const concatStack = e.stack.replace(/\n +/g, '|');
  if (e.stack.includes(e.message)) {
    return concatStack;
  }
  return `${e.message}|${concatStack}`;
}

function isError(e) {
  if (e.stack) { return parseStack(e); }
  if (e.message) { return e.message; }
  return String(e);
}

function parseError(e) {
  if (e instanceof Error) { return isError(e); }
  return String(e);
}

var calf = {};

function getElementById(id, doc) {
  if (doc) { return doc.getElementById(id); }
  return document.getElementById(id);
}

function insertHtml(parent, where, html) {
  if (parent instanceof Element) {
    parent.insertAdjacentHTML(where, html);
  }
}

function insertHtmlBeforeEnd(parent, html) {
  insertHtml(parent, 'beforeend', html);
}

const timers = {};
let footWrap;

function getFootWrap() {
  if (!footWrap) { footWrap = getElementById('foot-wrap'); }
  return footWrap;
}

function log(text, value) {
  if (getFootWrap()) {
    insertHtmlBeforeEnd(footWrap,
      `<br>${text}: ${value} (${typeof value})`);
  }
}

function time(name) {
  if (name) { timers[name] = performance.now() * 1000; }
}

function timeEnd(name) {
  if (timers[name]) {
    log(name, `${Math.round(performance.now() * 1000
      - timers[name]) / 1000}ms`);
    delete timers[name];
  }
}

function getText(node) {
  if (node instanceof Node) {
    return node.textContent;
  }
}

let thePlayerId;

function playerId() {
  if (!thePlayerId) {
    thePlayerId = Number(
      getText(getElementById('holdtext'))
        .match(/fallensword.com\/\?ref=(\d+)/)[1],
    );
  }
  return thePlayerId;
}

const times = {};
const refAry = ['pagereboot.com', 'refreshthing.com', 'refreshthis.com',
  'lazywebtools.co.uk'];
const urlPatch = [
  [/&m=.*/],
  [/&subcmd=&.*/],
  [/&subcmd2=&.*/],
  [/&[a-z_]+_id=.+/],
  [/&id=.+/],
  [/&target_player=.+/],
  [/&[a-z]+_username=.+/],
  [/\?cmd=auctionhouse.+/, '?cmd=auctionhouse'],
  [/&subcmd=[0-9a-f]{32}/],
  [/&search_active=.+/],
  [/&letter=.+/],
  [/&guild_name=.+/],
  [/&user=.+/],
  [/&[a-z_]*page=.+/],
  [/&prestige=.+/],
  [/&withdraw_amount=.+/],
  [/&amount=.+/],
  [/&tickets=.+/],
  [/&search=.+/],
  [/&target=.+/],
  [/&xcv=[0-9a-f]{32}/],
  [/\?ref=[0-9]+/],
];

let autoRefferer = false;
let haveRefferer = false;

function isAuto() {
  if (!haveRefferer) {
    const referrer = document.referrer
      .match(/^https?:\/\/([^/?#]+)(?:[/?#]|$)/i);
    let docRef;
    if (referrer) { [, docRef] = referrer; }
    autoRefferer = refAry.includes(docRef);
    haveRefferer = true;
  }
  return autoRefferer;
}

function noGa() {
  return isAuto() || isUndefined(window.ga);
}

function start(category, variable, label) {
  if (noGa()) { return; }
  times[`${category}:${variable}:${label}`] = performance.now() * 1000;
}

function sendTiming(category, variable, label) {
  const myTime = Math.round(performance.now() * 1000
    - times[`${category}:${variable}:${label}`]) / 1000;
  if (myTime > 10) {
    ga('fshApp.send', 'timing', category, variable, Math.round(myTime),
      label);
  }
  // eslint-disable-next-line no-unused-labels, no-labels
  betaLbl: { //  Timing output
    log(variable, `${myTime}ms`);
  }
}

function end(category, variable, label) {
  if (noGa()) { return; }
  sendTiming(category, variable, label);
}

function stripExtra(acc, curr) {
  return acc.replace(curr[0], curr[1] || '');
}

function fixupUrl() {
  const origPath = window.location.pathname + window.location.search;
  const page = urlPatch.reduce(stripExtra, origPath);
  ga('fshApp.set', 'screenName', page);
  ga('fsh.set', 'page', page);
}

function setup() {
  if (noGa()) { return; }
  ga('create', 'UA-76488113-1', 'auto', 'fshApp', {
    userId: playerId(),
    siteSpeedSampleRate: 10,
  });
  ga('fshApp.set', 'appName', 'fshApp');
  ga('fshApp.set', 'appVersion', `${calf.fshVer}(${calf.calfVer})`);
  ga('create', 'UA-76488113-2', 'auto', 'fsh', {
    userId: playerId(),
    siteSpeedSampleRate: 10,
  });
  fixupUrl();
  ga('fsh.send', 'pageview');
}

function screenview(funcName) {
  if (noGa()) { return; }
  ga('fshApp.set', 'screenName', funcName);
  ga('fshApp.send', 'screenview');
}

function sendEvent(eventCategory, eventAction, eventLabel) {
  if (noGa()) { return; }
  ga('fshApp.send', 'event', eventCategory, eventAction, eventLabel);
}

function sendException(desc, fatal) {
  // eslint-disable-next-line no-unused-labels, no-labels
  betaLbl: { //  sendException
    // eslint-disable-next-line no-console
    console.log('sendException', desc);
  }
  if (noGa()) { return; }
  ga('fshApp.send', 'exception', {
    exDescription: desc,
    exFatal: fatal,
  });
}

/*
Based on
fiddle.jshell.net/GRIFFnDOOR/r7tvg/
*/

const heap = [null];

function cmp(i, j) {
  return heap[i] && heap[i].priority < heap[j].priority;
}

function swp(i, j) {
  const temp = heap[i];
  heap[i] = heap[j];
  heap[j] = temp;
}

function calcChildIndex(leftHigher, i) {
  if (leftHigher) { return i * 2; }
  return i * 2 + 1;
}

function sink(j) {
  let i = j;
  while (i * 2 < heap.length) {
    const leftHigher = !cmp(i * 2 + 1, i * 2);
    const childIndex = calcChildIndex(leftHigher, i);
    if (cmp(i, childIndex)) { break; }
    swp(i, childIndex);
    i = childIndex;
  }
}

function bubble(j) {
  let i = j;
  while (i > 1) {
    // eslint-disable-next-line no-bitwise
    const parentIndex = i >> 1;
    if (!cmp(i, parentIndex)) { break; }
    swp(i, parentIndex);
    i = parentIndex;
  }
}

function pop() {
  if (heap.length === 1) { return; }
  const topVal = heap[1].data;
  const last = heap.pop();
  if (heap.length > 1) {
    heap[1] = last;
    sink(1);
  }
  return topVal;
}

function push(data, priority) {
  bubble(heap.push({ data, priority }) - 1);
}

function getLength() {
  return heap.length - 1;
}

let paused = true;
const message = 'fshMessage';
let messageHandler;

function taskRunner() {
  if (getLength() === 0) {
    paused = true;
  } else {
    paused = false;
    window.postMessage(message, '*');
  }
}

function popError(fn) {
  if (!isUndefined(fn)) {
    sendException(`pop() was not a function (${typeof fn})`, false);
  }
}

function testPop() {
  const testFn = pop();
  if (isFunction(testFn)) {
    testFn();
  } else { popError(testFn); }
}

function asyncTask() {
  try {
    testPop();
  } catch (e) {
    sendException(parseError(e), false);
  } finally {
    taskRunner();
  }
}

function callback(event) {
  const key = event.data;
  if (typeof key === 'string' && key.indexOf(message) === 0) {
    asyncTask();
  }
}

function initMessageHandler() {
  if (!messageHandler) {
    on(window, 'message', callback);
    messageHandler = true;
  }
}

function devLog(args) {
  if (args && !isArray(args)) {
    // eslint-disable-next-line no-console
    console.log('addTask isArray(args)', isArray(args));
  }
}

function add(priority, fn, args, scope) {
  // eslint-disable-next-line no-unused-labels, no-labels
  devLbl: { //  Not sending args as Array
    devLog(args);
  }
  if (isFunction(fn)) {
    initMessageHandler();
    const scopeGuard = fallback(scope, window);
    const argsGuard = fallback(args, []);
    push(fn.bind(scopeGuard, ...argsGuard), priority);
    if (paused) { taskRunner(); }
  }
}

function off(target, type, listener, options) {
  if (target instanceof EventTarget) {
    target.removeEventListener(type, listener, options);
  }
}

function isBoolean(e) { return typeof e === 'boolean'; }

function listenerOptions(options) {
  if (isBoolean(options)) {
    return { capture: options };
  }
  return options;
}

function once(target, type, listener, addOptions) {
  on(target, type, listener, { once: true, ...listenerOptions(addOptions) });
}

function partial(fn, ...outer) {
  return (...inner) => fn(...outer, ...inner);
}

let dragTarget;
let mouseX;
let mouseY;
let offsetX;
let offsetY;
let timer;

function setDragTarget(parent, event) {
  if (parent) {
    dragTarget = parent;
  } else {
    dragTarget = event.target;
  }
}

function setMouseCoord(event) {
  mouseX = event.clientX;
  mouseY = event.clientY;
}

function getTransformXY(trans) {
  if (trans === 'none') { return [0, 0]; }
  const matrix = trans.match(/(\d+), (\d+), (\d+), (\d+), (-?\d+), (-?\d+)/);
  return [Number(matrix[5]), Number(matrix[6])];
}

function setOffsets() {
  const style = window.getComputedStyle(dragTarget, null);
  const transformXY = getTransformXY(style.transform);
  offsetX = transformXY[0] - mouseX;
  offsetY = transformXY[1] - mouseY;
}

function drawElement(event) {
  if (event.clientX !== mouseX || event.clientY !== mouseY) {
    dragTarget.style.transform = `matrix(1, 0, 0, 1, ${(event.clientX + offsetX).toString()
    }, ${(event.clientY + offsetY).toString()})`;
    setMouseCoord(event);
  }
}

function checkInterval(event) {
  const now = performance.now();
  if (now - timer > 16) {
    drawElement(event);
    timer = now;
  }
}

function dragOver(event) {
  checkInterval(event);
  event.preventDefault();
  return false;
}

function dragDrop(event) {
  drawElement(event);
  off(document.body, 'dragover', dragOver);
  event.preventDefault();
  return false;
}

function setDragImage(event) {
  const img = new Image();
  img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';
  event.dataTransfer.setDragImage(img, 0, 0);
}

function dragStart(parent, event) {
  setDragTarget(parent, event);
  setDragImage(event);
  setMouseCoord(event);
  setOffsets();
  timer = 0;
  event.dataTransfer.setData('text/plain', '');
  on(document.body, 'dragover', dragOver);
  once(document.body, 'drop', dragDrop);
}

function draggable(element, parent) {
  // eslint-disable-next-line no-param-reassign
  element.draggable = true;
  on(element, 'dragstart', partial(dragStart, parent));
}

function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

const server = `${document.location.protocol}//${
  document.location.host}/`;
const cdn = window.HCS && window.HCS.defines && window.HCS.defines.cdn;

const rarity = [
  { colour: '#ffffff', clas: 'fshCommon' },
  { colour: '#0099ff', clas: 'fshRare' },
  { colour: '#cc00ff', clas: 'fshUnique' },
  { colour: '#ffff33', clas: 'fshLegendary' },
  { colour: '#cc0033', clas: 'fshSuper' },
  { colour: '#6633ff', clas: 'fshCrystal' },
  { colour: '#009900', clas: 'fshEpic' },
];

const places = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth',
  'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth', 'thirteenth',
  'fourteenth'];

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug',
  'Sep', 'Oct', 'Nov', 'Dec'];

const mercRE = [
  /<td>Attack:<\/td><td>(\d+)<\/td>/,
  /<td>Defense:<\/td><td>(\d+)<\/td>/,
  /<td>Armor:<\/td><td>(\d+)<\/td>/,
  /<td>Damage:<\/td><td>(\d+)<\/td>/,
  /<td>HP:<\/td><td>(\d+)<\/td>/,
];

const lastActivityRE = /<td>Last Activity:<\/td><td>(\d+)d (\d+)h (\d+)m (\d+)s<\/td>/;
const playerIDRE = /player_id=(\d+)/;
const itemRE = /item_id=(\d+)&inv_id=(\d+)/;
const guildRE = /guild_id=(\d+)/;

const defenderMultiplier = 0.2;

const defJoinallgroupsundersize = 'joinallgroupsundersize';

const indexPhp = 'index.php';
const defCmd = '?cmd=';
const cmdUrl = `${indexPhp}${defCmd}`;
const defSubcmd = '&subcmd=';
const defTargetUsername = '&target_username=';
const notepadBlank = `${defCmd}notepad&blank=1${defSubcmd}`;
const newGuildLogLoc = `${notepadBlank}newguildlog`;
const newGuildLogUrl = `${indexPhp}${newGuildLogLoc}`;
const auctionhouseUrl = `${cmdUrl}auctionhouse`;
const ahSearchUrl = `${auctionhouseUrl}&search=`;
const logUrl = `${cmdUrl}log`;
const doAddIgnore = `${logUrl}${defSubcmd}doaddignore&ignore_username=`;
const profileUrl = `${cmdUrl}profile`;
const playerIdUrl = `${profileUrl}&player_id=`;
const dropItemsUrl = `${profileUrl}${defSubcmd}dropitems`;
const tradeUrl = `${cmdUrl}trade&target_player=`;
const secureUrl = `${cmdUrl}trade${defSubcmd}createsecure${
  defTargetUsername}`;
const arenaUrl = `${cmdUrl}arena${defSubcmd}`;
const notepadBlankUrl = `${indexPhp}${notepadBlank}`;
const auctionSearchUrl = `${notepadBlankUrl}auctionsearch`;
const pointsUrl = `${cmdUrl}points`;
const guildSubcmdUrl = `${cmdUrl}guild${defSubcmd}`;
const guildLogUrl = `${guildSubcmdUrl}log`;
const scouttowerUrl = `${guildSubcmdUrl}scouttower`;
const groupsSubcmdUrl = `${guildSubcmdUrl}groups&subcmd2=`;
const recallUserUrl = `${guildSubcmdUrl}inventory&subcmd2=report&user=`;
const guildViewUrl = `${guildSubcmdUrl}view&guild_id=`;
const joinallUrl = `${groupsSubcmdUrl}joinall`;
const joinUnderUrl = `${groupsSubcmdUrl}${defJoinallgroupsundersize}`;
const worldUrl = `${cmdUrl}world`;
const searchPlayerUrl = `${cmdUrl}findplayer`;
const showPlayerUrl = `${searchPlayerUrl
}&search_show_first=1&search_username=`;
const blacksmithUrl = `${cmdUrl}blacksmith`;
const quickbuffUrl = `${cmdUrl}quickbuff`;
const composingUrl = `${cmdUrl}composing`;
const attackplayerUrl = `${cmdUrl}attackplayer${defTargetUsername}`;
const updateArchiveUrl = `${cmdUrl}${defSubcmd}viewupdatearchive`;
const archiveUrl = `${cmdUrl}${defSubcmd}viewarchive`;
const bountyUrl = `${cmdUrl}bounty`;

const guideUrl = `https://guide.fallensword.com/${cmdUrl}`;

const defAfterUpdateActionlist = 'after-update.actionlist';
const defPlayerBuffs = 'buffs.player';
const defPlayerUpdate = 'update.player';
const defPlayerLevel = 'level.stats-player';
const defPlayerGold = 'gold.stats-player';
const defShopPrompt = 'prompt.worldDialogShop';
const defControlsKeydown = 'keydown.controls';
const defRealmUpdate = 'update.realm';

const defSuffixSuccessActionResponse = '-success.action-response';
const defRefreshActionList = `-1${defSuffixSuccessActionResponse}`;
const defViewCreature = `1${defSuffixSuccessActionResponse}`;
const defPvE = `2${defSuffixSuccessActionResponse}`;
const defRelicView = `9${defSuffixSuccessActionResponse}`;
const defStairway = `5${defSuffixSuccessActionResponse}`;
const defTeleport = `25${defSuffixSuccessActionResponse}`;

const defCreatureCombat = 2;
const defRepairAll = 15;

const defFetchPlayerStats = 1;
const defFetchPlayerBackpackCount = 2;
const defFetchPlayerBackpackItems = 4;
const defFetchPlayerPrefs = 8;

const defFetchPlayerBuffs = 16;
const defFetchWorldDefines = 32;
const defFetchWorldRealmStatic = 64;
const defFetchWorldRealmDynamic = 128;

const defFetchWorldRealmActions = 256;
const defFetchPlayerEquipment = 512;
const defFetchPlayerNotifications = 1024;

const defNeedToCompose = 'needToCompose';
const defLastComposeCheck = 'lastComposeCheck';
const defCharacterVirtualLevel = 'characterVirtualLevel';
const defEnableGuildActivityTracker = 'enableGuildActivityTracker';
const defLastLadderReset = 'lastLadderReset';

const defForm = 'form';
const defTable = 'table';
const defTd = 'td';
const defTr = 'tr';

const fshBuffLog = 'fsh_buffLog';

const defStatbarLevel = 'statbar-level-tooltip-general';
const defStatLevel = 'stat-level';
const defStatDefense = 'stat-defense';
const defStatAttack = 'stat-attack';
const defStatDamage = 'stat-damage';
const defStatArmor = 'stat-armor';
const defStatHp = 'stat-hp';
const defStatVl = 'stat-vl';

const GMSTORAGE_PATH = 'GM_';

const composingFragmentType = [
  'Common', 'Rare', 'Unique', 'Legendary', 'Super Elite', 'Crystalline'];

const attribType = ['Attack', 'Defense', 'Armor', 'HP', 'Damage',
  'Stamina', 'Stamina Gain', 'Gold Gain', 'XP Gain'];

const enhancementType = ['Piercing Strike', 'Reinforced Armor',
  'Thievery', 'Critical Hit', 'Holy', 'Breaker', 'Nullify', 'Banishment',
  'Protection', 'Oceanic', 'Master Thief', 'Protect Gold', 'Dodge', 'Disarm',
  'Master Blacksmith', 'Elite Hunter', 'Sustain', 'Master Crafter',
  'Fury Caster', 'Greenskin Slayer', 'Beast Slayer', 'Duelist', 'Glory Seeker',
  'First Strike', 'Hypnotize', 'Master Inventor', 'Soulless', 'Temporal Shift',
];

const itemType = ['Helmet', 'Armor', 'Gloves', 'Boots', 'Weapon',
  'Shield', 'Ring', 'Amulet', 'Rune', 'Quest Item', 'Potion', 'Component',
  'Resource', 'Recipe', 'Container', 'Composed', 'Frag Stash'];

const oldActionSpinner = `${cdn}ui/world/action_spinner.gif`;

const chatSelector = '.fa-comments-alt';
const combatSelector = '.fa-swords';
const noteSelector = '.fa-envelope';
const playerLinkSelector = 'a[href*="&player_id="]';

var lastScavPage="";var lastActiveQuestPage="";var lastNormalActiveQuestPage="";var lastNormalCompletedQuestPage="";var lastNormalNotStartedQuestPage="";var lastSeasonalActiveQuestPage="";var lastSeasonalCompletedQuestPage="";var lastSeasonalNotStartedQuestPage="";var enableLogColoring=false;var enableChatParsing=false;var enableCreatureColoring=false;var showCombatLog=false;var showCreatureInfo=false;var keepLogs=false;var showExtraLinks=false;var huntingBuffs="Doubler,Librarian,Adept Learner,Merchant,Treasure Hunter,Animal Magnetism,Conserve";var huntingBuffsName="default";var huntingBuffs2="Deflect";var huntingBuffs2Name="PvP";var huntingBuffs3="Super Elite Slayer";var huntingBuffs3Name="SE";var showHuntingBuffs=false;var moveFSBox=false;var moveDailyQuest=false;var guildSelf="";var guildSelfMessage="Member of your own guild!";var guildFrnd="";var guildFrndMessage="Do not attack - Guild is friendly!";var guildPast="";var guildPastMessage="Do not attack - You've been in that guild once!";var guildEnmy="";var guildEnmyMessage="Enemy guild. Attack at will!";var goldRecipient="";var goldAmount="";var sendGoldonWorld=false;var hideQuests=false;var hideQuestNames="";var hideRecipes=false;var hideRecipeNames="";var enableGuildInfoWidgets=false;var enableOnlineAlliesWidgets=false;var guildOnlineRefreshTime=300;var hideGuildInfoSecureTrade=false;var hideGuildInfoTrade=false;var hideGuildInfoMessage=false;var hideGuildInfoBuff=false;var buyBuffsGreeting="Hello {playername}, can I buy {buffs} for {cost} please?";var renderSelfBio=false;var bioEditLines=10;var renderOtherBios=false;var playNewMessageSound=false;var showSpeakerOnWorld=false;var defaultMessageSound="https://fallenswordhelper.github.io/fallenswordhelper/audio/sms-alert-2-daniel_simon.wav";var highlightPlayersNearMyLvl=false;var highlightGvGPlayersNearMyLvl=false;var detailedConflictInfo=false;var gameHelpLink=true;var enableAllyOnlineList=false;var enableEnemyOnlineList=false;var allyEnemyOnlineRefreshTime=300;var moveGuildList=false;var moveOnlineAlliesList=false;var hideMatchesForCompletedMoves=false;var doNotKillList="";var enableBioCompressor=false;var currentGoldSentTotal=0;var keepBuffLog=false;var buffLog="";var enableActiveBountyList=false;var bountyListRefreshTime=300;var enableWantedList=false;var wantedNames="";var wantedGuildMembers=false;var bwNeedsRefresh=true;var fsboxlog=false;var fsboxcontent="";var itemRecipient="";var quickLinks="[]";var minGroupLevel=1;var combatEvaluatorBias=0;var huntingMode=false;var enabledHuntingMode="1";var hideRelicOffline=false;var enterForSendMessage=false;var trackKillStreak=false;var storeLastQuestPage=false;var addAttackLinkToLog=false;var showStatBonusTotal=false;var newGuildLogHistoryPages=3;var useNewGuildLog=false;var enhanceChatTextEntry=false;var ajaxifyRankControls=false;var enableMaxGroupSizeToJoin=false;var maxGroupSizeToJoin=11;var enableTempleAlert=false;var enableUpgradeAlert=false;var enableComposingAlert=false;var autoFillMinBidPrice=false;var showPvPSummaryInLog=false;var enableQuickDrink=false;var enhanceOnlineDots=false;var hideBuffSelected=false;var fixBuffSelected=false;var hideHelperMenu=false;var keepHelperMenuOnScreen=true;var draggableHelperMenu=false;var quickLinksTopPx=22;var quickLinksLeftPx=0;var draggableQuickLinks=false;var showNextQuestSteps=true;var showRecallMessages=true;var showRelicMessages=true;var showMercenaryMessages=true;var showGroupCombatMessages=true;var showDonationMessages=true;var showRankingMessages=true;var showGvGMessages=true;var showTaggingMessages=true;var showTitanMessages=true;var showQuickDropLinks=false;var onlinePlayerMinLvl=1;var onlinePlayerMaxLvl=9999;var arenaMinLvl=1;var arenaMaxLvl=9999;var showMonsterLog=false;var lastTempleCheck=0;var needToPray=false;var lastChatCheck="0";var lastGuildLogCheck="0";var lastOutBoxCheck="0";var lastPlayerLogCheck="0";var showAdmin=false;var alliestotal=0;var enemiestotal=0;var footprints=false;var hideNonPlayerGuildLogMessages=false;var listOfAllies="";var listOfEnemies="";var contactList="";var lastUpgradeCheck=0;var needToDoUpgrade=false;var characterVirtualLevel=0;var guildLogoControl=false;var statisticsControl=false;var guildStructureControl=false;var lastMembrListCheck=0;var showQuickSendLinks=false;var needToCompose=false;var lastComposeCheck=0;var lastOnlineCheck=0;var bountyList="";var wantedList="";var lowestLevelInTop250=0;var quickMsg="[\"Thank you very much ^_^\",\"Happy hunting, {playername}\"]";var sendClasses="[\"Composed Pots\", \"13699\"], [\"Amber\", \"5611\"], [\"Amethyst Weed\", \"9145\"], [\"Blood Bloom\", \"5563\"], [\"Cerulean Rose\", \"9156\"], [\"Coleoptera Body\", \"9287\"], [\"Dark Shade\", \"5564\"], [\"Deathbloom\", \"9140\"], [\"Deathly Mold\", \"9153\"], [\"Greenskin Fungus\", \"9148\"], [\"Heffle\", \"5565\"], [\"Jademare\", \"5566\"], [\"Ruby Thistle\", \"9143\"], [\"Toad Corpse\",\"9288\"], [\"Trinettle\", \"5567\"], [\"Viridian Vine\", \"9151\"], [\"Mortar & Pestle\", \"9157\"], [\"Beetle Juice\", \"9158\"]";var quickSearchList="[{\"category\":\"Plants\",\"searchname\":\"Amber\",\"nickname\":\"\"},{\"category\":\"Plants\",\"searchname\":\"Blood Bloom\",\"nickname\":\"\"},{\"category\":\"Plants\",\"searchname\":\"Jademare\",\"nickname\":\"\"},{\"category\":\"Plants\",\"searchname\":\"Dark Shade\",\"nickname\":\"\"},{\"category\":\"Plants\",\"searchname\":\"Trinettle\",\"nickname\":\"\"},{\"category\":\"Plants\",\"searchname\":\"Heffle Wart\",\"nickname\":\"\"},{\"category\":\"Potions\",\"searchname\":\"Sludge Brew\",\"nickname\":\"DC 200\",\"displayOnAH\":true},{\"category\":\"Potions\",\"searchname\":\"Potion of Black Death\",\"nickname\":\"DC 225\",\"displayOnAH\":true},{\"category\":\"Potions\",\"searchname\":\"Potion of Aid\",\"nickname\":\"Assist\",\"displayOnAH\":true},{\"category\":\"Potions\",\"searchname\":\"Potion of Supreme Doubling\",\"nickname\":\"DB 450\",\"displayOnAH\":true},{\"category\":\"Potions\",\"searchname\":\"Potion of Acceleration\",\"nickname\":\"DB 500\",\"displayOnAH\":true},{\"category\":\"Potions\",\"searchname\":\"Potion of Lesser Death Dealer\",\"nickname\":\"DD\",\"displayOnAH\":true},{\"category\":\"Potions\",\"searchname\":\"Runic Potion\",\"nickname\":\"FI 250\",\"displayOnAH\":true},{\"category\":\"Potions\",\"searchname\":\"Potion of the Bookworm\",\"nickname\":\"Lib 225\",\"displayOnAH\":true},{\"category\":\"Potions\",\"searchname\":\"Potion of Truth\",\"nickname\":\"EW 1k\",\"displayOnAH\":true},{\"category\":\"Potions\",\"searchname\":\"Dull Edge\",\"nickname\":\"DE 25\",\"displayOnAH\":true},{\"category\":\"Potions\",\"searchname\":\"Notched Blade\",\"nickname\":\"DE 80\",\"displayOnAH\":true},{\"category\":\"Potions\",\"searchname\":\"Potion of Death\",\"nickname\":\"DW 125\",\"displayOnAH\":true},{\"category\":\"Potions\",\"searchname\":\"Potion of Decay\",\"nickname\":\"WI 150\",\"displayOnAH\":true},{\"category\":\"Potions\",\"searchname\":\"Potion of Fatality\",\"nickname\":\"WI 350\",\"displayOnAH\":true},{\"category\":\"Potions\",\"searchname\":\"Potion of Annihilation\",\"nickname\":\"DW 150\",\"displayOnAH\":true},{\"category\":\"Potions\",\"searchname\":\"Potion of the Wise\",\"nickname\":\"Lib 200\",\"displayOnAH\":true},{\"category\":\"Potions\",\"searchname\":\"Potion of Shattering\",\"nickname\":\"SA\",\"displayOnAH\":true},{\"category\":\"Potions\",\"searchname\":\"Dragons Blood Potion\",\"nickname\":\"ZK 200\",\"displayOnAH\":true},{\"category\":\"Potions\",\"searchname\":\"Berserkers Potion\",\"nickname\":\"ZK 300\",\"displayOnAH\":true},{\"category\":\"Potions\",\"searchname\":\"Potion of Fury\",\"nickname\":\"ZK 350\",\"displayOnAH\":true},{\"category\":\"Potions\",\"searchname\":\"Potion of Supreme Luck\",\"nickname\":\"FI 1k\",\"displayOnAH\":true}]";var arenaMoves="[]";var arenaMatches="[]";var CombatLog="";var hideChampionsGroup=false;var hideElitesGroup=false;var hideSEGroup=false;var hideTitanGroup=false;var hideLegendaryGroup=false;var disableDeactivatePrompts=false;var moveComposingButtons=false;var expandMenuOnKeyPress=false;var disableBreakdownPrompts=false;var collapseNewsArchive=false;var collapseHallPosts=false;var lastmyGuildLogCheck=0;var hideSubLvlCreature=false;var hidePlayerActions=false;var extraProfile="";var textToSearchFor="";var lastLadderReset=0;var disableQuickWearPrompts=false;var enableGuildActivityTracker=false;var enableSeTracker=false;var showTitanInfo=false;var highlightPvpProtection=false;var showBuffInfo=false;var enableHistoryCompressor=false;var enableStamBars=false;var appBad=[0,false];var ajaxifyDestroy=false;var statBarLinks=false;var staminaCalculator=false;var levelUpCalculator=false;var resizeQuickBuff=false;var joinAllLink=false;var pageTwoLinks=false;var addUfsgLinks=false;var trackLadderReset=false;var addServerNode=false;var addScoutTowerLink=false;var storeLastScavPage=false;var recipeManagerLink=false;var medalGuideLink=false;var inventoryManagerLink=false;var buffLogLink=false;var combatLogLink=false;var creatureLogLink=false;var quickLinksLink=false;var auctionSearchLink=false;var onlinePlayersLink=false;var findOtherLink=false;var findBuffsLink=false;var guildInventoryLink=false;var newGuildLogLink=false;var topRatedLink=false;var enableMessageTemplates=false;var wrapGuildChat=false;var colorPlayerNames=false;var addIgnoreLink=false;var changeButtonLabels=false;var fastDebuff=false;var countAllyEnemy=false;var fixFolderImages=false;var componentWidgets=false;var quickWearLink=false;var selectAllLink=false;var nekidButton=false;var ajaxifyProfileSections=false;var injectBuffGuide=false;var statisticsWrap=false;var showGuildRelationship=false;var showQuickButtons=false;var showBuffLevel=false;var enableItemColoring=false;var checkAllOfType=false;var enableFolderFilter=false;var moveXmasBox=false;var defaults = {lastScavPage:lastScavPage,lastActiveQuestPage:lastActiveQuestPage,lastNormalActiveQuestPage:lastNormalActiveQuestPage,lastNormalCompletedQuestPage:lastNormalCompletedQuestPage,lastNormalNotStartedQuestPage:lastNormalNotStartedQuestPage,lastSeasonalActiveQuestPage:lastSeasonalActiveQuestPage,lastSeasonalCompletedQuestPage:lastSeasonalCompletedQuestPage,lastSeasonalNotStartedQuestPage:lastSeasonalNotStartedQuestPage,enableLogColoring:enableLogColoring,enableChatParsing:enableChatParsing,enableCreatureColoring:enableCreatureColoring,showCombatLog:showCombatLog,showCreatureInfo:showCreatureInfo,keepLogs:keepLogs,showExtraLinks:showExtraLinks,huntingBuffs:huntingBuffs,huntingBuffsName:huntingBuffsName,huntingBuffs2:huntingBuffs2,huntingBuffs2Name:huntingBuffs2Name,huntingBuffs3:huntingBuffs3,huntingBuffs3Name:huntingBuffs3Name,showHuntingBuffs:showHuntingBuffs,moveFSBox:moveFSBox,moveDailyQuest:moveDailyQuest,guildSelf:guildSelf,guildSelfMessage:guildSelfMessage,guildFrnd:guildFrnd,guildFrndMessage:guildFrndMessage,guildPast:guildPast,guildPastMessage:guildPastMessage,guildEnmy:guildEnmy,guildEnmyMessage:guildEnmyMessage,goldRecipient:goldRecipient,goldAmount:goldAmount,sendGoldonWorld:sendGoldonWorld,hideQuests:hideQuests,hideQuestNames:hideQuestNames,hideRecipes:hideRecipes,hideRecipeNames:hideRecipeNames,enableGuildInfoWidgets:enableGuildInfoWidgets,enableOnlineAlliesWidgets:enableOnlineAlliesWidgets,guildOnlineRefreshTime:guildOnlineRefreshTime,hideGuildInfoSecureTrade:hideGuildInfoSecureTrade,hideGuildInfoTrade:hideGuildInfoTrade,hideGuildInfoMessage:hideGuildInfoMessage,hideGuildInfoBuff:hideGuildInfoBuff,buyBuffsGreeting:buyBuffsGreeting,renderSelfBio:renderSelfBio,bioEditLines:bioEditLines,renderOtherBios:renderOtherBios,playNewMessageSound:playNewMessageSound,showSpeakerOnWorld:showSpeakerOnWorld,defaultMessageSound:defaultMessageSound,highlightPlayersNearMyLvl:highlightPlayersNearMyLvl,highlightGvGPlayersNearMyLvl:highlightGvGPlayersNearMyLvl,detailedConflictInfo:detailedConflictInfo,gameHelpLink:gameHelpLink,enableAllyOnlineList:enableAllyOnlineList,enableEnemyOnlineList:enableEnemyOnlineList,allyEnemyOnlineRefreshTime:allyEnemyOnlineRefreshTime,moveGuildList:moveGuildList,moveOnlineAlliesList:moveOnlineAlliesList,hideMatchesForCompletedMoves:hideMatchesForCompletedMoves,doNotKillList:doNotKillList,enableBioCompressor:enableBioCompressor,currentGoldSentTotal:currentGoldSentTotal,keepBuffLog:keepBuffLog,buffLog:buffLog,enableActiveBountyList:enableActiveBountyList,bountyListRefreshTime:bountyListRefreshTime,enableWantedList:enableWantedList,wantedNames:wantedNames,wantedGuildMembers:wantedGuildMembers,bwNeedsRefresh:bwNeedsRefresh,fsboxlog:fsboxlog,fsboxcontent:fsboxcontent,itemRecipient:itemRecipient,quickLinks:quickLinks,minGroupLevel:minGroupLevel,combatEvaluatorBias:combatEvaluatorBias,huntingMode:huntingMode,enabledHuntingMode:enabledHuntingMode,hideRelicOffline:hideRelicOffline,enterForSendMessage:enterForSendMessage,trackKillStreak:trackKillStreak,storeLastQuestPage:storeLastQuestPage,addAttackLinkToLog:addAttackLinkToLog,showStatBonusTotal:showStatBonusTotal,newGuildLogHistoryPages:newGuildLogHistoryPages,useNewGuildLog:useNewGuildLog,enhanceChatTextEntry:enhanceChatTextEntry,ajaxifyRankControls:ajaxifyRankControls,enableMaxGroupSizeToJoin:enableMaxGroupSizeToJoin,maxGroupSizeToJoin:maxGroupSizeToJoin,enableTempleAlert:enableTempleAlert,enableUpgradeAlert:enableUpgradeAlert,enableComposingAlert:enableComposingAlert,autoFillMinBidPrice:autoFillMinBidPrice,showPvPSummaryInLog:showPvPSummaryInLog,enableQuickDrink:enableQuickDrink,enhanceOnlineDots:enhanceOnlineDots,hideBuffSelected:hideBuffSelected,fixBuffSelected:fixBuffSelected,hideHelperMenu:hideHelperMenu,keepHelperMenuOnScreen:keepHelperMenuOnScreen,draggableHelperMenu:draggableHelperMenu,quickLinksTopPx:quickLinksTopPx,quickLinksLeftPx:quickLinksLeftPx,draggableQuickLinks:draggableQuickLinks,showNextQuestSteps:showNextQuestSteps,showRecallMessages:showRecallMessages,showRelicMessages:showRelicMessages,showMercenaryMessages:showMercenaryMessages,showGroupCombatMessages:showGroupCombatMessages,showDonationMessages:showDonationMessages,showRankingMessages:showRankingMessages,showGvGMessages:showGvGMessages,showTaggingMessages:showTaggingMessages,showTitanMessages:showTitanMessages,showQuickDropLinks:showQuickDropLinks,onlinePlayerMinLvl:onlinePlayerMinLvl,onlinePlayerMaxLvl:onlinePlayerMaxLvl,arenaMinLvl:arenaMinLvl,arenaMaxLvl:arenaMaxLvl,showMonsterLog:showMonsterLog,lastTempleCheck:lastTempleCheck,needToPray:needToPray,lastChatCheck:lastChatCheck,lastGuildLogCheck:lastGuildLogCheck,lastOutBoxCheck:lastOutBoxCheck,lastPlayerLogCheck:lastPlayerLogCheck,showAdmin:showAdmin,alliestotal:alliestotal,enemiestotal:enemiestotal,footprints:footprints,hideNonPlayerGuildLogMessages:hideNonPlayerGuildLogMessages,listOfAllies:listOfAllies,listOfEnemies:listOfEnemies,contactList:contactList,lastUpgradeCheck:lastUpgradeCheck,needToDoUpgrade:needToDoUpgrade,characterVirtualLevel:characterVirtualLevel,guildLogoControl:guildLogoControl,statisticsControl:statisticsControl,guildStructureControl:guildStructureControl,lastMembrListCheck:lastMembrListCheck,showQuickSendLinks:showQuickSendLinks,needToCompose:needToCompose,lastComposeCheck:lastComposeCheck,lastOnlineCheck:lastOnlineCheck,bountyList:bountyList,wantedList:wantedList,lowestLevelInTop250:lowestLevelInTop250,quickMsg:quickMsg,sendClasses:sendClasses,quickSearchList:quickSearchList,arenaMoves:arenaMoves,arenaMatches:arenaMatches,CombatLog:CombatLog,hideChampionsGroup:hideChampionsGroup,hideElitesGroup:hideElitesGroup,hideSEGroup:hideSEGroup,hideTitanGroup:hideTitanGroup,hideLegendaryGroup:hideLegendaryGroup,disableDeactivatePrompts:disableDeactivatePrompts,moveComposingButtons:moveComposingButtons,expandMenuOnKeyPress:expandMenuOnKeyPress,disableBreakdownPrompts:disableBreakdownPrompts,collapseNewsArchive:collapseNewsArchive,collapseHallPosts:collapseHallPosts,lastmyGuildLogCheck:lastmyGuildLogCheck,hideSubLvlCreature:hideSubLvlCreature,hidePlayerActions:hidePlayerActions,extraProfile:extraProfile,textToSearchFor:textToSearchFor,lastLadderReset:lastLadderReset,disableQuickWearPrompts:disableQuickWearPrompts,enableGuildActivityTracker:enableGuildActivityTracker,enableSeTracker:enableSeTracker,showTitanInfo:showTitanInfo,highlightPvpProtection:highlightPvpProtection,showBuffInfo:showBuffInfo,enableHistoryCompressor:enableHistoryCompressor,enableStamBars:enableStamBars,appBad:appBad,ajaxifyDestroy:ajaxifyDestroy,statBarLinks:statBarLinks,staminaCalculator:staminaCalculator,levelUpCalculator:levelUpCalculator,resizeQuickBuff:resizeQuickBuff,joinAllLink:joinAllLink,pageTwoLinks:pageTwoLinks,addUfsgLinks:addUfsgLinks,trackLadderReset:trackLadderReset,addServerNode:addServerNode,addScoutTowerLink:addScoutTowerLink,storeLastScavPage:storeLastScavPage,recipeManagerLink:recipeManagerLink,medalGuideLink:medalGuideLink,inventoryManagerLink:inventoryManagerLink,buffLogLink:buffLogLink,combatLogLink:combatLogLink,creatureLogLink:creatureLogLink,quickLinksLink:quickLinksLink,auctionSearchLink:auctionSearchLink,onlinePlayersLink:onlinePlayersLink,findOtherLink:findOtherLink,findBuffsLink:findBuffsLink,guildInventoryLink:guildInventoryLink,newGuildLogLink:newGuildLogLink,topRatedLink:topRatedLink,enableMessageTemplates:enableMessageTemplates,wrapGuildChat:wrapGuildChat,colorPlayerNames:colorPlayerNames,addIgnoreLink:addIgnoreLink,changeButtonLabels:changeButtonLabels,fastDebuff:fastDebuff,countAllyEnemy:countAllyEnemy,fixFolderImages:fixFolderImages,componentWidgets:componentWidgets,quickWearLink:quickWearLink,selectAllLink:selectAllLink,nekidButton:nekidButton,ajaxifyProfileSections:ajaxifyProfileSections,injectBuffGuide:injectBuffGuide,statisticsWrap:statisticsWrap,showGuildRelationship:showGuildRelationship,showQuickButtons:showQuickButtons,showBuffLevel:showBuffLevel,enableItemColoring:enableItemColoring,checkAllOfType:checkAllOfType,enableFolderFilter:enableFolderFilter,moveXmasBox:moveXmasBox};

const reviver = [
  ['S]', (value) => value.substr(2)],
  ['N]', (value) => parseInt(value.substr(2), 10)],
  ['B]', (value) => value.substr(2) === 'true'],
];

function retrieve(value) {
  const test = reviver.find((el) => value.startsWith(el[0]));
  if (test) { return test[1](value); }
  return value;
}

function fshGetValue(name, defValue) {
  const value = window.localStorage.getItem(GMSTORAGE_PATH + name);
  if (value === null || isUndefined(value)) { return defValue; }
  return retrieve(value);
}

function getValue(name) {
  // eslint-disable-next-line no-unused-labels, no-labels
  devLbl: { //  No default setting available
    if (isUndefined(defaults[name])) {
      // eslint-disable-next-line no-console
      console.log('No default setting available', name, defaults[name]);
    }
  }
  return fshGetValue(name, defaults[name]);
}

function jsonParse(str, reviver) {
  try {
    return JSON.parse(str, reviver);
  } catch (e) {
    // Ignore bad json
  }
}

function reviver$1(key, value) {
  if (typeof value === 'string') {
    const a = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/
      .exec(value);
    if (a) {
      return new Date(Date.UTC(Number(a[1]), Number(a[2]) - 1, Number(a[3]),
        Number(a[4]), Number(a[5]), Number(a[6])));
    }
  }
  return value;
}

function getValueJSON(name) {
  const resultJSON = getValue(name);
  let result;
  if (resultJSON) { result = jsonParse(resultJSON, reviver$1); }
  return result;
}

function retBool(bool, ifTrue, ifFalse) {
  if (bool) {
    return ifTrue;
  }
  return ifFalse;
}

function retOption(option, ifTrue, ifFalse) {
  return retBool(getValue(option), ifTrue, ifFalse);
}

function isDraggable(draggableQuickLinks) {
  if (draggableQuickLinks) {
    draggable(getElementById('fshQuickLinks'));
  }
}

function invalid(link) {
  return !('newWindow' in link) || !link.url || !link.name;
}

function linkHtml(link) {
  if (invalid(link)) { return ''; }
  const newWindow = retBool(link.newWindow, ' target="new"', '');
  return `<li><a href="${escapeHtml(link.url)}"${
    newWindow}>${link.name}</a></li>`;
}

function makeQuickLinks(quickLinks) {
  return quickLinks.map(linkHtml).join('');
}

function haveLinks(quickLinks) {
  const draggableQuickLinks = getValue('draggableQuickLinks');
  const html = `<div style="top:${getValue('quickLinksTopPx')}px; left:${
    getValue('quickLinksLeftPx')}px;" id="fshQuickLinks" `
    + `class="fshQuickLinks fshInnerBg${
      retOption('keepHelperMenuOnScreen', ' fshFixed', '')
    }${retBool(draggableQuickLinks, ' fshMove', '')}">${
      makeQuickLinks(quickLinks)}</div>`;
  insertHtmlBeforeEnd(document.body, html);
  isDraggable(draggableQuickLinks);
}

function haveNode() {
  const quickLinks = getValueJSON('quickLinks') || [];
  if (quickLinks.length > 0) { haveLinks(quickLinks); }
}

function injectQuickLinks() {
  const node = getElementById('statbar-container');
  if (node) { haveNode(); }
}

function doQuickLinks() {
  if (!calf.huntingMode) {
    add(3, injectQuickLinks);
  }
}

function getCustomUrlParameter(sPageURL, sParam) {
  return (new URLSearchParams(sPageURL)).get(sParam);
}

function getUrlParameter(sParam) {
  const sPageURL = decodeURIComponent(window.location.search);
  return getCustomUrlParameter(sPageURL, sParam);
}

let enabled;

function handleMsgStack(type, stuff) {
  const msg = parseError(stuff);
  if (msg.includes('calfSystem')) {
    sendException(type + msg, true);
    return true;
  }
}

function handleError(type, stuff) {
  if (stuff) {
    return handleMsgStack(type, stuff);
  }
}

function logError(e) {
  handleError('window onerror ', e.error);
}

function unhandledrejection(e) {
  if (handleError('Uncaught (in promise) ', e.reason)) {
    e.preventDefault();
  }
}

function globalErrorHandler() {
  if (!enabled) {
    on(window, 'error', logError);
    on(window, 'unhandledrejection', unhandledrejection);
    enabled = true;
  }
}

let now;
let nowSecs;

function initNow() {
  if (!now) {
    now = Date.now();
    nowSecs = Math.floor(now / 1000);
  }
}

let pCL;
let pCC;
let pCR;

function initPcc() {
  if (!pCC) {
    pCL = getElementById('pCL');
    pCC = getElementById('pCC');
    pCR = getElementById('pCR');
  }
}

const arrayFrom = (e, mapFn) => Array.from(e, mapFn);

function getElementsByTagName(tagName, element) {
  if (element) { return element.getElementsByTagName(tagName); }
  return document.getElementsByTagName(tagName);
}

function getArrayByTagName(tagName, element) {
  return arrayFrom(getElementsByTagName(tagName, element));
}

function isString(e) { return typeof e === 'string'; }

function getTextTrim(node) {
  const text = getText(node);
  if (isString(text)) {
    return getText(node).trim();
  }
}

function includesText(text, el) {
  return getTextTrim(el).includes(text);
}

function includes(text) {
  return partial(includesText, text);
}

function doMsgSound() {
  const msg = getArrayByTagName('a', pCL).filter(includes('message'));
  if (msg.length) {
    insertHtmlBeforeEnd(document.body,
      `<audio src="${getValue('defaultMessageSound')}" autoplay=true />`);
  }
}

function isMessageSound() {
  if (getValue('playNewMessageSound')) {
    add(3, doMsgSound);
  }
}

function isObject(e) { return typeof e === 'object'; }

function loadCss(c) {
  return new Promise((resolve) => {
    const linkTag = document.createElement('link');
    linkTag.type = 'text/css';
    linkTag.rel = 'stylesheet';
    linkTag.onload = () => { resolve(); };
    linkTag.href = c;
    document.body.appendChild(linkTag);
  });
}

function containsText(text, el) {
  return getTextTrim(el) === text;
}

function contains(text) {
  return partial(containsText, text);
}

function querySelectorAll(selector, scope) {
  if (scope) { return scope.querySelectorAll(selector); }
  return document.querySelectorAll(selector);
}

function querySelectorArray(selector, scope) {
  return arrayFrom(querySelectorAll(selector, scope));
}

function setInnerHtml(html, ctx) {
  if (ctx instanceof Element) {
    ctx.innerHTML = String(html);
  }
}

function toSettings(el) {
  setInnerHtml(`<a href="${cmdUrl}settings">Game Help</a>`, el);
}

function gameHelpLink$1() {
  querySelectorArray('#pCR h3').filter(contains('Game Help'))
    .forEach(toSettings);
}

const entries = (obj) => Object.entries(obj);

function mutate(fn, obj, arr) {
  if (isObject(arr[1]) && arr[1] !== null) {
    fn(obj[arr[0]], arr[1]);
  } else {
    // eslint-disable-next-line prefer-destructuring, no-param-reassign
    obj[arr[0]] = arr[1];
  }
}

function mixin(obj, mixins) {
  entries(mixins).forEach(partial(mutate, mixin, obj));
}

function cElement(type, props) {
  const el = document.createElement(type);
  if (props) { mixin(el, props); }
  return el;
}

function createDiv(props) {
  return cElement('div', props);
}

function hasClass(className, el) {
  return el.classList.contains(className);
}

function insertElement(parent, child) {
  if (parent instanceof Node && child instanceof Node) {
    parent.appendChild(child);
  }
  return child;
}

function jQueryDialog(fn) { // jQuery
  let content = getElementById('content');
  if (content) {
    setInnerHtml('', content);
  } else {
    content = createDiv({
      id: 'content',
      style: { display: 'none' },
    });
    insertElement(document.body, content);
  }
  $(content).dialog({
    width: 640,
    modal: true,
    position: {
      my: 'top', at: 'top', offset: '0 60', collision: 'none',
    },
    resizable: false,
  });
  fn(content);
}

function jQueryPresent() { return isFunction(window.jQuery); }

function onclick(target, listener, options) {
  on(target, 'click', listener, options);
}

function runDefault(prm) {
  prm.then((m) => m.default());
}

const injectBioWidgets = () => { runDefault(import('./bioWidgets-505831fc.js')); };
const injectGuild = () => { runDefault(import('./guild-03f03efd.js')); };
const injectProfile = () => { runDefault(import('./profile-c9b60fda.js').then(function (n) { return n.p; })); };
const injectProfileDropItems = () => { runDefault(import('./injectProfileDropItems-de77ae10.js')); };
const injectQuestBookFull = () => { runDefault(import('./injectQuestBookFull-f03f0764.js')); };
const inventing = () => { runDefault(import('./inventing-5f7d3fb0.js')); };
const news = () => { runDefault(import('./news-52455b6b.js')); };
const ufsgAllowBack = () => { runDefault(import('./ufsgAllowBack-efeb1b04.js')); };
const viewArchive = () => { runDefault(import('./viewArchive-71628cf3.js')); };

const injectBuffLog = (i) => { import('./injectBuffLog-0106e358.js').then((m) => m.default(i)); };
const injectFsBoxContent = (i) => { import('./injectFsBoxContent-fb35d5c8.js').then((m) => m.default(i)); };
const injectMonsterLog = (i) => { import('./monstorLog-de4c1b06.js').then((m) => m.default(i)); };
const injectNotepadShowLogs = (i) => { import('./combatLog-7c0b9d36.js').then((m) => m.default(i)); };
const injectOnlinePlayers = (i) => { import('./injectOnlinePlayers-eec32ee6.js').then((m) => m.default(i)); };
const injectRecipeManager = (i) => { import('./recipeMgr-5c49fc14.js').then((m) => m.default(i)); };
const insertQuickExtract = (i) => { import('./quickExtract-9001e630.js').then((m) => m.default(i)); };
const insertQuickWear = (i) => { import('./quickWear-9c5cbffe.js').then((m) => m.default(i)); };

const injectAuctionSearch = (i) => { import('./lists-f7a9ed58.js').then((m) => m.injectAuctionSearch(i)); };
const injectQuickLinkManager = (i) => { import('./lists-f7a9ed58.js').then((m) => m.injectQuickLinkManager(i)); };
const injectFindBuffs = (i) => { import('./findBuffs-8e56845b.js').then((m) => m.injectFindBuffs(i)); };
const injectFindOther = (i) => { import('./findBuffs-8e56845b.js').then((m) => m.injectFindOther(i)); };

const helperMenuBlob = '<div class="column"><h3>Character</h3><ul>'
  + '<li><span class="fshLink">Buff Log</span></li>'
  + '<li><span class="fshLink">Combat Log</span></li>'
  + '<li><span class="fshLink">Creature Log</span></li>'
  + '<li><span class="fshLink">Recipe Manager</span></li>'
  + '<li><span class="fshLink">Quick Links</span></li>'
  + `<li><a href="${notepadBlankUrl}invmanagernew">Inventory Manager</a></li>`
  + '</ul><h3>Actions</h3><ul>'
  + '<li><span class="fshLink">Find Buffs</span></li>'
  + '<li><span class="fshLink">Find Other</span></li>'
  + '<li><span class="fshLink">Online Players</span></li>'
  + '<li><span class="fshLink">AH Quick Search</span></li>'
  + '</ul><h3>Guild</h3><ul>'
  + `<li><a href="${notepadBlankUrl}guildinvmgr">Guild Inventory</a></li>`
  + `<li><a href="${newGuildLogUrl}">New Guild Log</a></li>`
  + '</ul><h3>Extra</h3><ul>'
  + '<li><span class="fshLink">Quick Extract</span></li>'
  + '<li><span class="fshLink">Quick Wear</span></li>'
  + '<li><span class="fshLink">FS Box Log</span></li>'
  + '</ul><h3>FSH developer quick links</h3><ul>'
  + '<li><span class="a-reply" target_player="PointyHair">PM</span> '
  + `<a href="${playerIdUrl}1963510">PointyHair</a></li>`
  + '</ul></div>';

function toggleMenu(evt) {
  if (evt.target.id !== 'helperMenu') { return; }
  const menu = evt.target.children[0];
  menu.classList.toggle('showMenuDiv');
}

const functionLookup = {
  'Buff Log': injectBuffLog,
  'Combat Log': injectNotepadShowLogs,
  'Creature Log': injectMonsterLog,
  'Recipe Manager': injectRecipeManager,
  'Quick Links': injectQuickLinkManager,
  'Find Buffs': injectFindBuffs,
  'Find Other': injectFindOther,
  'Online Players': injectOnlinePlayers,
  'AH Quick Search': injectAuctionSearch,
  'Quick Extract': insertQuickExtract,
  'Quick Wear': insertQuickWear,
  'FS Box Log': injectFsBoxContent,
};

function callHelperFunction(evt) {
  const functionPath = getText(evt.target);
  const fn = functionLookup[functionPath];
  if (jQueryPresent() && isFunction(fn)) {
    sendEvent('helperMenu', functionPath);
    jQueryDialog(fn);
  }
}

function eventHandler(evt) {
  if (hasClass('fshLink', evt.target)) {
    callHelperFunction(evt);
    return;
  }
  if (hasClass('a-reply', evt.target)) {
    window.openQuickMsgDialog(evt.target.getAttribute('target_player'));
  }
}

function showHelperMenu(evt) {
  const helperMenu = evt.target;
  const helperMenuDiv = createDiv({
    id: 'helperMenuDiv',
    className: 'helperMenuDiv fshInnerBg',
  });
  insertHtmlBeforeEnd(helperMenuDiv, helperMenuBlob);
  insertElement(helperMenu, helperMenuDiv);
  onclick(helperMenu, toggleMenu);
  onclick(helperMenuDiv, eventHandler);
}

function haveNode$1() {
  const helperMenu = createDiv({
    id: 'helperMenu',
    className: 'helperMenu',
    innerHTML: 'Helper&nbsp;Menu',
  });
  if (getValue('keepHelperMenuOnScreen')) {
    helperMenu.classList.add('fshFixed');
  }
  once(helperMenu, 'mouseenter', showHelperMenu);
  if (getValue('draggableHelperMenu')) {
    helperMenu.classList.add('fshMove');
    draggable(helperMenu);
  }
  insertElement(document.body, helperMenu);
}

function injectHelperMenu() {
  // don't put all the menu code here (but call if clicked) to minimize lag
  const node = getElementById('statbar-container');
  if (node) { haveNode$1(); }
}

function getCalfPrefs(pref) { calf[pref] = getValue(pref); }

function asyncPThree(fnList) {
  fnList.forEach((fn) => add(3, fn));
}

function fromEntries(entries) {
  return Object.fromEntries(entries);
}

function jQueryNotPresent() { return !jQueryPresent(); }

function querySelector(selector, scope) {
  if (scope) { return scope.querySelector(selector); }
  return document.querySelector(selector);
}

function sectionClosed(id) {
  return id !== -1
    && querySelector(`#nav li.nav-level-0:nth-child(${id + 1}) ul`)
      .offsetHeight === 0;
}

function validateId(id) {
  if (sectionClosed(id)) {
    sendEvent('accordion', 'collapse');
    return -1;
  }
  return id;
}

function navMenu(myNav) {
  const oldSave = myNav._saveState;
  // eslint-disable-next-line no-param-reassign
  myNav._saveState = function _saveState(id) {
    oldSave.call(myNav, validateId(id));
  };
}

function foundNav(myNav) {
  if (isObject(myNav)) { return true; }
  sendException('$(\'#nav\').data(\'hcsNav\') is not an object', false);
}

function foundHeights(myNav) {
  if ('heights' in myNav) { return true; }
  sendException('$(\'#nav\').data(\'hcsNav\').heights does not exist', false);
}

function foundWidget(myNav) {
  if (foundNav(myNav) && foundHeights(myNav)) { return true; }
}

function preFlight() { // jQuery.min
  const theNav = getElementById('nav');
  const myNav = $(theNav).data('hcsNav');
  if (myNav && foundWidget(myNav)) {
    return [theNav, myNav];
  }
  return [];
}

var theLinks = ["recipeManagerLink","medalGuideLink","inventoryManagerLink","buffLogLink","combatLogLink","creatureLogLink","quickLinksLink","auctionSearchLink","onlinePlayersLink","findOtherLink","findBuffsLink","guildInventoryLink","newGuildLogLink","topRatedLink"];

function updateQuestLink() {
  const lastActiveQuestPage = getValue('lastActiveQuestPage');
  if (getValue('storeLastQuestPage') && lastActiveQuestPage.length > 0) {
    getElementById('nav-character-questbook').href = lastActiveQuestPage;
  }
}

function updateScavLink() {
  const lastScavPage = getValue('lastScavPage');
  if (getValue('storeLastScavPage') && lastScavPage.length > 0) {
    getElementById('nav-actions-artisanship-scavenging').href = lastScavPage;
  }
}

function updateLinks() {
  updateQuestLink();
  updateScavLink();
}

function getLinkConfig(theNav, myNav) {
  const linkConfig = theLinks.map((c) => [c, getValue(c)]);
  if (linkConfig.some(([, b]) => b)) {
    import('./injectItems-6b3b38f9.js')
      .then((m) => m.default(theNav, myNav, fromEntries(linkConfig)));
  }
}

function doAccordion() {
  const [theNav, myNav] = preFlight();
  if (theNav && myNav) {
    updateLinks();
    getLinkConfig(theNav, myNav);
    navMenu(myNav);
  }
}

function injectMenu() {
  if (!pCL || jQueryNotPresent()) { return; }
  doAccordion();
}

var css$6 = ".fshButton {\n  background: #fece2f url(https://www.fallensword.com/media/dist/img/jQueryUITheme/ui-bg_gloss-wave_60_fece2f_500x100.png) 50% 50% repeat-x;\n  border: 1px solid #d19405;\n  color: #4c3000;\n  font-weight: bold;\n}\n.fshButton:hover {\n  background: #f0be00 url(https://www.fallensword.com/media/dist/img/jQueryUITheme/ui-bg_gloss-wave_70_f0be00_500x100.png) 50% 50% repeat-x;\n  border: 1px solid #a45b13;\n  color: #381f00;\n  font-weight: bold;\n}\n.fshBlck {display: block;}\n.fshTmpl {\n  box-sizing: border-box;\n  width: 100%;\n}\n";
var modules_514e5e3f = {};

function getElementsByClassName(names, element) {
  if (element) { return element.getElementsByClassName(names); }
  return document.getElementsByClassName(names);
}

let quickMsgDialog;

function getQuickMessageDialog() {
  if (!quickMsgDialog) {
    quickMsgDialog = getElementById('quickMessageDialog');
  }
  return quickMsgDialog;
}

function setText(text, ctx) {
  if (ctx instanceof Node) {
    ctx.textContent = String(text);
  }
}

let validateTips;

function getValidateTips() {
  if (!validateTips) {
    const nodes = getElementsByClassName('validateTips',
      getQuickMessageDialog());
    if (nodes.length === 1) {
      [validateTips] = nodes;
    }
  }
  return validateTips;
}

function doValidateTip(text) {
  if (getValidateTips()) {
    setText(fallback(text, ''), validateTips);
  }
}

let dialogMsg;

function getMsg() {
  if (!dialogMsg) {
    dialogMsg = getElementById('quickMsgDialog_msg');
  }
  return dialogMsg;
}

let enterForSendMessage$1;
let handlerEnabled;
let sendMessage;

function getSendMessage() { // jQuery
  if (!sendMessage) {
    const buttons = $(getQuickMessageDialog()).dialog('option', 'buttons');
    sendMessage = buttons['Send Message'];
  }
  return sendMessage;
}

function getEnterForSendMessage() {
  if (isUndefined(enterForSendMessage$1)) {
    enterForSendMessage$1 = getValue('enterForSendMessage');
  }
  return enterForSendMessage$1;
}

function keypress(evt) {
  if (evt.key === 'Enter' && !evt.shiftKey) {
    evt.preventDefault();
    getSendMessage()();
  }
}

function sendOnEnter() {
  if (getEnterForSendMessage() && !handlerEnabled) {
    on(getMsg(), 'keypress', keypress);
    handlerEnabled = true;
  }
}

let targetPlayer;

function getName() {
  return targetPlayer;
}

function setName(name) {
  targetPlayer = name;
  setText(name, getElementById('quickMsgDialog_targetUsername'));
}

function classPair(target, el) { return hasClass(el[0], target); }

function handleEvent(passingTest, evtAry, evt) {
  const { target } = evt;
  const hdl = evtAry.find(partial(passingTest, target));
  if (hdl) { return hdl[1](target); }
}

function classHandler(evtAry) {
  return partial(handleEvent, classPair, evtAry);
}

function isNumber(e) { return typeof e === 'number'; }

function storItem(name, type, value) {
  if (!isUndefined(Modernizr) && Modernizr.localstorage) {
    window.localStorage.setItem(GMSTORAGE_PATH + name, type + value);
  }
}

const cold = [
  [isString, (name, value) => { storItem(name, 'S]', value); }],
  [
    isNumber,
    (name, value) => {
      if (value.toString().indexOf('.') < 0) { storItem(name, 'N]', value); }
    },
  ],
  [isBoolean, (name, value) => { storItem(name, 'B]', value); }],
];

function setValue(name, value) {
  const storType = cold.find((pair) => pair[0](value));
  if (storType) {
    storType[1](name, value);
  }
}

function setValueJSON(name, value) {
  setValue(name, JSON.stringify(value));
}

let fshTemplate;
let msgTbl;
let showingTemplates;

function getFshTemplate() {
  if (!fshTemplate) {
    fshTemplate = getValueJSON('quickMsg');
  }
  return fshTemplate;
}

function getTable() {
  if (!msgTbl) {
    msgTbl = getQuickMessageDialog().lastElementChild;
  }
  return msgTbl;
}

function addRow(index, myBtn, html) {
  const newRow = msgTbl.insertRow(index);
  let newCell = newRow.insertCell(-1);
  insertHtmlBeforeEnd(newCell, myBtn);
  newCell = newRow.insertCell(-1);
  insertHtmlBeforeEnd(newCell, html);
}

function fshButton(classPrefix, label) {
  return `<button class="fshButton ui-corner-all ${classPrefix
  }-button">${label}</button>`;
}

function addTemplateRow(index, text) {
  addRow(index, fshButton('del', 'Del'),
    `<span class="ui-widget-content fshBlck add-template">${
      text}</span>`);
}

function insertTemplate(target) {
  getMsg().value += `${getText(target)
    .replace(/\{playername\}/g, getName())}`;
}

function deleteTemplate(target) {
  const myRow = target.parentNode.parentNode.rowIndex;
  msgTbl.deleteRow(myRow);
  fshTemplate.splice(myRow - 2, 1);
  setValueJSON('quickMsg', fshTemplate);
}

function addNewTemplate(target) {
  const templateInput = target.parentNode.nextElementSibling.children[0];
  const templateValue = templateInput.value;
  if (templateValue !== '') {
    const myRow = target.parentNode.parentNode.rowIndex;
    addTemplateRow(myRow, templateValue);
    templateInput.value = '';
    fshTemplate.push(templateValue);
    setValueJSON('quickMsg', fshTemplate);
  }
}

const classEvents = [
  ['del-button', deleteTemplate],
  ['add-button', addNewTemplate],
  ['add-template', insertTemplate],
];

function makeRows(text) { addTemplateRow(-1, text); }

function showMsgTemplate() {
  if (getValue('enableMessageTemplates') && !showingTemplates) {
    onclick(getTable(), classHandler(classEvents));
    getFshTemplate().forEach(makeRows);
    addRow(-1,
      fshButton('add', 'Add'),
      '<input id="newTmpl" class="ui-widget-content fshTmpl">');
    showingTemplates = true;
  }
}

function setMsg(msg) {
  const dialogMsg = getMsg();
  dialogMsg.value = fallback(msg, '');
  dialogMsg.disabled = false;
}

function openQuickMsgDialog(name, msg, tip) { // jQuery
  const quickMsgDialog = getQuickMessageDialog();
  if (hasClass('ui-dialog-content', quickMsgDialog)) {
    setName(name);
    setMsg(msg);
    doValidateTip(tip);
    showMsgTemplate();
    sendOnEnter();
    $(quickMsgDialog).dialog('open');
  }
}

function injectQuickMsgDialogJQ() {
  if (jQueryNotPresent()) { return; }
  window.openQuickMsgDialog = openQuickMsgDialog;
}

function moveUp(title) {
  import('./moveRHSBoxUpOnRHS-29e4df7f.js').then((m) => m.default(title));
}

function moveLeft(title) {
  import('./moveRHSBoxToLHS-7a186941.js').then((m) => m.default(title));
}

function doMoveGuildList() {
  if (getValue('moveGuildList')) {
    moveUp('minibox-guild');
  }
}

function doMoveAllyList() {
  if (getValue('moveOnlineAlliesList')) {
    moveUp('minibox-allies');
  }
}

function doMoveFsBox() {
  if (getValue('moveFSBox')) {
    moveLeft('minibox-fsbox');
  }
}

function doMoveDailyQuest() {
  if (getValue('moveDailyQuest')) {
    moveLeft('minibox-daily-quest');
  }
}

function doMoveXmas() {
  if (getValue('moveXmasBox')) {
    moveLeft('minibox-xmas');
  }
}

function callAllyEnemy() {
  if (calf.enableAllyOnlineList
      || calf.enableEnemyOnlineList) {
    runDefault(import('./allyEnemy-81242ab0.js'));
  }
}

function callBounties() {
  if (calf.enableWantedList
      || calf.enableActiveBountyList) {
    runDefault(import('./activeWantedBounties-d7b2e9ef.js'));
  }
}

function callGuildInfo() {
  if (calf.enableGuildInfoWidgets) {
    runDefault(import('./addGuildInfoWidgets-684158a2.js'));
  }
}

function callAllies() {
  if (calf.enableOnlineAlliesWidgets) {
    runDefault(import('./addOnlineAlliesWidgets-c7b4e9d6.js'));
  }
}

function callTemple() {
  if (calf.enableTempleAlert) {
    runDefault(import('./injectTempleAlert-9e7f259a.js'));
  }
}

function callUpgrade() {
  if (calf.enableUpgradeAlert) {
    runDefault(import('./injectUpgradeAlert-9de592ae.js'));
  }
}

function callComposing() {
  if (calf.enableComposingAlert) {
    runDefault(import('./injectComposeAlert-5312f177.js'));
  }
}

function statbar() {
  if (getValue('statBarLinks')) {
    runDefault(import('./statBar-447a2105.js'));
  }
}

function staminaCalc() {
  if (getValue('staminaCalculator')) {
    runDefault(import('./injectStaminaCalculator-adfca01a.js'));
  }
}

function levelCalc() {
  if (getValue('levelUpCalculator')) {
    runDefault(import('./injectLevelupCalculator-c3ce9c47.js'));
  }
}

function fsBoxLog() {
  if (getValue('fsboxlog')) {
    runDefault(import('./injectFSBoxLog-94a031e9.js'));
  }
}

function expandQb() {
  if (getValue('resizeQuickBuff')) {
    runDefault(import('./interceptQuickBuff-c3ddc656.js'));
  }
}

function joinAll() {
  if (getValue('joinAllLink')) {
    runDefault(import('./injectJoinAllLink-1149d870.js'));
  }
}

function guildLogHref() {
  if (getValue('useNewGuildLog')) {
    runDefault(import('./changeGuildLogHREF-e71523f6.js'));
  }
}

function gameStats() {
  if (getValue('addServerNode')) {
    runDefault(import('./injectServerNode-498a50b7.js'));
  }
}

function scoutTower() {
  if (getValue('addScoutTowerLink')) {
    runDefault(import('./scoutTowerLink-3ad9d1c1.js'));
  }
}

function guildActivityTracker() {
  if (jQueryPresent() && getValue(defEnableGuildActivityTracker)) {
    runDefault(import('./guildActivity-34a2bfb6.js'));
  }
}

function seTracker() {
  if (jQueryPresent() && calf.enableSeTracker && calf.cmd !== 'superelite') {
    import('./seLog-50836823.js').then((m) => m.seLog());
  }
}

// move boxes in opposite order that you want them to appear.
const p3functions = [
  doMoveGuildList,
  doMoveAllyList,
  doMoveXmas,
  doMoveDailyQuest,
  doMoveFsBox,
  callAllyEnemy,
  callBounties,
  callGuildInfo,
  callAllies,
  callTemple,
  callUpgrade,
  callComposing,
  injectMenu,
  injectQuickMsgDialogJQ,
  statbar,
  staminaCalc,
  levelCalc,
  fsBoxLog,
  expandQb,
  joinAll,
  guildLogHref,
  gameStats,
  scoutTower,
  guildActivityTracker,
  seTracker,
];

function priorityThree() {
  asyncPThree(p3functions);
}

const calfPrefs = [
  'enableAllyOnlineList',
  'enableEnemyOnlineList',
  'enableGuildInfoWidgets',
  'enableOnlineAlliesWidgets',
  'enableSeTracker',
  'hideGuildInfoTrade',
  'hideGuildInfoSecureTrade',
  'hideGuildInfoBuff',
  'hideGuildInfoMessage',
  'hideBuffSelected',
  'fixBuffSelected',
  'enableTempleAlert',
  'enableUpgradeAlert',
  'enableComposingAlert',
  'enableActiveBountyList',
  'enableWantedList',
  'wantedGuildMembers',
  'enableMaxGroupSizeToJoin',
  'maxGroupSizeToJoin',
];

function getEnvVars() {
  calfPrefs.forEach(getCalfPrefs);
  calf.allyEnemyOnlineRefreshTime = getValue('allyEnemyOnlineRefreshTime')
    * 1000;
}

function notHuntMode() {
  if (calf.huntingMode) { return; }
  getEnvVars();
  priorityThree();
}

function expandMenu(section) {
  if (getValue('expandMenuOnKeyPress')) {
    localStorage.setItem('hcs.nav.openIndex', section);
  }
}

function keyHandlerEvent(func) {
  sendEvent('keyHandler', func);
}

function navigateTo(url) {
  window.location = url;
}

function backpack() {
  keyHandlerEvent('backpack');
  expandMenu('2');
  navigateTo(dropItemsUrl);
}

function keys(obj) {
  return Object.keys(obj);
}

function overwriteKey(obj, mixins, fn, key) {
  if (isObject(mixins[key]) && mixins[key] !== null) {
    // eslint-disable-next-line no-param-reassign
    obj[key] = fn(mixins[key].constructor(), mixins[key]);
  } else {
    // eslint-disable-next-line no-param-reassign
    obj[key] = mixins[key];
  }
}

function extend(obj, mixins) {
  if (isObject(mixins)) {
    keys(mixins).forEach(partial(overwriteKey, obj, mixins, extend));
  }
  return obj;
}

function url(opt) {
  if (opt.data) {
    // eslint-disable-next-line no-param-reassign
    delete opt.data.fshrnd;
    return $.param(opt.data);
  }
  return opt.url;
}

function buildErrorMsg(opt, jqXhr, textStatus, errorThrown) {
  const xhrStatus = `${jqXhr.status} ${jqXhr.statusText} - `;
  if (jqXhr.statusText === errorThrown.toString()) {
    return xhrStatus + url(opt);
  }
  const jqStatus = `${xhrStatus + textStatus} ${errorThrown} - ${url(opt)}`;
  if (textStatus === 'parsererror') {
    return `${jqStatus} - ${jqXhr.responseText}`;
  }
  return jqStatus;
}

class AjaxError extends Error {
  constructor([opt, jqXhr, textStatus, errorThrown], ...params) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super(buildErrorMsg(opt, jqXhr, textStatus, errorThrown), ...params);

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AjaxError);
    }

    // Custom debugging information
    this.jqSettings = opt;
    this.jqXhr = jqXhr;
    this.jqTextStatus = textStatus;
    this.jqErrorThrown = errorThrown;
  }
}

let paused$1 = true;
let queue = [];
let globalHandler;

function setOpts(options) {
  if (typeof options === 'string') {
    return { url: options };
  }
  return options;
}

function clearXhr(xhr) {
  xhr.abort();
  queue = [];
}

function beforeSend(xhr) {
  on(window, 'beforeunload', partial(clearXhr, xhr));
}

const ignoreStatus = [0, 503, 504];
const ignoreTextStatus = ['abort'];
const ignoreResponse = [
  'We have encountered an issue with a server connection',
  'We\'re performing maintenance on the game',
  'the team have been notified and will get it fixed soon',
  'uUDRezBqFM4',
];

function ignore(ajaxErr) {
  return ignoreStatus.includes(ajaxErr.jqXhr.status)
    || ignoreTextStatus.includes(ajaxErr.jqTextStatus)
    || ignoreResponse.some(
      (substring) => ajaxErr.jqXhr.responseText.includes(substring),
    );
}

function handleFailure(resolve, ajaxErr) {
  if (!ignore(ajaxErr)) {
    sendException(ajaxErr.toString(), false);
    // reject(ajaxErr);
    resolve(undefined);
  }
}

function failFilter([fn, opt, retries, resolve, reject]) {
  return function ajaxFail(jqXhr, textStatus, errorThrown) { // Closure
    if (retries > 0 && jqXhr.status === 503) {
      setTimeout(fn, 100, opt, retries - 1, resolve, reject);
    } else {
      handleFailure(resolve,
        new AjaxError([opt, jqXhr, textStatus, errorThrown]));
    }
  };
}

function doAjax(options, retries, resolve, reject) {
  const opt = setOpts(options);
  opt.beforeSend = beforeSend;
  return $.ajax(opt).then(resolve)
    .catch(failFilter([doAjax, opt, retries, resolve, reject]));
}

function attemptTask(runner) {
  if ($.active < 5) {
    const opts = queue.shift();
    doAjax(...opts);
    runner();
  }
}

function taskRunner$1() {
  if (queue.length === 0) {
    paused$1 = true;
  } else {
    paused$1 = false;
    attemptTask(taskRunner$1);
  }
}

function initGlobalHandler() {
  if (!globalHandler) {
    $(document).ajaxComplete(taskRunner$1);
    globalHandler = true;
  }
}

function add$1(options, retries, resolve, reject) {
  queue.push([options, retries, resolve, reject]);
  if (paused$1) { taskRunner$1(); }
}

function retryAjax(options) {
  initGlobalHandler();
  if (options) {
    return new Promise(((resolve, reject) => {
      add$1(options, 10, resolve, reject);
    }));
  }
}

function callApp(data) {
  return retryAjax({
    url: 'app.php',
    data: extend(data, { browser: 1 }),
    dataType: 'json',
  });
}

function profile(data) {
  return callApp(extend({ cmd: 'profile' }, data));
}

function view() {
  return profile({ subcmd: 'view' });
}

// import { $dataAccess } from './_dataAccess';
// import viewProfile from './fallbacks/viewProfile';

function daViewProfile() {
  // return $dataAccess(appViewProfile, viewProfile);
  return view();
}

const jsonTests = [
  (itemIndex, json) => json,
  (itemIndex, json) => json.s,
  (itemIndex, json) => json.r,
  (itemIndex, json) => json.r.equip_sets,
  (itemIndex, json) => json.r.equip_sets.length > itemIndex,
];

function funcPasses(itemIndex, json, fn) { return fn(itemIndex, json); }

function goodData(itemIndex, json) {
  return jsonTests.every(partial(funcPasses, itemIndex, json));
}

function changeCombatSet(itemIndex, json) {
  if (goodData(itemIndex, json)) {
    const cbsIndex = json.r.equip_sets[itemIndex].id;
    expandMenu('2');
    navigateTo(`${profileUrl + defSubcmd}managecombatset&submit=Use&combatSetId=${cbsIndex}`);
  }
}

function combatSetKey(itemIndex) {
  keyHandlerEvent('changeCombatSet');
  daViewProfile().then(partial(changeCombatSet, itemIndex));
}

function createGroup() {
  keyHandlerEvent('createGroup');
  expandMenu('4');
  navigateTo(`${groupsSubcmdUrl}create`);
}

function notWorld(type, href) {
  if (!getElementById('worldPage')) {
    keyHandlerEvent(type);
    navigateTo(href);
  }
}

function doRepair() {
  // do not use repair link for new map
  notWorld('doRepair', `${blacksmithUrl + defSubcmd}repairall`);
}

function indexAjax(options) {
  mixin(options, { url: indexPhp, data: { no_mobile: 1 } });
  return retryAjax(options);
}

function indexAjaxData(data) {
  return indexAjax({ data });
}

function createDocument(details) {
  // Use DOMParser to prevent img src tags downloading
  const parser = new DOMParser();
  const doc = parser.parseFromString(details, 'text/html');
  return doc;
}

function infoBox(scope) {
  const infoMsg = getElementById('info-msg', scope);
  if (infoMsg) {
    const infoMatch = infoMsg.innerHTML;
    if (infoMatch) {
      return infoMatch.replace(/<br.*/, '');
    }
    return '';
  }
}

function infoBoxFrom(documentText) {
  const doc = createDocument(documentText);
  return infoBox(doc);
}

let sendGoldonWorld$1;

function initSendGoldOnWorld() {
  sendGoldonWorld$1 = getValue('sendGoldonWorld');
}

function doneSendGold(data) {
  const info = infoBoxFrom(data);
  if (info === 'You successfully sent gold!' || info === '') {
    setValue('currentGoldSentTotal',
      parseInt(getValue('currentGoldSentTotal'), 10)
      + parseInt(getValue('goldAmount'), 10));
    GameData.fetch(defFetchPlayerStats);
  }
}

function doSendGold() { // jQuery
  if (!sendGoldonWorld$1) { return; }
  indexAjaxData({
    cmd: 'trade',
    subcmd: 'sendgold',
    xc: window.ajaxXC,
    target_username: $('#HelperSendTo').html(),
    gold_amount: $('#HelperSendAmt').html().replace(/[^\d]/g, ''),
  }).then(doneSendGold);
}

function fastWearMgr() {
  if (!('dialogIsClosed' in calf) || calf.dialogIsClosed()) {
    keyHandlerEvent('insertQuickWear');
    jQueryDialog(insertQuickWear);
  }
}

function gotoGuild() {
  keyHandlerEvent('gotoGuild');
  expandMenu('4');
  navigateTo(`${guildSubcmdUrl}manage`);
}

function joinGroups() {
  if (!calf.enableMaxGroupSizeToJoin) {
    navigateTo(joinallUrl);
  } else {
    navigateTo(joinUnderUrl);
  }
}

function joinAllGroup() {
  keyHandlerEvent('joinAllGroup');
  expandMenu('4');
  joinGroups();
}

function logPage() {
  keyHandlerEvent('logPage');
  expandMenu('2');
  navigateTo(logUrl);
}

function clickThis(el) {
  el.click();
}

function movePage(dir) {
  const dirButton = querySelector(`#pCC input[value="${dir}"]`);
  if (!dirButton) { return; }
  keyHandlerEvent('movePage');
  clickThis(dirButton);
}

function profile$1() {
  keyHandlerEvent('profile');
  expandMenu('2');
  navigateTo(profileUrl);
}

function toWorld() {
  // do not use for new map
  notWorld('toWorld', worldUrl);
}

const keyLookup = [
  ['!', combatSetKey, 0], // Shift+1
  ['@', combatSetKey, 1], // Shift+2
  ['"', combatSetKey, 1], // Shift+2 -- for UK keyboards
  ['#', combatSetKey, 2], // Shift+3
  ['£', combatSetKey, 2], // Shift+3 -- for UK keyboards
  ['$', combatSetKey, 3], // Shift+4
  ['%', combatSetKey, 4], // Shift+5
  ['^', combatSetKey, 5], // Shift+6
  ['&', combatSetKey, 6], // Shift+7
  ['*', combatSetKey, 7], // Shift+8
  ['(', combatSetKey, 8], // Shift+9
  ['0', toWorld], // go to world [0]
  ['<', movePage, '<'], // move to prev page [<]
  ['>', movePage, '>'], // move to next page [>]
  ['G', createGroup], // create group [G]
  ['L', logPage], // Log Page [L]
  ['b', backpack], // backpack [b]
  ['g', gotoGuild], // go to guild [g]
  ['j', joinAllGroup], // join all group [j]
  ['l', logPage], // Log Page [l]
  ['p', profile$1], // profile [p]
  ['r', doRepair], // repair [r]
  ['v', fastWearMgr], // fast wear manager [v]
  ['y', doSendGold], // fast send gold [y]
];

function handleKey(key) {
  const mapping = keyLookup.find(([mapped]) => key === mapped);
  if (mapping) { mapping[1](mapping[2]); }
}

const bailOut = [
  (evt) => ['HTML', 'BODY'].every((tag) => evt.target.tagName !== tag),
  /* ignore control, alt and meta keys
  (I think meta is the command key in Macintoshes) */
  (evt) => evt.ctrlKey,
  (evt) => evt.metaKey,
  (evt) => evt.altKey,
];

function doNotHandle(evt) {
  return bailOut.some((fn) => fn(evt));
}

function handleKeyUp(e) {
  if (doNotHandle(e)) { return; }
  handleKey(e.key);
}

function replaceKeyHandler() {
  on(document, 'keyup', handleKeyUp);
}

function prepareEnv() {
  if (getValue('gameHelpLink')) {
    add(3, gameHelpLink$1);
  }
  calf.huntingMode = getValue('huntingMode');
  add(3, replaceKeyHandler);
  notHuntMode();
  if (!getValue('hideHelperMenu')) {
    add(3, injectHelperMenu);
  }
}

function findHcsData() {
  const hcsHtml = getElementById('html');
  if (hcsHtml && hcsHtml.dataset) {
    return hcsHtml.dataset.hcs;
  }
}

function lookForUi(hcsData) {
  const thisJson = jsonParse(hcsData);
  if (thisJson && thisJson['new-ui']) {
    prepareEnv();
  }
}

function lookForHcsData() {
  const hcsData = findHcsData();
  if (hcsData) {
    lookForUi(hcsData);
  }
}

const injectArena = () => { runDefault(import('./arena-46169a38.js').then(function (n) { return n.b; })); };
const arenaDoJoin = () => { runDefault(import('./arenaDoJoin-ed8896a5.js')); };
const arenaJoin = () => {
  runDefault(import('./arenaJoin-939d3355.js'));
};
const completedArenas = () => {
  runDefault(import('./completedArenas-c589e398.js'));
};
const setupMoves = () => {
  runDefault(import('./setup-c72d851c.js'));
};
const storeMoves = () => { runDefault(import('./store-be980713.js')); };

const arena = {
  '-': { '-': injectArena },
  dojoin: { '-': arenaDoJoin },
  join: { '-': arenaJoin },
  completed: { '-': completedArenas },
  pickmove: { '-': storeMoves },
  setup: { '-': setupMoves },
};

const injectAuctionHouse = () => {
  runDefault(import('./injectAuctionHouse-25d5071c.js'));
};
const quickCreate = () => {
  runDefault(import('./quickCreate-e9dad8a3.js'));
};

var auctionhouse = {
  '-': { '-': injectAuctionHouse },
  quickcreate: { '-': quickCreate },
};

const composingBreakdown = () => { runDefault(import('./breakdown-c74cec26.js')); };
const composingCreate = () => { runDefault(import('./composingCreate-6fce19c1.js')); };
const injectComposing = () => { runDefault(import('./composing-649f2077.js')); };

var composing = {
  '-': { '-': injectComposing },
  breakdown: { '-': composingBreakdown },
  create: { '-': composingCreate },
};

const injectAdvisor = () => {
  runDefault(import('./guildAdvisor-83090659.js'));
};

var advisor = {
  '-': injectAdvisor,
  weekly: injectAdvisor,
};

const injectGroups = () => {
  runDefault(import('./groups-39251032.js'));
};
const injectGroupStats = () => {
  runDefault(import('./injectGroupStats-9b1a8a1e.js'));
};

var groups = {
  viewstats: injectGroupStats,
  joinallgroupsundersize: injectGroups,
  joinall: injectGroups,
  '-': injectGroups,
};

const guildHall = () => { runDefault(import('./hall-aebee969.js')); };

var hall = {
  '-': guildHall,
  post: injectBioWidgets,
};

const injectReportPaint = () => {
  runDefault(import('./guildReport-55ee13bd.js'));
};
const injectGuildAddTagsWidgets = () => {
  runDefault(import('./injectGuildAddTagsWidgets-24cfa359.js'));
};
const storeitems = () => {
  runDefault(import('./storeitems-9eae1e87.js'));
};

var inventory = {
  report: injectReportPaint,
  addtags: injectGuildAddTagsWidgets,
  removetags: injectGuildAddTagsWidgets,
  storeitems,
};

const guildChat = () => { runDefault(import('./guildChat-00f9724e.js')); };
const guildLog = () => { runDefault(import('./guildLog-b028c477.js')); };
const guildMailbox = () => {
  runDefault(import('./guildMailbox-e494ab7e.js'));
};
const injectGuildBank = () => {
  runDefault(import('./injectGuildBank-ab12296a.js'));
};
const injectGuildRanks = () => {
  runDefault(import('./rank-18d5a4d4.js'));
};
const injectRPUpgrades = () => {
  runDefault(import('./injectRPUpgrades-9603e5a1.js'));
};
const injectScouttower = () => {
  runDefault(import('./injectScouttower-058f7431.js'));
};

var guild = {
  inventory,
  chat: { '-': guildChat },
  dochat: { '-': guildChat },
  log: { '-': guildLog },
  groups,
  manage: { '-': injectGuild },
  advisor,
  history: { '-': injectBioWidgets },
  view: { '-': injectGuild },
  scouttower: { '-': injectScouttower },
  mailbox: { '-': guildMailbox },
  ranks: { '-': injectGuildRanks },
  conflicts: { rpupgrades: injectRPUpgrades },
  bank: { '-': injectGuildBank },
  hall,
};

function isNewMap() {
  return jQueryPresent() && getElementById('worldPage') && window.GameData;
}

function injectWorld() {
  if (isNewMap()) {
    runDefault(import('./newMap-3851caa4.js'));
  }
}

const itemsView = () => { runDefault(import('./itemsView-363acbfd.js')); };

var items = {
  '-': { '-': ufsgAllowBack },
  view: { '-': itemsView },
};

const playerLog = () => { runDefault(import('./playerLog-4b2942dd.js')); };
const outbox = () => { runDefault(import('./outbox-fc028095.js')); };

var log$1 = {
  '-': { '-': playerLog },
  outbox: { '-': outbox },
};

const newsFsbox = () => { runDefault(import('./newsFsbox-030b607d.js')); };
const newsShoutbox = () => { runDefault(import('./newsShoutbox-23db7ee0.js')); };

var news$1 = {
  fsbox: { '-': newsFsbox },
  '-': { '-': news },
  shoutbox: { '-': newsShoutbox },
  viewupdatearchive: { '-': viewArchive },
  viewarchive: { '-': viewArchive },
};

const unknownPage = () => { runDefault(import('./unknownPage-6c16d2d0.js')); };

var noCmd = {
  news: { '-': news },
  viewupdatearchive: { '-': viewArchive },
  viewarchive: { '-': viewArchive },
  '-': { '-': unknownPage },
};

const injectInventoryManagerNew = () => {
  runDefault(import('./inventory-a426a34b.js'));
};
const injectNewGuildLog = () => {
  runDefault(import('./newGuildLog-22e581be.js'));
};
const injectNotepad = () => {
  runDefault(import('./injectNotepad-88ccd160.js'));
};
const injectSaveSettings = () => { runDefault(import('./load-a9fb88a6.js')); };
const reliclist = () => {
  runDefault(import('./reliclist-4de236f0.js'));
};
const whosGotWhat = () => {
  runDefault(import('./whosGotWhat-fa7ba4d4.js'));
};

const notepad = {
  showlogs: { '-': injectNotepadShowLogs },
  invmanagernew: { '-': injectInventoryManagerNew }, // TODO
  guildinvmgr: { '-': injectInventoryManagerNew }, // TODO
  recipemanager: { '-': injectRecipeManager },
  auctionsearch: { '-': injectAuctionSearch },
  onlineplayers: { '-': injectOnlinePlayers },
  quicklinkmanager: { '-': injectQuickLinkManager },
  monsterlog: { '-': injectMonsterLog },
  quickextract: { '-': insertQuickExtract },
  quickwear: { '-': insertQuickWear },
  fsboxcontent: { '-': injectFsBoxContent },
  bufflogcontent: { '-': injectBuffLog },
  newguildlog: { '-': injectNewGuildLog }, // TODO
  findbuffs: { '-': injectFindBuffs },
  findother: { '-': injectFindOther },
  savesettings: { '-': injectSaveSettings }, // TODO
  '-': { '-': injectNotepad },
};

// eslint-disable-next-line no-unused-labels, no-labels
devLbl: { //  whosGotWhat
  notepad.whosgotwhat = { '-': whosGotWhat };
}

// eslint-disable-next-line no-unused-labels, no-labels
betaLbl: { //  reliclist
  notepad.reliclist = { '-': reliclist };
}

function hideQTip(el) {
  $(el).qtip('hide');
}

function insertHtmlAfterBegin(parent, html) {
  insertHtml(parent, 'afterbegin', html);
}

function saveTempleSettings(needToPray) {
  setValue('needToPray', needToPray);
  setValue('lastTempleCheck', new Date()
    .setUTCHours(23, 59, 59, 999) + 1); // midnight
}

const havePrayedMsg = '<span class="notification-icon"></span>'
  + '<p class="notification-content">'
  + 'You are currently praying at the temple.</p>';
const godsNotification = '<li class="notification">'
  + '<span id="helperPrayToGods" class="fastPray">'
  + '<table><tbody><tr><td>'
  + '<span class="tip-static fshTempleZero" data-tipped="Pray to Sahria" '
  + 'praytype="0"></span></td><td>'
  + '<span class="tip-static fshTempleOne" data-tipped="Pray to Osverin" '
  + 'praytype="1"></span></td></tr><tr><td>'
  + '<span class="tip-static fshTempleTwo" data-tipped="Pray to Gurgriss" '
  + 'praytype="2"></span></td><td>'
  + '<span class="tip-static fshTempleThree" data-tipped="Pray to Lindarsil" '
  + 'praytype="3"></span></td></tr></tbody></table>'
  + `<a href="${cmdUrl}temple">`
  + '<p class="notification-content">Bow down to the gods</p>'
  + '</a></span></li>';

function havePrayed() {
  getElementById('helperPrayToGods').outerHTML = havePrayedMsg;
  saveTempleSettings(false);
}

function prayToGods(e) { // jQuery
  const myGod = e.target.getAttribute('praytype');
  if (!myGod) { return; }
  indexAjaxData({ cmd: 'temple', subcmd: 'pray', type: myGod })
    .then(havePrayed);
  hideQTip(e.target);
}

function displayDisconnectedFromGodsMessage() {
  insertHtmlAfterBegin(getElementById('notifications'), godsNotification);
  once(getElementById('helperPrayToGods'), 'click', prayToGods);
}

function templeAlertEnabled(responseText) {
  let doc;
  if (calf.cmd !== 'temple') {
    doc = createDocument(responseText);
  } else {
    doc = document;
  }
  const checkNeedToPray = querySelector('input[value="Pray to Osverin"]', doc);
  let needToPray = false;
  if (checkNeedToPray) {
    displayDisconnectedFromGodsMessage();
    needToPray = true;
  }
  saveTempleSettings(needToPray);
}

function parseTemplePage(responseText) {
  if (calf.enableTempleAlert) { templeAlertEnabled(responseText); }
}

var profile$2 = {
  '-': { '-': injectProfile },
  managecombatset: { '-': injectProfile },
  report: { '-': injectProfile },
  equipitem: { '-': injectProfile },
  useitem: { '-': injectProfile },
  changebio: { '-': injectBioWidgets },
  dropitems: { '-': injectProfileDropItems },
};

const injectQuestTracker = () => {
  runDefault(import('./injectQuestTracker-94132ba6.js'));
};

var questbook = {
  '-': { '-': injectQuestBookFull },
  atoz: { '-': injectQuestBookFull },
  viewquest: { '-': injectQuestTracker },
};

const showAllQuestSteps = () => {
  runDefault(import('./showAllQuestSteps-de67839b.js'));
};

var quests = {
  '-': { '-': ufsgAllowBack },
  view: { '-': showAllQuestSteps },
};

const injectScavenging = () => {
  runDefault(import('./scavenging-e86a25a1.js'));
};

var scavenging = {
  '-': { '-': injectScavenging },
  process: { '-': injectScavenging },
};

const globalQuest = () => { runDefault(import('./globalQuest-ae995a1e.js')); };
const injectTopRated = () => { runDefault(import('./toprated-4b3b4824.js')); };

var toprated = {
  xp: { '-': injectTopRated },
  monthlyxp: { '-': injectTopRated },
  gold: { '-': injectTopRated },
  killstreak: { '-': injectTopRated },
  bounties: { '-': injectTopRated },
  risingstars: { '-': injectTopRated },
  arena: { '-': injectTopRated },
  superelites: { '-': injectTopRated },
  smasher: { '-': injectTopRated },
  globalquest: { '-': globalQuest },
};

const injectTrade = () => { runDefault(import('./trade-1f0ce529.js')); };

var trade = {
  '-': { '-': injectTrade },
  sendgold: { '-': injectTrade },
  createsecure: { '-': injectTrade },
  docreatesecure: { '-': injectTrade },
};

const craftForge = () => { runDefault(import('./craftForge-b8f5019d.js')); };
const injectBank = () => { runDefault(import('./injectBank-07e010dd.js')); };
const injectBazaar = () => { runDefault(import('./bazaar-6eaed588.js')); };
const injectFindPlayer = () => {
  runDefault(import('./injectFindPlayer-650b6105.js'));
};
const injectMailbox = () => { runDefault(import('./mailbox-a26d1a96.js')); };
const injectQuickBuff = () => {
  runDefault(import('./quickBuff-564cdd8b.js'));
};
const injectTitan = () => { runDefault(import('./injectTitan-9afa2337.js')); };
const injectSettings = () => {
  runDefault(import('./injectSettings-8bf8571e.js'));
};
const ladder = () => { runDefault(import('./ladder-9435a43f.js')); };
const marketplace = () => { runDefault(import('./marketplace-328f54a8.js')); };
const points = () => { runDefault(import('./points-f4ca0576.js')); };
const superelite = () => { runDefault(import('./superelite-09393b40.js')); };

var pageSwitcher = {
  settings: { '-': { '-': injectSettings } },
  world: { '-': { '-': injectWorld } },
  news: news$1,
  arena,
  questbook,
  profile: profile$2,
  auctionhouse,
  guild,
  bank: { '-': { '-': injectBank } },
  log: log$1,
  potionbazaar: { '-': { '-': injectBazaar } },
  marketplace: { createreq: { '-': marketplace } },
  quickbuff: { '-': { '-': injectQuickBuff } }, // No ga
  notepad,
  points: { '-': { '-': points } },
  trade,
  titan: { '-': { '-': injectTitan } },
  toprated,
  inventing: { viewrecipe: { '-': inventing } },
  tempinv: { '-': { '-': injectMailbox } },
  findplayer: { '-': { '-': injectFindPlayer } },
  quests, // UFSG
  items, // UFSG
  creatures: { '-': { '-': ufsgAllowBack } }, // UFSG
  masterrealms: { '-': { '-': ufsgAllowBack } }, // UFSG
  realms: { '-': { '-': ufsgAllowBack } }, // UFSG
  relics: { '-': { '-': ufsgAllowBack } }, // UFSG
  shops: { '-': { '-': ufsgAllowBack } }, // UFSG
  scavenging,
  temple: { '-': { '-': parseTemplePage } },
  composing,
  pvpladder: { '-': { '-': ladder } },
  crafting: { '-': { '-': craftForge } },
  hellforge: { '-': { '-': craftForge } },
  superelite: { '-': { '-': superelite } },
  '-': noCmd,
  combat: { attackplayer: { '-': injectProfile } },
};

let cmd;
let subcmd;
let subcmd2;
let type = '';
let coreFunction;
let functionPath;

function getParam(param) {
  return getUrlParameter(param) || '-';
}

function newSelector(selector) {
  const testCmd = querySelector(selector);
  return (testCmd && testCmd.value) || '-';
}

function isValid() {
  return isObject(pageSwitcher[cmd])
    && isObject(pageSwitcher[cmd][subcmd])
    && isFunction(pageSwitcher[cmd][subcmd][subcmd2]);
}

function testCoreFunction() {
  if (isValid()) {
    return pageSwitcher[cmd][subcmd][subcmd2];
  }
}

function getParamsFromUrl() {
  cmd = getParam('cmd');
  subcmd = getParam('subcmd');
  subcmd2 = getParam('subcmd2');
  if (cmd === 'points') { type = `/${getParam('type')}`; }
}

function getParamsFromPage() {
  cmd = newSelector('input[name="cmd"]');
  subcmd = newSelector('input[name="subcmd"]');
  subcmd2 = newSelector('input[name="subcmd2"]');
}

function setCalfParams() {
  calf.cmd = cmd;
  calf.subcmd = subcmd;
  calf.subcmd2 = subcmd2;
}

function getCoreFunction() {
  if (document.location.search !== '') {
    getParamsFromUrl();
  } else {
    getParamsFromPage();
  }
  setCalfParams();
  functionPath = `${cmd}/${subcmd}/${subcmd2}${type}`;
  coreFunction = testCoreFunction();
}

function devHooks() {
  /* eslint-disable no-console */
  console.log('functionPath', functionPath);
  if (!coreFunction) {
    console.log('No Core Function.');
  } else if (!isFunction(coreFunction)) {
    console.log('Not Core Function.');
  }
  /* eslint-enable no-console */
}

function asyncDispatcher() {
  // eslint-disable-next-line no-unused-labels, no-labels
  devLbl: { //  asyncDispatcher messages
    devHooks();
  }
  if (isFunction(coreFunction)) {
    screenview(functionPath);
    start('JS Perf', functionPath);
    coreFunction();
    end('JS Perf', functionPath);
  }
}

async function runCore(cssPrm) {
  start('JS Perf', 'FSH.runCore');
  initNow();
  initPcc();
  getCoreFunction();
  await cssPrm;
  lookForHcsData();
  add(3, asyncDispatcher);
  isMessageSound();
  /* This must be at the end in order not to
  screw up other findNode calls (Issue 351) */
  doQuickLinks();
  end('JS Perf', 'FSH.runCore');
}

function badEnv() {
  return !isFunction(Object.fromEntries) || !navigator.cookieEnabled;
}

function setVer(fshVer, gmInfo) {
  calf.gmInfo = jsonParse(decodeURIComponent(gmInfo));
  if (calf.gmInfo) {
    calf.fshVer = fshVer;
  } else {
    calf.fshVer = `${fshVer}_native`;
  }
  calf.calfVer = '34';
}

// main event dispatcher
function dispatch(fshVer, gmInfo) {
  start('JS Perf', 'FSH.dispatch');
  if (badEnv()) { return; }
  const cssPrm = loadCss('https://localhost:9966/dist/resources/watch/1524/calfSystem.css');
  globalErrorHandler();
  setVer(fshVer, gmInfo);
  setup();
  runCore(cssPrm);
  end('JS Perf', 'FSH.dispatch');
}

export { getCalfPrefs as $, setInnerHtml as A, getText as B, searchPlayerUrl as C, querySelector as D, querySelectorArray as E, playerLinkSelector as F, getTextTrim as G, getValue as H, defCharacterVirtualLevel as I, getElementsByClassName as J, defStatLevel as K, quickbuffUrl as L, arrayFrom as M, navigateTo as N, indexPhp as O, isArray as P, once as Q, clickThis as R, getUrlParameter as S, insertHtml as T, nowSecs as U, scouttowerUrl as V, setValue as W, sendEvent as X, jQueryDialog as Y, injectNotepadShowLogs as Z, injectMonsterLog as _, add as a, defStatDamage as a$, escapeHtml as a0, theLinks as a1, playerIdUrl as a2, notepadBlankUrl as a3, fallback as a4, now as a5, defLastLadderReset as a6, server as a7, cmdUrl as a8, pointsUrl as a9, isFunction as aA, fromEntries as aB, containsText as aC, guideUrl as aD, defFetchPlayerBuffs as aE, defPlayerBuffs as aF, defPlayerUpdate as aG, defTeleport as aH, defPvE as aI, isUndefined as aJ, defAfterUpdateActionlist as aK, defFetchWorldRealmDynamic as aL, defFetchWorldRealmActions as aM, hideQTip as aN, worldUrl as aO, defRealmUpdate as aP, defPlayerLevel as aQ, keys as aR, defenderMultiplier as aS, defRelicView as aT, doSendGold as aU, defPlayerGold as aV, initSendGoldOnWorld as aW, sendGoldonWorld$1 as aX, defStatAttack as aY, defStatDefense as aZ, defStatArmor as a_, insertHtmlAfterBegin as aa, querySelectorAll as ab, sendException as ac, parseError as ad, isObject as ae, defaults as af, time as ag, timeEnd as ah, loadCss as ai, defTr as aj, infoBox as ak, cdn as al, arenaUrl as am, oldActionSpinner as an, defTd as ao, runDefault as ap, composingUrl as aq, defSubcmd as ar, defNeedToCompose as as, contains as at, defLastComposeCheck as au, months as av, playerId as aw, showPlayerUrl as ax, infoBoxFrom as ay, retryAjax as az, createDiv as b, playerIDRE as b$, defStatHp as b0, defRefreshActionList as b1, defStairway as b2, defShopPrompt as b3, defViewCreature as b4, jsonParse as b5, defFetchPlayerBackpackCount as b6, defControlsKeydown as b7, handleEvent as b8, places as b9, recallUserUrl as bA, defStatVl as bB, asyncPThree as bC, updateArchiveUrl as bD, archiveUrl as bE, composingFragmentType as bF, auctionSearchUrl as bG, getValueJSON as bH, setValueJSON as bI, profileUrl as bJ, pCR as bK, pCL as bL, secureUrl as bM, tradeUrl as bN, classHandler as bO, bountyUrl as bP, parseTemplePage as bQ, displayDisconnectedFromGodsMessage as bR, blacksmithUrl as bS, dropItemsUrl as bT, defStatbarLevel as bU, injectFsBoxContent as bV, joinallUrl as bW, joinUnderUrl as bX, newGuildLogLoc as bY, newGuildLogUrl as bZ, defJoinallgroupsundersize as b_, mercRE as ba, ahSearchUrl as bb, getCustomUrlParameter as bc, attackplayerUrl as bd, doAddIgnore as be, combatSelector as bf, chatSelector as bg, noteSelector as bh, fshBuffLog as bi, screenview as bj, news as bk, injectQuestBookFull as bl, inventing as bm, rarity as bn, itemType as bo, profile as bp, isString as bq, guildLogUrl as br, GMSTORAGE_PATH as bs, guildViewUrl as bt, defCmd as bu, guildRE as bv, daViewProfile as bw, lastActivityRE as bx, defEnableGuildActivityTracker as by, draggable as bz, calf as c, classPair as c0, injectGuild as c1, injectAuctionSearch as c2, injectOnlinePlayers as c3, injectFindOther as c4, injectFindBuffs as c5, injectRecipeManager as c6, injectBuffLog as c7, injectQuickLinkManager as c8, joinGroups as c9, auctionhouseUrl as ca, insertQuickExtract as cb, insertQuickWear as cc, dispatch as cd, defTable as d, entries as e, insertHtmlBeforeEnd as f, getElementsByTagName as g, hasClass as h, insertElement as i, jQueryPresent as j, on as k, itemRE as l, getArrayByTagName as m, cElement as n, onclick as o, pCC as p, extend as q, indexAjax as r, partial as s, createDocument as t, indexAjaxData as u, guildSubcmdUrl as v, callApp as w, jQueryNotPresent as x, getElementById as y, setText as z };
//# sourceMappingURL=calfSystem-d1de1997.js.map
