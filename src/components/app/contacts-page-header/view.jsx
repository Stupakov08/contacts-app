import './style.scss';
import React from 'react';
import { Col, Row, Typography, Button, Tooltip, Space } from 'antd';
import {
  ReloadOutlined,
  AppstoreOutlined,
  LoadingOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';

const { Title } = Typography;

const View = ({
  loading,
  switchToTiledMode,
  switchToTabularMode,
  getContactsStart,
  tabularMode,
  routeName,
}) => {
  const ReloadButton = loading ? LoadingOutlined : ReloadOutlined;

  const switchMode = (mode) => (e) => {
    if (mode === tabularMode) return;
    mode ? switchToTabularMode() : switchToTiledMode();
  };

  const reload = () => {
    !loading && getContactsStart();
  };

  return (
    <Row align="middle" className={'page-header'}>
      <Col flex={'auto'}>
        <Title level={1}>{routeName}</Title>
      </Col>
      <Col flex="0 1 150px" className={'page-header__switcher'}>
        <Space size={'small'}>
          <Tooltip title={'Update data'}>
            <Button
              type={'dashed'}
              shape={'circle'}
              icon={<ReloadButton />}
              onClick={reload}
            />
          </Tooltip>
          <div>
            <Tooltip title={'Tiled view'}>
              <Button
                icon={<AppstoreOutlined />}
                type={!tabularMode ? 'primary' : 'default'}
                onClick={switchMode(false)}
              ></Button>
            </Tooltip>
            <Tooltip title={'Tabular view'}>
              <Button
                icon={<UnorderedListOutlined />}
                type={tabularMode ? 'primary' : 'default'}
                onClick={switchMode(true)}
              ></Button>
            </Tooltip>
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export { View };
