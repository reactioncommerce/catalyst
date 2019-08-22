import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import defaultTheme from "@material-ui/core/styles/defaultTheme";
import colors from "./colors";

const breakpoints = createBreakpoints({});
const toolbarHeight = 80;
const toolbarMobileHeight = 54;

// Colors
export const colorPrimaryMain = colors.coolGrey;
export const colorSecondaryMain = colors.reactionBlue;

// Spacing
export const defaultSpacingUnit = 8;
export const drawerWidth = 280;
export const detailDrawerWidth = 400;

// Typography
export const fontFamily = "'Source Sans Pro', 'Helvetica Neue', Helvetica, sans-serif";
export const defaultFontSize = 16;
export const fontWeightLight = 400;
export const fontWeightRegular = 400;
export const fontWeightMedium = 500;
export const fontWeightSemiBold = 600;
export const fontWeightBold = 700;

// Typography - Letter-spacing
export const captionLetterSpacing = 0.28;
export const body2LetterSpacing = 0.28;
export const body1LetterSpacing = 0.3;
export const body1BoldLetterSpacing = 0.3;
export const subtitle2LetterSpacing = 0.24;
export const subtitle1LetterSpacing = 0.26;
export const h6LetterSpacing = 0.24;
export const h5LetterSpacing = 0.5;
export const h4LetterSpacing = 0.5;
export const h3LetterSpacing = 0.42;
export const h2LetterSpacing = 0.35;
export const h1LetterSpacing = 0.42;

// Icons
export const smallFontIconSize = 17;

