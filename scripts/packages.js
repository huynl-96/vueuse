module.exports = [
  ['core', {}],

  ['firebase', {
    name: '🔥 Firebase',
    description: 'Enables realtime bindings for [Firebase](https://firebase.google.com/)',
    peerDependencies: {
      firebase: '>=4.0.0',
    },
    external: [
      'firebase',
      'firebase/app',
    ],
    globals: {
      firebase: 'firebase',
      'firebase/app': 'firebase',
    },
    keywords: [
      'firebase',
      'vuefire',
    ],
  }],

  ['i18n', {
    depreacted: true,
    name: '🌍 i18n',
    description: '[depreacted] Composition wrapper for [vue-i18n](https://github.com/kazupon/vue-i18n)',
    peerDependencies: {
      'vue-i18n': '>=6.0.0',
    },
    external: [
      'vue-i18n',
    ],
    globals: {
      'vue-i18n': 'VueI18n',
    },
    keywords: [
      'depreacted',
    ],
  }],
]
