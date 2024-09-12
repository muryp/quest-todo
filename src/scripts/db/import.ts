import { ICON_CLIPBOARD_SUCCESS } from '../../views/atoms/icon'
import notify from '../utils/notify'
import db from './init'

const getDb = async () => {
  const getListNameDb = Object.keys(db._allTables)
  const ListDb = {} as { [key: string]: object }
  for (let i = 0; i < getListNameDb.length; i++) {
    const name = getListNameDb[i]
    const contentDb = await db[name as 'history'].toArray()
    ListDb[name] = contentDb
  }
  const toJson = JSON.stringify(ListDb)
  return toJson
}

export async function importDownlod() {
  const listDb = await getDb()
  // Create a Blob object with the text
  const blob = new Blob([listDb], { type: 'text/plain' })

  // Create a link element
  const link = document.createElement('a')
  link.href = window.URL.createObjectURL(blob)
  link.download = 'quest.json'

  // Append the link to the body
  document.body.appendChild(link)

  // Programmatically click the link to trigger the download
  link.click()

  // Remove the link from the document
  document.body.removeChild(link)
}
export async function importCopy() {
  const listDb = await getDb()
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(listDb)
      .then(() => {
        notify('success', 'Async: Copying to clipboard was successful!')
        const importELCopy = document.getElementById('import-cp')
        importELCopy!.innerHTML = `${ICON_CLIPBOARD_SUCCESS}copied`
      })
      .catch((err) => {
        notify('err', `Async: Could not copy text: ${err}`)
      })
    return
  }
  notify('err', 'Async: Could not copy text')
}
