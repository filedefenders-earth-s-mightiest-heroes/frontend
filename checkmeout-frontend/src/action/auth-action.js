import superagent from 'superagent';

//SYNC
// JEROME - this makes it so that I return an action (i.e. object)
export const set = token => ({
   type: 'TOKEN_SET',
   payload: token
});

export const remove = () => ({
   type: 'TOKEN_REMOVE'
});

//ASYNC
