import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
	root: {
		margin: '0 auto',
		width: '100%',
		maxWidth: '100%',
		height: '100vh',
		padding: '0',
		display: 'flex',
	},
	body: {
		flexGrow: '1',
		display: 'flex',
		flexDirection: 'column',
		overflowY: 'auto',
	},
});

export default styles;
