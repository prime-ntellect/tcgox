import { makeStyles } from '@material-ui/core/styles';

const styles = () =>
	makeStyles({
		root: {
			position: 'sticky',
			top: '0',
			zIndex: '2',
			background: 'white',
		},
		background: {
			height: '24px',
			background: 'white',
		},
		icon: {
			marginRight: '24px',
			height: '18px',
			width: '18px',
			marginTop: '5px',
		},
		inputWrapper: {
			padding: '10px 24px',
			width: '100%',
			maxWidth: '100%',
			borderRadius: '36px',
			margin: '0 auto',
			background: '#F2F2F7',
			display: 'flex',
		},
		input: {
			fontSize: '18px',
			fontWeight: 500,
			lineHeight: '28px',
			padding: 0,
			background: 'transparent',
			border: 'none',
			flexGrow: '1',
		},
		bumper: {
			height: '24px',
			background: 'white',
		},
	});

export default styles;
