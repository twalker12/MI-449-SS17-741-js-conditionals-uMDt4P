
  var typeStart = window.prompt('Would you like to play?' + 'Please type Start')
  if (typeStart === 'Start') {
    window.alert('Welcome to the game')
  } else if (typeStart === null) {
    window.prompt('Please try again')
    if (typeStart === null) {
      window.alert('Game Over')
    }
  } else {
    window.alert('Please try again' + ' ' + 'Case Sensitive')
  }
  var where = window.prompt('Where does the game take place?' + 'Beach' + ' ' + 'or' + ' ' + 'School')
  if (where === 'Beach') {
    window.alert('It is a warm and Sunny day on the Beach')
  } else {
    window.alert('Oh no you\'re late for class')
  }
