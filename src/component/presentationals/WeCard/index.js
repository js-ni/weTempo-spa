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
// import PropTypes from "prop-types";
//#endregion
//#region assets
import placeholderImg from "../../../assets/img/placeholder.png";
//#endregion
//#region antd
import { Card, Badge } from "antd";
import { CommentOutlined } from "@ant-design/icons";
//#endregion
//#region components
import { WeList } from "../";
//#endregion

const { Meta } = Card;

const WeCard = () => {
  return (
    <Card
      style={{ width: 300 }}
      cover={<img alt="example" src={placeholderImg} />}
      hoverable
      actions={[
        <Badge count={25}>
          <CommentOutlined />
        </Badge>
      ]}
    >
      <Meta title="City Name, Country Name" description={<WeList />} />
    </Card>
  );
};

WeCard.propTypes = {};
export default WeCard;
