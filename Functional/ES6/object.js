const params = {
  id: 1,
  name: "zjk",
  age: 20,
  hobby: ["photo", "App", "music"],
  test: "",
  test1: null,
};

function vaildate(target) {
  Object.values(target).forEach((item) => {
    console.log(item == "");
  });
}

vaildate(params);
