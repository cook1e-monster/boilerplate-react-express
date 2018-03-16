import chokidar from 'chokidar';
import path from 'path';


if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'testing') {
  const watcher = chokidar.watch(path.resolve(__dirname, '../server/'));

  watcher.on('ready', () => {
    watcher.on('all', () => {
      console.log('restarting server');
      Object.keys(require.cache).forEach((id) => {
        if (/[\/\\]src[\/\\]/.test(id)) delete require.cache[id];
      });
    });
  });
}
