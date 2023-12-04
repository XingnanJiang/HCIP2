import React, { useEffect } from 'react';

function DatawrapperChart() {
  useEffect(() => {
    // 定义事件监听器函数
    const handleResizeMessage = (event) => {
      // 检查消息是否为 Datawrapper 发出
      if (typeof event.data === "object" && event.data["datawrapper-height"]) {
        const iframe = document.getElementById("datawrapper-chart-pUJAc");
        if (iframe.contentWindow === event.source) {
          const height = event.data["datawrapper-height"];
          iframe.style.height = height + "px";
        }
      }
    };

    // 添加事件监听器
    window.addEventListener("message", handleResizeMessage);

    // 清理函数：组件卸载时移除事件监听器
    return () => window.removeEventListener("message", handleResizeMessage);
  }, []);

  return (
    <iframe
      title="[ Insert title here ]"
      aria-label="Interactive line chart"
      id="datawrapper-chart-pUJAc"
      src="https://datawrapper.dwcdn.net/Gtku1/1/"
      style={{ width: '100%', border: 'none' }}
      height="800"
      data-external="1">
    </iframe>
  );
}

export default DatawrapperChart;
