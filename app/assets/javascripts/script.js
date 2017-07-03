$(document).ready(() =>{
  console.log('javascript linked, bitches!');

  $('.test-button').click(()=>{
    $.ajax({
      method: 'GET',
      url: 'http://localhost:3000/search',
      success: (data) =>{
      console.log('got this back from ajax', data)
      },
      error: (error) =>{
      console.log('ajax error: ', error)
      }
    });
  });

  //add a click listener for the button that will save to localStorage
  //localStorage.setItem('gem', 'the new gem')
})
