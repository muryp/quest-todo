import edit from '../component/pages/edit'
import home from '../component/pages/home'
import homeScript from './controller/home?url'
import editScript from './controller/edit?url'

const routes = {
  home: { render: home, script: homeScript },
  edit: { render: edit, script: editScript },
  reward: 'this is reward',
}

export default routes