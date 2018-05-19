import { observable } from 'mobx';

export class UserModel {
    @observable id: number;
    @observable displayname: string;
    @observable email: string;

    constructor(id: number, displayname: string, email: string) {
        this.id = id;
        this.displayname = displayname;
        this.email = email;
    }
}
