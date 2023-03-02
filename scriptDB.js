var connection = new ActiveXObject("Portfolio-Covid-Project") ;

var connectionstring="Data Source=<server>;Initial Catalog=<catalog>;User ID=<user>;Password=<password>;Provider=SQLOLEDB";

connection.Open(connectionstring);
var rs = new ActiveXObject("Portfolio-Covid-Project");

rs.Open("SELECT * FROM table", connection);
rs.MoveFirst
while(!rs.eof)
{
   document.write(rs.fields(1));
   rs.movenext;
}

rs.close;
connection.close; 


> INSERT INTO student VALUES (1, 'date', ' date');
> INSERT INTO student VALUES (2, ' total_cases', 'new_cases');
> INSERT INTO student VALUES (3, 'total_deaths', 'population');
> GO


const db = window.openDatabase('data', '1.0', 'data', 1*1024*1024);
db.transaction(t => {
    t.executeSql('CREATE TABLE CovidDeaths (name TEXT, number INTEGER)');
    t.executeSql('CREATE TABLE PopulationVaccinated  (gem TEXT, amount INTEGER)');
    for (let g of gems) {
        t.executeSql('INSERT INTO CovidDB (total_cases, new_cases,) VALUES (?, ?)',
        [g.name, g.price]);
    }
    for (let s of store) {
        t.executeSql('INSERT INTO store (total_deaths, population) VALUES (?, ?)', 
        [s.gem, s.amount]);
    }
));
