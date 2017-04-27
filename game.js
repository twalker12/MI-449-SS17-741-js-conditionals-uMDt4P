
var typeStart = window.prompt('Would you like to play?' + 'Please type Start')
typeStart = typeStart || ''
typeStart = typeStart.toLowerCase().trim()
if (typeStart === 'start') {
  window.alert('Welcome to the game')
  var cancel = window.confirm('Cancel?')
  if (!cancel) {
    var where = window.prompt('Where does the game take place?' + 'Beach' + ' ' + 'or' + ' ' + 'School')
    where = where || ''
    where = where.toLowerCase().trim()
    if (where === 'beach') {
      window.alert('It is a warm and Sunny day on the Beach')
    } else if (where === 'school') {
      window.alert('Oh no you\'re late for class')
    } else {
      window.alert('try again')
    }
    var what = window.prompt('What should you do next?' + 'Play in the sand' + ' ' + 'or' + ' ' + 'Run to class')
    what = what || ''
    what = what.toLowerCase().trim()
    if (what === 'play in the sand') {
      window.alert('make a sandcastle')
    } else if (what === 'run to class') {
      window.alert('Your in class, have a seat')
    } else {
      window.alert('try again')
    }
    var howChoice = window.prompt('How many people do you see?')
    howChoice = parseInt(howChoice)
    if (isNaN(howChoice)) {
      window.alert('not a number')
    } else if (howChoice === 0) {
      window.alert('wow you see no one')
    } else if (howChoice >= 1) {
      window.alert('wow that many people')
    } else {
      window.alert('negative number')
    }
    var randomNumber = Math.random()
    if (randomNumber > 0.5) {
      window.alert('number of seats')
    } else if (randomNumber === 0 || randomNumber > 0.4) {
      window.alert('find a seat')
    } else {
      window.alert('no seats left')
    }
  } else {
    window.alert('cancel')
  }
}
