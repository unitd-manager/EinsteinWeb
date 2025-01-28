import React from 'react';
import women from "../assets/img/event/womens_day.webp";
import pongal from "../assets/img/event/PongalCele1.webp";
import sport from "../assets/img/event/Sports1.webp";
import sportsday from "../assets/img/event/sportsd1.webp";
import collage from "../assets/img/event/CollageDay Clelb.webp";


const events = [
  {
    id: 1,
    imgSrc: women,
    location: 'Einstein Arts And Science Collage',
    // time: '8.00 am - 6.00 pm',
    title: 'International Womens Day ',
  },
  {
    id: 2,
    imgSrc: pongal,
    location: 'Einstein Arts And Science Collage',
    // time: '8.00 am - 6.00 pm',
    title: 'Pongal Celebration-2021',
  },
  {
    id: 3,
    imgSrc:sport,
    location: 'Einstein Arts And Science Collage',
    // time: '8.00 am - 6.00 pm',
    title: 'Sports Day Celebration',
  },
  {
    id: 4,
    imgSrc: sportsday,
    location: 'Einstein Arts And Science Collage',
    // time: '8.00 am - 6.00 pm',
    title: 'Sports Day',
  },
  {
    id: 5,
    imgSrc: collage,
    location: 'Einstein Arts And Science Collage',
    // time: '8.00 am - 6.00 pm',
    title: 'Collage Day Celebration',
  },
];

const Breadcrumb = () => (
  <section
    className="breadcrumb-area bg-default"
    style={{ backgroundImage: "url('assets/img/breadcrumb/breadcrumb-bg.jpg')" }}
  >
    <img src="assets/img/breadcrumb/shape-1.png" alt="" className="breadcrumb-shape" />
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="breadcrumb-content">
            <h2 className="breadcrumb-title">Upcoming Events</h2>
            <div className="breadcrumb-list">
              <a href="index.html">Home</a>
              <span>Upcoming Events</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const EventCard = ({ event }) => (
  <div className="col-xl-4 col-lg-4 col-md-6">
    <div className="event-item mb-30">
      <div className="event-img">
        <img src={event.imgSrc} alt="" />
      </div>
      <div className="event-content">
        <div className="event-content-meta">
          <span><i className="fa-thin fa-location-dot"></i>{event.location}</span>
          {/* <span><i className="fa-thin fa-clock"></i>{event.time}</span> */}
        </div>
        <h5 className="event-content-title">
          <a href="#">{event.title}</a>
        </h5>
        {/* <a href="#" className="t-theme-btn theme-btn event-btn">Get Ticket</a> */}
      </div>
    </div>
  </div>
);

const EventsSection = () => (
  <section className="innerPage_event-area pt-120 pb-90">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-6">
          <div className="section-area mb-50 section-area-top text-center">
            <h2 className="section-title mb-20"> Events</h2>
          </div>
        </div>
      </div>
      <div className="row">
        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  </section>
);

const UpcomingEventsPage = () => (
  <>
    <Breadcrumb />
    <EventsSection />
  </>
);

export default UpcomingEventsPage;
