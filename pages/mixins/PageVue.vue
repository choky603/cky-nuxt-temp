<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class PageVue extends Vue {
  /**
   * 페이지 뷰 공통 처리
   */
  mounted() {
    console.log(`PageVue .....`)
  }
}
</script>
