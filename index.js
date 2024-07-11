const drivers=[
  {name:'Sally' ,hometown:'New York'},
   {name:'Bob' ,hometown:'Los Angeles'},
    {name:'Alice' ,hometown:'San Fransico'},
     {name:'Derek' ,hometown:'Seattle'},
      {name:'Samantha' ,hometown:'New York'},

]

function findMatching(drivers,name){
  return drivers.filter(driver=>
    driver.toLowerCase()==name.toLowerCase());
}

function fuzzyMatch(drivers,letters){
  return drivers.filter(driver=>
    driver.toLowerCase().startsWith(letters.toLowerCase())
);
}
 function matchName(drivers,name){
  return drivers.filter(driver=>
    driver.name.toLowerCase()===name.toLowerCase()
);
 }

 console.log("Drivers matching 'Sally':",findmatching(['sally','Bob','Alice','Derek','Samatha'],'Sally'));
  console.log("Drivers with names starting with 'Sa':",fuzzyMatch(['sally','Bob','Alice','Derek','Samatha'],'Sa'));
  console.log("Driver object matching 'Sally':",matchName(drivers,'Sally'));