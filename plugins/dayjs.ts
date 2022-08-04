import {defineNuxtPlugin} from "#imports"

import dayjs from 'dayjs'
import 'dayjs/locale/vi'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)


export default defineNuxtPlugin(() => {
    return {
        provide: {
            dayjs
        }
    }
})
