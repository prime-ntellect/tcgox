import { makeStyles } from '@material-ui/core/styles';

const styles = () =>
	makeStyles({
		root: {
			paddingLeft: '16px',
		},
		mobileRoot: {},
		mobileBody: {},
		loading: {
			display: 'flex',
			justifyContent: 'center',
		},
		body: {
			background: '#F3F2F8',
			borderRadius: '24px 0 0 24px',
			padding: '24px',
			position: 'relative',
		},
	});

export default styles;
