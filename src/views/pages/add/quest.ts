import form from '../../organisms/form/quest'

export default form(
  {
    title: '',
    point: { success: 0, fail: 0 },
    description: '',
  },
  'add',
)
