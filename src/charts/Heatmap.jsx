import React, { useEffect } from 'react';
import * as d3 from 'd3';

function Heatmap() {
  useEffect(() => {

    d3.select("#my_dataviz").selectAll("*").remove();
    // 设置图表的边距和尺寸
    const margin = { top: 30, right: 30, bottom: 30, left: 30 },
          width = 450 - margin.left - margin.right,
          height = 450 - margin.top - margin.bottom;

    // 在 div#heatmap 中添加 SVG 元素
    const svg = d3.select("#heatmap")
                  .append("svg")
                  .attr("width", width + margin.left + margin.right)
                  .attr("height", height + margin.top + margin.bottom)
                  .append("g")
                  .attr("transform", `translate(${margin.left},${margin.top})`);

    // 定义行和列的标签
    const myGroups = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    const myVars = ["v1", "v2", "v3", "v4", "v5", "v6", "v7", "v8", "v9", "v10"];

    // 构建 X 轴的比例尺和轴
    const x = d3.scaleBand()
                .range([ 0, width ])
                .domain(myGroups)
                .padding(0.01);
    svg.append("g")
       .attr("transform", `translate(0, ${height})`)
       .call(d3.axisBottom(x));

    // 构建 Y 轴的比例尺和轴
    const y = d3.scaleBand()
                .range([ height, 0 ])
                .domain(myVars)
                .padding(0.01);
    svg.append("g")
       .call(d3.axisLeft(y));

    // 构建颜色比例尺
    const myColor = d3.scaleLinear()
                     .range(["white", "#69b3a2"])
                     .domain([1,100]);

    // 使用模拟数据
    const data = [];
    myGroups.forEach((group) => {
      myVars.forEach((variable) => {
        data.push({
          group: group,
          variable: variable,
          value: Math.floor(Math.random() * 100) + 1 // 随机值
        });
      });
    });

    // 绘制热力图
    svg.selectAll()
       .data(data, function(d) { return d.group+':'+d.variable; })
       .join("rect")
       .attr("x", function(d) { return x(d.group) })
       .attr("y", function(d) { return y(d.variable) })
       .attr("width", x.bandwidth() )
       .attr("height", y.bandwidth() )
       .style("fill", function(d) { return myColor(d.value); });

  }, []);

  return (
      <div id="heatmap"></div>
  );
}

export default Heatmap;
