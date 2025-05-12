<template>
  <div class="test-com-page">
    <div class="m-echarts-trend-container">
      <echart-trend
        :option="option4"
        :tabs="tabs"
        type="lineSqure"
        :class-style="classStyle"
        @choose="choose"
      />
    </div>
    <echart-trend
      :option="option3"
      :tabs="tabs"
      type="arera"
      :class-style="classStyle"
      @choose="choose"
    />
    <echart-trend
      :option="option2"
      :tabs="tabs"
      type="squre"
      :class-style="classStyle"
      @choose="choose"
    />
    <echart-trend
      :option="option1"
      :tabs="tabs"
      type="line"
      :tabs-type="tabsType"
      :class-style="classStyle"
      @choose="choose"
    />
    <echart-trend
      :option="option5"
      :tabs="tabs"
      type="stacked"
      :tabs-type="tabsType"
      :class-style="classStyle"
      @choose="choose"
    />
    <echart-trend
      :option="option5"
      :tabs="tabs"
      type="stacked"
      :stacked-round="stackedRound"
      :tabs-type="tabsType"
      :class-style="classStyle"
      @choose="choose"
    />
    <echart-trend
      :option="option7"
      :tabs="tabs"
      type="lineStacked"
      :class-style="classStyle"
      @choose="choose"
    />
    <echart-trend
      :option="option8"
      :stacked-round="stackedRound2"
      :tabs="tabs"
      type="lineStacked"
      :class-style="classStyle"
      @choose="choose"
    />
  </div>
</template>

<script>

