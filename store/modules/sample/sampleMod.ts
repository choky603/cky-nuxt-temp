import { Module, VuexModule, getModule, Mutation, Action } from 'vuex-module-decorators'
import Vue from 'vue'
import { store } from '@/store'
import { $axios } from '@/utils/api'

export interface DataList {
  상품명: string
  사업자명: string
}
export interface TestResponse {
  count: number
  data: DataList[]
}

@Module({ stateFactory: true, name: 'sampleModule', namespaced: true, dynamic: true, store })
class Sample extends VuexModule {
  // State
  private testData!: string
  private sampleData!: TestResponse

  // Getter
  get getTestData() {
    return this.testData
  }

  @Mutation
  public setTestData(data: string) {
    console.log(`@Mutation setTestData`)
    if (data) {
      console.log(`${data}`)
      Vue.set(this, 'testData', data)
    }
  }

  @Action({ commit: 'setTestData' })
  async getTestList() {
    console.log(`@Action getTestList`)
    return await `test-${Math.random()}`
  }

  // Getter
  get getSampleData() {
    return this.sampleData
  }

  @Mutation
  setSampleData(data: TestResponse) {
    console.log(`@Mutation setSampleData`)
    // console.log(`TestResponse:${JSON.stringify(data)}`)
    if (data) {
      Vue.set(this, 'sampleData', data)
    }
  }

  @Action({ commit: 'setSampleData' })
  async getSampleList() {
    console.log(`@Action getSampleList`)
    return await $axios.$post('/test')
  }
}

export const SampleModule = getModule(Sample)
