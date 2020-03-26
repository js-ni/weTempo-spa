/**
 * @file components/presentationals/WeCard/index.js
 * @name Component/Presentational/WeCard
 * @classdesc Component for card context
 * @memberof Component/Presentationals
 * @since v1.0.0
 * @author boykland/clenondavis <clenondavis@outlook.com>
 * @example
 * <WeSearch />
 */

//#region lib
import React from "react";
import PropTypes from "prop-types";
//#endregion
//#region assets
import placeholderImg from "../../../assets/img/placeholder.png";
//#endregion
//#region antd
import { Card, Badge } from "antd";
import { CommentOutlined, NotificationOutlined } from "@ant-design/icons";
//#endregion
//#region components
//#endregion

const WeCard = ({ title, subTitle, description }) => {
  return (
    <Card
      cover={<img alt="example" src={placeholderImg} />}
      hoverable
      actions={[
        <Badge
          count={0}
          onClick={() => {
            console.log("click on comment");
          }}
        >
          <CommentOutlined key="comment" />
        </Badge>,
        <Badge
          count={0}
          onClick={() => {
            console.log("click on comment");
          }}
        >
          <NotificationOutlined />
        </Badge>
      ]}
    >
      <h2>{subTitle}</h2>
      <h1>{title}</h1>
      <p>{description}</p>
    </Card>
  );
};

WeCard.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  description: PropTypes.string
};
export default WeCard;
