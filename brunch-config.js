exports.config = {
  overrides: {
    production: {
      plugins: {
        off: ['eslint-brunch'],
      }
    }
  },
  conventions: {
    ignored: [
      /[\\/]_/,
      /\-test.js$/,
    ],
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
  plugins: {
    babel: {
      babelrc: true,
    },
  },
  onCompile: function() {
    require('fs').appendFile('public/js/app.js', '\n\nrequire(\'js/app\');');
  }
};
