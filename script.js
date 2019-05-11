// SHUFFLE FUNCTION

// let shuffleCards = function(array) {
//   array.sort(function() {return 0.5 - Math.random()})
// };

// CARD ARRAY

var cardArray = [
   {'index': 1 , 'color': 'red', 'text': '?', 'selected': false},
   {'index': 2 , 'color': 'orange', 'text': '?', 'selected': false},
   {'index': 3 , 'color': 'yellow', 'text': '?', 'selected': false},
   {'index': 4 , 'color': 'green', 'text': '?', 'selected': false},
   {'index': 5 , 'color': 'blue', 'text': '?', 'selected': false},
   {'index': 6 , 'color': 'purple', 'text': '?', 'selected': false},
   {'index': 7 , 'color': 'black', 'text': '?', 'selected': false},
   {'index': 8 , 'color': 'brown', 'text': '?', 'selected': false},
   {'index': 9 , 'color': 'red', 'text': '?', 'selected': false},
   {'index': 10 , 'color': 'orange', 'text': '?', 'selected': false},
   {'index': 11 , 'color': 'yellow', 'text': '?', 'selected': false},
   {'index': 12 , 'color': 'green', 'text': '?', 'selected': false},
   {'index': 13 , 'color': 'blue', 'text': '?', 'selected': false},
   {'index': 14 , 'color': 'purple', 'text': '?', 'selected': false},
   {'index': 15 , 'color': 'black', 'text': '?', 'selected': false},
   {'index': 16 , 'color': 'brown', 'text': '?', 'selected': false}
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
    selectedCards: []
    // selectedCard: function(){
    //   for( i = 0 ; i < this.cards.length ; i++ ){
    //     return card[i].index;
    //   }
    // }
  },
  methods: {
      shuffleCards: function(){
        this.cards.sort(function(){
        return 0.5 - Math.random()
        })
      },

      displayCard: function(cardSelected){
        cardSelected.selected = true;
      }
		},
  created: function(){
    this.shuffleCards();
  }
});
