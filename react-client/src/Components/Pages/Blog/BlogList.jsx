import React, { Component } from 'react';
import { List, Tab } from 'semantic-ui-react';

class BlogList extends Component {
  render() {
    return (
      <ul class="blog-list">
        <div class="blog-list-item">
          <li>
            <Tab.Pane>
              <List size="massive">
                <List.Item>
                  <List.Icon name='github' size='large' verticalAlign='middle' />
                  <List.Content>
                    <List.Header as='a'>Semantic-Org/Semantic-UI</List.Header>
                    <List.Description as='a'>Updated 10 mins ago</List.Description>
                  </List.Content>
                </List.Item>
              </List>
            </Tab.Pane>
          </li>
        </div>
        <div class="blog-list-item">
          <li>
            <Tab.Pane>
              <List size="massive">
                <List.Item>
                  <List.Icon name='github' size='large' verticalAlign='middle' />
                  <List.Content>
                    <List.Header as='a'>Semantic-Org/Semantic-UI</List.Header>
                    <List.Description as='a'>Updated 10 mins ago</List.Description>
                  </List.Content>
                </List.Item>
              </List>
            </Tab.Pane>
          </li>
        </div>
        <div class="blog-list-item">
          <li>
            <Tab.Pane>
              <List size="massive">
                <List.Item>
                  <List.Icon name='github' size='large' verticalAlign='middle' />
                  <List.Content>
                    <List.Header as='a'>Semantic-Org/Semantic-UI</List.Header>
                    <List.Description as='a'>Updated 10 mins ago</List.Description>
                  </List.Content>
                </List.Item>
              </List>
            </Tab.Pane>
          </li>
        </div>
      </ul>
    )
  }
}

export default BlogList;
