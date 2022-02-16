import { Module, VuexModule, getModule, Mutation, Action } from 'vuex-module-decorators'
import Vue from 'vue'
import { store } from '@/store'


@Module({ dynamic: true, name: 'sampleModule', stateFactory: true , namespaced: true, store })
class Sample extends VuexModule {
    sampleData!: string

    get getSampleData(){
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
        return await 'test 12345'
    }

}

 export const SampleModule = getModule(Sample)
