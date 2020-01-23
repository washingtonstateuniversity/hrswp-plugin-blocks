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

## 0.2.0-beta.4 (:construction: 2020-01-23)

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
- :sparkles: "Search filter" block and supporting "search filter section" and "search filter input" blocks.
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
