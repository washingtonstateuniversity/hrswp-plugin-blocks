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

## 3.2.0-beta.1 (:construction: TBD)

### Added

- Create Salary Data block. (b86b44b)
- Create List Awards block. (1641b53)
- Add plugin dependency check for required SQLSRV DB plugin. (1641b53)
- Create HRSWP external content block category. (1641b53)
- Add REST API store, queries, and sideload image class; update to handle award image data. (b32fa2e, 1641b53)

## 3.1.1 (2022-06-30)

### Fixed

- Fix sidebar block gap missing after core columns change.

## 3.1.0 (2022-06-29)

### Added

- Create plugin settings with protected post ID option. (df4a90d)

### Changed

- Hide publication controls from non-admin users for select pages. (df4a90d)
- Convert setup class to use asset loader functions. (71be3d3)
- Use for kebab case for class handles in place of snake case. (71be3d3)
- Update NPM and Composer dev-dependencies. (96cc837)

### Removed

- Remove plugin status option for tracking version in favor of asset file version. (dc84044)

## 3.0.0 (2022-06-02)

### Breaking changes

- The HRSWP Spacer block has been removed.
- The project now uses the `@wordpress/scripts` package and build targets have changed.

### Added

- New file, `blocks.php`, to handle server-side block registration instead of in the setup class. (886ccbb)
- A Markdownlint ignore file to avoid errors in the license or changelog. (886ccbb)

### Changed

- Bump WP tested-to to 6.0.0.
- Switch to using the `@wordpress/scripts` package for handling build tools. Update npm scripts, dependencies, and build tool configs. (886ccbb, 6a5f1da, e0158c6, 60b01f6)
- Correct block.json `editorScript` and `editorStyle` props to use registered assets. (886ccbb)
- Update classes structure and block registration for better `wp-scripts` compatibility. (886ccbb)
- Fix #97 Use GitHub forms for issues. (80e27ad)
- Simplify `.gitignore` file. (886ccbb)
- Update callout block for WP Block API v2. (8a2f74f)
- Update notification block for WP Block API v2. (886ccbb)
- Refactor posts list block to use API v2 and refactor markup. (389911f)
- Implement Block API v2 script loading with registered assets for frontend and editor. (a0c63db)
- Prefer import to const for WP deps with WP Scripts pkg. (e712c37, 16b7910)
- Update PHP linter config to check PHP 7.4+ and be more lean. (16a476c)
- Replace `phpcompatibility/php-compatibility` with `phpcompatibility/phpcompatibility-wp`. (16a476c)
- Disable WP experimental APIs ESLint rule in ESLint config. (21a0a51)
- Upgrade @wordpress/icons from 8.4.0 to 9.0.0. (e695cde)
- Bump minimist from 1.2.5 to 1.2.6. (2bb788b)

### Removed

- Fix #91 Return to using WP Core spacer block. (32eeee8, d7789a2)

### Fixed

- Fix #94 Sidebar missing column gap in editor. (16b7910)
- Fix #93 Accordion block appender button positioning. (e712c37)
- Fix broken heading drowdown in Accordion block. (e712c37)

## 2.2.1 (2022-03-15)

### Changed

- Bump WP tested-to to 5.9.2.

## 2.2.0 (2022-03-10)

### Added

- Create HRS version of core spacer block with height increments. (15e6316)

### Changed

- Bump WP tested-to to 5.9.1.
- Bump PHP required version from 7.0 to 7.3.
- Hide some lesser-used blocks from the inserter. (ed9bab9)
- Upgrade stylelint from 13.13.1 to 14.5.0. (50b2471, d57cc26)
- Upgrade @wordpress/stylelint-config from 19.1.0 to 20.0.1. (50b2471, d57cc26)
- Upgrade @wordpress/eslint-plugin from 9.3.0 to 10.0.1. (b7a817b)
- Update eslint from 8.7.0 to 8.8.0. (b7a817b)
- Update webpack from 5.67.0 to 5.68.0. (149b978)
- Update @babel/core from 7.16.12 to 7.17.2. (03c147f)
- Update @babel/runtime from 7.16.7 to 7.17.2. (03c147f)
- Update @wordpress/babel-preset-default from 6.4.1 to 6.5.1. (03c147f)
- Update postcss-preset-env from 7.2.3 to 7.3.1. (ed285b5)
- Update @wordpress/dependency-extraction-webpack-plugin from 3.2.1 to 3.3.1. (e36767c)
- Update roave/security-advisories dev-master 341bf2d to 2ec9ad6. (0635bb5)

