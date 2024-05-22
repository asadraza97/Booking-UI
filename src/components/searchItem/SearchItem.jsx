import React from "react";
import "./searchItem.css"

const SearchItem = ()=>{
    return(
        <div className="searchItem">
           <img className="siImg" src="https://media.istockphoto.com/id/1450445015/photo/a-bathroom-with-a-blue-cabinet-bathtub-and-tiled-shower.jpg?s=612x612&w=0&k=20&c=FBaQ5-zozaEAEVbdQehfO8yPsHzBJLLVET8hu9oqdVo=" alt="" />

            <div className="siDesc"> 
                <h1 className="siTitle">Tower Street Apartments</h1>
                <span className="siDistance">500m from center</span>
                <span className="siTax">Free air taxi</span>
                <span className="siSubtitle">Studio Apartment with Air conditioning</span>
                <span className="siFeatures">Entire studio * 1 bathroom * 21m 1 full bed</span>
                <span className="siCancel">Free cancellation</span>
                <span className="siCanSubtitle">You can cancel later, so lock in this great price today!</span>
            </div>
            <div className="lfSearchItem">
                <div className="lfRating">
                    <span> Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="ltDetail">
                <span className="ltPrice"> $22</span>
                <span className="ltTax">Includes taxes and fees</span>
                <button className="lfBtn">See availability</button>
                </div>
            </div>
             </div>
    )
}
export default SearchItem