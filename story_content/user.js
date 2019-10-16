function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6mV5QxaUSOG":
        Script1();
        break;
      case "5eLW21SuD6F":
        Script2();
        break;
      case "6P48daKLTC8":
        Script3();
        break;
      case "5xFq8ICTgCi":
        Script4();
        break;
      case "5qVx8pN9zuj":
        Script5();
        break;
      case "6fPFFwDHQ7A":
        Script6();
        break;
      case "6iBWQ4IxJu7":
        Script7();
        break;
      case "6HhS6FQAHhw":
        Script8();
        break;
      case "6f2i6gXd9kJ":
        Script9();
        break;
      case "6dux5eT8OLw":
        Script10();
        break;
  }
}

function Script1()
{
  //what is the URL of your google spreadsheet?
var sheetURL = "https://script.google.com/macros/s/AKfycbxIJrgmj-9Ib17eNKhTrlXkzoC9rk1xr3hfkGRgcfsu1X6ggCt_/exec";
var scoreVarName = "USER_SCORE"; //what is the name of the score varible in SL?
var userVarName = 'userName'; //what is the name of the user name varible in SL?
var topTenVarName = 'topTen'; //what is the name of the top ten message varible in SL?

/*
 *** Do not edit below this line. ***
 */
var player = GetPlayer(); //Get the SL player
var userScore = player.GetVar(scoreVarName); //Get the score from the player
var userTag = player.GetVar(userVarName); //Get the user name from the player
player.SetVar(topTenVarName, "Loading..."); //Temporarily set the top ten message 
var topTenMsg; //We will build the top ten message in this var. 
//Set up our AJAX 
var xhttp;
if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest();
} else {
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
xhttp.open("GET", sheetURL + "?id=" + userTag + "&score=" + userScore, true);
xhttp.send();
xhttp.onreadystatechange = function () {
    //If we get a successful reply from our spreadsheet:
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        var topTenJson = JSON.parse(xhttp.responseText);
        //This is the begining of the top ten message. Edit carefully
        //First we create the results for this learner (\n creates a new line)
        var userResults = "You placed " + topTenJson.user.rank + " with a score of " + topTenJson.user.score + "\n";
        //Then we introduce the top ten.
        var topTenUsers = "The top " + topTenJson.users.length + " gamers are: \n";
        //We append the second line of text to the message
        topTenMsg = userResults + topTenUsers;
        //Now we loop through each of the top 10
        for (var i = 0; i < topTenJson.users.length; i++) {
            //convert the date to something friendly 
            var recordDate = new Date(topTenJson.users[i].date);
            var recordDateString = recordDate.getDate() + "/" + (recordDate.getMonth() + 1) + "/" + recordDate.getFullYear() + " " + recordDate.getHours() + ":" + recordDate.getMinutes();
            //Append the users info (rank, name, date) to the message. 
            topTenMsg += (i + 1) + " - User: " + topTenJson.users[i].id + " Score: " + topTenJson.users[i].score + " When: " + recordDateString + "\n";
        }
        //Push the message back into Storyline
        player.SetVar(topTenVarName, topTenMsg);
    }
}
}

