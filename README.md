# Profanity-Discord-Filter-Bot-Using-ChatGPT
This GitHub repo demonstrate the capability of ChatGPT to develop a Discord Bot in any Programming Language

Here, the `Profanity Filter Bot` is written in Javascript using DiscordJs.

<H3>Current Functions:</H3>

> Automatically Remove Any Profanity Word comparing them with a Reference Database.

> Display the Server Latency

<H3>Get Started:</H3>

You can self host or host the bot on a Server.

1) Create a MySQL Database with a TableName `bad_words` or any name (remember to change the TableName in `main.js` file at line `27`)
2) Create a Single Column with the name `word` or any name.
3) Add as many Profanity/Bad Words to your Database `word` column.
4) Open the `.env` file and enter the values accordingly.

 ```
 DB_HOST='Database_IP' 
 DB_USER='Database_Username'
 DB_PASSWORD='Database_Password'
 DB_NAME='DatabaseName'
 TOKEN="Discord Bot Token"
 ```
 5) You are ready to run the bot. :)
 
 <H3>Few Things To Remember..</H3>
 
 ChatGPT isnt perfect. It can write you an whole code but if you dont have any Basic Understanding of how Programming works, its do's and how functions or conditions work, the Program ChatGPT writes might not work the way you want it to.
 
 <H3>Lastly</H3>
 
 A Lot of functionalitues can be added or a complete Bot with lots of feature can be create using ChatGPT but should know what you are doing.
 
