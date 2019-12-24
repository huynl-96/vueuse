import { configure, addParameters } from '@storybook/vue'
import 'github-markdown-css'
import 'prismjs/themes/prism-tomorrow.css'
import './style.css'
import { init } from '../src'
import theme from './theme'

addParameters({
  options: {
    theme,
    hierarchySeparator: /\//,
    hierarchyRootSeparator: /\|/,
  },
})

init()

configure(require.context('../src', true, /\.stories\.tsx$/), module)
