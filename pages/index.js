import EventList from '@/components/events/EventList'
import NewsletterRegistration from '@/components/input/newsletter-registration';
import { getFeaturedEvents } from '@/helpers/api-utils';
import Head from 'next/head';


export default function Home(props) {
  return (
    <div>
      <Head>
        <title>NEXTJS Events</title>
        <meta
          name='description'
          content='Find a lot of great events that allow you to evolve...'
        />
      </Head>
      <NewsletterRegistration />
      <EventList items={props.events}/>
    </div>
  )
}

export async function getStaticProps(){
  const featuredEvents = await getFeaturedEvents();

  return {
    props:{
      events: featuredEvents,
      revalidate: 1800
    }
  }
}
