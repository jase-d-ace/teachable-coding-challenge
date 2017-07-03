$(document).ready(() =>{
  console.log('javascript linked, bitches!');

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
      let myStorage = localStorage;
    //holder div for a new gem
    let result = $('<div>', {
      class: 'search-result'
    });
    let results = $('#search-results').empty()
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
    let favorite = $('<div>', {
      class: 'save',
      text: 'save?'
    })
    favorite.click(()=>{
      myStorage.setItem(gem.name, gem.name)
      console.log('myStorage: ', myStorage)
    })
    favorite.appendTo(newGem)
    gemName.appendTo(newGem);

    //add gem's information to the DOM
    let gemInfo = $('<div>', {
      class: 'gem-info'
    });
    gemInfo.text(gem.info);
    gemInfo.appendTo(results);

    let dependencies = $('<div>', {
      class: 'dependencies'
    }).appendTo(results)

    array.map((dependency) =>{
      return $('<a>', {
        class: 'dependency',
        href: `https://rubygems.org/gems/${dependency}`
      }).text(dependency).appendTo(dependencies)
    })
  }

  //we know how to save to local storage now

  $('.delete-storage').click(()=>{
    localStorage.clear();
    console.log('storage cleared', localStorage)
  })
})
