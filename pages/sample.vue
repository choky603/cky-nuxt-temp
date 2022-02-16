<template>
  <v-container>
    <v-btn color="primary" @click="getData">요청</v-btn>
    <v-card style="width: 30%" height="100"> title : {{ title }} sample </v-card>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import { SampleModule } from '@/store/modules/sampleMod'

@Component
export default class SamplePage extends Vue {
  private title = ''

  mounted() {
    // alert(`mounted ....`)
    // this.$nextTick(function() {
    // 	this.getData()
    // })
  }

  private async getData() {
    try {
      console.log(`start getData......`)
      await SampleModule.getTestList()
      this.title = SampleModule.getSampleData
    } catch (error) {
      console.info(error)
    }
  }
}
</script>
