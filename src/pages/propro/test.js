
import React from 'react';
import ReactDOM from 'react-dom';
import './style/test.css';
import {
  LocaleProvider,
  Pagination,
  DatePicker,
  TimePicker,
  Calendar,
  Popconfirm,
  Table,
  Modal,
  Button,
  Select,
  Transfer,
  Radio,
} from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('en');

const { Option } = Select;
const { RangePicker } = DatePicker;

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'filter1',
        value: 'filter1',
      },
    ],
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
];



class Page extends React.Component {
  state = {
    visible: false,
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  hideModal = () => {
    this.setState({ visible: false });
  };

  render() {
    const info = () => {
      Modal.info({
        title: 'some info',
        content: 'some info',
      });
    };
    const confirm = () => {
      Modal.confirm({
        title: 'some info',
        content: 'some info',
      });
    };
    return (
      <div className="locale-components">
        <div className="example">
          <Pagination defaultCurrent={1} total={50} showSizeChanger />
        </div>
        <div style={{ width: 319, border: '1px solid #d9d9d9', borderRadius: 4 }}>
          <Calendar fullscreen={false} value={moment()} />
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      locale: null,
    };
  }

  changeLocale = e => {
    const localeValue = e.target.value;
    this.setState({ locale: localeValue });
    if (!localeValue) {
      moment.locale('en');
    } else {
      moment.locale('zh-cn');
    }
  };

  render() {
    const { locale } = this.state;
    return (
      <div>
        <div className="change-locale">
          <span style={{ marginRight: 16 }}>Change locale of components: </span>
          <Radio.Group defaultValue={undefined} onChange={this.changeLocale}>
            <Radio.Button key="en" value={undefined}>
              English
            </Radio.Button>
            <Radio.Button key="cn" value={zhCN}>
              中文
            </Radio.Button>
          </Radio.Group>
        </div>
        <LocaleProvider locale={locale}>
          <Page
            key={locale ? locale.locale : 'en' /* Have to refresh for production environment */}
          />
        </LocaleProvider>
      </div>
    );
  }
}

export default App;
