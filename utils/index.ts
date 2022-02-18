/** 공통 유틸리티 제공
 * lf함수명()
 */

import dayjs from 'dayjs'

/**
 * 요청 포맷으로 현재일자 반환
 * lfGetDate('YYYY-MM-DD')
 * @param format
 * @returns
 */
export function lfGetDate(format?: string) {
  const now = dayjs()
  if (!format) {
    format = `YYYYMMDD`
  }
  const returnDate = now.format(format)
  return returnDate
}
