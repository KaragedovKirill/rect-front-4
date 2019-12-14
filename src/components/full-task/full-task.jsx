import React from 'react';
import tomorrowRequest from '../../api/tomorrow';

class FullTask extends React.Component {
  state = { title: '', completed: '' };

  async componentDidMount() {
    console.log(this.props);
    const { data } = await tomorrowRequest.get(
      `/tasks/${this.props.match.params.taskId}`
    );

    this.setState({
      title: data.data.title,
      completed: String(data.data.completed)
    });
  }

  render() {
    return (
      <div className='full-task'>
        <h1>{this.state.title}</h1>
        <h2>{this.state.completed}</h2>
      </div>
    );
  }
}

export default FullTask;
