import React, { useState } from "react";
import "./header.css";
import { MdLocalHotel, MdFlight } from "react-icons/md";
import { IoCar } from "react-icons/io5";
import { FaTaxi } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaPerson } from "react-icons/fa6";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import { format, set } from "date-fns";
import {useNavigate} from "react-router-dom"
const Header = ({type}) => {
    
    const [destination, setDestination] = useState("")
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);

   const [openOptions, setOpenOptions] = useState(false);
   const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
   });
const navigate = useNavigate()
const handlerOption = (name, operation)=>{
    setOptions((prev)=> {
        return {
            ...prev,
             [name]: operation === "i" ? options[name] + 1 :
              options[name] - 1, 
        };
    });
};
const handlerSearch = () =>{
    navigate("/hotels", { state: {destination,date,options}})
}
  return (
    <div className="header">
     <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
     <div className="headerList">
     <div className="headerListItem active">  
            <MdLocalHotel/>
            <span>Stays</span>
        </div>
        <div className="headerListItem">  
            <MdFlight/>
            <span>Flights</span>
        </div>
        <div className="headerListItem">  
            <IoCar/>
            <span>Car rentals</span>
        </div>
        <div className="headerListItem">  
            <MdLocalHotel/>
            <span>Attractions</span>
        </div>
        <div className="headerListItem">  
            <FaTaxi/>
            <span>Airport taxis</span>
        </div>
    </div>
    {
        type !== "list" &&
        <>
    
    <h1 className="headerTitle"> A lifetime of discount? It's Genius.</h1>
    <p className="headerDesc">Get rewarded for your travels - unlock instant savings of 10% or more with a free lamabooking account</p>
    <button className="headerBtn"> Sign in / Register</button>

    <div className="headerSearch">
        <div className="headerSearchItem">
        <MdLocalHotel className="headerIcon"/>
            <input onChange={e=>setDestination(e.target.value)} type="text" placeholder="Where are you going?" className="headerSearchInput" />
        </div>
        <div className="headerSearchItem">
        <SlCalender className="headerIcon"/>
           <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
           {openDate && <DateRange
  editableDateInputs={true}
  onChange={item => setDate([item.selection])}
  moveRangeOnFirstSelection={false}
  ranges={date}
  className="date"
  minDate={new Date()}
/>}
        </div>
        <div className="headerSearchItem">
        <FaPerson className="headerIcon" />
        <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adult . ${options.children} children . ${options.room} room `} </span>
        {
            openOptions &&
            <div className="option">
            <div className="optionItem">
                <span className="optionText"> Adult</span>
                <div className="optionCounter">
                <button className="optionCounterBtn" onClick={ ()=>handlerOption("adult", "i")}> + </button>
                <span className="optionCounterNumber">{options.adult} </span>

                <button disabled={options.adult <= 1} className="optionCounterBtn" onClick={ ()=>handlerOption("adult", "d")}> - </button>

                </div>
            </div>
            <div className="optionItem">
                <span className="optionText">children</span>
                <div className="optionCounter"> 
                <button className="optionCounterBtn" onClick={ ()=>handlerOption("children", "i")}> + </button>
                <span className="optionCounterNumber">{options.children}</span>
                <button disabled={options.children <= 0} className="optionCounterBtn"
                onClick={ ()=>handlerOption("children", "d")}> - </button>
            </div>
            </div>
            <div className="optionItem">
                <span className="optionText">room </span>
                <div className="optionCounter"> 
                <button className="optionCounterBtn" onClick={ ()=>handlerOption("room", "i")}> + </button>
                <span className="optionCounterNumber">{options.room}</span>
                <button disabled={options.room <= 1} className="optionCounterBtn" onClick={ ()=>handlerOption("room", "d")}> - </button>
            </div>
            </div>
        </div>
}
        </div>
        <div className="headerSearchItem">
       <button className="headerBtn" onClick={handlerSearch}> Search</button>
        </div>
    </div>
    </>}
 </div>
</div>
  );
};
export default Header;
