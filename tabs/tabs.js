class TabLink {
    constructor(tab) {
        this.tab = tab;
        this.tabData = this.tab.dataset.tab;

        // if user clicked view or specific category 

        if(this.tabData === 'all'){
            this.cards = document.querySelectorAll('.card');
        } else {
            this.cards = document.querySelectorAll(`.card[data-tab='${this.tabData}']`);
        }

            // Map over the newly converted NodeList we 
            //just created in our if statement above. 
            //Convert each this.cards element into a new instance of the TabCard class. 
            //Pass in a card object to the TabCard class. 
                this.cards = Array.from(this.cards).map(card => new TabCard(card));

            //click listener invoke this.selectTab();
            this.tab.addEventListener('click', () => this.selectTab());

    }

        selectTab() {
            const tabs = document.querySelectorAll('.tab');
            console.log('clicked');
            tabs.forEach( tab => {
                tab.classList.remove('active-tab');
                
            });


            const cards = document.querySelectorAll('.card');

                cards.forEach(card => {
                    card.style.display = "none";
                    card.classList.remove('full-width');
                })

                this.tab.classList.add('active-tab');
                

                    //loop through this cards array  invoke selectCard() from TabCard class  
                this.cards.forEach(card => card.selectCard());
        }
}

class TabCard {
    constructor(cardElement) {
        this.cardElement = cardElement;

    }

    selectCard() {
        this.cardElement.style.display = null;
        this.cardElement.classList.add('full-width');
    }
}


let tabs = document.querySelectorAll('.tab');
tabs.forEach( tab => new TabLink (tab));

// work on adding active-tab class 