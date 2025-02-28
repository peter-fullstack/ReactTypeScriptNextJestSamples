import { rest, response } from "msw";

export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  rest.get("todos", (req, res, context) => {
    // ...and respond to them using this JSON response.
    return res(
      context.status(200),
      context.json([
        {
          userId: 1,
          title: "Wave hello! 👋",
          completed: false,
          id: 1,
        },
        {
          userId: 1,
          title: "Get Coffee ☕☕☕",
          completed: false,
          id: 2,
        },
        {
          userId: 1,
          title: "Go to Work ⚒",
          completed: false,
          id: 3,
        },
        {
          userId: 1,
          title: "Write Code 💻",
          completed: false,
          id: 4,
        },
      ])
    );
  }),
];