function Script2()
{
  //what is the URL of your google spreadsheet?
var sheetURL = "https://script.google.com/macros/s/AKfycbxIJrgmj-9Ib17eNKhTrlXkzoC9rk1xr3hfkGRgcfsu1X6ggCt_/exec";
var scoreVarName = "USER_SCORE"; //what is the name of the score varible in SL?
var userVarName = 'userName'; //what is the name of the user name varible in SL?
var topTenVarName = 'topTen'; //what is the name of the top ten message varible in SL?

/*
 *** Do not edit below this line. ***
 */
var player = GetPlayer(); //Get the SL player
var userScore = player.GetVar(scoreVarName); //Get the score from the player
var userTag = player.GetVar(userVarName); //Get the user name from the player
player.SetVar(topTenVarName, "Loading..."); //Temporarily set the top ten message 
var topTenMsg; //We will build the top ten message in this var. 
//Set up our AJAX 
var xhttp;
if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest();
} else {
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
xhttp.open("GET", sheetURL + "?id=" + userTag + "&score=" + userScore, true);
xhttp.send();
xhttp.onreadystatechange = function () {
    //If we get a successful reply from our spreadsheet:
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        var topTenJson = JSON.parse(xhttp.responseText);
        //This is the begining of the top ten message. Edit carefully
        //First we create the results for this learner (\n creates a new line)
        var userResults = "You placed " + topTenJson.user.rank + " with a score of " + topTenJson.user.score + "\n";
        //Then we introduce the top ten.
        var topTenUsers = "The top " + topTenJson.users.length + " gamers are: \n";
        //We append the second line of text to the message
        topTenMsg = userResults + topTenUsers;
        //Now we loop through each of the top 10
        for (var i = 0; i < topTenJson.users.length; i++) {
            //convert the date to something friendly 
            var recordDate = new Date(topTenJson.users[i].date);
            var recordDateString = recordDate.getDate() + "/" + (recordDate.getMonth() + 1) + "/" + recordDate.getFullYear() + " " + recordDate.getHours() + ":" + recordDate.getMinutes();
            //Append the users info (rank, name, date) to the message. 
            topTenMsg += (i + 1) + " - User: " + topTenJson.users[i].id + " Score: " + topTenJson.users[i].score + " When: " + recordDateString + "\n";
        }
        //Push the message back into Storyline
        player.SetVar(topTenVarName, topTenMsg);
    }
}
}

function Script3()
{
  //what is the URL of your google spreadsheet?
var sheetURL = "https://script.google.com/macros/s/AKfycbxIJrgmj-9Ib17eNKhTrlXkzoC9rk1xr3hfkGRgcfsu1X6ggCt_/exec";
var scoreVarName = "USER_SCORE"; //what is the name of the score varible in SL?
var userVarName = 'userName'; //what is the name of the user name varible in SL?
var topTenVarName = 'topTen'; //what is the name of the top ten message varible in SL?

/*
 *** Do not edit below this line. ***
 */
var player = GetPlayer(); //Get the SL player
var userScore = player.GetVar(scoreVarName); //Get the score from the player
var userTag = player.GetVar(userVarName); //Get the user name from the player
player.SetVar(topTenVarName, "Loading..."); //Temporarily set the top ten message 
var topTenMsg; //We will build the top ten message in this var. 
//Set up our AJAX 
var xhttp;
if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest();
} else {
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
xhttp.open("GET", sheetURL + "?id=" + userTag + "&score=" + userScore, true);
xhttp.send();
xhttp.onreadystatechange = function () {
    //If we get a successful reply from our spreadsheet:
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        var topTenJson = JSON.parse(xhttp.responseText);
        //This is the begining of the top ten message. Edit carefully
        //First we create the results for this learner (\n creates a new line)
        var userResults = "You placed " + topTenJson.user.rank + " with a score of " + topTenJson.user.score + "\n";
        //Then we introduce the top ten.
        var topTenUsers = "The top " + topTenJson.users.length + " gamers are: \n";
        //We append the second line of text to the message
        topTenMsg = userResults + topTenUsers;
        //Now we loop through each of the top 10
        for (var i = 0; i < topTenJson.users.length; i++) {
            //convert the date to something friendly 
            var recordDate = new Date(topTenJson.users[i].date);
            var recordDateString = recordDate.getDate() + "/" + (recordDate.getMonth() + 1) + "/" + recordDate.getFullYear() + " " + recordDate.getHours() + ":" + recordDate.getMinutes();
            //Append the users info (rank, name, date) to the message. 
            topTenMsg += (i + 1) + " - User: " + topTenJson.users[i].id + " Score: " + topTenJson.users[i].score + " When: " + recordDateString + "\n";
        }
        //Push the message back into Storyline
        player.SetVar(topTenVarName, topTenMsg);
    }
}
}

