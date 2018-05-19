export class Api {  
    constructor(protected rootUrl='http://localhost:5500/api/v1') {
        // this.Auth = new Auth(rootUrl);
    }

    private async request(method: string, path: string, body?: any) {
        try {          
            const response = await fetch(path, {
                headers: { 'Content-Type': 'application/json' },
                method,
                body: body ? JSON.stringify(body) : undefined
            });
            return await response.json();
        } catch (err) {
            return err;           
        }
    }

    // Authentication
    public authenticate( email: string, password: string) {     
        return this.request('post', `${this.rootUrl}/login`, { email, password });      
    }

    public register(
        fname: string, 
        lname: string, 
        displayname: string, 
        email: string, 
        password: string
    ) {
        return this.request('post', `${this.rootUrl}/register`, {
            fname,
            lname,
            displayname,
            email,
            password
        });
    }

    // User
    public getAllUsers() {
        return this.request('get', `${this.rootUrl}/users`);
    } 

    public getUserById(userid: number) {
        return this.request('get', `${this.rootUrl}/user/${userid}`);
    }

}
