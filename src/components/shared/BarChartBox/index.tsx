import React from 'react'
import * as S from './styles'

import formatCurrency from 'utils/formatCurrency'

import { ResponsiveContainer, Bar, BarChart, Cell, Tooltip } from 'recharts'

interface IBarChartBox {
  title: string
  data: {
    name: string
    amount: number
    percent: number
    color: string
  }[]
}

const BarChartBox: React.FC<IBarChartBox> = ({ title, data }) => (
  <S.Container>
    <S.LeftSide>
      <h3>{title}</h3>
      <S.LegendContainer>
        {data.map((indicator, i) => (
          <S.Legend key={i} color={indicator.color}>
            <div>{indicator.percent}%</div>
            <span>{indicator.name}</span>
          </S.Legend>
        ))}
      </S.LegendContainer>
    </S.LeftSide>
    <S.RightSide>
      <ResponsiveContainer>
        <BarChart data={data}>
          <Bar dataKey="amount" name="Valor">
            {data.map((indicator, i) => (
              <Cell key={i} fill={indicator.color} />
            ))}
          </Bar>
          <Tooltip
            formatter={(value: number) => formatCurrency(Number(value))}
            cursor={{ fill: 'none' }}
          />
        </BarChart>
      </ResponsiveContainer>
    </S.RightSide>
  </S.Container>
)

export default BarChartBox
