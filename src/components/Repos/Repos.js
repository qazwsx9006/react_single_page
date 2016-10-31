import React from 'react';

// const Repos = (props) => (
//   <div>
//     <h3>Repos</h3>
//     <h5>{props.params.name}</h5>
//   </div>
// );

// Repos.propTypes = {
//   params: React.PropTypes.object,
// };

class Repos extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <h3>Repos</h3>
        <h5>{this.props.params.name}</h5>
      </div>
    )
  }
}

Repos.propTypes = {
  params: React.PropTypes.object,
};

export default Repos;
