import React from "react";

import NewBookingDate from "../components/NewBookingDate";
import ServiceSummary from "../components/ServiceSummary";
import Header from "../components/Header";

function Booking() {
  return (
    <section>
      <Header />
      <section>
        <ServiceSummary />
      </section>
      <NewBookingDate />
    </section>
  );
}

export default Booking;
