function menu() {


    div = document.getElementById('options');
    style = getComputedStyle(div).getPropertyValue('display')

    if(style == 'none') {
        div.style.setProperty('display','block')
    } else {
        div.style.setProperty('display','none')
    }
    
  }