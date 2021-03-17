function fitFill() {

    var array = document.querySelectorAll('[id=images]');

    var style = getComputedStyle(array[0], null).getPropertyValue('--tw-scale-x');
    
    var length = style.length;
    console.log('Test: ' + style)
    console.log(length)

    if(length == 1) {

        document.getElementById('fitFill').src='/assets/fit.svg';
        document.getElementById('fitFillText').innerHTML = 'Fill';

        for(var i = 0; i < array.length; i++){
            var image = array[i];
            image.style[--tw-scale-x] = 1.6;
            image.style[--tw-scale-x] = 1.6;
        };
    }

    if(length == 3) {

        document.getElementById('fitFill').src='/assets/fill.svg';
        document.getElementById('fitFillText').innerHTML = 'Fit';

        for (var i = 0; i < array.length; i++){
            var image = aray[i];
            image.style.transform = 'tw-scale-x(1.0)';
            image.style.transform = 'tw-scale-y(1.0)';
        };
    }
}