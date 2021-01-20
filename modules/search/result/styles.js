import { makeStyles } from '@material-ui/core/styles';

const styles = () =>
	makeStyles({
		root: {
			background: 'white',
			borderRadius: '18px',
			padding: '24px',
			display: 'flex',
			marginBottom: '12px',
			width: '100%',
		},
		body: {
			width: 'calc(100% - 102px)',
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
		type: {
			color: '#007AFF',
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
			width: '90px',
			marginLeft: '12px',
		},
		mobileRoot: {
			background: 'white',
			padding: '16px',
			display: 'flex',
			width: '100%',
			borderBottom: '1px solid #DBDBDB',
		},
		mobileImageWrapper: {
			width: '90px',
			marginRight: '12px',
		},
		mobileBody: {
			width: 'calc(100% - 102px)',
		},
		mobileStore: {
			fontSize: '12px',
			lineHeight: '16px',
			color: '#8A8A8E',
			fontWeight: '400',
		},
		mobileTitle: {
			fontSize: '16px',
			lineHeight: '20px',
			color: 'black',
			fontWeight: 'bold',
			marginTop: '4px',
			width: '100%',
		},
		icon: {
			width: '90px',
			minWidth: '90px',
			maxWidth: '90px',
		},
		mobileDescription: {
			fontSize: '14px',
			lineHeight: '18px',
			color: '#8B8B8F',
			whiteSpace: 'nowrap',
			textOverflow: 'ellipsis',
			overflow: 'hidden',
			marginTop: '4px',
		},
		mobilePrice: {
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
	});

export default styles;
