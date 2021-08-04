import React from "react";

function App() {
    const data=[
    {id:"location1",cities:"Goa(India)"},
    {id:"location2",cities:"Amsterdam(Netherlands)"},
    {id:"location3",cities:"New York(USA)"},
    {id:"location4",cities:"Darjeeling(India)"},
    {id:"location5",cities:"Tokyo(Japan)"},
    {id:"location6",cities:"Lonavala(India)"}];

      let finalData=data.filter((para)=>{
     return para.cities.includes("India")
    })

    console.log(finalData);

    return (
      <div>
        <ol >{finalData.map((para)=>{
          return <li key={para.id}>{para.cities}</li>
        })}</ol>
      </div>
    );
  }
  export default App