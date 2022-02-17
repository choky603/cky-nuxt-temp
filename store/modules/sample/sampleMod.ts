import { Module, VuexModule, getModule, Mutation, Action } from 'vuex-module-decorators'
import Vue from 'vue'
import { store } from '@/store'
import { $axios } from '@/utils/api'

export interface TestRequest {
  userName: string
}
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
    if (data) {
      Vue.set(this, 'testData', data)
    }
  }

  @Action({ commit: 'setTestData' })
  async getTestList() {
    console.log(`@Action getTestList`)
    return await `test-${Math.random()}`
  }

  get getSampleData() {
    return this.sampleData
  }

  @Mutation
  setSampleData(data: TestResponse) {
    if (data) {
      // console.log(`data:${JSON.stringify(data)}`)
      Vue.set(this, 'sampleData', data)
    }
  }

  @Action({ commit: 'setSampleData' })
  async getSampleList() {
    console.log(`@Action getSampleList`)
    return await $axios.$post('/test')
  }

  @Action({ commit: 'setSampleData' })
  async getParamSampleList() {
    console.log(`@Action getParamSampleList`)
    const paramData: TestRequest = {
      // userName: encodeURIComponent('choky1234!@#$[아이지오]')
      userName: 'choky1234!@#$[아이지오]'
    }
    // const config: AxiosRequestConfig = {}
    // const config = {
    //   headers: { 'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8' }
    // }
    return await $axios.$post('/sampleCky', paramData)
  }
}

export const SampleModule = getModule(Sample)
