import { Dispatch, SetStateAction, useCallback, useEffect } from "react";
import Image from "next/image";

interface MarkersProps {
  map: any;
  stores: any[];
  setCurrentStore: Dispatch<SetStateAction<any>>;
}

export default function Markers({
  map,
  stores,
  setCurrentStore,
}: MarkersProps) {
  const loadKakaoMarkers = useCallback(() => {
    if (map) {
      // 식당 데이터 마커
      stores?.map((store) => {
        // 마커 이미지 경로
        const imageSrc = store?.bizcnd_code_nm
          ? `/images/markers/${store?.bizcnd_code_nm}.png`
          : `/images/markers/default.png`;
        const imageSize = new window.kakao.maps.Size(40, 40);
        const imageOption = { offset: new window.kakao.maps.Point(27, 69) };

        // 마커 이미지 생성
        const markerImage = new window.kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption
        );

        // 마커가 표시될 위치
        const markerPosition = new window.kakao.maps.LatLng(
          store?.y_dnts,
          store?.x_cnts
        );

        // 마커 생성
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
          image: markerImage,
        });

        // 마커를 지도에 표시
        marker.setMap(map);

        // 마커 커서가 오버되었을 때 마커 위에 표시할 인포윈도우 생성
        const content = `<div class="infowindow">${store?.upso_nm}</div>`; // 인포윈도우에 표시될 내용

        // 커스텀 오버레이 생성
        const customOverlay = new window.kakao.maps.CustomOverlay({
          position: markerPosition,
          content: content,
          xAnchor: 0.6,
          yAnchor: 0.91,
        });

        // 마커에 마우스아웃 이벤트를 등록
        window.kakao.maps.event.addListener(marker, "mouseover", () => {
          customOverlay.setMap(map);
        });

        // 마커에 마우스오버 이벤트를 등록
        window.kakao.maps.event.addListener(marker, "mouseout", () => {
          customOverlay.setMap(null);
        });

        // 선택한 가게 저장
        window.kakao.maps.event.addListener(marker, "click", () => {
          setCurrentStore(store);
        });
      });
    }
  }, [stores, map, setCurrentStore]);

  useEffect(() => {
    loadKakaoMarkers();
  }, [loadKakaoMarkers]);

  return <div>Markers</div>;
}
