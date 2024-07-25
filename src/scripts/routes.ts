import edit from '../views/pages/edit'
import home from '../views/pages/home'
import reward from '../views/pages/reward'
import redeem from '../views/pages/redeem'
import setting from '../views/pages/setting'
import add from '../views/pages/add'
import complete from '../views/pages/complete'

const routes = {
  'home': { render: home, script: import('./controller/home/home') },
  'add': { render: add, script: import('./controller/add') },
  'delete': { render: 'delete page', script: import('./controller/remove') },
  'edit': { render: edit, script: import('./controller/edit') },
  'myreward': { render: reward, script: import('./controller/edit') },
  'redeem': { render: redeem, script: import('./controller/edit') },
  'setting': { render: setting, script: import('./controller/edit') },
  'complete': {
    render: 'complete...',
    script: import('./controller/complete'),
  },
  'complete-task': {
    render: complete,
    script: import('./controller/completeTask'),
  },
}

export default routes
