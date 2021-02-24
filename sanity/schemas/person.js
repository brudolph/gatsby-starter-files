import { MdPerson as icon } from 'react-icons/md';

export default {
  name: 'person',
  title: 'Slicemaster',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'description',
      title: 'Bio',
      type: 'text',
      description: 'Tell us about the slicemaster',
    },
    {
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
