// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import 'whatwg-fetch';
import { server } from '@/mocks/server';

// Adds globally to all tests
beforeAll(() => server.listen());

//afterEach(() =>  server.resetHanlders());

afterAll(() => server.close());

