import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
	root: {
		display: 'flex',
		marginTop: '20px',
		alignItems: 'center',
	},
	label: {
		fontSize: '16px',
		lineHeight: '20px',
		margin: '0',
	},
	checkbox: {
		height: '20px',
		width: '20px',
		marginRight: '16px',
		cursor: 'pointer',
	},
});

export default styles;
