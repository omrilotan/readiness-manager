import { ReadinessManager } from '../src/types';

export interface ReadinessManagerMock extends ReadinessManager{
    setReady: (isReady: boolean) => void;
}

declare const manager: ReadinessManagerMock;

export default manager;
