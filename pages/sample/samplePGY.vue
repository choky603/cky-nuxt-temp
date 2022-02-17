<template>
  <v-container>
    <v-btn elevation="2" @click="다이얼로그호출(1)">Open Confirm</v-btn>
    <v-btn elevation="2" @click="다이얼로그호출(2)">Open info</v-btn>
    <v-btn elevation="2" @click="다이얼로그호출(3)">Open warning</v-btn>
    <v-btn elevation="2" @click="다이얼로그호출(4)">Open error</v-btn>
    <br />
    <br />
    <v-btn elevation="2" @click="다이얼로그호출(5)">Open prompt</v-btn>
    <v-btn elevation="2" @click="다이얼로그호출(6)">Open prompt</v-btn>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { DataResponse, SamplePGYModule } from '~/store/modules/sample/samplePGY'
// import { $axios } from '@/utils/api'

@Component
export default class SamplePGYPage extends Vue {
  /** Nuxt LifeCycle
   * asyncData > created > fetch > mounted
   */
  private data: DataResponse | null = null

  fetch() {
    console.log('fetch!')
  }

  // LifeCycle Hook - aysncData
  async asyncData() {
    await SamplePGYModule.getPGYTest()
    const response = SamplePGYModule.getTestPGYData
    return { response }
  }

  mounted() {
    // console.log(3, process.server)
    // this.axiosTest()
    this.axiosTest2()
  }

  private async axiosTest() {
    try {
      await SamplePGYModule.getPGYTest()
      this.data = SamplePGYModule.getTestPGYData
    } catch (error) {
      console.info(error)
    }
  }

  private async axiosTest2() {
    try {
      const data = await this.$axios.$post('/test')
      console.log(2, data)
    } catch (error) {
      console.log(error)
    }
  }

  private async 다이얼로그호출(num: number) {
    if (num === 1) {
      const confirm = await this.$dialog.confirm({ text: '다이얼로그 호출입니다.', title: 'AAAAAA' })
      console.log('결과값 :: ', confirm) // true, false, undefined
    } else if (num === 2) {
      const info = await this.$dialog.info({
        text: 'File copied successfully',
        title: 'Info'
      })
      console.log('결과값 :: ', info) // string 'OK' OR undefined
    } else if (num === 3) {
      const warning = await this.$dialog.warning({
        text: 'Do you really want to exit?',
        title: 'Warning'
      })
      console.log('결과값 :: ', warning) // string 'Close', undefined
    } else if (num === 4) {
      const error: string = await this.$dialog.error({
        text: 'Cannot delete this item',
        title: 'Error'
      })
      console.log('결과값 :: ', error)
    } else if (num === 5) {
      const prompt = await this.$dialog.prompt({
        text: 'Your name',
        title: 'Please input your name'
      })
      console.log('결과값 :: ', prompt)
    } else if (num === 6) {
      const dialogInstance = await this.$dialog.warning({
        title: 'this.title',
        text: `this.text`,
        waitForResult: false
      })
      setTimeout(() => {
        dialogInstance.close()
      }, 3000)

      // then you can wait for user reaction
      const userChoice = await dialogInstance.wait()
      // after idle 3000 sec - userChoice will be undefined
      this.$dialog.notify.info(userChoice)
    }
  }
}
</script>
