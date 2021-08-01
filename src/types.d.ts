type ReadyCallback = () => void;
type ReadyAction = () => unknown | Promise<unknown>;
type ActionRetry = () => Promise<unknown>;
type ActionStatus = 'not_started' | 'pending' | 'resolved' | 'rejected';

interface Beacon {
    name: string;
    action: ReadyAction;
    status: ActionStatus;
    callbacks: ReadyCallback[];
}

type BeaconsMap = { [name: string] : Beacon };

export interface ActionExecutionError extends Error {
    name: string;
    stack: string;
    attempt: number;
    failReason: string;
}

export type ActionErrorHandler = (error: ActionExecutionError, retry: ActionRetry) => void;

export type ActionsStatus = {
    [status in ActionStatus]: string[];
};

export interface ReadinessManager {
    register: (name: string, action: ReadyAction) => void;
    run: () => ReadinessManager;
    onReady:(callback: ReadyCallback) => ReadinessManager;
    onActionReady:(name: string, callback: ReadyCallback) => ReadinessManager;
    onError:(errorHandler: ActionErrorHandler) => ReadinessManager;
    status:() => ActionsStatus;
    ready: boolean;
}

declare const manager: ReadinessManager;

export default manager;
