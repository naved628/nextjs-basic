import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";
import Comments from "@/components/input/comments";
import Loading from "@/components/ui/loading";
import { getEventById, getFeaturedEvents } from "@/helpers/api-utils";
import React, { Fragment } from "react";

const EventDetailsPage = (props) => {
  const { selectedEvent } = props;

  if (!selectedEvent) {
    return (
      <Fragment>
        <Loading>
          <p>Loading....</p>
        </Loading>
      </Fragment>
    );
  }
  return (
    <Fragment>
      <EventSummary title={selectedEvent.title} />
      <EventLogistics
        date={selectedEvent.date}
        address={selectedEvent.location}
        location={selectedEvent.location}
        image={selectedEvent.image}
      />
      <EventContent>
        <p>{selectedEvent.description}</p>
      </EventContent>
      <Comments eventId={selectedEvent.id}/>
    </Fragment>
  );
};

export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);
  return {
    props: {
        selectedEvent: event,
        revalidate: 30

    },
  };
}

export async function getStaticPaths() {
  const allEvents = await getFeaturedEvents();
  const eventPaths = allEvents.map(event => ({ params: { eventId: event.id } }));

  return {
    paths: eventPaths,
    fallback: 'blocking',
  };
}

export default EventDetailsPage;
