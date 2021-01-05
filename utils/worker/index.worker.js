import * as Comlink from 'comlink';

const AppWorker = {
	pi: () => Math.PI,
	fetch: (...args) => {
		console.log({ args });
		return fetch(...args);
	},
};

Comlink.expose(AppWorker);
