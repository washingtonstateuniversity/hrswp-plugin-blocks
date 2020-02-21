# HRSWP Blocks Changelog

Author: Adam Turner  
Author: Washington State University  
URI: https://github.com/washingtonstateuniversity/hrswp-plugin-blocks

<!--
Changelog formatting (http://semver.org/):

## Major.MinorAddorDeprec.Bugfix YYYY-MM-DD

### To Do (for upcoming changes)
### Security (in case of fixed vulnerabilities)
### Fixed (for any bug fixes)
### Changed (for changes in existing functionality)
### Added (for new features)
### Deprecated (for once-stable features removed in upcoming releases)
### Removed (for deprecated features removed in this release)
### Experimental (for in-progress features still being refined)
-->

## 0.3.0-rc.3 (:construction: 2020-02-21)

### Fixed

- Fix #12 remove deprecated sudo key from Travis config.
- Fix #14 update Travis config to set linux as the os.
- Fix #13 use Prettier to maintain JS codebase and fix issues.
- Fix #10 add transform to help convert prior-syntax sidebar blocks into the new syntax.

### Changed

- :construction_worker: Add 0.x branch to Travis CI testing.
- :arrow_up: @wordpress/babel-preset-default => 4.10.0
- :arrow_up: @wordpress/dependency-extraction-webpack-plugin => 2.3.0
- :arrow_up: @wordpress/eslint-plugin => 4.0.0
- :arrow_up: @wordpress/npm-package-json-lint-config => 2.2.0
- :arrow_up: npm-package-json-lint => 4.6.0
- :arrow_up: rimraf => 3.0.2
- :arrow_up: stylelint => 13.2.0
- :arrow_up: webpack => 4.41.6
- :arrow_up: webpack-cli => 3.3.11
- :arrow_up: squizlabs/php_codesniffer => 3.5.4
- :arrow_up: dealerdirect/phpcodesniffer-composer-installer => v0.6.2
- :arrow_up: wp-coding-standards/wpcs => 2.2.1
- :arrow_up: sirbrillig/phpcs-variable-analysis => v2.8.1

### Added

- :sparkles: Sidebar layout block with associated styles.
- :sparkles: Notification module block with associated styles.
- :sparkles: Callout module block with associated styles.
- :bento: Add `env` directory with plugin-wide variables.
- :zap: Method to only load frontend styles when a 'HRSWP Blocks' block is active on the page.
- :wrench: npm `fix` script to auto-fix linting issues.
- :wrench: Configuration file for the Prettier package to handle linting JavaScript files.
- :heavy_plus_sign: lodash npm-dependency
- :heavy_plus_sign: wp-prettier npm dev-dependency aliased to prettier

### Removed

- Old Travis CI npm dependency workaround.

## 0.2.0 (2020-01-24)

### Fixed

- :warning: Fix phpcs linter errors following rules update.

### Changed

- :milky_way: Assign an aria-live attribute with "off" value to dynamic search region, fix #2.
- :milky_way: Match ARIA labels and IDs on search filter input; clean up unneeded labels, fix #2.
- :memo: Document the `Filter` class.
- :wrench: Update php code sniffing rules to better align with WP plugin development and check for more issues.
- :arrow_up: dealerdirect/phpcodesniffer-composer-installer 0.5.0 => 0.6.0
- :arrow_up: wp-coding-standards/wpcs 2.1.1 => 2.2.0
- :arrow_up: @wordpress/babel-preset-default => 4.9.0
- :arrow_up: @wordpress/babel-preset-default => 4.9.0
- :arrow_up: stylelint => 13.0.0
- :arrow_up: stylelint-config-wordpress => 16.0.0
- :arrow_up: webpack => 4.41.5

### Added

- Search filter method to update results from a URL parameter, close #1.
- :sparkles: JavaScript and CSS to handle on-page searching and filtering of arbitrary content.
- :art: Style the search filter block.
- :sparkles: "Search filter" block and supporting "search filter section" and "search filter input" blocks, close #4.
- :heavy_plus_sign: squizlabs/php_codesniffer composer dev dependency
- :heavy_plus_sign: phpcompatibility/php-compatibility composer dev dependency
- :heavy_plus_sign: sirbrillig/phpcs-variable-analysis composer dev dependency
- :heavy_plus_sign: roave/security-advisories composer dev dependency
- :heavy_plus_sign: mark.js npm dependency to handle search matching and highlighting.
- :heavy_plus_sign: classnames npm dev dependency.

### Removed

- :heavy_minus_sign: lodash npm dev dependency.

### Experimental

- :construction: Inital CSS-only attempt at retaining headings when filtering content. Not working as intended yet.

## 0.1.0 (2019-12-05)

### Added

- :tada: Initial commit with Readme, license, and changelog.
- VCS config files.
- :construction_worker: Set up Travis CI tests.
- :heavy_plus_sign: Install NPM and Composer dev dependencies.
- :construction_worker: Add build and test tools and configurations.
- Base plugin setup methods.
