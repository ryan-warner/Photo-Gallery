function fitFill() {

    var array = document.querySelectorAll('[id=images]');

    var style = getComputedStyle(array[0], null).getPropertyValue('--tw-scale-x');

    console.log(style)

    if(style == 1) {

        document.getElementById('fitFill1').setAttribute("d","M509.09 377.27c0 16.5-13.5 30-30 30H80.91c-16.5 0-30-13.5-30-30V182.73c0-16.5 13.5-30 30-30h398.18c16.5 0 30 13.5 30 30v194.54z");
        document.getElementById('fitFill2').setAttribute("d","M509.09 377.27c0 16.5-13.5 30-30 30H80.91c-16.5 0-30-13.5-30-30V182.73c0-16.5 13.5-30 30-30h398.18c16.5 0 30 13.5 30 30v194.54zM127.27 50.91L280 101.82m152.73-50.91L280 101.82m0 356.36l-152.73 50.91m305.46 0L280 458.18");
        document.getElementById('fitFillText').innerHTML = 'Fill';

        console.log('Here!')

        for(var i = 0; i < array.length; i++){
            var image = array[i];
            image.style.setProperty("--tw-scale-x",1.65);
            image.style.setProperty("--tw-scale-y",1.65);
        };
    }

    if(style == 1.65) {

        document.getElementById('fitFill1').setAttribute("d","M509.09 479.09c0 16.5-13.5 30-30 30H80.91c-16.5 0-30-13.5-30-30V80.91c0-16.5 13.5-30 30-30h398.18c16.5 0 30 13.5 30 30v398.18z");
        document.getElementById('fitFill2').setAttribute("d","M509.09 479.09c0 16.5-13.5 30-30 30H80.91c-16.5 0-30-13.5-30-30V80.91c0-16.5 13.5-30 30-30h398.18c16.5 0 30 13.5 30 30v398.18zM127.27 152.73L280 101.82m152.73 50.91L280 101.82m0 356.36l-152.73-50.91m305.46 0L280 458.18");
        document.getElementById('fitFillText').innerHTML = 'Fit';

        for (var i = 0; i < array.length; i++){
            var image = array[i];
            image.style.setProperty("--tw-scale-x",1.0);
            image.style.setProperty("--tw-scale-y",1.0);
        };
    }
}