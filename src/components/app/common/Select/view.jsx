import React from 'react';
import { Form, Select as AntSelect } from 'antd';
const { Option } = AntSelect;

export const Select = ({ input, inputProps, children, ...rest }) => {
  return (
    <Form.Item {...rest}>
      <AntSelect {...input} {...inputProps} value={input.value || undefined}>
        {children({ Option })}
      </AntSelect>
    </Form.Item>
  );
};
