<template>
  <v-container>
    <v-card style="width: 30%" height="100">
        {{data}}
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"
import { DataResponse, SamplePGYModule } from '@/store/modules/samplePGY'

@Component
export default class SamplePGYPage extends Vue {
  private data: DataResponse | null = null

  mounted() {
    this.axiosTest()
  }

  private async axiosTest() {
    try {
      await SamplePGYModule.getPGYTest()
      this.data = SamplePGYModule.getTestPGYData
    } catch (error) {
      console.info(error)
    }
  }
}
</script>
