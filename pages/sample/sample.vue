<template>
  <v-container>
    <p>{{ title }}</p>

    <v-btn color="primary" @click="fetchData">요청</v-btn>

    <v-col cols="10">
      <v-card v-for="(item, index) in sampleData" :key="index">
        <v-card-title>{{ item.사업자명 }}</v-card-title>
        <v-card-text>{{ item.상품명 }}</v-card-text>
      </v-card>
    </v-col>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import { SampleModule, DataList } from '~/store/modules/sample/sampleMod'

@Component
export default class SamplePage extends Vue {
  private title = ''
  private sampleList: DataList[] = []

  get sampleData() {
    return this.sampleList ?? []
  }

  mounted() {
    // alert(`mounted ....`)
    // this.$nextTick(function() {
    // 	this.getData()
    // })
    this.pageInit()
  }

  private async pageInit() {
    try {
      await SampleModule.getTestList()
      this.title = SampleModule.getTestData
    } catch (error) {
      console.info(error)
    }
  }

  private async fetchData() {
    try {
      console.log(`start fetchData......`)
      await SampleModule.getSampleList()
      this.sampleList = SampleModule.getSampleData.data
    } catch (error) {
      console.info(error)
    }
  }
}
</script>
