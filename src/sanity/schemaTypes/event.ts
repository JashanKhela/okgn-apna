const event = {
    name: "event",
    title: "Event",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Event Title",
        type: "string",
      },
      {
        name: "description",
        title: "Event Description",
        type: "text",
      },
      {
        name: "date",
        title: "Event Date",
        type: "datetime",
      },
      {
        name: "location",
        title: "Location",
        type: "string",
      },
      {
        name: "coverImage",
        title: "Cover Image",
        type: "image",
        options: {
          hotspot: true,
        },
      },
    ],
  };
  
  export default event;
  