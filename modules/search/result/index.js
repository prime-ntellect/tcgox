import React from 'react';
import Image from 'next/image';

import useWindowSize from 'app-utils/hooks/useWindowSize';
import useStyles from './styles';

const Result = (props) => {
	const classes = useStyles()();
	const { result } = props;
	const windowSize = useWindowSize();

	const isElectron = React.useMemo(() => {
		var userAgent = navigator.userAgent.toLowerCase();
		return !(userAgent.indexOf(' electron/') == -1);
	}, []);

	const handleClick = React.useCallback(() => {
		window.postMessage(result.url);
	}, [result]);

	const renderBody = React.useCallback(() => {
		if (windowSize.width <= 768) {
			return (
				<div className={classes.mobileRoot}>
					<div className={classes.mobileImageWrapper}>
						<Image src={result.icon} height={128} width={90} />
					</div>
					<div className={classes.mobileBody}>
						<div className={classes.mobileStore}>{result.store}</div>
						<div className={classes.mobileTitle}>{result.title}</div>
						<div className={classes.mobileDescription}>
							<span className={classes.type}>{result.type}</span> - {result.description}
						</div>
						<div className={classes.mobilePrice}>{result.price}</div>
						<div
							className={classes.mobilePrice}
							style={{
								marginLeft: '12px',
							}}
						>
							{result.bsvPrice} BSV
						</div>
					</div>
				</div>
			);
		}

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
	}, [result, classes, windowSize]);

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
