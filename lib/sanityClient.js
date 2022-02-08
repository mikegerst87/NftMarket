import sanityClient from '@sanity/client';

export const client = sanityClient({
    projectId: 'wjbon02t',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'skD9RGvv75h0dEfOkwGzofWR3pZI6kosiozYEz8YLfwLb5lqJog3V8on6Sszz0PIvzE1mnunN7e2fWFmPuAavk4atnAbSiEAYDYq2dzQwz2RG35rX6eftmDRyMYavL1IcF2jv7qpDmPwohwxdOXCgI0hgQ1UErMvmdS5TkpMQ8hN290wH1GV',
    useCdn: false,
})