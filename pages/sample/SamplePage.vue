<template>
  <v-container>
    <p>{{ title }}</p>

    <v-card>
      <NuxtLink to="/sample/sampleDialog">sample dialog</NuxtLink> ||
      <v-btn color="primary" @click="movePage(`/sample/sampleDialog`)">이동</v-btn>
    </v-card>

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
import { Component, mixins } from 'nuxt-property-decorator'
import PageVue from '@/pages/mixins/PageVue.vue'

// import { Direction } from '@/pages/constant/index' // 상수사용
import { SampleModule, DataList } from '~/store/modules/sample/sampleMod'

@Component
export default class SamplePage extends mixins(PageVue) {
  private title = ''
  private sampleList: DataList[] = []

  get sampleData() {
    return this.sampleList ?? []
  }

  asyncData() {
    console.log(`asyncData.....`)
  }

  async fetch() {
    console.log(`fetch.....`)
    try {
      await SampleModule.getTestList()
      this.title = SampleModule.getTestData
    } catch (error) {
      console.info(error)
    }
  }

  mounted() {
    // alert(`mounted ....`)
    // this.$nextTick(function() {
    this.pageInit()
    // })
  }

  private pageInit() {
    // console.log(`@Direction:${Direction.Up}`)
    console.log(`@SERVER_MOD:${process.env.SERVER_MOD}`)
  }

  private movePage(link: string) {
    console.log(`link:${link}`)
    this.$router.push(link)
    // this.$router.replace(link)
    // this.$router.push({ name: 'sample-sampleDialog', params: { id: 'test-id' } })
    // this.$router.go(-1) // 한 단계 뒤로
  }

  private async fetchData() {
    try {
      console.log(`start fetchData......`)
      await SampleModule.getSampleList()
      // await SampleModule.getParamSampleList()
      this.sampleList = SampleModule.getSampleData.data
    } catch (error) {
      console.info(error)
    }
  }
}
</script>

<style lang="scss" scoped></style>
