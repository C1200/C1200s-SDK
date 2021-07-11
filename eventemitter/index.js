class EventEmitter {
    constructor() {
        this._listeners = {};
    }

    emit(event, ...args) {
        if (typeof event !== "string")
            throw new Error(
                `Expected event to be a string. Instead got a ${typeof event}`
            );

        if (this._listeners[event]) {
            this._listeners[event].forEach((listener, index) => {
                listener.listener(...args);
                if (listener.once) delete this._listeners[event][index];
            });
        }
    }

    on(event, listener = (...args) => {}) {
        if (typeof event !== "string")
            throw new Error(
                `Expected event to be a string. Instead got a ${typeof event}`
            );

        if (this._listeners[event])
            this._listeners[event].push({ listener, once: false });
        else this._listeners[event] = [{ listener, once: false }];
    }

    once(event, listener = (...args) => {}) {
        if (typeof event !== "string")
            throw new Error(
                `Expected event to be a string. Instead got a ${typeof event}`
            );

        if (this._listeners[event])
            this._listeners[event].push({ listener, once: true });
        else this._listeners[event] = [{ listener, once: true }];
    }

    // Aliases

    addListener(event, listener = (...args) => {}) {
        this.on(event, listener);
    }
}

module.exports = EventEmitter;
