import * as Comlink from 'comlink';
import AppWorker from './index.worker';

let worker;

if (process.browser) {
	worker = Comlink.wrap(AppWorker());
}

export default worker;
