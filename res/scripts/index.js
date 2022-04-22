document.addEventListener('click', function (e) {

    if (e.target.className == 'lighttheme') {

        const navig = document.getElementsByClassName("navigation");
        navig[0].style.boxShadow = '-2px -1px 41px 0px rgba(67,56,130,0.3)';
        navig[0].style.backgroundColor = 'white';

        var setblacktext = ['desc', 'link', 'questpart1', 'textdaymn', 'card', 'question'];

        setblacktext.forEach((item, index) => {

            const text = document.getElementsByClassName(item);
            for (i = 0; i < text.length; ++i) {
                text[i].style.color = 'black';
            }
        })

        const brand = document.getElementsByClassName("brand");
        for (index = 0; index < brand.length; ++index) {
            brand[index].style.backgroundImage = 'linear-gradient(to right, rgb(45, 0, 70), rgb(134, 51, 255))';
        }

        const questpart2 = document.getElementsByClassName("questpart2");
        for (index = 0; index < questpart2.length; ++index) {
            questpart2[index].style.color = 'rgb(45, 0, 70)';
        }

        const card = document.getElementsByClassName("card");
        for (index = 0; index < card.length; ++index) {
            card[index].style.backgroundColor = 'white';
        }

        var setwhiteback = ['card', 'advcards'];

        setwhiteback.forEach((item, index) => {

            const back = document.getElementsByClassName(item);
            for (i = 0; i < back.length; ++i) {
                back[i].style.backgroundColor = 'white';
            }
        })

        const titleback = document.getElementsByClassName("title");
        for (index = 0; index < titleback.length; ++index) {
            titleback[index].style.backgroundImage = 'linear-gradient(to top, rgb(197, 134, 255), rgb(121, 133, 255))';

        }

        const secondback = document.getElementsByClassName("second");
        for (index = 0; index < secondback.length; ++index) {

            secondback[index].style.backgroundColor = 'none';

            secondback[index].style.backgroundImage = 'linear-gradient(to bottom, rgb(255, 255, 255), rgb(186, 255, 229))';


        }

        const firstback = document.getElementsByClassName("first");
        for (index = 0; index < firstback.length; ++index) {

            firstback[index].style.backgroundColor = 'rgb(255, 255, 255)';
            firstback[index].style.backgroundImage = 'none';

        }

        const maincont = document.getElementsByClassName("main_container");
        for (index = 0; index < maincont.length; ++index) {

            maincont[index].style.backgroundColor = 'rgb(227, 203, 255)';

        }


        var buttontheme = document.getElementsByClassName("lighttheme");
        for (index = 0; index < buttontheme.length; ++index) {
            console.log(buttontheme[index].classList);
            buttontheme[index].classList.add("darktheme");
            buttontheme[index].classList.remove("lighttheme");
            buttontheme = document.getElementsByClassName("darktheme");
            console.log(buttontheme[index].classList);
        }

        return
    }


if (e.target.className == 'darktheme') {
    console.log(e);

    navig = document.getElementsByClassName("navigation");
    navig[0].style.boxShadow = 'none';
    navig[0].style.backgroundColor = 'black';

        var setblacktext = ['desc', 'link', 'questpart1', 'textdaymn', 'card', 'question'];

        setblacktext.forEach((item, index) => {

            text = document.getElementsByClassName(item);
            for (i = 0; i < text.length; ++i) {
                text[i].style.color = 'white';
            }
        })

        titleback = document.getElementsByClassName("title");
        for (index = 0; index < titleback.length; ++index) {
            titleback[index].style.backgroundImage = 'linear-gradient(to top, rgb(61, 0, 117), rgb(0, 0, 0))';

        }

        brand = document.getElementsByClassName("brand");
        for (index = 0; index < brand.length; ++index) {
            brand[index].style.color = 'transparent';
            brand[index].style.backgroundImage = 'linear-gradient(to right, rgb(166, 255, 131), rgb(0, 255, 255))';
        }

        questpart2 = document.getElementsByClassName("questpart2");
        for (index = 0; index < questpart2.length; ++index) {
            questpart2[index].style.color = 'rgb(66, 255, 220)';
        }

        card = document.getElementsByClassName("card");
        for (index = 0; index < card.length; ++index) {
            card[index].style.backgroundColor = 'black';
        }

        advcards = document.getElementsByClassName("advcards");
        for (index = 0; index < advcards.length; ++index) {
            advcards[index].style.backgroundColor = 'rgb(27, 9, 48)';
        }


        secondback = document.getElementsByClassName("second");
        for (index = 0; index < secondback.length; ++index) {

            secondback[index].style.backgroundColor = 'rgb(40, 15, 68)';

            secondback[index].style.backgroundImage = 'none';


        }

        firstback = document.getElementsByClassName("first");
        for (index = 0; index < firstback.length; ++index) {

            firstback[index].style.backgroundColor = 'none';
            firstback[index].style.backgroundImage = 'linear-gradient(to bottom, rgb(117, 24, 223), rgb(58, 56, 190))';

        }

        maincont = document.getElementsByClassName("main_container");
        for (index = 0; index < maincont.length; ++index) {

            maincont[index].style.backgroundColor = 'rgb(21, 0, 46)';

        }


        var buttontheme2 = document.getElementsByClassName("darktheme");
        for (index = 0; index < buttontheme2.length; ++index) {
    
            buttontheme2[index].classList.add("lighttheme");
            buttontheme2[index].classList.remove("darktheme");
        }

        return
}

}, false);

