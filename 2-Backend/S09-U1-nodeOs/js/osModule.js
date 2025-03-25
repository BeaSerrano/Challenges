const os = require('os')

function getSystemInfo() {
    const totalMemoryMb = (os.totalmem() / (1024 * 1024)).toFixed(2);
    const freeMemoryMb = (os.freemem() / (1024 * 1024)).toFixed(2);

    return {
        Nombre : os.platform(),
        Tipo : os.type(),
        Version : os.version(),
        Arquitectura : os.arch(),
        CPUs : os.cpus().length,
        MemoriaTotal : `${totalMemoryMb} MB`,
        MemoriaLibre : `${freeMemoryMb} MB`,
    }
}

module.exports = getSystemInfo;