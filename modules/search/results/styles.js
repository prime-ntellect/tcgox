import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
	root: {
		paddingLeft: '16px',
		flexGrow: '1',
	},
	mobileRoot: {},
	mobileBody: {},
	loading: {
		marginTop: '16px',
		display: 'flex',
		justifyContent: 'center',
	},
	body: {
		height: '100%',
		background: '#F2F2F7',
		borderRadius: '24px 0 0 24px',
		padding: '24px',
		position: 'relative',
	},
});

export default styles;
