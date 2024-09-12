import { importDownlod, importCopy } from '../db/import'

export default function () {
  const importELDl = document.getElementById('import-dl')
  importELDl!.onclick = importDownlod
  const importELCopy = document.getElementById('import-cp')
  importELCopy!.onclick = importCopy
}