### Security

- Bump dealerdirect/phpcodesniffer-composer-installer from 0.7.1 to 0.7.2. (ac9ba3e)
- Bump @wordpress/npm-package-json-lint-config from 4.1.0 to 4.1.1. (b208569)
- Bump cssnano from 5.0.16 to 5.0.17. (fd730b9)
- Bump postcss from 8.4.5 to 8.4.6. (ed285b5)
- Bump copy-webpack-plugin from 10.2.1 to 10.2.4. (486d39e)

## 2.1.0 (2022-01-25)

### Added

- Add `stylelint-a11y` package. (d04f200)

### Changed

- Bump WP tested-to to 5.9.0.
- Bump WP required version to 5.9.
- Update Stylelint to use a11y rules and ignore selector class pattern. (d04f200)
- Refactor Button and Buttons blocks and remove unused parts to account for WP 5.9 changes. (28a1472)
- Restore class-based layout styles for the buttons block. (c55b3a3)

### Removed

- Remove formatting options from button text. (c55b3a3)

### Fixed

- Fix #83 update `useInnerBlockProps` for WP 5.9. (e8860a2)
- Fix #86 update `useInnerBlockProps` for WP 5.9. (c4f632b)
- Fix #85 `useInnerBlocksProps` no longer experimental in 5.9. (38bec12)
- Fix #84 accordion panel border value change on hover. (38bec12)
- Fix sticky vertical layout class. (2d38131)
- Update copy-webpack-plugin from 10.0.0 to 10.2.1. (a6a7879)
- Update webpack from 5.64.4 to 5.67.0. (1104804)
- Update postcss-cli from 9.0.2 to 9.1.0. (2822059)
- Update postcss-preset-env from 7.0.1 to 7.2.3. (2822059)
- Update eslint from 8.3.0 to 8.7.0. (cceb3c6)
- Upgrade roave/security-advisories from dev-master 88c4d97 to dev-master 341bf2d. (f6d3276)

### Security

- Bump squizlabs/php_codesniffer from 3.6.1 to 3.6.2. (b421658)
- Bump postcss from 8.4.4 to 8.4.5. (2822059)
- Bump webpack-cli from 4.9.1 to 4.9.2. (1104804)
- Bump source-map-loader from 3.0.0 to 3.0.1. (9431522)
- Bump cssnano from 5.0.12 to 5.0.16. (fe7b326)
- Bump @babel/core from 7.16.0 to 7.16.12. (9b97dbd)
- Bump @babel/runtime from 7.16.3 to 7.16.7. (9b97dbd)
- Bump nanoid from 3.1.30 to 3.2.0. (f5d89a1)

## 2.0.1 (2021-12-13)

- Fix #81 move lifecycle methods out of class. (b304393)

## 2.0.0 (2021-12-02)

### Added

- Add GitHub releases API URL as Update URI. (d33ce8b)

### Changed

