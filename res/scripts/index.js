document.addEventListener('click', function (e) {

    if (e.target.className == 'theme') {

        e.target.style.filter = 'invert(0%)';

        const navig = document.getElementsByClassName("navigation");
        navig[0].style.backgroundColor = 'white';

        var setblacktext = 
        ['desc', 'link', 'questpart1', 'textdaymn', 'card', 'question'];

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

        var setwhiteback = 
        ['card', 'advcards'];

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

        // const title = document.getElementsByClassName("title");
        // for (index = 0; index < title.length; ++index) {
        //     title[index].style.backgroundImage = 'linear-gradient(to top, rgb(197, 134, 255), rgb(121, 133, 255))';
            
        // }

        const firstback = document.getElementsByClassName("first");
        
        for (index = 0; index < firstback.length; ++index) {
            console.log(firstback[index]);
            firstback[index].style.backgroundImage = 'rgb(147, 53, 255)';
            
        }

        // const main = document.getElementsByClassName("main_container");
        // for (index = 0; index < main.length; ++index) {
        //     main[index].style.backgroundcolor = 'linear-gradient(to top, rgb(197, 134, 255), rgb(121, 133, 255))';
            
        // }

        // const title = document.getElementsByClassName("title");
        // for (index = 0; index < title.length; ++index) {
        //     title[index].style.backgroundImage = 'linear-gradient(to top, rgb(197, 134, 255), rgb(121, 133, 255))';
            
        // }

        



    }

}, false);


// console.log(links[index]);

// console.log(`${index}: ${item}`);     foreach