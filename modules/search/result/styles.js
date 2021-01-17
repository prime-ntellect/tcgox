import { makeStyles } from '@material-ui/core/styles';

const styles = () =>
	makeStyles({
		root: {
			background: 'white',
			borderRadius: '16px',
			padding: '24px',
			display: 'flex',
			marginBottom: '12px',
			width: '100%',
		},
		body: {
			width: 'calc(100% - 57px)',
		},
		store: {
			fontSize: '20px',
			lineHeight: '24px',
			color: '#8A8A8E',
			fontWeight: '400',
		},
		title: {
			fontSize: '22px',
			lineHeight: '28px',
			color: 'black',
			fontWeight: 'bold',
			marginTop: '4px',
			width: '100%',
		},
		description: {
			fontSize: '17px',
			lineHeight: '21px',
			color: '#3C3C43',
			marginTop: '8px',
		},
		price: {
			marginTop: '12px',
			background: '#34C759',
			display: 'inline-block',
			height: '25px',
			lineHeight: '25px',
			padding: '0 16px',
			borderRadius: '12px',
			color: 'white',
			fontSize: '14px',
			fontWeight: 'bold',
		},
		grow: {
			flexGrow: '1',
		},
		imageWrapper: {
			width: '86px',
			marginLeft: '12px',
		},
	});

export default styles;
