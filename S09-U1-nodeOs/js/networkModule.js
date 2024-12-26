const os = require('os')

function getNetworkInfo() {
    const networkInterfaces = os.networkInterfaces();
    const result = {};

    for (const [interfaceName, addresses] of Object.entries(networkInterfaces)){
        result[interfaceName] = addresses.map(addr => ({
            Familia : addr.family,
            Direccion : addr.address,
            Interno : addr.internal,
        }))
    }

    return result
}

module.exports = getNetworkInfo;