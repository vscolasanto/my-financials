import * as S from './styles'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

interface IPieChartBox {
  data: {
    name: string
    value: number
    percent: number
    color: string
  }[]
}

const PieChartBox: React.FC<IPieChartBox> = ({ data }) => (
  <S.Container>
    <S.LeftSide>
      <h3>Relação</h3>
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
        <PieChart>
          <Pie data={data} labelLine={false} dataKey="percent">
            {data.map((indicator) => (
              <Cell key={indicator.name} fill={indicator.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </S.RightSide>
  </S.Container>
)

export default PieChartBox
