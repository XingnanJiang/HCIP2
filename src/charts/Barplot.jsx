import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function GroupedBarChart({ data }) {
  const ref = useRef();

  useEffect(() => {
    if (data && data.length) {
      // Define chart dimensions and margins
      const width = 960;
      const height = 500;
      const margin = { top: 20, right: 30, bottom: 40, left: 90 };

      // Select the SVG element and clear it to prevent redrawing issues
      const svg = d3.select(ref.current);
      svg.selectAll("*").remove();

      // Define scales
      const x0 = d3.scaleBand()
        .domain(data.map(d => d.Race))
        .rangeRound([margin.left, width - margin.right])
        .paddingInner(0.1);

      const x1 = d3.scaleBand()
        .domain(['Women', 'Men'])
        .rangeRound([0, x0.bandwidth()])
        .padding(0.05);

      const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d['Measure Values'])])
        .nice()
        .range([height - margin.bottom, margin.top]);

      const color = d3.scaleOrdinal()
        .domain(['Women', 'Men'])
        .range(["#ff8c00", "#6b486b"]);

      // Add bars
      const raceData = Array.from(
        d3.group(data, d => d.Race), 
        ([key, value]) => ({ key, value })
      );

      raceData.forEach(group => {
        svg.append("g")
          .attr("transform", `translate(${x0(group.key)},0)`)
          .selectAll("rect")
          .data(group.value)
          .join("rect")
            .attr("x", d => x1(d['Measure Names']))
            .attr("y", d => y(d['Measure Values']))
            .attr("width", x1.bandwidth())
            .attr("height", d => y(0) - y(d['Measure Values']))
            .attr("fill", d => color(d['Measure Names']));
      });

      // Add axes
      svg.append("g")
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x0));

      svg.append("g")
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(y));
    }
  }, [data]);

  return (
    <svg ref={ref} width={960} height={500}></svg>
  );
}

export default GroupedBarChart;
