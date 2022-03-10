# HRSWP Blocks

[![Support Level](https://img.shields.io/badge/support-active-green.svg)](#support-level) [![Build Status](https://github.com/washingtonstateuniversity/hrswp-plugin-blocks/actions/workflows/coding-standards.yml/badge.svg)](https://github.com/washingtonstateuniversity/hrswp-plugin-blocks/actions) [![Release Version](https://img.shields.io/github/v/release/washingtonstateuniversity/hrswp-plugin-blocks)](https://github.com/washingtonstateuniversity/hrswp-plugin-blocks/releases/latest) ![WordPress tested up to version 5.9.1](https://img.shields.io/badge/WordPress-v5.9.1%20tested-success.svg) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier) [![GPLv3 License](https://img.shields.io/github/license/washingtonstateuniversity/hrswp-plugin-blocks)](https://github.com/washingtonstateuniversity/hrswp-plugin-blocks/blob/develop/LICENSE.md)

## Overview

The WSU HRS WordPress plugin provides custom blocks tailored for the [WSU Human Resource Services Theme](https://github.com/washingtonstateuniversity/hrs.wsu.edu). It also replaces some WP Core blocks, such as the Buttons block, that offer options that are not appropriate under the HRS style guide.

## Description

This plugin adds several custom blocks. Some provide relatively simple layout blocks and others provide more complex blocks that include front-end JavaScript. It adds the following blocks:

- Accordion
- Callout
- Filter
- Notification
- Posts List
- Sidebar

The Accordion and Filter blocks both include frontend JavaScript that is loaded when one of those blocks is active on a page.

The plugin also replaces the following WP Core blocks:

- Button
- Buttons
- Spacer

## Installation

This plugin is not in the WordPress plugins directory. You have to install it manually either with SFTP or from the WordPress plugins screen:

1. [Download the latest version from GitHub](https://github.com/washingtonstateuniversity/hrswp-plugin-blocks/archive/stable.zip) and rename the .zip file to: `hrswp-plugin-blocks.zip`.
2. From here you can either extract the files into your plugins directory via SFTP or navigate to the Plugins screen in the admin area of your site to upload it through the plugin uploader (steps 3-5).
3. Select Plugins > Add New and then select the "Upload Plugin" button.
4. Select "Browse" and locate the downloaded .zip file for the plugin (it **must** be a file in .zip format) on your computer. Select "Install Now."
5. You should receive a message that the plugin installed correctly. Select "Activate Plugin" or return to the plugins page to activate later.

### Updates

Please note that this plugin will not update automatically and will not notify of available updates. It is your responsibility to make sure you stay up to date with the latest version. It does include a GitHub repository URL in the Update URI field, so if you have a plugin that can update from GitHub then this plugin should be compatible with that.

### Deactivating and Deleting: Plugin Data

This plugin does not store any user information. The only data it saves is an option in the database to track the plugin status (activation status, version, etc.). Deactivating the plugin through the WordPress plugins screen UI will retain the option. Uninstalling through the WP interface will delete the option entirely. Deleting it directly from the server (not through the plugins screen UI) will circumvent this cleanup action and *will not* delete the plugin data.

## For Developers

The HRSWP Blocks plugin development environment relies on NPM and Composer. The `package.json` and `composer.json` configuration files manage dependencies for testing and building the production version of the theme. The NPM scripts in `package.json` do most of the heavy lifting. Please follow the development workflow outlined in the [Contributing guide](https://github.com/washingtonstateuniversity/hrswp-plugin-blocks/blob/develop/CONTRIBUTING.md).

### Initial Setup

1. Clone the HRSWP Blocks plugin to a directory on your computer.
2. Change into that directory.
3. Install the NPM and Composer dependencies.
4. Ensure linting and coding standards checks are working -- this should exit with zero (0) errors.
5. Create a new branch for local development.

In a terminal:

~~~bash
git clone https://github.com/washingtonstateuniversity/hrswp-plugin-blocks.git hrswp-plugin-blocks
cd hrswp-plugin-blocks
npm install
composer install
npm test -s
git checkout -b new-branch-name
~~~

### Build Commands

The following commands will handle basic build functions. (Remove the `-s` flag to show additional debug info.)

- `npm run build -s`: Remove old compiled files such as minified CSS, lint PHP and CSS, and then compile new versions.
- `npm test -s`: Check all PHP and CSS files for coding standards compliance.
- `npm run clean -s`: Remove old compiled files such as minified CSS.
- `npm run build:styles -s`: Compile CSS.

See the scripts section of `package.json` for additional available commands.

## Support Level

**Active:** WSU HRS actively works on this plugin. We plant to continue work for the foreseeable future, adding new features, enhancing existing ones, and maintaining compatability with the latest version of WordPress. Bug reports, feature requests, questions, and pull requests are welcome.

## Changelog

All notable changes are documented in the [CHANGELOG.md](https://github.com/washingtonstateuniversity/hrswp-plugin-blocks/blob/develop/CHANGELOG.md), with dates and version numbers.

## Contributing

Please submit bugs and feature requests through [GitHub Issues](https://github.com/washingtonstateuniversity/hrswp-plugin-blocks/issues). Refer to [CONTRIBUTING.md](https://github.com/washingtonstateuniversity/hrswp-plugin-blocks/blob/develop/CONTRIBUTING.md) for the development workflow and details for submitting pull requests.
