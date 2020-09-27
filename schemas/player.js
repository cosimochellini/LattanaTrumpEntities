export default {
  title: "Player",
  name: "player",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Surname",
      name: "surname",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Nikname",
      name: "nikname",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Email",
      name: "email",
      type: "string",
      validation: (Rule) => Rule.required().regex(/^\S+@\S+\.\S+$/),
    },
    {
      title: "Birthday",
      name: "birthday",
      type: "date",
    },
    {
      title: "Matches",
      name: "matches",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "match" },
        },
      ],
    },
    {
      title: "Pin",
      name: "pin",
      type: "number",
      validation: (Rule) => Rule.required().integer().max(9999),
    },
    {
      title: "Profile Image",
      name: "profileImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
  initialValue: {
    name: "Mario",
    surname: "Rossi",
    email: "mario.rossi@email.com",
    pin: 0,
  },
};
