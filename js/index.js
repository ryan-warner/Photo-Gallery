function fitFill() {

    var temp = document.querySelector('.images')

    var all = document.getElementsByClassName('images');

    var style = window.getComputedStyle(temp, null).getPropertyValue('transform');
    
    var length = style.length;

    if(length == 24) {

        document.getElementById('fitFill').src='/assets/fit.svg';
        document.getElementById('fitFillText').innerHTML = 'Fill';

        for(var i = 0; i < all.length; i++){
            var image = all[i];
            image.style.transform = 'scale(1.6)';
        };
    }

    if(length == 28) {

        document.getElementById('fitFill').src='/assets/fill.svg';
        document.getElementById('fitFillText').innerHTML = 'Fit';

        for (var i = 0; i < all.length; i++){
            var image = all[i];
            image.style.transform = 'scale(1.0)';
        };
    }
}