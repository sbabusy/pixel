# pixel
Voice browser poc using artyom.js

{
	"name": "trade-in-program",
	"description": "Enforce and report code quality with JUnit, JaCoCo, Hamcrest, FindBugs, PMD, CodeNarc, Checkstyle (Google), Enforcer, Duplicate-Finder, JDepend, and more with this Maven POM.",
	"version": "1.0.0-SNAPSHOT",
	"author": {
		"name": "Durga Masabattula",
		"email": "durga.masabattula@verizon.com",
		"url": "https://github.com/ecom"
	},
	"bugs": "https://github.com/ecom/trade-in-program/issues",
	"commitplease": {
		"style": "angular",
		"types": [
			"build",
			"chore",
			"ci",
			"docs",
			"feat",
			"fix",
			"perf",
			"refactor",
			"revert",
			"style",
			"test"
		],
		"scope": "\\S+.*"
	},
	"contributors": [],
	"dependencies": {
		"bootstrap": "^3.3.7",
		"font-awesome": "^4.7.0",
		"jquery": "^3.2.1",
		"vee-validate": "^2.0.3",
		"vue": "^2.5.13"
	},
	"devDependencies": {
		"babel-core": "^6.26.0",
		"babel-preset-env": "^1.6.1",
		"commitplease": "3.1.0",
		"fixpack": "2.3.1",
		"gulp": "4.0",
		"gulp-babel": "^7.0.1",
		"gulp-clean": "^0.4.0",
		"gulp-cli": "^2.0.1",
		"gulp-concat": "^2.6.1",
		"gulp-minify-css": "^1.2.4",
		"gulp-mocha": "^5.0.0",
		"gulp-rename": "^1.2.2",
		"gulp-sass": "^3.1.0",
		"gulp-sourcemaps": "^1.12.1",
		"gulp-uglify": "^3.0.0",
		"gulp-uglifycss": "^1.0.9",
		"gulp-util": "^3.0.8",
		"markdown-magic": "0.1.19",
		"markdown-magic-dependency-table": "1.3.2",
		"markdown-magic-install-command": "1.3.1",
		"markdown-magic-package-scripts": "1.2.1",
		"mocha": "^5.0.0",
		"modernizr": "^3.5.0",
		"node-sass": "^4.6.1",
		"nodemon": "^1.12.1",
		"nsp": "3.1.0",
		"require": "^2.4.20",
		"snyk": "1.49.1",
		"standard-version": "4.2.0",
		"uglify-js": "^3.2.2"
	},
	"homepage": "https://github.com/ecom/trade-in-program",
	"keywords": [
		"maven",
		"mvn",
		"plugins",
		"qa",
		"spike"
	],
	"main": "index.js",
	"maintainers": [],
	"repository": "https://github.com/ecom/trade-in-program.git",
	"scripts": {
		"gulp": "node_modules/gulp/bin/gulp.js",
		"local": "npm run gulp local",
		"build": "npm run gulp build",
		"test": "npm run gulp test",
		"test:watch": "npm run gulp test:watch"
	}
}
