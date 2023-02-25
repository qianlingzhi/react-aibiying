import PropTypes from "prop-types";
import React, { memo } from "react";
import SectionFooter from '@/components/section-footer'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import { SectionWrapper } from "./style";
import ScrollView from "@/base-ui/scroll-view";

const HomeSectionV2 = memo((props) => {
  const { infoData } = props
  console.log(infoData)
  return (
    <SectionWrapper className="content">
      <div className="good-price">
        <SectionHeader title={infoData.title} subtitle={infoData.subtitle}></SectionHeader>
        <ScrollView></ScrollView>
        <SectionRooms roomList={infoData.dest_list['佛山']} itemWidth="33.3333%"></SectionRooms>
        <SectionFooter ></SectionFooter>
      </div>
    </SectionWrapper>
  );
});

HomeSectionV2.propTypes = {
  infoData: PropTypes.object
};

export default HomeSectionV2;
