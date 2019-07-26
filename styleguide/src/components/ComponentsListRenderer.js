import React, { useState } from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import Styled from "rsg-components/Styled";
import { getHash } from "react-styleguidist/lib/client/utils/handleHash";
import { Collapse, ListItem } from "@material-ui/core";

const styles = ({ color, fontSize }) => ({
  item: {
    "display": "block !important",
    "cursor": "pointer",
    "fontSize": fontSize.base,
    "paddingTop": 4,
    "paddingBottom": 4,
    "&:hover > span": {
      cursor: "pointer",
      backgroundImage: "linear-gradient(#f7fdff 50%, #a7edff 50%) !important",
      backgroundRepeat: "repeat-x !important",
      backgroundSize: "8px 4px !important",
      backgroundPositionY: "0.9em !important"
    }
  },
  text: {
    color: color.link,
    fontSize: 14,
    letterSpacing: "0.4px !important"
  },
  heading: {
    color: color.link,
    letterSpacing: "0.6px !important",
    textDecoration: "none !important"
  },
  isSelected: {
    fontWeight: "bold",
    display: "inline !important",
    backgroundImage: "linear-gradient(#f7fdff 50%, #a7edff 50%) !important",
    backgroundRepeat: "repeat-x !important",
    backgroundSize: "8px 4px !important",
    backgroundPositionY: "0.9em !important"
  },
  child: {
    backgroundColor: "green"
  }
});

/**
 * Component List renderer
 * @param {Object} param Component props
 * @returns {node} React element
 */
export function ComponentsListRenderer({ classes, items: itemsProp }) {
  const items = itemsProp.filter((item) => item.visibleName);

  if (!items.length) {
    return null;
  }

  const windowHash = window.location.pathname + getHash(window.location.hash);
  return items.map(({ heading, visibleName, href, content, shouldOpenInNewTab, sectionDepth }) => {
    const depth = sectionDepth || 0;
    const [isOpen, setIsOpen] = useState(depth < 2 || windowHash.includes(visibleName));
    const isItemSelected = href.endsWith(encodeURI(windowHash));

    return [
      <ListItem
        className={classes.item}
        target={shouldOpenInNewTab ? "_blank" : undefined}
        component="a"
        href={href}
        key={href}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        style={{
          paddingTop: 4,
          paddingBottom: 4,
          paddingLeft: (Math.abs(depth - 2) * 16) + 16
        }}
      >
        <span
          className={cx(classes.text, {
            [classes.heading]: heading,
            [classes.isSelected]: isItemSelected
          })}
        >
          {visibleName}
        </span>
      </ListItem>,
      <Collapse in={isOpen} key={`collapse:${href}`}>
        {content}
      </Collapse>
    ];
  });
}

ComponentsListRenderer.propTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired
};

export default Styled(styles)(ComponentsListRenderer);
