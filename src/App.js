import './App.css';
import React, { useEffect, useState } from "react";

import { Space, Table, Tag, Form, Input, Button, Tooltip, Modal } from 'antd';
import { parse } from 'marked';
const { TextArea } = Input;

const columns = [
  {
    title: '营业执照',
    dataIndex: 'business',
    key: 'business',
    render: text => <a>{text}</a>,
  },
  {
    title: '银行卡号',
    dataIndex: 'card',
    key: 'card',
  },
  {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '手机号',
    dataIndex: 'mobile',
    key: 'mobile',
  },
  {
    title: '固定电话',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: '身份证',
    dataIndex: 'idcard',
    key: 'idcard',
  },
  {
    title: '电子邮箱',
    dataIndex: 'email',
    key: 'email',
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
];

const headerList1 = [
  {
    title: '姓名',
    dataIndex: 'business',
    key: 'business',
    // render: (text, record, index) => {
    //   return <Tooltip placement="top" title={text}>
    //   { text }
    // </Tooltip>
    // }
  }
]

const resourceList1 = [
  {
    business:"王明",
  },
  {
    business:"陈小姐"
  },
  {
    business:"王明"
  },
  {
    business:"王明"
  },
];

const data = [{key:"1",business:"510030200123456124117004186056214",card:"137691748506217003860010905220",address:"New York No. 1 Lake Park",tags:["陈盼","李登权"]},{key:"2",business:"510030200123456124117004186056214",card:"137197700716212263602118776830",address:"London No. 1 Lake Park",tags:["李小姐"]},{key:"3",card:"Joe Black",business:32,address:"Sidney No. 1 Lake Park",tags:["cool","teacher"]}];

const styles = {
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
  const [inputList, setNameInput] = useState([]);
  const [headerList, setHeaderInput] = useState(columns);
  const [resourceList, setResourceInput] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [form] = Form.useForm();
  useEffect(() => {
    setTimeout(() => {
      const cpInput = localStorage.getItem('cp_input')
      if (cpInput) {
        setNameInput(JSON.parse(cpInput))
      }
      // const cpHeader = localStorage.getItem('cp_header')
      // if (cpHeader) {
      //   console.log('header', JSON.parse(cpHeader))
      //   setHeaderInput(JSON.parse(cpHeader))
      // }
      const cpResouce = localStorage.getItem('cp_resouce')
      if (cpResouce) {
        setResourceInput(JSON.parse(cpResouce))
        form.setFieldsValue({
          resource: cpResouce
        })
      } else {
        setResourceInput(data)
        form.setFieldsValue({
          resource: JSON.stringify(data)
        })
      }
    }, 2000)
  }, [])
  const createMarkup = () => {
    return {__html: parse(`
李淑芬 410102199003071310、河北省安阳市金山屯区宝山路32号真新六街坊、021-6258000、
吴威德 350781196403077349、广东省安顺市南岔区安远路195号爱里舍花园、0551-4422984
王圣义、350781196403077445、贵州省安顺市平坝区贵发小区公共服务站、0552-6026886
黄娇旭、110101200203074186、广东省汕尾市海丰县海城镇新园5巷177号 、0939-8718333
朱宜欣、110101200203077408、湖北省武汉市洪山区和平街道徐东二路欧洲花园、
陈振江、110101200203077782、浙江省 杭州市 体育场路238号
郭智强、150102199003074315、杭州市下城区华中路附近、0755-83938000
许翰芸、410102199003070975、浙江省金华市东阳市江北街道北鹿西街750号
钱雯升、41010219900307081X、浙江省温州市江滨西路深发商住楼1幢201室
陈柏德、110101200203073845、广东省深圳市宝安区留仙一路高新奇二期1号楼3B09
谢文祥、410102199003079216、江苏省无锡市新吴区香山名园8-603
陈婉君、150102199003074331、江西省上饶市广丰区丰溪街道南屏路水南超市后面快递站
林玉桦、110101200203073087、广东省潮州市潮安县江东镇圆通快递站点
隆馨妤、150102199003075553、河北省邢台市柏乡县王家庄乡路口馒头房对面
刘伦齐、150102199003077436、山东省青岛市李沧区永清路51号菜鸟驿站
张珊郁、150102199003076054、湖北省武汉市洪山区和平街道徐东大街欧洲花园11栋
王妙睿、350781196403079045、山东省青岛市李沧区升平新城
泮珍
候文杰
党天龙
官礼金
强治民
彭水玉
令狐绍辉
高小岗
李谦挣
向江林
261 10不对 姓名96%
15位身份证 511702800222130
 qq邮箱：wanggl_878420@foxmail.com 
网易邮箱：150****3279@163.com
95555ad@message.cmbchina.com 、13550347892@163.cm
xjjxtrxy@szfudeli.com
王先生、8先生、蓝天、白云
啦@啦啦、123@456
12345678900、13500000000
 拉拉省啊啊市某某街道88号
345874632181912

不应该的蒙层：
台州经济开发区小郡肝串串香餐饮店 台州经济开发区会被蒙起来
中华人民共和国 会被蒙起来
发票代码：033002100411 代码会被蒙起来
不应该的蒙层：
台州经济开发区小郡肝串串香餐饮店 台州经济开发区会被蒙起来
中华人民共和国 会被蒙起来
这个跟产品核对过了
处理成了地址
合理
靳君瑞查看了沈涛的手机号
靳君瑞查看了沈涛的手机号
靳君瑞查看了沈涛的手机号
+86-18968106819
​​​
Shift + Enter 换行

银行卡号：622143637362712

营业执照
510030200123456
124117004186056214
工商注册号
110000450007248


固话
88123490
0553-7123420
0553-74123430
05537412340
055397123420
0107471234
01037412340
010-7412340
010-37123420
4006-8899-23


手机号
13812346152 
+8613812346152
86-13812346152
8613812346152

341182199703081215
招商银行
15225453394
6214836123502607
- 
李涯
53011219780130161X
中国建设银行
13769174850
6217003860010905220
-
- 
李涯
53011219780130161X
中国建设银行
13769174850
6217003860010905220
- 
李涯
53011219780130161X
中国建设银行
13769174850
6217003860010905220
-
- 
李涯
53011219780130161X
中国建设银行
13769174850
6217003860010905220
-
- 
余文武
440233199508282055
中国工商银行
13719770071
6212263602118776830
-
- 
王雯
360602198510051048
中国建设银行
13870009673
6227002071110113372 
-
-
黄江璐
362201198506230426
中国建设银行
13407055335
6227002100090207829 
-
- 
郑小闯
36253119891205205X
中国建设银行
13879161016
6217002020031698640


台胞证号码:0099730503(B)
台胞证号码:0099710503(B)

`)};
  }

  const onFinish = (values) => {
    console.log('Success:', values);
    const cpInput = localStorage.getItem('cp_input') || '[]'
    const jsonCpInput = JSON.parse(cpInput);
    if (values.name) {
      jsonCpInput.push({
        name: values.name
      })
    }
    localStorage.setItem('cp_input', JSON.stringify(jsonCpInput));
  };
  const onFinishtable = (values) => {
    console.log('values.resource', values.resource)
    localStorage.setItem('cp_resouce', values.resource);
  };

  return (
    <div style={styles.authority}>
      <Button type="primary" onClick={showModal}>Primary Button</Button>
      <Modal title="陈盼测试密码二次填充" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password id="basic_password" />
        </Form.Item>
      </Modal>
      <Table columns={headerList1} rowKey="index" dataSource={resourceList1} pagination={{
        pageSize: 2
      }} />

      <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="输入项"
          name="name"
        >
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            保存后刷新
          </Button>
        </Form.Item>
      </Form>
      <div>
        下面的是输入项生成的
        {
          inputList.map(li => (
            <div key={li.name}>{ li.name }</div>
          ))
        }
      </div>
      </div>
      <div dangerouslySetInnerHTML={createMarkup()} />
      <div style={{paddingBottom: '100px'}}>
      </div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinishtable}
        autoComplete="off"
        form={form}
      >
        <Form.Item
          label="表格内容"
          name="resource"
        >
          <TextArea/>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            保存后刷新
          </Button>
        </Form.Item>
      </Form>
      <Table columns={headerList} dataSource={resourceList} />
    </div>
  );
}

export default App;
