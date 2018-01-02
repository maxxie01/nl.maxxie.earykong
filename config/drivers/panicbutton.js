'use strict';

module.exports = {
	id: 'panicbutton',
	name: { en: 'Earykong panicbutton' },
	class: 'button',
	capabilities: [ 'button' ],
	rf: {
		signal: 'earykong'
	},
	pair: [
		{
			id: 'imitate',
			rf_template: 'imitate',
		},
		{
			id: 'test_switch',
			rf_template: 'test_switch',
		},
		{
			id: 'done',
			rf_template: 'done',
		}
	],
};