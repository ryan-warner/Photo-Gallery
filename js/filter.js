function filter(option) {
    console.log(option)

    div = document.getElementById('options');
    style = getComputedStyle(div).getPropertyValue('display')

    var list = document.getElementById('albums').getElementsByTagName('li')

    i = 0
    names = []
    indices = []
    sortedArr = []

    while(i < list.length) {
        names.push(list[i].innerHTML)
        indices.push(i)
        i++
    }

    names.sort()
    reversed = []
    reversedIndices = []

    names.forEach(element => {
        reversed.unshift(element)
        reversedIndices.unshift(names.indexOf(element))
    });

    if(option == "ZA") {
        i = 0
        while(i < list.length) {
            j = reversedIndices[i]
            sortedArr.push(list[j])
            i++
        }
    } else {

    }

    i = 0

    sortedArr.forEach(element => {
        console.log(document.getElementById('albums')[0])
        console.log(element)
        
        document.getElementById('albums')[0][i].replaceWith(element)
        i++
    });

    console.log(sortedArr)

    div.style.setProperty('display','none')

  }