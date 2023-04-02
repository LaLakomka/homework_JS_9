const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}`;


const per = JSON.parse(jsonString);
const person = per.list;

for (let i = 0; i < person.length; i++) {
  console.log(person[i])
}