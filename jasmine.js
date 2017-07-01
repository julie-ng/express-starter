import Jasmine from 'jasmine'

let jasmine = new Jasmine()

jasmine.loadConfig({
  spec_dir: 'specs',
  spec_files: [
    '**/*[sS]pec.js'
  ],
  stopSpecOnExpectationFailure: false,
  random: true
})

// Extend Jasmine DSL by aliasing describe
let context = function (...args) {
  return describe(...args)
}

// and expose to global context
global.context = context

// override console.warn for specs
global.console.warn = function (msg) { }

// Run Specs
jasmine.execute()