function Script4()
{
  //what is the URL of your google spreadsheet?
var sheetURL = "https://script.google.com/macros/s/AKfycbxIJrgmj-9Ib17eNKhTrlXkzoC9rk1xr3hfkGRgcfsu1X6ggCt_/exec";
var scoreVarName = "USER_SCORE"; //what is the name of the score varible in SL?
var userVarName = 'userName'; //what is the name of the user name varible in SL?
var topTenVarName = 'topTen'; //what is the name of the top ten message varible in SL?

/*
 *** Do not edit below this line. ***
 */
var player = GetPlayer(); //Get the SL player
var userScore = player.GetVar(scoreVarName); //Get the score from the player
var userTag = player.GetVar(userVarName); //Get the user name from the player
player.SetVar(topTenVarName, "Loading..."); //Temporarily set the top ten message 
var topTenMsg; //We will build the top ten message in this var. 
//Set up our AJAX 
var xhttp;
if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest();
} else {
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
xhttp.open("GET", sheetURL + "?id=" + userTag + "&score=" + userScore, true);
xhttp.send();
xhttp.onreadystatechange = function () {
    //If we get a successful reply from our spreadsheet:
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        var topTenJson = JSON.parse(xhttp.responseText);
        //This is the begining of the top ten message. Edit carefully
        //First we create the results for this learner (\n creates a new line)
        var userResults = "You placed " + topTenJson.user.rank + " with a score of " + topTenJson.user.score + "\n";
        //Then we introduce the top ten.
        var topTenUsers = "The top " + topTenJson.users.length + " gamers are: \n";
        //We append the second line of text to the message
        topTenMsg = userResults + topTenUsers;
        //Now we loop through each of the top 10
        for (var i = 0; i < topTenJson.users.length; i++) {
            //convert the date to something friendly 
            var recordDate = new Date(topTenJson.users[i].date);
            var recordDateString = recordDate.getDate() + "/" + (recordDate.getMonth() + 1) + "/" + recordDate.getFullYear() + " " + recordDate.getHours() + ":" + recordDate.getMinutes();
            //Append the users info (rank, name, date) to the message. 
            topTenMsg += (i + 1) + " - User: " + topTenJson.users[i].id + " Score: " + topTenJson.users[i].score + " When: " + recordDateString + "\n";
        }
        //Push the message back into Storyline
        player.SetVar(topTenVarName, topTenMsg);
    }
}
}

function Script5()
{
  //what is the URL of your google spreadsheet?
var sheetURL = "https://script.google.com/macros/s/AKfycbxIJrgmj-9Ib17eNKhTrlXkzoC9rk1xr3hfkGRgcfsu1X6ggCt_/exec";
var scoreVarName = "USER_SCORE"; //what is the name of the score varible in SL?
var userVarName = 'userName'; //what is the name of the user name varible in SL?
var topTenVarName = 'topTen'; //what is the name of the top ten message varible in SL?

/*
 *** Do not edit below this line. ***
 */
var player = GetPlayer(); //Get the SL player
var userScore = player.GetVar(scoreVarName); //Get the score from the player
var userTag = player.GetVar(userVarName); //Get the user name from the player
player.SetVar(topTenVarName, "Loading..."); //Temporarily set the top ten message 
var topTenMsg; //We will build the top ten message in this var. 
//Set up our AJAX 
var xhttp;
if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest();
} else {
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
xhttp.open("GET", sheetURL + "?id=" + userTag + "&score=" + userScore, true);
xhttp.send();
xhttp.onreadystatechange = function () {
    //If we get a successful reply from our spreadsheet:
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        var topTenJson = JSON.parse(xhttp.responseText);
        //This is the begining of the top ten message. Edit carefully
        //First we create the results for this learner (\n creates a new line)
        var userResults = "You placed " + topTenJson.user.rank + " with a score of " + topTenJson.user.score + "\n";
        //Then we introduce the top ten.
        var topTenUsers = "The top " + topTenJson.users.length + " gamers are: \n";
        //We append the second line of text to the message
        topTenMsg = userResults + topTenUsers;
        //Now we loop through each of the top 10
        for (var i = 0; i < topTenJson.users.length; i++) {
            //convert the date to something friendly 
            var recordDate = new Date(topTenJson.users[i].date);
            var recordDateString = recordDate.getDate() + "/" + (recordDate.getMonth() + 1) + "/" + recordDate.getFullYear() + " " + recordDate.getHours() + ":" + recordDate.getMinutes();
            //Append the users info (rank, name, date) to the message. 
            topTenMsg += (i + 1) + " - User: " + topTenJson.users[i].id + " Score: " + topTenJson.users[i].score + " When: " + recordDateString + "\n";
        }
        //Push the message back into Storyline
        player.SetVar(topTenVarName, topTenMsg);
    }
}
}

