import type { Config } from 'tailwindcss'

const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

const config: Config = {
	content: [
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		fontFamily: {
			montserrat: ['var(--font-montserrat), sans-serif'],
		},
		colors: {
			white: colors.white,
			black: colors.black,
			transparent: colors.transparent,
			gray: {
				base: '#282828',
				900: '#29292b',
				600: '#404040',
				500: '#B7B7B7',
				400: '#d9d9d9',
				300: '#EBEBEB',
				200: '#F4F4F4',
				100: '#F5F7F9',
			},
			orange: {
				base: '#FCA95D',
				400: '#ffac33',
				300: '#f5b60a',
				100: '#ffe6b0',
			},
			red: {
				400: '#ff0c00',
				100: '#FF8080',
				error: '#F31559',
			},
			blue: {
				base: '#6691FF',
			},
			green: {
				base: '#19BB4F',
				success: '#00c217',
				200: '#1fd75c',
				100: '#63e0ad',
			},
		},
		fontSize: {
			small: '10px',
			medium: '11px',
			'medium-lg': '12px',
			'medium-xl': '14px',
			lg: '15px',
			'2lg': '16px',
			'3lg': '20px',
			'4lg': '24px',
			'5lg': '23px',
			'6lg': '24px',
			title: '32px',
		},
		extend: {
			lineHeight: {
				sm: '1.1',
				md: '1.2',
				lg: '1.3',
				'2lg': '1.4',
				'3lg': '1.5',
				'4lg': '1.6',
				'5lg': '1.7',
				xl: '1.8',
				'2xl': '1.9',
				'3xl': '2',
			},
			borderRadius: {
				sm: '5px',
				md: '8px',
				lg: '10px',
				'2lg': '15px',
				xl: '20px',
				'2xl': '25px',
				'3xl': '30px',
			},
			transitionTimingFunction: {
				DEFAULT: 'ease-in-out',
			},
			transitionDuration: {
				DEFAULT: '300ms',
			},
			zIndex: {
				1: '1',
				2: '2',
				3: '3',
				4: '4',
				5: '5',
			},
			keyframes: {
				fade: {
					from: { opacity: '0' },
					to: { opacity: '1' },
				},
				opacity: {
					'0%': {
						opacity: '0',
						visibility: 'hidden',
					},
					'100%': {
						opacity: '1',
						visibility: 'visible',
					},
				},
				scaleIn: {
					'0%': {
						opacity: '0',
						transform: 'scale(0.9)',
					},
					'50%': {
						opacity: '0.3',
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)',
					},
				},
				slideLeft: {
					'0%': {
						transform: 'translateX(-100%)',
					},
					'100%': {
						transform: 'translateX(0)',
					},
				},
				windowTransform: {
					'0%': {
						transform: 'translateY(-50px)',
						opacity: '0',
					},
					'100%': {
						transform: 'translateY(0px)',
						opacity: '1',
					},
				},
			},
			animation: {
				fade: 'fade 500ms ease-in-out forwards',
				opacity: 'opacity 300ms ease-in-out forwards',
				scaleIn: 'scaleIn 350ms ease-in-out forwards',
				slideLeft: 'slideLeft 300ms ease-in-out forwards',
				windowTransform: 'windowTransform 700ms ease-in-out forwards',
			},
		},
	},
	plugins: [
		plugin(
			({
				addComponents,
				theme,
				addUtilities,
			}: {
				addUtilities: Function
				addComponents: Function
				theme: Function
			}) => {
				addComponents({
					'.btn-green': {
						transitionProperty: 'background-color',
						transitionTimingFunction: 'ease-in-out',
						transitionDuration: '200ms',
						backgroundColor: theme('colors.green.base'),
						color: theme('colors.white'),
						'&:hover': {
							backgroundColor: theme('colors.green.200'),
						},
					},

					'.btn-black': {
						transitionProperty: 'background-color',
						transitionTimingFunction: 'ease-in-out',
						transitionDuration: '200ms',
						backgroundColor: theme('colors.gray.base'),
						color: theme('colors.white'),
						'&:hover': {
							backgroundColor: theme('colors.gray.600'),
						},
					},

					'.btn-orange': {
						transitionProperty: 'background-color',
						transitionTimingFunction: 'ease-in-out',
						transitionDuration: '200ms',
						backgroundColor: theme('colors.orange.400'),
						color: theme('colors.white'),
						'&:hover': {
							backgroundColor: theme('colors.orange.300'),
						},
					},

					'.btn-red': {
						transitionProperty: 'background-color',
						transitionTimingFunction: 'ease-in-out',
						transitionDuration: '200ms',
						backgroundColor: theme('colors.red.error'),
						color: theme('colors.white'),
						'&:hover': {
							backgroundColor: theme('colors.red.400'),
						},
					},

					'.ellipse-text': {
						display: 'block',
						overflow: 'hidden',
						textOverflow: 'ellipsis',
						whiteSpace: 'nowrap',
					},

					'.green-border': {
						border: `1px solid ${theme('colors.green.base')}`,
					},

					'.shadow-effect': {
						boxShadow: '1px 1px 20px rgba(117, 117, 117, .1)',
					},

					'.green-hover': {
						transitionProperty: 'color',
						transitionTimingFunction: 'ease-in-out',
						transitionDuration: '200ms',
						'&:hover': {
							color: theme('colors.green.base'),
						},
					},

					'.black-shadow': {
						boxShadow: '1px 1px 20px rgba(117, 117, 117, 0.1)',
					},

					'.up-hover': {
						transition: 'transform 200ms ease-in-out',

						'&:hover': {
							transform: `translateY(-2px)`,
						},
					},

					'.green-underline-hover': {
						position: 'relative',
						'&::after': {
							content: 'close-quote',
							position: 'absolute',
							left: '0',
							bottom: '-5px',
							height: '1px',
							width: '0px',
							backgroundColor: theme('colors.green.base'),
							transitionProperty: 'width',
							transitionTimingFunction: 'ease-in-out',
							transitionDuration: '200ms',
						},
						'&:hover::after': {
							width: '100%',
						},
					},

					'.green-underline-active': {
						position: 'relative',
						'&::after': {
							content: 'close-quote',
							position: 'absolute',
							left: '0',
							bottom: '-5px',
							height: '1px',
							width: '100%',
							backgroundColor: theme('colors.green.base'),
						},
					},

					'.up-green-hover': {
						transform: `translateY(0)`,
						transition: 'transform 200ms ease-in-out, color 200ms ease-in-out',

						'&:hover': {
							color: theme('colors.green.base'),
							transform: `translateY(-2px)`,
						},
					},

					'.brightness-hover': {
						transition: 'filter 200ms ease-in-out',

						'&:hover': {
							filter: 'brightness(90%)',
						},
					},

					'.scrollbar-x': {
						overflowX: 'auto',
						overflowY: 'hidden',
						scrollbarColor: `${theme('colors.green.base')} ${theme(
							'colors.gray.400'
						)}`,
						scrollbarWidth: 'thin',

						'&::-webkit-scrollbar': {
							'-webkit-appearance': 'none',
							height: '5px',
							borderRadius: '50%',
						},

						'&::-webkit-scrollbar-track': {
							height: '100%',
							backgroundColor: theme('colors.gray.400'),
							borderRadius: '50%',
						},

						'&::-webkit-scrollbar-thumb': {
							height: '100%',
							backgroundColor: theme('colors.green.base'),
							borderRadius: '50%',
						},
					},

					'.scrollbar-y': {
						overflowX: 'hidden',
						overflowY: 'auto',
						scrollbarColor: `${theme('colors.green.base')} ${theme(
							'colors.gray.400'
						)}`,
						scrollbarWidth: 'thin',

						'&::-webkit-scrollbar': {
							'-webkit-appearance': 'none',
							width: '5px',
							borderRadius: '50%',
						},

						'&::-webkit-scrollbar-track': {
							width: '100%',
							backgroundColor: theme('colors.gray.400'),
							borderRadius: '50%',
						},

						'&::-webkit-scrollbar-thumb': {
							width: '100%',
							backgroundColor: theme('colors.green.base'),
							borderRadius: '50%',
						},
					},
				})

				addUtilities({
					'.outline-border-none': {
						outline: 'none',
						border: 'none',
					},

					'.flex-center-between': {
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
					},
					

					'.image-like-bg-contain': {
						objectPosition: 'center',
						objectFit: 'contain',
						pointerEvents: 'none',
					},

					'.image-like-bg-cover': {
						position: 'absolute',
						left: 0,
						right: 0,
						top: 0,
						bottom: 0,
						width: '100%',
						height: '100%',
						objectPosition: 'center',
						objectFit: 'cover',
						pointerEvents: 'none',
					},
				})
			}
		),
	],
}
export default config
