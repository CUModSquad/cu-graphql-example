const npsUtils = require('nps-utils');

module.exports = {
  scripts: {
    lint: {
      script: 'tslint src/**/*.ts{,x}',
      description: 'Run TS-Lint"',
      hiddenFromHelp: true,
      fix: {
        script: 'tslint --fix src/**/*.ts{,x}',
        description: 'Fix TS-Lint errors',
        hiddenFromHelp: true,
      }
    },
    definitions: {
      default: 'download https://hatcheryapi.camelotunchained.com/codegen/definitions.ts > ./src/lib/definitions.ts',
    },
    gql: {
      schema: 'apollo-codegen introspect-schema https://hatcheryapi.camelotunchained.com/graphql --output gql/schema.json',
      typings: 'gql-gen --file gql/schema.json --template typescript --out ./src/lib/graphql/schema.ts',
      codegen: 'apollo-codegen generate src/**/*.graphql --schema gql/schema.json --target typescript --output src/lib/graphql/gqlInterfaces.ts',
      postInstall: 'nps gql.schema && nps gql.typings && nps gql.build',
      build: 'nps gql.codegen',
      default: 'nps gql.postInstall'
    },
    dev: {
      default: {
        script: 'nps clean && nps build.dev && nps dev.livereload  && nps dev.serve && nps dev.watch',
        description: 'Development mode will start an http server with live reload that will watch and build whenever a file change is detected.'
      },
      serve: {
        script: 'start http-server-spa ./dist/ index.html 9004',
        hiddenFromHelp: true,
      },
      livereload: {
        script: 'start livereload ./dist/',
        hiddenFromHelp: true,
      },
      watch: {
        default: {
          script: npsUtils.concurrent.nps('dev.watch.ts', 'dev.watch.graphql', 'dev.watch.misc'),
          description: 'Runs watch scripts in parallel to build whenever a file change is detected.',
          hiddenFromHelp: true,
        },
        ts: {
          script: 'watch -p "src/**/*.ts" -p "src/**/*.tsx" -c "nps build.dev"',
          hiddenFromHelp: true,
        },
        graphql: {
          script: 'watch -p "src/**/*.graphql -c "nps build.dev"',
          hiddenFromHelp: true,
        },
        misc: {
          script: 'watch -p "src/**/*.html" -p "src/third-party/**/*" -p "src/font/**/*" -p "src/images/**/*" -p "src/**/*.ui" -p "src/**/*.ico" -p "src/**/*.config.js" -c "nps copy.dev && nps copy.dist"',
          hiddenFromHelp: true,
        },
      },
    },
    clean: {
      default: {
        script: 'shx rm -rf transpiled build dist && shx echo "Clean done."',
        hiddenFromHelp: true,
      },
      transpiled: {
        script: 'shx rm -rf transpiled && shx echo "Clean transpiled done."',
        hiddenFromHelp: true,
      },
    },
    copy: {
      dist: {
        script: 'copyup build/**/* dist',
        hiddenFromHelp: true,
      },
      default: {
        script: 'nps copy.build && nps copy.cssmodules && nps copy.primereactcss',
        hiddenFromHelp: true,
      },
      build: {
        script: 'copyup src/third-party/**/* src/images/**/* src/font/**/* src/index.html src/*.js src/**/*.ico src/**/*.ui build',
        hiddenFromHelp: true,
      },
      dev: {
        script: 'nps copy && copyup src/**/*.config.js src/dev.html build && mv build/dev.html build/index.html && nps copy.dist',
        hiddenFromHelp: true,
      },
      cssmodules: {
        script: 'copyup src/**/*.css transpiled',
        hiddenFromHelp: true,
      },
      primereactcss: {
        script: 'copyup node_modules/primereact/resources/**/*.css build',
      },
    },
    test: {
      default: {
        script: 'nps report.test && nps test.jest'
      },
      update: {
        script: 'nps report.test && nps test.jest.update'
      },
      watch: {
        script: 'nps report.test && nps test.jest.watch'
      },
      jest: {
        default: {
          script: 'jest',
          hiddenFromHelp: true,
        },
        watch: {
          script: 'jest --watch',
          hiddenFromHelp: true,
        },
        update: {
          script: 'jest --updateSnapshot'
        }
      }
    },
    build: {
      default: {
        script: 'nps clean && nps gql.build && shx mkdir dist && nps build.webpackProd && nps copy && nps copy.dist && nps clean.transpiled',
        description: 'Build the module for production.',
      },
      webpackDev: {
        script: 'webpack --config webpack.dev.js',
        hiddenFromHelp: true,
      },
      webpackProd: {
        script: 'webpack --config webpack.prod.js',
        hiddenFromHelp: true,
      },
      old: {
        script: 'nps report.start && nps lint && nps report.lint && nps report.gql && nps gql.build && tsc && nps report.tsc && nps copy && nps report.copy && nps build.webpackProd && nps report.webpack && nps copy.dist && nps clean.transpiled && nps report.success',
        description: 'Build the module.',
      },
      dev: {
        script: 'nps lint && nps gql.build && nps copy && nps build.webpackDev && nps clean.transpiled && nps copy.dev && nps report.success',
        description: 'build for dev watcher',
        hiddenFromHelp: true,
      },
    },
    report: {
      start: {
        script: 'echo "Build started..."',
        hiddenFromHelp: true,
      },
      lint: {
        script: 'echo "TSLint complete"',
        hiddenFromHelp: true,
      },
      tsc: {
        script: 'echo "TypeScript transpile complete..."',
        hiddenFromHelp: true,
      },
      copy: {
        script: 'echo "Copy complete..."',
        hiddenFromHelp: true,
      },
      webpack: {
        script: 'echo "Webpack bundle complete..."',
        hiddenFromHelp: true,
      },
      success: {
        script: 'echo "Build completed successfully!"',
        hiddenFromHelp: true,
      },
      test: {
        script: 'echo "Testing started..."',
        hiddenFromHelp: true,
      },
      gql: {
        script: 'echo "Generating GraphQL Documents and Typings...',
        hiddenFromHelp: true,
      }
    },
  }
};
