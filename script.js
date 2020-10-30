// Sort band names excluding articles
const bands = [
  'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil',
  'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State',
  'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive',
  'Anywhere But Here', 'An Old Dog'
];

// This would be the 'basic' sorting - which includes articles
/*
const sortedBands = bands.sort(function (a, b) {
  if (a > b) {
    return 1;
  } else {
    return -1;
  }
});

console.log(sortedBands);
*/

// RegExp replacing articles with 'nothing'
// Then we 'trim' any spaces that might remain  in the end
function strip(bandName) {
  return bandName.replace(/^(a |the |an )/i, '').trim();
}

/*
const sortedBands = bands.sort(function (a, b) {
  if (a > b) {
    return 1;
  } else {
    return -1;
  }
});
*/

// Simpler version
const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

// Takes the element, sets its innerHTML to the bandname
// Displays them in a list
// 'join' is needed because the string version (toString) of sortedBands array would contain
// a list of names divided by commas
document.querySelector('#bands').innerHTML = sortedBands.map(band => `<li>${band}</li>`)
  .join('');

console.log(sortedBands);