import { AreaChartOutlined } from '@ant-design/icons';
import { Col, Row, Table } from 'antd';
import './index.css';
import TrendChart from "./components/trendChart"
import ConsistChart from "./components/consistChart"

import sourceData from "./sourceData.json";
const { productData, areaData } = sourceData;
const columns = [
  { title: '投资主体', dataIndex: 'investor', key: 'investor' },
  { title: '2019Q2', dataIndex: '2019Q2', key: '2019Q2' },
  { title: '2019Q3', dataIndex: '2019Q3', key: '2019Q3' },
  { title: '2019Q4', dataIndex: '2019Q4', key: '2019Q4' },
  { title: '2020Q1', dataIndex: '2020Q1', key: '2020Q1' },
  { title: '2020Q2', dataIndex: '2020Q2', key: '2020Q2' },
  { title: '2020Q3', dataIndex: '2020Q3', key: '2020Q3' },
  { title: '2020Q4', dataIndex: '2020Q4', key: '2020Q4' },
  { title: '2021Q1', dataIndex: '2021Q1', key: '2021Q1' },
];

const tableTitle = (title) => {
  return (
    <div className="tableTitle">
      <div onClick={() => selectTable(title)}>
        <span>{ title }</span>
        <AreaChartOutlined />
      </div>
    </div>
  )
}

let activeTableName = "产品";
const selectTable = (title) => {
  if (activeTableName === title) return;
  activeTableName = title;
}

function dataAnalysis() {
  return (
    <div className="dataAnalysis">
      <Row>
        <Col span={12}>
          <ConsistChart props={areaData}/>
        </Col>
        <Col span={12}>

          <TrendChart props={productData}/>
        </Col>
      </Row>
      <Table
        class={activeTableName}
        size="small"
        columns={columns}
        dataSource={productData}
        bordered
        title={() => tableTitle('产品')}
        pagination={false}
      />
      <Table
        size="small"
        columns={columns}
        dataSource={areaData}
        bordered
        title={() => tableTitle('地区')}
        pagination={false}
      />
    </div>
  );
}

export default dataAnalysis;
