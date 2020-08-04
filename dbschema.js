let db = {
    users: [
        {
          userId: 'dh23ggj5h32g543j5gf43',
          email: 'user@email.com',
          handle: 'user',
          createdAt: '2019-03-15T10:59:52.798Z',
          imageUrl: 'image/dsfsdkfghskdfgs/dgfdhfgdh',
          bio: 'Hello, my name is user, nice to meet you',
          website: 'https://user.com',
          location: 'Lonodn, UK'
        }
      ],
      scream: [
    {
		userHandle : 'user',
		body: 'This is a sample scream',
		createdAt: '2019-03-15T10:59:52.798Z',
		likeCount: 5,
		commentCount: 3,
    }
    ], comments: [
      {
        userHandle: 'user',
        screamId: 'kdjsfgdksuufhgkdsufky',
        body: 'nice one mate!',
        createdAt: '2019-03-15T10:59:52.798Z'
      }
    ],
    notifications: [
      {
        recipient: 'user',
        sender: 'john',
        read: 'true | false',
        screamId: 'kdjsfgdksuufhgkdsufky',
        type: 'like | comment',
        createdAt: '2019-03-15T10:59:52.798Z'
      }
    ]
}
const userDetails = {
  // Redux data
  credentials: {
    userId: 'N43KJ5H43KJHREW4J5H3JWMERHB',
    email: 'user@email.com',
    handle: 'user',
    createdAt: '2019-03-15T10:59:52.798Z',
    imageUrl: 'image/dsfsdkfghskdfgs/dgfdhfgdh',
    bio: 'Hello, my name is user, nice to meet you',
    website: 'https://user.com',
    location: 'Lonodn, UK'
  },
  likes: [
    {
      userHandle: 'user',
      screamId: ' '
    },
    {
      userHandle: 'user',
      screamId: '3IOnFoQexRcofs5OhBXO'
    }
  ]
};
