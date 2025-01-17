import { themeMd, theme } from '../common/theme'
import { colorMd, color } from '../common/color'
import { paddingMd, padding } from '../common/padding'
import { tooltipMd, tooltip } from '../common/tooltip'
import { eventMd, event } from '../common/event'
import dataMd from './data.md?raw'
import typeMd from './type.md?raw'
import directionMd from './direction.md?raw'
import symbolSizeMd from './symbolSize.md?raw'
import lineTypeMd from './lineType.md?raw'
import initialTreeDepthMd from './initialTreeDepth.md?raw'

const data = {
    dataset: [
        theme,
        padding,
        tooltip,
        ['data', '图表数据', 'array', '无'],
        ['type', '树图类型', 'string', '无'],
        ['direction', '线性树图起点方向', 'string', 'left'],
        ['symbolSize', '树图图元大小', 'number', '10'],
        ['lineType', '线性树图连线形状', 'string', 'curve'],
        ['initialTreeDepth', '树图初始展开层级', 'number', '1'],

    ],
    markdown: [
        themeMd,
        paddingMd,
        tooltipMd,
        dataMd,
        typeMd,
        directionMd,
        symbolSizeMd,
        lineTypeMd,
        initialTreeDepthMd,
    ],
};


export default data;