import React, { Suspense, useState } from "react";
const Typography = React.lazy(() => import("components/Typography"));
import "./QuickBooking.scss";
import RoutingContext from "../../utils/RoutingProvider";

const QuickBooking = () => {
  const [movie, setMovie] = useState("1");
  const [date, setDate] = useState("01/02/2022");
  const [time, setTime] = useState("10 Am");

  const bookMovie = (context) => {
    const booking = {
      movie,
      date,
      time,
    };
    import("movieapp/MovieData").then((module) => {
      const movieData = module.default;
      movieData.next(booking);
    });
    context.history.push("book");
  };

  return (
    <RoutingContext.Consumer>
      {(context) => (
        <div className="quick-booking-container">
          <Suspense fallback={null}>
            <Typography text="Quick Booking" type="title"></Typography>
          </Suspense>
          {/* <span className="header">Quick Booking </span> */}
          <div className="spacer"></div>
          <div className="mr-1">
            <span>Select Movie</span>
            <select onChange={(e) => setMovie(e.target.value)} value={movie}>
              <option value="1">Avengers End Game</option>
              <option value="2">Black Panther</option>
              <option value="3">Black Widow</option>
              <option value="4">Captain America</option>
              <option value="5">Doctor Strange</option>
              <option value="6">Ethernals</option>
              <option value="7">IronMan</option>
              <option value="8">Spiderman</option>
              <option value="9">Thor</option>
              <option value="10">Venom</option>
            </select>
          </div>
          <div className="mr-1">
            <span>Select Date: </span>
            <select onChange={(e) => setDate(e.target.value)} value={date}>
              <option value="01/06/2023">01/06/2023</option>
              <option value="02/06/2023">02/06/2023</option>
              <option value="03/06/2023">03/06/2023</option>
              <option value="04/06/2023">04/06/2023</option>
              <option value="05/02/2023">05/06/2023</option>
            </select>
          </div>

          <div className="mr-1">
            <span>Select Time: </span>
            <select onChange={(e) => setTime(e.target.value)} value={time}>
              <option value="10 Am">10 Am</option>
              <option value="12:30 PM">12:30 PM</option>
              <option value="4 PM">4 PM</option>
              <option value="8 PM">8 PM</option>
              <option value="9:30 PM">9:30 PM</option>
            </select>
          </div>
          <button onClick={() => bookMovie(context)}>Book</button>
        </div>
      )}
    </RoutingContext.Consumer>
  );
};

export default QuickBooking;
