import { ICON_TEXT } from './../atoms/icon'

/* eslint-disable lit/attribute-value-entities */
const Input = (name: string, type: string, value: string) => {
  return html`
    <label class="input input-bordered flex items-center gap-2 [&>*]:uppercase">
      ${type === 'text' ? ICON_TEXT : '#'}
      <input
        type="${type}"
        class="grow"
        name="${name}"
        placeholder="${name.replace(/\./i, ' ')}"
        value="${value}"
        required />
    </label>
  `
}
export default Input