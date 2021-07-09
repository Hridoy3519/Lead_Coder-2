let now = 0;

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled >= 400 && scrolled <= 1200) now = 1;
    else now = 0;
    if (now) {
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
})

// setTimeout(() => {
//     var counter1 = document.querySelector(".count1");
//     var counter2 = document.querySelector(".count2");
//     var counter3 = document.querySelector(".count3");
//     let coun1 = 0;
//     let coun2 = 0;
//     let coun3 = 0;

//     setInterval(() => {
//         if (coun1 < 150) {
//             coun1 += 7.5;
//             counter1.innerText = Math.round(coun1);
//         }
//     }, 50)

//     setInterval(() => {
//         if (coun2 < 980) {
//             coun2 += 49;
//             counter2.innerText = "" + Math.round(coun2) + 'K';
//         }
//     }, 50)

//     setInterval(() => {
//         if (coun3 < 2500) {
//             coun3 += 125;
//             counter3.innerText = Math.round(coun3);
//         }
//     }, 50)
// }, 2000)

// let now = 0;
// let coun1 = 0;
// let coun2 = 0;
// let coun3 = 0;
// window.addEventListener('scroll', () => {
//     const scrolled = window.scrollY;
//     if (scrolled >= 400 && scrolled <= 1200 && coun1 == 0 && coun2 == 0 && coun3 == 0) now = 1;
//     else coun3 = 0, coun2 = 0, coun1 = 0, now = 0;

//     if (now) {
//         var counter1 = document.querySelector(".count1");
//         var counter2 = document.querySelector(".count2");
//         var counter3 = document.querySelector(".count3");
//         setInterval(() => {
//             if (coun1 < 150) {
//                 coun1 += 7.5;
//                 counter1.innerText = Math.round(coun1);
//             }
//         }, 50)

//         setInterval(() => {
//             if (coun2 < 980) {
//                 coun2 += 49;
//                 counter2.innerText = "" + Math.round(coun2) + 'K';
//             }
//         }, 50)

//         setInterval(() => {
//             if (coun3 < 2500) {
//                 coun3 += 125;
//                 counter3.innerText = Math.round(coun3);
//             }
//         }, 50)

//     }
// })

// setTimeout(() => {
//     var counter1 = document.querySelector(".count1");
//     var counter2 = document.querySelector(".count2");
//     var counter3 = document.querySelector(".count3");
//     let coun1 = 0;
//     let coun2 = 0;
//     let coun3 = 0;

//     setInterval(() => {
//         if (coun1 < 150) {
//             coun1 += 7.5;
//             counter1.innerText = Math.round(coun1);
//         }
//     }, 50)

//     setInterval(() => {
//         if (coun2 < 980) {
//             coun2 += 49;
//             counter2.innerText = "" + Math.round(coun2) + 'K';
//         }
//     }, 50)

//     setInterval(() => {
//         if (coun3 < 2500) {
//             coun3 += 125;
//             counter3.innerText = Math.round(coun3);
//         }
//     }, 50)
// }, 2000)


