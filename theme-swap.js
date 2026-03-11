import fs from 'fs';
import path from 'path';

const walkSync = (dir, filelist = []) => {
    fs.readdirSync(dir).forEach(file => {
        const dirFile = path.join(dir, file);
        try {
            if (fs.statSync(dirFile).isDirectory()) {
                filelist = walkSync(dirFile, filelist);
            } else {
                filelist.push(dirFile);
            }
        } catch (err) {
            if (err.code === 'ENOTDIR' || err.code === 'EBADF') filelist.push(dirFile);
        }
    });
    return filelist;
};

const files = walkSync('./src').filter(f => f.endsWith('.jsx') || f.endsWith('.css'));

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/obsidian/g, 'void');
    content = content.replace(/champagne/g, 'plasma');
    content = content.replace(/ivory/g, 'ghost');
    content = content.replace(/slate/g, 'graphite');

    // Update image moods for futuristic vibe
    if (file.includes('Hero.jsx')) {
        content = content.replace('photo-1554118811-1e0d58224f24', 'photo-1614729939124-03290b55c9ce'); // Bioluminescent / dark tech
        content = content.replace('Dark luxurious interior', 'Neon technical structure');
    }
    if (file.includes('Philosophy.jsx')) {
        content = content.replace('photo-1542406775-ade59c4fa11f', 'photo-1557672172-298e090bd0f1'); // Abstract dark liquid / neon
        content = content.replace('Dark marble texture', 'Dark dynamic geometry');
    }

    fs.writeFileSync(file, content);
});

console.log('Theme content updated.');
