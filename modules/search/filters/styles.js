import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
	root: {},
	filters: {
		background: '#F2F2F7',
		borderRadius: '0 24px 0 0',
		width: '0',
		minWidth: '0',
		marginTop: '96px',
		transition: 'min-width 200ms',
		'@media (max-width:499.95px)': {
			position: 'absolute',
			zIndex: '1',
			background: 'white',
			width: '100%',
			height: '0',
			transition: 'height 200ms',
		},
	},
	filtersVisible: {
		minWidth: '304px',
		padding: '24px',
		'@media (max-width:499.95px)': {
			height: 'calc(100vh - 96px)',
		},
	},
});

export default styles;
