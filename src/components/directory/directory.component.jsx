import React from "react";
import { useSelector } from "react-redux";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";

function Directory() {
  const sections = useSelector((state) => state.directory.sections);

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => {
        return <MenuItem key={id} {...otherSectionProps} />;
      })}
    </div>
  );
}

export default React.memo(Directory);
