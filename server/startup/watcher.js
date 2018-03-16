import chokidar from 'chokidar';
import path from 'path';


if (!process.env.NODE_ENV === 'production') {
  const watcher = chokidar.watch(path.resolve(__dirname, '../'));

  watcher.on('ready', () => {
    watcher.on('all', () => {
      console.log('restarting server');
      Object.keys(require.cache).forEach((id) => {
        if (/[\/\\]src[\/\\]/.test(id)) delete require.cache[id];
      });
    });
  });
}
