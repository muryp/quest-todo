import { faker } from '@faker-js/faker'

const stringCronJob = '0 0 0 * * *'
const setting = {
  title: faker.word.words(5),
  version: 'v1',
  autoBackup: true,
  lastBackup: Date.now(),
  timeBackup: stringCronJob,
  theme: 'base',
} as const
export default setting
export type TSetting = typeof setting