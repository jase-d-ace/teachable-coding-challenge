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
        renderGem(data.response_data, data.dependencies)
      },
      error: error =>{
        console.log('form ajax error: ', error)
      }
    })
  })

  const renderGem = (gem, array) =>{
    //holder div for a new gem
    let result = $('<div>', {
      class: 'search-result'
    });
    let results = $('#search-results')
    //append holder div to the hardcoded HTML
    result.appendTo(results)
    //card-style div to display information about a gem
    let newGem = $('<div>', {
      class: 'gem'
    });
    newGem.appendTo(result);
    //add the gem's name (and link to rubygems.org info) to the DOM
    let gemName = $('<a>', {
      class: 'gem-name',
      href: `https://rubygems.org/gems/${gem.name}`
    });
    gemName.text(gem.name);
    gemName.appendTo(newGem);

    //add gem's information to the DOM
    let gemInfo = $('<div>', {
      class: 'gem-info'
    });
    gemInfo.text(gem.info);
    gemInfo.appendTo(newGem);

    let dependencies = $('<div>', {
      class: 'dependencies'
    }).appendTo(newGem)

    array.map((dependency) =>{
      return $('<div>', {
        class: 'dependency'
      }).text(dependency).appendTo(dependencies)
    })
  }



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
