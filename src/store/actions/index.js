export const addToFav = (company) => ({
    type: 'ADD_TO_FAV',
    payload: company
})

export const removeFromFav = (company) => ({
    type: 'REMOVE_FROM_FAV',
    payload: company
})


export const getJobs = (query) => {
    return async (dispatch, getState) => {
      // dispatch here is coming thanks to redux-thunk
      // fetch the books here!
      // this function can handle async operations (like a fetch) or conditionally dispatch the action,
      // delay the dispatching of an action, do complex data manipulation
      try {
        dispatch({
          type: 'SET_LOADING',
          payload: true,
        })
        let resp = await fetch('https://remotive.io/api/remote-jobs?company_name=' + query)
        console.log(getState())
        if (resp.ok) {
          let {jobs} = await resp.json()
          dispatch({
            type: 'GET_JOBS',
            payload: jobs,
          })
          dispatch({
            type: 'SET_LOADING',
            payload: false,
          })
          dispatch({
            type: 'SET_ERROR',
            payload: false,
          })
        } else {
          console.log('error')
          dispatch({
            type: 'SET_LOADING',
            payload: false,
          })
          dispatch({
            type: 'SET_ERROR',
            payload: true,
          })
        }
      } catch (error) {
        console.log(error)
        dispatch({
          type: 'SET_LOADING',
          payload: false,
        })
        dispatch({
          type: 'SET_ERROR',
          payload: true,
        })
      }
    }
  }