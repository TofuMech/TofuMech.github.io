document.addEventListener('DOMContentLoaded', function() {
    const homeButton = document.querySelector('.homeButton');
    const artworkButton = document.querySelector('.artworkButton');
    const artCard = document.querySelector('.artCard');
    const blogCard = document.querySelector('.blogCard');
    const musicCard = document.querySelector('.musicCard');
    const randomTextElement = document.getElementById('randomText');
    const artImages = document.querySelectorAll('.portfolio-container img');
    const mobileMenu = document.getElementById('dropdownMenu');
    const mobileButtons = document.querySelector('.mobileButtons'); 
    const mobileartButton = document.getElementById('mobileArtworkButton');
    const mobilehomeButton = document.getElementById('mobileHomeButton');
    const bar2 = document.getElementById('bar2');
    const bar3 = document.getElementById('bar3');

    function displayRandomText() {
        const quotes = [
            "[TAKE YOUR TIME]",
            "[DRAW EVERYDAY]",
            "[DRINK WATER]",
            "[CLEAN YOUR SCREEN]",
            "[PLAY MAGIC]",
            "[I GET NO KICK FROM CHAMPAGNE]"
        ];
        const randomIndex = Math.floor(Math.random() * quotes.length);
        randomTextElement.innerHTML = quotes[randomIndex];
    }
    displayRandomText();

    function moveCardsAway() {
        artCard.classList.add('move-up');
        blogCard.classList.add('move-up');
        musicCard.classList.add('move-up');
    }

    function moveCardsBack() {
        artCard.classList.remove('move-up');
        blogCard.classList.remove('move-up');
        musicCard.classList.remove('move-up');
    }

    function toggleBars() {
        if (bar2.classList.contains('translate-bar2')) {
            barsDown();
        } else {
            barsUp();
        }
    }

    function barsUp() {
        bar2.classList.add('translate-bar2');
        bar3.classList.add('translate-bar3');
    }

    function barsDown() {
        bar2.classList.remove('translate-bar2');
        bar3.classList.remove('translate-bar3');
    }

    function showArt() {
        artImages.forEach(image => {
            image.classList.add('visible');
        });
    }

    function hideArt() {
        artImages.forEach(image => {
            image.classList.remove('visible');
        });

        const enlargedContainer = document.querySelector('.enlarged-container');
        if (enlargedContainer) {
            enlargedContainer.remove();
        }
    }

    function openImage(event) {
        if (!event.target.classList.contains('visible')) return;

        const image = event.target;
        const existingContainer = document.querySelector('.enlarged-container');

        if (existingContainer) {
            existingContainer.remove();
        }

        if (!existingContainer || existingContainer.querySelector('img') !== image) {
            const container = document.createElement('div');
            container.classList.add('enlarged-container');

            const enlargedImage = image.cloneNode(true);
            enlargedImage.classList.add('enlarged');

            container.addEventListener('click', () => {
                container.remove();
            });

            container.appendChild(enlargedImage);

            document.body.appendChild(container);
        }
    }

    artImages.forEach(image => {
        image.addEventListener('click', openImage);
    });
    artworkButton.addEventListener('click', () => {
        moveCardsAway();
        showArt();
    });
    homeButton.addEventListener('click', () => {
        moveCardsBack();
        hideArt();
    });

    mobileMenu.addEventListener('click', () => {
        toggleBars();
    });

    mobileMenu.addEventListener('click', () => {
        mobileButtons.classList.toggle('showmobileButtons'); 
    });

    mobileartButton.addEventListener('click', () => {
        moveCardsAway();
        showArt();
    })

    mobileHomeButton.addEventListener('click', () => {
        moveCardsBack();
        hideArt();
    })
});
