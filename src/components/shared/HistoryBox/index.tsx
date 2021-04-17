import React from 'react'
import * as S from './styles'

import formatCurrency from 'utils/formatCurrency'

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip
} from 'recharts'

interface IHistoryBoxProps {
  data: {
    month: string
    amountEntry: number
    amountOutput: number
  }[]
  lineColorAmountEntry: string
  lineColorAmountOutput: string
}

const HistoryBox: React.FC<IHistoryBoxProps> = ({
  data,
  lineColorAmountEntry,
  lineColorAmountOutput
}) => (
  <S.Container>
    <S.Header>
      <h2>Histórico de saldo</h2>

      <S.LegendContainer>
        <S.Legend color={lineColorAmountEntry}>
          <div></div>
          <span>Entradas</span>
        </S.Legend>
        <S.Legend color={lineColorAmountOutput}>
          <div></div>
          <span>Saídas</span>
        </S.Legend>
      </S.LegendContainer>
    </S.Header>
    <S.ChartContainer>
      <ResponsiveContainer height={202.44}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis dataKey="month" stroke="#ccc" />
          <Tooltip
            formatter={(value: number) => formatCurrency(Number(value))}
          />
          <Line
            type="monotone"
            dataKey="amountEntry"
            name="Entradas"
            stroke={lineColorAmountEntry}
            strokeWidth={5}
            dot={{ r: 5 }}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="amountOutput"
            name="Saídas"
            stroke={lineColorAmountOutput}
            strokeWidth={5}
            dot={{ r: 5 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </S.ChartContainer>
  </S.Container>
)

export default HistoryBox
