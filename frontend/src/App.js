// Challenge / Exercise
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Error from "./pages/Error";
import HomePage from "./pages/HomePage";
import Events, { loader as eventsLoader } from "./pages/Events";
import EventDetailPage, { loader as eventDetailLoader } from "./pages/EventDetail";
import NewEventPage, { action as newEventAction } from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEvent";
import EventsRoot from "./pages/EventsRoot";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events', element: <EventsRoot />,
        children: [
          {
            index: true, element: <Events />,
            loader: eventsLoader,
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
              },
              { path: 'edit', element: <EditEventPage /> },
            ]
          },
          { path: 'new', element: <NewEventPage />, action: newEventAction },
        ]
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App;
