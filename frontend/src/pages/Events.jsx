import { json, useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

const EventsPage = () => {
  const data = useLoaderData();

  // if (data.isError) {
  //   return <p>{data.message}</p>
  // }

  const events = data.events;
  return (
    <EventsList events={events} />
  );
}

export default EventsPage;

//this code that's defined in the loader, executes in the browser, not on some server.
//You can, for example, access local storage here.You can access cookies here. You can do anything that you can do in the other JavaScript code as well. What you can't do in your loader function is, for example, use React Hooks like useState.
export async function loader() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // return { isError: true, message: 'Could not fetch events.' };
    // throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), { status: 500 });
    throw json({ message: 'Could not fetch events.' }, { status: 500 })
  } else {
    return response;  // And now this data is available to the events page and any other components that need's it
  }
}