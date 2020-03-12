import React, { Component } from 'react';
import { Sticky, Tab } from 'semantic-ui-react';
import BlogList from './BlogList';

const panes = [
  {
    menuItem: 'Projects',
    render: () => <BlogList />,
  },
  {
    menuItem: 'Tab 2',
    render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
  },
  {
    menuItem: 'Tab 3',
    render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
  },
]


class BlogHeader extends Component {
  render() {
    return (
      <div class="blog-header-padder">
        <Tab style={{position: 'sticky'}} menu={{ secondary: true, pointing: true }} panes={panes} />
      </div>
    )
  }
}

export default BlogHeader;
