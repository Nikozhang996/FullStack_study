import Reasct, {Component} from 'react';
import ListItem from './ListItem';

export default class List extends Component {
  render() {
    <div>
      {
        this.props.users.map((item, index) => {
          return (
            <ListItem
              {...item}
              key={index}
              removeById={this.props.removeById}
            ></ListItem>
          );
        })
      }
    </div>;
  }
}
;