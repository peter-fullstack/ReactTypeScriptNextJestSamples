
import b from "./fakeBrowser";

export default class DataAccessLayer {
    books;
    setBooks;
    constructor(booksArg, setBooksArg) {
        this.books = booksArg;
        this.setBooks = setBooksArg;
    }

    async apiCall() {
        console.log("real apiCall method");
        b.fetch("someUrl");
    }

    async loadData() {
        let response = await this.apiCall();
        let data = await response.json();

        this.books = data.result;
    }
}