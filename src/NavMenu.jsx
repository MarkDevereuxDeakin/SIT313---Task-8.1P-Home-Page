//https://react.semantic-ui.com/collections/menu/#types-tabular-on-top - accessed 22/09/2021
import React, { Component } from 'react'
import { Button, Input, Menu, Segment } from 'semantic-ui-react'

export default class MenuExampleTabularOnTop extends Component {
  state = { activeItem: 'iService' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu attached='top' tabular>
          <Menu.Item
            name='iService'
            active={activeItem === 'iService'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Post a Task'
            active={activeItem === 'Post a Task'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Become an Expert'
            active={activeItem === 'Become an Expert'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Find Tasks'
            active={activeItem === 'Find Tasks'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='How it Works'
            active={activeItem === 'How it Works'}
            onClick={this.handleItemClick}
          />
          <Menu.Item>
            <Button primary>Sign In</Button>
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input
                transparent
                icon={{ name: 'search', link: true }}
                placeholder='Search Experts or Tasks...'
              />
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <Segment attached='bottom'>
          <img src='https://picsum.photos/1080/500' />
        </Segment>
      </div>
    )
  }
}
