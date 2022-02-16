export default function ({ $axios }, inject) {
  // 새로운 엑시오스 인스턴스 생성
  const api = $axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*',
      },
    },
  })

  // 인스턴스의 기본 URL 변경
  api.setBaseURL('http://localhost:8080')

  // context에 주입, $api 형태로 호출 가능
  inject('api', api)
}
