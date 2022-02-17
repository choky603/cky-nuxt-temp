import Vuex, { Store } from 'vuex'

interface RootState {}
export const store = new Vuex.Store<RootState>({})

export const createStore = (): Store<RootState> => {
  return store
}

export const actions = {
  nuxtServerInit: () => {}
}
