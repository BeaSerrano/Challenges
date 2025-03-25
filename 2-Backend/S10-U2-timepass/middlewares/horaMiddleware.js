const horaMiddleware = (req, res, next) => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
        //minutes.length < 2 ? minutes[0] = '0' : minutes
        //minutes < 10 ? '0' + minutes : minutes

    req.horaActual = hours;
    req.horaTotal = `${hours}:${minutes}`
    next();
}

module.exports = horaMiddleware;