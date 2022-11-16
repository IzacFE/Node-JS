const getData = (id) => {
  let result = "";
  for (let i = 0; i < id; i++) {
    result += "xo";
  }
  return result;
};

const sendData5 = getData(5);
console.log(sendData5);

const sendData2 = getData(2);
console.log(sendData2);

const quick = "Hello World";
console.log(quick);
