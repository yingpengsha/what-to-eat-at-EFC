import { Map, APILoader } from "@uiw/react-baidu-map";

function App() {
  return (
    <div className="max-w-xl p-8 flex flex-col gap-50">
      <div className="relative pb-[100%] box-border">
        <div className="absolute top-0 left-0 right-0 bottom-0 rounded-xl shadow-xl shadow-light-400 overflow-hidden" id="map-container">
          <APILoader akay={import.meta.env.VITE_BAIDU_MAP_AK}>
            <Map center="杭州 EFC" />
          </APILoader>
        </div>
      </div>
    </div>
  );
}

export default App;
