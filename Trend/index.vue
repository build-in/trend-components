<template>
  <div class="m-trend">
    <div ref="trend" class="m-echarts-trend" :style="classStyle" />
    <!-- 按钮组 -->
    <div v-if="tabsType=== 'inline'">
      <div class="m-trend-tabs" :class="tabsType">
        <div class="button-group">
          <button
            v-for="v,i in tabs"
            :key="`${i}-${v.value}`"
            class="btn"
            :class="{ active: isActive === v.value }"
            @click="handleClick(v.value)"
            @mouseenter="handleHover(v.value)"
            @mouseleave="handleLeave(v.value)"
          >
            {{ v.label }}
          </button>
        </div>
      </div>
      <!-- 下拉组 -->
      <div class="m-trend-tabs-min" :style="{ width: (t('__ui__.trend.placeholder').length > 3 ? 150 : 100) + 'px'}">
        <el-select
          v-model="chooseValue"
          size="mini"
          :placeholder="t('__ui__.trend.placeholder')"
          @visible-change="visibleChange"
        >
          <el-option
            v-for="item in tabs"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
    </div>
    <div v-else>
      <div
        class="m-trend-tabs-select"
        :style="{ width: (t('__ui__.trend.placeholder').length > 3 ? 150 : 100) + 'px'}"
      >
        <el-select
          v-model="chooseValue"
          size="mini"
          :placeholder="t('__ui__.trend.placeholder')"
          @visible-change="visibleChange"
        >
          <el-option
            v-for="item in tabs"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
    </div>
  </div>
</template>

<script>
import Locale from '../../../mixins/locale'
import * as echarts from 'echarts/core'
import { BarChart, LineChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import { UniversalTransition } from 'echarts/features'

import {
  TitleComponent,
  TooltipComponent,
  ToolboxComponent,
  GridComponent,
  LegendComponent
} from 'echarts/components'
import { deepMerge } from '../../../utils/merge'

echarts.use([
  GridComponent,
  BarChart,
  LineChart,
  CanvasRenderer,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  LegendComponent,
  UniversalTransition
])

import { DEFAULT_GRID, DEFAULT_TOOLTIP, DEFAULT_ITEM_STYLE, DEFAULT_MOBILE_GRID, IsMobileCombined } from './const'

export default {
  name: 'Trend',
  mixins: [Locale],
  props: {
    option: {
      type: Object,
      default: () => ({})
    },
    tabs: {
      type: Array,
      default: () => []
    },
    tabsType: {
      type: String,
      default: 'inline'
    },
    choose: {
      type: Function,
      default: () => {}
    },
    type: {
      type: String,
      default: 'bar'
    },
    classStyle: {
      type: Object,
      default: () => ({})
    },
    hasLegend: {
      type: Boolean,
      default: true
    },
    stackedRound: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      selectedCurrency: '',
      chooseValue: '',
      myChart: null,
      isChartDisposed: false, // 用于标记图表是否已经被销毁
      isActive: this.chooseValue, // 记录当前激活的按钮标识
      hoverButton: null // 记录鼠标悬停的按钮标识
    }
  },
  mounted() {
    this.init()
    this.handleResize()
  },
  beforeDestroy() {
    if (this.myChart) {
      window.removeEventListener('resize', () => {
        if (this.myChart) {
          this.myChart.resize()
        }
      })
      this.myChart.dispose()
      this.isChartDisposed = true
    }
  },
  methods: {
    init() {
      const option = deepMerge({
        tooltip: DEFAULT_TOOLTIP,
        legend: this.setlegend(),
        grid: this.setGrid()
      }, this.option)
      option.series = option.series.map(item => {
        return deepMerge(DEFAULT_ITEM_STYLE, item)
      })
      if (this.type === 'stacked' || this.type === 'lineStacked') {
        if (this.stackedRound) {
          option.series = this.setStackedWithRound(this.option.series)
        }
      }

      this.myChart = echarts.init(this.$refs.trend)
      this.myChart.setOption(option)
    },
    setStackedWithRound(series) {
      if (!series || series.length === 0) {
        return series
      }
      if (series.length === 1) {
        series[0].itemStyle = {
          borderRadius: [20, 20, 0, 0]
        }
      } else {
        series.forEach((item, index) => {
          if (item.type === 'bar') {
            item.stack = 'stacked'
            item.barWidth = 14
            item.itemStyle = {
              borderRadius: [0, 0, 0, 0]
            }
          }
        })
        const lastBarIndex = series
          .reduce((lastIndex, item, index) => {
            return item.type === 'bar' ? index : lastIndex
          }, -1)
        if (lastBarIndex !== -1) {
          series[lastBarIndex].itemStyle = {
            borderRadius: [20, 20, 0, 0]
          }
        }
      }
      return series
    },
    setGrid() {
      if (this.type === 'arera' || this.type === 'lineSqure' || this.type === 'stacked' || this.type === 'lineStacked') {
        if (IsMobileCombined()) {
          return DEFAULT_MOBILE_GRID
        } else {
          return DEFAULT_GRID
        }
      } else {
        return null
      }
    },
    setlegend() {
      if (this.hasLegend) {
        return {
          data: this.option?.series?.filter(item => item.name !== undefined)?.map(item => item.name) || [],
          bottom: this.type === 'lineSqure' ? 0 : '2%' // 将图例放在底部
        }
      } else {
        return null
      }
    },
    handleResize() {
      window.addEventListener('resize', () => {
        if (this.myChart && !this.isChartDisposed) {
          this.myChart.resize()
        }
      })
    },
    visibleChange(val) {
      if (val === false) {
        this.chooseItem(this.chooseValue)
        this.isActive = this.chooseValue
      }
    },
    chooseItem(item) {
      if (typeof item === 'object' && item.value) {
        this.chooseValue = item.value
        this.$emit('choose', item.value)
      } else {
        this.chooseValue = item
        this.$emit('choose', item)
      }
    },
    handleClick(type) {
      this.isActive = type
      this.hoverButton = null
      this.chooseItem(type)
    },
    handleHover(type) {
      if (!this.isActive) {
        this.hoverButton = type
      }
    },
    handleLeave() {
      if (!this.isActive) {
        this.hoverButton = null
      }
    }
  }
}
</script>
