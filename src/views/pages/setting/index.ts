import { ICON_CLIPBOARD, ICON_DELETE, ICON_DL } from '../../atoms/icon'
import { reset } from '../../moleculs/Ask'
import Modals from '../../moleculs/Modals'

const BtnReset = Modals({
  BtnName: ['todo', 'delete'],
  TITLE: 'Reset Data',
  id: 'all',
  ICON: ICON_DELETE,
  BODY: reset(),
})
export default html`
  <div id="main-setting" class="inline-block w-full">
    <h2>Reset Data</h2>
    ${BtnReset}
    <h2>Export</h2>
    <div class="m-3">
      <div id="export-dl" class="btn btn-info btn-sm m-3">
        ${ICON_DL}download
      </div>
      <div id="export-cp" class="btn btn-info btn-sm m-3">
        ${ICON_CLIPBOARD}copy
      </div>
    </div>
    <h2>Import</h2>
    <div class="m-3">
      <form id="file-upload-form">
        <input type="file" class="file-input w-full max-w-xs" name="file" />
        <button type="submit" class="btn btn-info btn-sm m-3 w-11/12">
          Upload file
        </button>
      </form>
      <textarea
        id="import-text"
        class="textarea textarea-bordered w-full h-32"
        placeholder="Paste Your JSON in here..."></textarea>
      <div id="import-btn" class="btn btn-info btn-sm m-3">upload text</div>
    </div>
    <h2>Template</h2>
    <h3>list templete</h3>
    <div class="btn btn-info btn-sm m-3 w-11/12">add template</div>
  </div>
`
