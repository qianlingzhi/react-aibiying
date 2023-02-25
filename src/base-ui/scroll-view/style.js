import styled from "styled-components";

export const ScrollViewWrapper =styled.div`
  position: relative;
  padding: 8px 0;
  .scroll {
    overflow: hidden;
    background-color: #cccccc;
    
    .scroll-content {
      display: flex;
      flex-shrink: 0;
      .addr-item {
        padding: 12px 20px;
        border: 1px solid #D8D8D8;
        margin-right: 20px;
        white-space: nowrap;
      }
    }
  }
`