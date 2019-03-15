const datalistNode = document.getElementById('location-list');
const inputNode = document.getElementById('location-input');
// const request = new XMLHttpRequest();

let cityList = [
  {
    "name": "Tomsk",
    "country": "RU"
  },
  {
    "name": "London",
    "country": "UK"
  }
];

inputNode.placeholder = 'Loading options...';

cityList.forEach(function(item) {
  let option = document.createElement('option');
  option.value = item.name + ', ' + item.country;
  datalistNode.appendChild(option);

  inputNode.placeholder = 'Location';
});

// request.onreadystatechange = function(response) {
//   if (request.readyState === 4) {
//     if (request.status === 200) {
//       let jsonOptions = JSON.parse(request.responseText);
//
//       jsonOptions.forEach(function(item) {
//         let option = document.createElement('option');
//         option.value = item.name;
//         datalistNode.appendChild(option);
//
//         inputNode.placeholder = 'Location';
//       });
//     } else inputNode.placeholder = "Couldn't load options";
//   }
// };
//
// request.open('GET', '', true);
// request.send();