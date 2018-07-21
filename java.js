var database=[
	{
		username:"stenzil",
		password:"lala"
	},
	{
		username:"prvn",
		password:"lala"
	},
	{
		username:"sona",
		password:"lala"
	},
];
var newsFeed=[
	{
		username:"bobby",
		feed:"boredd af"
	},
	{
		username:"sydney",
		feed:"crying since 1997"
	}

];
var name= prompt("enter the email id")
var pass=prompt("enter the password")
function kool(name,pass)
{
	for(var i=0;i<database.length;i++)
	{
		if(name===database[i].username && pass===database[i].password)
	{
		console.log("hi",database[i].username);
		console.log(newsFeed);
	}
	}
}
kool(name,pass)
