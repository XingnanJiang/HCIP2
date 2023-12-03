import React, { useEffect } from 'react';
import * as d3 from 'd3';

function BarChart() {
  useEffect(() => {
    d3.select("#my_dataviz").selectAll("*").remove();
    // 设置图表的边距和尺寸
    const margin = { top: 30, right: 30, bottom: 70, left: 60 },
          width = 460 - margin.left - margin.right,
          height = 400 - margin.top - margin.bottom;

    // 在 div#my_dataviz 中添加 SVG 元素
    const svg = d3.select("#my_dataviz")
                  .append("svg")
                  .attr("width", width + margin.left + margin.right)
                  .attr("height", height + margin.top + margin.bottom)
                  .append("g")
                  .attr("transform", `translate(${margin.left},${margin.top})`);

    // 模拟数据
    const data = [
      { Country: "Country A", Value: 10000 },
      { Country: "Country B", Value: 12000 },
      { Country: "Country C", Value: 15000 },
      { Country: "Country D", Value: 8000 },
      { Country: "Country E", Value: 7600 },
      { Country: "Country F", Value: 11000 },
      { Country: "Country G", Value: 9800 }
    ];

    // X 轴
    const x = d3.scaleBand()
                .range([ 0, width ])
                .domain(data.map(d => d.Country))
                .padding(0.2);
    svg.append("g")
       .attr("transform", `translate(0, ${height})`)
       .call(d3.axisBottom(x))
       .selectAll("text")
         .attr("transform", "translate(-10,0)rotate(-45)")
         .style("text-anchor", "end");

    // Y 轴
    const y = d3.scaleLinear()
                .domain([0, 13000])
                .range([ height, 0]);
    svg.append("g")
       .call(d3.axisLeft(y));

    // 条形图
    svg.selectAll("mybar")
       .data(data)
       .join("rect")
         .attr("x", d => x(d.Country))
         .attr("y", d => y(d.Value))
         .attr("width", x.bandwidth())
         .attr("height", d => height - y(d.Value))
         .attr("fill", "#69b3a2");

  }, []);

  return (
    <div id="my_dataviz"></div>
  );
}

export default BarChart;
