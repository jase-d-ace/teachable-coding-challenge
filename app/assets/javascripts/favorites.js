$(document).ready(() =>{

  let myStorage = localStorage;

  myStorage.removeItem('better_errors_previous_commands')

  let storageKeys = Object.keys(myStorage);
  let faves = $('#favorites-list')
  // let allFaves = storageKeys.map((key) =>{
  //   return $('<a>', {
  //     href: `https://rubygems.org/gems/${myStorage[key]}`,
  //     class: 'favorite'
  //   }).text(key).appendTo(faves)
// })
    storageKeys.forEach(key =>{
      let dependencyLink = $('<a>', {
        class: 'favorite',
        href: `https://rubygems.org/gems/${myStorage[key]}`
      }).text(key).appendTo(faves);
      let deleteButton = $('<button>', {
        class: 'delete-button'
      }).click(() =>{
        myStorage.removeItem(key);
        window.location.reload();
      }).text('Delete').appendTo(faves)
    })


})//end of document ready
