import PropTypes from "prop-types";
import React, { memo } from "react";
import SectionFooter from '@/components/section-footer'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import { SectionWrapper } from "./style";

const HomeSectionV1 = memo((props) => {
  const { infoData } = props
  return (
    <SectionWrapper className="content">
      <div className="good-price">
        <SectionHeader title={infoData.title}></SectionHeader>
        <SectionRooms roomList={infoData.list}></SectionRooms>
        <SectionFooter></SectionFooter>
      </div>
    </SectionWrapper>
  );
});

HomeSectionV1.propTypes = {
  infoData: PropTypes.object
};

export default HomeSectionV1;
