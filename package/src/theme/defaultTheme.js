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
      letterSpacing: 0.3,
      fontWeight: fontWeightSemiBold
    },
    h1: {
      color: colors.coolGrey500,
      fontSize: defaultFontSize * 1.5,
      lineHeight: 1.25
    },
    h2: {
      color: colors.coolGrey500,
      fontSize: defaultFontSize * 1.25,
      lineHeight: 1.25
    },
    h3: {
      color: colors.coolGrey500,
      fontSize: defaultFontSize * 1.125,
      lineHeight: 1.25
    },
    h4: {
      color: colors.coolGrey500,
      fontSize: defaultFontSize,
      fontWeight: fontWeightSemiBold,
      lineHeight: 1.25
    },
    h5: {
      color: colors.coolGrey500,
      fontSize: defaultFontSize * 0.875,
      fontWeight: fontWeightSemiBold,
      lineHeight: 1.25
    },
    h6: {
      color: colors.coolGrey500,
      fontSize: defaultFontSize * 0.75,
      fontWeight: fontWeightSemiBold,
      lineHeight: 1.25
    },
    body1: {
      color: colors.black70,
      fontSize: defaultFontSize,
      lineHeight: 1.5
    },
    body2: {
      color: colors.coolGrey500,
      fontSize: defaultFontSize * 0.875,
      lineHeight: 1.5
    },
    caption: {
      color: colors.black30,
      letterSpacing: captionLetterSpacing
    },
    subtitle1: {
      fontSize: defaultFontSize * 0.875,
      lineHeight: 1.5
    },
    subtitle2: {
      fontSize: defaultFontSize * 0.75,
      lineHeight: 1.5
    }
  },
  shadows: [
    "none",
    "0px 2px 2px 0px rgba(0,0,0,0.05)",
    "0px 3px 6px 0px rgba(0,0,0,0.05)",
    "0px 5px 10px 0 rgba(0,0,0,0.05);",
    "0px 8px 16px 0 rgba(0,0,0,0.05);",
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
        lineHeight: 1.5,
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
        letterSpacing: captionLetterSpacing
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
        height: 30
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
        borderRight: "none",
        backgroundColor: colors.darkBlue500,
        color: colors.black15
      },
      paperAnchorDockedLeft: {
        borderRight: "none"
      },
      paperAnchorRight: {
        borderLeft: "none",
        backgroundColor: colors.black02,
        width: detailDrawerWidth
      },
      paperAnchorDockedRight: {
        borderRight: "none"
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
    }
  }
};

export default createMuiTheme(rawMuiTheme);
