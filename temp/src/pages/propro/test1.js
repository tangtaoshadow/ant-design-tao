import { Card } from 'antd';
import {FormattedMessage, FormattedHTMLMessage} from 'react-intl';


export default () => {
  const style = {
    width: '400px',
    margin: '30px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    border: '1px solid #e8e8e8',
  };
  
  
  return (

    <div >

      <Card style={style} actions={[<a>操作一</a>, <a>操作二</a>]}>
        <Card.Meta
          avatar={<img 
            alt=""
            style={{ width: '64px', height: '64px', borderRadius: '32px' }}
            src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png"
          />}
          title="Alipay"
          description="1111111111111111111111在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。"
        />
      </Card>
      <p>
            <FormattedHTMLMessage id="app.text" />
        </p>
        <a className="App-link" href="https://www.woaihdu.top" target="_blank" rel="noopener noreferrer">
            <FormattedMessage id="app.learn-react-link" />
        </a>
    </div>

   
  );
}