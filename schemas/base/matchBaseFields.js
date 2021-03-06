export const baseMatch = [
  {
    title: "Created By",
    name: "createdBy",
    type: "reference",
    to: { type: "player" },
    validation: (Rule) => Rule.required(),
  },
  {
    title: "Updated By",
    name: "updatedBy",
    type: "reference",
    to: { type: "player" },
  },
];
