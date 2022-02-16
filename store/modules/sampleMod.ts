import { Module, VuexModule, getModule, Mutation, Action } from 'vuex-module-decorators'
import Vue from 'vue'
import { store } from '@/store'

@Module({ stateFactory: true, name: 'sampleModule', namespaced: true, dynamic: true, store })
class Sample extends VuexModule {
  // State
  private sampleData!: string

  // Getter
  get getSampleData() {
    return this.sampleData
  }

  @Mutation
  public setTestData(data: string) {
    console.log(`@Mutation setTestData`)
    if (data) {
      console.log(`${data}`)
      Vue.set(this, 'sampleData', data)
    }
  }

  @Action({ commit: 'setTestData' })
  async getTestList() {
    console.log(`@Action getTestList`)
    return await `test-${Math.random()}`
  }
}

export const SampleModule = getModule(Sample)
