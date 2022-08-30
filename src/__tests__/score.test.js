
// The array of users from the Redux store
let users = {
    sarahedo: {
      id: 'sarahedo',
      password:'password123',
      name: 'Sarah Edo',
      avatarURL: null,
      answers: {
        "8xf0y6ziyjabvozdd253nd": 'optionOne',
        "6ni6ok3ym7mf1p33lnez": 'optionOne',
        "am8ehyc8byjqgar0jgpub9": 'optionTwo',
        "loxhs1bqm25b708cmbf3g": 'optionTwo'
      },
      questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
    },
    tylermcginnis: {
      id: 'tylermcginnis',
      password:'abc321',
      name: 'Tyler McGinnis',
      avatarURL: null,
      answers: {
        "vthrdm985a262al8qx3do": 'optionOne',
        "xj352vofupe1dqz9emx13r": 'optionTwo',
      },
      questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
    },
    mtsamis: {
      id: 'mtsamis',
      password:'xyz123',
      name: 'Mike Tsamis',
      avatarURL: null,
      answers: {
        "xj352vofupe1dqz9emx13r": 'optionOne',
        "vthrdm985a262al8qx3do": 'optionTwo',
        "6ni6ok3ym7mf1p33lnez": 'optionOne'
      },
      questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
    },
    zoshikanlu: {
      id: 'zoshikanlu',
      password:'pass246',
      name: 'Zenobia Oshikanlu',
      avatarURL: null,
      answers: {
        "xj352vofupe1dqz9emx13r": 'optionOne',
      },
      questions: [],
    }
}


  describe('Calculate scores for each user ', () => {
    it('The user named Sarah Edo has 6 points and he is the leader', () => {
        const usersAll = Object.keys(users)
          
        const personalResults = (user) => {
            const created = Object.keys(user.answers).length
            const answerd = user.questions.length
                const sum = created + answerd

                    return {
                        id: user.id,
                        name: user.name,
                        created,
                        answerd,
                            sum,
                    }
                }
                
        const result = usersAll.map( id => personalResults(users[id])).sort((a,b) => b.sum - a.sum)

        expect(result[0].sum).toBe(6);

    })
  })
