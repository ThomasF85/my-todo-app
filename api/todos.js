import { nanoid } from "nanoid";

const fakeTodos = [
  {
    id: nanoid(),
    text: "Wash the car 2",
    completed: false,
    archived: false,
  },
  {
    id: nanoid(),
    text: "Do the dishes 2",
    completed: true,
    archived: false,
  },
  {
    id: nanoid(),
    text: "Read newspaper 2",
    completed: false,
    archived: false,
  },
];

const handler = async (request, response) => {
  const { method } = request;

  if (method === "GET") {
    return response.status(200).json(fakeTodos);
  }

  response.status(501).json(`Not implemented`);
};

export default handler;