export const rawMuiTheme = {
  palette: {
    colors, // TODO: De-structure these colors into various MUI properties rather than using them from this object
    primary: {
      light: colors.coolGrey300,
      main: colorPrimaryMain,
      dark: colors.coolGrey400
    },
    secondary: {
      light: colors.coolGrey300,
      main: colorSecondaryMain,
      dark: colors.coolGrey400
    },
    divider: colors.black10,
    text: {
      primary: colors.coolGrey500,
      secondary: colors.black60,
      secondaryActive: colors.white,
      active: "#8acef2"
    },
    action: {
      hover: colors.reactionBlue100,
      selected: colors.black10
    }
  },
  typography: {
    fontSize: defaultFontSize,
    fontFamily,
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    fontWeightSemiBold,
    fontWeightBold,
    useNextVariants: true,
    button: {
      fontSize: defaultFontSize,
      fontWeight: fontWeightSemiBold,
      letterSpacing: body1BoldLetterSpacing,
      lineHeight: 1.5,
      textTransform: "capitalize"
    },
    h1: {
      color: colors.coolGrey500,
      fontSize: defaultFontSize * 1.5,
      letterSpacing: h1LetterSpacing,
      lineHeight: 1.25
    },
    h2: {
      color: colors.coolGrey500,
      fontSize: defaultFontSize * 1.25,
      letterSpacing: h2LetterSpacing,
      lineHeight: 1.5
    },
    h3: {
      color: colors.coolGrey500,
      fontSize: defaultFontSize * 1.125,
      letterSpacing: h3LetterSpacing,
      lineHeight: 1.25
    },
    h4: {
      color: colors.coolGrey500,
      fontSize: defaultFontSize,
      letterSpacing: h4LetterSpacing,
      lineHeight: 1.25
    },
    h5: {
      color: colors.coolGrey500,
      fontSize: defaultFontSize * 0.875,
      letterSpacing: h5LetterSpacing,
      lineHeight: 1.25
    },
    h6: {
      color: colors.coolGrey500,
      fontSize: defaultFontSize * 0.75,
      letterSpacing: h6LetterSpacing,
      lineHeight: 1.46
    },
    body1: {
      color: colors.coolGrey500,
      fontSize: defaultFontSize,
      letterSpacing: body1LetterSpacing,
      lineHeight: 1.5
    },
    body2: {
      color: colors.coolGrey500,
      fontSize: defaultFontSize * 0.875,
      letterSpacing: body2LetterSpacing,
      lineHeight: 1.25
    },
    caption: {
      color: colors.coolGrey500,
      fontSize: defaultFontSize * 0.875,
      letterSpacing: captionLetterSpacing,
      lineHeight: 1.25
    },
    subtitle1: {
      color: colors.coolGrey500,
      fontSize: defaultFontSize * 0.875,
      letterSpacing: subtitle1LetterSpacing,
      lineHeight: 1.71
    },
    subtitle2: {
      color: colors.coolGrey500,
      fontSize: defaultFontSize * 0.75,
      letterSpacing: subtitle2LetterSpacing,
      lineHeight: 1.46
    }
  },
  shadows: [
    "none",
    "0 2px 2px 0 rgba(0, 0, 0, 0.05);",
    "0 3px 6px 0 rgba(0, 0, 0, 0.05);",
    "0 5px 10px 0 rgba(0, 0, 0, 0.05);",
    "0 8px 16px 0 rgba(0, 0, 0, 0.05);",
    "0 13px 26px 0 rgba(0, 0, 0, 0.05)",
    "0px 13px 26px 0 rgba(0,0,0,0.05);",
    "0px 13px 26px 0 rgba(0,0,0,0.05);",
    "0px 13px 26px 0 rgba(0,0,0,0.05);",
    "0px 13px 26px 0 rgba(0,0,0,0.05);",
    "0px 13px 26px 0 rgba(0,0,0,0.05);",
    "0px 13px 26px 0 rgba(0,0,0,0.05);",
    "0px 13px 26px 0 rgba(0,0,0,0.05);",
    "0px 13px 26px 0 rgba(0,0,0,0.05);",
    "0px 13px 26px 0 rgba(0,0,0,0.05);",
    "0px 13px 26px 0 rgba(0,0,0,0.05);",
    "0px 13px 26px 0 rgba(0,0,0,0.05);",
    "0px 13px 26px 0 rgba(0,0,0,0.05);",
    "0px 13px 26px 0 rgba(0,0,0,0.05);",
    "0px 13px 26px 0 rgba(0,0,0,0.05);",
    "0px 13px 26px 0 rgba(0,0,0,0.05);",
    "0px 13px 26px 0 rgba(0,0,0,0.05);",
    "0px 13px 26px 0 rgba(0,0,0,0.05);",
    "0px 13px 26px 0 rgba(0,0,0,0.05);",
    "0px 13px 26px 0 rgba(0,0,0,0.05);"
  ],
  shape: {
    borderRadius: 2
  },
  dimensions: {
    drawerWidth,
    detailDrawerWidth
  },
  mixins: {
    leadingPaddingWhenPrimaryDrawerIsOpen: {
      paddingLeft: drawerWidth + (defaultSpacingUnit * 2)
    },
    trailingPaddingWhenDetailDrawerIsOpen: {
      paddingRight: detailDrawerWidth + (defaultSpacingUnit * 2)
    },
    toolbar: {
      minHeight: toolbarHeight,
      [`${breakpoints.up("xs")} and (orientation: landscape)`]: {
        minHeight: toolbarMobileHeight,
        paddingLeft: defaultSpacingUnit,
        paddingRight: defaultSpacingUnit
      },
      [`${breakpoints.up("xs")} and (orientation: portrait)`]: {
        minHeight: toolbarMobileHeight,
        paddingLeft: defaultSpacingUnit,
        paddingRight: defaultSpacingUnit
      },
      [breakpoints.up("sm")]: {
        minHeight: toolbarHeight
      }
    }
  },
  // Override default props
  props: {
    MuiAppBar: {
      elevation: 0
    },
    MuiCardHeader: {
      titleTypographyProps: {
        variant: "h4"
      }
    },
    MuiDialogContentText: {
      color: "inherit"
    },
    MuiListItemText: {
      primaryTypographyProps: {
        variant: "body1"
      }
    }
  },
  // Override defined theme properties
  overrides: {
    MuiAppBar: {
      root: {
        height: toolbarHeight,
        [`${breakpoints.up("xs")} and (orientation: landscape)`]: {
          height: toolbarMobileHeight
        },
        [`${breakpoints.up("xs")} and (orientation: portrait)`]: {
          height: toolbarMobileHeight
        },
        [breakpoints.up("sm")]: {
          height: toolbarHeight
        }
      },
      colorPrimary: {
        backgroundColor: colors.white,
        borderBottom: `1px solid ${colors.black05}`
      },
      colorSecondary: {
        backgroundColor: "#3C4950" // colors.coolGrey with 20% opacity, opaque
      },
      colorDefault: {
        backgroundColor: colors.white,
        borderBottom: `1px solid ${colors.black05}`
      }
    },
    MuiButton: {
      root: {
        padding: `${defaultSpacingUnit}px ${defaultSpacingUnit * 2}px`,
        textTransform: "initial"
      },
      text: {
        color: colors.coolGrey400,
        fontWeight: fontWeightRegular,
        fontSize: defaultFontSize * 0.875,
        padding: `${defaultSpacingUnit}px ${defaultSpacingUnit * 2}px`
      },
      outlined: {
        // Removed 1px of padding from the top/bottom to account for the border
        // which adds 1px to the top/bottom. This makes the button height even
        // with the contained variant.
        padding: `${defaultSpacingUnit - 1}px ${defaultSpacingUnit * 2}px`
      },
      outlinedPrimary: {
        border: `1px solid ${colorPrimaryMain}`,
        color: colors.coolGrey500
      },
      outlinedSecondary: {
        border: `1px solid ${colorSecondaryMain}`
      },
      sizeSmall: {
        fontSize: defaultFontSize * 0.875
      }
    },
    MuiButtonGroup: {
      groupedContained: {
        "&:not(:last-child)": {
          borderRight: `1px solid ${colors.white}`
        }
      },
      groupedContainedPrimary: {
        "&:not(:last-child)": {
          borderRight: `1px solid ${colors.white}`
        }
      },
      groupedContainedSecondary: {
        "&:not(:last-child)": {
          borderRight: `1px solid ${colors.white}`
        }
      }
    },
    MuiCard: {
      root: {
        border: `1px solid ${colors.black10}`,
        paddingLeft: defaultSpacingUnit * 2,
        paddingRight: defaultSpacingUnit * 2,
        paddingTop: defaultSpacingUnit,
        paddingBottom: defaultSpacingUnit
      }
    },
    MuiCheckbox: {
      root: {
        color: colors.coolGrey500
      },
      colorSecondary: {
        "&$checked": {
          color: colors.coolGrey500
        },
        "&$disabled": {
          color: colors.coolGrey100
        }
      }
    },
    MuiChip: {
      root: {
        fontSize: defaultFontSize * 0.875,
        letterSpacing: captionLetterSpacing,
        height: 30
      },
      deletable: {
        "&:hover": {
          cursor: "pointer"
        }
      },
      deletableColorPrimary: {
        "backgroundColor": colors.black02,
        "border": `1px solid ${colors.black30}`,
        "color": colors.coolGrey500,
        "&:hover, &:focus, &:active": {
          backgroundColor: colors.black05
        }
      },
      deleteIconColorPrimary: {
        "color": colors.coolGrey,
        "fontSize": smallFontIconSize,
        "&:hover, &:focus, &:active": {
          color: colors.reactionBlue500
        }
      },
      deletableColorSecondary: {
        "color": colors.coolGrey500,
        "border": `1px solid ${colors.coolGrey300}`,
        "backgroundColor": colors.reactionBlue100,
        "&:hover, &:focus, &:active": {
          backgroundColor: colors.darkBlue100
        }
      },
      deleteIconColorSecondary: {
        "color": colors.coolGrey,
        "&:hover, &:focus, &:active": {
          color: colors.reactionBlue500
        }
      },
      sizeSmall: {
        height: 28
      },
      deleteIconSmall: {
        margin: "0 4px 0 0",
        fontSize: smallFontIconSize
      }
    },
    MuiDialogTitle: {
      root: {
        padding: defaultTheme.spacing(4, 4, 1, 4)
      }
    },
    MuiDialogContent: {
      root: {
        padding: defaultTheme.spacing(1, 4)
      }
    },
    MuiDialogActions: {
      root: {
        padding: defaultTheme.spacing(1, 4, 4, 4)
      }
    },
    MuiDrawer: {
      paper: {
        width: drawerWidth
      },
      paperAnchorLeft: {
        border: "none",
        backgroundColor: colors.darkBlue500,
        color: colors.black15
      },
      paperAnchorDockedLeft: {
        border: "none"
      },
      paperAnchorRight: {
        border: "none",
        backgroundColor: colors.black02,
        width: detailDrawerWidth
      },
      paperAnchorDockedRight: {
        border: "none"
      }
    },
    MuiFab: {
      sizeSmall: {
        width: 36,
        height: 36
      }
    },
    MuiOutlinedInput: {
      inputMarginDense: {
        paddingTop: 8,
        paddingBottom: 8
      }
    },
    MuiSvgIcon: {
      root: {
        // This is a hack to fix issues with the base font-size in the bootstrap
        // theme being 14px, not allowing for `pxToRem(24)` to be the correct value for MUI icons.
        // This should be revisited once the Reaction admin no longer has a need for bootstrap.
        fontSize: 24
      }
    },
    MuiTableCell: {
      root: {
        borderBottom: `1px solid ${colors.black10}`
      },
      /* Styles applied to the root element if `padding="checkbox"`. */
      paddingCheckbox: {
        padding: "4px 0 4px 4px"
      }
    },
    MuiPaper: {
      root: {
        border: `1px solid ${colors.black10}`
      },
      elevation0: {
        border: "none"
      }
    }
  }
};

export default createMuiTheme(rawMuiTheme);
