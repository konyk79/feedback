import styled from "styled-components";

export const MainSection = styled.div`
  position: relative;
  width: 1440px;
  height: 1128px;
  margin: auto;
  background: #ffffff;
  overflow: hidden;
`;
export const Smile1 = styled.div`
  position: absolute;
  left: 3.17%;
  right: 90.7%;
  top: 3.6%;
  bottom: 88.79%;
  /* background-color: red; */
  background: url("./img/red_cartoon_4.png") no-repeat center center/cover;
  transform: rotate(-35.19deg);
`;
export const Clouds = styled.div`
  position: absolute;
  left: -6.39%;
  right: 4.39%;
  top: 8.95%;
  bottom: 13.32%;
  background: url("./img/Cloud1.png") no-repeat right;
`;
export const Goodie1 = styled.div`
  position: absolute;
  width: 127px;
  height: 127px;
  left: 763px;
  top: 516px;
  z-index: 2;
  background: url("./img/goodie1.png") no-repeat right;
`;
export const Smile2 = styled.div`
  position: absolute;
  left: 804px;
  top: 603px;
  height: 208px;
  width: 214px;
  border-radius: 0px;
  z-index: 1;
  background: url("./img/red_cartoon_3.png") no-repeat center center;
  transform: matrix(0.74, -0.67, 0.67, 0.74, 0, 0);
`;
export const Map = styled.div`
  position: absolute;
  width: 976px;
  height: 976px;
  left: 814px;
  top: -52px;
  background: url("./img/map.png") no-repeat left bottom;
`;
export const Circle = styled.div`
  position: absolute;
  width: 87px;
  height: 87px;
  left: 714px;
  top: 21px;
  border-radius: 50%;
  background: #fad34f;
  opacity: 0.1;
`;
