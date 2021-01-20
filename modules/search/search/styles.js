import { makeStyles } from '@material-ui/core/styles';

const styles = () =>
	makeStyles({
		root: {
			position: 'sticky',
			top: '0',
			zIndex: '2',
			background: 'white',
			padding: '0 16px',
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
		mobileRoot: {
			position: 'sticky',
			top: '0',
			zIndex: '2',
			padding: '16px',
			background: '#F9F9F9',
			borderBottom: '1px solid #DBDBDB',
		},
		mobileTitle: {
			fontSize: '34px',
			lineHeight: '40px',
			fontWeight: 'bold',
			marginBottom: '16px',
		},
		mobileIcon: {
			marginRight: '12px',
			height: '16px',
			width: '16px',
			marginTop: '3px',
		},
		mobileInputWrapper: {
			padding: '7px 10px',
			width: '100%',
			maxWidth: '100%',
			borderRadius: '10px',
			margin: '0 auto',
			background: '#E8E8E9',
			display: 'flex',
		},
		mobileInput: {
			fontSize: '16px',
			fontWeight: 500,
			lineHeight: '22px',
			padding: 0,
			background: 'transparent',
			border: 'none',
			flexGrow: '1',
		},
	});

export default styles;
