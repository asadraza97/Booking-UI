import React from "react";
import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import { HiMiniXMark } from "react-icons/hi2";

const Hotel = () => {
  const [slider, setSlider] = useState(0);
  const [open, setOpen] = useState(false);

  const photo = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];
  const handlerOpen = (i) => {
    setSlider(i);
    setOpen(true);
  };
  const handlerMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slider === 0 ? 5 : slider - 1;
    } else {
      newSlideNumber = slider === 5 ? 0 : slider + 1;
    }
    setSlider(newSlideNumber);
  };
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <HiMiniXMark className="close" onClick={() => setOpen(false)} />
            <HiArrowSmLeft className="arrow" onClick={() => handlerMove("l")} />
            <div className="sliderWrapper">
              <img className="sliderImg" src={photo[slider].src} alt="" />
            </div>
            <HiArrowSmRight
              className="arrow"
              onClick={() => handlerMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now! </button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FaLocationDot className="Locationfont" />
            <span className="">Elton St 125 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent location -500m from center
          </span>
          <span className="hotelPriceHighlight">
            {" "}
            Book a stay over $114 at this property and get a free airport taxi{" "}
          </span>
          <div className="hotelImages">
            {photo.map((photo, index) => (
              <div className="hotelImgWrapper">
                <img
                  onClick={() => handlerOpen(index)}
                  className="hotelImg"
                  src={photo.src}
                  alt=""
                />
              </div>
            ))}
          </div>
          <div className="hotelDetail">
            <div className="hotelDetailText">
              <h1 className="hotelTitle"> Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita minima eligendi, perferendis praesentium vitae
                temporibus! Sequi neque nisi incidunt odio, ipsam explicabo?
                Totam corrupti exercitationem iure pariatur nulla consequuntur
                adipisci? Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Fugiat debitis aliquam quidem placeat architecto ducimus
                earum maiores repellat quibusdam at. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Molestiae iste adipisci, veniam,
                eligendi sunt repudiandae cumque incidunt pariatur officiis
                itaque autem tempora dolore nemo reiciendis omnis. Aut at cum
                deleniti? Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Repudiandae quibusdam laudantium laborum quidem harum
                dolore et magnam impedit sequi amet aut dolorum sit, quis
                dolores at iste nobis? Nostrum, aspernatur.
              </p>
            </div>

            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <br />
        <Footer />
      </div>
    </div>
  );
};
export default Hotel;
