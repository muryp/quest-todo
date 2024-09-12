import { exportDownlod, exportCopy } from '../db/export'
import { importFile, importText } from '../db/import'

export default function () {
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
