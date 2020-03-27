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
import { Comment, Avatar, Tooltip, Statistic, Typography } from "antd";
import PropTypes from "prop-types";
//#endregion
//#region assets
import placeholderImg from "../../../assets/img/placeholder.png";
//#endregion

const { Text } = Typography;

const WeComment = ({ text, date, statistic }) => {
  return (
    <Comment
      actions={[]}
      author={<span>boykland/clenondavis</span>}
      avatar={<Avatar src={placeholderImg} alt="User Photo" />}
      content={
        <>
          <Statistic
            title={<Text type="secondary">City Title, Country </Text>}
            value={"0 Kph"}
          />
          <p>{text}</p>
        </>
      }
      datetime={
        <Tooltip title={moment(date).format("YYYY-MM-DD hh:mm:ss")}>
          <span>{moment(date).fromNow()}</span>
        </Tooltip>
      }
    />
  );
};

WeComment.propTypes = {
  text: PropTypes.string.isRequired,
  statistic: PropTypes.object,
  date: PropTypes.string
};
WeComment.defaultProps = {};
export default WeComment;
