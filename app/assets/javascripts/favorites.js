$(document).ready(() =>{
  console.log('favorites page linked, bitches')

  let myStorage = localStorage;

  myStorage.removeItem('better_errors_previous_commands')

  console.log('my storage keys:', Object.keys(myStorage))

  let storageKeys = Object.keys(myStorage);
  let faves = $('#favorites-list')
  let allFaves = storageKeys.map((key) =>{
    return $('<a>', {
      href: `https://rubygems.org/gems/${myStorage[key]}`
    }).text(key).appendTo(faves)
  })


})//end of document ready
