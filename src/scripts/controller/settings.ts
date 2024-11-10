import { exportDownlod, exportCopy } from '../db/export'
import { importFile, importText } from '../db/import'
import db from '../db/init'
import notify from '../utils/notify'

export default function () {
  const resetData = document.getElementById('reset')
  resetData!.onclick = () => {
    db.delete()
      .then(() => {
        window.location.href = '#setting'
        notify('success', 'delete success. please reload for adding new task.')
      })
      .catch((e) => {
        notify('err', e)
      })
  }
  const exportELDl = document.getElementById('export-dl')
  exportELDl!.onclick = exportDownlod
  const exportELCopy = document.getElementById('export-cp')
  exportELCopy!.onclick = exportCopy

  const form = document.getElementById('file-upload-form')!
  form.addEventListener('submit', (event) => {
    importFile(event, form)
  })
  const importELText = document.getElementById('import-btn')
  importELText!.onclick = importText
}
