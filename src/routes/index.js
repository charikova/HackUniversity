import Admin from '../pages/admin'
import Event from './../pages/event'
import Main from '../pages/main'
import NotFound from '../pages/notFound'


export default [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/admin/",
    component: Admin,
  },
  {
    path: "/event/:eventId/",
    component: Event
  },
  {
    path: "(.*)",
    component: NotFound
  }
];
