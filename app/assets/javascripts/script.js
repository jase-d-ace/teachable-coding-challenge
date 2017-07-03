$(document).ready(() =>{
  console.log('javascript linked, bitches!');

  //testing
  $('.test-button').click(()=>{
    $.ajax({
      method: 'POST',
      url: 'http://localhost:3000/search',
      success: (data) =>{
      console.log('got this back from ajax', data)
      },
      error: (error) =>{
      console.log('ajax error: ', error)
      }
    });
  });

  //putting together the ajax form
$('.test-form').submit((e) =>{
    e.preventDefault();
    let gem = $('.test-class').val();
    console.log('form submitted, bitches!');
    console.log('this is what you\'re searching for: ', gem)
    $.ajax({
      method: 'POST',
      url: 'http://localhost:3000/search',
      data: {
        gem
      },
      success: data =>{
        console.log('got this back from form ajax', data)
      },
      error: error =>{
        console.log('form ajax error: ', error)
      }
    })

  })

  //add a click listener for the button that will save to localStorage
  //localStorage.setItem('gem', 'the new gem')


  //we know how to save to local storage now
  let myStorage = localStorage;
  $('.test-storage').click(()=>{
    myStorage.setItem('whatwewant', 'bitches');
    console.log('myStorage: ', myStorage)
  })

  $('.delete-storage').click(()=>{
    myStorage.clear();
    console.log('storage cleared', myStorage)
  })
})
