import Main from './../pages/main'
import Event from './../pages/event'

export default [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/room/:eventId/",
    component: Event
  }
];
