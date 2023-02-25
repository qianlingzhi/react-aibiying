import PropTypes from "prop-types";
import React, { memo } from "react";
import SectionFooter from '@/components/section-footer'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import { SectionWrapper } from "./style";

const HomeSectionV2 = memo((props) => {
  const { infoData } = props
  console.log(infoData)
  return (
    <SectionWrapper className="content">
      <div className="good-price">
        <SectionHeader title={infoData.title}></SectionHeader>
        <SectionRooms roomList={infoData.dest_list['佛山']}></SectionRooms>
        <SectionFooter ></SectionFooter>
      </div>
    </SectionWrapper>
  );
});

HomeSectionV2.propTypes = {
  infoData: PropTypes.object
};

export default HomeSectionV2;
