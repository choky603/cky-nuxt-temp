import type { NuxtAxiosInstance } from '@nuxtjs/axios'

/* eslint-disable import/no-mutable-exports */
let $axios: NuxtAxiosInstance
// const $axios: NuxtAxiosInstance = {} as NuxtAxiosInstance

export function initializeAxios(axiosInstance: NuxtAxiosInstance) {
  // axiosInstance.interceptors.request.use(value => {
  //   value.headers = {
  //     'Cache-Control': 'no-cache'
  //   }
  //   return value
  // })

  // axiosInstance.setHeader('Cache-Control', 'no-cache')
  // axiosInstance.setHeader('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8', ['post'])

  $axios = axiosInstance
}

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
// export default function ({ $axios, redirect }) {
//   $axios.onRequest(config => {
//     console.log('Making request to ' + config.url) // 요청 때마다 url 출력
//   })

//   $axios.onError(error => {
//     const code = parseInt(error.response && error.response.status)
//     if (code === 400) {
//       redirect('/400') // 400 에러 발생시 /400으로 리다이렉트
//     }
//   })
// }

export { $axios }
