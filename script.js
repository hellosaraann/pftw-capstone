// CARD ARRAY

var cardArray = [
   {'index': 1 , 'color': 'red', 'text': '?', 'selected': 'unselected'},
   {'index': 2 , 'color': 'orange', 'text': '?', 'selected': 'unselected'},
   {'index': 3 , 'color': 'yellow', 'text': '?', 'selected': 'unselected'},
   {'index': 4 , 'color': 'green', 'text': '?', 'selected': 'unselected'},
   {'index': 5 , 'color': 'blue', 'text': '?', 'selected': 'unselected'},
   {'index': 6 , 'color': 'purple', 'text': '?', 'selected': 'unselected'},
   {'index': 7 , 'color': 'black', 'text': '?', 'selected': 'unselected'},
   {'index': 8 , 'color': 'brown', 'text': '?', 'selected': 'unselected'},
   {'index': 9 , 'color': 'red', 'text': '?', 'selected': 'unselected'},
   {'index': 10 , 'color': 'orange', 'text': '?', 'selected': 'unselected'},
   {'index': 11 , 'color': 'yellow', 'text': '?', 'selected': 'unselected'},
   {'index': 12 , 'color': 'green', 'text': '?', 'selected': 'unselected'},
   {'index': 13 , 'color': 'blue', 'text': '?', 'selected': 'unselected'},
   {'index': 14 , 'color': 'purple', 'text': '?', 'selected': 'unselected'},
   {'index': 15 , 'color': 'black', 'text': '?', 'selected': 'unselected'},
   {'index': 16 , 'color': 'brown', 'text': '?', 'selected': 'unselected'}
];

// CARD template

Vue.component ( 'single-card', {
	props: [
		'cards', 'text', 'selected'
	],
	template: `
		<div class='card'>
			<h2>{{ text }}</h2>
		</div>
	`
});

// VUE APP

var vm = new Vue({
  el: "#cardApp",
  data: {
    cards: cardArray,
    selectedCards: [],
    matchedCards: []
  },
  methods: {
      shuffleCards: function(){
        this.cards.sort(function(){
        return 0.5 - Math.random()
        })
      },
      compareCards: function(){

          if(this.selectedCards[0].color === this.selectedCards[1].color){
              this.selectedCards[0].text = this.selectedCards[1].text = 'yay';
              this.selectedCards[0].selected = this.selectedCards[1].selected= 'matched';
              this.matchedCards.push(this.selectedCards[0], this.selectedCards[1]);
              this.selectedCards.pop();
              this.selectedCards.pop();
          } else if(this.selectedCards[0].color !== this.selectedCards[1].color){
              this.selectedCards[0].text = this.selectedCards[1].text = 'X';
              setTimeout(function(){
                    this.selectedCards[0].selected = this.selectedCards[1].selected = 'unselected';
                    this.selectedCards[0].text = this.selectedCards[1].text = '?';
                    this.selectedCards.pop();
                    this.selectedCards.pop();
              }.bind(this), 1000);
          }
      },
      displayCard: function(cardSelected){
        cardSelected.selected = 'selected';
        this.selectedCards.push(cardSelected);
        if( this.selectedCards.length === 2 ){
            this.compareCards();
        }
      }
  },
  created: function(){
    this.shuffleCards();
  }
});
