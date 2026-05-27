import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

// http://localhost:3000/1/category/12

app.get(
  "/",
  () => {
    console.log("Something happening here");
  },
  (req, res) => {
    const id = req.params.id;
    const sortBy = req.query.sortBy;

    res.send(
      "<div>this is some more html <div><h2>sub heading</h2> <h1>main heading</h1></div></div>"
    );
  }
);

app.get("/:id/category/:categoryId", (req, res) => {
  const { id, categoryId } = req.params;
  res.status(200).send("<h1>This is some html</h1>");
});

const userDB = [
  { id: 1, name: "Tony", age: 12 },
  { id: 2, name: "Joe", age: 14 },
  { id: 3, name: "Larry", age: 15 },
];

// localhost:3000/newUser
// header: {
// Content-Type: "application/json"
//}
// body: {
// id: 4,
// name: "Steve",
// age: 18
// }

app.listen(3000, () => console.log("Server is running on port: 3000"));