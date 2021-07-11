function ansi(code = 0, offset = 0) {
    return `\u001B[${code + offset}m`;
}

class Logger {
    constructor(options = { showTime: true }) {
        this.options = options;
    }

    _time() {
        return `${
            this.options.showTime ? `[${new Date().toUTCString()}] ` : ""
        }`;
    }

    info(...data) {
        console.log(`${ansi(94)}[INFO] ${this._time()}${ansi()}`, ...data);
    }

    warn(...data) {
        console.warn(`${ansi(93)}[WARN] ${this._time()}${ansi()}`, ...data);
    }

    error(...data) {
        console.error(`${ansi(91)}[ERROR] ${this._time()}${ansi()}`, ...data);
    }
}

module.exports = Logger;
