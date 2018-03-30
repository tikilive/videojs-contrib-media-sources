import webwackify from 'webwackify';
import transmuxWorker from './transmuxer-worker';

const resolveTransmuxWorker = () => {
  let result;

  try {
    result = require.resolve('./transmuxer-worker');
  } catch (e) {
    // no result
  }

  return result;
};

var workerCode = webwackify(transmuxWorker, resolveTransmuxWorker());

console.log(workerCode);
