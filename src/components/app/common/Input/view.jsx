import React from 'react';
import { Form, Input as AntInput } from 'antd';

export const Input = ({ input, inputProps, children, ...rest }) => {
  return (
    <Form.Item {...rest}>
      <AntInput {...input} {...inputProps} value={input.value || undefined} />
    </Form.Item>
  );
};
