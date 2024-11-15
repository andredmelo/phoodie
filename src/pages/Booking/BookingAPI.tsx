const seededRandom = function (seed: any) {
  var m = 2**35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = s * a % m) / m;
  };
};

const fetchAPI = function(date: any) {
  let result = [];
  let random = seededRandom(date.getDate());

  for(let i = 17; i <= 23; i++) {
    if(random() < 0.5) {
        result.push(i + ':00');
    }
    if(random() < 0.5) {
        result.push(i + ':30');
    }
  }

  return result;
};

const submitAPI = function(formData: any) {
  void formData; // This line simulates a call without side effects
  return true;
};

export { fetchAPI, submitAPI };