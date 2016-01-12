exports.config = {
  overrides: {
    production: {
      plugins: {
        off: ['eslint-brunch'],
      }
    }
  },
  npm: {
    enabled: true,
    whitelist: ['react', 'react-dom', 'flux', 'events'],
  },
  files: {
    javascripts: {
      joinTo: {
        'js/vendor.js': /^node_modules/,
        'js/app.js': /^app/
      }
    },
    stylesheets: {
      joinTo: 'styles/app.css'
    }
  },
  onCompile: function() {
    require('fs').appendFile('public/js/app.js', '\n\nrequire(\'js/app\');');
  }
};
