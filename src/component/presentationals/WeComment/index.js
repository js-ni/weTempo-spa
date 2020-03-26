/**
 * @file components/presentationals/WeSearch/index.js
 * @name Component/Presentational/WeSearch
 * @classdesc Component for search context
 * @memberof Component/Presentationals
 * @since v1.0.0
 * @author boykland/clenondavis <clenondavis@outlook.com>
 * @example
 * <WeSearch />
 */

//#region lib
import React from "react";
import moment from "moment";
import { Comment, Avatar, Tooltip } from "antd";
import PropTypes from "prop-types";
//#endregion
//#region assets
import placeholderImg from "../../../assets/img/placeholder.png";
//#endregion

const WeComment = ({ text }) => {
  return (
    <Comment
      actions={[]}
      author={<span>User Name</span>}
      avatar={<Avatar src={placeholderImg} alt="User Photo" />}
      content={<p>{text}</p>}
      datetime={
        <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
          <span>{moment().fromNow()}</span>
        </Tooltip>
      }
    />
  );
};

WeComment.propTypes = {
  text: PropTypes.string.isRequired
};
WeComment.defaultProps = {
  text: `We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.`
};
export default WeComment;
