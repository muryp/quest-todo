import edit from '../component/pages/edit'
import home from '../component/pages/home'
import reward from '../component/pages/reward'
import redeem from '../component/pages/redeem'
import setting from '../component/pages/setting'
import add from '../component/pages/add'

const routes = {
  home: { render: home, script: import('./controller/home') },
  add: { render: add, script: import('./controller/add') },
  delete: { render: 'delete page', script: import('./controller/remove') },
  edit: { render: edit, script: import('./controller/edit') },
  myreward: { render: reward, script: import('./controller/edit') },
  redeem: { render: redeem, script: import('./controller/edit') },
  setting: { render: setting, script: import('./controller/edit') },
}

export default routes
