import { Api } from './OurApi';
import 'whatwg-fetch';

// simon.cowell@gmail.com
// bacon
describe('OurApi', () => {   
    const OurApi = new Api();
    // const User = {
    //     id: 0
    // };

    it('exists', () => {
        expect(OurApi).toBeDefined();
    });

    it('can create a user', async () => {
        expect.assertions(1);

        const response = await OurApi.register('Jim', 'Bob', 'Junior', 'Junior@junior.com', 'somepass');
        expect(response[0]).toEqual(expect.objectContaining({
            "fname": expect.any(String),
            "lname": expect.any(String),
            "displayname": expect.any(String),
            "email": expect.any(String),
            "joined": expect.any(String),
            "user_id": expect.any(Number),
        }));

    });

    it('can authenticate a user', async () => {
        let response;
        try {
            expect.assertions(2);            
            response = await OurApi.authenticate('simon.cowell@gmail.com', 'bacon');

            expect(response).toBeDefined();

            expect(response[0]).toEqual(expect.objectContaining({
                "user_id": expect.any(Number),
                "fname": expect.any(String),
                "lname": expect.any(String),
                "displayname": expect.any(String),
                "joined": expect.any(String)
            }));
       
        } catch (e) {
            console.log(e);
        }
    });

    it('can delete a user', async() => {

    })
    

});
