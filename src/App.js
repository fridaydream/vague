import './App.css';
import React, { useEffect, useState } from "react";

import { Space, Table, Tag } from 'antd';

const columns = [
  {
    title: 'sss',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '客户名称',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    name: '陈盼',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['陈盼', '李登权'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['李小姐'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const styles = {
  authority: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    zIndex: 9999999,
    position: 'absolute',
    width: '100vw',
    height: '100vh',
    backgroundColor: '#fff',
  },
  img: {
    width: '280px'
  },
  title: {
    fontSize: '16px',
    fontWeight: 700,
    color: 'rgba(1,20,58,0.9000)',
    paddingTop: '24px',
  },
  tip: {
    fontSize: '12px',
    fontWeight: 400,
    color: 'rgba(1,20,58,0.3000)',
    paddingTop: '8px',
  },
  btn: {
    marginTop: '24px',
  }
}

function App() {
  const [newdata, setData] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setData(data)
    }, 10000)
  }, [])
  return (
    <div style={styles.authority}>
      <Table columns={columns} dataSource={newdata} />
    </div>
  );
}

export default App;
