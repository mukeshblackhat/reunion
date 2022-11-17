import React, { useState } from "react";
import DropDown from "react-dropdown";
import down from "../resources/down-arrow-svgrepo-com.svg";
import Housedata from "../data.json";
import Card from "./Card.js";

const Content = () => {
  const Data = [...Housedata];

  const [properties, setProperties] = useState(Data);
//   const [filter_manger, setFilter_manger] = useState(false);
  const [filter_data, setfilter_data] = useState({
    type: undefined,
    city: undefined,
    rent: [undefined,undefined,undefined],
  });



  let city = new Set([" "]);
  
  // eslint-disable-next-line no-lone-blocks
  {
    Data.map((data) => city.add(data.city.toLocaleLowerCase()));
  }
  let options = [...city];

  let houseType = new Set([""]);
  // eslint-disable-next-line no-lone-blocks
  {
    Data.map((data) => houseType.add(data.type.toLocaleLowerCase()));
  }

  React.useEffect(() => {
   
    const keys = Object.keys(filter_data)
    const res = Data.filter((d) => {
        return keys.reduce((prev, key) => { 
          if(key==="type"||key==="city"){
         
           
           return prev && (filter_data[key] ? d[key]?.toLowerCase() === filter_data[key] : true)
          }
          else if(key==="rent"){    
         
           return prev && (filter_data[key][0] ? ((filter_data[key][2] >= d[key]) && (filter_data[key][0] <= d[key])) : true)
        
        }
          else{ return prev && true }
          
        }, true)
    })

    
   

    setProperties(res)
    
  }, [filter_data]);


  



  let PropOptions = [...houseType];

  let moveInDate = ["","22/03/2022", "13/04/2022", "15/05/2022"];
  let rentRange = [
    "",
    [100, "-", 200],
    [200, "-", 300],
    [300, "-", 1000],
    [1000, "-", 3000],
    [3000, "-", 10000],
  ];

 

  const onCitySelection = (e) =>
    setfilter_data({ ...filter_data, city: e.value });
  const onTypeSelction = (e) =>
    setfilter_data({ ...filter_data, type: e.value });
 const onPriceSelection=(e)=>
    setfilter_data({...filter_data,rent:e.value})




  return (
    <div className=" flex-1 w-4/5 self-center pt-10">
      <div className=" flex mt-8 ">
        <div className="font-bold text-6xl">Search Properties to rent</div>
        <div className="flex-grow"></div>
        <div className="p-4 flex self-center text-gray-500  border-2 rounded-xl bg-white">
          search with seacrch bar
          <img
            className="h-4  rounded bg-purple-200 border-2 ml-2 p-[0.1rem] self-center"
            src={down}
            alt=""
          />
        </div>
      </div>

      <div className="bg-white mt-20 p-10 flex justify-evenly items-center">
        <div>
          <span className="text-gray-400">location</span>
          <DropDown
            onChange={onCitySelection}
            menuClassName="bg-gray-500 bg-opacity-25 p-2 rounded border-2 border-purple-200"
            options={options}
            placeholder={"select..."}
            className="text-xl absolute font-medium "
          />
        </div>
        <div className="h-8 w-0 border-r-4 border-gray-200 "></div>

        <div>
          {" "}
          <span className="text-gray-400">when</span>
          <DropDown
            menuClassName="bg-gray-500 bg-opacity-25 p-2 rounded border-2 border-purple-200"
            options={moveInDate}
            placeholder={"select..."}
            className="text-xl absolute font-medium"
          />
          {/* <div className='text-xl font-medium'>Select Move-in Date</div> */}
        </div>
        <div className="h-8 w-0 border-r-4 border-gray-200 "></div>

        <div>
          {" "}
          <span className="text-gray-400">price</span>
          <DropDown
            onChange={onPriceSelection}
            menuClassName="bg-gray-500 bg-opacity-25 p-2 rounded border-2 border-purple-200"
            options={rentRange}
            placeholder={"select..."}
            className="text-xl absolute font-medium "
          />
        </div>
        <div className="h-8 w-0 border-r-4 border-gray-200 "></div>

        <div>
          {" "}
          <span className="text-gray-400">property type</span>
          <DropDown
            onChange={onTypeSelction}
            menuClassName="bg-gray-500 bg-opacity-25 p-2 rounded border-2 border-purple-200"
            options={PropOptions}
            placeholder={"select..."}
            className="text-xl absolute font-medium "
          />
        </div>
        <div className="h-8 w-0 border-r-4 border-gray-200 "></div>

        <div
       
          className="p-4 px-10 rounded-xl text-white bg-purple-500"
        >
          search
        </div>
      </div>

      <div className="flex flex-wrap pt-10 justify-evenly">
        {console.log(properties)}
        {properties.length?(properties.map((data) => (
          <Card key={data.id} data={data} />
        ))):<h2 className="p-4 font-bold text-xl text-red-500">nothing found....</h2>}
      </div>
    </div>
  );
};

export default Content;
