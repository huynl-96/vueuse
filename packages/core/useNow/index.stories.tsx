import 'vue-tsx-support/enable-check'
import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import { defineComponent } from '../../api'
import { ShowDocs } from '../../_docs/showdocs'
import { useNow } from '.'

type Inject = {
  now: number
}

const Demo = defineComponent({
  setup() {
    const now = useNow()
    return {
      now,
    }
  },

  render(this: Vue & Inject) {
    const { now } = this

    // @ts-ignore
    const Docs = <ShowDocs md={require('./index.md')} />

    return (
      <div>
        <div id='demo'>
          <p>Now: {now}</p>
        </div>
        {Docs}
      </div>
    )
  },
})

storiesOf('Animation', module)
  .add('useNow', () => Demo as any)
