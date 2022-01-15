const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			scale: {
				'101': '1.01',
			},
			typography: {
				DEFAULT: {
					css: {
						maxWidth: null,
					},
				},
			},
		},
	},

	plugins: [
		require('@tailwindcss/typography'),
		require('daisyui'),
	],

	variants: {
		textColor: ['responsive', 'hover', 'focus', 'group-hover'],
		borderColor: ['group-hover'],
	}
};

module.exports = config;
