global.SRC_FOLDER = 'src';
global.BUILD_FOLDER = 'build';
global.RELEASE_FOLDER = 'release';
global.TMP_FOLDER = 'tmp';

global.config = {
  paths: {
    src: {
      index: SRC_FOLDER + '/index.html',
      assets: [SRC_FOLDER + '/assets/**/*', '!' + SRC_FOLDER + '/assets/images/**/*'],
      images: SRC_FOLDER + '/assets/images/**/*',
      scripts: SRC_FOLDER + '/modules/**/*.coffee',
      styles: SRC_FOLDER + '/styles/app.scss',
      stylesGlob: SRC_FOLDER + '/styles/**/*.scss',
      templates: SRC_FOLDER + '/modules/**/*.html',
      templatesHTML: SRC_FOLDER + '/modules/**/*.html',
      templatesCompiled: TMP_FOLDER,
      livereload: [BUILD_FOLDER + '/**/*', '!' + BUILD_FOLDER + '/assets/**/*'],
      modules: './' + SRC_FOLDER + '/modules/index.coffee'
    },
    dest: {
      build: {
        styles: BUILD_FOLDER,
        scripts: BUILD_FOLDER,
        images: BUILD_FOLDER + '/assets/images',
        assets: BUILD_FOLDER + '/assets',
        index: BUILD_FOLDER,
        server: BUILD_FOLDER
      },
      release: {
        styles: RELEASE_FOLDER,
        scripts: RELEASE_FOLDER,
        images: RELEASE_FOLDER + '/assets/images',
        assets: RELEASE_FOLDER + '/assets',
        index: RELEASE_FOLDER,
        server: RELEASE_FOLDER
      }
    }
  },
  filenames: {
    build: {
      styles: 'bundle.css',
      scripts: 'bundle.js'
    },
    release: {
      styles: 'bundle.min.css',
      scripts: 'bundle.min.js'
    },
    templates: {
      compiled: 'templates.js',
      angular: {
        moduleName: 'app.templates',
        prefix: '',
        stripPrefix: 'app/'
      }
    }
  },
  ports: {
    staticServer: 8080,
    livereloadServer: 35729
  }
};