export default {
  data() {
    return {
      stackedRound: true,
      stackedRound2: true,
      hasLegend: false,
      tabsType: 'select',
      tabs: [{ label: 'Tab1', value: '1' }, { label: 'Tab2', value: '2' }, { label: 'Tab3', value: '3' }, { label: 'Tab4', value: '4' }],
      type: 'line', // line \ squre \  arera \ lineSqure
      classStyle: {
        width: '100%',
        height: '300px'
      },
      // 折线图
      option1: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', null, undefined],
          // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', null, 'Sun', null, undefined, 'Mon'],
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            // data: [120, 200, 150, 80, 70, 110, 130, null, null, undefined, 156],
            // data: [120, 20000000, 150, null, null, -10000, undefined, 156],
            type: 'line'
          }
        ]
      },
      // 柱状图
      option2: {
        xAxis: {
          type: 'category',
          // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'mayou', 'laoren', 'Mon', '55555']
          // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', null, undefined],
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            // data: [120, 200, 150, 80, 70, 110, 130],
            data: [120, 200, 150, 80, 70, 110, -100, 130, 200, 300, 120, 156],
            type: 'bar',
            name: '柱状图'
          }
        ]
      },
      // 面积图
      option3: {
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'Email',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
            // data: [120, 132, 101, 134, 90, 230, 210000214, null, undefined, 1560003232, -1000000323]
          },
          {
            name: 'Union Ads',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: 'Video Ads',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: 'Direct',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: 'Search Engine',
            type: 'line',
            stack: 'Total',
            label: {
              show: true,
              position: 'top'
            },
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      },
      // 折线与柱状图混合
      option4: {
        xAxis: [
          {
            type: 'category',
            // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', null, undefined, 'Mon', '55555'],
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        // tips: 需要根据自己环境处理  min\max\interval等数值（max\min 最好是interval的倍数）
        yAxis: [
          {
            type: 'value',
            name: 'Precipitation',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
              formatter: '{value} ml'
            }
          },
          {
            type: 'value',
            name: 'Temperature',
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
              formatter: '{value} °C'
            }
          }
        ],
        // tips: 2个柱状 + 1个折线 （按需设置个数）
        series: [
          {
            name: 'Evaporation',
            type: 'bar',
            tooltip: {
              valueFormatter: function(value) {
                return value + ' ml'
              }
            },
            data: [
              2.0, 4.9, 7.0, 23.2, 45.6, 76.7, 33.6, 16.2, 32.6, 20.0, 6.4, 3.3
            ]
          },
          {
            name: 'Precipitation',
            type: 'bar',
            tooltip: {
              valueFormatter: function(value) {
                return value + ' ml'
              }
            },
            data: [
              2.6, 5.9, 9.0, 26.4, 48.7, 0.7, 17.6, 18.2, 48.7, 18.8, 6.0, 2.3
            ]
          },
          {
            name: 'Temperature',
            type: 'line',
            yAxisIndex: 1,
            tooltip: {
              valueFormatter: function(value) {
                return value + ' °C'
              }
            },
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
          }
        ]
      },
      // 堆积图
      option5: {
        xAxis: [
          {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'Email',
            type: 'bar',
            stack: 'AdS',
            emphasis: {
              focus: 'series'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: 'Union Ads',
            type: 'bar',
            stack: 'AdS',
            emphasis: {
              focus: 'series'
            },
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: 'Video Ads',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: 'Search Engine',
            type: 'bar',
            stack: 'Ad',
            data: [862, 1018, 964, 1026, 1679, 1600, 1570],
            emphasis: {
              focus: 'series'
            }
          },
          {
            name: 'Baidu',
            type: 'bar',
            barWidth: 5,
            stack: 'Search Engine',
            emphasis: {
              focus: 'series'
            },
            data: [620, 732, 701, 734, 1090, 1130, 1120]
          },
          {
            name: 'Google',
            type: 'bar',
            stack: 'Search Engine2',
            emphasis: {
              focus: 'series'
            },
            data: [120, 132, 101, 134, 290, 230, 220]
          }
        ]
      },
      // 单独堆积图
      option6: {
        xAxis: [
          {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'Email',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: 'Union Ads',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: 'Video Ads',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: 'Search Engine',
            type: 'bar',
            stack: 'Ad',
            data: [862, 1018, 964, 1026, 1679, 1600, 1570],
            emphasis: {
              focus: 'series'
            }
          },
          {
            name: 'Baidu',
            type: 'bar',
            barWidth: 5,
            stack: 'Search Engine',
            emphasis: {
              focus: 'series'
            },
            data: [620, 732, 701, 734, 1090, 1130, 1120]
          },
          {
            name: 'Google',
            type: 'bar',
            stack: 'Search Engine',
            emphasis: {
              focus: 'series'
            },
            data: [120, 132, 101, 134, 290, 230, 220]
          }
        ]
      },
      // 堆积图 + 折线图
      option7: {
        xAxis: [
          {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'Email',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: [120, 132, 101, 134, 90, 230, 210],
            itemStyle: {
              borderWidth: 0, // 将边框宽度设为0
              width: 0 // 将折线宽度设为0
            }
          },
          {
            name: 'Union Ads',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: 'Video Ads',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: 'Search Engine',
            type: 'bar',
            data: [862, 1018, 964, 1026, 1679, 1600, 1570],
            emphasis: {
              focus: 'series'
            },
            markLine: {
              lineStyle: {
                type: 'dashed'
              },
              data: [[{ type: 'min' }, { type: 'max' }]]
            }
          },
          {
            name: 'Baidu',
            type: 'bar',
            barWidth: 5,
            stack: 'Search Engine',
            emphasis: {
              focus: 'series'
            },
            data: [620, 732, 701, 734, 1090, 1130, 1120]
          },
          {
            name: 'Google',
            type: 'bar',
            stack: 'Search Engine',
            emphasis: {
              focus: 'series'
            },
            data: [120, 132, 101, 134, 290, 230, 220]
          },
          {
            name: 'Baidu2',
            type: 'line',
            barWidth: 0,
            stack: 'Search Engine',
            emphasis: {
              focus: 'series'
            },
            data: [620, 732, 701, 734, 1090, 1130, 1120]
          },
          {
            name: 'Google3',
            type: 'line',
            stack: 'Search Engine',
            emphasis: {
              focus: 'series'
            },
            data: [120, 132, 101, 134, 290, 230, 220]
          }
        ]
      },
      // 单独堆积图 + 折线图
      option8: {
        xAxis: [
          {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'Email',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: [120, 132, 101, 134, 90, 230, 210],
            itemStyle: {
              borderWidth: 0, // 将边框宽度设为0
              width: 0 // 将折线宽度设为0
            }
          },
          {
            name: 'Union Ads',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: 'Video Ads',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: 'Search Engine',
            type: 'bar',
            data: [862, 1018, 964, 1026, 1679, 1600, 1570],
            emphasis: {
              focus: 'series'
            },
            markLine: {
              lineStyle: {
                type: 'dashed'
              },
              data: [[{ type: 'min' }, { type: 'max' }]]
            }
          },
          {
            name: 'Baidu',
            type: 'bar',
            barWidth: 5,
            stack: 'Search Engine',
            emphasis: {
              focus: 'series'
            },
            data: [620, 732, 701, 734, 1090, 1130, 1120]
          },
          {
            name: 'Google',
            type: 'bar',
            stack: 'Search Engine',
            emphasis: {
              focus: 'series'
            },
            data: [120, 132, 101, 134, 290, 230, 220]
          },
          {
            name: 'Baidu2',
            type: 'line',
            barWidth: 0,
            stack: 'Search Engine',
            emphasis: {
              focus: 'series'
            },
            data: [620, 732, 701, 734, 1090, 1130, 1120]
          },
          {
            name: 'Google3',
            type: 'line',
            stack: 'Search Engine',
            emphasis: {
              focus: 'series'
            },
            data: [120, 132, 101, 134, 290, 230, 220]
          },
          {
            name: 'Google5',
            type: 'line',
            stack: 'Search Engine',
            emphasis: {
              focus: 'series'
            },
            data: [110, 122, 111, 64, 150, 270, 290]
          }
        ]
      }
    }
  },
  created() {
    this.option1.series[0].type = this.type // 在created钩子函数中，根据a的值设置b的值
  },
  methods: {
    choose(val) {
      console.log(val)
    }
  }
}
</script>

<style lang="scss" scoped>
.m-echarts-trend-container {
  height: 400px;
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
