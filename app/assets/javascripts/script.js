$(document).ready(() =>{

  //putting together the ajax form
$('.test-form').submit((e) =>{
  //prevent default behavior
    e.preventDefault();
    //define value to pass to backend
    let gem = $('.test-class').val();
    $.ajax({ //ajax call to hit the gem route
      method: 'POST',
      url: 'http://localhost:3000/search',
      data: {
        gem
      },
      success: data =>{
        //data is parsed in the backend and given back in two sets
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
    })
    favorite.appendTo(newGem)
    gemName.appendTo(newGem);

    //add gem's information to the DOM
    let gemInfo = $('<div>', {
      class: 'gem-info'
    });
    gemInfo.text("Information: ", gem.info);
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

  $('.delete-storage').click(()=>{
    localStorage.clear();
  })
})
