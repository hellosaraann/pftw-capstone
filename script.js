/*
CARD ARRAY
- keys of text, selected, and winning are changed in the game when matches occur
- these changes inform other functions and classes in the app
*/

var cardArray = [
   {'index': 1 , 'color': 'red', 'text': '?', 'selected': 'unselected', 'winning': false},
   {'index': 2 , 'color': 'orange', 'text': '?', 'selected': 'unselected', 'winning': false},
   {'index': 3 , 'color': 'yellow', 'text': '?', 'selected': 'unselected', 'winning': false},
   {'index': 4 , 'color': 'green', 'text': '?', 'selected': 'unselected', 'winning': false},
   {'index': 5 , 'color': 'blue', 'text': '?', 'selected': 'unselected', 'winning': false},
   {'index': 6 , 'color': 'purple', 'text': '?', 'selected': 'unselected', 'winning': false},
   {'index': 7 , 'color': 'black', 'text': '?', 'selected': 'unselected', 'winning': false},
   {'index': 8 , 'color': 'brown', 'text': '?', 'selected': 'unselected', 'winning': false},
   {'index': 9 , 'color': 'red', 'text': '?', 'selected': 'unselected', 'winning': false},
   {'index': 10 , 'color': 'orange', 'text': '?', 'selected': 'unselected', 'winning': false},
   {'index': 11 , 'color': 'yellow', 'text': '?', 'selected': 'unselected', 'winning': false},
   {'index': 12 , 'color': 'green', 'text': '?', 'selected': 'unselected', 'winning': false},
   {'index': 13 , 'color': 'blue', 'text': '?', 'selected': 'unselected', 'winning': false},
   {'index': 14 , 'color': 'purple', 'text': '?', 'selected': 'unselected', 'winning': false},
   {'index': 15 , 'color': 'black', 'text': '?', 'selected': 'unselected', 'winning': false},
   {'index': 16 , 'color': 'brown', 'text': '?', 'selected': 'unselected', 'winning': false}
];


/*
CARD COMPONENT
- each card is built on this structure
- text is passed into the h2 tag on matches or mismatches
*/

Vue.component ( 'single-card', {
	props: [
		'cards', 'text'
	],
	template: `
		<div class='card'>
			<h2>{{ text }}</h2>
		</div>
	`
});


/*
APP FUNCTIONS
- cards from array are clicked and pushed to selectedCards array (max of 2) to compare
- if 2 selectedCards are a match, then they are pushed to the matchedCards array
- when the length of the matchedCards array equals the length of the cards array, the player gets a winner alert
- a button can be pushed or page refreshed for a new game
*/

var vm = new Vue({
  el: "#cardApp",
  data: {
    cards: cardArray,
    selectedCards: [],
    matchedCards: []
  },
  // matchedCards are watched for winning status, using .length as the key indicator
  watch: {
    matchedCards: function (cards) {
      if (this.matchedCards.length === this.cards.length){
        for (let i = 0; i <  this.cards.length; i++){
          this.cards[i].winning = true;
        };
        setTimeout(function(){
          this.winner();
        }.bind(this), 500);
      }
    }
  },
  methods: {
      shuffleCards: function() {
        // used by page refresh and new game button to make card order random
        this.cards.sort(function(){
        return 0.5 - Math.random()
        })
      },
      compareCards: function(){
        // compares colors of selectedCards and adds to matchedCards if a match
          if (this.selectedCards[0].color === this.selectedCards[1].color) {
              this.selectedCards[0].text = this.selectedCards[1].text =
                'yay';
              this.selectedCards[0].selected = this.selectedCards[1].selected= 'matched';
              this.matchedCards.push(this.selectedCards[0], this.selectedCards[1]);
              this.selectedCards.pop();
              this.selectedCards.pop();
          } else if (this.selectedCards[0].color !== this.selectedCards[1].color) {
            // if not a match, pops both from selectedCards and returns to base values
              this.selectedCards[0].text = this.selectedCards[1].text = 'X';
              setTimeout(function(){
                    this.selectedCards[0].selected = this.selectedCards[1].selected = 'unselected';
                    this.selectedCards[0].text = this.selectedCards[1].text = '?';
                    this.selectedCards.pop();
                    this.selectedCards.pop();
                    this.cards.disabled = false;
              }.bind(this), 700);
          }
      },
      displayCard: function(cardSelected){
        // shows card color and pushes to selectedCards
        cardSelected.selected = 'selected';
        this.selectedCards.push(cardSelected);
        cardSelected.disabled = true;
        if( this.selectedCards.length === 2 ){
          // when there are 2 selectedCards, the cards are compared
            this.compareCards();
        }
      },
      winner: function(){
            alert('You did it! Everyone is very proud of you.');
      }
  },
  created: function(){
    // allows cards to appear randomized when page loads
    this.shuffleCards();
  }
});
