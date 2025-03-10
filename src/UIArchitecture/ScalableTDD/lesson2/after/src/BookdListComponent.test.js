import "@testing-library/jest-dom";
import DataAccessLayer from "./DataAccessLayer";

beforeEach(() => {
  jest.clearAllMocks();
});

// Remove duplication from the different tests using a shared setup function
let setup = async (stubData) => {
  let dal = new DataAccessLayer();

  // In this function setup the response from a call
  // to an HTTP endpoint is being mocked out so we can control
  // the data coming into the test 
  dal.apiCall = jest.fn(() => {
    return Promise.resolve({
      json: () =>
        Promise.resolve(
          JSON.parse(
            JSON.stringify({
              success: true,
              result: stubData,
            })
          )
        ),
    });
  });

  await dal.loadData();

  return dal;
};

it("should call the api method when loadData is called", async () => {

  const dal = await setup([]);

  expect(dal.apiCall).toHaveBeenCalled();

});

it("Should display no books if no books available", async () => {
  
  const dal = await setup([]);
  expect(dal.books?.length).toBe(0);
});


it("should display books if books available", async () => {

  const dal = await setup([
    { bookId: 1, name: "Introduction to Algorithms" },
    { bookId: 2, name: "Clean Code" },
    { bookId: 3, name: "Clean Architecture" }
  ]);

  expect(dal.books?.length).toBe(3);
  expect(dal.books[0].name).toBe("Introduction to Algorithms");
  expect(dal.books[1].name).toBe("Clean Code");
  expect(dal.books[2].name).toBe("Clean Architecture");
});

