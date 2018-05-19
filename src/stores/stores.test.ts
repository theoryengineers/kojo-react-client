import { Stores, createStore } from './index';


describe('Stores', () => {
    let store: Stores;

    beforeEach(() => {
        store = createStore();
    })
    describe('Main Store', () => {
        it('it exists', () => {
            expect(store).toBeDefined();
        });
    });
});

