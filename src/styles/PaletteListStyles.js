import sizes from './sizes';

export default {
	root: {
		backgroundColor: 'blue',
		height: '100vh',
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'center',
		overflow: 'scroll'
	},
	container: {
		width: '50%',
		display: 'flex',
		alignItems: 'flex-start',
		flexDirection: 'column',
		flexWarp: 'wrap',
		[sizes.down('xl')]: {
			width: '75%'
		},
		[sizes.down('md')]: {
			width: '68%'
		},
		[sizes.down('xs')]: {
			width: '65%'
		}
	},
	nav: {
		display: 'flex',
		width: '100%',
		justifyContent: 'space-between',
		color: 'white',
		alignItems: 'center',
		'& a': {
			color: 'white'
		}
	},
	palettes: {
		boxSizing: 'border-box',
		width: '100%',
		display: 'grid',
		gridTemplateColumns: 'repeat(3, 30%)',
		gridGap: '2rem',
		[sizes.down('md')]: {
			gridTemplateColumns: 'repeat(2, 50%)'
		},
		[sizes.down('xs')]: {
			gridTemplateColumns: 'repeat(1, 100%)',
			gridGap: '1rem'
		}
	}
};
