import { configure } from 'mobx';
import { MainStore } from './main.store';

// export { UserStore } from './UserStore';
// export { AuthenticationStore } from './AuthenticationStore';
// export { ProjectsStore } from './ProjectStore';
export { MainStore as Stores };

configure({ enforceActions: true });

export function createStore() {
    return new MainStore();
}
