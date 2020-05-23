import React from 'react'
import Highcharts, { Options } from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

interface Props {
  width?: string
  height?: string
  options?: Options
}

function TimeSeriesChart(props: Props) {
  const options = {
    chart: {
      zoomType: 'x',
      width: props.width!,
      height: props.height!
    },
    title: {
      text: ''
    },
    xAxis: {
      type: '',
      labels: {
        enabled: false
      }
    },
    yAxis: {
      title: {
        text: ''
      },
      labels: {
        enabled: false
      }
    },
    legend: {
      enabled: false
    },
    series: [
      {
        type: 'area',
        name: '',
        data: [
          [1167609600000, 0.6537],
          [1167696000000, 0.7037],
          [1167782400000, 0.7559],
          [1167868800000, 0.7731],
          [1167955200000, 0.8244],
          [1168387200000, 0.8117],
          [1168473600000, 0.8003],
          [1168560000000, 0.7957],
          [1168819200000, 0.7828],
          [1168905600000, 0.7721],
          [1168992000000, 0.7748],
          [1169078400000, 0.974],
          [1169164800000, 0.9618],
          [1169424000000, 0.9231],
          [1169510400000, 0.907],
          [1169596800000, 0.897],
          [1169683200000, 0.8706],
          [1169769600000, 0.8652],
          [1170028800000, 0.8774],
          [1170115200000, 0.8571],
          [1170201600000, 0.8221],
          [1170288000000, 0.8081],
          [1170374400000, 0.7781],
          [1170633600000, 0.7338],
          [1170720000000, 0.702],
          [1170806400000, 0.6901],
          [1170892800000, 0.6599]
        ]
      }
    ],
    credits: {
      enabled: false
    }
  }
  return <HighchartsReact highcharts={Highcharts} options={props.options! || options} />
}

export { TimeSeriesChart }
