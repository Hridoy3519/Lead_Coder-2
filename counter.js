window.addEventListener('scroll', function () {
    var element = document.querySelector('#counter-view');
    var position = element.getBoundingClientRect();

    // checking whether fully visible
    if (position.top >= 0 && position.bottom <= window.innerHeight) {
        var counter1 = document.querySelector(".count1");
        var counter2 = document.querySelector(".count2");
        var counter3 = document.querySelector(".count3");
        let coun1 = 0;
        let coun2 = 0;
        let coun3 = 0;
        setInterval(() => {
            if (coun1 < 150) {
                coun1 += 7.5;
                counter1.innerText = Math.round(coun1);
            }
        }, 50)

        setInterval(() => {
            if (coun2 < 980) {
                coun2 += 49;
                counter2.innerText = "" + Math.round(coun2) + 'K';
            }
        }, 50)

        setInterval(() => {
            if (coun3 < 2500) {
                coun3 += 125;
                counter3.innerText = Math.round(coun3);
            }
        }, 50)
    }

    // checking for partial visibility
    if (position.top < window.innerHeight && position.bottom >= 0) {
        console.log('Element is partially visible in screen');
    }
});



