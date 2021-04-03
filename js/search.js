function search() {
    var input, filter, ul, li, item, i, txtValue;
    count = 0;

    input = document.getElementById('searchbar');
    filter = input.value.toUpperCase();

    ul = document.getElementById('albums');
    last = ul.lastElementChild
    lastContent = last.innerText

    if (lastContent == 'No Results Found') {
        ul.removeChild(ul.lastElementChild);
    }

    ul = document.getElementById('albums');
    li = ul.getElementsByTagName('li');


  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      
        item = li[i]
        txtValue = item.textContent || item.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
        } else {
            li[i].style.display = "none";

            count++

            if (count == li.length) {
                var error = document.createElement('a');
                error.innerHTML = 'No Results Found';
                ul.appendChild(error.cloneNode(true));
            }

        }
    }


  }