module.exports = config:
  files:
    javascripts:
      joinTo:
        'javascripts/app.js': /^app/
        'javascripts/vendor.js': /^(vendor|bower_components)/
  plugins:
    ESbabel:
      format:
        semicolons: false
