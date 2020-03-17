import 'vue-tsx-support/enable-check'
import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import { defineComponent } from '../../api'
import { ShowDocs } from '../../_docs/showdocs'

const Demo = defineComponent({
  render(this: Vue & any) {
    // @ts-ignore
    const Docs: any = <ShowDocs md={require('./index.md')} />

    return (
      <div>
        {Docs}
      </div>
    )
  },
})
storiesOf('Browser', module)
  .add('useEventListener', () => Demo as any)
