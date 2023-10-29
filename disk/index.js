const diskinfo = require('diskinfo');

const current_disk = __dirname.substring(0, 2).toLowerCase();

// 获得所有磁盘空间
diskinfo.getDrives(function(err, aDrives) {
    if (err) {
        console.log(err);
        return;
    }
    // 遍历所有磁盘信息
    for (let i = 0; i <aDrives.length; i++) {
        // 盘符号
        const mounted = 'mounted' + aDrives[i].mounted;
        // 磁盘总空间
        const total = 'total' + aDrives[i].total;
        // 磁盘已用空间
        const used = 'used' + aDrives[i].used;
        // 磁盘可用空间
        const available = 'available' + aDrives[i].available;
        // 磁盘已用百分比
        const capacity = 'capacity' + aDrives[i].capacity;

        console.log(mounted, "\r\n", total, used, available, capacity);

    }
});