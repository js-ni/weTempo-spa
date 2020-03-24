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
import { Card, Avatar } from "antd";
import PropTypes from "prop-types";
//#endregion
//#region assets
import placeholderImg from "../../../assets/img/placeholder.png";
import placeholderProfile from "../../../assets/img/placeholder-profile.png";
//#endregion

const { Meta } = Card;

const WeSearch = () => {
  return (
    <Card
      style={{ width: 300 }}
      cover={<img alt="example" src={placeholderImg} />}
      actions={[]}
    >
      <Meta
        avatar={<Avatar src={placeholderProfile} />}
        title="Card title"
        description="This is the description"
      />
    </Card>
  );
};

WeSearch.propTypes = {
  placeholder: PropTypes.string
};
export default WeSearch;
