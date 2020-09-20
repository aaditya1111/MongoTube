const Student = require("../app/student");
const assert = require("assert");

describe("Create Tests", () => {
  it("Create a user in DB", () => {
    //assert(false);
    const sam = new Student({ name: "Sam" });
    sam
      .save()
      .then(() => {
        assert(!sam.isNew);
      })
      .catch(() => {
        console.log("error");
      });
  });
});
