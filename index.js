'use strict';
const fs     = require('fs');
const path   = require('path');
const helper = require('./lib/helper');

const styles     = fs.readFileSync(path.join(__dirname, 'styles.css'), 'utf8');
const backgroundColor = '#282828';
const foregroundColor = '#F8F8F0';
const mainBorderWidth = '2px';

const monokaiColors = {
    black:        backgroundColor,
    red:          '#F92672',
    green:        '#A6E22E',
    yellow:       '#FD971F',
    blue:         '#AE81FF',
    magenta:      '#66D9EF',
    cyan:         '#38CCD1',
    white:        '#ffffff',
    lightBlack:   '#49483E',
    lightRed:     '#F92672',
    lightGreen:   '#A6E22E',
    lightYellow:  '#FD971F',
    lightBlue:    '#AE81FF',
    lightMagenta: '#66D9EF',
    lightCyan:    '#38CCD1',
    lightWhite:   '#ffffff',
    colorCubes:   '#ffffff',
    grayscale:    foregroundColor
};

const tabActiveBackground = '#424242';
const borderColor     = monokaiColors.lightBlack;

const colors = {

    black:        backgroundColor,
    red:          '#F92672',
    green:        '#A6E22E',
    yellow:       '#FD971F',
    blue:         '#AE81FF',
    magenta:      '#66D9EF',
    cyan:         '#38CCD1',
    white:        '#ffffff',
    lightBlack:   '#49483E',
    lightRed:     '#F92672',
    lightGreen:   '#A6E22E',
    lightYellow:  '#FD971F',
    lightBlue:    '#AE81FF',
    lightMagenta: '#66D9EF',
    lightCyan:    '#38CCD1',
    lightWhite:   '#ffffff',
    colorCubes:   '#ffffff',
    grayscale:    foregroundColor
  };

exports.decorateConfig = config => {

  const monokaiTheme = Object.assign({ cursorColor: colors.cyan }, config.monokaiTheme)
  const borderWidth = monokaiTheme.borderWidth || mainBorderWidth;
  const cursorColor = monokaiTheme.cursorColor;

    return Object.assign({}, config, {

        backgroundColor: backgroundColor,
        foregroundColor: foregroundColor,
        cursorColor,
        cursorShape:     config.cursorShape || "BEAM",
        colors,
        css:             (config.css || '') + helper.replaceLiterals(styles, {
            colors,
            borderWidth,
            borderColor,
            backgroundColor,
            tabActiveBackground
        })
    });


};

exports.getTabsProps = (parentProps, props) => {
    if (props.tabs.length <= 1) {
        // Just one open tab
    } else {
        // More than one opened tab
    }

    return Object.assign({}, parentProps, props)
};

exports.onWindow = (browserWindow) => {
    browserWindow.setVibrancy('dark');
};