function Script6()
{
  //what is the URL of your google spreadsheet?
var sheetURL = "https://script.google.com/macros/s/AKfycbxIJrgmj-9Ib17eNKhTrlXkzoC9rk1xr3hfkGRgcfsu1X6ggCt_/exec";
var scoreVarName = "USER_SCORE"; //what is the name of the score varible in SL?
var userVarName = 'userName'; //what is the name of the user name varible in SL?
var topTenVarName = 'topTen'; //what is the name of the top ten message varible in SL?

/*
 *** Do not edit below this line. ***
 */
var player = GetPlayer(); //Get the SL player
var userScore = player.GetVar(scoreVarName); //Get the score from the player
var userTag = player.GetVar(userVarName); //Get the user name from the player
player.SetVar(topTenVarName, "Loading..."); //Temporarily set the top ten message 
var topTenMsg; //We will build the top ten message in this var. 
//Set up our AJAX 
var xhttp;
if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest();
} else {
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
xhttp.open("GET", sheetURL + "?id=" + userTag + "&score=" + userScore, true);
xhttp.send();
xhttp.onreadystatechange = function () {
    //If we get a successful reply from our spreadsheet:
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        var topTenJson = JSON.parse(xhttp.responseText);
        //This is the begining of the top ten message. Edit carefully
        //First we create the results for this learner (\n creates a new line)
        var userResults = "You placed " + topTenJson.user.rank + " with a score of " + topTenJson.user.score + "\n";
        //Then we introduce the top ten.
        var topTenUsers = "The top " + topTenJson.users.length + " gamers are: \n";
        //We append the second line of text to the message
        topTenMsg = userResults + topTenUsers;
        //Now we loop through each of the top 10
        for (var i = 0; i < topTenJson.users.length; i++) {
            //convert the date to something friendly 
            var recordDate = new Date(topTenJson.users[i].date);
            var recordDateString = recordDate.getDate() + "/" + (recordDate.getMonth() + 1) + "/" + recordDate.getFullYear() + " " + recordDate.getHours() + ":" + recordDate.getMinutes();
            //Append the users info (rank, name, date) to the message. 
            topTenMsg += (i + 1) + " - User: " + topTenJson.users[i].id + " Score: " + topTenJson.users[i].score + " When: " + recordDateString + "\n";
        }
        //Push the message back into Storyline
        player.SetVar(topTenVarName, topTenMsg);
    }
}
}

function Script7()
{
  //what is the URL of your google spreadsheet?
var sheetURL = "https://script.google.com/macros/s/AKfycbxIJrgmj-9Ib17eNKhTrlXkzoC9rk1xr3hfkGRgcfsu1X6ggCt_/exec";
var scoreVarName = "USER_SCORE"; //what is the name of the score varible in SL?
var userVarName = 'userName'; //what is the name of the user name varible in SL?
var topTenVarName = 'topTen'; //what is the name of the top ten message varible in SL?

/*
 *** Do not edit below this line. ***
 */
var player = GetPlayer(); //Get the SL player
var userScore = player.GetVar(scoreVarName); //Get the score from the player
var userTag = player.GetVar(userVarName); //Get the user name from the player
player.SetVar(topTenVarName, "Loading..."); //Temporarily set the top ten message 
var topTenMsg; //We will build the top ten message in this var. 
//Set up our AJAX 
var xhttp;
if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest();
} else {
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
xhttp.open("GET", sheetURL + "?id=" + userTag + "&score=" + userScore, true);
xhttp.send();
xhttp.onreadystatechange = function () {
    //If we get a successful reply from our spreadsheet:
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        var topTenJson = JSON.parse(xhttp.responseText);
        //This is the begining of the top ten message. Edit carefully
        //First we create the results for this learner (\n creates a new line)
        var userResults = "You placed " + topTenJson.user.rank + " with a score of " + topTenJson.user.score + "\n";
        //Then we introduce the top ten.
        var topTenUsers = "The top " + topTenJson.users.length + " gamers are: \n";
        //We append the second line of text to the message
        topTenMsg = userResults + topTenUsers;
        //Now we loop through each of the top 10
        for (var i = 0; i < topTenJson.users.length; i++) {
            //convert the date to something friendly 
            var recordDate = new Date(topTenJson.users[i].date);
            var recordDateString = recordDate.getDate() + "/" + (recordDate.getMonth() + 1) + "/" + recordDate.getFullYear() + " " + recordDate.getHours() + ":" + recordDate.getMinutes();
            //Append the users info (rank, name, date) to the message. 
            topTenMsg += (i + 1) + " - User: " + topTenJson.users[i].id + " Score: " + topTenJson.users[i].score + " When: " + recordDateString + "\n";
        }
        //Push the message back into Storyline
        player.SetVar(topTenVarName, topTenMsg);
    }
}
}

