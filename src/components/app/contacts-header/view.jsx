import './style.scss';
import React from 'react';
import { Form, Row, Col, Button } from 'antd';
import { Field } from 'redux-form';
import { Search, Select, Input, Checkbox } from 'components';

const View = (props) => {
  const { handleSubmit, anyTouched } = props;

  const onFinish = (data) => {};
  return (
    <Form
      name="contacts"
      className={'contacts-form'}
      layout="horizontal"
      onFinish={handleSubmit(onFinish)}
    >
      <Row align={'middle'}>
        <Col span={10}>
          <Field
            name="firstName"
            component={Search}
            inputProps={{ size: 'large', placeholder: 'First Name' }}
          />
        </Col>
        <Col span={4}>
          <Field
            name="gender"
            component={Select}
            inputProps={{ size: 'large', placeholder: 'Gender' }}
          >
            {({ Option }) => (
              <>
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Indeterminate</Option>
              </>
            )}
          </Field>
        </Col>
        <Col span={4}>
          <Field
            name="nationality"
            component={Input}
            inputProps={{ size: 'large', placeholder: 'Nationality' }}
          />
        </Col>
        <Col span={3}>
          <Field name="creator" component={Checkbox}>
            I am creator
          </Field>
        </Col>
        <Col span={3} style={{ textAlign: 'right' }}>
          <Button type="link" disabled={anyTouched ? false : true}>
            X Clear
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export { View };
