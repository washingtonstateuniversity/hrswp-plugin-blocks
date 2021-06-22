# HRSWP Blocks Changelog

Author: Adam Turner  
Author: Washington State University  
URI: https://github.com/washingtonstateuniversity/hrswp-plugin-blocks

<!--
Changelog formatting (http://semver.org/):

## Major.MinorAddorDeprec.Bugfix YYYY-MM-DD

### Added (for new features.)
### Changed (for changes in existing functionality.)
### Deprecated (for soon-to-be removed features.)
### Removed (for now removed features.)
### Fixed (for any bug fixes.)
### Security (in case of vulnerabilities.)

-->

## 1.0.2-beta.1 (Future release)

### Fixed

- Fix #69 outline style buttons need background. (4023822)

## 1.0.1 (2021-06-07)

### Fixed

- Fix hiding deprecated accordion block from block inserter.
- Fix #67 use client-side `wp.data.dispatch` method to hide blocks instead of server-side `allowed_blocks` filter.

## 1.0.0 (2021-06-01)

### Added

- Create a guide for making contributions in CONTRIBUTING.md. (2741912)
- Filter block (`filter` and `filter-section`) to replace the now-deprecated Search Filter block (`search-filter`, `search-filter-input`, and `search-filter-section`). This refactored version uses Block API 2, moves the UI controls to frontend JS, matches markup to core Search block, and resolves issues #7, #56, and #57. (9471cdc)
- New Accordions block (`accordions`, `accordion-heading`, and `accordion-section`) to replace the now-deprecated Accordion block (`accordion` and `accordion-panel`). This refactored version uses Block API 2 and resolves issues #24, #25, #51, #52, and #53. (8f33744)
- Button and Buttons blocks to replace WP Core versions, close #54. Custom versions mostly replicate the core versions of those blocks but remove features we do not want users to use, like radius controls. (887bc64)
- Filter to manage blocks allowed in editor inserter. (32370ba)
- Add postcss as a dev dependency (required by PostCSS CLI and PostCSS Import). (5a86ebe)

### Changed

- Bump WordPress tested-to to 5.7.2 and minimum supported version to 5.7.
- Expand on the bug report and pull request templates, close #50. (2741912)
- Complete README including list of HRSWP blocks provided, close #6. (92ed6de)
- Replace GPL 2.0 license with a GPL 3.0 license. (9ba18d7 and 2e335b8)
- Update block registration method to use metadata from `block.json` directly. (f1058fb)
- Simplify Composer coding standards scripts. (742aaee)
- Replace Travis CI with GitHub Actions, close #60. (2817e66)
- Replace deprecated WP Stylelint config dependency with new version. (ca4da08) 
- Bump @wordpress/stylelint-config from 19.0.2 to 19.0.4 and stylelint from 13.7.1 to 13.13.1. (00c76bb)
- Bump postcss from 8.2.8 to 8.3.0. (00c76bb)
- Bump classnames from 2.2.6 to 2.3.1. (00c76bb)
- Bump @wordpress/dependency-extraction-webpack-plugin from 3.1.0 to 3.1.3. (00c76bb)
- Bump @babel/core from 7.13.14 to 7.14.3 and @babel/runtime from 7.13.10 to 7.14.0. (00c76bb)
- Bump eslint from 7.9.0 to 7.27.0. (b833f80 and 00c76bb)
- Bump squizlabs/php_codesniffer from 3.5.6 to 3.6.0. (00c76bb)
- Bump dealerdirect/phpcodesniffer-composer-installer from 0.7.0 to 0.7.1. (00c76bb)
- Bump sirbrillig/phpcs-variable-analysis from 2.8.3 to 2.11.0. (00c76bb)
- Upgrade cssnano from 4.1.10 to 5.0.4. (00c76bb)
- Upgrade @wordpress/babel-preset-default from 5.1.0 to 6.1.0. (00c76bb)
- Upgrade to Webpack 5: webpack from 4.44.2 to 5.37.1; webpack-bundle-analyzer from 3.9.0 to 4.4.2; webpack-cli from 3.3.12 to 4.7.0; source-map-loader from 1.1.0 to 3.0.0; and copy-webpack-plugin from 6.1.1 to 9.0.0. (346f8f6 and 00c76bb)
- Upgrade PostCSS build tools: postcss-cli from 8.0.0 to 8.3.0 and postcss-import from 12.0.1 to 14.0.2. (5a86ebe)
- Upgrade JS linters: @wordpress/eslint-plugin from 7.2.1 to 9.0.5; @wordpress/npm-package-json-lint-config from 3.1.0 to 4.0.4; and WP prettier from 2.0.5 to 2.2.1-beta-1. (b833f80 and 00c76bb)

### Deprecated

- HRSWP `searchFilter`, `searchFilterSection`, and `searchFilterInput` blocks. (9471cdc)
- HRSWP `accordion`, `accordion-panel`, and `accordion-input` blocks. (bcf2e9a)
- WP Core `button` and `buttons` blocks. (887bc64)

### Removed

- Remove Thread Loader dependency and script from Webpack config until it works with Webpack 5. (346f8f6)

### Fixed

- Fix #55 Sidebar block layout like Columns block to prevent collapse when empty. (3517d17)
- Fix #58 update Notifcation block to use `hrswp/button`. (757bfc4)
- Fix copy webpack plugin pattern syntax: no longer need `.[ext]` after copy-webpack-plugin version 8.0.0. (d33c4f2)
- Fix eslint "no-unresolved" error from missing import. (1c73230)

### Security

- Bump browserslist from 4.16.4 to 4.16.6. (b9b1008)
- Bump y18n from 4.0.0 to 4.0.1. (d64059b)
- Bump elliptic from 6.5.3 to 6.5.4. (40289ab)
- Bump dot-prop from 4.2.0 to 4.2.1. (f335f90)
- Bump ini from 1.3.5 to 1.3.8. (1bc8c67)

## 0.6.0 (2020-09-14)

### Bug Fixes

- Fix #41 WP core Columns styles override Sidebar column widths. (6f4c1f4)

### Documentation

- Increment WP tested-to to 5.5.1.

### Build Tooling

- ⬆️ Update Composer dev dependencies.
- ⬆️ Update build tool dev dependencies. (7864b6c)

## 0.5.0 (2020-06-26)

### Features

- Posts List block with multiple-taxonomy filtering and list or grid style options. (6d153e1)

### Enchancements

- Add decorative icons for post meta display. (6d153e1)
- Add more font size variables. (6d153e1)

### Code Quality

- Fix `class-setup.php` phpcs issues. (6d153e1, ca62c14)
- Consolidate block includes into preexisting `Setup` class includes method. (6d153e1)
- Update `phpcs.xml.dist` to ignore WordPress's 'InvalidClassFileName' rule. (6d153e1)

### Build Tooling

- Fix Copy Webpack Plugin patterns syntax for v6.0 changes. (354a8e7)
- Refactor Travis CI config to use jobs and separate test steps. (f472fb6)
- PHP coding standards linter updates: PHP Codesniffer, WPCS coding standards, and PHPCS Variable Analysis. (bb34e38)
- Update WordPress Stylelint config plugin to 17.0.0. (e4fabc4)
- Update Webpack build plugins Copy Webpack Plugin and Source Map Loader. (7ad650a)
- Update ESLint and associated plugins, WP ESLint plugin and WP Prettier. (15c37e5)
- Update non-breaking NPM dependencies (6d153e1):
    - WordPress Babel preset: update to latest version.
    - WordPress dependency extraction Webpack plugin: update to latest version.
    - NPM package linter: update to latest version.
    - PostCSS CLI: update to the latest version.
    - Stylelint: update to the latest version.
    - Webpack, Webpack Bundle Analyzer plugin, and Webpack CLI: update to the latest versions.

## 0.4.2 (2020-06-10)

### Changed

- Rename "master" branch to "stable." See the Internet Engineering Task Force (IEFT), [Terminology, Power and Oppressive Language](https://tools.ietf.org/id/draft-knodel-terminology-00.html#rfc.section.1.1.1). (ee09b76)

## 0.4.1 (2020-04-22)

### Fixed

- :bug: Fix #27 Switch to `Toolbar` component because `ToolbarGroup` causes undefined component error.

### Changed

- Move `HeadingLevelIcon` component to a separate file.

## 0.4.0 (2020-04-16)

### Fixed

- :bug: Fix #22 action button on Notification block getting reinserted after removal.
- :alien: Fix Notification block layout in block editor after WP 5.4 markup changes (@see https://make.wordpress.org/core/2020/03/02/markup-and-style-related-changes/).
- :bug: Fix #20 restrict Notification block paragraph width only when action button is present.

### Changed

- Add example content for the Sidebar block.
- Add example content for the Search Filter block.
- Add example content for the Notification block.
- Add example content for the Callout block.
- :wrench: Enable `postcss-preset-env` PostCSS plugin nesting rules.
- :arrow_up: @wordpress/babel-preset-default => 4.12.1
- :arrow_up: @wordpress/dependency-extraction-webpack-plugin => 2.5.0
- :arrow_up: @wordpress/npm-package-json-lint-config => 3.0.0
- :arrow_up: npm-package-json-lint => 5.0.0
- :arrow_up: stylelint => 13.3.2
- :arrow_up: webpack-bundle-analyzer => 3.7.0

### Added

- :sparkles: Accordion block with expand- and collapse-all buttons and heading level selector.
- :milky_way: Accordion block accessible frontend controls.
- :art: Accordion block frontend and editor styles.
- :wrench: Source directory build process for frontend icons.

## 0.3.1 (2020-04-07)

### Fixed

- :bug: Fix #18 load styles on all archive pages to avoid `has_block()` limitations.

### Changed

- Increment tested up to => 5.4.
- :art: Replace default icon for Callout block with custom icon.
- :art: Replace default icon for Notification block with custom icon.
- :arrow_up: @wordpress/babel-preset-default => 4.11.0
- :arrow_up: @wordpress/dependency-extraction-webpack-plugin => 2.4.0
- :arrow_up: @wordpress/eslint-plugin => 4.1.0
- :arrow_up: babel-loader => 8.1.0
- :arrow_up: babel-loader => 8.1.0
- :arrow_up: stylelint => 13.3.0
- :arrow_up: webpack => 4.42.1
- :arrow_up: webpack-bundle-analyzer => 3.6.1

## 0.3.0 (2020-02-21)

### Fixed

- Fix #12 remove deprecated sudo key from Travis config.
- Fix #14 update Travis config to set linux as the os.
- Fix #13 use Prettier to maintain JS codebase and fix issues.
- Fix #10 add transform to help convert prior-syntax sidebar blocks into the new syntax.

### Changed

- :wrench: Ignore the new Prettier config file on export.
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
