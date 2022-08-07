/* eslint-disable react/jsx-no-duplicate-props */
import { useState } from "react";
import { Map, MapMarker, Polyline } from "react-kakao-maps-sdk";
import {
  kwanAk1,
  kwanAk2,
  kwanAk3,
  kwanAk4,
  kwanAk5,
  kwanAk6,
  kwanAk7,
  kwanAk8,
  kwanAk9,
  kwanAk10,
  kwangkyo1,
} from "./data";

const centerCoordinate = (arr) => {
  return Math.floor(arr.length / 2);
};

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Map
      center={{ lat: 37.44317753410403, lng: 126.96469024457357 }}
      style={{ width: "1000px", height: "1000px" }}
    >
      {/* <MapMarker
        position={{ lat: 37.44317753410403, lng: 126.96469024457357 }}
      ></MapMarker> */}
      {/* 광교산 */}
      <Polyline
        path={[
          { lat: 37.29, lng: 127.03 },
          { lat: 37.33, lng: 127.01 },
        ]}
        strokeWeight={5} // 선의 두께 입니다
        strokeColor={"black"} // 선의 색깔입니다
        strokeOpacity={0.7} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle={"solid"} // 선의 스타일입니다
      />
      <Polyline
        path={[
          kwangkyo1.map((coordinate) => {
            return { lat: coordinate[1], lng: coordinate[0] };
          }),
        ]}
        strokeWeight={5} // 선의 두께 입니다
        strokeColor={"red"} // 선의 색깔입니다
        strokeOpacity={0.7} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle={"solid"} // 선의 스타일입니다
      />

      {/* 관악산 */}
      <Polyline
        path={[
          { lat: 37.44, lng: 126.94 },
          { lat: 37.48, lng: 126.98 },
        ]}
        strokeWeight={5} // 선의 두께 입니다
        strokeColor={"black"} // 선의 색깔입니다
        strokeOpacity={0.7} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle={"solid"} // 선의 스타일입니다
      />
      <Polyline
        path={[
          kwanAk1.map((coordinate) => {
            return { lat: coordinate[1], lng: coordinate[0] };
          }),
        ]}
        strokeWeight={5} // 선의 두께 입니다
        strokeColor={"red"} // 선의 색깔입니다
        strokeOpacity={0.7} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle={"solid"} // 선의 스타일입니다
      />
      <MapMarker
        position={{
          lat: kwanAk1[centerCoordinate(kwanAk1)][1],
          lng: kwanAk1[centerCoordinate(kwanAk1)][0],
        }}
      ></MapMarker>
      <Polyline
        path={[
          kwanAk2.map((coordinate) => {
            return { lat: coordinate[1], lng: coordinate[0] };
          }),
        ]}
        strokeWeight={5} // 선의 두께 입니다
        strokeColor={"#FFAE00"} // 선의 색깔입니다
        strokeOpacity={0.7} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle={"solid"} // 선의 스타일입니다
      />
      <MapMarker
        position={{
          lat: kwanAk2[centerCoordinate(kwanAk2)][1],
          lng: kwanAk2[centerCoordinate(kwanAk2)][0],
        }}
        clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
        onClick={() => setIsOpen(true)}
      >
        {isOpen && (
          <div style={{ minWidth: "150px", height: "50px" }}>
            <img
              alt="close"
              width="14"
              height="13"
              src="https://t1.daumcdn.net/localimg/localimages/07/mapjsapi/2x/bt_close.gif"
              style={{
                position: "absolute",
                right: "5px",
                top: "5px",
                cursor: "pointer",
              }}
              onClick={() => setIsOpen(false)}
            />
            <div style={{ padding: "5px", color: "#000" }}>
              난이도: 하 <br /> 총 거리: 4,620m
            </div>
          </div>
        )}
      </MapMarker>
      <Polyline
        path={[
          kwanAk3.map((coordinate) => {
            return { lat: coordinate[1], lng: coordinate[0] };
          }),
        ]}
        strokeWeight={5} // 선의 두께 입니다
        strokeColor={"blue"} // 선의 색깔입니다
        strokeOpacity={0.7} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle={"solid"} // 선의 스타일입니다
      />
      <MapMarker
        position={{
          lat: kwanAk3[centerCoordinate(kwanAk3)][1],
          lng: kwanAk3[centerCoordinate(kwanAk3)][0],
        }}
      ></MapMarker>
      <Polyline
        path={[
          kwanAk4.map((coordinate) => {
            return { lat: coordinate[1], lng: coordinate[0] };
          }),
        ]}
        strokeWeight={5} // 선의 두께 입니다
        strokeColor={"blue"} // 선의 색깔입니다
        strokeOpacity={0.7} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle={"solid"} // 선의 스타일입니다
      />
      <MapMarker
        position={{
          lat: kwanAk4[centerCoordinate(kwanAk4)][1],
          lng: kwanAk4[centerCoordinate(kwanAk4)][0],
        }}
      ></MapMarker>
      <Polyline
        path={[
          kwanAk5.map((coordinate) => {
            return { lat: coordinate[1], lng: coordinate[0] };
          }),
        ]}
        strokeWeight={5} // 선의 두께 입니다
        strokeColor={"green"} // 선의 색깔입니다
        strokeOpacity={0.7} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle={"solid"} // 선의 스타일입니다
      />
      <MapMarker
        position={{
          lat: kwanAk5[centerCoordinate(kwanAk5)][1],
          lng: kwanAk5[centerCoordinate(kwanAk5)][0],
        }}
      ></MapMarker>
      <Polyline
        path={[
          kwanAk6.map((coordinate) => {
            return { lat: coordinate[1], lng: coordinate[0] };
          }),
        ]}
        strokeWeight={5} // 선의 두께 입니다
        strokeColor={"#a85432"} // 선의 색깔입니다
        strokeOpacity={0.7} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle={"solid"} // 선의 스타일입니다
      />
      <MapMarker
        position={{
          lat: kwanAk6[centerCoordinate(kwanAk6)][1],
          lng: kwanAk6[centerCoordinate(kwanAk6)][0],
        }}
      ></MapMarker>
      <Polyline
        path={[
          kwanAk7.map((coordinate) => {
            return { lat: coordinate[1], lng: coordinate[0] };
          }),
        ]}
        strokeWeight={5} // 선의 두께 입니다
        strokeColor={"#a8a832"} // 선의 색깔입니다
        strokeOpacity={0.7} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle={"solid"} // 선의 스타일입니다
      />{" "}
      <MapMarker
        position={{
          lat: kwanAk7[centerCoordinate(kwanAk7)][1],
          lng: kwanAk7[centerCoordinate(kwanAk7)][0],
        }}
      ></MapMarker>
      <Polyline
        path={[
          kwanAk8.map((coordinate) => {
            return { lat: coordinate[1], lng: coordinate[0] };
          }),
        ]}
        strokeWeight={5} // 선의 두께 입니다
        strokeColor={"#32a84a"} // 선의 색깔입니다
        strokeOpacity={0.7} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle={"solid"} // 선의 스타일입니다
      />{" "}
      <MapMarker
        position={{
          lat: kwanAk8[centerCoordinate(kwanAk8)][1],
          lng: kwanAk8[centerCoordinate(kwanAk8)][0],
        }}
      ></MapMarker>
      <Polyline
        path={[
          kwanAk9.map((coordinate) => {
            return { lat: coordinate[1], lng: coordinate[0] };
          }),
        ]}
        strokeWeight={5} // 선의 두께 입니다
        strokeColor={"#32a6a8"} // 선의 색깔입니다
        strokeOpacity={0.7} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle={"solid"} // 선의 스타일입니다
      />{" "}
      <MapMarker
        position={{
          lat: kwanAk9[centerCoordinate(kwanAk9)][1],
          lng: kwanAk9[centerCoordinate(kwanAk9)][0],
        }}
      ></MapMarker>
      <Polyline
        path={[
          kwanAk10.map((coordinate) => {
            return { lat: coordinate[1], lng: coordinate[0] };
          }),
        ]}
        strokeWeight={5} // 선의 두께 입니다
        strokeColor={"#a8325b"} // 선의 색깔입니다
        strokeOpacity={0.7} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle={"solid"} // 선의 스타일입니다
      />
      <MapMarker
        position={{
          lat: kwanAk10[centerCoordinate(kwanAk10)][1],
          lng: kwanAk10[centerCoordinate(kwanAk10)][0],
        }}
      ></MapMarker>
    </Map>
  );
};

export default App;
