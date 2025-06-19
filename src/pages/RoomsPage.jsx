// import React, { useState } from "react";
import "./RoomsPage.css";
import image1 from "../assets/luxroom1.jpg";
import image2 from "../assets/luxroom2.jpg";
import image3 from "../assets/roomimg-1.jpg";
import image4 from "../assets/roomimg-2.jpg";

const roomData = [
  { img: image1, label: "Penthouse", text: "Royal Penthouse", word: "🛏 3 King Beds", person: "👤 6 Person", description: "Indulge in the pinnacle of luxury with our Royal Penthouse." },
  { img: image2, label: "Presidential", text: "Presidential Suite", word: "🛏 2 King Beds", person: "👤 4 Person", description: "Experience unparalleled luxury in our Presidential Suite, designed for the discerning traveler." },
  { img: image4, label: "deluxe", text: "Deluxe Room", word: "🛏 1 King Bed", person: "👤 2 Person", description: "Our Deluxe Rooms are designed with your comfort and relaxation in mind." },
  { img: image3, label: "standard", text: "Standard Room", word: "🛏 1 Queen Bed", person: "👤 2 Person", description: "Experience comfort and convenience in our elegantly designed Standard Room." },
];

function RoomsPage() {
  return (
    <section>
      <div className="our-sec">
        <div className="sec-overlay">
          <h1 className="sec-text">Rooms</h1>
        </div>
      </div>
      <div className="content">
        <div className="rooms">
            {roomData.map((room, idx) => (
          <div className="room-caro" key={idx}>
            <a href="#" className="image1">
              <img src={room.img} alt={room.label} className="room-img" />
              <div className="room-overlay">
                <div className="room-infoo">
                  <h2>{room.text}</h2>
                  <div className="room-icons">
                    <span>{room.word}</span>
                    <span>{room.person}</span>
                  </div>
                </div>
                <div className="room-hover1">
                  <p>
                    {room.description}
                  </p>
                  <span className="arrow">➔</span>
                </div>
              </div>
            </a>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}

export default RoomsPage;
