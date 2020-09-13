import React from 'react';
import { Avatar, Typography, Tag } from 'antd';
import { NavLink } from 'react-router-dom';
import * as dayjs from 'dayjs';
import { NATIONALITIES } from 'constants/nationalities';

const { Paragraph } = Typography;
const fullName = ({ title, first, last }) =>
  [`${title}.`, last, first].join(' ');

export const columns = [
  {
    title: 'Avatar',
    dataIndex: 'picture',
    key: 'picture',
    render: (picture) => (
      <Avatar size={42} src={`${picture.thumbnail}`}></Avatar>
    ),
  },
  {
    title: 'Full Name',
    dataIndex: 'name',
    key: 'name',
    render: ({ title, first, last }, record) => (
      <NavLink to={`${record.id.value}`}>
        {fullName({ title, first, last })}
      </NavLink>
    ),
    sorter: {
      compare: (a, b) => {
        a = fullName({
          title: a.name.title,
          first: a.name.first,
          last: a.name.last,
        });
        b = fullName({
          title: b.name.title,
          first: b.name.first,
          last: b.name.last,
        });

        if (a === b) return 0;
        if (a > b) return 1;
        return -1;
      },
    },
  },
  {
    title: 'Birthday',
    dataIndex: 'dob',
    key: 'dob',
    render: ({ date, age }) => (
      <>
        <div>{dayjs(date).format('dddd, D/M/YYYY, h:m:s A')}</div>
        <div>{age} years</div>
      </>
    ),
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    render: (text) => (
      <Paragraph copyable className={'copiable-left'}>
        <a href={`mailto:${text}`}>{text}</a>
      </Paragraph>
    ),
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
    render: (text) => (
      <Paragraph copyable className={'copiable-left'}>
        <a href={`tel:${text}`}>{text}</a>
      </Paragraph>
    ),
  },
  {
    title: 'Location',
    dataIndex: 'location',
    key: 'location',
    render: ({ country, street, city, state, postcode }) => (
      <Paragraph copyable className={'copiable-left'}>
        <div>
          <div className={'copiable-left--bold'}>/{country}/</div>
          <div>
            {street.number} {street.name}, {city}, {state} {country} {postcode}
          </div>
        </div>
      </Paragraph>
    ),
  },
  {
    title: 'Nationality',
    dataIndex: 'nat',
    key: 'nat',
    render: (nat) => (
      <span>
        {NATIONALITIES[nat] && (
          <Tag color={NATIONALITIES[nat].color || 'default'}>
            {NATIONALITIES[nat].name}
          </Tag>
        )}
      </span>
    ),
    align: 'right',
  },
];
