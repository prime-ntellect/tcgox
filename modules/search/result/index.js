import React from 'react';
import Image from 'next/image';

import useStyles from './styles';

const Result = (props) => {
	const classes = useStyles()();
	const { result } = props;

	const isElectron = React.useMemo(() => {
		var userAgent = navigator.userAgent.toLowerCase();
		return !(userAgent.indexOf(' electron/') == -1);
	}, []);

	const handleClick = React.useCallback(() => {
		window.postMessage(result.url);
	}, [result]);

	const renderBody = React.useCallback(() => {
		return (
			<div className={classes.root}>
				<div className={classes.body}>
					<div className={classes.store}>{result.store}</div>
					<div className={classes.title}>{result.title}</div>
					<div className={classes.description}>
						<span className={classes.type}>{result.type}</span> - {result.description}
					</div>
					<div className={classes.price}>{result.price}</div>
					<div
						className={classes.price}
						style={{
							marginLeft: '12px',
						}}
					>
						{result.bsvPrice} BSV
					</div>
				</div>
				<div className={classes.grow} />
				<div className={classes.imageWrapper}>
					<Image src={result.icon} height={122} width={86} />
				</div>
			</div>
		);
	}, [result, classes]);

	if (isElectron) {
		return (
			<div style={{ cursor: 'pointer' }} onClick={handleClick}>
				{renderBody()}
			</div>
		);
	}

	return (
		<a href={result.url} target="_blank">
			{renderBody()}
		</a>
	);
};

export default Result;