// document.addEventListener('click', function (e) {

//  if (e.target.className == 'darktheme') {

//         navig = document.getElementsByClassName("navigation");
//         navig[0].style.boxShadow = 'none';
//         navig[0].style.backgroundColor = 'black';

//         var setblacktext2 = ['desc', 'link', 'questpart1', 'textdaymn', 'card', 'question'];

//         setblacktext.forEach((item, index) => {

//             text = document.getElementsByClassName(item);
//             for (i = 0; i < text.length; ++i) {
//                 text[i].style.color = 'white';
//             }
//         })

//         brand = document.getElementsByClassName("brand");
//         for (index = 0; index < brand.length; ++index) {
//             brand[index].style.backgroundImage = 'linear-gradient(to right, rgb(166, 255, 131), rgb(0, 255, 255))';
//         }

//         questpart2 = document.getElementsByClassName("questpart2");
//         for (index = 0; index < questpart2.length; ++index) {
//             questpart2[index].style.color = 'rgb(66, 255, 220)';
//         }

//         card = document.getElementsByClassName("card");
//         for (index = 0; index < card.length; ++index) {
//             card[index].style.backgroundColor = 'black';
//         }

//         advcards = document.getElementsByClassName("advcards");
//         for (index = 0; index < advcards.length; ++index) {
//             advcards[index].style.backgroundColor = 'rgb(27, 9, 48)';
//         }

//         titleback = document.getElementsByClassName("title");
//         for (index = 0; index < titleback.length; ++index) {
//             titleback[index].style.backgroundImage = 'linear-gradient(to right, rgb(166, 255, 131), rgb(0, 255, 255))';

//         }

//         secondback = document.getElementsByClassName("second");
//         for (index = 0; index < secondback.length; ++index) {

//             secondback[index].style.backgroundColor = 'rgb(40, 15, 68)';

//             secondback[index].style.backgroundImage = 'none';


//         }

//         firstback = document.getElementsByClassName("first");
//         for (index = 0; index < firstback.length; ++index) {

//             firstback[index].style.backgroundColor = 'none';
//             firstback[index].style.backgroundImage = 'linear-gradient(to bottom, rgb(117, 24, 223), rgb(58, 56, 190))';

//         }

//         maincont = document.getElementsByClassName("main_container");
//         for (index = 0; index < maincont.length; ++index) {

//             maincont[index].style.backgroundColor = 'rgb(21, 0, 46)';

//         }


//         var buttontheme2 = document.getElementsByClassName("darktheme");
//         for (index = 0; index < buttontheme2.length; ++index) {
    
//             buttontheme2[index].classList.add("lighttheme");
//             buttontheme2[index].classList.remove("darktheme");
//         }


//     }

// }, false);


// console.log(links[index]);

// console.log(`${index}: ${item}`);     foreach