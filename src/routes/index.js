export default [
  {
    path: "/"
  },
  {
    path: "/notifications/"
  },
  {
    path: "/:eventId/questions/:scheduleId/:questionId/:itemId/"
  },
  {
    path: "/:eventId/polls/:scheduleId/:pollId/:itemId/"
  },
  {
    path: "/event/:scheduleId/:eventId/:itemId/"
  },
  {
    path: "/polls/"
  },
  {
    path: "/materials/"
  },
  {
    path: "/links/"
  },
  {
    path: "(.*)"
  }
];
