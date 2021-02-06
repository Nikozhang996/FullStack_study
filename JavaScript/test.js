function red() {
  console.log("red");
}

function green() {
  console.log("green");
}

function yellow() {
  console.log("yellow");
}

let count = 0;
function handleLogStatus(timeout, light, callback) {
  setTimeout(() => {
    if (light === "red") {
      red();
    } else if (light === "green") {
      green();
    } else if (light === "yellow") {
      yellow();
    }
    callback();
  }, timeout);
}

function callbackTask() {
  handleLogStatus(1000, "red", function () {
    handleLogStatus(1000, "green", function () {
      handleLogStatus(1000, "yellow", function () {
        count++;
        if (count < 3) {
          callbackTask();
        } else {
          console.log("end");
        }
      });
    });
  });
}

// callbackTask();

function handleLogStatusPromise(timeout, light) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (light === "red") {
        red();
      } else if (light === "green") {
        green();
      } else if (light === "yellow") {
        yellow();
      }
      resolve();
    }, timeout);
  });
}

function promiseTask() {
  handleLogStatusPromise(1000, "red")
    .then(function () {
      return handleLogStatusPromise(1000, "green");
    })
    .then(function () {
      return handleLogStatusPromise(1000, "yellow");
    })
    .then(function () {
      count++;
      if (count < 3) {
        promiseTask();
      } else {
        console.log("end");
      }
    });
}

// promiseTask();
function* taskGenerator() {
  yield handleLogStatusPromise(1000, "red");
  yield handleLogStatusPromise(1000, "green");
  yield handleLogStatusPromise(1000, "yellow");
}

const gen = taskGenerator();

async function asyncTask() {
  await handleLogStatusPromise(1000, "red");
  await handleLogStatusPromise(1000, "green");
  await handleLogStatusPromise(1000, "yellow");
}

asyncTask();
