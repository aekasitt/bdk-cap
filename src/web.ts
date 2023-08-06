/* ~~/src/web.ts */

import { registerWebPlugin, WebPlugin } from '@capacitor/core'
// import { KruttCapacitorBDKPlugin } from './definitions'

export class KruttCapacitorBDKWeb extends WebPlugin /* implements KruttCapacitorBDKPlugin */ {}

const KruttCapacitorBDK = new KruttCapacitorBDKWeb()
export { KruttCapacitorBDK }
registerWebPlugin(KruttCapacitorBDK)