function Script8()
{
  //what is the URL of your google spreadsheet?
var sheetURL = "https://script.google.com/macros/s/AKfycbxIJrgmj-9Ib17eNKhTrlXkzoC9rk1xr3hfkGRgcfsu1X6ggCt_/exec";
var scoreVarName = "USER_SCORE"; //what is the name of the score varible in SL?
var userVarName = 'userName'; //what is the name of the user name varible in SL?
var topTenVarName = 'topTen'; //what is the name of the top ten message varible in SL?

/*
 *** Do not edit below this line. ***
 */
var player = GetPlayer(); //Get the SL player
var userScore = player.GetVar(scoreVarName); //Get the score from the player
var userTag = player.GetVar(userVarName); //Get the user name from the player
player.SetVar(topTenVarName, "Loading..."); //Temporarily set the top ten message 
var topTenMsg; //We will build the top ten message in this var. 
//Set up our AJAX 
var xhttp;
if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest();
} else {
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
xhttp.open("GET", sheetURL + "?id=" + userTag + "&score=" + userScore, true);
xhttp.send();
xhttp.onreadystatechange = function () {
    //If we get a successful reply from our spreadsheet:
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        var topTenJson = JSON.parse(xhttp.responseText);
        //This is the begining of the top ten message. Edit carefully
        //First we create the results for this learner (\n creates a new line)
        var userResults = "You placed " + topTenJson.user.rank + " with a score of " + topTenJson.user.score + "\n";
        //Then we introduce the top ten.
        var topTenUsers = "The top " + topTenJson.users.length + " gamers are: \n";
        //We append the second line of text to the message
        topTenMsg = userResults + topTenUsers;
        //Now we loop through each of the top 10
        for (var i = 0; i < topTenJson.users.length; i++) {
            //convert the date to something friendly 
            var recordDate = new Date(topTenJson.users[i].date);
            var recordDateString = recordDate.getDate() + "/" + (recordDate.getMonth() + 1) + "/" + recordDate.getFullYear() + " " + recordDate.getHours() + ":" + recordDate.getMinutes();
            //Append the users info (rank, name, date) to the message. 
            topTenMsg += (i + 1) + " - User: " + topTenJson.users[i].id + " Score: " + topTenJson.users[i].score + " When: " + recordDateString + "\n";
        }
        //Push the message back into Storyline
        player.SetVar(topTenVarName, topTenMsg);
    }
}
}

