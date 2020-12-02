/**
 * Test mock helper class.
 */
class ReadinessManagerMock {
    constructor() {
        this._ready = false;
    }

    get ready() {
        return this._ready;
    }

    status() {
        return {};
    }

    setReady(isReady) {
        this._ready = isReady;
    }

    register() { return undefined; }

    orchestrate() {
        this._ready = true;
    }

    onReady(callback) {
        callback();
    }

    onActionReady(callback) {
        callback();
    }
}

module.exports = new ReadinessManagerMock();
