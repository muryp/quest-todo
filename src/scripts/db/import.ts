import { TvalHistory } from '../../mock/history'
import AskUpload from '../../views/moleculs/AskUpload'
import notify from '../utils/notify'
import db from './init'

export const updateDb = async (data: { [key: string]: object }) => {
  const ListDbName = Object.keys(data)
  for (let i = 0; i < ListDbName.length; i++) {
    const name = ListDbName[i]
    await db[name as 'history'].bulkPut(
      data[name as 'history'] as TvalHistory[],
    )
  }
}
const quest = (cbYes: () => void) => {
  const Notify = document.getElementById('notify')!
  Notify.innerHTML = AskUpload
  const btnYes = document.getElementById('btn-yes') as HTMLDivElement
  const btnNo = document.getElementById('btn-no') as HTMLDivElement
  btnYes.addEventListener('click', () => {
    Notify.innerHTML = ''
    cbYes()
  })
  btnNo.addEventListener('click', () => {
    Notify.innerHTML = ''
    notify('err', 'Importing was canceled!')
  })
}
export const importFile = function (ev: Event, form: HTMLElement) {
  ev.preventDefault()
  quest(() => {
    const fileInput = form.querySelector(
      'input[type="file"]',
    ) as HTMLInputElement
    const file = fileInput.files![0]
    if (file) {
      const reader = new FileReader()
      reader.onload = async function (e) {
        const text = (e.target as FileReader).result
        if (text) {
          try {
            const DataFile = JSON.parse(text as string)
            await updateDb(DataFile)
            notify('success', 'Importing was successful!')
          } catch (error) {
            notify('err', error as string)
          }
        }
      }
      reader.readAsText(file)
    }
  })
}
export const importText = async function () {
  quest(() => {
    const importText = document.getElementById(
      'import-text',
    ) as HTMLTextAreaElement
    const TEXT_IMPORT = importText.value
    try {
      const DataImport = JSON.parse(TEXT_IMPORT)
      updateDb(DataImport)
        .then(() => {
          notify('success', 'Importing was successful!')
          const importText = document.getElementById(
            'import-text',
          ) as HTMLTextAreaElement
          importText.value = ''
        })
        .catch((err) => {
          notify('err', err)
        })
    } catch (err) {
      notify('err', 'Text is empty or invalid JSON!')
    }
  })
}