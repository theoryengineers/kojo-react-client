import { observable, } from 'mobx';
import { Stores } from './index';

export class AuthenticationStore {
    Parent: Stores;
    @observable isAuthenticated = false;
    @observable redirectToReferrer = false;
    @observable loginStatus = '';
    @observable fname = '';
    @observable lname = '';
    @observable displayname = '';
    @observable email = '';
    @observable password = '';
    @observable remember = false;
    
    constructor(parent: Stores) {
        this.Parent = parent;
    }
}