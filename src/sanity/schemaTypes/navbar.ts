const navbar = {
    name: "navbar",
    title: "Navbar",
    type: "document",
    fields: [
      {
        name: "logo",
        title: "Logo Image",
        type: "image",
        options: { hotspot: true },
      },
      {
        name: "navItems",
        title: "Navigation Links",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              {
                name: "label",
                title: "Label",
                type: "string",
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                validation: (Rule: any) => Rule.required(),
              },
              {
                name: "href",
                title: "URL",
                type: "string",
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                validation: (Rule: any) => Rule.required(),
              },
            ],
          },
        ],
      },
    ],
  };
  
  export default navbar;
  