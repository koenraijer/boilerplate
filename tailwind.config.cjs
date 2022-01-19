const defaultTheme = require('tailwindcss/defaultTheme')

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				header: [`'Raleway'`, ...defaultTheme.fontFamily.sans,]
			},
			scale: {
				'101': '1.005',
			},
			transitionTimingFunction: {
				'ease-bounce': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
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
	},

	// daisyui config
	daisyui: {
		themes: [
		  {'dark': {
			"primary": "#17ffc4", // 
			"primary-focus": "#00AF83", // 
			"primary-content": "#000000", //
			"secondary": "#14D6FA", //  
			"secondary-focus": "#46A1FB", // 
			"secondary-content": "#ffffff", // 
			"accent": "#37cdbe", 
			"accent-focus": "#2aa79b", 
			"accent-content": "#000000", //
			"neutral": "#ACB1BF", // Serves as lighter text
			"neutral-focus": "#16181d",
			"neutral-content": "#000000", // 
			"base-100": "#41435c", //
			"base-200": "#393d57", //
			"base-300": "#2a2c45", // 
			"base-content": "#ebecf0",
			"info": "#66c6ff",
			"success": "#87d039",
			"warning": "#e2d562",
			"error": "#ff6f6f",
			"--rounded-box": "1rem",
			"--rounded-btn": "0.4rem",
			"--rounded-badge": "2rem",
			"--animation-btn": "0.25s",
			"--animation-input": ".2s",
			"--btn-text-case": "capitalize",
			"--btn-focus-scale": "0.95",
			"--navbar-padding": ".5rem",
			"--border-btn": "1px",
			"--tab-border": "1px",
			"--tab-radius": "0.5rem",
		  }},
		  {'darkOld': {
			"primary": "#793ef9",
			"primary-focus": "#570df8",
			"primary-content": "#ffffff",
			"secondary": "#f000b8",
			"secondary-focus": "#bd0091",
			"secondary-content": "#ffffff",
			"accent": "#37cdbe", // Hero gradient
			"accent-focus": "#2aa79b",
			"accent-content": "#ffffff", // Hero gradient
			"neutral": "#2a2e37", 
			"neutral-focus": "#16181d",
			"neutral-content": "#ffffff",
			"base-100": "#3d4451",
			"base-200": "#2a2e37",
			"base-300": "#16181d",
			"base-content": "#ebecf0",
			"info": "#66c6ff",
			"success": "#87d039",
			"warning": "#e2d562",
			"error": "#ff6f6f"
		  }},
		  {'light': {
			"primary": "#ff006e", // 
			"primary-focus": "#DB005F",
			"primary-content": "#000000", // 
			"secondary-focus": "#0466c8", // 
			"secondary": "#1387FA", // 
			"secondary-content": "#000000", // 
			"accent-focus": "#00ECC9", // 
			"accent": "#6fffe9", // 
			"accent-content": "#000000", // 
			"neutral": "#999987", // Serves as darker text
			"neutral-focus": "#E4E4DF", // 
			"neutral-content": "#000000", // 
			"base-100": "#f3f3f1", //
			"base-200": "#e8e8e3", //
			"base-300": "#D9D9D1", //
			"base-content": "#292929", // 
			"info": "#53c0f3",
			"success": "#71ead2",
			"warning": "#f3cc30",
			"error": "#e24056",
			"--rounded-box": "1rem",
			"--rounded-btn": "0.4rem",
			"--rounded-badge": "2rem",
			"--animation-btn": "0.25s",
			"--animation-input": ".2s",
			"--btn-text-case": "capitalize",
			"--btn-focus-scale": "0.95",
			"--navbar-padding": ".5rem",
			"--border-btn": "1px",
			"--tab-border": "1px",
			"--tab-radius": "0.5rem",
		  }},
		  {'lightOld': {
			"primary": "#e779c1",
			"primary-focus": "#e04dac",
			"primary-content": "#201047",
			"secondary-focus": "#88d7f7", // Hero gradient
			"secondary": "#58c7f3", // Hero gradient end
			"secondary-content": "#201047",
			"accent-focus": "#f6d860",
			"accent": "#f3cc30",
			"accent-content": "#201047",
			"neutral": "#20134e",
			"neutral-focus": "#140a2e",
			"neutral-content": "#f9f7fd",
			"base-100": "#2d1b69",
			"base-200": "#20134e",
			"base-300": "#140a2e",
			"base-content": "#f9f7fd",
			"info": "#53c0f3",
			"success": "#71ead2",
			"warning": "#f3cc30",
			"error": "#e24056",
			"--border-color": "var(--b3)",
			"--rounded-box": "1rem",
			"--rounded-btn": "0.5rem",
			"--rounded-badge": "1.9rem",
			"--animation-btn": "0.25s",
			"--animation-input": ".2s",
			"--btn-text-case": "uppercase",
			"--btn-focus-scale": "0.95",
			"--navbar-padding": ".5rem",
			"--border-btn": "1px",
			"--tab-border": "1px",
			"--tab-radius": "0.5rem",
		  }},
		]
	}
};

module.exports = config;
