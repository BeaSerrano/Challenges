const getSystemInfo = require('./osModule.js')
const getNetworkInfo = require('./networkModule.js')

console.log('--- INFORMACIÓN DEL SISTEMA OPERATIVO ---');

const systemInfo = getSystemInfo();

for (const [key, value] of Object.entries(systemInfo)){
    console.log(`${key} : ${value}`);
}

console.log('--- INFORMACIÓN DE INTERFACES DE RED ---');

const networkInfo = getNetworkInfo(); // este el return de 'result'

for (const [interfaceName, addresses] of Object.entries(networkInfo)){
    console.log(`Interfaz ${interfaceName}`);
    addresses.forEach(addr => {
        console.log(`Familia: ${addr.Familia}`);
        console.log(`Direccion: ${addr.Direccion}`);
        console.log(`Interno: ${addr.Interno}`);
        console.log('---------------');
    });
}