import React from 'react';
import { Form, Input } from 'antd';
const { Search: AntSearch } = Input;

export const Search = ({ input, inputProps, children, ...rest }) => {
  return (
    <Form.Item {...rest}>
      <AntSearch {...input} {...inputProps} value={input.value || undefined} />
    </Form.Item>
  );
};
