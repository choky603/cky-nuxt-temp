import Vue from 'vue'
import {
  Module,
  VuexModule,
  getModule,
  Mutation,
  Action,
} from 'vuex-module-decorators'
import { store } from '@/store'
import { $axios } from '~/utils/api'

interface HttpHeader {
  guid: string
  time: string
}

interface Data {
  상품명: string
  사업자명: string
}

export interface DataResponse extends HttpHeader {
  count: number
  data: Data
}

@Module({
  dynamic: true,
  name: 'samplePGYModule1',
  stateFactory: true,
  namespaced: true,
  store,
})
class SamplePGY extends VuexModule {
  dataResponse!: DataResponse

  get getTestPGYData() {
    return this.dataResponse
  }

  @Action({ commit: 'setPGYTest', rawError: true })
  async getPGYTest() {
    console.log("setPGYTest !!")
    return await $axios.$post('/test')
  }

  @Mutation
  public setPGYTest(data: DataResponse) {
    if (data) {
      Vue.set(this, 'dataResponse', data)
    }
  }
}

export const SamplePGYModule = getModule(SamplePGY)
