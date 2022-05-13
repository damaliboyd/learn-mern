export function getUserList(){
    return[
        {
            id:1,
            isPublic: true,
            name: 'user1',
            companies: ['com1', 'com2', 'com3'],
            books:[
                {
                    name: 'book1',
                    amount: 1,
                },
                {
                    name: 'book2',
                    amount: 200,
                }
            ]
        },
        {
            id:2,
            isPublic: true,
            name: 'kk',
            companies: ['com1', 'com2', 'com3'],
            books:[
                {
                    name: 'kk1',
                    amount: 1,
                },
                {
                    name: 'kk2',
                    amount: 200,
                }
            ]
        }
    ]
}