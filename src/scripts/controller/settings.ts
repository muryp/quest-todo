import { importDownlod } from '../db/import'

export default function () {
  const importELDl = document.getElementById('import-dl')
  importELDl!.onclick = importDownlod
}