function Script9()
{
  //what is the URL of your google spreadsheet?
var sheetURL = "https://script.google.com/macros/s/AKfycbxIJrgmj-9Ib17eNKhTrlXkzoC9rk1xr3hfkGRgcfsu1X6ggCt_/exec";
var scoreVarName = "USER_SCORE"; //what is the name of the score varible in SL?
var userVarName = 'userName'; //what is the name of the user name varible in SL?
var topTenVarName = 'topTen'; //what is the name of the top ten message varible in SL?

/*
 *** Do not edit below this line. ***
 */
var player = GetPlayer(); //Get the SL player
var userScore = player.GetVar(scoreVarName); //Get the score from the player
var userTag = player.GetVar(userVarName); //Get the user name from the player
player.SetVar(topTenVarName, "Loading..."); //Temporarily set the top ten message 
var topTenMsg; //We will build the top ten message in this var. 
//Set up our AJAX 
var xhttp;
if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest();
} else {
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
xhttp.open("GET", sheetURL + "?id=" + userTag + "&score=" + userScore, true);
xhttp.send();
xhttp.onreadystatechange = function () {
    //If we get a successful reply from our spreadsheet:
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        var topTenJson = JSON.parse(xhttp.responseText);
        //This is the begining of the top ten message. Edit carefully
        //First we create the results for this learner (\n creates a new line)
        var userResults = "You placed " + topTenJson.user.rank + " with a score of " + topTenJson.user.score + "\n";
        //Then we introduce the top ten.
        var topTenUsers = "The top " + topTenJson.users.length + " gamers are: \n";
        //We append the second line of text to the message
        topTenMsg = userResults + topTenUsers;
        //Now we loop through each of the top 10
        for (var i = 0; i < topTenJson.users.length; i++) {
            //convert the date to something friendly 
            var recordDate = new Date(topTenJson.users[i].date);
            var recordDateString = recordDate.getDate() + "/" + (recordDate.getMonth() + 1) + "/" + recordDate.getFullYear() + " " + recordDate.getHours() + ":" + recordDate.getMinutes();
            //Append the users info (rank, name, date) to the message. 
            topTenMsg += (i + 1) + " - User: " + topTenJson.users[i].id + " Score: " + topTenJson.users[i].score + " When: " + recordDateString + "\n";
        }
        //Push the message back into Storyline
        player.SetVar(topTenVarName, topTenMsg);
    }
}
}

function Script10()
{
  //what is the URL of your google spreadsheet?
var sheetURL = "https://script.google.com/macros/s/AKfycbxIJrgmj-9Ib17eNKhTrlXkzoC9rk1xr3hfkGRgcfsu1X6ggCt_/exec";
var scoreVarName = "USER_SCORE"; //what is the name of the score varible in SL?
var userVarName = 'userName'; //what is the name of the user name varible in SL?
var topTenVarName = 'topTen'; //what is the name of the top ten message varible in SL?

/*
 *** Do not edit below this line. ***
 */
var player = GetPlayer(); //Get the SL player
var userScore = player.GetVar(scoreVarName); //Get the score from the player
var userTag = player.GetVar(userVarName); //Get the user name from the player
player.SetVar(topTenVarName, "Loading..."); //Temporarily set the top ten message 
var topTenMsg; //We will build the top ten message in this var. 
//Set up our AJAX 
var xhttp;
if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest();
} else {
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
xhttp.open("GET", sheetURL + "?id=" + userTag + "&score=" + userScore, true);
xhttp.send();
xhttp.onreadystatechange = function () {
    //If we get a successful reply from our spreadsheet:
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        var topTenJson = JSON.parse(xhttp.responseText);
        //This is the begining of the top ten message. Edit carefully
        //First we create the results for this learner (\n creates a new line)
        var userResults = "You placed " + topTenJson.user.rank + " with a score of " + topTenJson.user.score + "\n";
        //Then we introduce the top ten.
        var topTenUsers = "The top " + topTenJson.users.length + " gamers are: \n";
        //We append the second line of text to the message
        topTenMsg = userResults + topTenUsers;
        //Now we loop through each of the top 10
        for (var i = 0; i < topTenJson.users.length; i++) {
            //convert the date to something friendly 
            var recordDate = new Date(topTenJson.users[i].date);
            var recordDateString = recordDate.getDate() + "/" + (recordDate.getMonth() + 1) + "/" + recordDate.getFullYear() + " " + recordDate.getHours() + ":" + recordDate.getMinutes();
            //Append the users info (rank, name, date) to the message. 
            topTenMsg += (i + 1) + " - User: " + topTenJson.users[i].id + " Score: " + topTenJson.users[i].score + " When: " + recordDateString + "\n";
        }
        //Push the message back into Storyline
        player.SetVar(topTenVarName, topTenMsg);
    }
}
}

