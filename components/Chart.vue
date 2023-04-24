<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  data() {
    return {
      chartData: {
        labels: [
          "1383",
          "1384",
          "1385",
          "1386",
          "1387",
          "1388",
          "1389",
          "1383",
          "1384",
          "1385",
          "1386",
          "1387",
          "1388",
          "1389",
          "1383",
          "1384",
          "1385",
          "1386",
          "1387",
          "1388",
          "1389",
        ],
        datasets: [
          {
            label: "Numbers",
            backgroundColor: (ctx) => {
              const canvas = ctx.chart.ctx;
              const gradient = canvas.createLinearGradient(0, 0, 0, 170);

              gradient.addColorStop(0, "#72ABF0");
              gradient.addColorStop(1, "rgba(114, 171, 240, 0) ");

              return gradient;
            },
            borderColor: "#3EC5EF",
            borderRadius: "50px",
            data: [
              10, 35, 40, 25, 20, 10, 20, 35, 30, 25, 30, 35, 40, 35, 30, 25,
              20, 20, 25, 30, 10,
            ],
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        elements: {
          point: {
            radius: 0,
          },
        },
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: true,
                color: "#333333",
              },
              ticks: {
                fontColor: "white",
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
                color: "#333333",
              },
              ticks: {
                stepSize: 10,
                min: 0,
                max: 45,
                fontColor: "white",
                callback: (value, index, values) =>
                  index == values.length - 6 ? undefined : value,
              },
            },
          ],
        },
      },
    };
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
};
</script>
