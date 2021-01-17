import { makeStyles } from '@material-ui/core/styles';

const styles = () =>
	makeStyles({
		loading: {
			display: 'flex',
			justifyContent: 'center',
		},
		root: {
			background: '#F3F2F8',
			borderRadius: '32px',
			padding: '16px',
			position: 'relative',
		},
	});

export default styles;
