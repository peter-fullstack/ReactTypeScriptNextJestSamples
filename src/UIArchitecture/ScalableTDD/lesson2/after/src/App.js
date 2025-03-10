import { useState } from "react";
import b from "./fakeBrowser";
import DefaultAccessLayer from './DataAccessLayer';
import BoookList from "./BookListComponent";

export default function App() {
  const [books, setBooks] = useState([]);

  const dal = new Dal(books, setBooks);

  // const loadData = async () => {
  //   try {
  //     const response = await b.fetch("someUrl");
  //     const data = await response.json();
  //     setBooks(() => data.result || []);
  //   } catch (e) {
  //     setBooks(() => []);
  //   }
  // };

  return (
    <div className="App">
      <BoookList loadData={loadData} books={books} />
    </div>
  );
}
