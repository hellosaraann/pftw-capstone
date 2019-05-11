// SHUFFLE FUNCTION

// let shuffleCards = function(array) {
//   array.sort(function() {return 0.5 - Math.random()})
// };

// CARD ARRAY

const cardArray = [
   {'index': 1 , 'color': 'red', 'text': '?'},
   {'index': 2 , 'color': 'orange', 'text': '?'},
   {'index': 3 , 'color': 'yellow', 'text': '?'},
   {'index': 4 , 'color': 'green', 'text': '?'},
   {'index': 5 , 'color': 'blue', 'text': '?'},
   {'index': 6 , 'color': 'purple', 'text': '?'},
   {'index': 7 , 'color': 'black', 'text': '?'},
   {'index': 8 , 'color': 'brown', 'text': '?'},
   {'index': 9 , 'color': 'red', 'text': '?'},
   {'index': 10 , 'color': 'orange', 'text': '?'},
   {'index': 11 , 'color': 'yellow', 'text': '?'},
   {'index': 12 , 'color': 'green', 'text': '?'},
   {'index': 13 , 'color': 'blue', 'text': '?'},
   {'index': 14 , 'color': 'purple', 'text': '?'},
   {'index': 15 , 'color': 'black', 'text': '?'},
   {'index': 16 , 'color': 'brown', 'text': '?'}
];

// CARD template

Vue.component ( 'single-card', {
	props: [
		'cards', 'text'
	],
	template: `
		<div class='card '>
			<h2>{{ text }}</h2>
		</div>
	`
});

// VUE APP

var vm = new Vue({
  el: "#cardApp",
  data: {
    cards: cardArray
  },
  methods: {
      shuffleCards: function() {
        this.cards.sort(function() {
        return 0.5 - Math.random()
        })
      }
		},
  created: function(){
    this.shuffleCards();
    console.log('yay!');
  }
});
