// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import nock from 'nock'
global.fetch = require('node-fetch');

const mockApis = [
    {
        domain: 'https://jsonplaceholder.typicode.com',
        path: '/users',
        status: 200,
        data: [
            {
                name: 'tara'
            },
            {
                name: 'sara'
            }
        ]
    }
]

mockApis.forEach(api => nock(api.domain, { allowUnmocked: true })
    .get(api.path)
    .reply(api.status, api.data))
