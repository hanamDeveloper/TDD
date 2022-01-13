const UserService = require('../user_service');
const UserClient = require('../user_client');
jest.mock('../user_client')

describe('userService Test' ,() => {
    const login = jest.fn(async () => 'success');

    UserClient.mockImplementation(() => {
        return {
            login
        }
    })

    let userService;

    beforeEach(() => {
        userService = new UserService(new UserClient())
        login.mockClear();
        UserClient.mockClear();
    })
    
    it('if user state is login then no more login', async() => {
        await userService.login('zmf1119', 'abc')
        await userService.login('zmf1119', 'abc')
        await userService.login('zmf1119', 'abc')

        expect(login.mock.calls.length).toBe(1)
    })
})