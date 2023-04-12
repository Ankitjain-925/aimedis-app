import styled from "@emotion/styled";

export const Styles = styled.div`
 .container{
    max-height:600px;
    overflow: auto; 
    position:relative;
 }
  .table {
    .header {
        position: -webkit-sticky;
        position: sticky;
        width: -webkit-fit-content;
        width: -moz-fit-content;
        top: 0;
        box-shadow: 0px 3px 3px #ccc;
        width: fit-content;
    }
    .th,
      overflow: hidden;  
      :last-child {
        border-right: 0;
      }
    }

    &.sticky {
      overflow: scroll;
      .header,
      .footer {
        position: sticky;
        z-index: 1;
        width: fit-content;
      }

      .header {
        top: 0;
        box-shadow: 0px 3px 3px #ccc;
      }

      .footer {
        bottom: 0;
        box-shadow: 0px -3px 3px #ccc;
      }

      .body {
        position: relative;
        z-index: 0;
      }

      [data-sticky-td] {
        position: sticky;
      }

      [data-sticky-last-left-td] {
        box-shadow: 2px 0px 3px #ccc;
      }

      [data-sticky-first-right-td] {
        box-shadow: -2px 0px 3px #ccc;
      }
    }
  }

.chakra-ui-dark button.rdrStaticRange span {
  color: white;
  background: #000;
}
.chakra-ui-dark .rdrDateDisplayWrapper {
  background-color: rgb(15 15 16);
}

.chakra-ui-dark .rdrDateDisplayItem input {
  color: #f4f5f6;
  background: #3b3b3b;
}
.chakra-ui-dark .rdrMonthAndYearWrapper {
  background: #3b3b3b;
}
.chakra-ui-dark .rdrDefinedRangesWrapper {
  background: #000;
}
.chakra-ui-dark button.rdrStaticRange :hover {
  background: #3b3b3b !important;
}
.chakra-ui-dark .rdrMonthPicker select,.chakra-ui-dark .rdrYearPicker select{
  color: #fff
}
.chakra-ui-dark .rdrMonths.rdrMonthsHorizontal{
  background: #333;
}
.chakra-ui-dark .rdrDayNumber span {
  color: #fff;
}
.chakra-ui-dark .rdrInputRangeInput:hover {
  border-color: rgb(180, 191, 196);
  outline: 0;
  color: #fff;
}
.updownArrow {
  float: right;
} 
.rdrDateDisplayWrapper{
  z-index: 1;
}
`;
