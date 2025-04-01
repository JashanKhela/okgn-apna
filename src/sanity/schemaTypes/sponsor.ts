const sponsor = {
    name: "sponsor",
    title: "Sponsor",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Sponsor Name",
        type: "string",
      },
      {
        name: "logo",
        title: "Logo",
        type: "image",
        options: { hotspot: true },
      },
      {
        name: "website",
        title: "Website",
        type: "url",
      },
    ],
  };
  
  export default sponsor;
  