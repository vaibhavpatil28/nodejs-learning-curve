import util from 'util';
import { exec } from 'child_process';

/* ----------------------------------------------------------------
    Callback
-------------------------------------------------------------------*/
// exec('ls/', (err, stdout, stderr) => {
//     if (err) {
//         process.exit(1);
//     }
//     console.log('stdout', stdout);
// });

/* ------------------------------------------------------------
    Promise
----------------------------------------------------------------*/

const execProm = util.promisify(exec);

const execMain = async () => {
    try {
        const { stdout, stderr } = await execProm('ls/');
        console.log('stdout', stdout);
    } catch (error) {
        process.exit(1);
    }
}

execMain();