// CARD ARRAY

const cardArray = [
   {'index': 1 , 'text': 'red'},
   {'index': 2 , 'text': 'orange'},
   {'index': 3 , 'text': 'yellow'},
   {'index': 4 , 'text': 'green'},
   {'index': 5 , 'text': 'blue'},
   {'index': 6 , 'text': 'purple'},
   {'index': 7 , 'text': 'black'},
   {'index': 8 , 'text': 'brown'},
   {'index': 9 , 'text': 'red'},
   {'index': 10 , 'text': 'orange'},
   {'index': 11 , 'text': 'yellow'},
   {'index': 12 , 'text': 'green'},
   {'index': 13 , 'text': 'blue'},
   {'index': 14 , 'text': 'purple'},
   {'index': 15 , 'text': 'black'},
   {'index': 16 , 'text': 'brown'}
];

// CARD template

Vue.component ( 'single-card', {
	props: [
		'cards', 'text'
	],
	template: `
		<div  class='card'>
			<p>{{ text }}</p>
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
		}
});