- Add Babel parser options to eslint config. (7cd80ef)
- Update notification block for brand updates. (dc7e0fe)
- Update callout block for brand changes. (dc7e0fe)
- Update posts list block styles for brand updates. (dc7e0fe)
- Update colors to use HRS theme variables, close #76. (d4c137d)
- Replace color variables with updated versions. (d4c137d, dc7e0fe)
- Replace typography with HRS theme variables, close #77. (d4c137d)
- Update postcss from 8.3.5 to 8.4.4. (c6c2c49, 6cb75e0)
- Upgrade postcss-cli from 8.3.1 to 9.0.2. (cf35749)
- Upgrade postcss-preset-env from 6.7.0 to 7.0.1. (cf35749)
- Upgrade copy-webpack-plugin from 9.0.1 to 10.0.0. (759471e)
- Upgrade resolve-bin from 0.4.1 to 1.0.0. (2033189)
- Upgrade eslint from 7.30.0 to 8.3.0. (7cd80ef)
- Update @wordpress/eslint-plugin from 9.0.6 to 9.3.0. (7cd80ef)
- Update @wordpress/stylelint-config from 19.0.5 to 19.1.0. (f2c922e)
- Update npm-package-json-lint from 5.1.0 to 5.4.2. (5074100)
- Update @wordpress/npm-package-json-lint-config from 4.0.5 to 4.1.0. (5074100)
- Update @babel/core from 7.14.6 to 7.16.0. (3169ee5)
- Update @babel/runtime from 7.14.6 to 7.16.3. (3169ee5)
- Update babel-loader from 8.1.0 to 8.2.3. (3169ee5)
- Update @wordpress/babel-preset-default from 6.2.0 to 6.4.1. (3169ee5)
- Update webpack from 5.44.0 to 5.64.4. (a944670, 950ed8b)
- Update webpack-cli from 4.7.2 to 4.9.1. (a944670)
- Update webpack-bundle-analyzer from 4.4.2 to 4.5.0. (a944670)
- Update @wordpress/dependency-extraction-webpack-plugin from 3.1.4 to 3.2.1. (a944670)

### Removed

- Remove small button style. (dc7e0fe)
- Remove deprecated blocks and scripts, close #79. (10404e0)

### Fixed

- Fix secondary button selector specificity. (af5b32c)
- Fix overeager callout block title styles. (dc7e0fe)

### Security

- Bump squizlabs/php_codesniffer from 3.6.0 to 3.6.1. (683f6a3)
- Bump cssnano from 5.0.6 to 5.0.12. (af5b32c, bd70932)
- Bump ansi-regex from 5.0.0 to 5.0.1. (3f123da)
- Bump nth-check from 2.0.0 to 2.0.1. (aabb672)
- Bump path-parse from 1.0.6 to 1.0.7. (2fdcc57)

## 1.0.3 (2021-07-12)

### Changed

- Bump WP tested-to to 5.8.0. (0d210eb)
- Update webpack from 5.40.0 to 5.44.0. (c26ace5)

### Security

- Bump sirbrillig/phpcs-variable-analysis from 2.11.1 to 2.11.2. (c26ace5)
- Bump resolve-bin from 0.4.0 to 4.4.1. (c26ace5)
- Bump eslint from 7.29.0 to 7.30.0. (c26ace5)

## 1.0.2 (2021-06-28)

### Changed

- Update eslint from 7.27.0 to 7.29.0. (62a6aab)
- Update webpack from 5.37.1 to 5.40.0. (62a6aab)
- Update @wordpress/babel-preset-default from 6.1.0 to 6.2.0. (62a6aab)

### Fixed

- Fix #69 outline style buttons need background. (4023822)

### Security

- Bump trim-newlines from 3.0.0 to 3.0.1. (3d07281)
- Bump sirbrillig/phpcs-variable-analysis from 2.11.0 to 2.11.1. (8f453a5)
- Bump @wordpress/eslint-plugin from 9.0.5 to 9.0.6. (62a6aab)
- Bump @wordpress/npm-package-json-lint-config from 4.0.4 to 4.0.5. (62a6aab)
- Bump @wordpress/stylelint-config from 19.0.4 to 19.0.5. (62a6aab)
- Bump postcss from 8.3.0 to 8.3.5. (62a6aab)
- Bump cssnano from 5.0.4 to 5.0.6. (62a6aab)
- Bump webpack-cli from 4.7.0 to 4.7.2. (62a6aab)
- Bump copy-webpack-plugin from 9.0.0 to 9.0.1. (62a6aab)
- Bump @wordpress/dependency-extraction-webpack-plugin from 3.1.3 to 3.1.4. (62a6aab)
- Bump @babel/core and @babel/runtime from 7.14.3 to 7.14.6. (62a6aab)

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
