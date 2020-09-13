import React from 'react';
import { Form, Checkbox as AntCheckbox } from 'antd';

export const Checkbox = ({ input, inputProps, children, ...rest }) => {
  return (
    <Form.Item {...rest}>
      <AntCheckbox {...input} {...inputProps} value={input.value || undefined}>
        {children}
      </AntCheckbox>
    </Form.Item>
  );
};
